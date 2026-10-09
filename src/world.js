// ---------------------------------------------------------------------------
// Cheese Chase - world: terrain height field, scenery, particles
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

import { G, START_Z, FINISH_Z, HAY_Z, TRACK_HALF, FENCE_X, mulberry32, height } from './core.js';

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
          gl_PointSize = psize*scale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }`,
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
export function buildWorld(scene, renderer) {
  const rnd = mulberry32(42);
  const world = { crowd: null, update: null };

  // sky + fog + env
  const sky = new Sky();
  sky.scale.setScalar(2500);
  const u = sky.material.uniforms;
  u.turbidity.value = 5; u.rayleigh.value = 1.4; u.mieCoefficient.value = 0.004; u.mieDirectionalG.value = 0.85;
  const sun = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 38), THREE.MathUtils.degToRad(150));
  u.sunPosition.value.copy(sun);
  scene.add(sky);
  world.sky = sky; world.sunDir = sun.clone();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene(); const sky2 = new Sky(); sky2.scale.setScalar(1000);
  sky2.material.uniforms.sunPosition.value.copy(sun); sky2.material.uniforms.turbidity.value = 5; sky2.material.uniforms.rayleigh.value = 1.4;
  envScene.add(sky2);
  scene.environment = pmrem.fromScene(envScene).texture;
  scene.environmentIntensity = 0.55;
  scene.fog = new THREE.FogExp2(0xb9cfdf, 0.0042);

  // lights
  const hemi = new THREE.HemisphereLight(0xd8ecff, 0x4b6b2c, 0.55);
  scene.add(hemi);
  const sunL = new THREE.DirectionalLight(0xfff0d8, 2.6);
  sunL.castShadow = true;
  sunL.shadow.mapSize.set(2048, 2048);
  const sc = sunL.shadow.camera; sc.left = -38; sc.right = 38; sc.top = 38; sc.bottom = -38; sc.near = 1; sc.far = 220;
  sunL.shadow.bias = -0.0003; sunL.shadow.normalBias = 0.03; sunL.shadow.radius = 4;
  scene.add(sunL); scene.add(sunL.target);
  world.sun = sunL;
  world.placeSun = (p) => {
    // snap to shadow texel grid to avoid shimmering
    const t = 76 / 2048;
    const x = Math.round(p.x / t) * t, z = Math.round(p.z / t) * t;
    sunL.target.position.set(x, p.y, z);
    sunL.position.set(x + sun.x * 100, p.y + sun.y * 100, z + sun.z * 100);
    sunL.target.updateMatrixWorld();
  };

  // terrain
  const W = 260, L = 640, SX = 210, SZ = 520;
  const geo = new THREE.PlaneGeometry(W, L, SX, SZ);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, 0, 180);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const cGrass = new THREE.Color(0x5a8f35), cGrass2 = new THREE.Color(0x6fa53f), cDark = new THREE.Color(0x3e6b28),
    cDirt = new THREE.Color(0x7a5a3a), cTmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const y = height(x, z);
    pos.setY(i, y);
    const n1 = Math.sin(x * 0.13 + z * 0.07) * Math.sin(z * 0.09 - x * 0.05) * 0.5 + 0.5;
    const stripe = (Math.floor((x + 200) / 5) % 2) ? 1 : 0;
    cTmp.copy(cGrass).lerp(cGrass2, n1 * 0.6 + stripe * 0.25 * (Math.abs(x) < 22 ? 1 : 0));
    if (Math.abs(x) > 24) cTmp.lerp(cDark, Math.min(1, (Math.abs(x) - 24) / 20) * 0.7);
    // worn muddy patches on the racing line
    if (Math.abs(x) < 20 && z > 2 && z < 275) {
      const wn = Math.sin(x * 0.4 + z * 0.21) * Math.sin(z * 0.17 + x * 0.12) + Math.sin(z * 0.53) * 0.4;
      const w = Math.max(0, wn - 0.35) * Math.max(0, 1 - Math.abs(x) / 16);
      cTmp.lerp(cDirt, Math.min(0.85, w * 1.2));
    }
    cTmp.multiplyScalar(0.92 + rnd() * 0.16);
    colors[i * 3] = cTmp.r; colors[i * 3 + 1] = cTmp.g; colors[i * 3 + 2] = cTmp.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const gt = grassTexture(); gt.repeat.set(W / 3, L / 3); gt.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const terrain = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: gt, vertexColors: true, roughness: 0.95, metalness: 0 }));
  terrain.receiveShadow = true;
  scene.add(terrain);

  const dummy = new THREE.Object3D();
  const color = new THREE.Color();

  // grass tufts
  {
    const g = new THREE.BufferGeometry();
    const p = [], c = [];
    const r = mulberry32(99);
    for (let b = 0; b < 7; b++) {
      const a = r() * Math.PI * 2, ox = (r() - 0.5) * 0.25, oz = (r() - 0.5) * 0.25, hgt = 0.18 + r() * 0.22, w = 0.035;
      const dx = Math.cos(a) * w, dz = Math.sin(a) * w, lean = (r() - 0.5) * 0.12;
      p.push(ox - dx, 0, oz - dz, ox + dx, 0, oz + dz, ox + lean, hgt, oz + lean);
      c.push(0.13, 0.25, 0.06, 0.13, 0.25, 0.06, 0.45, 0.7, 0.25);
    }
    g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
    g.computeVertexNormals();
    const N = 16000;
    const tufts = new THREE.InstancedMesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }), N);
    for (let i = 0; i < N; i++) {
      const x = (rnd() * 2 - 1) * 45, z = -30 + rnd() * 330;
      dummy.position.set(x, height(x, z) - 0.02, z);
      dummy.rotation.set(0, rnd() * 6.28, 0);
      const s = 0.7 + rnd() * 0.9; dummy.scale.set(s, s * (0.8 + rnd() * 0.6), s);
      dummy.updateMatrix(); tufts.setMatrixAt(i, dummy.matrix);
    }
    tufts.receiveShadow = true;
    scene.add(tufts);
  }

  // trees
  {
    const trunkG = new THREE.CylinderGeometry(0.22, 0.34, 2.2, 6); trunkG.translate(0, 1.1, 0);
    const pineG = new THREE.ConeGeometry(1.9, 3.6, 7); pineG.translate(0, 3.6, 0);
    const pine2G = new THREE.ConeGeometry(1.4, 2.8, 7); pine2G.translate(0, 5.2, 0);
    const roundG = new THREE.IcosahedronGeometry(2.1, 1); roundG.translate(0, 3.6, 0);
    const N = 520;
    const mTrunk = new THREE.MeshStandardMaterial({ color: 0x6b4a2f, roughness: 0.9, flatShading: true });
    const mLeaf = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, flatShading: true });
    const trunks = new THREE.InstancedMesh(trunkG, mTrunk, N * 2);
    const pines = new THREE.InstancedMesh(pineG, mLeaf, N), pines2 = new THREE.InstancedMesh(pine2G, mLeaf, N);
    const rounds = new THREE.InstancedMesh(roundG, mLeaf, N);
    let ti = 0;
    const place = (im, count, isPine) => {
      for (let i = 0; i < count; i++) {
        const side = rnd() < 0.5 ? -1 : 1;
        const z = -90 + rnd() * 560;
        const minX = (z > -15 && z < 300) ? 37 : 26;
        const x = side * (minX + Math.pow(rnd(), 0.8) * 85);
        const s = 0.8 + rnd() * 0.9;
        dummy.position.set(x, height(x, z) - 0.2, z); dummy.rotation.set(0, rnd() * 6, 0); dummy.scale.set(s, s * (0.85 + rnd() * 0.4), s);
        dummy.updateMatrix();
        trunks.setMatrixAt(ti++, dummy.matrix);
        color.setHSL(0.24 + rnd() * 0.1, 0.45 + rnd() * 0.2, isPine ? 0.2 + rnd() * 0.08 : 0.27 + rnd() * 0.1);
        im.setMatrixAt(i, dummy.matrix); im.setColorAt(i, color);
        if (isPine) { pines2.setMatrixAt(i, dummy.matrix); pines2.setColorAt(i, color); }
      }
    };
    place(pines, N, true); place(rounds, N, false);
    trunks.count = ti;
    for (const m of [trunks, pines, pines2, rounds]) { m.castShadow = true; m.receiveShadow = true; scene.add(m); }
  }

  // fences
  {
    const postG = new THREE.BoxGeometry(0.14, 1.3, 0.14); postG.translate(0, 0.65, 0);
    const railG = new THREE.BoxGeometry(0.07, 0.11, 1);
    const wood = new THREE.MeshStandardMaterial({ color: 0x8a6a45, roughness: 0.9 });
    const zs = []; for (let z = -12; z <= 282; z += 2.6) zs.push(z);
    const posts = new THREE.InstancedMesh(postG, wood, zs.length * 2);
    const rails = new THREE.InstancedMesh(railG, wood, zs.length * 4);
    let pi = 0, ri = 0;
    for (const s of [-1, 1]) {
      const x = s * FENCE_X;
      for (let k = 0; k < zs.length; k++) {
        const z = zs[k];
        dummy.position.set(x, height(x, z) - 0.1, z); dummy.rotation.set(0, 0, 0); dummy.scale.set(1, 1, 1); dummy.updateMatrix();
        posts.setMatrixAt(pi++, dummy.matrix);
        if (k < zs.length - 1) {
          const z2 = zs[k + 1];
          for (const hgt of [0.55, 1.05]) {
            const a = new THREE.Vector3(x, height(x, z) - 0.1 + hgt, z), b = new THREE.Vector3(x, height(x, z2) - 0.1 + hgt, z2);
            dummy.position.copy(a).add(b).multiplyScalar(0.5);
            dummy.lookAt(b); dummy.scale.set(1, 1, a.distanceTo(b)); dummy.updateMatrix();
            rails.setMatrixAt(ri++, dummy.matrix);
          }
        }
      }
    }
    posts.count = pi; rails.count = ri;
    for (const m of [posts, rails]) { m.castShadow = true; m.receiveShadow = true; scene.add(m); }
  }

  // crowd
  {
    const N = 560;
    const bodyG = new THREE.CapsuleGeometry(0.24, 0.7, 3, 8); bodyG.translate(0, 0.6, 0);
    const headG = new THREE.IcosahedronGeometry(0.17, 1); headG.translate(0, 1.32, 0);
    const bodies = new THREE.InstancedMesh(bodyG, new THREE.MeshStandardMaterial({ roughness: 0.8, flatShading: true }), N);
    const heads = new THREE.InstancedMesh(headG, new THREE.MeshStandardMaterial({ roughness: 0.7, flatShading: true }), N);
    const people = [];
    const shirts = [0xd64541, 0x2e86de, 0xf5c542, 0x27ae60, 0x8e44ad, 0xffffff, 0xe67e22, 0x34495e, 0x16a085, 0xff7eb6];
    const skins = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0xffdbac];
    for (let i = 0; i < N; i++) {
      const s = rnd() < 0.5 ? -1 : 1;
      const z = -10 + rnd() * 295;
      const x = s * (25 + rnd() * 9);
      const p = { x, z, y: height(x, z), ph: rnd() * 6.28, sp: 4 + rnd() * 6, jump: rnd() < 0.35, rot: s > 0 ? -Math.PI / 2 : Math.PI / 2, sc: 0.85 + rnd() * 0.3 };
      people.push(p);
      color.setHex(shirts[(rnd() * shirts.length) | 0]); bodies.setColorAt(i, color);
      color.setHex(skins[(rnd() * skins.length) | 0]); heads.setColorAt(i, color);
    }
    for (const m of [bodies, heads]) { m.castShadow = true; m.receiveShadow = true; m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); scene.add(m); }
    world.updateCrowd = (t, focusZ, excite) => {
      for (let i = 0; i < N; i++) {
        const p = people[i];
        const near = Math.abs(p.z - focusZ) < 70;
        const hop = p.jump || near && excite ? Math.max(0, Math.sin(t * p.sp + p.ph)) * (near && excite ? 0.35 : 0.15) : 0;
        dummy.position.set(p.x, p.y + hop, p.z);
        dummy.rotation.set(0, p.rot + Math.sin(t * 1.3 + p.ph) * 0.3, Math.sin(t * p.sp * 0.5 + p.ph) * 0.06);
        dummy.scale.setScalar(p.sc); dummy.updateMatrix();
        bodies.setMatrixAt(i, dummy.matrix); heads.setMatrixAt(i, dummy.matrix);
      }
      bodies.instanceMatrix.needsUpdate = true; heads.instanceMatrix.needsUpdate = true;
    };
    world.updateCrowd(0, 0, false);
  }

  // flags / bunting poles along top
  {
    const poleG = new THREE.CylinderGeometry(0.06, 0.06, 6, 6); poleG.translate(0, 3, 0);
    const flagG = new THREE.PlaneGeometry(1.4, 0.9); flagG.translate(0.7, 5.4, 0);
    const pm = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.4, roughness: 0.4 });
    const flagCols = [0xd64541, 0xf5c542, 0x2e86de, 0x27ae60];
    world.flags = [];
    let k = 0;
    for (let z = 10; z < 270; z += 40) for (const s of [-1, 1]) {
      const x = s * 22.8;
      const pole = new THREE.Mesh(poleG, pm); pole.position.set(x, height(x, z) - 0.1, z); pole.castShadow = true; scene.add(pole);
      const flag = new THREE.Mesh(flagG, new THREE.MeshStandardMaterial({ color: flagCols[k++ % 4], side: THREE.DoubleSide, roughness: 0.8 }));
      flag.position.copy(pole.position); flag.castShadow = true; scene.add(flag); world.flags.push(flag);
    }
  }

  // finish line
  {
    const y = height(0, FINISH_Z);
    const checker = canvasTex(256, 32, (g) => {
      for (let i = 0; i < 32; i++) for (let j = 0; j < 4; j++) { g.fillStyle = (i + j) % 2 ? '#111' : '#fff'; g.fillRect(i * 8, j * 8, 8, 8); }
    });
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(44, 1.6), new THREE.MeshStandardMaterial({ map: checker, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -2 }));
    strip.rotation.x = -Math.PI / 2; strip.position.set(0, y + 0.03, FINISH_Z); strip.receiveShadow = true; scene.add(strip);
    const postM = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.5 });
    for (const s of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 6.5, 10), postM);
      p.position.set(s * 22, y + 3.25, FINISH_Z); p.castShadow = true; scene.add(p);
    }
    const bannerTex = canvasTex(1024, 64, (g, w, h) => {
      g.fillStyle = '#c0392b'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 64; i++) { g.fillStyle = i % 2 ? '#111' : '#fff'; g.fillRect(i * 16, 0, 16, 8); g.fillRect(i * 16 + (i % 2 ? -16 : 0) + 16, h - 8, 16, 8); }
      g.font = 'bold 40px sans-serif'; g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('★  FINISH  ★  FINISH  ★  FINISH  ★', w / 2, h / 2 + 2);
    });
    const banner = new THREE.Mesh(new THREE.BoxGeometry(44, 1.4, 0.15), [postM, postM, postM, postM, new THREE.MeshStandardMaterial({ map: bannerTex }), new THREE.MeshStandardMaterial({ map: bannerTex })]);
    banner.position.set(0, y + 5.8, FINISH_Z); banner.castShadow = true; scene.add(banner);
  }

  // hay bales at bottom
  {
    const g = new THREE.BoxGeometry(1.25, 0.6, 0.65);
    const hayTex = canvasTex(64, 64, (c) => { c.fillStyle = '#d9b860'; c.fillRect(0, 0, 64, 64); for (let i = 0; i < 300; i++) { c.strokeStyle = Math.random() < 0.5 ? '#b8933f' : '#f0d58a'; c.beginPath(); const x = Math.random() * 64, y = Math.random() * 64; c.moveTo(x, y); c.lineTo(x + Math.random() * 10 - 5, y + Math.random() * 3); c.stroke(); } });
    const hay = new THREE.InstancedMesh(g, new THREE.MeshStandardMaterial({ map: hayTex, roughness: 1 }), 200);
    let i = 0;
    for (let row = 0; row < 3; row++) for (let x = -22; x <= 22; x += 1.3) {
      const z = HAY_Z + 0.35;
      dummy.position.set(x + (row % 2) * 0.6, height(x, z) + 0.3 + row * 0.6, z); dummy.rotation.set(0, (rnd() - 0.5) * 0.1, 0); dummy.scale.set(1, 1, 1); dummy.updateMatrix();
      hay.setMatrixAt(i++, dummy.matrix);
    }
    hay.count = i; hay.castShadow = true; hay.receiveShadow = true; scene.add(hay);
  }

  // start line (rope) at the top
  {
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 44, 6), new THREE.MeshStandardMaterial({ color: 0xe8d8a8 }));
    rope.rotation.z = Math.PI / 2; rope.position.set(0, 0.04, START_Z + 1.4); scene.add(rope);
  }

  world.update = (t) => {
    for (let i = 0; i < world.flags.length; i++) {
      const f = world.flags[i];
      f.rotation.y = Math.sin(t * 2 + i) * 0.25;
    }
  };
  return world;
}
