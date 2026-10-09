// Starts the server on a spare port, connects two WebSocket clients, runs a race and checks sync.
import { spawn } from 'node:child_process';
import WebSocket from 'ws';
const PORT = 18000 + Math.floor(Math.random() * 1000);
const base = process.argv[2]; // optional: test an already-running server, e.g. https://xyz.onrender.com
const url = base ? base.replace(/^http/, 'ws').replace(/\/$/, '') + '/ws' : `ws://localhost:${PORT}/ws`;
let srv = null;
if (!base) {
  srv = spawn(process.execPath, ['server.js'], { env: { ...process.env, PORT: String(PORT) }, stdio: 'inherit' });
  await new Promise((r) => setTimeout(r, 700));
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function client(name) {
  const ws = new WebSocket(url);
  const c = { ws, msgs: [], snaps: 0, last: null, start: null, lobby: null, welcome: null };
  ws.on('message', (d) => { const m = JSON.parse(d); if (m.t === 's') { c.snaps++; c.last = m; } else c.msgs.push(m); if (m.t === 'start') c.start = m; if (m.t === 'lobby') c.lobby = m; if (m.t === 'welcome') c.welcome = m; });
  c.open = new Promise((r) => ws.on('open', r));
  c.send = (m) => ws.send(JSON.stringify(m));
  return c;
}
let failed = false;
const check = (cond, msg) => { console.log((cond ? 'PASS ' : 'FAIL ') + msg); if (!cond) failed = true; };
try {
  const a = client('A'); await a.open; a.send({ t: 'create', name: 'Alice', char: 2 });
  await sleep(300);
  check(a.welcome && /^[A-Z]{4}$/.test(a.welcome.code), 'room created with 4-letter code ' + (a.welcome && a.welcome.code));
  const b = client('B'); await b.open; b.send({ t: 'join', code: a.welcome.code, name: 'Bob', char: 5 });
  await sleep(300);
  check(b.welcome && a.lobby.players.length === 2, 'second client joined, lobby has 2 players');
  b.send({ t: 'start', bots: 2 }); await sleep(200);
  check(!b.start, 'non-host cannot start');
  a.send({ t: 'start', bots: 2 }); await sleep(300);
  check(a.start && b.start && a.start.racers.length === 4, 'race started for both with 2 humans + 2 bots');
  // both hold "run"
  let n = 0;
  const iv = setInterval(() => { n++; a.send({ t: 'in', i: [0, 1, 0, 0, 0, 0] }); b.send({ t: 'in', i: [0.3, 1, 0, 0, 0, n > 150 ? 1 : 0] }); }, 33);
  await sleep(9000);
  clearInterval(iv);
  check(a.snaps > 200 && b.snaps > 200, `snapshots streaming (~30/s): A=${a.snaps} B=${b.snaps}`);
  const ra = a.last.r.find((r) => r[0] === a.welcome.id), rb = b.last.r.find((r) => r[0] === a.welcome.id);
  check(ra && rb && ra[3] > 5, `host racer moved downhill (z=${ra && ra[3].toFixed(1)}) and both clients see it`);
  check(a.last.c.length >= 10, 'cheese state (position + quaternion + velocity) present');
  const size = JSON.stringify(a.last).length;
  check(size < 2000, `snapshot is compact (${size} bytes)`);
  a.ws.close(); await sleep(400);
  check(b.lobby.host === b.welcome.id, 'host migrates when the host leaves');
  b.ws.close();
} catch (e) { console.error(e); failed = true; }
if (srv) srv.kill();
console.log(failed ? 'net.test FAILED' : 'net.test OK');
process.exit(failed ? 1 : 0);
