// ---------------------------------------------------------------------------
// Cheese Chase - shared simulation core (no rendering, no DOM).
// Used by the browser (offline solo / split-screen, and client prediction)
// and by server.js (authoritative online races). Pure ES module.
// ---------------------------------------------------------------------------
export const C = { TICK: 30, SNAP: 30, SUB: 1 / 60 };
export const G = 16;               // gameplay gravity (m/s^2)
export const START_Z = -4;
export const FINISH_Z = 258;
export const HAY_Z = 284;
export const TRACK_HALF = 21.2;
export const FENCE_X = 23.6;
export const CHEESE_R = 0.5;
export const CHEESE_HT = 0.17;     // half thickness of the wheel
export const COUNTDOWN = 4.5;      // seconds; cheese released 1.5 s before racers
export const ST = { IDLE: 0, RUN: 1, DIVE: 2, TUMBLE: 3, GETUP: 4, CELEBRATE: 5 };
const K_DRAG = 0.075, POWER = 6.5, SPRINT_POWER = 12.5, DANGER = 12.5, SLOPE_RUN = 0.5;

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;

// ---------- hill profile: convex top, a brutal near-1:1 face, a ledge, more steep, then the run-out ----------
const PROFILE = [[0, 0], [12, 0.72], [50, 0.8], [66, 1.0], [100, 0.98], [114, 0.6], [132, 0.62], [148, 0.92], [192, 0.85], [214, 0.45], [244, 0.05], [252, 0]];
function slopeAt(z) {
  if (z <= 0) return 0;
  if (z > 330) return -0.035 * Math.min(1, (z - 330) / 60);
  for (let i = 1; i < PROFILE.length; i++) {
    const [z1, s1] = PROFILE[i];
    if (z < z1) {
      const [z0, s0] = PROFILE[i - 1];
      const t = (z - z0) / (z1 - z0), e = t * t * (3 - 2 * t);
      return s0 + (s1 - s0) * e;
    }
  }
  return 0;
}
const Z0 = -200, Z1 = 640, DZ = 0.25;
const baseTable = new Float32Array(Math.ceil((Z1 - Z0) / DZ) + 2);
{
  let h = 0;
  for (let i = 0; i < baseTable.length; i++) {
    const z = Z0 + i * DZ;
    baseTable[i] = h;
    h -= slopeAt(z + DZ * 0.5) * DZ;
  }
  const off = baseTable[Math.round((0 - Z0) / DZ)];
  for (let i = 0; i < baseTable.length; i++) baseTable[i] -= off;
}
export function baseH(z) {
  let f = (z - Z0) / DZ;
  if (f < 0) f = 0; if (f > baseTable.length - 2) f = baseTable.length - 2;
  const i = Math.floor(f), t = f - i;
  return baseTable[i] * (1 - t) + baseTable[i + 1] * t;
}
// smooth value noise (deterministic) for the uneven, lumpy turf
function hash2(ix, iz) { let h = Math.imul(ix, 374761393) + Math.imul(iz, 668265263); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
function vnoise(x, z) {
  const ix = Math.floor(x), iz = Math.floor(z), fx = x - ix, fz = z - iz;
  const ux = fx * fx * (3 - 2 * fx), uz = fz * fz * (3 - 2 * fz);
  const a = hash2(ix, iz), b = hash2(ix + 1, iz), c = hash2(ix, iz + 1), d = hash2(ix + 1, iz + 1);
  return (a + (b - a) * ux) * (1 - uz) + (c + (d - c) * ux) * uz;
}
export { vnoise };
const moguls = [];
{
  const r = mulberry32(1234);
  for (let i = 0; i < 110; i++) {
    const big = r() < 0.25;
    moguls.push({
      x: (r() * 2 - 1) * 19, z: 10 + r() * 228,
      a: (r() < 0.2 ? -0.55 : 1) * (big ? 0.8 + r() * 0.6 : 0.3 + r() * 0.4),
      r: big ? 2.4 + r() * 1.6 : 1.3 + r() * 1.3,
    });
  }
  moguls.sort((a, b) => a.z - b.z);
}
function hillMask(z) {
  if (z < 4 || z > 250) return 0;
  return Math.min(1, (z - 4) / 10, (250 - z) / 25);
}
export function height(x, z) {
  let h = baseH(z);
  const ax = Math.abs(x);
  if (ax > 22) {
    const d = ax - 22;
    const bank = z < 270 ? 1 : Math.max(0.12, 1 - (z - 270) / 70); // banks flatten out into the valley
    const bk = d < 10 ? 0.03 * d * d : d < 60 ? 3 + 0.45 * (d - 10) : 25.5 + 0.08 * (d - 60);
    h += bk * bank;
    if (ax > 34) h += (vnoise(x * 0.03, z * 0.03) - 0.5) * 8 * Math.min(1, (ax - 34) / 25);
  }
  const f = hillMask(z);
  if (f > 0) {
    let b = 0.22 * Math.sin(0.23 * x + 0.11 * z) * Math.sin(0.19 * z + 1.3)
      + 0.14 * Math.sin(0.41 * z - 0.2 * x) + 0.08 * Math.sin(0.7 * x + 0.53 * z)
      + (vnoise(x * 0.35, z * 0.35) - 0.5) * 0.5 + (vnoise(x * 1.1 + 50, z * 1.1) - 0.5) * 0.14;
    for (let i = 0; i < moguls.length; i++) {
      const m = moguls[i];
      const dz = z - m.z;
      if (dz > 6.5) continue;
      if (dz < -6.5) break;
      const dx = x - m.x;
      const d2 = (dx * dx + dz * dz) / (m.r * m.r);
      if (d2 < 4) b += m.a * Math.exp(-d2 * 1.6);
    }
    h += b * f;
  } else if (z > 255 && ax < 120) h += (vnoise(x * 0.05, z * 0.05) - 0.5) * 2 * Math.min(1, (z - 255) / 60);
  return h;
}
export function gradient(x, z) {
  const e = 0.15;
  return [(height(x + e, z) - height(x - e, z)) / (2 * e), (height(x, z + e) - height(x, z - e)) / (2 * e)];
}
// Euler (order YXZ: yaw, then pitch, then roll) -> quaternion [x,y,z,w]
export function quatYXZ(yaw, pitch, roll) {
  const c1 = Math.cos(pitch / 2), c2 = Math.cos(yaw / 2), c3 = Math.cos(roll / 2);
  const s1 = Math.sin(pitch / 2), s2 = Math.sin(yaw / 2), s3 = Math.sin(roll / 2);
  return [s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 - s1 * s2 * c3, c1 * c2 * c3 + s1 * s2 * s3];
}

// ---------- cosmetic characters (no gameplay differences) ----------
export const CHARACTERS = [
  { name: 'Farmhand Fern', shirt: 0x4f8a3c, shorts: 0x2f4f8a, skin: 0xf1c27d, hair: 0x8a5a2b, shoes: 0x3b2a1a, hat: 'flatcap', hatColor: 0x6b4a2b },
  { name: 'Rugby Reg', shirt: 0xc0392b, stripe: 0xffffff, shorts: 0xf4f4f4, skin: 0xe0ac69, hair: 0x2b1d0e, shoes: 0x111111, hat: 'headband', hatColor: 0xffffff },
  { name: 'Chef Brie', shirt: 0xf6f6f6, shorts: 0x333333, skin: 0x8d5524, hair: 0x1a1a1a, shoes: 0x222222, hat: 'chef', hatColor: 0xffffff },
  { name: 'Viking Hilda', shirt: 0x7a5230, stripe: 0xc9a14a, shorts: 0x4a3520, skin: 0xffdbac, hair: 0xd35400, shoes: 0x3b2a1a, hat: 'viking', hatColor: 0x9aa0a6 },
  { name: 'Constable Pat', shirt: 0x1d2a4a, shorts: 0x1d2a4a, skin: 0xc68642, hair: 0x2b1d0e, shoes: 0x0a0a0a, hat: 'bobby', hatColor: 0x111a33 },
  { name: 'Moo-Suit Mo', shirt: 0xf2f2f2, stripe: 0x111111, shorts: 0x111111, skin: 0xf1c27d, hair: 0x5a3a1a, shoes: 0xf2f2f2, hat: 'cow', hatColor: 0xf2f2f2 },
  { name: 'Lady Wensley', shirt: 0x8e44ad, shorts: 0x5b2c6f, skin: 0xffdbac, hair: 0xf0d58a, shoes: 0x5b2c6f, hat: 'widebrim', hatColor: 0xf1e2b5 },
  { name: 'Captain Curd', shirt: 0xf1c40f, stripe: 0xc0392b, shorts: 0xc0392b, skin: 0xe0ac69, hair: 0x2b1d0e, shoes: 0xc0392b, hat: 'wedge', hatColor: 0xffc93c, cape: 0xc0392b },
  { name: 'Dapper Dan', shirt: 0x2c3e50, stripe: 0xbdc3c7, shorts: 0x7f8c8d, skin: 0xffdbac, hair: 0x6e6e6e, shoes: 0x111111, hat: 'tophat', hatColor: 0x111111 },
  { name: 'Beanie Bea', shirt: 0x16a085, shorts: 0x34495e, skin: 0x8d5524, hair: 0x1a1a1a, shoes: 0xe67e22, hat: 'beanie', hatColor: 0xe67e22 },
];
export const AI_NAMES = ['Bramble', 'Pip', 'Hattie', 'Big Tom', 'Moss', 'Dot', 'Wilf', 'Nell'];

// ---------- race ----------
// input: ax (-1..1 world x), f/b (run/brake held), s (sprint held), d/g/k/j = press counters for dive / grab cheese / grab racer / jump
export function newInput() { return { ax: 0, f: 0, b: 0, s: 0, d: 0, g: 0, k: 0, j: 0 }; }

export function createRace(seed = 1) {
  return {
    seed, rng: mulberry32(seed), t: 0, phase: 'countdown', cd: COUNTDOWN, raceT: 0, overT: 0,
    racers: [], cheese: makeCheese(), events: [], result: null, reachBonus: 0, finishOrder: [],
  };
}
// ---------- cheese: a real rigid-body wheel (cylinder) ----------
const CM = 4, IA = 0.5 * CM * CHEESE_R * CHEESE_R, ID = CM * (3 * CHEESE_R * CHEESE_R + 4 * CHEESE_HT * CHEESE_HT) / 12;
const RIM = [];
for (const s of [-1, 1]) for (let k = 0; k < 18; k++) { const a = k / 18 * Math.PI * 2; RIM.push([s * CHEESE_HT, Math.cos(a) * CHEESE_R, Math.sin(a) * CHEESE_R]); }
function qRot(q, v) { // rotate vector v by quaternion q=[x,y,z,w]
  const [qx, qy, qz, qw] = q, [x, y, z] = v;
  const ix = qw * x + qy * z - qz * y, iy = qw * y + qz * x - qx * z, iz = qw * z + qx * y - qy * x, iw = -qx * x - qy * y - qz * z;
  return [ix * qw + iw * -qx + iy * -qz - iz * -qy, iy * qw + iw * -qy + iz * -qx - ix * -qz, iz * qw + iw * -qz + ix * -qy - iy * -qx];
}
function qInvRot(q, v) { return qRot([-q[0], -q[1], -q[2], q[3]], v); }
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
function invI(q, v) { const l = qInvRot(q, v); return qRot(q, [l[0] / IA, l[1] / ID, l[2] / ID]); }
function makeCheese() {
  const z = 0.8;
  return { x: 0, y: height(0, z) + CHEESE_R, z, vx: 0, vy: 0, vz: 0, q: quatYXZ(0, 0, 0), L: [0, 0, 0], released: false, heldBy: null, maxImpact: 0 };
}
export function cheeseOmega(c) { return invI(c.q, c.L); }
function applyImpulse(c, r, J) {
  c.vx += J[0] / CM; c.vy += J[1] / CM; c.vz += J[2] / CM;
  const t = cross(r, J); c.L[0] += t[0]; c.L[1] += t[1]; c.L[2] += t[2];
}
function cheeseSub(race, c, h) {
  c.vy -= G * h;
  // air drag + rolling resistance keep top speed near a catchable ~13 m/s
  const sp = Math.hypot(c.vx, c.vy, c.vz);
  const dk = Math.max(0, 1 - (0.02 * sp + 0.03) * h);
  c.vx *= dk; c.vy *= dk; c.vz *= dk;
  const ld = 1 - 0.12 * h; c.L[0] *= ld; c.L[1] *= ld; c.L[2] *= ld;
  c.x += c.vx * h; c.y += c.vy * h; c.z += c.vz * h;
  const w = invI(c.q, c.L);
  const [qx, qy, qz, qw] = c.q;
  c.q = [qx + 0.5 * h * (w[0] * qw + w[1] * qz - w[2] * qy), qy + 0.5 * h * (w[1] * qw + w[2] * qx - w[0] * qz), qz + 0.5 * h * (w[2] * qw + w[0] * qy - w[1] * qx), qw + 0.5 * h * (-w[0] * qx - w[1] * qy - w[2] * qz)];
  const ql = Math.hypot(...c.q); c.q = c.q.map((v) => v / ql);
  // contacts between the rim points and the height-field
  let maxD = 0, nD = null;
  for (let it = 0; it < 2; it++) {
    for (const lp of RIM) {
      const r = qRot(c.q, lp);
      const px = c.x + r[0], py = c.y + r[1], pz = c.z + r[2];
      const gh = height(px, pz);
      const d = gh - py;
      if (d <= 0) continue;
      const [hx, hz] = gradient(px, pz);
      const inv = 1 / Math.sqrt(hx * hx + 1 + hz * hz);
      const n = [-hx * inv, inv, -hz * inv];
      if (it === 0 && d > maxD) { maxD = d; nD = n; }
      const wv = invI(c.q, c.L);
      const vp = [c.vx + wv[1] * r[2] - wv[2] * r[1], c.vy + wv[2] * r[0] - wv[0] * r[2], c.vz + wv[0] * r[1] - wv[1] * r[0]];
      const vn = dot(vp, n);
      if (vn >= 0) continue;
      if (-vn > c.maxImpact) c.maxImpact = -vn;
      const e = -vn > 3 ? 0.3 : 0;
      const rn = cross(r, n);
      const kn = 1 / CM + dot(n, cross(invI(c.q, rn), r));
      const j = -(1 + e) * vn / kn;
      applyImpulse(c, r, [n[0] * j, n[1] * j, n[2] * j]);
      // friction
      const wv2 = invI(c.q, c.L);
      const vp2 = [c.vx + wv2[1] * r[2] - wv2[2] * r[1], c.vy + wv2[2] * r[0] - wv2[0] * r[2], c.vz + wv2[0] * r[1] - wv2[1] * r[0]];
      const vn2 = dot(vp2, n);
      const vt = [vp2[0] - vn2 * n[0], vp2[1] - vn2 * n[1], vp2[2] - vn2 * n[2]];
      const vtl = Math.hypot(...vt);
      if (vtl > 1e-5) {
        const t = vt.map((v) => v / vtl);
        const kt = 1 / CM + dot(t, cross(invI(c.q, cross(r, t)), r));
        const jt = Math.min(vtl / kt, 0.7 * j);
        applyImpulse(c, r, [-t[0] * jt, -t[1] * jt, -t[2] * jt]);
      }
    }
  }
  if (maxD > 0) { c.x += nD[0] * maxD * 0.9; c.y += nD[1] * maxD * 0.9; c.z += nD[2] * maxD * 0.9; }
  if (Math.abs(c.x) > TRACK_HALF - 0.4) { c.x = Math.sign(c.x) * (TRACK_HALF - 0.4); c.vx = -c.vx * 0.5; c.L[2] *= -0.3; }
  if (c.z > HAY_Z - 0.7) { c.z = HAY_Z - 0.7; c.vz = -Math.abs(c.vz) * 0.25; c.L = c.L.map((v) => v * 0.4); }
}
function stepCheese(race, dt) {
  const c = race.cheese;
  if (c.heldBy != null) {
    const h = race.racers.find(r => r.id === c.heldBy);
    if (h) { c.x = h.x; c.z = h.z; c.y = h.y + 2.15; c.vx = c.vy = c.vz = 0; c.L = [0, 0, 0]; c.q = quatYXZ(h.heading + Math.PI / 2, 0, 0); }
    return;
  }
  if (!c.released) { c.y = height(c.x, c.z) + CHEESE_R; return; }
  const n = 4;
  for (let i = 0; i < n; i++) cheeseSub(race, c, dt / n);
  if (c.maxImpact > 3.5) race.events.push({ e: 'bounce', x: c.x, y: c.y - CHEESE_R, z: c.z, s: c.maxImpact });
  c.maxImpact = 0;
}
function releaseCheese(race, c) {
  c.released = true; c.vz = 6.5; c.vx = (race.rng() - 0.5) * 0.6;
  // spin to match rolling (axle = local x) plus a little random wobble
  const w = [c.vz / CHEESE_R, (race.rng() - 0.5) * 0.6, (race.rng() - 0.5) * 0.4];
  const l = qInvRot(c.q, w); c.L = qRot(c.q, [l[0] * IA, l[1] * ID, l[2] * ID]);
}

export function addRacer(race, { id, name, char = 0, ai = null }) {
  const i = race.racers.length;
  const r = {
    id, name, char, ai, idx: i,
    x: 0, y: 0, z: START_Z, vx: 0, vy: 0, vz: 0, heading: 0, state: ST.IDLE, st: 0, dur: 0,
    meter: 0, stamina: 1, sprinting: false, grounded: true, airT: 0, immune: 0, gy: 0, jumped: false,
    reach: 0, grabCd: 0, tackleT: 0, tackleCd: 0, slowT: 0, spin: 0, roll: 0, spinRate: 0, rollRate: 0, why: '',
    finished: false, finishTime: 0, hasCheese: false, _d: 0, _g: 0, _k: 0, _j: 0, aiInp: newInput(),
  };
  if (ai === true) r.ai = makeAI(race);
  race.racers.push(r);
  placeAtStart(race, r);
  return r;
}
export function makeAI(race) {
  const q = race.rng;
  return { caution: 0.3 + q() * 0.5, aggro: 0.1 + q() * 0.6, sprinty: 0.3 + q() * 0.6, wander: 1 + q() * 3, wf: 0.3 + q() * 0.5, ph: q() * 6, react: 0.6 + q() * 0.35, laneX: (q() * 2 - 1) * 6, fwdHold: 1, sprintHold: 0 };
}
export function placeAtStart(race, r) {
  const n = Math.max(race.racers.length, 1);
  const spacing = Math.min(3, 36 / n);
  r.x = (r.idx - (n - 1) / 2) * spacing; r.z = START_Z; r.y = height(r.x, r.z); r.gy = r.y;
  r.vx = r.vy = r.vz = 0; r.heading = 0; r.state = ST.IDLE; r.st = 0; r.meter = 0; r.stamina = 1; r.spin = r.roll = 0;
  r.finished = false; r.hasCheese = false; r.slowT = r.reach = r.tackleT = 0; r.jumped = false;
}
export function resetRace(race, seed) {
  race.seed = seed; race.rng = mulberry32(seed); race.t = 0; race.phase = 'countdown'; race.cd = COUNTDOWN;
  race.raceT = 0; race.overT = 0; race.cheese = makeCheese(); race.events = []; race.result = null; race.finishOrder = [];
  for (const r of race.racers) placeAtStart(race, r);
}

function startTumble(race, r, why, force = false) {
  if ((!force && r.immune > 0) || r.state === ST.TUMBLE || r.state === ST.CELEBRATE) return;
  const sp = Math.hypot(r.vx, r.vz);
  r.state = ST.TUMBLE; r.st = 0; r.why = why;
  r.spinRate = 4 + sp * 0.55; r.rollRate = (race.rng() - 0.5) * 6; r.meter = 0; r.jumped = false;
  if (r.grounded) r.vy = Math.max(r.vy, 1.5 + sp * 0.1);
  race.events.push({ e: 'tumble', id: r.id, why });
}

// One fixed physics substep for a racer. predict=true is used by online clients for their own
// racer: no random outcomes (tumbles / catches / tackles) are decided locally.
export function stepRacer(race, r, dt, inp, predict = false) {
  const divePress = inp.d !== r._d, grabPress = inp.g !== r._g, tacklePress = inp.k !== r._k, jumpPress = (inp.j || 0) !== r._j;
  r._d = inp.d; r._g = inp.g; r._k = inp.k; r._j = inp.j || 0;
  // buffer jump/dive presses briefly so they still fire if you're momentarily airborne over a lump
  if (divePress) r.diveBuf = 0.25; else r.diveBuf = Math.max(0, (r.diveBuf || 0) - dt);
  if (jumpPress && r.state === ST.RUN) r.jumpBuf = 0.3; else r.jumpBuf = Math.max(0, (r.jumpBuf || 0) - dt);
  r.st += dt;
  r.grabCd = Math.max(0, r.grabCd - dt); r.tackleCd = Math.max(0, r.tackleCd - dt);
  r.reach = Math.max(0, r.reach - dt); r.tackleT = Math.max(0, r.tackleT - dt);
  r.slowT = Math.max(0, r.slowT - dt); r.immune = Math.max(0, r.immune - dt);
  r.sprinting = false;
  if (r.state === ST.IDLE) { r.y = height(r.x, r.z); r.gy = r.y; r.vx = r.vy = r.vz = 0; return; }

  const [hx, hz] = gradient(r.x, r.z);
  const nf = 1 / (1 + hx * hx + hz * hz);
  const sp = Math.hypot(r.vx, r.vz);
  let ax = 0, az = 0;
  const fric = (decel) => { if (sp > 0.01) { const k = Math.min(decel * dt, sp) / sp / dt; ax -= r.vx * k; az -= r.vz * k; } };
  const slope = (f) => { ax += -G * hx * nf * f; az += -G * hz * nf * f; };
  switch (r.state) {
    case ST.RUN: {
      slope(SLOPE_RUN);
      const slow = r.slowT > 0 ? 0.3 : 1;
      const sprint = inp.s && inp.f && r.stamina > 0.02 && r.grounded;
      if (sprint) { r.sprinting = true; r.stamina = Math.max(0, r.stamina - dt / 3.2); }
      else r.stamina = Math.min(1, r.stamina + dt / (inp.s ? 9 : 5));
      if (inp.f) az += (sprint ? SPRINT_POWER : POWER) * slow;
      if (inp.b && r.vz > 0) az -= 9;
      ax += clamp(inp.ax, -1, 1) * 11;
      if (!inp.ax) ax -= r.vx * 3;
      ax -= K_DRAG * sp * r.vx; az -= K_DRAG * sp * r.vz;
      if (r.slowT > 0) { ax -= r.vx * 1.6; az -= r.vz * 1.6; }
      if (sp > DANGER) r.meter += (sp - DANGER) * 0.17 * dt * (r.grounded ? 1 : 0.4) * (sprint ? 1.4 : 1);
      else r.meter = Math.max(0, r.meter - 0.45 * dt);
      if (inp.b) r.meter = Math.max(0, r.meter - 0.4 * dt);
      if (r.diveBuf > 0 && r.airT < 0.25) {
        r.diveBuf = 0;
        r.state = ST.DIVE; r.st = 0;
        const h = Math.atan2(r.vx, Math.max(0.5, r.vz));
        r.vx += Math.sin(h) * 4.5; r.vz += Math.cos(h) * 4.5; r.vy = 3.4; r.grounded = false; r.airT = 0.01;
        race.events.push({ e: 'dive', id: r.id });
      } else if (r.jumpBuf > 0 && r.grounded) {
        r.jumpBuf = 0;
        r.vy = Math.max(r.vy, 0) + 4.2; r.grounded = false; r.jumped = true; r.airT = 0.01;
        race.events.push({ e: 'jump', id: r.id });
      }
      if (!predict) {
        if (r.meter >= 1) startTumble(race, r, 'speed');
        else if (sp > 14 && r.grounded && race.rng() < (sp - 14) * 0.14 * dt) startTumble(race, r, 'trip'); // random stumble at silly speeds
      }
      break;
    }
    case ST.DIVE:
      slope(0.7);
      ax -= K_DRAG * 0.5 * sp * r.vx; az -= K_DRAG * 0.5 * sp * r.vz;
      break;
    case ST.TUMBLE:
      slope(0.85);
      if (r.grounded) fric(2.4);
      ax -= K_DRAG * 0.6 * sp * r.vx; az -= K_DRAG * 0.6 * sp * r.vz;
      r.spin += r.spinRate * dt; r.spinRate = r.spinRate * (1 - 0.6 * dt) + (r.grounded ? sp * 0.3 * dt : 0);
      r.roll += r.rollRate * dt; r.rollRate *= (1 - 1.2 * dt);
      if ((sp < 3.5 && r.st > 1.4) || r.st > 6 || ((divePress || jumpPress || grabPress) && sp < 6.5 && r.st > 0.6)) { r.state = ST.GETUP; r.st = 0; r.dur = 0.8; }
      break;
    case ST.GETUP:
      slope(0.3);
      fric(9);
      if (r.st > r.dur) { r.state = ST.RUN; r.st = 0; r.immune = 1.2; r.spin = 0; r.roll = 0; r.meter = 0; }
      break;
    case ST.CELEBRATE:
      fric(12); slope(0.2);
      break;
  }
  r.vx += ax * dt; r.vz += az * dt;
  if (r.vz < -4) r.vz = -4;
  r.x += r.vx * dt; r.z += r.vz * dt;
  if (Math.abs(r.x) > TRACK_HALF) { r.x = Math.sign(r.x) * TRACK_HALF; r.vx = -r.vx * 0.3; }
  if (r.z > HAY_Z - 0.9) { r.z = HAY_Z - 0.9; if (r.vz > 0) { if (r.vz > 7 && !predict) startTumble(race, r, 'hay'); r.vz = -r.vz * 0.2; } }
  if (r.z < START_Z - 6) { r.z = START_Z - 6; r.vz = Math.max(0, r.vz); }

  // vertical: follow the ground, fly off crests; you never land a jump/dive/big air on your feet
  const g1 = height(r.x, r.z);
  r.vy -= G * dt; r.y += r.vy * dt;
  if (r.y <= g1) {
    const vyG = clamp((g1 - r.gy) / dt, -40, 7);
    if (!r.grounded) {
      const impact = -(r.vy - vyG);
      if (r.state === ST.RUN && !predict) {
        if (r.jumped || r.airT > 0.48) startTumble(race, r, r.jumped ? 'jump' : 'air', true);
        else if (impact > 7.5) startTumble(race, r, 'landing');
        else r.meter += Math.max(0, impact - 3.5) * 0.07;
      } else if (r.state === ST.DIVE && r.st > 0.12 && !predict) startTumble(race, r, 'dive', true);
      if (impact > 3 && r.airT > 0.12) race.events.push({ e: 'land', id: r.id, s: impact });
    }
    r.y = g1;
    if (r.state === ST.TUMBLE && !r.grounded && r.vy < vyG - 3) { r.vy = vyG + Math.min(5, (vyG - r.vy) * 0.35); r.grounded = false; } // bounce
    else { r.vy = vyG; r.grounded = true; }
    r.airT = 0;
  } else { r.grounded = false; r.airT += dt; }
  r.gy = g1;
  if ((r.state === ST.RUN || r.state === ST.DIVE) && sp > 0.6) {
    let d = Math.atan2(r.vx, r.vz) - r.heading;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    r.heading += d * Math.min(1, dt * 8);
  } else if (r.state === ST.CELEBRATE) {
    let d = Math.PI - r.heading; d = Math.atan2(Math.sin(d), Math.cos(d)); r.heading += d * Math.min(1, dt * 3);
  }

  // actions
  if (grabPress && r.grabCd <= 0 && (r.state === ST.RUN || r.state === ST.DIVE)) { r.reach = 0.35; r.grabCd = 0.55; race.events.push({ e: 'reach', id: r.id }); }
  if (tacklePress && r.tackleCd <= 0 && r.state === ST.RUN) {
    r.tackleT = 0.35; r.tackleCd = 0.7;
    if (!predict) {
      let best = null, bd = 2.0;
      for (const o of race.racers) {
        if (o === r || o.state === ST.TUMBLE || o.state === ST.CELEBRATE || o.state === ST.GETUP || o.finished) continue;
        const d = Math.hypot(o.x - r.x, o.z - r.z);
        if (d < bd && Math.abs(o.y - r.y) < 1.5) { bd = d; best = o; }
      }
      if (best) {
        r.tackleCd = 2.5; r.vx *= 0.8; r.vz *= 0.8;
        best.slowT = 1.0;
        const trip = best.immune <= 0;
        race.events.push({ e: 'grab', id: r.id, target: best.id, trip });
        if (trip) { best.vx += (best.x - r.x) * 1.5; best.vz *= 0.85; startTumble(race, best, 'grabbed'); }
      } else race.events.push({ e: 'whiff', id: r.id });
    }
  }
}

export function aiInput(race, r) {
  const a = r.ai, c = race.cheese, inp = r.aiInp, q = race.rng;
  if (race.phase === 'over') { inp.f = 0; inp.b = 1; inp.s = 0; inp.ax = 0; return inp; }
  if (r.state === ST.TUMBLE) { if (Math.hypot(r.vx, r.vz) < 6 && r.st > 0.8 && q() < 0.03) inp.d++; return inp; }
  const aheadCheese = c.released && c.heldBy == null && c.z > r.z - 2;
  let targetX = aheadCheese ? c.x + Math.sin(race.t * a.wf + a.ph) * a.wander * clamp((c.z - r.z) / 30, 0, 1) : a.laneX;
  for (const o of race.racers) {
    if (o === r) continue;
    const dz = o.z - r.z;
    if (dz > 0 && dz < 3 && Math.abs(o.x - r.x) < 1.0 && a.aggro < 0.5) targetX += (r.x >= o.x ? 1.5 : -1.5);
  }
  const dx = targetX - r.x;
  const desired = clamp(dx * 0.9, -6, 6);
  inp.ax = clamp((desired - r.vx) * 0.5, -1, 1);
  if (Math.abs(inp.ax) < 0.05) inp.ax = 0;
  if (r.meter > a.caution + 0.12) a.fwdHold = 0; else if (r.meter < a.caution - 0.15) a.fwdHold = 1;
  inp.f = a.fwdHold; inp.b = r.meter > a.caution + 0.3 ? 1 : 0;
  // sprint in bursts when balance allows
  if (a.sprintHold) { if (r.stamina < 0.15 || r.meter > a.caution * 0.6) a.sprintHold = 0; }
  else if (r.stamina > 0.8 && r.meter < 0.1 && q() < a.sprinty * 0.02) a.sprintHold = 1;
  inp.s = a.sprintHold;
  if (r.state === ST.RUN || r.state === ST.DIVE) {
    const d = Math.hypot(c.x - r.x, c.y - (r.y + 1), c.z - r.z);
    if (aheadCheese && d < 1.7 + race.reachBonus && q() < a.react) inp.g++;
    if (r.state === ST.RUN && aheadCheese) {
      const dz = c.z - r.z;
      if (dz > 1.6 && dz < 4.2 && Math.abs(c.x - r.x) < 1.3 && q() < 0.05 * a.react) inp.d++;
    }
    if (r.state === ST.DIVE && d < 2.3 && q() < 0.5) inp.g++;
    if (r.state === ST.RUN && r.tackleCd <= 0 && race.raceT > 3) {
      for (const o of race.racers) {
        if (o === r || o.state === ST.TUMBLE) continue;
        if (Math.hypot(o.x - r.x, o.z - r.z) < 1.7 && q() < a.aggro * 0.012) { inp.k++; break; }
      }
    }
  }
  return inp;
}

// Advance the race. inputs: Map/obj id -> input (humans). dt is split into 1/60 s substeps.
export function step(race, dt, inputs) {
  const n = Math.max(1, Math.round(dt / C.SUB));
  const h = dt / n;
  for (let s = 0; s < n; s++) substep(race, h, inputs);
}
const getInp = (inputs, id) => (inputs && (inputs.get ? inputs.get(id) : inputs[id])) || null;
function substep(race, dt, inputs) {
  race.t += dt;
  const c = race.cheese;
  if (race.phase === 'countdown') {
    race.cd -= dt;
    if (race.cd <= 1.5 && !c.released) { releaseCheese(race, c); race.events.push({ e: 'release' }); }
    if (race.cd <= 0) {
      race.phase = 'race'; race.raceT = 0;
      for (const r of race.racers) { r.state = ST.RUN; r.st = 0; }
      race.events.push({ e: 'go' });
    }
  } else if (race.phase === 'race') race.raceT += dt;
  else if (race.phase === 'over') race.overT += dt;

  for (const r of race.racers) {
    const inp = r.ai ? (race.phase === 'race' || race.phase === 'over' ? aiInput(race, r) : r.aiInp) : (getInp(inputs, r.id) || newInput());
    stepRacer(race, r, dt, inp, false);
  }
  stepCheese(race, dt);

  const R = race.racers;
  for (let i = 0; i < R.length; i++) for (let j = i + 1; j < R.length; j++) {
    const a = R[i], b = R[j];
    if (a.state === ST.IDLE) continue;
    const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz);
    if (d < 0.75 && d > 1e-4 && Math.abs(a.y - b.y) < 1.4) {
      const push = (0.75 - d) / 2, nx = dx / d, nz = dz / d;
      a.x -= nx * push; a.z -= nz * push; b.x += nx * push; b.z += nz * push;
      const rv = (b.vx - a.vx) * nx + (b.vz - a.vz) * nz;
      if (rv < 0) {
        a.vx += nx * rv * 0.5; a.vz += nz * rv * 0.5; b.vx -= nx * rv * 0.5; b.vz -= nz * rv * 0.5;
        if (-rv > 6) {
          // a tumbling body skittles whoever it hits
          if (a.state === ST.TUMBLE) startTumble(race, b, 'collision'); else if (b.state === ST.TUMBLE) startTumble(race, a, 'collision');
          else { const v = race.rng() < 0.5 ? a : b; if (race.rng() < 0.4) startTumble(race, v, 'collision'); }
        }
      }
    }
  }

  if (race.phase === 'race') {
    if (c.released && c.heldBy == null) {
      for (const r of R) {
        if (r.reach <= 0 || (r.state !== ST.RUN && r.state !== ST.DIVE)) continue;
        const cy = r.y + (r.state === ST.DIVE ? 0.45 : 1.0);
        const d = Math.hypot(c.x - r.x, c.y - cy, c.z - r.z);
        const reach = (r.state === ST.DIVE ? 2.3 : 1.7) + (r.ai ? 0 : race.reachBonus);
        if (d < reach) {
          c.heldBy = r.id; r.hasCheese = true; r.reach = 0;
          finishRace(race, r, 'cheese');
          break;
        }
      }
    }
    for (const r of R) {
      if (!r.finished && r.z >= FINISH_Z) {
        r.finished = true; r.finishTime = race.raceT; race.finishOrder.push(r.id);
        race.events.push({ e: 'finish', id: r.id });
        if (race.phase === 'race') finishRace(race, r, 'finish');
      }
    }
    if (race.raceT > 150) {
      const lead = R.reduce((a, b) => (b.z > a.z ? b : a), R[0]);
      finishRace(race, lead, 'timeout');
    }
  }
}
function finishRace(race, r, how) {
  race.phase = 'over'; race.overT = 0;
  race.result = { id: r.id, name: r.name, how, time: race.raceT };
  r.state = ST.CELEBRATE; r.st = 0; r.spin = r.roll = 0; r.vy = Math.min(r.vy, 0);
  race.events.push({ e: 'win', id: r.id, how });
}

export function rankings(race) {
  return [...race.racers].sort((a, b) => {
    if (race.result) { if (a.id === race.result.id) return -1; if (b.id === race.result.id) return 1; }
    return b.z - a.z;
  });
}

// ---------- compact network snapshot ----------
const r3 = v => Math.round(v * 1000) / 1000;
export function racerQuat(r) { return quatYXZ(r.heading, r.state === ST.TUMBLE ? r.spin : 0, r.state === ST.TUMBLE ? r.roll : 0); }
export function cheeseQuat(c) { return c.q; }
export function racerFlags(r) { return (r.reach > 0 ? 1 : 0) | (r.tackleT > 0 ? 2 : 0) | (r.slowT > 0 ? 4 : 0) | (r.finished ? 8 : 0) | (r.grounded ? 16 : 0) | (r.sprinting ? 32 : 0) | (r.jumped ? 64 : 0); }
export function snapshot(race, tick) {
  const PH = { countdown: 0, race: 1, over: 2 };
  const c = race.cheese;
  const out = {
    t: 's', k: tick, p: PH[race.phase], cd: r3(race.cd), rt: r3(race.raceT),
    r: race.racers.map(r => [r.id, r3(r.x), r3(r.y), r3(r.z), ...racerQuat(r).map(r3), r3(r.vx), r3(r.vy), r3(r.vz), r.state,
      racerFlags(r), r3(r.meter), r3(r.st), r3(r.stamina)]),
    c: [r3(c.x), r3(c.y), r3(c.z), ...c.q.map(r3), r3(c.vx), r3(c.vy), r3(c.vz), c.heldBy == null ? null : c.heldBy, c.released ? 1 : 0],
    e: race.events,
  };
  if (race.result) out.res = race.result;
  race.events = [];
  return out;
}
