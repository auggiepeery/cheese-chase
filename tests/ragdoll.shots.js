// Takes screenshots of the player ragdolling after a jump (visual check). node tests/ragdoll.shots.js
import puppeteer from 'puppeteer-core';
import path from 'node:path';
const browser = await puppeteer.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage(); await page.setViewport({ width: 960, height: 540 });
const errors = []; page.on('pageerror', (e) => errors.push(e.message)); page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await page.goto('file://' + path.resolve('index.html') + '?quality=low'); await sleep(1500);
await page.click('#btn-solo'); await sleep(300); await page.click('#select-go'); await sleep(500);
await page.evaluate(() => window.__cc.advance(4.7));
await page.keyboard.down('KeyW');
await page.evaluate(() => window.__cc.advance(2.5));
await page.keyboard.press('Space');
for (let i = 0; i < 5; i++) {
  await page.evaluate(() => window.__cc.advance(0.35));
  const st = await page.evaluate(() => { const r = window.__cc.game.race.racers.find((x) => x.id === 'p1'); return [r.state, r.why, +r.z.toFixed(1)]; });
  console.log('frame', i, st);
  if (process.env.SOLO) await page.evaluate(() => { for (const [id, rv] of window.__cc.game.racerViews) if (id !== 'p1') rv.root.visible = false; });
  await sleep(1300);
  await page.screenshot({ path: `shots/ragdoll-${i}.png` });
}
await page.keyboard.up('KeyW');
await browser.close();
console.log(errors.length ? errors.join('\n') : 'no errors');
