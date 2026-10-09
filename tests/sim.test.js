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
