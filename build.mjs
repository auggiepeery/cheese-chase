// Builds js/game.js (bundled client, works from file://) and cheese-chase.html (single offline file).
import { build } from 'esbuild';
import fs from 'node:fs';
await build({ entryPoints: ['src/main.js'], bundle: true, format: 'iife', minify: true, target: 'es2020', outfile: 'js/game.js', legalComments: 'none', logLevel: 'warning' });
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('js/game.js', 'utf8').replace(/<\/script/gi, '<\\/script');
const cfg = fs.readFileSync('config.js', 'utf8');
const single = html
  .replace('<script src="config.js"></script>', () => `<script>\n${cfg}\n</script>`)
  .replace('<script src="js/game.js"></script>', () => `<script>\n${js}\n</script>`);
fs.writeFileSync('cheese-chase.html', single);
console.log('built js/game.js', (js.length / 1024).toFixed(0) + ' KB', '+ cheese-chase.html', (single.length / 1024).toFixed(0) + ' KB');
