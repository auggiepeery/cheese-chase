// Cheese Chase multiplayer server: serves the static client AND runs authoritative races over WebSockets.
// Game logic lives in src/core.js, shared with the browser (solo/split-screen modes + client prediction).
//   PORT=8797 node server.js      (Render sets PORT automatically)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import * as Core from './src/core.js';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 8797;
const MAX_PLAYERS = 8;
const STATIC = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/index.html': ['index.html', 'text/html; charset=utf-8'],
  '/cheese-chase.html': ['cheese-chase.html', 'text/html; charset=utf-8'],
  '/config.js': ['config.js', 'text/javascript; charset=utf-8'],
  '/js/game.js': ['js/game.js', 'text/javascript; charset=utf-8'],
};
const rooms = new Map();

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    return res.end(JSON.stringify({ ok: true, rooms: rooms.size, players: [...rooms.values()].reduce((n, r) => n + r.players.size, 0) }));
  }
  if (url.pathname === '/favicon.ico') { res.writeHead(204); return res.end(); }
  const entry = STATIC[url.pathname];
  if (!entry) { res.writeHead(404, { 'content-type': 'text/plain' }); return res.end('not found'); }
  fs.readFile(path.join(ROOT, entry[0]), (err, data) => {
    if (err) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'content-type': entry[1], 'cache-control': 'no-cache' });
    res.end(data);
  });
});

let nextId = 1;
function makeCode() {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; let c;
  do { c = Array.from({ length: 4 }, () => A[Math.floor(Math.random() * A.length)]).join(''); } while (rooms.has(c));
  return c;
}
const send = (ws, m) => { if (ws && ws.readyState === 1) ws.send(typeof m === 'string' ? m : JSON.stringify(m)); };
function broadcast(room, m) { const s = JSON.stringify(m); for (const p of room.players.values()) send(p.ws, s); }
function lobbyMsg(room) {
  return { t: 'lobby', code: room.code, host: room.hostId, bots: room.bots, phase: room.phase,
    players: [...room.players.values()].map((p) => ({ id: p.id, name: p.name, char: p.char })) };
}
function startMsg(room) {
  const race = room.race;
  return { t: 'start', seed: race.seed, reachBonus: race.reachBonus, racers: race.racers.map((r) => ({ id: r.id, name: r.name, char: r.char, ai: !!r.ai })) };
}
function startRace(room) {
  const seed = (Math.random() * 1e9) | 0;
  const race = Core.createRace(seed);
  race.reachBonus = 0.5; // small lag compensation for human cheese grabs
  const used = new Set();
  for (const p of room.players.values()) { Core.addRacer(race, { id: p.id, name: p.name, char: p.char }); used.add(p.char); p.input = Core.newInput(); p.inRace = true; }
  const names = [...Core.AI_NAMES].sort(() => Math.random() - 0.5);
  const nb = Math.max(0, Math.min(5, room.bots | 0, MAX_PLAYERS - room.players.size));
  for (let i = 0; i < nb; i++) {
    let ch = (Math.random() * Core.CHARACTERS.length) | 0;
    for (let k = 0; k < 20 && used.has(ch); k++) ch = (Math.random() * Core.CHARACTERS.length) | 0;
    used.add(ch);
    Core.addRacer(race, { id: 'bot' + i, name: names[i], char: ch, ai: true });
  }
  race.racers.sort(() => Math.random() - 0.5); race.racers.forEach((r, i) => { r.idx = i; });
  for (const r of race.racers) Core.placeAtStart(race, r);
  room.race = race; room.tick = 0; room.phase = 'racing';
  broadcast(room, startMsg(room));
  broadcast(room, lobbyMsg(room));
}

// authoritative simulation: 30 ticks/s, one compact snapshot per tick
setInterval(() => {
  for (const room of rooms.values()) {
    if (!room.race || room.phase !== 'racing') continue;
    const inputs = new Map();
    for (const p of room.players.values()) inputs.set(p.id, p.input);
    Core.step(room.race, 1 / Core.C.TICK, inputs);
    room.tick++;
    broadcast(room, Core.snapshot(room.race, room.tick));
    if (room.race.phase === 'over' && room.race.overT > 8) { room.phase = 'lobby'; broadcast(room, lobbyMsg(room)); }
  }
}, 1000 / Core.C.TICK);

const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 4096 });
wss.on('connection', (ws) => {
  let room = null, me = null;
  ws.isAlive = true; ws.on('pong', () => { ws.isAlive = true; });
  ws.on('message', (raw) => {
    let m; try { m = JSON.parse(raw); } catch { return; }
    if (!m || typeof m !== 'object') return;
    if (m.t === 'ping') return send(ws, { t: 'pong', c: m.c, ts: Date.now() });
    if (!room) {
      let r;
      if (m.t === 'create') {
        r = { code: makeCode(), players: new Map(), hostId: null, bots: 3, race: null, phase: 'lobby', tick: 0 };
        rooms.set(r.code, r);
      } else if (m.t === 'join') {
        const code = String(m.code || '').toUpperCase().trim();
        r = rooms.get(code);
        if (!r) return send(ws, { t: 'error', msg: `Room ${code || '?'} not found` });
        if (r.players.size >= MAX_PLAYERS) return send(ws, { t: 'error', msg: 'Room is full (8 players max)' });
      } else return;
      me = { id: 'h' + (nextId++), name: String(m.name || 'Runner').replace(/[^\w \-'.!?]/g, '').slice(0, 16) || 'Runner',
        char: Math.abs(m.char | 0) % Core.CHARACTERS.length, ws, input: Core.newInput(), inRace: false };
      r.players.set(me.id, me);
      if (!r.hostId) r.hostId = me.id;
      room = r;
      send(ws, { t: 'welcome', id: me.id, code: room.code });
      broadcast(room, lobbyMsg(room));
      if (room.phase === 'racing' && room.race) send(ws, startMsg(room)); // late joiners spectate the current race
      return;
    }
    switch (m.t) {
      case 'in': {
        const a = Array.isArray(m.i) ? m.i : [];
        const n = (v) => (Number.isFinite(+v) ? +v : 0);
        me.input = { ax: Math.max(-1, Math.min(1, n(a[0]))), f: a[1] ? 1 : 0, b: a[2] ? 1 : 0, d: n(a[3]) | 0, g: n(a[4]) | 0, k: n(a[5]) | 0, j: n(a[6]) | 0, s: a[7] ? 1 : 0 };
        break;
      }
      case 'start':
        if (me.id !== room.hostId) return;
        if (m.bots != null) room.bots = Math.max(0, Math.min(5, m.bots | 0));
        if (room.phase === 'racing' && room.race && room.race.phase !== 'over') return;
        startRace(room);
        break;
      case 'bots':
        if (me.id !== room.hostId) return;
        room.bots = Math.max(0, Math.min(5, m.bots | 0)); broadcast(room, lobbyMsg(room));
        break;
      case 'char':
        me.char = Math.abs(m.char | 0) % Core.CHARACTERS.length; broadcast(room, lobbyMsg(room));
        break;
    }
  });
  ws.on('close', () => {
    if (!room || !me) return;
    room.players.delete(me.id);
    if (room.race) { const r = room.race.racers.find((x) => x.id === me.id); if (r && !r.ai) { r.ai = Core.makeAI(room.race); r.name += ' (AI)'; } }
    if (room.players.size === 0) { rooms.delete(room.code); return; }
    if (room.hostId === me.id) room.hostId = room.players.keys().next().value;
    broadcast(room, lobbyMsg(room));
  });
});
setInterval(() => { for (const ws of wss.clients) { if (!ws.isAlive) { ws.terminate(); continue; } ws.isAlive = false; ws.ping(); } }, 15000);
server.listen(PORT, () => console.log(`Cheese Chase server on http://localhost:${PORT}  (WebSocket path /ws)`));
