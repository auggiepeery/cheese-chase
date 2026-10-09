// Cheese pacing: where AI first reach it and where it is caught. node tests/cheese.sim.mjs
import * as C from '../src/core.js';
const zs=[], cz=[], ts=[];
for(let k=1;k<=40;k++){ const race=C.createRace(k*977);
  for(let i=0;i<6;i++) C.addRacer(race,{id:'ai'+i,name:'a',char:i,ai:true});
  let firstNear=null;
  while(race.phase!=='over'&&race.t<200){ C.step(race,1/60,{}); race.events=[];
    if(race.phase==='race'&&firstNear==null&&race.racers.some(r=>Math.hypot(r.x-race.cheese.x,r.z-race.cheese.z)<3)) firstNear=race.cheese.z; }
  if(race.result.how==='cheese'){ zs.push(Math.round(race.cheese.z)); }
  cz.push(firstNear==null?'-':Math.round(firstNear)); ts.push(race.result.how[0]+race.result.time.toFixed(0));
}
console.log('AI-only catch z (hay at 414, finish 388):', zs.sort((a,b)=>a-b).join(' '));
console.log('first time any runner within 3m of cheese, at cheese z:', cz.join(' '));
console.log(ts.join(' '));
// cheese alone speed profile
const race=C.createRace(5); race.cd=1.5; C.step(race,1/60,{});
for(let t=0;t<40;t+=1/60){ C.step(race,1/60,{}); if(Math.abs(t%3)<1/60) process.stdout.write(`t${t.toFixed(0)} z${race.cheese.z.toFixed(0)} v${Math.hypot(race.cheese.vx,race.cheese.vz).toFixed(1)}; `); }
console.log();
