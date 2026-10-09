// ---------------------------------------------------------------------------
// Cheese Chase - shared simulation core (no rendering, no DOM).
// Used by the browser (offline solo / split-screen, and client prediction)
// and by server.js (authoritative online races). Pure ES module.
// ---------------------------------------------------------------------------
export const C = { TICK: 30, SNAP: 30, SUB: 1 / 60 };
export const G = 16;               // gameplay gravity (m/s^2)
export const START_Z = -4;
export const FINISH_Z = 388;
export const HAY_Z = 414;
export const COURSE_END = HAY_Z + 16; // where the valley starts
export const TRACK_HALF = 21.2;
export const FENCE_X = 23.6;
export const CHEESE_R = 0.5;
export const CHEESE_HT = 0.17;     // half thickness of the wheel
export const RELEASE_CD = 2.0;    // the cheese goes when the countdown has this long left (race clock starts here)
export const COUNTDOWN = 4.5;      // seconds; cheese released 2 s before racers
export const ST = { IDLE: 0, RUN: 1, DIVE: 2, TUMBLE: 3, GETUP: 4, CELEBRATE: 5 };
const K_DRAG = 0.08, POWER = 6.0, SPRINT_POWER = 12.5, DANGER = 10.5, SLOPE_RUN = 0.5, SPRINT_TIME = 2.2;
export const AI_GRAB_DELAY = 13, ROLL_CHARGES = 2, ROLL_RECHARGE = 2.5;

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
const PROFILE = [[0, 0], [12, 0.72], [50, 0.8], [66, 1.0], [100, 0.98], [114, 0.6], [132, 0.62], [148, 0.92], [192, 0.85], [214, 0.45], [244, 0.05], [252, 0]].map(([z, s], i) => [i ? z * 1.5 : z, s]);
function slopeAt(z) {
  if (z <= 0) return 0;
  if (z > COURSE_END + 40) return -0.035 * Math.min(1, (z - COURSE_END - 40) / 60);
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
const Z0 = -200, Z1 = 1000, DZ = 0.25;
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
  for (let i = 0; i < 165; i++) {
    const big = r() < 0.25;
    moguls.push({
      x: (r() * 2 - 1) * 19, z: 10 + r() * 342,
      a: (r() < 0.2 ? -0.55 : 1) * (big ? 0.8 + r() * 0.6 : 0.3 + r() * 0.4),
      r: big ? 2.4 + r() * 1.6 : 1.3 + r() * 1.3,
    });
  }
  moguls.sort((a, b) => a.z - b.z);
}
function hillMask(z) {
  if (z < 4 || z > 375) return 0;
  return Math.min(1, (z - 4) / 10, (375 - z) / 25);
}
export function height(x, z) {
  let h = baseH(z);
  const ax = Math.abs(x);
  if (ax > 22) {
    const d = ax - 22;
    const bank = z < HAY_Z - 14 ? 1 : Math.max(0.12, 1 - (z - HAY_Z + 14) / 70); // banks flatten out into the valley
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
  } else if (z > 383 && ax < 120) h += (vnoise(x * 0.05, z * 0.05) - 0.5) * 2 * Math.min(1, (z - 383) / 60);
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
// Purely cosmetic runners. h = overall height scale, w = torso width (build). Colours: shirt (torso), sleeve (upper arm),
// arms (forearm), shorts (pelvis + thigh), legs (shin), shoes. hair style, hat, and a list of accessory extras.
export const CHARACTERS = [
  { name: 'Rugby Reg', h: 1.0, w: 1.32, skin: 0xe0ac69, shirt: 0xb8262b, hoops: 0xf4f4f4, sleeve: 0xb8262b, shorts: 0xf4f4f4, legs: 0xb8262b, shoes: 0x111111, hair: 0x2b1d0e, hairStyle: 'short', hat: 'headband', hatColor: 0xf4f4f4, extras: ['socks'] },
  { name: 'Farmer Fern', h: 1.1, w: 0.9, skin: 0xffd9b8, shirt: 0xb03a2e, check: 0x5a1a14, sleeve: 0xb03a2e, shorts: 0x3d5a80, legs: 0x3d5a80, shoes: 0x2e6b2e, boots: 0x2e6b2e, hair: 0xc8642a, hairStyle: 'short', hat: 'flatcap', hatColor: 0x6b5a3a, extras: ['overalls', 'straw'] },
  { name: 'Chef Brie', h: 0.95, w: 1.28, skin: 0x8d5524, shirt: 0xf8f8f8, sleeve: 0xf8f8f8, shorts: 0x444444, legs: 0x444444, shoes: 0x222222, hair: 0x1a1a1a, hairStyle: 'short', hat: 'chef', hatColor: 0xffffff, extras: ['belly', 'apron', 'mustache', 'buttons'] },
  { name: 'Sir Cheddalot', h: 1.05, w: 1.18, skin: 0xffdbac, shirt: 0xb8bec6, sleeve: 0xb8bec6, arms: 0x9aa1aa, shorts: 0x9aa1aa, legs: 0xb8bec6, shoes: 0x6b7078, hair: 0x6b4a2b, hairStyle: 'none', hat: 'knight', hatColor: 0xb8bec6, extras: ['tabard'], tabard: 0x1f4e9a, metal: true },
  { name: 'Captain Curd', h: 1.12, w: 1.25, skin: 0xe0ac69, shirt: 0x1f4fbf, sleeve: 0x1f4fbf, arms: 0x1f4fbf, shorts: 0xd62828, legs: 0x1f4fbf, shoes: 0xd62828, boots: 0xd62828, hair: 0x1a1a1a, hairStyle: 'quiff', hat: null, cape: 0xd62828, extras: ['mask', 'emblem', 'belt', 'shoulders'] },
  { name: 'Granny Gwen', h: 0.82, w: 1.05, skin: 0xffe0c4, shirt: 0xd98cb3, sleeve: 0xd98cb3, arms: 0xd98cb3, shorts: 0x7a6650, legs: 0xe8cfb0, shoes: 0x4a3020, hair: 0xd8d8d8, hairStyle: 'bun', hat: null, extras: ['skirt', 'glasses', 'buttons', 'handbag', 'pearls'] },
  { name: 'Moo-Suit Mo', h: 1.0, w: 1.15, skin: 0xf1c27d, shirt: 0xf4f4f4, sleeve: 0xf4f4f4, arms: 0xf4f4f4, shorts: 0xf4f4f4, legs: 0xf4f4f4, shoes: 0x1a1a1a, hair: 0x5a3a1a, hairStyle: 'none', hat: 'cowhood', hatColor: 0xf4f4f4, extras: ['spots', 'udder'] },
  { name: 'Lycra Lexi', h: 1.12, w: 0.84, skin: 0x8d5524, shirt: 0x9dff00, stripe: 0xff2fa0, sleeve: 0xff2fa0, shorts: 0x161616, legs: 0x9dff00, shoes: 0xff2fa0, hair: 0x1a1a1a, hairStyle: 'ponytail', hat: 'sweatband', hatColor: 0xff2fa0, extras: ['sunglasses'] },
  { name: 'Reverend Rupert', h: 1.15, w: 0.92, skin: 0xc68642, shirt: 0x151515, sleeve: 0x151515, arms: 0x151515, shorts: 0x151515, legs: 0x151515, shoes: 0x0a0a0a, hair: 0x9a9a9a, hairStyle: 'bald', hat: null, extras: ['robe', 'collar', 'glasses', 'cross'] },
  { name: 'Punk Pete', h: 1.0, w: 0.95, skin: 0xffdbac, shirt: 0x1c1c1c, sleeve: 0x1c1c1c, shorts: 0x2d4f8a, legs: 0x2d4f8a, shoes: 0x3a1010, boots: 0x3a1010, hair: 0x39ff14, hairStyle: 'mohawk', hat: null, extras: ['studs', 'rips', 'chain'] },
];
export const AI_NAMES = ['Bramble', 'Pip', 'Hattie', 'Big Tom', 'Moss', 'Dot', 'Wilf', 'Nell'];

// ---------- race ----------
// input: ax (-1..1 world x), f/b (run/brake held), s (sprint held), d = Space press counter (jump / dive / roll-jump / get up),
// g = E press counter (context grab: cheese if close, else a racer). k/j are legacy aliases of g/d.
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
export let LEDGE_DRAG = +(globalThis.process?.env?.LEDGE ?? 0.25);
function cheeseSub(race, c, h) {
  c.vy -= G * h;
  // the wheel runs away on the steep face (a head start the runners have to claw back on the run-out)
  if (c.z < 372) { const sl = Math.min(1.1, Math.max(0, -gradient(c.x, c.z)[1])); c.vz += 0.5 * sl * h; }
  // air drag + rolling resistance
  const sp = Math.hypot(c.vx, c.vy, c.vz);
  const ledge = c.z > 168 && c.z < 200 ? LEDGE_DRAG : 0; // the shallower ledge bogs it down: the natural place to catch it
  const dk = Math.max(0, 1 - (0.019 * sp + 0.027 + ledge + (sp > 15 ? (sp - 15) * 0.25 : 0)) * h); // hard-ish cap ~15 m/s
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
  c.released = true; c.vz = 7; c.vx = (race.rng() - 0.5) * 0.6;
  // spin to match rolling (axle = local x) plus a little random wobble
  const w = [c.vz / CHEESE_R, (race.rng() - 0.5) * 0.6, (race.rng() - 0.5) * 0.4];
  const l = qInvRot(c.q, w); c.L = qRot(c.q, [l[0] * IA, l[1] * ID, l[2] * ID]);
}

export function addRacer(race, { id, name, char = 0, ai = null }) {
  const i = race.racers.length;
  const r = {
    id, name, char, ai, idx: i,
    x: 0, y: 0, z: START_Z, vx: 0, vy: 0, vz: 0, heading: 0, state: ST.IDLE, st: 0, dur: 0,
    meter: 0, stamina: 1, sprinting: false, sprintLock: false, charges: ROLL_CHARGES, chargeT: 0, rollJumps: 0, cleanT: 0, involuntary: 0, grounded: true, airT: 0, immune: 0, gy: 0, jumped: false,
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
  return { rubber: 1, pull: 0, pref: -6 + q() * 14, side: (q() * 2 - 1) * 5, caution: 0.3 + q() * 0.5, aggro: 0.1 + q() * 0.6, sprinty: 0.3 + q() * 0.6, wander: 1 + q() * 3, wf: 0.3 + q() * 0.5, ph: q() * 6, react: 0.6 + q() * 0.35, laneX: (q() * 2 - 1) * 6, fwdHold: 1, sprintHold: 0 };
}
// start grid: humans in the middle with the AI lined up either side of them
export function gridOrder(race, rng = Math.random) {
  const humans = race.racers.filter((r) => !r.ai), bots = race.racers.filter((r) => r.ai).sort(() => rng() - 0.5);
  const half = Math.floor(bots.length / 2);
  race.racers = [...bots.slice(0, half), ...humans, ...bots.slice(half)];
  race.racers.forEach((r, i) => { r.idx = i; });
}
export function placeAtStart(race, r) {
  const n = Math.max(race.racers.length, 1);
  const spacing = Math.min(3, 36 / n);
  r.x = (r.idx - (n - 1) / 2) * spacing; r.z = START_Z; r.y = height(r.x, r.z); r.gy = r.y;
  r.vx = r.vy = r.vz = 0; r.heading = 0; r.state = ST.IDLE; r.st = 0; r.meter = 0; r.stamina = 1; r.spin = r.roll = 0; r.charges = ROLL_CHARGES; r.chargeT = 0; r.involuntary = 0; r.sprintLock = false;
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
  if (why !== 'dive' && why !== 'jump') r.involuntary++;
  if (r.grounded) r.vy = Math.max(r.vy, 1.2 + sp * 0.06);
  race.events.push({ e: 'tumble', id: r.id, why });
}
function cheeseDist(race, r) {
  const c = race.cheese;
  const dy = Math.max(0, Math.abs(c.y - (r.y + (r.state === ST.RUN ? 1.0 : 0.45))) - 0.6); // a little vertical slack (arms reach down)
  return Math.hypot(c.x - r.x, dy, c.z - r.z);
}
function aiMayGrab(race, r) { return !r.ai || race.raceT > AI_GRAB_DELAY; }

// One fixed physics substep for a racer. predict=true is used by online clients for their own
// racer: no random outcomes (tumbles / catches / tackles) are decided locally.
export function stepRacer(race, r, dt, inp, predict = false) {
  const dIn = (inp.d | 0) + (inp.j | 0), gIn = (inp.g | 0) + (inp.k | 0);
  const spacePress = dIn !== r._d, grabPress = gIn !== r._g;
  r._d = dIn; r._g = gIn;
  r.st += dt;
  r.grabCd = Math.max(0, r.grabCd - dt); r.tackleCd = Math.max(0, r.tackleCd - dt);
  r.reach = Math.max(0, r.reach - dt); r.tackleT = Math.max(0, r.tackleT - dt);
  r.slowT = Math.max(0, r.slowT - dt); r.immune = Math.max(0, r.immune - dt); r.cleanT = Math.max(0, r.cleanT - dt); r.jumpCd = Math.max(0, (r.jumpCd || 0) - dt); r.rjT = Math.max(0, (r.rjT || 0) - dt);
  if (r.charges < ROLL_CHARGES) { r.chargeT += dt; if (r.chargeT >= ROLL_RECHARGE) { r.charges++; r.chargeT = 0; } }
  r.sprinting = false;
  if (r.state === ST.IDLE) { r.y = height(r.x, r.z); r.gy = r.y; r.vx = r.vy = r.vz = 0; return; }
  // buffer Space briefly so it still fires if you're a hair off the ground
  if (spacePress) r.spaceBuf = 0.2; else r.spaceBuf = Math.max(0, (r.spaceBuf || 0) - dt);

  const [hx, hz] = gradient(r.x, r.z);
  const nf = 1 / (1 + hx * hx + hz * hz);
  const sp = Math.hypot(r.vx, r.vz);
  const c = race.cheese;
  let ax = 0, az = 0;
  const fric = (decel) => { if (sp > 0.01) { const k = Math.min(decel * dt, sp) / sp / dt; ax -= r.vx * k; az -= r.vz * k; } };
  const slope = (f) => { ax += -G * hx * nf * f; az += -G * hz * nf * f; };
  const steer = clamp(inp.ax, -1, 1);
  switch (r.state) {
    case ST.RUN: {
      slope(SLOPE_RUN);
      const slow = r.slowT > 0 ? 0.3 : 1;
      // sprint: 2.2 s of boost, refills only once Shift is released
      if (!inp.s) r.sprintLock = false;
      const sprint = inp.s && inp.f && !r.sprintLock && r.stamina > 0 && r.grounded;
      if (sprint) { r.sprinting = true; r.stamina = Math.max(0, r.stamina - dt / SPRINT_TIME); if (r.stamina <= 0) r.sprintLock = true; }
      else if (!inp.s) r.stamina = Math.min(1, r.stamina + dt / 4);
      const power = (sprint ? SPRINT_POWER : POWER) * (r.ai ? r.ai.rubber : 1);
      if (inp.f) az += power * slow + Math.max(0, 7 - r.vz) * 1.4 * slow; // quick get-away from low speed
      if (inp.b && r.vz > 0) az -= 10;
      // steering: chase a target sideways velocity (responsive, no ice-skating)
      ax += (steer * 7.5 - r.vx) * (steer ? 7 : 5);
      ax -= K_DRAG * sp * r.vx; az -= K_DRAG * sp * r.vz;
      if (r.slowT > 0) { ax -= r.vx * 1.6; az -= r.vz * 1.6; }
      if (r.cleanT > 0) az += 3; // clean-landing boost
      if (sp > DANGER) r.meter += (sp - DANGER) * 0.12 * dt * (r.grounded ? 1 : 0.4) * (sprint ? 1.5 : 1);
      else r.meter = Math.max(0, r.meter - 0.35 * dt);
      if (steer && sp > 8) r.meter += Math.abs(steer) * (sp - 8) * 0.035 * dt; // yanking the wheel at speed
      if (inp.b) r.meter = Math.max(0, r.meter - 1.0 * dt);
      if (r.spaceBuf > 0 && r.airT < 0.15 && r.jumpCd <= 0) {
        r.spaceBuf = 0;
        const dz = c.z - r.z, nearCheese = c.released && c.heldBy == null && dz > 0.5 && dz < 5.5 && Math.abs(c.x - r.x) < 2.2 && aiMayGrab(race, r);
        if (nearCheese) { // DIVE at the cheese
          r.state = ST.DIVE; r.st = 0;
          const h = Math.atan2(c.x - r.x, Math.max(0.5, dz));
          r.vx = r.vx * 0.5 + Math.sin(h) * (sp * 0.5 + 4.5); r.vz = r.vz * 0.5 + Math.cos(h) * (sp * 0.5 + 4.5); r.vy = (hx * r.vx + hz * r.vz) + 1.4; r.grounded = false; r.airT = 0.01; // skim along the slope
          race.events.push({ e: 'dive', id: r.id });
        } else { // JUMP
          r.vy = Math.max(r.vy, (hx * r.vx + hz * r.vz)) + 4.6; r.grounded = false; r.jumped = true; r.airT = 0.01; // relative to the slope
          r.jumpCd = 2.0;
          // a crest within the next 0.25 s of travel? (ground falls away below the current slope line) => eligible for a boost
          const la = 0.25, gx = r.x + r.vx * la, gz = r.z + r.vz * la;
          r.crestJump = height(gx, gz) < height(r.x, r.z) + (hx * r.vx + hz * r.vz) * la - 0.12;
          race.events.push({ e: 'jump', id: r.id });
        }
      }
      if (!predict) {
        if (r.meter >= 1) startTumble(race, r, 'speed');
        else if (sp > 14 && r.grounded && race.rng() < (sp - 14) * 0.08 * dt) startTumble(race, r, 'trip');
      }
      break;
    }
    case ST.DIVE:
      slope(0.7);
      ax += steer * 3;
      ax -= K_DRAG * 0.5 * sp * r.vx; az -= K_DRAG * 0.5 * sp * r.vz;
      break;
    case ST.TUMBLE: {
            // rolling keeps its momentum but is no faster than running (so it isn't an exploit)
      slope(0.8);
      if (r.grounded) fric(1.2);
      ax -= K_DRAG * 0.75 * sp * r.vx; az -= K_DRAG * 0.75 * sp * r.vz;
      ax += steer * (r.grounded ? 4 : 7); // lean / air-steer
      if (inp.f && !r.grounded) az += 2;
      r.spin += r.spinRate * dt; r.spinRate = r.spinRate * (1 - 0.6 * dt) + (r.grounded ? sp * 0.3 * dt : 0);
      r.roll += r.rollRate * dt; r.rollRate *= (1 - 1.2 * dt);
      const flat = Math.abs(hz) < 0.15;
      if (r.spaceBuf > 0 && r.st > 0.25) {
        if (sp >= 5 && r.charges > 0 && r.airT < 0.3 && (r.rjT || 0) <= 0) { // ROLL-JUMP: launch toward the cheese
          r.spaceBuf = 0; r.charges--; r.chargeT = 0; r.rollJumps++;
          const tx = c.heldBy == null ? clamp((c.x - r.x) * 0.25, -3, 3) : 0;
          r.vy = Math.max(r.vy, (hx * r.vx + hz * r.vz)) + 7; r.vz += 2.5; r.vx += tx + steer * 2; r.rjT = 0.8;
          { const sp2 = Math.hypot(r.vx, r.vz), cap = Math.max(sp, 14); if (sp2 > cap) { r.vx *= cap / sp2; r.vz *= cap / sp2; } } // never faster than a sprint
          r.grounded = false; r.airT = 0.01;
          race.events.push({ e: 'rjump', id: r.id });
        } else if (sp < 5) { r.spaceBuf = 0; r.state = ST.GETUP; r.st = 0; r.dur = 0.6; } // get up early
      }
      if ((sp < 3 && r.st > 0.7) || (flat && sp < 6 && r.st > 2.5) || r.st > 9) { r.state = ST.GETUP; r.st = 0; r.dur = 0.6; }
      break;
    }
    case ST.GETUP:
      slope(0.3);
      fric(7);
      if (r.st > r.dur) { r.state = ST.RUN; r.st = 0; r.immune = 1.5; r.spin = 0; r.roll = 0; r.meter = 0; }
      break;
    case ST.CELEBRATE:
      fric(12); slope(0.2);
      break;
  }
  if (r.ai && r.ai.pull && r.state !== ST.CELEBRATE && r.state !== ST.GETUP) az += r.ai.pull;
  r.vx += ax * dt; r.vz += az * dt;
  if (r.vz < -4) r.vz = -4;
  r.x += r.vx * dt; r.z += r.vz * dt;
  if (Math.abs(r.x) > TRACK_HALF) { r.x = Math.sign(r.x) * TRACK_HALF; r.vx = -r.vx * 0.3; }
  if (r.z > HAY_Z - 0.9) { r.z = HAY_Z - 0.9; if (r.vz > 0) { if (r.vz > 7 && !predict) startTumble(race, r, 'hay'); r.vz = -r.vz * 0.2; } }
  if (r.z < START_Z - 6) { r.z = START_Z - 6; r.vz = Math.max(0, r.vz); }

  // vertical
  const g1 = height(r.x, r.z);
  const vyG = clamp((g1 - r.gy) / dt, -40, 7);
  const wasGrounded = r.grounded;
  r.vy -= G * dt; r.y += r.vy * dt;
  // stick to the turf over crests while running (no accidental flights off every lump)
  if (wasGrounded && r.state === ST.RUN && !r.jumped && r.y > g1 && r.y - g1 < 0.3 && r.vy - vyG > -2) r.y = g1;
  if (r.y <= g1) {
    if (!wasGrounded) {
      const impact = -(r.vy - vyG);
      if (r.state === ST.RUN) {
        if (r.jumped) {
          // a well-timed jump lands clean with a little boost; a bad one sends you rolling
          if (impact < 5.5) { if (r.crestJump) r.cleanT = 0.5; race.events.push({ e: 'clean', id: r.id, boost: !!r.crestJump }); }
          else if (!predict) startTumble(race, r, 'jump', true);
          r.jumped = false;
        } else if (!predict && (impact > 9 || r.airT > 0.8)) startTumble(race, r, 'landing');
        else r.meter += Math.max(0, impact - 3.5) * 0.06;
      } else if (r.state === ST.DIVE && r.st > 0.12 && !predict) startTumble(race, r, 'dive', true);
      if (impact > 3 && r.airT > 0.12) race.events.push({ e: 'land', id: r.id, s: impact });
    }
    r.y = g1;
    if (r.state === ST.TUMBLE && !wasGrounded && r.vy < vyG - 3) { r.vy = vyG + Math.min(4, (vyG - r.vy) * 0.3); r.grounded = false; } // bounce
    else { r.vy = vyG; r.grounded = true; }
    r.airT = 0;
  } else { r.grounded = false; r.airT += dt; }
  r.gy = g1;
  if ((r.state === ST.RUN || r.state === ST.DIVE) && sp > 0.6) {
    let d = Math.atan2(r.vx, r.vz) - r.heading;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    r.heading += d * Math.min(1, dt * 12);
  } else if (r.state === ST.CELEBRATE) {
    let d = Math.PI - r.heading; d = Math.atan2(Math.sin(d), Math.cos(d)); r.heading += d * Math.min(1, dt * 3);
  }

  // E: context grab — the cheese if it's within reach, otherwise the nearest racer
  if (grabPress && r.grabCd <= 0 && (r.state === ST.RUN || r.state === ST.DIVE || r.state === ST.TUMBLE)) {
    const cheeseNear = c.released && c.heldBy == null && cheeseDist(race, r) < 3.2;
    if (cheeseNear || r.state !== ST.RUN) { r.reach = 0.35; r.grabCd = 0.45; race.events.push({ e: 'reach', id: r.id }); }
    else {
      r.tackleT = 0.35; r.grabCd = 0.45;
      if (!predict && r.tackleCd <= 0) {
        let best = null, bd = 2.0;
        for (const o of race.racers) {
          if (o === r || o.state === ST.TUMBLE || o.state === ST.CELEBRATE || o.state === ST.GETUP || o.finished) continue;
          const d = Math.hypot(o.x - r.x, o.z - r.z);
          if (d < bd && Math.abs(o.y - r.y) < 1.5) { bd = d; best = o; }
        }
        if (best) {
          r.tackleCd = 5; r.vx *= 0.8; r.vz *= 0.8;
          best.slowT = 1.0;
          const trip = best.immune <= 0;
          race.events.push({ e: 'grab', id: r.id, target: best.id, trip });
          if (trip) { best.vx += (best.x - r.x) * 1.5; best.vz *= 0.85; startTumble(race, best, 'grabbed'); }
        } else race.events.push({ e: 'whiff', id: r.id });
      }
    }
  }
}

export function aiInput(race, r) {
  const a = r.ai, c = race.cheese, inp = r.aiInp, q = race.rng;
  if (race.phase === 'over') { inp.f = 0; inp.b = 1; inp.s = 0; inp.ax = 0; return inp; }
  // stay in the pack around the leading human (so they're on screen): each bot hovers at its own gap,
  // mostly a few metres ahead (between you and the cheese). Pulls are a gentle extra accel applied in stepRacer.
  let lead = null;
  for (const o of race.racers) if (!o.ai && (!lead || o.z > lead.z)) lead = o;
  a.rubber = 1; a.pull = 0;
  // symmetric and weak, so skill still decides it: no help while tumbling, near the cheese, or late in the race
  if (lead && race.phase === 'race' && r.state !== ST.TUMBLE && Math.hypot(c.x - r.x, c.z - r.z) > 30 && r.z < 300) {
    const gap = r.z - lead.z;
    a.pull = clamp((a.pref - gap) * 0.3, -3, 3);
  }
  const canGrab = race.raceT > AI_GRAB_DELAY;
  const aheadCheese = c.released && c.heldBy == null && c.z > r.z - 2;
  // steer at where the cheese will be when we get there (position + lead), lightly blended toward the human's line
  const spd = Math.max(6, Math.hypot(r.vx, r.vz));
  const tLead = clamp((c.z - r.z) / spd, 0, 1.5);
  let targetX = aheadCheese ? c.x + c.vx * tLead + Math.sin(race.t * a.wf + a.ph) * a.wander * 0.4 * clamp((c.z - r.z) / 30, 0, 1) : a.laneX;
  if (lead && !(aheadCheese && c.z - r.z < 10)) targetX = targetX * 0.6 + (lead.x + a.side) * 0.4;
  targetX = clamp(targetX, -14, 14);
  for (const o of race.racers) {
    if (o === r) continue;
    const dz = o.z - r.z;
    if (dz > 0 && dz < 3 && Math.abs(o.x - r.x) < 1.0 && a.aggro < 0.5) targetX += (r.x >= o.x ? 1.5 : -1.5);
  }
  const dx = targetX - r.x;
  inp.ax = clamp(clamp(dx * 1.1, -7, 7) / 7.5, -1, 1);
  if (Math.abs(inp.ax) < 0.08) inp.ax = 0;
  if (r.state === ST.TUMBLE) {
    // roll-jump toward the cheese sometimes; otherwise ride it out
    const sp = Math.hypot(r.vx, r.vz);
    if (sp > 6 && r.charges > 0 && aheadCheese && canGrab && c.z - r.z < 14 && q() < 0.02) inp.d++;
    const d = cheeseDist(race, r);
    if (aheadCheese && canGrab && d < 2.2 && q() < a.react) inp.g++;
    return inp;
  }
  if (r.meter > a.caution + 0.1) a.fwdHold = 0; else if (r.meter < a.caution - 0.15) a.fwdHold = 1;
  inp.f = a.fwdHold; inp.b = r.meter > a.caution + 0.3 ? 1 : 0;
  if (a.sprintHold) { if (r.stamina < 0.05 || r.meter > Math.max(0.5, a.caution * 0.8)) a.sprintHold = 0; }
  else { const far = c.released && c.heldBy == null && c.z - r.z > 10; if (r.stamina > (far ? 0.8 : 0.95) && r.meter < (far ? 0.25 : 0.1) && q() < a.sprinty * (far ? 0.03 : 0.015)) a.sprintHold = 1; } // chase harder when the cheese is getting away
  inp.s = a.sprintHold;
  if ((r.state === ST.RUN || r.state === ST.DIVE) && canGrab) {
    const d = cheeseDist(race, r);
    if (aheadCheese && d < 1.6 + race.reachBonus && q() < a.react) inp.g++;
    if (r.state === ST.RUN && aheadCheese) {
      const dz = c.z - r.z;
      if (dz > 1.6 && dz < 4.2 && Math.abs(c.x - r.x) < 1.3 && q() < 0.05 * a.react) inp.d++;
    }
  }
  if (r.state === ST.RUN && r.tackleCd <= 0 && race.raceT > 3) {
    for (const o of race.racers) {
      if (o === r || o.state === ST.TUMBLE) continue;
      // only grab a rival who is AHEAD of us, when the cheese is in play nearby (no random trips mid-hill)
      if (o.z > r.z && Math.hypot(o.x - r.x, o.z - r.z) < 1.7 && Math.hypot(c.x - o.x, c.z - o.z) < 20 && cheeseDist(race, r) > 3.5 && q() < a.aggro * 0.002) { inp.g++; break; }
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
    if (race.cd <= RELEASE_CD && !c.released) { releaseCheese(race, c); race.events.push({ e: 'release' }); }
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
        if (!aiMayGrab(race, r)) continue;
        const diving = r.state === ST.DIVE, airRoll = r.state === ST.TUMBLE && !r.grounded;
        if (!(r.reach > 0 && (r.state === ST.RUN || r.state === ST.DIVE || r.state === ST.TUMBLE)) && !diving && !airRoll) continue;
        const d = cheeseDist(race, r);
        // a dive (or a flying roll-jump) at the cheese grabs it automatically
        const reach = (r.reach > 0 ? (diving ? 2.3 : r.state === ST.TUMBLE ? 1.6 : 1.7) : diving ? 1.9 : 1.3) + (r.ai ? 0 : race.reachBonus);
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

// ONE ranking used everywhere (HUD, results, points, server): winner, then finishers in finish order,
// then furthest down the hill; exact ties broken by id so the order is always total and stable.
export function rankRacers(racers, result) {
  const wid = result ? result.id : null;
  return [...racers].sort((a, b) => {
    if (wid != null) { if (a.id === wid) return -1; if (b.id === wid) return 1; }
    const fa = a.finished ? 1 : 0, fb = b.finished ? 1 : 0;
    if (fa !== fb) return fb - fa;
    if (fa && fb && a.finishTime && b.finishTime && a.finishTime !== b.finishTime) return a.finishTime - b.finishTime;
    const dz = Math.round(b.z * 100) - Math.round(a.z * 100);
    if (dz) return dz;
    return String(a.id) < String(b.id) ? -1 : String(a.id) > String(b.id) ? 1 : 0;
  });
}
export function rankings(race) { return rankRacers(race.racers, race.result); }
// heat points by placing (points only decide the best-of-3 match)
export const HEAT_POINTS = [10, 7, 5, 3, 2, 1];

// ---------- compact network snapshot ----------
const r3 = v => Math.round(v * 1000) / 1000;
export function racerQuat(r) { return quatYXZ(r.heading, r.state === ST.TUMBLE ? r.spin : 0, r.state === ST.TUMBLE ? r.roll : 0); }
export function cheeseQuat(c) { return c.q; }
export function racerFlags(r) { return (r.reach > 0 ? 1 : 0) | (r.tackleT > 0 ? 2 : 0) | (r.slowT > 0 ? 4 : 0) | (r.finished ? 8 : 0) | (r.grounded ? 16 : 0) | (r.sprinting ? 32 : 0) | (r.jumped ? 64 : 0) | (r.cleanT > 0 ? 128 : 0); }
export function snapshot(race, tick) {
  const PH = { countdown: 0, race: 1, over: 2 };
  const c = race.cheese;
  const out = {
    t: 's', k: tick, p: PH[race.phase], cd: r3(race.cd), rt: r3(race.raceT),
    r: race.racers.map(r => [r.id, r3(r.x), r3(r.y), r3(r.z), ...racerQuat(r).map(r3), r3(r.vx), r3(r.vy), r3(r.vz), r.state,
      racerFlags(r), r3(r.meter), r3(r.st), r3(r.stamina), r.charges]),
    c: [r3(c.x), r3(c.y), r3(c.z), ...c.q.map(r3), r3(c.vx), r3(c.vy), r3(c.vz), c.heldBy == null ? null : c.heldBy, c.released ? 1 : 0],
    e: race.events,
  };
  if (race.result) out.res = race.result;
  race.events = [];
  return out;
}
