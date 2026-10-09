// Real-time check on a slow software renderer (no test hooks advancing time):
//  - auto quality detects SwiftShader/llvmpipe and switches to LOW
//  - the countdown and race clock follow wall-clock time even at a low frame rate; the clock starts at the cheese release
//  - the cheese marker badge is shown while racing, and the edge arrow appears when the cheese is off screen
// node tests/realtime.browser.test.js [url]
import puppeteer from 'puppeteer-core';
import path from 'node:path';
const target = process.argv[2] || 'file://' + path.resolve('index.html');
const browser = await puppeteer.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage(); await page.setViewport({ width: 960, height: 540 });
const errors = []; page.on('pageerror', (e) => errors.push(e.message)); page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let fail = 0; const check = (ok, msg) => { console.log((ok ? 'PASS ' : 'FAIL ') + msg); if (!ok) fail++; };
await page.goto(target); await sleep(2000);
const q = await page.evaluate(() => window.__ccQuality());
console.log('renderer:', q.renderer);
check(q.software && q.quality === 0 && q.mode === 'auto', `auto quality picked LOW on a software GPU (${JSON.stringify({ quality: q.quality, software: q.software })})`);
check(/Graphics: Auto \(Low\)/.test(await page.$eval('#btn-quality', (b) => b.textContent)), 'menu shows the graphics toggle');
await page.click('#btn-solo'); await sleep(300); await page.click('#select-go');
const t0 = Date.now();
await sleep(6000);
const s1 = await page.evaluate(() => { const r = window.__cc.game.race; return { phase: r.phase, cd: r.cd, raceT: r.raceT, timer: document.querySelector('.hud .timer').textContent, fps: window.__cc.fps }; });
const wall1 = (Date.now() - t0) / 1000;
console.log('after', wall1.toFixed(1), 's wall:', JSON.stringify(s1));
check(s1.phase === 'race', 'countdown finished in real time (4.5 s) even at ' + (s1.fps || 0).toFixed(1) + ' fps');
check(s1.timer !== '0:00.00', 'race clock is running: ' + s1.timer);
await sleep(4000);
const s2 = await page.evaluate(() => ({ raceT: window.__cc.game.race.raceT, phase: window.__cc.game.race.phase }));
const gained = s2.raceT - s1.raceT;
check(s2.phase !== 'race' || gained > 3.0, `race clock kept pace with wall time (+${gained.toFixed(2)} s in 4 s)`);
// marker visible while racing (cheese ahead), then arrow when the cheese is moved behind the camera
const mark = await page.evaluate(() => { const m = document.querySelector('.cheese-mark'), a = document.querySelector('.cheese-arrow'); return { m: getComputedStyle(m).display, a: getComputedStyle(a).display, held: window.__cc.game.race.cheese.heldBy }; });
check(mark.held != null || mark.m === 'block' || mark.a === 'block', 'cheese marker or edge arrow is showing during the race: ' + JSON.stringify(mark));
await page.evaluate(() => { const r = window.__cc.game.race, me = r.racers.find((x) => x.id === 'p1'), c = r.cheese; c.heldBy = null; c.x = me.x + 3; c.z = me.z - 25; c.vx = c.vz = 0; });
await sleep(1500);
const arr = await page.evaluate(() => ({ a: getComputedStyle(document.querySelector('.cheese-arrow')).display, m: getComputedStyle(document.querySelector('.cheese-mark')).display }));
check(arr.a === 'block' && arr.m === 'none', 'edge arrow shows when the cheese is behind: ' + JSON.stringify(arr));
await page.evaluate(() => { const r = window.__cc.game.race, me = r.racers.find((x) => x.id === 'p1'), c = r.cheese; c.x = me.x; c.z = me.z + 40; });
await sleep(1500);
const mk2 = await page.evaluate(() => { const m = document.querySelector('.cheese-mark'); const b = m.getBoundingClientRect(); return { d: getComputedStyle(m).display, w: b.width, h: b.height }; });
check(mk2.d === 'block' && mk2.w >= 30 && mk2.h >= 30, 'marker stays full size with the cheese 40 m away: ' + JSON.stringify(mk2));
await page.screenshot({ path: 'shots/realtime-marker.png' });
// manual quality override via URL
await page.goto(target + (target.includes('?') ? '&' : '?') + 'quality=high'); await sleep(1500);
const q2 = await page.evaluate(() => window.__ccQuality());
check(q2.quality === 2 && q2.mode === 2, '?quality=high overrides auto');
await browser.close();
if (errors.length) { console.log(errors.join('\n')); fail++; }
console.log(fail ? `realtime.browser.test: ${fail} failure(s)` : 'realtime.browser.test OK');
process.exitCode = fail ? 1 : 0;
