// ---------------------------------------------------------------------------
// Cheese Chase - shared simulation core (no rendering, no DOM).
// Used by the browser (offline solo / split-screen, and client prediction)
// and by server.js (authoritative online races). Pure ES module.
// ---------------------------------------------------------------------------
export const C = { TICK: 30, SNAP: 20, SUB: 1 / 60 };
export const G = 16;               // gameplay gravity (m/s^2)
export const START_Z = -4;
export const FINISH_Z = 258;
export const HAY_Z = 284;
export const TRACK_HALF = 21.2;
export const FENCE_X = 23.6;
export const CHEESE_R = 0.5;
export const COUNTDOWN = 4;        // seconds; cheese released 1 s before racers
export const ST = { IDLE: 0, RUN: 1, DIVE: 2, TUMBLE: 3, GETUP: 4, CELEBRATE: 5 };
const K_DRAG = 0.065, POWER = 7, DANGER = 12;

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;

// ---------- hill profile (integrated slope table) ----------
const Z0 = -200, Z1 = 600, DZ = 0.25;
const baseTable = new Float32Array(Math.ceil((Z1 - Z0) / DZ) + 2);
function slopeAt(z) {
  if (z < 0) return 0;
  if (z < 15) return 0.66 * (z / 15) * (z / 15) * (3 - 2 * z / 15);
  const mid = (zz) => 0.66 + 0.09 * Math.sin(zz * 0.045) + 0.06 * Math.sin(zz * 0.11 + 1);
  if (z < 200) return mid(z);
  if (z < 250) { const t = (z - 200) / 50; return mid(200) * (1 - t * t * (3 - 2 * t)); }
  if (z > 330) return -0.08 * Math.min(1, (z - 330) / 60);
  return 0;
}
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
const moguls = [];
{
  const r = mulberry32(1234);
  for (let i = 0; i < 85; i++) {
    const big = r() < 0.25;
    moguls.push({
      x: (r() * 2 - 1) * 19, z: 12 + r() * 225,
      a: (r() < 0.15 ? -0.5 : 1) * (big ? 0.9 + r() * 0.5 : 0.35 + r() * 0.45),
      r: big ? 2.6 + r() * 1.4 : 1.6 + r() * 1.4,
    });
  }
  moguls.sort((a, b) => a.z - b.z);
}
function hillMask(z) {
  if (z < 4 || z > 248) return 0;
  return Math.min(1, (z - 4) / 10, (248 - z) / 25);
}
export function height(x, z) {
  let h = baseH(z);
  const ax = Math.abs(x);
  if (ax > 22) {
    const d = ax - 22;
    h += d < 10 ? 0.035 * d * d : 3.5 + 0.7 * (d - 10);
    if (ax > 34) h += Math.sin(x * 0.05 + 1) * Math.cos(z * 0.035) * 4 * Math.min(1, (ax - 34) / 25);
  }
  const f = hillMask(z);
  if (f > 0) {
    let b = 0.26 * Math.sin(0.23 * x + 0.11 * z) * Math.sin(0.19 * z + 1.3)
      + 0.17 * Math.sin(0.41 * z - 0.2 * x) + 0.1 * Math.sin(0.7 * x + 0.53 * z);
    for (let i = 0; i < moguls.length; i++) {
      const m = moguls[i];
      const dz = z - m.z;
      if (dz > 6) continue;
      if (dz < -6) break;
      const dx = x - m.x;
      const d2 = (dx * dx + dz * dz) / (m.r * m.r);
      if (d2 < 4) b += m.a * Math.exp(-d2 * 1.6);
    }
    h += b * f;
  }
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
export function newInput() { return { ax: 0, f: 0, b: 0, d: 0, g: 0, k: 0 }; }

export function createRace(seed = 1) {
  return {
    seed, rng: mulberry32(seed), t: 0, phase: 'countdown', cd: COUNTDOWN, raceT: 0, overT: 0,
    racers: [], cheese: makeCheese(), events: [], result: null, reachBonus: 0, finishOrder: [],
  };
}
function makeCheese() {
  return { x: 0, y: height(0, 0.8) + CHEESE_R, z: 0.8, vx: 0, vy: 0, vz: 0, heading: 0, spin: 0, tilt: 0, released: false, heldBy: null, wob: 0 };
}
export function addRacer(race, { id, name, char = 0, ai = null }) {
  const i = race.racers.length;
  const r = {
    id, name, char, ai, idx: i,
    x: 0, y: 0, z: START_Z, vx: 0, vy: 0, vz: 0, heading: 0, state: ST.IDLE, st: 0, dur: 0,
    meter: 0, grounded: true, airT: 0, immune: 0, gy: 0,
    reach: 0, grabCd: 0, tackleT: 0, tackleCd: 0, slowT: 0, spin: 0, roll: 0, spinRate: 0, rollRate: 0,
    finished: false, finishTime: 0, hasCheese: false, _d: 0, _g: 0, _k: 0, aiInp: newInput(),
  };
  if (ai === true) r.ai = makeAI(race);
  race.racers.push(r);
  placeAtStart(race, r);
  return r;
}
export function makeAI(race) {
  const q = race.rng;
  return { power: 6.3 + q() * 0.9, caution: 0.35 + q() * 0.5, aggro: 0.15 + q() * 0.8, wander: 1 + q() * 3, wf: 0.3 + q() * 0.5, ph: q() * 6, react: 0.6 + q() * 0.35, laneX: (q() * 2 - 1) * 6, fwdHold: 1 };
}
export function placeAtStart(race, r) {
  const n = Math.max(race.racers.length, 1);
  const spacing = Math.min(3, 36 / n);
  r.x = (r.idx - (n - 1) / 2) * spacing; r.z = START_Z; r.y = height(r.x, r.z); r.gy = r.y;
  r.vx = r.vy = r.vz = 0; r.heading = 0; r.state = ST.IDLE; r.st = 0; r.meter = 0; r.spin = r.roll = 0;
  r.finished = false; r.hasCheese = false; r.slowT = r.reach = r.tackleT = 0;
}
export function resetRace(race, seed) {
  race.seed = seed; race.rng = mulberry32(seed); race.t = 0; race.phase = 'countdown'; race.cd = COUNTDOWN;
  race.raceT = 0; race.overT = 0; race.cheese = makeCheese(); race.events = []; race.result = null; race.finishOrder = [];
  for (const r of race.racers) placeAtStart(race, r);
  for (const r of race.racers) placeAtStart(race, r);
}

function startTumble(race, r, why) {
  if (r.immune > 0 || r.state === ST.TUMBLE || r.state === ST.CELEBRATE) return;
  const sp = Math.hypot(r.vx, r.vz);
  r.state = ST.TUMBLE; r.st = 0; r.dur = 1.3 + race.rng() * 0.7 + sp * 0.03;
  r.spinRate = 5 + sp * 0.55; r.rollRate = (race.rng() - 0.5) * 6; r.meter = 0;
  r.vy = Math.max(r.vy, 2 + sp * 0.12);
  race.events.push({ e: 'tumble', id: r.id, why });
}

// One fixed physics substep for a racer. predict=true is used by online clients for their own
// racer: no random outcomes (tumbles / catches / tackles) are decided locally.
export function stepRacer(race, r, dt, inp, predict = false) {
  const divePress = inp.d !== r._d, grabPress = inp.g !== r._g, tacklePress = inp.k !== r._k;
  r._d = inp.d; r._g = inp.g; r._k = inp.k;
  r.st += dt;
  r.grabCd = Math.max(0, r.grabCd - dt); r.tackleCd = Math.max(0, r.tackleCd - dt);
  r.reach = Math.max(0, r.reach - dt); r.tackleT = Math.max(0, r.tackleT - dt);
  r.slowT = Math.max(0, r.slowT - dt); r.immune = Math.max(0, r.immune - dt);
  if (r.state === ST.IDLE) { r.y = height(r.x, r.z); r.gy = r.y; r.vx = r.vy = r.vz = 0; return; }

  const [hx, hz] = gradient(r.x, r.z);
  const nf = 1 / (1 + hx * hx + hz * hz);
  const sp = Math.hypot(r.vx, r.vz);
  let ax = 0, az = 0;
  const fric = (decel) => { if (sp > 0.01) { const k = Math.min(decel * dt, sp) / sp / dt; ax -= r.vx * k; az -= r.vz * k; } };
  switch (r.state) {
    case ST.RUN: {
      ax += -G * hx * nf * 0.55; az += -G * hz * nf * 0.55;
      const slow = r.slowT > 0 ? 0.3 : 1;
      if (inp.f) az += POWER * slow;
      if (inp.b && r.vz > 0) az -= 9;
      ax += clamp(inp.ax, -1, 1) * 11;
      if (!inp.ax) ax -= r.vx * 3;
      ax -= K_DRAG * sp * r.vx; az -= K_DRAG * sp * r.vz;
      if (r.slowT > 0) { ax -= r.vx * 1.6; az -= r.vz * 1.6; }
      if (sp > DANGER) r.meter += (sp - DANGER) * 0.26 * dt * (r.grounded ? 1 : 0.5);
      else r.meter = Math.max(0, r.meter - 0.45 * dt);
      if (inp.b) r.meter = Math.max(0, r.meter - 0.35 * dt);
      if (divePress && r.airT < 0.25) {
        r.state = ST.DIVE; r.st = 0;
        const h = Math.atan2(r.vx, Math.max(0.5, r.vz));
        r.vx += Math.sin(h) * 4.5; r.vz += Math.cos(h) * 4.5; r.vy = 3.2; r.grounded = false;
        race.events.push({ e: 'dive', id: r.id });
      }
      if (!predict && r.meter >= 1) startTumble(race, r, 'speed');
      break;
    }
    case ST.DIVE:
      ax += -G * hx * nf * 0.7; az += -G * hz * nf * 0.7;
      if (r.grounded) fric(5.5);
      ax -= K_DRAG * 0.5 * sp * r.vx; az -= K_DRAG * 0.5 * sp * r.vz;
      if (r.st > 0.95) { r.state = ST.GETUP; r.st = 0; r.dur = 0.6; }
      break;
    case ST.TUMBLE:
      ax += -G * hx * nf * 0.75; az += -G * hz * nf * 0.75;
      if (r.grounded) fric(3.6);
      ax -= K_DRAG * sp * r.vx; az -= K_DRAG * sp * r.vz;
      r.spin += r.spinRate * dt; r.spinRate *= (1 - 0.5 * dt);
      r.roll += r.rollRate * dt; r.rollRate *= (1 - 1.2 * dt);
      if (r.st > r.dur && sp < 9) { r.state = ST.GETUP; r.st = 0; r.dur = 0.75; }
      break;
    case ST.GETUP:
      ax += -G * hx * nf * 0.3; az += -G * hz * nf * 0.3;
      fric(9);
      if (r.st > r.dur) { r.state = ST.RUN; r.st = 0; r.immune = 1.2; r.spin = 0; r.roll = 0; r.meter = 0; }
      break;
    case ST.CELEBRATE:
      fric(12); ax += -G * hx * nf * 0.2; az += -G * hz * nf * 0.2;
      break;
  }
  r.vx += ax * dt; r.vz += az * dt;
  if (r.vz < -4) r.vz = -4;
  r.x += r.vx * dt; r.z += r.vz * dt;
  if (Math.abs(r.x) > TRACK_HALF) { r.x = Math.sign(r.x) * TRACK_HALF; r.vx = -r.vx * 0.3; }
  if (r.z > HAY_Z - 0.9) { r.z = HAY_Z - 0.9; if (r.vz > 0) { if (r.vz > 7 && !predict) startTumble(race, r, 'hay'); r.vz = -r.vz * 0.2; } }
  if (r.z < START_Z - 6) { r.z = START_Z - 6; r.vz = Math.max(0, r.vz); }

  // vertical: follow the ground, get airborne over crests, hard landings can trip you
  const g1 = height(r.x, r.z);
  r.vy -= G * dt; r.y += r.vy * dt;
  if (r.y <= g1) {
    const vyG = clamp((g1 - r.gy) / dt, -40, 7);
    if (!r.grounded) {
      const impact = -(r.vy - vyG);
      if (r.state === ST.RUN) {
        if (impact > 8.8 && !predict) startTumble(race, r, 'landing');
        else r.meter += Math.max(0, impact - 3.5) * 0.06;
      }
      if (impact > 3 && r.airT > 0.12) race.events.push({ e: 'land', id: r.id, s: impact });
    }
    r.y = g1; r.vy = r.state === ST.TUMBLE && !r.grounded && r.vy < -3 ? Math.min(vyG + 2.5, 5) : vyG;
    r.grounded = r.state !== ST.TUMBLE || r.vy <= vyG + 0.01; r.airT = 0;
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
        if (o === r || o.state === ST.TUMBLE || o.state === ST.CELEBRATE || o.finished) continue;
        const d = Math.hypot(o.x - r.x, o.z - r.z);
        if (d < bd && Math.abs(o.y - r.y) < 1.5) { bd = d; best = o; }
      }
      if (best) {
        r.tackleCd = 1.8; r.vx *= 0.85; r.vz *= 0.85;
        best.slowT = 1.0;
        const osp = Math.hypot(best.vx, best.vz);
        const trip = best.immune <= 0 && race.rng() < 0.32 + (osp > 10 ? 0.25 : 0) + (best.state === ST.DIVE ? 0.2 : 0);
        race.events.push({ e: 'grab', id: r.id, target: best.id, trip });
        if (trip) startTumble(race, best, 'grabbed');
      } else race.events.push({ e: 'whiff', id: r.id });
    }
  }
}

function stepCheese(race, dt) {
  const c = race.cheese;
  if (c.heldBy != null) {
    const h = race.racers.find(r => r.id === c.heldBy);
    if (h) { c.x = h.x; c.z = h.z; c.y = h.y + 2.15; c.vx = c.vy = c.vz = 0; c.tilt = 0; c.heading = h.heading + Math.PI / 2; }
    return;
  }
  if (!c.released) { c.y = height(c.x, c.z) + CHEESE_R; return; }
  c.vy -= G * dt;
  c.x += c.vx * dt; c.y += c.vy * dt; c.z += c.vz * dt;
  const gh = height(c.x, c.z) + CHEESE_R;
  if (c.y <= gh) {
    const [hx, hz] = gradient(c.x, c.z);
    const inv = 1 / Math.sqrt(hx * hx + 1 + hz * hz);
    const nx = -hx * inv, ny = inv, nz = -hz * inv;
    const vn = c.vx * nx + c.vy * ny + c.vz * nz;
    if (vn < 0) {
      const impact = -vn;
      const e = impact > 2.5 ? 0.42 : 0;
      c.vx -= (1 + e) * vn * nx; c.vy -= (1 + e) * vn * ny; c.vz -= (1 + e) * vn * nz;
      if (impact > 3.5) {
        c.vx += (race.rng() - 0.5) * Math.min(impact, 8) * 0.3;
        c.vx *= 0.96; c.vz *= 0.96;
        c.wob = Math.min(1, c.wob + impact * 0.08);
        race.events.push({ e: 'bounce', x: c.x, y: c.y - CHEESE_R, z: c.z, s: impact });
      }
    }
    c.y = gh;
    const sp = Math.hypot(c.vx, c.vy, c.vz);
    if (sp > 0.001) {
      const dec = (0.05 * sp * sp + 0.75) * dt;
      const k = Math.max(0, 1 - dec / sp);
      c.vx *= k; c.vy *= k; c.vz *= k;
    }
  }
  { const hs0 = Math.hypot(c.vx, c.vz); if (hs0 > 16.5) { c.vx *= 16.5 / hs0; c.vz *= 16.5 / hs0; } }
  if (Math.abs(c.x) > TRACK_HALF - 0.3) { c.x = Math.sign(c.x) * (TRACK_HALF - 0.3); c.vx = -c.vx * 0.5; }
  if (c.z > HAY_Z - 0.6) { c.z = HAY_Z - 0.6; c.vz = -Math.abs(c.vz) * 0.25; }
  const hs = Math.hypot(c.vx, c.vz);
  if (hs > 0.3) {
    let d = Math.atan2(c.vx, c.vz) - c.heading; d = Math.atan2(Math.sin(d), Math.cos(d));
    c.heading += d * Math.min(1, dt * 6);
  }
  c.spin += hs / CHEESE_R * dt;
  c.wob = Math.max(0, c.wob - dt * 0.5);
  c.tilt = Math.sin(race.t * 9) * (0.04 + c.wob * 0.35) * Math.min(1, hs / 6);
}

export function aiInput(race, r) {
  const a = r.ai, c = race.cheese, inp = r.aiInp, q = race.rng;
  if (race.phase === 'over') { inp.f = 0; inp.b = 1; inp.ax = 0; return inp; }
  const aheadCheese = c.released && c.heldBy == null && c.z > r.z - 2;
  let targetX = aheadCheese ? c.x + Math.sin(race.t * a.wf + a.ph) * a.wander * clamp((c.z - r.z) / 30, 0, 1) : a.laneX;
  // avoid running straight up someone's back
  for (const o of race.racers) {
    if (o === r) continue;
    const dz = o.z - r.z;
    if (dz > 0 && dz < 3 && Math.abs(o.x - r.x) < 1.0 && a.aggro < 0.6) targetX += (r.x >= o.x ? 1.5 : -1.5);
  }
  const dx = targetX - r.x;
  const desired = clamp(dx * 0.9, -6, 6);
  inp.ax = clamp((desired - r.vx) * 0.5, -1, 1);
  if (Math.abs(inp.ax) < 0.05) inp.ax = 0;
  if (r.meter > a.caution + 0.12) a.fwdHold = 0; else if (r.meter < a.caution - 0.15) a.fwdHold = 1;
  inp.f = a.fwdHold; inp.b = r.meter > a.caution + 0.3 ? 1 : 0;
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
        if (Math.hypot(o.x - r.x, o.z - r.z) < 1.7 && q() < a.aggro * 0.02) { inp.k++; break; }
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
    if (race.cd <= 1 && !c.released) { c.released = true; c.vz = 4.5; race.events.push({ e: 'release' }); }
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

  // racer-racer collisions
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
        if (-rv > 6) { const v = race.rng() < 0.5 ? a : b; if (race.rng() < 0.4) startTumble(race, v, 'collision'); }
      }
    }
  }

  if (race.phase === 'race') {
    // cheese grabs
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
  r.state = ST.CELEBRATE; r.st = 0; r.spin = r.roll = 0;
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
export function cheeseQuat(c) { return quatYXZ(c.heading, c.spin, c.tilt); }
export function snapshot(race, tick) {
  const PH = { countdown: 0, race: 1, over: 2 };
  const out = {
    t: 's', k: tick, p: PH[race.phase], cd: r3(race.cd), rt: r3(race.raceT),
    r: race.racers.map(r => {
      const q = racerQuat(r);
      return [r.id, r3(r.x), r3(r.y), r3(r.z), ...q.map(r3), r3(r.vx), r3(r.vy), r3(r.vz), r.state,
        (r.reach > 0 ? 1 : 0) | (r.tackleT > 0 ? 2 : 0) | (r.slowT > 0 ? 4 : 0) | (r.finished ? 8 : 0) | (r.grounded ? 16 : 0), r3(r.meter), r3(r.st)];
    }),
    c: [r3(race.cheese.x), r3(race.cheese.y), r3(race.cheese.z), ...cheeseQuat(race.cheese).map(r3), r3(race.cheese.vx), r3(race.cheese.vy), r3(race.cheese.vz), race.cheese.heldBy == null ? null : race.cheese.heldBy, race.cheese.released ? 1 : 0],
    e: race.events,
  };
  if (race.result) out.res = race.result;
  race.events = [];
  return out;
}
