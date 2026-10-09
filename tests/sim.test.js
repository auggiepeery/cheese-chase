// Headless simulation sanity test of the shared core: AI-only races must finish with a winner.
import * as Core from '../src/core.js';
let ok = 0; const times = []; let invol = 0, runners = 0, earlyAICatch = 0;
for (let seed = 1; seed <= 10; seed++) {
  const race = Core.createRace(seed);
  for (let i = 0; i < 6; i++) Core.addRacer(race, { id: 'ai' + i, name: 'AI ' + i, char: i, ai: true });
  let t = 0;
  while (race.phase !== 'over' && t < 200) { Core.step(race, 1 / 30, {}); t += 1 / 30; race.events = []; }
  const res = race.result;
  if (!res) throw new Error('race did not finish, seed ' + seed);
  for (const r of race.racers) if (![r.x, r.y, r.z].every(Number.isFinite)) throw new Error('NaN position');
  console.log(`seed ${seed}: ${res.name} won by ${res.how} in ${res.time.toFixed(1)} s`);
  times.push(res.time);
  if (res.how === 'cheese' && res.time < Core.AI_GRAB_DELAY) earlyAICatch++;
  for (const r of race.racers) { invol += r.involuntary; runners++; }
  ok++;
}
times.sort((a, b) => a - b);
const med = times[times.length >> 1];
if (med < 25 || med > 60) throw new Error('race pacing off: median ' + med.toFixed(1) + ' s');
if (earlyAICatch) throw new Error('AI caught the cheese inside the grab-delay window');
if (invol / runners > 2) throw new Error('too many involuntary tumbles: ' + (invol / runners).toFixed(2) + ' per runner');
console.log(`sim.test OK (${ok} races, median ${med.toFixed(1)} s, ${(invol / runners).toFixed(2)} involuntary tumbles per runner)`);

// rolling must not be slower than running on the steep face
{
  const trial = (tumble) => {
    const race = Core.createRace(3); const r = Core.addRacer(race, { id: 'p', name: 'p' });
    race.phase = 'race'; race.cd = 0; r.z = 60; r.y = r.gy = Core.height(0, 60); r.vz = 10; r.state = Core.ST.RUN; r.immune = 99; r.grounded = true;
    if (tumble) { r.state = Core.ST.TUMBLE; r.st = 0; }
    const inp = { ...Core.newInput(), f: 1 };
    let minTumbleSp = Infinity;
    for (let i = 0; i < 180; i++) {
      Core.stepRacer(race, r, 1 / 60, inp, false); r.meter = 0;
      if (tumble) { if (r.state !== Core.ST.TUMBLE) throw new Error('tumble ended on the steep face at speed ' + Math.hypot(r.vx, r.vz).toFixed(1)); minTumbleSp = Math.min(minTumbleSp, Math.hypot(r.vx, r.vz)); }
    }
    return { dist: r.z - 60, speed: Math.hypot(r.vx, r.vz), minTumbleSp };
  };
  const run = trial(false), roll = trial(true);
  if (roll.dist < run.dist) throw new Error(`rolling (${roll.dist.toFixed(1)} m) slower than running (${run.dist.toFixed(1)} m)`);
  if (roll.speed < 10) throw new Error('rolling lost its momentum: ' + roll.speed.toFixed(1));
  console.log(`rolling OK (3 s on the steep face: run ${run.dist.toFixed(1)} m, roll ${roll.dist.toFixed(1)} m, roll end speed ${roll.speed.toFixed(1)} m/s)`);
}

// roll-jump: Space mid-tumble launches you up and forward, uses a charge, steers in the air, recharges
{
  const race = Core.createRace(4); const r = Core.addRacer(race, { id: 'p', name: 'p' });
  race.phase = 'race'; race.cd = 0; r.z = 70; r.y = r.gy = Core.height(0, 70); r.vz = 12; r.grounded = true;
  r.state = Core.ST.TUMBLE; r.st = 0.5;
  const inp = Core.newInput();
  Core.stepRacer(race, r, 1 / 60, inp, false);
  const vz0 = r.vz, ch0 = r.charges;
  inp.d++; Core.stepRacer(race, r, 1 / 60, inp, false);
  if (!race.events.some((e) => e.e === 'rjump')) throw new Error('roll-jump did not fire');
  if (!(r.vy > 4) || r.grounded) throw new Error('roll-jump did not launch upward: vy=' + r.vy);
  if (!(r.vz > vz0 + 2)) throw new Error('roll-jump did not push forward');
  if (r.charges !== ch0 - 1) throw new Error('roll-jump did not use a charge');
  inp.ax = 1; const x0 = r.x;
  for (let i = 0; i < 20; i++) Core.stepRacer(race, r, 1 / 60, inp, false);
  if (!(r.x > x0 + 0.3)) throw new Error('no air steering');
  // charges run out, then refill
  r.charges = 0; r.st = 1; r.grounded = true; r.airT = 0; const vy = r.vy; inp.d++; race.events = [];
  Core.stepRacer(race, r, 1 / 60, inp, false);
  if (race.events.some((e) => e.e === 'rjump')) throw new Error('roll-jump fired with no charges');
  for (let i = 0; i < 60 * (Core.ROLL_RECHARGE + 0.1); i++) Core.stepRacer(race, r, 1 / 60, inp, false);
  if (r.charges < 1) throw new Error('roll-jump charge did not refill');
  void vy;
  console.log('roll-jump OK (launch, forward boost, charge use, air steering, recharge)');
}

// a dive that reaches the cheese grabs it automatically (for humans; AI is blocked during the grab delay)
{
  const race = Core.createRace(5); const r = Core.addRacer(race, { id: 'p', name: 'p' });
  for (let i = 0; i < 2; i++) Core.step(race, 1 / 30, {});
  race.phase = 'race'; race.cd = 0; race.raceT = 1;
  const c = race.cheese; c.released = true;
  r.state = Core.ST.RUN; r.z = 120; r.x = 0; r.y = r.gy = Core.height(0, 120); r.vz = 9; r.grounded = true;
  c.x = 0; c.z = 123; c.y = Core.height(0, 123) + 0.5; c.vx = 0; c.vy = 0; c.vz = 6; c.L = [0, 0, 0];
  const inputs = { p: { ...Core.newInput(), f: 1, d: 1 } };
  for (let i = 0; i < 30 && c.heldBy == null; i++) Core.step(race, 1 / 30, inputs);
  if (c.heldBy !== 'p') throw new Error('dive near the cheese did not auto-grab it');
  console.log('dive auto-grab OK');
}

// ragdoll stability: a body cartwheeling down the steep face must stay in one piece and follow its tether
import { Ragdoll } from '../src/ragdoll.js';
{
  const z = 80, g = Core.height(0, z);
  const P = (dx, dy, dz) => [dx, g + dy, z + dz];
  const pts = [P(0, .95, 0), P(0, 1.55, 0), P(0, 1.78, 0), P(.27, 1.55, 0), P(-.27, 1.55, 0), P(.27, 1.23, 0), P(-.27, 1.23, 0), P(.27, .94, 0), P(-.27, .94, 0), P(.11, .91, 0), P(-.11, .91, 0), P(.11, .47, 0), P(-.11, .47, 0), P(.11, .04, .05), P(-.11, .04, .05)];
  const rd = new Ragdoll(); rd.seed = 1; rd.init(pts, [0, 2, 12], [8, 1, 0]);
  let tz = z, worst = 0, maxGap = 0;
  for (let f = 0; f < 300; f++) {
    tz += 10 / 60; rd.update(1 / 60, [0, Core.height(0, tz) + 0.3, tz], 1);
    worst = Math.max(worst, rd.maxStickError());
    const c = rd.center(); maxGap = Math.max(maxGap, Math.hypot(c[0], c[2] - tz));
    for (let i = 0; i < 15; i++) if (rd.get(i)[1] < Core.height(rd.get(i)[0], rd.get(i)[2]) - 0.05) throw new Error('ragdoll below ground');
  }
  if (worst > 0.15 || maxGap > 2.5) throw new Error(`ragdoll unstable: stick error ${worst}, tether gap ${maxGap}`);
  console.log(`ragdoll OK (max stick error ${(worst * 100).toFixed(1)}%, max tether gap ${maxGap.toFixed(2)} m)`);
}
// cheese is a rigid wheel: it must roll downhill, stay finite and end up near the bottom
{
  const race = Core.createRace(5);
  Core.addRacer(race, { id: 'x', name: 'x', char: 0 });
  for (let i = 0; i < 30 * 30; i++) { Core.step(race, 1 / 30, {}); race.events = []; }
  const c = race.cheese;
  if (![c.x, c.y, c.z, ...c.q].every(Number.isFinite)) throw new Error('cheese NaN');
  if (c.z < 150) throw new Error('cheese did not roll down: z=' + c.z);
  console.log(`cheese OK (after 30 s: z=${c.z.toFixed(1)}, |q|=${Math.hypot(...c.q).toFixed(3)})`);
}
