// Screenshot of all characters lined up + the select screen. node tests/chars.shots.js
import puppeteer from 'puppeteer-core';
import path from 'node:path';
const browser = await puppeteer.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage(); await page.setViewport({ width: 1280, height: 600 });
const errors = []; page.on('pageerror', (e) => errors.push(e.message)); page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await page.goto('file://' + path.resolve('index.html') + (process.env.Q || '')); await sleep(2500);
await page.evaluate(() => { document.querySelector('#screen-menu').classList.remove('show'); window.__cc.lineup(); });
await sleep(4000);
await page.screenshot({ path: 'shots/chars-lineup.png' });
await page.evaluate(() => { window.__cc.lineupCam = null; document.querySelector('#screen-menu').classList.add('show'); });
await page.click('#btn-solo'); await sleep(2500);
await page.screenshot({ path: 'shots/chars-select.png' });
await browser.close();
console.log(errors.length ? errors.join('\n') : 'no errors');
