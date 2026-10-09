// ---------------------------------------------------------------------------
// Cheese Chase - browser client: rendering, input, UI, offline modes, online client
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import * as Core from './core.js';
import { ST, CHARACTERS, FINISH_Z, height } from './core.js';
import { buildWorld, Particles } from './world.js';
import { RacerView, CheeseView, buildRunner } from './models.js';
import { audio } from './audio.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';

const $ = (s) => document.querySelector(s);
const canvas = $('#c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const world = buildWorld(scene, renderer);
const particles = new Particles(scene, 3000);
const cheeseView = new CheeseView(scene);
const menuCam = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 3000);

// post-processing (single view, high quality only): soft bloom -> tone map -> colour grade -> SMAA.
// Split-screen and low quality render directly; the vignette is a cheap CSS overlay so every mode gets it.
const post = (() => {
  const composer = new EffectComposer(renderer);
  const rp = new RenderPass(scene, menuCam);
  composer.addPass(rp);
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.22, 0.6, 0.92));
  composer.addPass(new OutputPass());
  composer.addPass(new ShaderPass({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); vec3 col = c.rgb;
        float l = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(vec3(l), col, 1.1);                       // a touch more saturation
        col = (col - 0.5) * 1.06 + 0.5;                      // and contrast
        col *= vec3(1.02, 1.0, 0.97);                        // warm grade
        gl_FragColor = vec4(clamp(col, 0.0, 1.0), c.a); }`,
  }));
  const smaa = new SMAAPass(innerWidth * renderer.getPixelRatio(), innerHeight * renderer.getPixelRatio());
  composer.addPass(smaa);
  return { composer, rp, enabled: true };
})();
function renderView(cam) {
  if (post.enabled && quality >= 2) { post.rp.camera = cam; post.composer.render(); }
  else renderer.render(scene, cam);
}

// ---------------------------------------------------------------------------
// input
// ---------------------------------------------------------------------------
// Space = jump (dives automatically when the cheese is just ahead; roll-jumps / gets up mid-tumble), E = context grab
const KEYMAPS = {
  solo: { up: ['KeyW', 'ArrowUp'], down: ['KeyS', 'ArrowDown'], left: ['KeyA', 'ArrowLeft'], right: ['KeyD', 'ArrowRight'], sprint: ['ShiftLeft', 'ShiftRight'], jump: ['Space'], grab: ['KeyE', 'KeyF'] },
  p1: { up: ['KeyW'], down: ['KeyS'], left: ['KeyA'], right: ['KeyD'], sprint: ['ShiftLeft'], jump: ['Space'], grab: ['KeyE'] },
  p2: { up: ['ArrowUp'], down: ['ArrowDown'], left: ['ArrowLeft'], right: ['ArrowRight'], sprint: ['ShiftRight', 'Numpad0'], jump: ['Enter', 'NumpadEnter'], grab: ['Slash', 'Period', 'Numpad1'] },
};
const keys = new Set();
const pressHandlers = [];
addEventListener('keydown', (e) => {
  if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Slash', 'Enter'].includes(e.code) && game.mode) e.preventDefault();
  audio.unlock();
  if (e.code === 'KeyM' && !(e.target && e.target.tagName === 'INPUT')) audio.toggleMute();
  if (!e.repeat) for (const h of pressHandlers) h(e.code);
  keys.add(e.code);
  onKeyUI(e);
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());
class LocalController {
  constructor(map) { this.map = map; this.inp = Core.newInput(); pressHandlers.push((code) => this.press(code)); }
  press(code) {
    if (!this.active) return;
    if (this.map.jump.includes(code)) this.inp.d++;
    if (this.map.grab.includes(code)) this.inp.g++;
  }
  read() {
    const any = (a) => a.some((k) => keys.has(k));
    const m = this.map;
    this.inp.f = any(m.up) ? 1 : 0; this.inp.b = any(m.down) ? 1 : 0; this.inp.s = any(m.sprint) ? 1 : 0;
    this.inp.ax = (any(m.left) ? 1 : 0) - (any(m.right) ? 1 : 0); // camera looks down +z, so screen-left is +x
    return this.inp;
  }
}
// touch / on-screen buttons (basic, for phones): maps to solo controller
function setupTouch(ctrl) {
  const tc = $('#touch');
  if (!('ontouchstart' in window)) return;
  tc.style.display = 'block';
  const bind = (id, down, up) => { const el = $(id); el.addEventListener('touchstart', (e) => { e.preventDefault(); down(); }); el.addEventListener('touchend', (e) => { e.preventDefault(); up && up(); }); };
  bind('#t-left', () => keys.add('KeyA'), () => keys.delete('KeyA'));
  bind('#t-right', () => keys.add('KeyD'), () => keys.delete('KeyD'));
  bind('#t-run', () => keys.add('KeyW'), () => keys.delete('KeyW'));
  bind('#t-brake', () => keys.add('KeyS'), () => keys.delete('KeyS'));
  addEventListener('touchstart', () => audio.unlock(), { passive: true });
  bind('#t-jump', () => ctrl.press('Space'));
  bind('#t-grab', () => ctrl.press('KeyE'));
  bind('#t-sprint', () => { keys.add('ShiftLeft'); keys.add('KeyW'); }, () => { keys.delete('ShiftLeft'); keys.delete('KeyW'); });
}

// ---------------------------------------------------------------------------
// game state
// ---------------------------------------------------------------------------
const game = {
  mode: null,          // 'solo' | 'split' | 'online' | null (menu)
  race: null,          // Core race (offline) or prediction race (online)
  views: [],           // local cameras: {racerId, cam, hud, ctrl, shake, camPos, look}
  racerViews: new Map(),
  acc: 0, resultsShown: false, resultT: 0,
  chars: [0, 1],
  slowT: 0,            // wipeout slow-mo timer (offline only)
  match: null,         // offline best-of-3: { heat, roster, wins, points, done }
};
const controllers = { solo: new LocalController(KEYMAPS.solo), p1: new LocalController(KEYMAPS.p1), p2: new LocalController(KEYMAPS.p2) };
setupTouch(controllers.solo);

function clearRaceViews() {
  for (const v of game.racerViews.values()) v.dispose(scene);
  game.racerViews.clear();
  $('#huds').innerHTML = '';
  game.views = [];
  for (const c of Object.values(controllers)) c.active = false;
}
function makeHud(label, splitIdx, splitCount) {
  const el = document.createElement('div');
  el.className = 'hud';
  if (splitCount === 2) { el.style.left = splitIdx ? '50%' : '0'; el.style.width = '50%'; }
  el.innerHTML = `<div class="hud-tl"><div class="hud-label">${label}</div><div class="timer">0:00.00</div></div>
    <div class="hud-tr"><div class="pos">1<sup>st</sup></div><div class="of"></div></div>
    <div class="speedlines"></div>
    <div class="hud-feed"></div>
    <div class="hud-msg"></div>
    <div class="hud-hint"></div>
    <div class="cheese-arrow">🧀<i>➤</i></div>
    <div class="hud-bl"><div class="speed"><b>0</b> km/h</div>
      <div class="meter"><div class="meter-fill"></div><span>BALANCE</span></div>
      <div class="meter stam"><div class="meter-fill stam-fill"></div><span>SPRINT</span></div>
      <div class="charges" title="roll-jumps"></div>
      <div class="cheese-dist"></div></div>`;
  $('#huds').appendChild(el);
  return { el, timer: el.querySelector('.timer'), pos: el.querySelector('.pos'), of: el.querySelector('.of'), msg: el.querySelector('.hud-msg'), hint: el.querySelector('.hud-hint'), speed: el.querySelector('.speed b'), meter: el.querySelector('.meter-fill'), stam: el.querySelector('.stam-fill'), cdist: el.querySelector('.cheese-dist'), charges: el.querySelector('.charges'), lines: el.querySelector('.speedlines'), arrow: el.querySelector('.cheese-arrow'), arrowI: el.querySelector('.cheese-arrow i'), feed: el.querySelector('.hud-feed'), msgT: 0 };
}
// in-race text popups were removed on request: these stay as no-ops so event handling remains simple
const POPUPS = false;
function hudMessage(view, text, cls = '', dur = 1.6) {
  if (!view || !POPUPS) return;
  view.hud.msg.textContent = text; view.hud.msg.className = 'hud-msg show ' + cls; view.hud.msgT = dur;
}
// small corner feed per view: only events involving that player or happening near them (max 3)
function feed(text, ids = null) {
  if (!POPUPS) return;
  for (const v of game.views) {
    if (ids) {
      const me = racerPos(v.racerId);
      const relevant = ids.some((id) => id === v.racerId || (me && racerPos(id) && racerPos(id).distanceTo(me) < 30));
      if (!relevant) continue;
    }
    const f = v.hud.feed;
    const d = document.createElement('div'); d.className = 'feed-item'; d.textContent = text;
    f.prepend(d);
    while (f.children.length > 3) f.lastChild.remove();
    setTimeout(() => d.classList.add('fade'), 3000);
    setTimeout(() => d.remove(), 4000);
  }
}
function addView(racerId, label, ctrl, i, n) {
  const cam = new THREE.PerspectiveCamera(62, 1, 0.1, 3000);
  const v = { racerId, cam, hud: makeHud(label, i, n), ctrl, shake: 0, camPos: null, look: new THREE.Vector3(), idx: i, n };
  if (ctrl) ctrl.active = true;
  game.views.push(v);
  return v;
}
function ensureRacerView(info, label, color) {
  let rv = game.racerViews.get(info.id);
  if (!rv) { rv = new RacerView(scene, info, label, color); game.racerViews.set(info.id, rv); }
  return rv;
}
const nameOf = (id) => { const r = game.race && game.race.racers.find((x) => x.id === id); return r ? r.name : (online.names.get(id) || '?'); };
const viewFor = (id) => game.views.find((v) => v.racerId === id);

// ---------------------------------------------------------------------------
// offline (solo vs AI / local split-screen)
// ---------------------------------------------------------------------------
function newMatch(mode) {
  const humans = mode === 'split' ? 2 : 1;
  const roster = [];
  const taken = new Set();
  if (humans === 2 && game.chars[0] === game.chars[1]) game.chars[1] = (game.chars[1] + 1) % CHARACTERS.length; // two players never look identical
  for (let h = 0; h < humans; h++) { roster.push({ id: 'p' + (h + 1), name: humans === 1 ? 'You' : 'Player ' + (h + 1), char: game.chars[h] }); taken.add(game.chars[h]); }
  const nAI = mode === 'split' ? 4 : 5;
  const names = [...Core.AI_NAMES].sort(() => Math.random() - 0.5);
  for (let i = 0; i < nAI; i++) {
    let ch; do { ch = (Math.random() * CHARACTERS.length) | 0; } while (taken.has(ch) && taken.size < CHARACTERS.length);
    taken.add(ch);
    roster.push({ id: 'ai' + i, name: names[i], char: ch, ai: true });
  }
  return { mode, heat: 0, roster, wins: {}, points: {}, done: false };
}
function startOffline(mode, nextHeat = false) {
  clearRaceViews();
  online.close();
  game.mode = mode;
  if (!nextHeat || !game.match || game.match.mode !== mode || game.match.done) game.match = newMatch(mode);
  game.match.heat++; game.match.scored = false;
  const seed = (Math.random() * 1e9) | 0;
  const race = Core.createRace(seed);
  game.race = race;
  const humans = mode === 'split' ? 2 : 1;
  for (const r of game.match.roster) Core.addRacer(race, r);
  // shuffle grid order so the player isn't always at the edge
  Core.gridOrder(race);
  for (const r of race.racers) Core.placeAtStart(race, r);
  for (const r of race.racers) {
    const isP = !r.ai;
    ensureRacerView(r, isP ? (humans === 1 ? 'YOU' : r.id.toUpperCase()) : r.name, isP ? '#ffd34d' : '#ffffff');
  }
  if (humans === 1) addView('p1', 'YOU', controllers.solo, 0, 1);
  else { addView('p1', 'PLAYER 1  (WASD)', controllers.p1, 0, 2); addView('p2', 'PLAYER 2  (ARROWS)', controllers.p2, 1, 2); }
  game.acc = 0; game.resultsShown = false; game.resultT = 0; game.slowT = 0;
  showScreen(null);
  document.body.classList.add('racing');
  feed(`Heat ${game.match.heat} of 3`);
}
function updateOffline(dt) {
  const race = game.race;
  // brief slow-mo on a big player wipeout
  if (game.slowT > 0) { game.slowT -= dt; dt *= 0.3; }
  game.acc += dt;
  const inputs = {};
  for (const v of game.views) inputs[v.racerId] = v.ctrl.read();
  let n = 0;
  while (game.acc >= Core.C.SUB && n < 8) { Core.step(race, Core.C.SUB, inputs); game.acc -= Core.C.SUB; n++; handleEvents(race.events); race.events = []; }
  if (n >= 8) game.acc = 0;
  for (const r of race.racers) {
    const rv = game.racerViews.get(r.id);
    rv.apply(stateFromRacer(r), dt, particles); rv.lastSp = Math.hypot(r.vx, r.vz); rv.lastState = r.state; rv.lastGrounded = r.grounded;
  }
  const c = race.cheese;
  cheeseView.apply(c.x, c.y, c.z, Core.cheeseQuat(c), height(c.x, c.z));
  cheeseHeld = c.heldBy != null;
  updateHUDs(race.phase, race.cd, race.raceT, race.racers.map(racerSummary), c);
  if (race.phase === 'over') maybeShowResults(race.result, race.racers.map(racerSummary), dt);
}
function stateFromRacer(r) {
  return { x: r.x, y: r.y, z: r.z, vy: r.vy, stamina: r.stamina, yaw: r.heading, pitch: r.spin, roll: r.roll, state: r.state, st: r.st, vx: r.vx, vz: r.vz, meter: r.meter, grounded: r.grounded,
    flags: Core.racerFlags(r) };
}
const racerSummary = (r) => ({ id: r.id, name: r.name, char: r.char, x: r.x, y: r.y, z: r.z, vx: r.vx, vz: r.vz, state: r.state, meter: r.meter, stamina: r.stamina, st: r.st, charges: r.charges, ai: !!r.ai, finished: r.finished });

// ---------------------------------------------------------------------------
// events -> effects/messages (shared by offline and online)
// ---------------------------------------------------------------------------
function racerPos(id) {
  const rv = game.racerViews.get(id); return rv ? rv.root.position : null;
}
const isLocal = (id) => game.views.some((v) => v.racerId === id);
function handleEvents(events) {
  for (const ev of events) {
    const v = ev.id != null ? viewFor(ev.id) : null;
    switch (ev.e) {
      case 'release': feed('🧀 The cheese is away!'); for (const vv of game.views) hudMessage(vv, 'CHEESE AWAY!', 'gold', 1); audio.cheer(); break;
      case 'go': for (const vv of game.views) hudMessage(vv, 'GO!', 'go', 0.8); audio.cheer(); break;
      case 'tumble': {
        const p = racerPos(ev.id);
        if (p) { particles.kick(p.x, p.y, p.z, 0, 4, 30); particles.emit(p.x, p.y + 0.3, p.z, 0, 3, 0, 3, 0x5a7a2e, 0.1, 1.2, 14); }
        const TXT = { grabbed: 'TRIPPED!', landing: 'HARD LANDING!', jump: 'ROLL WITH IT!', dive: 'HEAD OVER HEELS!', air: 'AIRBORNE!', trip: 'STUMBLE!', speed: 'TOO FAST!', collision: 'SKITTLED!', hay: 'INTO THE HAY!' };
        if (v) {
          hudMessage(v, TXT[ev.why] || 'WIPEOUT!', 'red', 1.0); v.shake = 0.6;
          const rv = game.racerViews.get(ev.id);
          if (game.mode !== 'online' && rv && rv.lastSp > 11 && ev.why !== 'dive' && ev.why !== 'jump') game.slowT = 0.5;
        }
        if (p && audioNear(p)) audio.thud(6);
        if (ev.why !== 'dive' && ev.why !== 'jump') feed(`💫 ${nameOf(ev.id)} is cartwheeling down the hill!`, [ev.id]);
        break;
      }
      case 'bounce': particles.kick(ev.x, ev.y, ev.z, 0, 3, Math.min(18, ev.s * 2)); break;
      case 'land': {
        const p = racerPos(ev.id);
        if (p) particles.kick(p.x, p.y, p.z, 0, 2, ev.s);
        if (v) v.shake = Math.max(v.shake, Math.min(0.35, ev.s * 0.03));
        if (p && audioNear(p)) audio.thud(ev.s * 0.5);
        break;
      }
      case 'dive': { const p = racerPos(ev.id); if (p) particles.kick(p.x, p.y, p.z, 0, 4, 8); if (v) { hudMessage(v, 'DIVE!', '', 0.5); audio.whoosh(); } break; }
      case 'jump': { const p = racerPos(ev.id); if (p) particles.kick(p.x, p.y, p.z, 0, 3, 6); if (v) audio.whoosh(); break; }
      case 'rjump': {
        const p = racerPos(ev.id);
        if (p) { particles.kick(p.x, p.y, p.z, 0, 5, 14); }
        const rv = game.racerViews.get(ev.id), r = game.race && game.race.racers.find((x) => x.id === ev.id);
        if (rv && r) rv.kick(r.vx * 0.35, 6.5, r.vz * 0.35);
        if (v) { hudMessage(v, 'ROLL-JUMP!', 'gold', 0.6); audio.whoosh(); v.shake = 0.3; v.fovPunch = 8; }
        break;
      }
      case 'clean': if (v) { hudMessage(v, 'CLEAN LANDING! +SPEED', 'go', 0.7); } break;
      case 'grab': {
        feed(`✋ ${nameOf(ev.id)} grabbed ${nameOf(ev.target)}${ev.trip ? ' — down they go!' : '!'}`, [ev.id, ev.target]);
        if (v) hudMessage(v, ev.trip ? 'TRIPPED THEM!' : 'GRABBED!', 'gold', 0.8);
        const tv = viewFor(ev.target); if (tv && !ev.trip) hudMessage(tv, 'GRABBED!', 'red', 0.8);
        break;
      }
      case 'whiff': if (v) hudMessage(v, 'missed grab', '', 0.5); break;
      case 'finish': feed(`🏁 ${nameOf(ev.id)} crossed the line!`); break;
      case 'win':
        feed(ev.how === 'cheese' ? `🧀 ${nameOf(ev.id)} CAUGHT THE CHEESE!` : `🏆 ${nameOf(ev.id)} wins!`);
        for (const vv of game.views) hudMessage(vv, vv.racerId === ev.id ? (ev.how === 'cheese' ? 'YOU GOT THE CHEESE!' : 'YOU WIN!') : `${nameOf(ev.id)} WINS`, vv.racerId === ev.id ? 'gold big' : 'red', 3);
        { const p = racerPos(ev.id); if (p) for (let i = 0; i < 6; i++) particles.emit(p.x, p.y + 2, p.z, 0, 5, 0, 6, [0xffd34d, 0xff5e5e, 0x5ec8ff, 0x7dff8a][i % 4], 0.12, 2.2, 25); }
        audio.cheer(true);
        break;
    }
  }
}
function audioNear(p) { return game.views.some((v) => v.camPos && v.camPos.distanceTo(p) < 25); }

// ---------------------------------------------------------------------------
// HUD + cameras
// ---------------------------------------------------------------------------
const ordinal = (n) => n + (['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) ? 0 : (n % 10 < 4 ? n % 10 : 0)] || 'th');
function fmtTime(t) { t = Math.max(0, t); const m = Math.floor(t / 60), s = t - m * 60; return `${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`; }
function updateHUDs(phase, cd, raceT, racers, cheese) {
  const sorted = [...racers].sort((a, b) => b.z - a.z);
  for (const v of game.views) {
    const me = racers.find((r) => r.id === v.racerId);
    const h = v.hud;
    h.timer.textContent = phase === 'countdown' ? '0:00.00' : fmtTime(raceT);
    if (!me) { h.pos.textContent = 'SPECTATING'; continue; }
    const rank = sorted.findIndex((r) => r.id === me.id) + 1;
    h.pos.innerHTML = ordinal(rank).replace(/(\d+)(\D+)/, '$1<sup>$2</sup>'); h.of.textContent = `of ${racers.length}`;
    const sp = Math.hypot(me.vx, me.vz);
    h.speed.textContent = Math.round(sp * 3.6);
    const m = Math.min(1, me.meter || 0);
    h.meter.style.width = (m * 100) + '%';
    h.meter.style.background = m > 0.7 ? '#ff4d4d' : m > 0.4 ? '#ffb84d' : '#7dff8a';
    h.stam.style.width = (Math.max(0, Math.min(1, me.stamina ?? 1)) * 100) + '%';
    const ch = me.charges ?? 2;
    if (h._ch !== ch) { h._ch = ch; h.charges.innerHTML = 'ROLL-JUMP ' + '<b>●</b>'.repeat(ch) + '<i>●</i>'.repeat(Math.max(0, Core.ROLL_CHARGES - ch)); }
    h.lines.style.opacity = Math.max(0, Math.min(0.85, (sp - 12) / 8)).toFixed(2);
    const dz = cheese.z - me.z, d = Math.hypot(cheese.x - me.x, cheese.z - me.z);
    h.cdist.textContent = cheese.heldBy != null ? '🧀 caught!' : (dz >= 0 ? `🧀 ${d.toFixed(0)} m ahead` : `🧀 ${d.toFixed(0)} m behind`);
    let hint = '';
    if (phase === 'race') {
      const near = cheese.heldBy == null && d < 3.2 && Math.abs(cheese.y - me.y - 0.5) < 2.5;
      const aiBlocked = false;
      if (near && me.state !== ST.GETUP) hint = 'GRAB IT! [E]';
      else if (cheese.heldBy == null && me.state === ST.RUN && dz > 0.5 && dz < 5.5 && Math.abs(cheese.x - me.x) < 2.2) hint = 'DIVE AT IT! [SPACE]';
      else if (me.state === ST.TUMBLE && (me.st || 0) > 0.25) hint = sp >= 5 ? ((me.charges ?? 0) > 0 ? 'ROLL-JUMP [SPACE] · steer in the air' : 'rolling… (roll-jump recharging)') : 'GET UP [SPACE]';
      else if (me.state === ST.RUN && m > 0.6) hint = 'TOO FAST! Ease off / brake';
      else if (me.state === ST.RUN && sorted.some((o) => o.id !== me.id && o.state !== ST.TUMBLE && Math.hypot(o.x - me.x, o.z - me.z) < 1.9)) hint = 'GRAB RACER [E]';
      void aiBlocked;
      if (v.n === 2) hint = hint.replace('[E]', v.idx ? '[ / ]' : '[E]').replace(/\[SPACE\]/g, v.idx ? '[ENTER]' : '[SPACE]');
    }
    if (!POPUPS) hint = '';
    h.hint.textContent = hint; h.hint.className = 'hud-hint' + (hint ? ' show' : '') + (hint.startsWith('GRAB IT') ? ' hot' : '');
  }
  // countdown
  const cdEl = $('#countdown');
  if (phase === 'countdown') {
    const n = Math.ceil(cd - 1.5);
    cdEl.textContent = n > 0 ? n : '🧀';
    cdEl.className = 'show';
  } else cdEl.className = '';
  // progress strip
  const strip = $('#progress');
  let html = '';
  const pct = (z) => Math.max(0, Math.min(100, (z + 4) / (FINISH_Z + 4) * 100));
  html += `<div class="pdot cheese" style="top:${pct(cheese.z)}%">🧀</div>`;
  for (const r of racers) {
    const local = game.views.some((v) => v.racerId === r.id);
    html += `<div class="pdot${local ? ' me' : ''}" style="top:${pct(r.z)}%; background:#${CHARACTERS[r.char % CHARACTERS.length].shirt.toString(16).padStart(6, '0')}"></div>`;
  }
  strip.innerHTML = html;
}
const _tmpV = new THREE.Vector3(), _proj = new THREE.Vector3();
function updateCamera(v, dt, phase) {
  const rv = game.racerViews.get(v.racerId);
  let p;
  if (rv) p = rv.root.position;
  else { // spectator: follow the leader
    let best = null; for (const r of game.racerViews.values()) if (!best || r.root.position.z > best.root.position.z) best = r;
    p = best ? best.root.position : new THREE.Vector3(0, 0, 0);
  }
  const over = phase === 'over';
  const t = performance.now() / 1000;
  const sp = rv && rv.lastSp || 0;
  const tumbling = rv && (rv.lastState === ST.TUMBLE || rv.lastState === ST.DIVE);
  // low, close chase cam; post-race slow orbit
  if (over) v.orbitA = (v.orbitA ?? 0) + dt * 0.35;
  // ~6 m back along the slope (shorter on the steep face so the runner stays big), ~4.5 m up
  const slope = Math.max(0, (height(p.x, p.z - 3) - height(p.x, p.z + 3)) / 6);
  const behind = (phase === 'countdown' ? 6.5 : 6 + Math.min(1, sp * 0.05)) / (1 + slope * 0.45);
  const rate = over ? 2 : tumbling ? 5 : 9;
  // velocity lead so the smoothed camera doesn't fall behind a fast runner (zero steady-state lag)
  if (!v.vel) v.vel = new THREE.Vector3();
  if (v.prevP && dt > 0) v.vel.lerp(_proj.copy(p).sub(v.prevP).divideScalar(dt).clampLength(0, 40), 1 - Math.exp(-10 * dt));
  v.prevP = (v.prevP || new THREE.Vector3()).copy(p);
  const lead = over ? 0 : 1 / rate;
  const desired = over
    ? _tmpV.set(p.x + Math.sin(v.orbitA) * 8, p.y + 3.2, p.z + Math.cos(v.orbitA) * 8)
    : _tmpV.set(p.x * 0.85 + v.vel.x * lead, p.y + (tumbling ? 3.8 : 4.5) + v.vel.y * lead, p.z - behind + v.vel.z * lead);
  desired.y = Math.max(desired.y, height(desired.x, desired.z) + 1.6);
  if (!v.camPos) v.camPos = desired.clone();
  const k = 1 - Math.exp(-rate * dt);
  v.camPos.lerp(desired, k);
  v.camPos.y = Math.max(v.camPos.y, height(v.camPos.x, v.camPos.z) + 1.0);
  // look ahead and down: the gaze follows ~50% of the slope so the hill reads steep
  const ahead = 10, lz = p.z + ahead;
  const groundDrop = p.y - height(p.x, lz);
  const look = over ? new THREE.Vector3(p.x, p.y + 1.0, p.z) : new THREE.Vector3(p.x * 0.95 + v.vel.x * lead, p.y + 1.0 - groundDrop * 0.5 + v.vel.y * lead, lz + v.vel.z * lead);
  v.look.lerp(look, 1 - Math.exp(-(tumbling ? 5 : 8) * dt));
  v.cam.position.copy(v.camPos);
  // shake: bumps/landings plus a light rumble at speed
  const rumble = phase === 'race' && rv && rv.lastGrounded ? Math.max(0, sp - 9) * 0.004 : 0;
  const sh = v.shake + rumble;
  if (sh > 0) { v.cam.position.x += (Math.random() - 0.5) * sh; v.cam.position.y += (Math.random() - 0.5) * sh; }
  v.shake = Math.max(0, v.shake - dt * 1.5);
  v.cam.lookAt(v.look);
  // FOV kick with speed (up to +16)
  v.fovPunch = Math.max(0, (v.fovPunch || 0) - dt * 14);
  v.cam.fov += ((60 + Math.min(16, Math.max(0, sp - 5) * 0.9) + v.fovPunch) - v.cam.fov) * (1 - Math.exp(-(v.fovPunch > 0 ? 8 : 3) * dt));
  v.cam.updateProjectionMatrix();
  // hud message timers
  if (v.hud.msgT > 0) { v.hud.msgT -= dt; if (v.hud.msgT <= 0) v.hud.msg.className = 'hud-msg'; }
}
// off-screen arrow pointing at the cheese (per view)
function updateCheeseArrow(v) {
  const a = v.hud.arrow;
  if (!game.mode || !cheeseView.group.visible || cheeseHeld) { a.style.display = 'none'; return; }
  _proj.copy(cheeseView.group.position).project(v.cam);
  const behind = _proj.z > 1;
  let x = _proj.x, y = _proj.y;
  if (!behind && Math.abs(x) < 0.92 && Math.abs(y) < 0.88) { a.style.display = 'none'; return; }
  if (behind) { x = -x; y = -Math.abs(y) - 1; }
  const m = Math.max(Math.abs(x) / 0.85, Math.abs(y) / 0.8);
  x /= m; y /= m;
  a.style.display = 'block';
  a.style.left = ((x * 0.5 + 0.5) * 100) + '%'; a.style.top = ((-y * 0.5 + 0.5) * 100) + '%';
  v.hud.arrowI.style.transform = `rotate(${Math.atan2(-y, x)}rad)`;
}
let cheeseHeld = false;
// pulsing glow marker over the cheese
const cheeseGlow = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,230,120,0.9)'); gr.addColorStop(0.4, 'rgba(255,200,60,0.35)'); gr.addColorStop(1, 'rgba(255,200,60,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true, transparent: true, fog: false }));
  sp.renderOrder = 10; scene.add(sp);
  const pin = new THREE.Sprite(new THREE.SpriteMaterial({ map: (() => { const t = document.createElement('canvas'); t.width = 64; t.height = 64; const q = t.getContext('2d'); q.fillStyle = '#ffd34d'; q.strokeStyle = '#5a3a00'; q.lineWidth = 5; q.beginPath(); q.moveTo(10, 8); q.lineTo(54, 8); q.lineTo(32, 56); q.closePath(); q.stroke(); q.fill(); return new THREE.CanvasTexture(t); })(), depthTest: false, transparent: true, fog: false }));
  pin.renderOrder = 11; scene.add(pin);
  return { sp, pin };
})();
function updateCheeseGlow(t) {
  const on = !!game.mode && !cheeseHeld;
  cheeseGlow.sp.visible = cheeseGlow.pin.visible = on;
  if (!on) return;
  const p = cheeseView.group.position;
  const inReach = game.views.some((v) => { const rv = game.racerViews.get(v.racerId); return rv && rv.root.position.distanceTo(p) < 2.6; });
  const pulse = 1 + Math.sin(t * (inReach ? 14 : 6)) * (inReach ? 0.3 : 0.18);
  cheeseGlow.sp.material.color.setHex(inReach ? 0x9dff6a : 0xffffff);
  cheeseGlow.sp.position.copy(p); cheeseGlow.sp.scale.setScalar(2.6 * pulse);
  cheeseGlow.pin.position.set(p.x, p.y + 1.5 + Math.sin(t * 4) * 0.15, p.z); cheeseGlow.pin.scale.setScalar(0.7);
}

// ---------------------------------------------------------------------------
// results
// ---------------------------------------------------------------------------
function maybeShowResults(result, racers, dt) {
  if (game.resultsShown || !result) return;
  game.resultT += dt;
  if (game.resultT < 2.6) return;
  game.resultsShown = true;
  const localIds = game.views.map((v) => v.racerId);
  const sorted = [...racers].sort((a, b) => (a.id === result.id ? -1 : b.id === result.id ? 1 : b.z - a.z));
  const winnerLocal = localIds.includes(result.id);
  let title;
  if (winnerLocal) title = result.how === 'cheese' ? (localIds.length > 1 ? `${nameOf(result.id)} CAUGHT THE CHEESE!` : 'YOU CAUGHT THE CHEESE!') : (localIds.length > 1 ? `${nameOf(result.id)} WINS!` : 'YOU WIN!');
  else title = result.how === 'cheese' ? `${result.name} caught the cheese` : `${result.name} won the race`;
  $('#res-title').textContent = title;
  $('#res-title').className = winnerLocal ? 'win' : 'lose';
  $('#res-sub').textContent = (result.how === 'cheese' ? 'Cheese snatched' : result.how === 'finish' ? 'First across the line' : 'Time limit') + ` in ${fmtTime(result.time)}`;
  let rows = '';
  sorted.forEach((r, i) => {
    const local = localIds.includes(r.id);
    const status = r.id === result.id ? (result.how === 'cheese' ? '🧀 caught it' : '🏆 winner') : `${Math.max(0, FINISH_Z - r.z).toFixed(0)} m to go`;
    rows += `<tr class="${local ? 'me' : ''}"><td>${i + 1}</td><td>${escapeHtml(r.name)}${r.ai ? ' <small>(AI)</small>' : ''}</td><td>${CHARACTERS[r.char % CHARACTERS.length].name}</td><td>${status}</td></tr>`;
  });
  $('#res-table').innerHTML = rows;
  // best-of-3 heats (offline)
  const M = game.mode !== 'online' ? game.match : null;
  if (M && !M.scored) {
    M.scored = true;
    const order = [...racers].sort((a, b) => (a.id === result.id ? -1 : b.id === result.id ? 1 : b.z - a.z));
    order.forEach((r, i) => { M.points[r.id] = (M.points[r.id] || 0) + Math.max(0, 3 - i); });
    if (result.id != null) M.wins[result.id] = (M.wins[result.id] || 0) + 1;
    if (Object.values(M.wins).some((w) => w >= 2) || M.heat >= 3) M.done = true;
  }
  if (M) {
    const board = [...M.roster].sort((a, b) => (M.wins[b.id] || 0) - (M.wins[a.id] || 0) || (M.points[b.id] || 0) - (M.points[a.id] || 0));
    const champ = M.done ? board[0] : null;
    $('#res-board').innerHTML = `<div class="board-title">${M.done ? '🏆 MATCH WINNER: ' + escapeHtml(champ.name) : `Heat ${M.heat} of 3 — first to 2 heat wins`}</div>` +
      '<div class="chips">' + board.map((r) => `<span class="chip${localIds.includes(r.id) ? ' me' : ''}">${escapeHtml(r.name)} ${'🏆'.repeat(M.wins[r.id] || 0)} <small>${M.points[r.id] || 0} pts</small></span>`).join('') + '</div>';
    $('#btn-again').textContent = M.done ? 'NEW MATCH (R)' : `NEXT HEAT ${M.heat + 1}/3 (R)`;
  } else { $('#res-board').innerHTML = ''; $('#btn-again').textContent = 'RACE AGAIN (R)'; }
  if (winnerLocal && game.mode !== 'online') {
    try { const best = parseFloat(localStorage.getItem('cc-best') || '0'); if (!best || result.time < best) localStorage.setItem('cc-best', String(result.time)); } catch (e) { /* storage may be unavailable */ }
  }
  let best = ''; try { const b = localStorage.getItem('cc-best'); if (b) best = `Best winning time: ${fmtTime(parseFloat(b))}`; } catch (e) { }
  $('#res-best').textContent = best;
  const again = $('#btn-again');
  if (game.mode === 'online') { again.style.display = online.isHost ? '' : 'none'; $('#res-wait').style.display = online.isHost ? 'none' : ''; }
  else { again.style.display = ''; $('#res-wait').style.display = 'none'; }
  showScreen('#screen-results');
}
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------------------------------------------------------------------------
// online client
// ---------------------------------------------------------------------------
function serverBase() {
  const q = new URLSearchParams(location.search).get('server');
  if (q) return q;
  if (window.CHEESE_SERVER) return window.CHEESE_SERVER;
  if (location.protocol === 'http:' || location.protocol === 'https:') return location.origin;
  return '';
}
function wsUrlFrom(base) {
  let u = base.trim().replace(/\/+$/, '');
  if (!/^[a-z]+:\/\//i.test(u)) u = (location.protocol === 'https:' ? 'https://' : 'http://') + u;
  u = u.replace(/^http:/i, 'ws:').replace(/^https:/i, 'wss:');
  return u + '/ws';
}
const online = {
  ws: null, id: null, code: null, isHost: false, players: [], names: new Map(),
  snaps: [], offset: null, rtt: 0.1, me: null, predRace: null, lastSend: 0, inRace: false, phase: 'countdown', cd: 0, raceT: 0, result: null,
  cheese: { x: 0, y: 0, z: 0, q: [0, 0, 0, 1], vx: 0, vy: 0, vz: 0, heldBy: null }, cheeseDisp: null,
  close() { if (this.ws) { this.ws.onclose = null; try { this.ws.close(); } catch (e) { } } this.ws = null; this.id = null; this.inRace = false; },
  send(m) { if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify(m)); },
};
function onlineStatus(t, err) { const el = $('#online-status'); el.textContent = t; el.className = err ? 'err' : ''; }
function connectOnline(create) {
  const base = $('#server-url').value.trim();
  if (!base) { onlineStatus('Enter a server URL (e.g. https://your-app.onrender.com).', true); return; }
  const name = ($('#player-name').value.trim() || 'Runner').slice(0, 16);
  try { localStorage.setItem('cc-name', name); localStorage.setItem('cc-server', base); } catch (e) { }
  const code = $('#room-code').value.trim().toUpperCase();
  if (!create && !/^[A-Z]{4}$/.test(code)) { onlineStatus('Room codes are 4 letters.', true); return; }
  online.close();
  let ws;
  try { ws = new WebSocket(wsUrlFrom(base)); } catch (e) { onlineStatus('Bad server URL: ' + e.message, true); return; }
  online.ws = ws;
  onlineStatus('Connecting… (free hosts can take ~30-60 s to wake up)');
  const to = setTimeout(() => { if (ws.readyState !== 1) onlineStatus('Still connecting… is the server running?', true); }, 8000);
  ws.onopen = () => { clearTimeout(to); onlineStatus('Connected.'); online.send(create ? { t: 'create', name, char: game.chars[0] } : { t: 'join', code, name, char: game.chars[0] }); };
  ws.onerror = () => onlineStatus('Could not connect to ' + wsUrlFrom(base), true);
  ws.onclose = () => {
    clearTimeout(to);
    if (game.mode === 'online') { feed('⚠ Disconnected from server'); toMenu(); }
    onlineStatus('Disconnected.', true);
    online.ws = null;
  };
  ws.onmessage = (ev) => { let m; try { m = JSON.parse(ev.data); } catch (e) { return; } onNetMessage(m); };
}
setInterval(() => { if (online.ws && online.ws.readyState === 1) online.send({ t: 'ping', c: performance.now() }); }, 1000);
function onNetMessage(m) {
  switch (m.t) {
    case 'error': onlineStatus(m.msg, true); break;
    case 'welcome':
      online.id = m.id; online.code = m.code;
      history.replaceState(null, '', `?room=${m.code}` + (new URLSearchParams(location.search).get('server') ? '&server=' + encodeURIComponent(new URLSearchParams(location.search).get('server')) : ''));
      if (!online.inRace) showScreen('#screen-lobby');
      break;
    case 'lobby':
      online.players = m.players; online.isHost = m.host === online.id; online.code = m.code;
      for (const p of m.players) online.names.set(p.id, p.name);
      renderLobby(m);
      if (m.phase === 'lobby' && game.mode === 'online' && game.resultsShown) { $('#btn-again').style.display = online.isHost ? '' : 'none'; $('#res-wait').style.display = online.isHost ? 'none' : ''; }
      break;
    case 'pong': {
      const rtt = (performance.now() - m.c) / 1000;
      online.rtt = online.rtt * 0.8 + rtt * 0.2;
      break;
    }
    case 'start': startOnlineRace(m); break;
    case 's': onSnapshot(m); break;
  }
}
function renderLobby(m) {
  $('#lobby-code').textContent = m.code;
  const link = `${location.origin}${location.pathname}?room=${m.code}` + (location.protocol.startsWith('http') && serverBase() !== location.origin ? '&server=' + encodeURIComponent(serverBase()) : '');
  $('#lobby-link').value = location.protocol.startsWith('http') ? link : `Room code: ${m.code}`;
  $('#lobby-players').innerHTML = m.players.map((p) => `<li>${escapeHtml(p.name)} <small>${CHARACTERS[p.char % CHARACTERS.length].name}</small>${p.id === m.host ? ' <b>HOST</b>' : ''}${p.id === online.id ? ' (you)' : ''}</li>`).join('');
  $('#lobby-start').style.display = online.isHost ? '' : 'none';
  $('#lobby-bots').disabled = !online.isHost;
  $('#lobby-bots').value = m.bots;
  $('#lobby-wait').style.display = online.isHost ? 'none' : '';
  $('#lobby-wait').textContent = m.phase === 'lobby' ? 'Waiting for the host to start…' : 'A race is in progress — you will join the next one.';
}
function startOnlineRace(m) {
  clearRaceViews();
  game.mode = 'online';
  online.inRace = true; online.snaps = []; online.offset = null; online.result = null; online.phase = 'countdown';
  online.racers = m.racers;
  for (const r of m.racers) online.names.set(r.id, r.name);
  // prediction race: our own racer simulated locally with the shared core
  const pr = Core.createRace(m.seed);
  pr.reachBonus = m.reachBonus || 0;
  for (const r of m.racers) Core.addRacer(pr, { id: r.id, name: r.name, char: r.char });
  game.race = pr;
  online.me = pr.racers.find((r) => r.id === online.id) || null;
  for (const r of m.racers) ensureRacerView(r, r.id === online.id ? 'YOU' : r.name + (r.ai ? '' : ' ★'), r.id === online.id ? '#ffd34d' : r.ai ? '#ffffff' : '#9fe6ff');
  addView(online.me ? online.id : null, online.me ? `YOU · ROOM ${online.code}` : `SPECTATING · ROOM ${online.code}`, online.me ? controllers.solo : null, 0, 1);
  online.predicting = false;
  game.resultsShown = false; game.resultT = 0; game.acc = 0;
  showScreen(null);
  document.body.classList.add('racing');
}
function decodeRacer(a) {
  return { id: a[0], x: a[1], y: a[2], z: a[3], q: [a[4], a[5], a[6], a[7]], vx: a[8], vy: a[9], vz: a[10], state: a[11], flags: a[12], meter: a[13], st: a[14], stamina: a[15], charges: a[16] };
}
function onSnapshot(m) {
  if (!online.inRace) return;
  const now = performance.now() / 1000;
  const st = m.k / Core.C.TICK;
  const off = now - st;
  online.offset = online.offset == null ? off : Math.min(off, online.offset * 0.98 + off * 0.02 + 0.0005);
  if (off < online.offset) online.offset = off;
  const snap = { time: st, racers: new Map(m.r.map((a) => { const d = decodeRacer(a); return [d.id, d]; })), c: m.c };
  online.snaps.push(snap);
  while (online.snaps.length > 40) online.snaps.shift();
  online.phase = ['countdown', 'race', 'over'][m.p]; online.cd = m.cd; online.raceT = m.rt;
  if (m.res) online.result = m.res;
  const c = m.c;
  online.cheese = { x: c[0], y: c[1], z: c[2], q: [c[3], c[4], c[5], c[6]], vx: c[7], vy: c[8], vz: c[9], heldBy: c[10], released: c[11], time: st };
  if (m.e && m.e.length) handleEvents(m.e);
  // reconcile our predicted racer
  const me = online.me;
  if (me) {
    const s = snap.racers.get(me.id);
    if (s) {
      const predictable = s.state === ST.RUN || s.state === ST.DIVE;
      if (!predictable) { online.predicting = false; copyServer(me, s); }
      else if (!online.predicting) { online.predicting = true; copyServer(me, s); }
      else {
        if (me.state !== s.state && !(me.state === ST.DIVE && s.state === ST.RUN && me.st < 0.5)) copyServer(me, s);
        const lead = online.rtt * 0.5 + 1 / Core.C.TICK;
        const tx = s.x + s.vx * lead, tz = s.z + s.vz * lead;
        const ex = tx - me.x, ez = tz - me.z;
        if (Math.hypot(ex, ez) > 4) copyServer(me, s);
        else { me.x += ex * 0.15; me.z += ez * 0.15; me.vx += (s.vx - me.vx) * 0.1; me.vz += (s.vz - me.vz) * 0.1; }
        me.meter = s.meter;
      }
    }
  }
}
function copyServer(me, s) {
  me.x = s.x; me.y = s.y; me.z = s.z; me.vx = s.vx; me.vy = s.vy; me.vz = s.vz; me.state = s.state; me.st = s.st; me.meter = s.meter; me.gy = height(me.x, me.z);
  const e = new THREE.Euler().setFromQuaternion(new THREE.Quaternion(...s.q), 'YXZ'); me.heading = e.y;
}
function sampleRemote(id, renderTime) {
  const S = online.snaps;
  if (!S.length) return null;
  let a = null, b = null;
  for (let i = S.length - 1; i >= 0; i--) { if (S[i].time <= renderTime) { a = S[i]; b = S[i + 1] || null; break; } }
  if (!a) a = S[0];
  const ra = a.racers.get(id); if (!ra) return null;
  const rb = b && b.racers.get(id);
  if (!rb) return ra;
  const t = Math.max(0, Math.min(1, (renderTime - a.time) / (b.time - a.time)));
  const qa = new THREE.Quaternion(...ra.q), qb = new THREE.Quaternion(...rb.q);
  qa.slerp(qb, t);
  return { ...rb, x: ra.x + (rb.x - ra.x) * t, y: ra.y + (rb.y - ra.y) * t, z: ra.z + (rb.z - ra.z) * t, q: [qa.x, qa.y, qa.z, qa.w], vx: ra.vx + (rb.vx - ra.vx) * t, vz: ra.vz + (rb.vz - ra.vz) * t };
}
const _q = new THREE.Quaternion(), _e = new THREE.Euler();
function netToViewState(s) {
  _q.set(s.q[0], s.q[1], s.q[2], s.q[3]); _e.setFromQuaternion(_q, 'YXZ');
  return { x: s.x, y: s.y, z: s.z, vy: s.vy, stamina: s.stamina, yaw: _e.y, pitch: _e.x, roll: _e.z, state: s.state, st: s.st, vx: s.vx, vz: s.vz, meter: s.meter, flags: s.flags, grounded: !!(s.flags & 16) };
}
function updateOnline(dt) {
  const now = performance.now() / 1000;
  if (online.offset == null) return;
  const serverNow = now - online.offset;
  const renderTime = serverNow - 0.11;   // interpolate other players ~110 ms in the past
  // input -> server (30 Hz)
  const v = game.views[0];
  let inp = null;
  if (v && v.ctrl) inp = v.ctrl.read();
  if (inp && now - online.lastSend > 1 / Core.C.TICK) { online.lastSend = now; online.send({ t: 'in', i: [inp.ax, inp.f, inp.b, inp.d, inp.g, inp.k, inp.j, inp.s] }); }
  // predict our own racer with the shared core
  const me = online.me;
  if (me && online.predicting && inp) {
    game.acc += dt; let n = 0;
    while (game.acc >= Core.C.SUB && n < 8) { Core.stepRacer(game.race, me, Core.C.SUB, inp, true); game.acc -= Core.C.SUB; n++; }
    if (n >= 8) game.acc = 0;
    game.race.events = [];
  }
  const summaries = [];
  for (const r of online.racers) {
    const rv = game.racerViews.get(r.id);
    let s;
    if (me && r.id === me.id && online.predicting) s = { ...stateFromRacer(me), grounded: me.grounded };
    else {
      const ns = sampleRemote(r.id, me && r.id === me.id ? serverNow : renderTime);
      if (!ns) continue;
      s = netToViewState(ns);
    }
    rv.apply(s, dt, particles); rv.lastSp = Math.hypot(s.vx, s.vz);
    rv.lastState = s.state; rv.lastGrounded = s.grounded;
    const ns2 = online.snaps.length ? online.snaps[online.snaps.length - 1].racers.get(r.id) : null;
    summaries.push({ id: r.id, name: r.name, char: r.char, ai: r.ai, x: s.x, y: s.y, z: s.z, vx: s.vx, vz: s.vz, state: s.state, meter: s.meter, stamina: s.stamina, st: s.st, charges: ns2 ? ns2.charges : 2 });
  }
  // cheese: extrapolate to "now" so what you see is what the server checks
  const c = online.cheese;
  const ahead = c.heldBy != null || !c.released ? 0 : Math.min(0.3, serverNow - c.time + online.rtt * 0.5);
  const tx = c.x + c.vx * ahead, ty = c.y + c.vy * ahead, tz = c.z + c.vz * ahead;
  if (!online.cheeseDisp) online.cheeseDisp = { x: tx, y: ty, z: tz };
  const cd = online.cheeseDisp, k = 1 - Math.exp(-15 * dt);
  if (Math.hypot(tx - cd.x, tz - cd.z) > 5) { cd.x = tx; cd.y = ty; cd.z = tz; }
  cd.x += (tx - cd.x) * k; cd.y += (ty - cd.y) * k; cd.z += (tz - cd.z) * k;
  cd.y = Math.max(cd.y, height(cd.x, cd.z) + Core.CHEESE_HT * 0.8);
  if (c.heldBy != null) { const hv = game.racerViews.get(c.heldBy); if (hv) { cd.x = hv.root.position.x; cd.y = hv.root.position.y + 2.15; cd.z = hv.root.position.z; } }
  cheeseView.apply(cd.x, cd.y, cd.z, c.q, height(cd.x, cd.z));
  cheeseHeld = c.heldBy != null;
  const cheeseInfo = { x: cd.x, y: cd.y, z: cd.z, heldBy: c.heldBy };
  updateHUDs(online.phase, online.cd, online.raceT, summaries, cheeseInfo);
  if (online.phase === 'over') maybeShowResults(online.result, summaries, dt);
}

// ---------------------------------------------------------------------------
// character select (with live 3D preview)
// ---------------------------------------------------------------------------
const preview = (() => {
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setPixelRatio(1); r.setSize(240, 300);
  r.toneMapping = THREE.ACESFilmicToneMapping; r.outputColorSpace = THREE.SRGBColorSpace;
  r.shadowMap.enabled = true;
  const sc = new THREE.Scene();
  sc.add(new THREE.HemisphereLight(0xffffff, 0x557733, 1.3));
  const d = new THREE.DirectionalLight(0xfff0dd, 2.2); d.position.set(2, 4, 3); d.castShadow = true; sc.add(d);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.9, 32), new THREE.MeshStandardMaterial({ color: 0x5a8f35 })); disc.rotation.x = -Math.PI / 2; disc.receiveShadow = true; sc.add(disc);
  const cam = new THREE.PerspectiveCamera(32, 240 / 300, 0.1, 50); cam.position.set(0, 1.3, 5.2); cam.lookAt(0, 1.05, 0);
  return { r, sc, cam, models: [] };
})();
const selectors = [];
function buildSelectors(n) {
  const wrap = $('#select-panels'); wrap.innerHTML = ''; selectors.length = 0;
  for (const m of preview.models) preview.sc.remove(m.root);
  preview.models = [];
  for (let i = 0; i < n; i++) {
    const p = document.createElement('div'); p.className = 'sel-panel';
    p.innerHTML = `<div class="sel-title">${n > 1 ? 'PLAYER ' + (i + 1) + (i ? ' <small>(◀ ▶ arrows)</small>' : ' <small>(A / D)</small>') : 'CHOOSE YOUR RUNNER'}</div>
      <canvas width="240" height="300"></canvas>
      <div class="sel-row"><button class="sel-prev">◀</button><div class="sel-name"></div><button class="sel-next">▶</button></div>
      <div class="sel-note">Cosmetic only — every runner handles the same.</div>`;
    wrap.appendChild(p);
    const s = { i, el: p, ctx: p.querySelector('canvas').getContext('2d'), name: p.querySelector('.sel-name'), model: null };
    p.querySelector('.sel-prev').onclick = () => cycleChar(i, -1);
    p.querySelector('.sel-next').onclick = () => cycleChar(i, 1);
    selectors.push(s);
    setSelectorChar(s);
  }
}
function setSelectorChar(s) {
  if (s.model) preview.sc.remove(s.model.root);
  s.model = buildRunner(game.chars[s.i]);
  s.view = { m: s.model };
  s.name.textContent = CHARACTERS[game.chars[s.i]].name;
}
function cycleChar(i, d) {
  game.chars[i] = (game.chars[i] + d + CHARACTERS.length) % CHARACTERS.length;
  setSelectorChar(selectors[i]);
  try { localStorage.setItem('cc-chars', JSON.stringify(game.chars)); } catch (e) { }
}
function renderPreviews(t) {
  for (const s of selectors) {
    preview.sc.add(s.model.root);
    s.model.root.rotation.y = t * 0.9 + s.i;
    const L = s.model.limbs, ph = t * 6 + s.i;
    s.model.body.position.y = 0.95 + Math.abs(Math.sin(ph)) * 0.03;
    L.shL.rotation.x = Math.sin(ph) * 0.4; L.shR.rotation.x = -Math.sin(ph) * 0.4; L.elL.rotation.x = L.elR.rotation.x = -0.6;
    L.hipL.rotation.x = -Math.sin(ph) * 0.15; L.hipR.rotation.x = Math.sin(ph) * 0.15;
    if (s.model.cape) s.model.cape.rotation.x = -0.25 + Math.sin(t * 3) * 0.1;
    preview.r.render(preview.sc, preview.cam);
    s.ctx.clearRect(0, 0, 240, 300); s.ctx.drawImage(preview.r.domElement, 0, 0);
    preview.sc.remove(s.model.root);
  }
}

// ---------------------------------------------------------------------------
// screens / menu flow
// ---------------------------------------------------------------------------
let pendingMode = 'solo';
function showScreen(sel) {
  for (const el of document.querySelectorAll('.screen')) el.classList.remove('show');
  if (sel) $(sel).classList.add('show');
  game.screen = sel;
}
function toMenu() {
  online.close();
  clearRaceViews();
  game.mode = null; game.race = null; game.match = null;
  document.body.classList.remove('racing');
  $('#countdown').className = '';
  $('#progress').innerHTML = '';
  history.replaceState(null, '', location.pathname + (new URLSearchParams(location.search).get('server') ? '?server=' + encodeURIComponent(new URLSearchParams(location.search).get('server')) : ''));
  showScreen('#screen-menu');
}
function openSelect(mode) {
  pendingMode = mode;
  buildSelectors(mode === 'split' ? 2 : 1);
  $('#select-go').textContent = mode === 'online' ? 'NEXT: ONLINE ▶' : 'START RACE ▶';
  $('#select-mode').textContent = { solo: 'Solo vs AI', split: 'Local 2-Player Split-screen', online: 'Online Multiplayer' }[mode];
  showScreen('#screen-select');
}
function selectGo() {
  if (pendingMode === 'online') { showScreen('#screen-online'); return; }
  startOffline(pendingMode);
}
function onKeyUI(e) {
  const scr = game.screen;
  if (e.target && e.target.tagName === 'INPUT') return;
  if (scr === '#screen-select') {
    if (e.code === 'KeyA') cycleChar(0, -1);
    if (e.code === 'KeyD') cycleChar(0, 1);
    if (selectors.length > 1 && e.code === 'ArrowLeft') cycleChar(1, -1);
    if (selectors.length > 1 && e.code === 'ArrowRight') cycleChar(1, 1);
    if (selectors.length === 1 && e.code === 'ArrowLeft') cycleChar(0, -1);
    if (selectors.length === 1 && e.code === 'ArrowRight') cycleChar(0, 1);
    if (e.code === 'Enter' || e.code === 'Space') { e.preventDefault(); selectGo(); }
    if (e.code === 'Escape') showScreen('#screen-menu');
  } else if (scr === '#screen-menu') {
    if (e.code === 'Digit1') openSelect('solo');
    if (e.code === 'Digit2') openSelect('split');
    if (e.code === 'Digit3') openSelect('online');
  } else if (scr === '#screen-results') {
    if (e.code === 'KeyR') again();
    if (e.code === 'Escape') toMenu();
  } else if (game.mode && !scr) {
    if (e.code === 'Escape') toMenu();
    if (e.code === 'KeyR' && game.mode !== 'online' && game.race && game.race.phase !== 'countdown' && e.shiftKey) { game.match.heat--; startOffline(game.mode, true); }
  }
}
function again() {
  if (game.mode === 'online') { if (online.isHost) online.send({ t: 'start', bots: +$('#lobby-bots').value }); }
  else if (game.mode) startOffline(game.mode, true);
}
$('#btn-solo').onclick = () => openSelect('solo');
$('#btn-split').onclick = () => openSelect('split');
$('#btn-online').onclick = () => openSelect('online');
$('#select-go').onclick = selectGo;
$('#select-back').onclick = () => showScreen('#screen-menu');
$('#online-create').onclick = () => connectOnline(true);
$('#online-join').onclick = () => connectOnline(false);
$('#online-back').onclick = () => { online.close(); showScreen('#screen-menu'); };
$('#lobby-start').onclick = () => online.send({ t: 'start', bots: +$('#lobby-bots').value });
$('#lobby-bots').onchange = () => online.send({ t: 'bots', bots: +$('#lobby-bots').value });
$('#lobby-leave').onclick = () => toMenu();
$('#lobby-copy').onclick = () => { const i = $('#lobby-link'); i.select(); try { navigator.clipboard.writeText(i.value); } catch (e) { document.execCommand('copy'); } };
$('#btn-again').onclick = again;
$('#btn-menu').onclick = toMenu;
try {
  $('#player-name').value = localStorage.getItem('cc-name') || '';
  const ch = JSON.parse(localStorage.getItem('cc-chars') || 'null'); if (Array.isArray(ch) && ch.length === 2) game.chars = ch.map((x) => (x | 0) % CHARACTERS.length);
} catch (e) { }
let savedServer = ''; try { savedServer = localStorage.getItem('cc-server') || ''; } catch (e) { }
$('#server-url').value = serverBase() || savedServer;
{
  const room = new URLSearchParams(location.search).get('room');
  if (room) { $('#room-code').value = room.toUpperCase(); openSelect('online'); }
  else showScreen('#screen-menu');
}
if (location.protocol === 'file:') $('#online-note').textContent = 'Opened from a file: enter the address of a running Cheese Chase server (e.g. https://your-app.onrender.com or http://localhost:8797).';

// ---------------------------------------------------------------------------
// main loop
// ---------------------------------------------------------------------------
function resize() {
  renderer.setSize(innerWidth, innerHeight);
  post.composer.setPixelRatio(renderer.getPixelRatio()); post.composer.setSize(innerWidth, innerHeight);
  menuCam.aspect = innerWidth / innerHeight; menuCam.updateProjectionMatrix();
}
addEventListener('resize', resize);
const clock = new THREE.Clock();
// adaptive quality: drop resolution / shadow detail on slow GPUs (or force with ?quality=low)
let quality = 2, fpsT0 = performance.now(), fpsN = 0, lowStreak = 0;
function setQuality(q) {
  quality = q;
  renderer.setPixelRatio(q >= 2 ? Math.min(devicePixelRatio, 2) : q === 1 ? Math.min(devicePixelRatio, 1) : 0.6);
  const ms = q >= 2 ? 2048 : 1024;
  world.tufts.count = q >= 2 ? world.tuftsMax : q === 1 ? Math.floor(world.tuftsMax * 0.6) : Math.floor(world.tuftsMax * 0.3);
  if (world.sun.shadow.mapSize.x !== ms) { world.sun.shadow.mapSize.set(ms, ms); if (world.sun.shadow.map) { world.sun.shadow.map.dispose(); world.sun.shadow.map = null; } }
  renderer.setSize(innerWidth, innerHeight);
  post.composer.setPixelRatio(renderer.getPixelRatio()); post.composer.setSize(innerWidth, innerHeight);
}
if (new URLSearchParams(location.search).get('post') === '0') post.enabled = false;
if (new URLSearchParams(location.search).get('quality') === 'low') setQuality(0);
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, clock.getDelta());
  const t = clock.elapsedTime;
  fpsN++;
  const nowMs = performance.now();
  if (nowMs - fpsT0 > 2000) {
    window.__cc.fps = fpsN * 1000 / (nowMs - fpsT0); fpsT0 = nowMs; fpsN = 0;
    if (window.__cc.fps < 28 && quality > 0 && !document.hidden) { if (++lowStreak >= 2) { setQuality(quality - 1); lowStreak = 0; } } else lowStreak = 0;
  }
  try {
    if (game.mode === 'online') updateOnline(dt);
    else if (game.mode) updateOffline(dt);
  } catch (err) { console.error(err); }
  particles.update(dt);
  world.update(t);
  const W = innerWidth, H = innerHeight;
  if (game.mode && game.views.length) {
    const phase = game.mode === 'online' ? online.phase : game.race.phase;
    const focusZ = game.views[0].camPos ? game.views[0].camPos.z : 0;
    world.updateCrowd(t, focusZ + 10, phase !== 'countdown');
    renderer.setScissorTest(game.views.length > 1);
    updateCheeseGlow(t);
    // audio: wind from the first local runner's speed, crowd swells near the leaders/finish, footsteps
    {
      const rv = game.racerViews.get(game.views[0].racerId);
      const sp = rv ? rv.lastSp || 0 : 0;
      audio.update(sp, phase === 'over' ? 1 : Math.min(1, Math.max(0, (rv ? rv.root.position.z : 0) / FINISH_Z)), phase !== 'countdown');
      if (rv && rv.lastState === ST.RUN && rv.lastGrounded && sp > 1) {
        game.stepPh = (game.stepPh || 0) + dt * (1.6 + sp * 0.2);
        if (game.stepPh >= 1) { game.stepPh -= 1; audio.step(Math.min(1.5, 0.5 + sp / 14)); const p = rv.root.position; if (sp > 8) particles.kick(p.x, p.y, p.z, 0, 1, 2); }
      }
    }
    for (const v of game.views) {
      updateCamera(v, dt, phase);
      updateCheeseArrow(v);
      const vw = W / v.n, vx = v.idx * vw;
      v.cam.aspect = vw / H; v.cam.updateProjectionMatrix();
      world.placeSun(v.look);
      world.sky.position.copy(v.cam.position);
      if (game.views.length === 1) { renderer.setViewport(0, 0, W, H); renderView(v.cam); }
      else { renderer.setViewport(vx, 0, vw, H); renderer.setScissor(vx, 0, vw, H); renderer.render(scene, v.cam); }
    }
    renderer.setScissorTest(false);
  } else {
    // attract mode: slow fly-down along the hill
    cheeseGlow.sp.visible = cheeseGlow.pin.visible = false;
    audio.update(0, 0, false);
    const z = 40 + ((t * 6) % (FINISH_Z - 40));
    if (window.__cc && window.__cc.lineupCam) { const L = window.__cc.lineupCam; menuCam.position.set(...L[0]); menuCam.lookAt(...L[1]); }
    else {
      menuCam.position.set(26 + Math.sin(t * 0.1) * 6, height(0, z - 20) + 16, z - 20);
      menuCam.lookAt(0, height(0, z + 25), z + 25);
    }
    world.placeSun(new THREE.Vector3(0, height(0, z), z));
    world.sky.position.copy(menuCam.position);
    world.updateCrowd(t, z, true);
    renderer.setViewport(0, 0, W, H);
    renderView(menuCam);
    if (game.screen === '#screen-select') renderPreviews(t);
  }
}
window.__cc = { game, online, Core, world, scene, fps: 0,
  // test hook: line all characters up at the start for a screenshot
  lineup() {
    const views = [];
    for (let i = 0; i < CHARACTERS.length; i++) {
      const x = (i - (CHARACTERS.length - 1) / 2) * 1.25, z = -2;
      const rv = new RacerView(scene, { id: 'L' + i, char: i }, null);
      rv.apply({ x, y: height(x, z), z, yaw: (i % 2 ? 0.3 : -0.3), pitch: 0, roll: 0, state: ST.IDLE, st: 0, vx: 0, vz: 0, flags: 0, grounded: true }, 0.016, null);
      for (let k = 0; k < 60; k++) rv.apply({ x, y: height(x, z), z, yaw: (i % 2 ? 0.3 : -0.3), pitch: 0, roll: 0, state: ST.IDLE, st: 0, vx: 0, vz: 0, flags: 0, grounded: true }, 0.03, null);
      views.push(rv);
    }
    this.lineupCam = [[0, height(0, -2) + 1.6, 4.6], [0, height(0, -2) + 0.95, -2]];
    return views.length;
  },
  // test hook: advance the offline simulation without rendering (used by headless tests on slow software GPUs)
  advance(sec) { for (let i = 0; i < sec * 60; i++) { if (game.mode && game.mode !== 'online') { updateOffline(1 / 60); for (const v of game.views) updateCamera(v, 1 / 60, game.race.phase); } particles.update(1 / 60); } } };
frame();
