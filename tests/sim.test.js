// Headless simulation sanity test of the shared core: AI-only races must finish with a winner.
import * as Core from '../src/core.js';
let ok = 0;
for (let seed = 1; seed <= 10; seed++) {
  const race = Core.createRace(seed);
  for (let i = 0; i < 6; i++) Core.addRacer(race, { id: 'ai' + i, name: 'AI ' + i, char: i, ai: true });
  let t = 0;
  while (race.phase !== 'over' && t < 200) { Core.step(race, 1 / 30, {}); t += 1 / 30; race.events = []; }
  const res = race.result;
  if (!res) throw new Error('race did not finish, seed ' + seed);
  for (const r of race.racers) if (![r.x, r.y, r.z].every(Number.isFinite)) throw new Error('NaN position');
  console.log(`seed ${seed}: ${res.name} won by ${res.how} in ${res.time.toFixed(1)} s`);
  ok++;
}
console.log(`sim.test OK (${ok} races)`);

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
