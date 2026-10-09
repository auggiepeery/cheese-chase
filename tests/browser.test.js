// Headless smoke test: loads the game, plays solo + split-screen, checks for console errors, takes screenshots.
// CHROME=/usr/bin/google-chrome node tests/browser.test.js [url]
import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';
const target = (process.argv[2] || 'file://' + path.resolve('index.html')) + '?quality=low';
const exe = process.env.CHROME || '/usr/bin/google-chrome';
fs.mkdirSync('shots', { recursive: true });
const browser = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--window-size=1280,720'] });
const page = await browser.newPage();
await page.setViewport({ width: 960, height: 540 });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const tag = process.env.TAG || 'idx';
await page.goto(target, { waitUntil: 'load' });
await sleep(2500);
await page.screenshot({ path: `shots/${tag}-1-menu.png` });
await page.click('#btn-solo'); await sleep(800);
await page.screenshot({ path: `shots/${tag}-2-select.png` });
await page.keyboard.press('KeyD'); await sleep(300);
await page.click('#select-go'); await sleep(2000);
await page.screenshot({ path: `shots/${tag}-3-countdown.png` });
await page.evaluate(() => window.__cc.advance(4.2));
await page.keyboard.down('KeyW');
for (let i = 0; i < (process.env.QUICK ? 3 : 6); i++) {
  await page.evaluate(() => window.__cc.advance(1.5));
  await sleep(1200);
  if (i === 2) { await page.keyboard.press('Space'); await sleep(200); await page.keyboard.press('KeyE'); await page.keyboard.press('KeyF'); }
  await page.screenshot({ path: `shots/${tag}-4-run${i}.png` });
}
await page.keyboard.up('KeyW');
const st = await page.evaluate(() => { const g = window.__cc.game; const me = g.race.racers.find((r) => r.id === 'p1'); return { phase: g.race.phase, t: g.race.raceT, z: me.z, state: me.state, fps: window.__cc.fps, cheeseZ: g.race.cheese.z }; });
console.log('solo state', st);
// let the race play out quickly by fast-forwarding the simulation
await page.evaluate(() => { const g = window.__cc.game; const C = window.__cc.Core; for (let i = 0; i < 60 * 90 && g.race.phase !== 'over'; i++) { C.step(g.race, 1 / 60, {}); g.race.events = []; } });
await page.evaluate(() => window.__cc.advance(3)); await sleep(2500);
await page.screenshot({ path: `shots/${tag}-5-results.png` });
const resVisible = await page.evaluate(() => document.querySelector('#screen-results').classList.contains('show'));
console.log('results visible', resVisible, await page.evaluate(() => document.querySelector('#res-title').textContent));
await page.keyboard.press('Escape'); await sleep(500);
await page.click('#btn-split'); await sleep(500);
await page.keyboard.press('Enter'); await sleep(1500);
await page.keyboard.down('KeyW'); await page.keyboard.down('ArrowUp');
await page.evaluate(() => window.__cc.advance(9)); await sleep(2500);
await page.screenshot({ path: `shots/${tag}-6-split.png` });
await page.keyboard.up('KeyW'); await page.keyboard.up('ArrowUp');
console.log('split fps', await page.evaluate(() => window.__cc.fps));
await page.keyboard.press('Escape'); await sleep(300);
await page.click('#btn-online'); await sleep(300); await page.keyboard.press('Enter'); await sleep(500);
await page.screenshot({ path: `shots/${tag}-7-online.png` });
await browser.close();
console.log(errors.length ? 'CONSOLE ERRORS/WARNINGS:\n' + errors.join('\n') : 'No console errors or warnings.');
process.exit(errors.some((e) => e.startsWith('[error]') || e.startsWith('[pageerror]')) ? 1 : 0);
