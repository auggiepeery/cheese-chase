// Screenshots of the player tumbling and roll-jumping (visual check of the ragdoll rig + pinned label).
// node tests/ragdoll.shots.js   (SOLO=1 hides the bots)
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
// knock the player over at speed, then roll-jump twice; frames taken with uneven (choppy) time steps
await page.evaluate(() => { const g = window.__cc.game, C = window.__cc.Core, me = g.race.racers.find((r) => r.id === 'p1'); me.state = C.ST.TUMBLE; me.st = 0.5; me.vz = 14; });
const steps = [0.3, 0.2, 0.35, 0.15, 0.4, 0.25];
for (let i = 0; i < steps.length; i++) {
  if (i === 1 || i === 4) await page.keyboard.press('Space');
  await page.evaluate((dt) => window.__cc.advance(dt), steps[i]);
  const st = await page.evaluate(() => { const r = window.__cc.game.race.racers.find((x) => x.id === 'p1'); return [r.state, r.charges, +r.z.toFixed(1)]; });
  console.log('frame', i, st);
  if (process.env.SOLO) await page.evaluate(() => { for (const [id, rv] of window.__cc.game.racerViews) if (id !== 'p1') rv.root.visible = false; });
  await sleep(1300);
  await page.screenshot({ path: `shots/ragdoll-${i}.png` });
}
await page.keyboard.up('KeyW');
await browser.close();
console.log(errors.length ? errors.join('\n') : 'no errors');
