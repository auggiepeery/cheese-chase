// Balance: skilful play should win often, holding W should not; heats should last ~25-35 s (countdown + race).
// Same rules as the reviewers' strategy sims (tests/strategy.sim.mjs has the full table).
import * as C from '../src/core.js';
const ST = C.ST;
function run(seed, strat) {
  const race = C.createRace(seed);
  C.addRacer(race, { id: 'p1', name: 'You', char: 0 });
  for (let i = 0; i < 5; i++) C.addRacer(race, { id: 'ai' + i, name: 'ai' + i, char: i + 1, ai: true });
  let s = seed; C.gridOrder(race, () => { s = (s * 16807) % 2147483647; return s / 2147483647; });
  for (const r of race.racers) C.placeAtStart(race, r);
  const inp = C.newInput(), me = race.racers.find((r) => r.id === 'p1');
  let t = 0, first = null;
  while (race.phase !== 'over' && t < 200) {
    strat(inp, me, race); C.step(race, 1 / 60, { p1: inp }); race.events = []; t += 1 / 60;
    if (race.phase === 'race' && first == null && race.racers.some((r) => Math.hypot(r.x - race.cheese.x, r.z - race.cheese.z) < 3)) first = race.cheese.z;
  }
  return { win: race.result.id === 'p1', time: race.result.time, first: first ?? 999 };
}
const near = (me, c) => Math.hypot(c.x - me.x, c.z - me.z);
const strats = {
  hold: (i) => { i.f = 1; },
  smart: (i, me, race) => { const c = race.cheese; i.f = me.meter < 0.6 ? 1 : 0; i.b = me.meter > 0.75 ? 1 : 0;
    i.s = (me.stamina > 0.05 && me.meter < 0.3 && !me.sprintLock) ? 1 : 0; if (me.stamina <= 0.01) i.s = 0;
    i.ax = Math.max(-1, Math.min(1, (c.x - me.x) * 0.4));
    const dz = c.z - me.z; if (c.heldBy == null && dz > 0.5 && dz < 5 && Math.abs(c.x - me.x) < 2) i.d++;
    if (near(me, c) < 2.5) i.g++;
    if (me.state === ST.TUMBLE && dz < 14 && dz > 2 && me.charges > 0) i.d++; },
};
const N = 30, out = {};
for (const [n, f] of Object.entries(strats)) {
  const rs = []; for (let k = 1; k <= N; k++) rs.push(run(k * 7919, f));
  const med = (a) => a.sort((x, y) => x - y)[a.length >> 1];
  out[n] = { wins: rs.filter((r) => r.win).length / N, heat: med(rs.map((r) => r.time)) + C.COUNTDOWN, first: med(rs.map((r) => r.first)) };
  console.log(`${n}: wins ${(out[n].wins * 100).toFixed(0)}%, median heat ${out[n].heat.toFixed(1)} s, median first contact at cheese z ${out[n].first.toFixed(0)}`);
}
if (out.smart.wins < 0.4) throw new Error('smart play wins too rarely');
if (out.hold.wins > 0.1) throw new Error('holding W wins too often');
for (const n in out) if (out[n].heat < 22 || out[n].heat > 38) throw new Error(n + ' heat length off: ' + out[n].heat.toFixed(1));
if (out.smart.first > 260) throw new Error('nobody reaches the cheese until too late');
console.log('balance OK');
