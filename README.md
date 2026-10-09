# 🧀 Cheese Chase

An original 3D browser game: a wheel of cheese is let go at the top of a very steep, bumpy grass hill and everyone
throws themselves down after it. Inspired by the traditional cheese-rolling races of Gloucestershire
(Cooper's Hill). All code, models and textures are original and procedural (Three.js); no external assets.

* **Solo vs AI**: you against 5 AI racers. Works fully offline.
* **Local 2-player split-screen**: two players on one keyboard plus 4 AI. Works fully offline.
* **Online multiplayer**: rooms with 4-letter codes, up to 8 humans plus optional AI bots, run by a small Node + `ws` server.
* **Character select** (rotating 3D preview): 10 distinct low-poly runners with different heights, builds, outfits,
  hair, and accessories: Rugby Reg (hooped kit, stocky), Farmer Fern (overalls, wellies, flat cap, straw), Chef Brie
  (apron, toque, belly, moustache), Sir Cheddalot (armour, tabard, plumed helm), Captain Curd (cape, mask, emblem),
  Granny Gwen (cardigan, skirt, bun, glasses, handbag), Moo-Suit Mo (cow onesie with hood and horns), Lycra Lexi
  (neon lycra, shades, ponytail), Reverend Rupert (cassock, dog collar), and Punk Pete (mohawk, studded jacket,
  ripped jeans, boots). They are cosmetic only and all handle the same. AI racers always use characters nobody
  else is wearing.

## Controls

| Action | Solo / Online | 2P: Player 1 | 2P: Player 2 |
|---|---|---|---|
| Run / steer | `W A S D` or arrows | `W A S D` | arrows |
| Brake (also calms the BALANCE bar quickly) | `S` / `↓` | `S` | `↓` |
| **Sprint** (hold; 2.2 s of boost, refills only once released) | `Shift` | `Left Shift` | `Right Shift` / `Numpad0` |
| **Jump**. Near the cheese it becomes a **dive** at it. | `Space` | `Space` | `Enter` |
| Mid-tumble: **roll-jump** (2 charges, about 2.5 s recharge each), or **get up** once slowed | `Space` | `Space` | `Enter` |
| **Grab**: the cheese if it's in reach, otherwise the nearest racer (trips them) | `E` (or `F`) | `E` | `/` / `.` / `Numpad1` |
| Mute sound | `M` | | |
| Quit / next heat | `Esc` / `R` on the results screen | | |

**How to win:** grab the cheese or be first over the finish line. A match is **3 heats decided on points only**
(10/7/5/3/2/1 by placing; ties go to the better best placing). The results screen shows the gap to the winner in
metres and seconds and flashes the points you just earned. `R` / NEXT HEAT is focused, so Enter works too.

**Movement:**
* The hill speeds you up on its own. Above about 38 km/h, or when you yank the steering at speed, your **BALANCE**
  bar fills. When it's full you go over.
* **Rolling keeps its speed.** A tumbling runner goes about as fast as a runner (within ~10%, checked by the sim test),
  so a fall costs little but isn't an exploit. While you roll, `Space` launches a **roll-jump** up and forward toward
  the cheese (2 charges, max one per 0.8 s, never faster than a sprint), and you can steer in the air. A flying
  roll-jump that reaches the cheese grabs it automatically, just like a dive.
* Jumps have a 2 s cooldown. A jump only lands **clean** on a soft landing (impact under 5.5 m/s), and it only gives
  a speed boost if you took off within about 0.25 s of a crest. Hard landings send you rolling. You get up
  automatically once you slow down, or press `Space` to get up sooner (0.6 s).
* The cheese gets a 2 s head start. It's capped at about 15 m/s and bogs down on the shallower ledge (z 170 to 200),
  which is where the pack usually first reaches it. Heats last about 25 to 35 s including the countdown.
* AI racers can't grab the cheese for the first 13 s. The rubber band is weak and symmetric: each bot keeps a gap of
  -6 to +8 m to you with at most ±3 m/s² of help, and none while tumbling, within 30 m of the cheese, or past z 300.
  Bots only grab rivals who are ahead of them and near the cheese (rare, 5 s cooldown), and nobody can be tripped
  within 1.5 s of getting up.

### The hill
The course is about 390 m of English hillside, modelled on the profile of a real cheese-rolling hill: a convex top,
a near-1:1 face, a ledge, another steep drop, then the run-out into hay bales. It is lumpy and uneven, with tufty
grass, worn mud tracks down the racing lines, post-and-rail fences, spectators (some with umbrellas) on the banks,
hedges and woodland, patchwork fields in the valley, and overcast British daylight. All of it is procedural and original.

### Physics
* **Ragdolls:** each runner has a 15-particle Verlet ragdoll (pelvis, chest, head, shoulders, elbows, hands, hips,
  knees, feet) with distance constraints, joint limits and terrain collision. It takes over the skeleton from the
  current pose when a runner dives or tumbles (speed, stumble, hard or airborne landing, jump, grabbed, skittled by
  another tumbler). It keeps the runner's momentum and spin, then blends back into the get-up animation.
* **Cheese:** a real rigid-body cylinder (mass, inertia tensor, angular momentum, so gyroscopic effects work). 36 rim
  contact points meet the height-field with restitution and friction impulses. It rolls, bounces off lumps, wobbles,
  veers, and can tip over and slide.
## Files

```
index.html          the game page (loads config.js + js/game.js; works from file:// too)
cheese-chase.html   single-file build with everything inlined; works offline, just double-click it
js/game.js          bundled client (Three.js r170 + game code), built from src/
src/core.js         shared simulation (terrain, physics, AI, race rules, snapshots), used by browser AND server
src/world.js        scenery: terrain mesh, grass, trees, crowd, fences, sky, fog, particles
src/models.js       low-poly runners (cosmetic variants, animation, ragdoll skinning/blending) and the cheese wheel
src/ragdoll.js      Verlet ragdoll (pure JS, unit-tested in node)
src/main.js         client: rendering, input, menus/HUD, split-screen, online client (interpolation + prediction)
server.js           Node server: serves the client + authoritative online races over WebSocket (/ws)
config.js           optional server URL for copies of the client not served by server.js
render.yaml         Render blueprint (free web service)
start.sh            LOCAL TESTING ONLY: server with auto-restart + optional Cloudflare quick tunnel
build.mjs           rebuilds js/game.js and cheese-chase.html (npm run build)
tests/              sim + network tests (node), headless-browser smoke tests (puppeteer-core + Chrome)
```

## Play offline
Open `cheese-chase.html` (or `index.html`) in a browser. You don't need a server or internet for Solo or 2-Player.

## Multiplayer

### Run locally
```bash
npm install
npm start                 # PORT defaults to 8797 -> open http://localhost:8797
```
Pick **Online Multiplayer**, choose a runner and click **Create room**. Share the 4-letter code, or the link shown
in the lobby (`?room=CODE`). The host picks how many AI racers to add (0–5) and starts the race.
For a temporary public URL from a dev box, run `./start.sh`. It starts the server with nohup, auto-restarts it,
opens a Cloudflare quick tunnel and writes the URL to `url.txt`. `./start.sh stop` stops both.

### Deploy on Render (permanent)
1. Push this folder to a GitHub or GitLab repo.
2. On Render, choose **New → Blueprint** and select the repo. `render.yaml` creates a free **web** service with
   `npm install` as the build command, `node server.js` as the start command and `/health` as the health check.
   Or choose **New → Web Service**, runtime Node, with the same build and start commands.
3. Open `https://<your-service>.onrender.com`. That one URL serves the game and the WebSocket server. The client
   connects back to its own origin over `wss://`, so no configuration is needed.

Render notes: the free plan sleeps after ~15 minutes without traffic, and the first visit can take ~30–60 seconds
to wake it up. Rooms are kept in memory, so a restart or redeploy ends any running rooms.

### Pointing other copies of the client at a server
The single-file build or a static host can be pointed at a server in two ways. Set `window.CHEESE_SERVER` in
`config.js` (or edit the inlined copy in `cheese-chase.html`), or add `?server=https://your-service.onrender.com`
to the page URL. You can also type the address into the Server field on the Online screen.

### Netcode
The server is authoritative. It runs `src/core.js` at **30 ticks/s**, including the rigid-body cheese and the
runners' state machines, and broadcasts one compact JSON snapshot per tick, about 0.5 KB with 4 racers. Each snapshot
holds racer positions, body quaternions, velocities, state, stamina and balance, the cheese position, quaternion and
velocity, and game events. Ragdolls are cosmetic, simulated on each client and tethered to the server's body position. Clients send their inputs at 30 Hz. They interpolate other
racers about 110 ms in the past and predict their own runner with the same core code, blending toward the server
state. Tumbles, grabs, catches and wins are only decided by the server. The cheese is shown extrapolated to "now",
and human cheese grabs get +0.5 m of lag-compensating reach.

## Tests
```bash
npm test                                                # core sim + balance (win rates / heat length) + server protocol
node tests/strategy.sim.mjs                             # win rate by player strategy (idle/hold/holdShift/smart/jumpSpam/best)
node tests/cheese.sim.mjs                               # cheese pacing: first contact / catch positions in AI-only races
node tests/ragdoll.shots.js                             # tumble + roll-jump rig screenshots (SOLO=1 hides the AI)
node tests/net.test.js https://<your-service>.onrender.com   # protocol test against a deployed server
CHROME=/path/to/chrome npm run test:browser             # headless browser: menu, solo, roll-jump, results, next heat, split-screen
node tests/feel.shots.js                                # camera/HUD screenshots (SOLO=1 hides the AI)
node tests/online.browser.test.js http://localhost:8797 # two headless browsers race online
```

### Art direction
Stylized low-poly look: faceted, flat-shaded terrain with per-face vertex colours (fresh greens, chocolate mud,
patchwork fields), chunky low-poly trees, hedges, rocks, fences, crowd, grass clumps, and a faceted cheese wheel.
The lighting is warm late-morning sun with crisp soft shadows under a blue gradient sky with chunky low-poly
clouds; the fog colour is matched to the horizon so distant land melts into the haze. With a single view at high quality, there's subtle
post-processing: soft bloom, ACES tone mapping, a light colour grade, and SMAA. Every mode gets a CSS vignette
(`?post=0` turns the post-processing off).

### AI
The bots steer at where the cheese *will* be (its position plus lead), and they race in a pack around you: each one
holds its own gap of -6 to +8 m from you, using a weak symmetric rubber band, so they stay near you but skill decides
the heat. In the strategy sim (40 seeds), sensible play wins about 60% of heats, while holding W wins 0% and
jump-spam about 5%. You start in the middle of the line with the bots either side.

### Camera, HUD, sound
A low, close chase camera looks down the slope and leads fast runners so they stay in frame. The field of view widens
with speed (capped at 85°), and you get speed lines, a light shake on bumps, and a slow orbit on the downhill side
after the race. There are no centre-screen popups. The only in-race text is a tiny top-right note when someone
overtakes you or you pass someone (one at a time), plus small gold/silver/bronze name tags over the top 3. The
cheese has a bright outline, a light beam, a bobbing marker that stays the same size on screen, and an
edge-of-screen arrow when it's off camera. A big wipeout gives half a second of slow-mo (offline only). Sound is synthesized with
WebAudio: footsteps, thuds, wind that rises with speed, the crowd, and a roar on the catch. It starts on your first
key press.

## Limitations
* Best-of-3 heats are offline only (solo and split-screen). Online rooms run single races.
* Slow-mo is offline only, so it never desyncs online play.
* The physics is custom and lightweight; there is no external engine. The race logic treats each runner as a point
  mass, and ragdolls are simulated on each client and softly tethered to that authoritative body. In online play,
  everyone sees the same body positions and outcomes, but the exact limb flailing can differ slightly between
  screens. Ragdolls don't collide with each other or with the cheese.
* Online: there's no account or persistence, rooms live in server memory, and prediction is soft blending rather
  than full input replay. On very high-latency connections your own runner may visibly correct after tumbles.
* Split-screen renders the scene twice, so it needs a reasonable GPU. The game automatically lowers resolution
  and shadow quality if the frame rate drops (`?quality=low` forces this).
