// Win rates by player strategy (adapted from the reviewers' sim scripts). node tests/strategy.sim.mjs [smart,hold,...]
import * as C from '../src/core.js';
const ST=C.ST;
function run(seed, strat){
  const race=C.createRace(seed);
  C.addRacer(race,{id:'p1',name:'You',char:0});
  for(let i=0;i<5;i++) C.addRacer(race,{id:'ai'+i,name:'ai'+i,char:i+1,ai:true});
  let s=seed; C.gridOrder(race,()=>{s=(s*16807)%2147483647;return s/2147483647;});
  for(const r of race.racers) C.placeAtStart(race,r);
  const inp=C.newInput(); const me=race.racers.find(r=>r.id==='p1');
  const st={time:[0,0,0,0,0,0], aiTime:[0,0,0,0,0,0], ev:{}, why:{}, gaps:[], cheeseLead:[]};
  let t=0; let firstNear=null;
  while(race.phase!=='over' && t<200){
    strat(inp, me, race, st);
    C.step(race,1/60,{p1:inp}); t+=1/60;
    for(const e of race.events){ st.ev[e.e]=(st.ev[e.e]||0)+1; if(e.e==='tumble'&&e.id==='p1') st.why[e.why]=(st.why[e.why]||0)+1; }
    race.events=[];
    if(race.phase==='race'&&firstNear==null&&race.racers.some(r=>Math.hypot(r.x-race.cheese.x,r.z-race.cheese.z)<3)) firstNear=race.cheese.z;
    if(race.phase==='race'){ st.time[me.state]+=1/60; for(const r of race.racers) if(r.ai) st.aiTime[r.state]+=1/60;
      if(Math.abs(race.raceT%3)<1/60){ st.gaps.push(Math.round(Math.max(...race.racers.filter(r=>r.ai).map(r=>r.z))-me.z)); st.cheeseLead.push(Math.round(race.cheese.z-me.z)); } }
  }
  const rank=C.rankings(race).findIndex(r=>r.id==='p1')+1;
  return {res:race.result, st, rank, invol:me.involuntary, firstNear: firstNear==null?999:firstNear};
}
const near=(me,c)=>Math.hypot(c.x-me.x,c.z-me.z);
const strats={
  idle:(i)=>{i.f=0;},
  hold:(i)=>{i.f=1;},
  holdShift:(i)=>{i.f=1;i.s=1;},
  smart:(i,me,race)=>{ const c=race.cheese; i.f=me.meter<0.6?1:0; i.b=me.meter>0.75?1:0;
    i.s=(me.stamina>0.05&&me.meter<0.3&&!me.sprintLock)?1:0; if(me.stamina<=0.01) i.s=0;
    i.ax=Math.max(-1,Math.min(1,(c.x-me.x)*0.4));
    const dz=c.z-me.z; if(c.heldBy==null && dz>0.5&&dz<5&&Math.abs(c.x-me.x)<2) i.d++;
    if(near(me,c)<2.5) i.g++;
    if(me.state===ST.TUMBLE && dz<14 && dz>2 && me.charges>0) i.d++; },
  jumpSpam:(i,me,race)=>{ i.f=1; const c=race.cheese; i.ax=Math.max(-1,Math.min(1,(c.x-me.x)*0.4)); if(me.state===ST.RUN && (me.jumpCd||0)<=0 && me.grounded) i.d++; if(near(me,c)<2.5) i.g++; },
};
Object.assign(strats, { best:(i,me,race)=>{ const c=race.cheese; i.f=me.meter<0.6?1:0; i.b=me.meter>0.75?1:0;
    i.s=(me.stamina>0.05&&me.meter<0.3)?1:0; i.ax=Math.max(-1,Math.min(1,(c.x-me.x)*0.4)); const dz=c.z-me.z;
    if(me.state===ST.RUN&&me.grounded&&(me.jumpCd||0)<=0&&me.meter<0.4) i.d++;
    if(near(me,c)<2.5) i.g++; if(me.state===ST.TUMBLE && dz<14 && dz>2 && me.charges>0) i.d++; } });

const only = process.argv[2] ? process.argv[2].split(',') : null;
for(const [n,s] of Object.entries(strats)){ if (only && !only.includes(n)) continue;
  const N=40; const o={wins:0,how:{},times:[],ranks:[],T:[0,0,0,0,0,0],AT:[0,0,0,0,0,0],ev:{},why:{},invol:0,gap:[],lead:[],fn:[],leads:[]};
  for(let k=1;k<=N;k++){ const r=run(k*7919,s); o.how[r.res.how]=(o.how[r.res.how]||0)+1; o.times.push(r.res.time); o.ranks.push(r.rank); if(r.res.id==='p1') o.wins++;
    r.st.time.forEach((v,i)=>o.T[i]+=v); r.st.aiTime.forEach((v,i)=>o.AT[i]+=v); for(const[k2,v] of Object.entries(r.st.ev)) o.ev[k2]=(o.ev[k2]||0)+v; for(const[k2,v] of Object.entries(r.st.why)) o.why[k2]=(o.why[k2]||0)+v; o.invol+=r.invol; o.fn.push(r.firstNear); o.leads.push(...r.st.cheeseLead.slice(1)); if(k<=2){o.gap.push(r.st.gaps.join(','));o.lead.push(r.st.cheeseLead.join(','));} }
  o.times.sort((a,b)=>a-b); const tot=o.T.reduce((a,b)=>a+b), atot=o.AT.reduce((a,b)=>a+b);
  const pct=(a,t)=>[1,2,3,4].map(i=>(a[i]/t*100).toFixed(0)).join('/');
  console.log(`\n== ${n}: wins ${o.wins}/${N}, how ${JSON.stringify(o.how)}, time min/med/max ${o.times[0].toFixed(1)}/${o.times[N>>1].toFixed(1)}/${o.times[N-1].toFixed(1)}, avg rank ${(o.ranks.reduce((a,b)=>a+b)/N).toFixed(2)}, median first-contact z ${o.fn.sort((a,b)=>a-b)[N>>1].toFixed(0)}, median cheese lead ${o.leads.sort((a,b)=>a-b)[o.leads.length>>1]} m`);
  console.log(`  player RUN/DIVE/TUMBLE/GETUP % ${pct(o.T,tot)} | AI ${pct(o.AT,atot)} | player invol/race ${(o.invol/N).toFixed(2)} why ${JSON.stringify(o.why)}`);
  console.log(`  events ${JSON.stringify(o.ev)}`);
  console.log(`  AI-lead-gap every 3s: ${o.gap.join(' | ')}  ; cheese-lead: ${o.lead.join(' | ')}`);
}
