// ---------------------------------------------------------------------------
// Cheese Chase - world: terrain height field, scenery, particles
// ---------------------------------------------------------------------------
import * as THREE from 'three';

import { START_Z, FINISH_Z, HAY_Z, COURSE_END, FENCE_X, mulberry32, height, vnoise } from './core.js';
const E = COURSE_END; // valley starts here (was 300 before the hill was lengthened)

// merge simple non-indexed geometries (position + normal only)
function mergeGeos(list) {
  const geos = list.map((g) => (g.index ? g.toNonIndexed() : g));
  const n = geos.reduce((a, g) => a + g.attributes.position.count, 0);
  const P = new Float32Array(n * 3); let o = 0;
  for (const g of geos) { P.set(g.attributes.position.array, o * 3); o += g.attributes.position.count; }
  const out = new THREE.BufferGeometry(); out.setAttribute('position', new THREE.BufferAttribute(P, 3)); out.computeVertexNormals();
  return out;
}
// ---------- textures ----------
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function grassTexture() {
  const r = mulberry32(7);
  const t = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#c9d6b8'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) {
      const x = r() * w, y = r() * h, l = 2 + r() * 6;
      const v = 150 + r() * 105 | 0;
      g.strokeStyle = `rgba(${v * 0.85 | 0},${v},${v * 0.7 | 0},${0.35 + r() * 0.5})`;
      g.lineWidth = 0.6 + r();
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + (r() - 0.5) * 2.5, y - l); g.stroke();
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
export function makeLabelTexture(text, color = '#fff', bg = null, w = 256, h = 64, font = 'bold 40px sans-serif') {
  return canvasTex(w, h, (g) => {
    if (bg) { g.fillStyle = bg; g.fillRect(0, 0, w, h); }
    g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = 6; g.strokeStyle = 'rgba(0,0,0,0.65)'; g.strokeText(text, w / 2, h / 2);
    g.fillStyle = color; g.fillText(text, w / 2, h / 2);
  });
}
function softDotTexture() {
  return canvasTex(64, 64, (g) => {
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.8)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  });
}

// ---------- particles ----------
export class Particles {
  constructor(scene, max = 2500) {
    this.max = max; this.n = 0; this.cursor = 0;
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3); this.size = new Float32Array(max);
    this.alpha = new Float32Array(max); this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    for (let i = 0; i < max; i++) this.pos[i * 3 + 1] = -1e5;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('psize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('palpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
    this.geo = geo;
    const mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: softDotTexture() }, scale: { value: 400 } },
      vertexShader: `attribute vec3 pcolor; attribute float psize; attribute float palpha;
        uniform float scale; varying vec3 vC; varying float vA;
        void main(){ vC=pcolor; vA=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize = min(psize*scale/max(0.1,-mv.z), 18.0); vA *= smoothstep(1.5, 4.0, -mv.z); gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `uniform sampler2D map; varying vec3 vC; varying float vA;
        void main(){ vec4 t=texture2D(map, gl_PointCoord); float a=t.a*vA; if(a<0.02) discard; gl_FragColor=vec4(vC, a); }`,
      transparent: true, depthWrite: false,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }
  emit(x, y, z, vx, vy, vz, spread, color, size, life, count) {
    const c = new THREE.Color(color);
    for (let k = 0; k < count; k++) {
      const i = this.cursor; this.cursor = (this.cursor + 1) % this.max;
      this.pos[i * 3] = x + (Math.random() - 0.5) * 0.3; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z + (Math.random() - 0.5) * 0.3;
      this.vel[i * 3] = vx + (Math.random() - 0.5) * spread;
      this.vel[i * 3 + 1] = vy + Math.random() * spread;
      this.vel[i * 3 + 2] = vz + (Math.random() - 0.5) * spread;
      const v = 0.8 + Math.random() * 0.35;
      this.col[i * 3] = c.r * v; this.col[i * 3 + 1] = c.g * v; this.col[i * 3 + 2] = c.b * v;
      this.size[i] = size * (0.6 + Math.random() * 0.8);
      this.life[i] = this.maxLife[i] = life * (0.6 + Math.random() * 0.8);
      this.alpha[i] = 1;
    }
  }
  // kick of grass + dirt at a point
  kick(x, y, z, vx, vz, amount) {
    const n = Math.max(1, Math.round(amount));
    this.emit(x, y + 0.05, z, vx * 0.3, 1.5, vz * 0.3, 2.2, 0x5f8f2f, 0.09, 0.9, n);
    this.emit(x, y + 0.05, z, vx * 0.3, 1.8, vz * 0.3, 2.0, 0x6b4a2b, 0.07, 0.8, Math.ceil(n * 0.6));
  }
  update(dt) {
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      if (this.life[i] <= 0) { this.pos[i * 3 + 1] = -1e5; this.alpha[i] = 0; continue; }
      this.vel[i * 3 + 1] -= 9 * dt;
      const d = 1 - 1.2 * dt;
      this.vel[i * 3] *= d; this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const gh = height(this.pos[i * 3], this.pos[i * 3 + 2]) + 0.03;
      if (this.pos[i * 3 + 1] < gh) { this.pos[i * 3 + 1] = gh; this.vel[i * 3] *= 0.3; this.vel[i * 3 + 1] = 0; this.vel[i * 3 + 2] *= 0.3; }
      this.alpha[i] = Math.min(1, this.life[i] / this.maxLife[i] * 2.5);
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.palpha.needsUpdate = true;
    this.geo.attributes.pcolor.needsUpdate = true;
    this.geo.attributes.psize.needsUpdate = true;
  }
}

// ---------- scene construction ----------

// ---------- clear blue sky dome (smooth gradient; the clouds are low-poly meshes) ----------
export const FOG_K = 0.98;
export const SKY_HORIZON = [0.30, 0.42, 0.62], SKY_ZENITH = [0.06, 0.16, 0.46]; // pre-ACES (three scales by 1/0.6)
function makeSkyDome(radius) {
  const v3 = (c) => `vec3(${c.map((x) => x.toFixed(3)).join(',')})`;
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { time: { value: 0 } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
    fragmentShader: `uniform float time; varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);            // per-pixel: no banding from interpolated directions
        float h = clamp(d.y, -1.0, 1.0);
        vec3 horizon = ${v3(SKY_HORIZON)}, zenith = ${v3(SKY_ZENITH)};
        vec3 col = mix(horizon, zenith, pow(smoothstep(0.0, 0.85, h), 0.7));
        col += vec3(1.0, 0.86, 0.62) * 0.06 * pow(max(0.0, 1.0 - abs(h - 0.02) * 6.0), 2.0); // faint warm glow on the horizon
        col = mix(col, horizon, 1.0 - smoothstep(-0.03, 0.06, h)); // below the horizon = haze (matches the fog)
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 64, 32), mat);
  mesh.renderOrder = -10; mesh.frustumCulled = false;
  return mesh;
}

// chunky low-poly cumulus: clusters of flattened faceted blobs, far away and unfogged
function makeClouds(rnd) {
  const geo = new THREE.IcosahedronGeometry(1, 1);
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0xaab4c4, flatShading: true, fog: false });
  const N = 34, PER = 6;
  const mesh = new THREE.InstancedMesh(geo, mat, N * PER);
  const d = new THREE.Object3D();
  let k = 0;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2 + rnd() * 0.15, r = 520 + rnd() * 260;
    const cx = Math.sin(a) * r, cz = 200 + Math.cos(a) * r, cy = 70 + rnd() * 120;
    const s = 22 + rnd() * 26;
    for (let j = 0; j < PER; j++) {
      const ox = (j - PER / 2) * s * 0.55 + (rnd() - 0.5) * s * 0.4, oy = (j % 2 ? 0.25 : 0) * s + rnd() * s * 0.2;
      const sc = s * (0.55 + rnd() * 0.5) * (j === 2 || j === 3 ? 1.3 : 1);
      d.position.set(cx + ox * Math.cos(a), cy + oy, cz - ox * Math.sin(a));
      d.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
      d.scale.set(sc, sc * 0.55, sc * 0.8);
      d.updateMatrix(); mesh.setMatrixAt(k++, d.matrix);
    }
  }
  mesh.count = k; mesh.frustumCulled = false; mesh.renderOrder = -9;
  return mesh;
}

// worn mud tracks: where most runners go down (and where the turf is churned up)
export function mudAmount(x, z) {
  if (z < -6 || z > HAY_Z + 8) return 0;
  let m = 0;
  const tracks = [-11, -4.5, 1.5, 7.5, 13];
  for (let k = 0; k < tracks.length; k++) {
    const cx = tracks[k] + 2.6 * Math.sin(z * 0.035 + k * 1.7) + 1.2 * Math.sin(z * 0.11 + k * 2.3);
    const w = 0.55 + 0.45 * vnoise(z * 0.08, k * 10) + (k === 2 ? 0.5 : 0);
    const d = Math.abs(x - cx) / w;
    if (d < 1.6) m = Math.max(m, (1 - d / 1.6) * (0.55 + 0.6 * vnoise(x * 0.9, z * 0.5)));
  }
  m += Math.max(0, vnoise(x * 0.18 + 20, z * 0.12) - 0.62) * 2.2 * (Math.abs(x) < 20 ? 1 : 0); // bare scuffed patches
  if (z < 4) m = Math.max(m, Math.max(0, 1 - Math.abs(x) / 12) * 0.4 * vnoise(x * 0.7, z * 0.7 + 3)); // trampled start
  if (z > FINISH_Z - 6 && z < HAY_Z + 2) m = Math.max(m, 0.9 * vnoise(x * 0.4, z * 0.4) * (1 - Math.abs(x) / 30)); // churned bottom
  return Math.min(1, Math.max(0, m));
}

// ---------- scene construction ----------
export function buildWorld(scene, renderer) {
  const rnd = mulberry32(42);
  const world = { update: null };
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();

  // sky + fog + env (overcast British daylight)
  const sky = makeSkyDome(1000);
  scene.add(sky);
  world.sky = sky;
  world.clouds = makeClouds(mulberry32(7));
  scene.add(world.clouds);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.add(makeSkyDome(50));
  const envGround = new THREE.Mesh(new THREE.CircleGeometry(49, 24), new THREE.MeshBasicMaterial({ color: 0x4a5a30 }));
  envGround.rotation.x = -Math.PI / 2; envGround.position.y = -2; envScene.add(envGround);
  scene.environment = pmrem.fromScene(envScene, 0.04).texture;
  scene.environmentIntensity = 0.55;
  scene.fog = new THREE.FogExp2(new THREE.Color().setRGB(SKY_HORIZON[0] * FOG_K + 0.055, SKY_HORIZON[1] * FOG_K + 0.03, SKY_HORIZON[2] * FOG_K, THREE.LinearSRGBColorSpace), 0.0015); // tuned so fully-fogged land matches the rendered sky horizon // = sky horizon, so distant land melts into the murk
  const sun = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 52), THREE.MathUtils.degToRad(160));
  world.sunDir = sun.clone();

  const hemi = new THREE.HemisphereLight(0xdfe9f5, 0x5d6338, 1.1);
  scene.add(hemi);
  const sunL = new THREE.DirectionalLight(0xffd6a0, 2.5);
  sunL.castShadow = true;
  sunL.shadow.mapSize.set(2048, 2048);
  const sc = sunL.shadow.camera; sc.left = -38; sc.right = 38; sc.top = 38; sc.bottom = -38; sc.near = 1; sc.far = 220;
  sunL.shadow.bias = -0.0003; sunL.shadow.normalBias = 0.035; sunL.shadow.radius = 3; sunL.shadow.intensity = 0.8;
  scene.add(sunL); scene.add(sunL.target);
  world.sun = sunL;
  world.placeSun = (p) => {
    const t = 76 / 2048;
    const x = Math.round(p.x / t) * t, z = Math.round(p.z / t) * t;
    sunL.target.position.set(x, p.y, z);
    sunL.position.set(x + sun.x * 100, p.y + sun.y * 100, z + sun.z * 100);
    sunL.target.updateMatrixWorld();
  };

  // terrain: fine inner mesh for the course (so mud tracks and lumps read), coarse outer mesh with a hole
  // low-poly palette: warm fresh greens, chocolate mud, patchwork fields
  const cGrass = new THREE.Color(0x6f9a3e), cGrass2 = new THREE.Color(0x8db44f), cDark = new THREE.Color(0x4d7232),
    cMud = new THREE.Color(0x52422f), cMud2 = new THREE.Color(0x6a5a40), cTmp = new THREE.Color();
  const fieldCols = [0x7aa344, 0x93b553, 0xc7b765, 0x5f8a3a, 0xb0a85a, 0x86a24a, 0xd2c27a].map((c) => new THREE.Color(c));
  const colorAt = (x, z, out) => {
    const ax = Math.abs(x);
    const n1 = vnoise(x * 0.09, z * 0.09), n2 = vnoise(x * 0.5 + 9, z * 0.5);
    out.copy(cGrass).lerp(cGrass2, n1 * 0.7 + n2 * 0.25);
    if (z > E || ax > 75) { // patchwork fields in the valley and on the surrounding farmland
      const fi = Math.floor(x / 45 + 100), fj = Math.floor((z - E) / 55);
      out.lerp(fieldCols[(fi * 7 + fj * 13) % fieldCols.length], 0.75);
    }
    if (ax > 24 && ax < 80 && z < E) out.lerp(cDark, Math.min(1, (ax - 24) / 18) * 0.6);
    const m = mudAmount(x, z);
    if (m > 0) { cTmp.copy(cMud2).lerp(cMud, vnoise(x * 1.3, z * 1.3)); out.lerp(cTmp, Math.min(0.9, m * 0.95)); }
    out.multiplyScalar(0.92 + vnoise(x * 2.1, z * 2.1) * 0.16);
    return out;
  };
  const terrainMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0, flatShading: true });
  // faceted terrain: non-indexed triangles, one colour per face (+ a little per-face jitter) for the low-poly look
  function makeTerrain(x0, x1, z0, z1, sx, sz, hole, jitter = 0.05) {
    const pg = new THREE.PlaneGeometry(x1 - x0, z1 - z0, sx, sz);
    pg.rotateX(-Math.PI / 2);
    pg.translate((x0 + x1) / 2, 0, (z0 + z1) / 2);
    const pp = pg.attributes.position;
    // nudge interior vertices a little so the facets aren't a perfect grid
    const dx = (x1 - x0) / sx, dz = (z1 - z0) / sz, jr = mulberry32(sx * 31 + sz);
    for (let i = 0; i < pp.count; i++) {
      let x = pp.getX(i), z = pp.getZ(i);
      if (x > x0 + 1e-3 && x < x1 - 1e-3 && z > z0 + 1e-3 && z < z1 - 1e-3) { x += (jr() - 0.5) * dx * 0.35; z += (jr() - 0.5) * dz * 0.35; }
      pp.setXYZ(i, x, height(x, z), z);
    }
    const idx = pg.index.array, keep = [];
    for (let t = 0; t < idx.length; t += 3) {
      if (hole) {
        let cx = 0, cz = 0;
        for (let k = 0; k < 3; k++) { cx += pp.getX(idx[t + k]) / 3; cz += pp.getZ(idx[t + k]) / 3; }
        if (Math.abs(cx) < hole[0] && cz > hole[1] && cz < hole[2]) continue;
      }
      keep.push(idx[t], idx[t + 1], idx[t + 2]);
    }
    const pos = new Float32Array(keep.length * 3), col = new Float32Array(keep.length * 3);
    const fr = mulberry32(sx * 7 + sz * 3);
    for (let t = 0; t < keep.length; t += 3) {
      let cx = 0, cz = 0;
      for (let k = 0; k < 3; k++) { const v = keep[t + k]; pos[(t + k) * 3] = pp.getX(v); pos[(t + k) * 3 + 1] = pp.getY(v); pos[(t + k) * 3 + 2] = pp.getZ(v); cx += pp.getX(v) / 3; cz += pp.getZ(v) / 3; }
      colorAt(cx, cz, cTmp).multiplyScalar(1 - jitter + fr() * jitter * 2);
      for (let k = 0; k < 3; k++) cTmp.toArray(col, (t + k) * 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.computeVertexNormals();
    pg.dispose();
    const mesh = new THREE.Mesh(geo, terrainMat);
    mesh.receiveShadow = true;
    scene.add(mesh);
    return mesh;
  }
  makeTerrain(-27, 27, -42, E + 2, 50, 400, null, 0.06);
  const outer = makeTerrain(-150, 150, -160, E + 260, 90, 200, [25, -38, E - 2], 0.08);
  outer.material = terrainMat.clone(); outer.material.polygonOffset = true; outer.material.polygonOffsetFactor = 1; outer.material.polygonOffsetUnits = 4;
  // far countryside so the horizon is land disappearing into the murk, not the edge of the world
  const far = makeTerrain(-900, 900, -700, 1700, 110, 150, [146, -156, E + 256], 0.1);
  far.material = terrainMat.clone(); far.material.polygonOffset = true; far.material.polygonOffsetFactor = 2; far.material.polygonOffsetUnits = 8;
  far.receiveShadow = false;

  // low-poly grass clumps (3 faceted spikes) + a few flowers, kept off the bare mud
  {
    const parts = [];
    const r = mulberry32(99);
    for (let b = 0; b < 3; b++) {
      const c = new THREE.ConeGeometry(0.09 + r() * 0.04, 0.32 + r() * 0.22, 4, 1);
      c.translate((r() - 0.5) * 0.18, 0.16, (r() - 0.5) * 0.18); c.rotateZ((r() - 0.5) * 0.5); c.rotateX((r() - 0.5) * 0.4);
      parts.push(c.toNonIndexed());
    }
    const g = new THREE.BufferGeometry();
    const cnt = parts.reduce((a, p) => a + p.attributes.position.count, 0);
    const P = new Float32Array(cnt * 3), C = new Float32Array(cnt * 3); let o = 0;
    for (const pt of parts) {
      const pa = pt.attributes.position;
      for (let i = 0; i < pa.count; i++) { P.set([pa.getX(i), pa.getY(i), pa.getZ(i)], (o + i) * 3); const y = pa.getY(i); const k = 0.75 + Math.min(1, y / 0.45) * 0.5; C.set([k, k, k * 0.95], (o + i) * 3); }
      o += pa.count;
    }
    g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('color', new THREE.BufferAttribute(C, 3));
    g.computeVertexNormals();
    const N = 14000;
    const tufts = new THREE.InstancedMesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.9 }), N);
    let i = 0, guard = 0;
    while (i < N && guard++ < N * 4) {
      const cx = (rnd() * 2 - 1) * 34, cz = -30 + rnd() * (E + 30);
      const k = 1 + (rnd() * 4 | 0);
      for (let j = 0; j < k && i < N; j++) {
        const x = cx + (rnd() - 0.5) * 2.2, z = cz + (rnd() - 0.5) * 2.2;
        if (mudAmount(x, z) > 0.3 + rnd() * 0.3) continue;
        const edge = Math.abs(x) > 21 ? 1.5 : 1;
        dummy.position.set(x, height(x, z) - 0.04, z);
        dummy.rotation.set(0, rnd() * 6.28, 0);
        const sc = (0.8 + rnd() * 0.8) * edge; dummy.scale.set(sc, sc * (0.8 + rnd() * 0.6), sc);
        dummy.updateMatrix(); tufts.setMatrixAt(i, dummy.matrix);
        const flower = rnd() < 0.04;
        color.setHex(flower ? [0xf4f0e0, 0xf2d04a, 0xe9a0c0][(rnd() * 3) | 0] : [0x5f8f36, 0x6fa040, 0x82b04a, 0x4f7d2e][(rnd() * 4) | 0]);
        tufts.setColorAt(i, color); i++;
      }
    }
    tufts.count = i;
    tufts.castShadow = false; tufts.receiveShadow = true;
    scene.add(tufts);
    world.tufts = tufts; world.tuftsMax = i;
  }

  // rocks: faceted boulders on the banks and in the valley (never in the racing lines)
  {
    const rg = new THREE.DodecahedronGeometry(1, 0);
    const rocks = new THREE.InstancedMesh(rg, new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 0.9 }), 260);
    let n = 0;
    for (let k = 0; k < 260; k++) {
      const side = rnd() < 0.5 ? -1 : 1;
      const x = side * (22.5 + rnd() * 60), z = -20 + rnd() * (E + 200);
      if (Math.abs(x) < 33 && Math.abs(x) > 23.8) continue; // keep the spectator strip clear
      const sc = 0.3 + Math.pow(rnd(), 2) * 1.6;
      dummy.position.set(x, height(x, z) + sc * 0.15, z); dummy.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3); dummy.scale.set(sc * (1 + rnd() * 0.6), sc * (0.6 + rnd() * 0.4), sc);
      dummy.updateMatrix(); rocks.setMatrixAt(n, dummy.matrix);
      color.setHSL(0.09, 0.08 + rnd() * 0.06, 0.5 + rnd() * 0.15); rocks.setColorAt(n, color); n++;
    }
    rocks.count = n; rocks.castShadow = true; rocks.receiveShadow = true; scene.add(rocks);
  }

  // trees: mostly broadleaf English woodland, some conifers
  {
    const trunkG = new THREE.CylinderGeometry(0.25, 0.4, 2.4, 5); trunkG.translate(0, 1.2, 0);
    const pineG = (() => { // stacked faceted cones
      const a = new THREE.ConeGeometry(1.9, 2.6, 6); a.translate(0, 3.0, 0);
      const b = new THREE.ConeGeometry(1.45, 2.2, 6); b.translate(0, 4.4, 0);
      const c = new THREE.ConeGeometry(0.95, 1.8, 6); c.translate(0, 5.6, 0);
      return mergeGeos([a, b, c]);
    })();
    const roundG = new THREE.IcosahedronGeometry(2.4, 0); roundG.translate(0, 3.9, 0);
    const round2G = new THREE.IcosahedronGeometry(1.7, 0); round2G.translate(1.0, 5.1, 0.5);
    const NR = 700, NP = 160;
    const mTrunk = new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.95, flatShading: true });
    const mLeaf = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, flatShading: true });
    const trunks = new THREE.InstancedMesh(trunkG, mTrunk, NR + NP);
    const pines = new THREE.InstancedMesh(pineG, mLeaf, NP);
    const rounds = new THREE.InstancedMesh(roundG, mLeaf, NR), rounds2 = new THREE.InstancedMesh(round2G, mLeaf, NR);
    let ti = 0, pi = 0, ri = 0;
    const place = (count, isPine) => {
      for (let n = 0; n < count; n++) {
        const side = rnd() < 0.5 ? -1 : 1;
        let x, z;
        if (rnd() < 0.8) { z = -100 + rnd() * (E + 120); x = side * ((z > -25 && z < E ? 39 : 28) + Math.pow(rnd(), 0.7) * 80); }
        else { z = E + rnd() * 260; x = (rnd() * 2 - 1) * 140; if (Math.abs(x) < 30 && z < E + 30) continue; } // valley copses (skipped slots are simply not written)
        const s = 0.8 + rnd() * 0.9;
        dummy.position.set(x, height(x, z) - 0.2, z); dummy.rotation.set(0, rnd() * 6, 0); dummy.scale.set(s, s * (0.85 + rnd() * 0.4), s);
        dummy.updateMatrix();
        trunks.setMatrixAt(ti++, dummy.matrix);
        color.setHSL(isPine ? 0.36 + rnd() * 0.04 : 0.2 + rnd() * 0.08, isPine ? 0.35 + rnd() * 0.1 : 0.42 + rnd() * 0.18, isPine ? 0.2 + rnd() * 0.05 : 0.28 + rnd() * 0.1);
        if (isPine) { pines.setMatrixAt(pi, dummy.matrix); pines.setColorAt(pi, color); pi++; }
        else { rounds.setMatrixAt(ri, dummy.matrix); rounds.setColorAt(ri, color); color.offsetHSL(0, 0, 0.03); rounds2.setMatrixAt(ri, dummy.matrix); rounds2.setColorAt(ri, color); ri++; }
      }
    };
    place(NP, true); place(NR, false);
    // only draw the instances we actually wrote (unwritten ones are identity matrices at the origin = white blob on the start line)
    trunks.count = ti; pines.count = pi; rounds.count = ri; rounds2.count = ri;
    for (const m of [trunks, pines, rounds, rounds2]) { m.castShadow = true; m.receiveShadow = true; scene.add(m); }
  }

  // hedges: behind the spectators and as hedgerows between the valley fields
  {
    const hg = new THREE.IcosahedronGeometry(1, 0);
    const hm = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true });
    const pts = [];
    for (const s of [-1, 1]) for (let z = -30; z < E; z += 1.1) pts.push([s * (35 + Math.sin(z * 0.05) * 0.6), z, 1.0]);
    for (const zz of [E + 30, E + 85, E + 140, E + 200]) for (let x = -150; x < 150; x += 1.3) if (Math.abs(x) > 26) pts.push([x, zz + Math.sin(x * 0.04) * 3, 0.9]);
    for (const xx of [-105, -60, 60, 105]) for (let z = E; z < E + 260; z += 1.3) pts.push([xx + Math.sin(z * 0.03) * 3, z, 0.9]);
    for (let x = -24; x <= 24; x += 1.1) pts.push([x, -34, 1.0]); // behind the start
    const hedges = new THREE.InstancedMesh(hg, hm, pts.length);
    pts.forEach(([x, z, s], i) => {
      dummy.position.set(x + (rnd() - 0.5) * 0.4, height(x, z) + 0.55 * s, z);
      dummy.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
      const k = s * (0.85 + rnd() * 0.4); dummy.scale.set(k * 1.1, k * (0.9 + rnd() * 0.5), k * 1.1);
      dummy.updateMatrix(); hedges.setMatrixAt(i, dummy.matrix);
      color.setHSL(0.25 + rnd() * 0.04, 0.42, 0.22 + rnd() * 0.06); hedges.setColorAt(i, color);
    });
    hedges.castShadow = true; hedges.receiveShadow = true; scene.add(hedges);
  }

  // wooden post-and-rail fences along both sides of the course
  {
    const postG = new THREE.BoxGeometry(0.13, 1.3, 0.13); postG.translate(0, 0.65, 0);
    const railG = new THREE.BoxGeometry(0.06, 0.12, 1);
    const wood = new THREE.MeshStandardMaterial({ color: 0x8f6a45, roughness: 0.95, flatShading: true });
    const zs = []; for (let z = -14; z <= HAY_Z; z += 2.4) zs.push(z);
    const posts = new THREE.InstancedMesh(postG, wood, zs.length * 2);
    const rails = new THREE.InstancedMesh(railG, wood, zs.length * 6);
    let pi = 0, ri = 0;
    for (const s of [-1, 1]) {
      const x = s * FENCE_X;
      for (let k = 0; k < zs.length; k++) {
        const z = zs[k];
        dummy.position.set(x, height(x, z) - 0.1, z); dummy.rotation.set((rnd() - 0.5) * 0.08, 0, (rnd() - 0.5) * 0.08); dummy.scale.set(1, 1, 1); dummy.updateMatrix();
        posts.setMatrixAt(pi++, dummy.matrix);
        if (k < zs.length - 1) {
          const z2 = zs[k + 1];
          for (const hgt of [0.35, 0.75, 1.15]) {
            const a = new THREE.Vector3(x, height(x, z) - 0.1 + hgt, z), b = new THREE.Vector3(x, height(x, z2) - 0.1 + hgt, z2);
            dummy.position.copy(a).add(b).multiplyScalar(0.5); dummy.rotation.set(0, 0, 0);
            dummy.lookAt(b); dummy.scale.set(1, 1, a.distanceTo(b)); dummy.updateMatrix();
            rails.setMatrixAt(ri++, dummy.matrix);
          }
        }
      }
    }
    posts.count = pi; rails.count = ri;
    for (const m of [posts, rails]) { m.castShadow = true; m.receiveShadow = true; scene.add(m); }
  }

  // spectators on the banks (muted anoraks, a few umbrellas), cheering when the race passes
  {
    const N = 900;
    const bodyG = new THREE.CylinderGeometry(0.2, 0.27, 1.0, 6); bodyG.translate(0, 0.62, 0);
    const headG = new THREE.IcosahedronGeometry(0.18, 0); headG.translate(0, 1.32, 0);
    const umbG = new THREE.ConeGeometry(0.75, 0.35, 6); umbG.translate(0, 2.05, 0);
    const bodies = new THREE.InstancedMesh(bodyG, new THREE.MeshStandardMaterial({ roughness: 0.75, flatShading: true }), N);
    const heads = new THREE.InstancedMesh(headG, new THREE.MeshStandardMaterial({ roughness: 0.7, flatShading: true }), N);
    const umbs = new THREE.InstancedMesh(umbG, new THREE.MeshStandardMaterial({ roughness: 0.5, flatShading: true }), N);
    const people = [];
    const coats = [0x1f3550, 0x2f4a2a, 0xa33b2b, 0xd9b030, 0x5b5f66, 0x7a2f45, 0x3a6f8f, 0x8a6a45, 0x222222, 0xe0e0e0, 0x2b6e5a, 0xc75b1a];
    const skins = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0xffdbac];
    let ui = 0;
    for (let i = 0; i < N; i++) {
      const s = rnd() < 0.5 ? -1 : 1;
      const z = -12 + rnd() * (HAY_Z + 4);
      const x = s * (24.4 + Math.pow(rnd(), 1.5) * 9.5);
      const p = { x, z, y: height(x, z), ph: rnd() * 6.28, sp: 4 + rnd() * 6, jump: rnd() < 0.3, rot: (s > 0 ? -Math.PI / 2 : Math.PI / 2) + (rnd() - 0.5) * 0.8, sc: 0.85 + rnd() * 0.3, umb: -1 };
      if (rnd() < 0.07) { p.umb = ui; color.setHex([0x1f3550, 0xa33b2b, 0x222222, 0xd9b030, 0x2f4a2a][ui % 5]); umbs.setColorAt(ui, color); ui++; p.jump = false; }
      people.push(p);
      color.setHex(coats[(rnd() * coats.length) | 0]); bodies.setColorAt(i, color);
      color.setHex(skins[(rnd() * skins.length) | 0]); heads.setColorAt(i, color);
    }
    umbs.count = ui;
    for (const m of [bodies, heads, umbs]) { m.castShadow = true; m.receiveShadow = true; m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); scene.add(m); }
    world.updateCrowd = (t, focusZ, excite) => {
      for (let i = 0; i < N; i++) {
        const p = people[i];
        const near = Math.abs(p.z - focusZ) < 60;
        if (!near && !world._crowdInit) continue;
        const hop = (p.jump || (near && excite)) && p.umb < 0 ? Math.max(0, Math.sin(t * p.sp + p.ph)) * (near && excite ? 0.3 : 0.12) : 0;
        dummy.position.set(p.x, p.y + hop, p.z);
        dummy.rotation.set(0, p.rot + Math.sin(t * 1.3 + p.ph) * 0.25, Math.sin(t * p.sp * 0.5 + p.ph) * 0.06);
        dummy.scale.setScalar(p.sc); dummy.updateMatrix();
        bodies.setMatrixAt(i, dummy.matrix); heads.setMatrixAt(i, dummy.matrix);
        if (p.umb >= 0) umbs.setMatrixAt(p.umb, dummy.matrix);
      }
      bodies.instanceMatrix.needsUpdate = true; heads.instanceMatrix.needsUpdate = true; umbs.instanceMatrix.needsUpdate = true;
    };
    world._crowdInit = true; world.updateCrowd(0, 0, false); world._crowdInit = false;
  }

  // a few marshal flags on poles
  {
    const poleG = new THREE.CylinderGeometry(0.05, 0.05, 4.5, 6); poleG.translate(0, 2.25, 0);
    const flagG = new THREE.PlaneGeometry(1.1, 0.7); flagG.translate(0.55, 4.05, 0);
    const pm = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.3, roughness: 0.5 });
    world.flags = [];
    for (const [x, z, c] of [[-23, 2, 0xd9b030], [23, 2, 0xd9b030], [-23, 120, 0xa33b2b], [23, 230, 0xa33b2b], [-23, 330, 0x1f3550]]) {
      const pole = new THREE.Mesh(poleG, pm); pole.position.set(x, height(x, z) - 0.1, z); pole.castShadow = true; scene.add(pole);
      const flag = new THREE.Mesh(flagG, new THREE.MeshStandardMaterial({ color: c, side: THREE.DoubleSide, roughness: 0.85 }));
      flag.position.copy(pole.position); flag.castShadow = true; scene.add(flag); world.flags.push(flag);
    }
  }

  // finish line
  {
    const y = height(0, FINISH_Z);
    const checker = canvasTex(256, 32, (g) => {
      for (let i = 0; i < 32; i++) for (let j = 0; j < 4; j++) { g.fillStyle = (i + j) % 2 ? '#1a1a1a' : '#eeeeee'; g.fillRect(i * 8, j * 8, 8, 8); }
    });
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(44, 1.4, 44, 1), new THREE.MeshStandardMaterial({ map: checker, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }));
    strip.rotation.x = -Math.PI / 2; strip.position.set(0, y + 0.04, FINISH_Z); strip.receiveShadow = true; scene.add(strip);
    const postM = new THREE.MeshStandardMaterial({ color: 0x8a6a45, roughness: 0.9 });
    for (const s of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 5.5, 8), postM);
      p.position.set(s * 22, y + 2.75, FINISH_Z); p.castShadow = true; scene.add(p);
    }
    const bannerTex = canvasTex(1024, 64, (g, w, h) => {
      g.fillStyle = '#f2ead6'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#9b2a1e'; g.fillRect(0, 0, w, 6); g.fillRect(0, h - 6, w, 6);
      g.font = 'bold 40px Georgia, serif'; g.fillStyle = '#9b2a1e'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('FINISH  ·  FINISH  ·  FINISH  ·  FINISH', w / 2, h / 2 + 2);
    });
    const bm = new THREE.MeshStandardMaterial({ map: bannerTex, roughness: 0.9 });
    const banner = new THREE.Mesh(new THREE.BoxGeometry(44, 1.2, 0.08), [postM, postM, postM, postM, bm, bm]);
    banner.position.set(0, y + 4.9, FINISH_Z); banner.castShadow = true; scene.add(banner);
  }

  // hay bales at the bottom (catch the runaways)
  {
    const g = new THREE.BoxGeometry(1.25, 0.6, 0.65);
    const hayTex = canvasTex(64, 64, (c) => { c.fillStyle = '#c9a957'; c.fillRect(0, 0, 64, 64); for (let i = 0; i < 300; i++) { c.strokeStyle = Math.random() < 0.5 ? '#a8873c' : '#e2c97e'; c.beginPath(); const x = Math.random() * 64, y = Math.random() * 64; c.moveTo(x, y); c.lineTo(x + Math.random() * 10 - 5, y + Math.random() * 3); c.stroke(); } });
    const hay = new THREE.InstancedMesh(g, new THREE.MeshStandardMaterial({ map: hayTex, roughness: 1 }), 200);
    let i = 0;
    for (let row = 0; row < 3; row++) for (let x = -22; x <= 22; x += 1.3) {
      const z = HAY_Z + 0.35;
      dummy.position.set(x + (row % 2) * 0.6, height(x, z) + 0.3 + row * 0.6, z); dummy.rotation.set(0, (rnd() - 0.5) * 0.1, 0); dummy.scale.set(1, 1, 1); dummy.updateMatrix();
      hay.setMatrixAt(i++, dummy.matrix);
    }
    hay.count = i; hay.castShadow = true; hay.receiveShadow = true; scene.add(hay);
  }

  // start line rope at the top
  {
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 44, 6), new THREE.MeshStandardMaterial({ color: 0xd8cfae }));
    rope.rotation.z = Math.PI / 2; rope.position.set(0, height(0, START_Z + 1.4) + 0.05, START_Z + 1.4); scene.add(rope);
  }

  world.update = (t) => {
    sky.material.uniforms.time.value = t;
    for (let i = 0; i < world.flags.length; i++) world.flags[i].rotation.y = Math.sin(t * 2 + i) * 0.3;
  };
  return world;
}
