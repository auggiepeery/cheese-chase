// Low-poly stylised runner + cheese wheel models and their animation.
import * as THREE from 'three';
import { ST, CHARACTERS } from './core.js';
import { makeLabelTexture } from './world.js';

const matCache = new Map();
function M(c, extra) {
  const key = c + (extra ? JSON.stringify(extra) : '');
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshStandardMaterial({ color: c, roughness: 0.72, metalness: 0, flatShading: true, ...(extra || {}) }));
  return matCache.get(key);
}
function add(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m;
}
function addHat(head, ch) {
  const hc = M(ch.hatColor ?? 0x333333);
  switch (ch.hat) {
    case 'flatcap': add(head, new THREE.CylinderGeometry(0.19, 0.19, 0.08, 10), hc, 0, 0.13, -0.01); add(head, new THREE.BoxGeometry(0.26, 0.03, 0.14), hc, 0, 0.11, 0.15).rotation.x = 0.15; break;
    case 'headband': { const t = add(head, new THREE.TorusGeometry(0.168, 0.028, 6, 14), hc, 0, 0.06, 0); t.rotation.x = Math.PI / 2; break; }
    case 'chef': add(head, new THREE.CylinderGeometry(0.16, 0.14, 0.14, 10), hc, 0, 0.17, 0); add(head, new THREE.IcosahedronGeometry(0.2, 1), hc, 0, 0.32, 0).scale.set(1, 0.75, 1); break;
    case 'viking': {
      add(head, new THREE.SphereGeometry(0.19, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), hc, 0, 0.03, 0);
      for (const s of [-1, 1]) { const h = add(head, new THREE.ConeGeometry(0.045, 0.22, 6), M(0xf5ecd0), s * 0.2, 0.15, 0); h.rotation.z = -s * 0.9; }
      break;
    }
    case 'bobby': add(head, new THREE.CylinderGeometry(0.12, 0.19, 0.3, 10), hc, 0, 0.2, 0); add(head, new THREE.IcosahedronGeometry(0.035, 0), M(0xd4af37, { metalness: 0.8, roughness: 0.3 }), 0, 0.22, 0.155); add(head, new THREE.SphereGeometry(0.05, 6, 4), hc, 0, 0.36, 0); break;
    case 'cow':
      for (const s of [-1, 1]) { const h = add(head, new THREE.ConeGeometry(0.035, 0.14, 6), M(0xf5ecd0), s * 0.11, 0.2, 0); h.rotation.z = -s * 0.4; const e = add(head, new THREE.BoxGeometry(0.12, 0.05, 0.06), M(0x111111), s * 0.2, 0.08, 0); e.rotation.z = s * 0.4; }
      add(head, new THREE.SphereGeometry(0.185, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2.2), M(0x111111), 0, 0.02, -0.01);
      break;
    case 'widebrim': add(head, new THREE.CylinderGeometry(0.36, 0.36, 0.02, 14), hc, 0, 0.1, 0); add(head, new THREE.CylinderGeometry(0.15, 0.18, 0.15, 12), hc, 0, 0.18, 0); add(head, new THREE.IcosahedronGeometry(0.055, 0), M(0xe74c3c), 0.14, 0.2, 0.08); break;
    case 'wedge': { const w = add(head, new THREE.CylinderGeometry(0.34, 0.34, 0.16, 3, 1, false, 0, Math.PI / 2.5), hc, 0, 0.17, 0); w.rotation.y = Math.PI * 0.8; break; }
    case 'tophat': add(head, new THREE.CylinderGeometry(0.27, 0.27, 0.02, 14), hc, 0, 0.12, 0); add(head, new THREE.CylinderGeometry(0.15, 0.15, 0.32, 14), hc, 0, 0.28, 0); add(head, new THREE.CylinderGeometry(0.152, 0.152, 0.05, 14), M(0xc0392b), 0, 0.16, 0); break;
    case 'beanie': add(head, new THREE.SphereGeometry(0.19, 10, 6, 0, Math.PI * 2, 0, Math.PI / 1.9), hc, 0, 0.03, 0); add(head, new THREE.IcosahedronGeometry(0.06, 1), M(0xffffff), 0, 0.23, 0); break;
  }
}

export function buildRunner(charIdx) {
  const ch = CHARACTERS[((charIdx % CHARACTERS.length) + CHARACTERS.length) % CHARACTERS.length];
  const root = new THREE.Group();
  const body = new THREE.Group(); body.position.y = 0.95; root.add(body);
  const skin = M(ch.skin), shirt = M(ch.shirt), shorts = M(ch.shorts), shoe = M(ch.shoes ?? 0x222222), hair = M(ch.hair);
  add(body, new THREE.BoxGeometry(0.38, 0.22, 0.25), shorts, 0, 0.02, 0);
  add(body, new THREE.CylinderGeometry(0.21, 0.18, 0.56, 7), shirt, 0, 0.38, 0);
  if (ch.stripe) { add(body, new THREE.CylinderGeometry(0.216, 0.2, 0.1, 7), M(ch.stripe), 0, 0.42, 0); add(body, new THREE.CylinderGeometry(0.2, 0.19, 0.08, 7), M(ch.stripe), 0, 0.2, 0); }
  if (ch.hat === 'cow') for (const [x, y, z] of [[0.12, 0.45, 0.17], [-0.1, 0.3, -0.18], [0.15, 0.25, -0.1]]) add(body, new THREE.IcosahedronGeometry(0.07, 0), M(0x111111), x, y, z).scale.set(1, 1, 0.4);
  const neck = new THREE.Group(); neck.position.y = 0.68; body.add(neck);
  const head = new THREE.Group(); head.position.y = 0.15; neck.add(head);
  add(head, new THREE.IcosahedronGeometry(0.17, 1), skin);
  add(head, new THREE.SphereGeometry(0.178, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.45), hair, 0, 0.012, -0.02).rotation.x = -0.35;
  for (const s of [-1, 1]) add(head, new THREE.BoxGeometry(0.035, 0.05, 0.02), M(0x111111), s * 0.06, 0.0, 0.16);
  add(head, new THREE.BoxGeometry(0.03, 0.04, 0.05), skin, 0, -0.02, 0.17);
  addHat(head, ch);
  let cape = null;
  if (ch.cape) { cape = new THREE.Group(); cape.position.set(0, 0.62, -0.17); body.add(cape); const cm = add(cape, new THREE.BoxGeometry(0.4, 0.62, 0.02), M(ch.cape), 0, -0.31, 0); cm.castShadow = true; }
  const limbs = {};
  for (const s of [-1, 1]) {
    const side = s < 0 ? 'R' : 'L';
    const sh = new THREE.Group(); sh.position.set(s * 0.27, 0.6, 0); body.add(sh);
    add(sh, new THREE.CapsuleGeometry(0.058, 0.24, 2, 6), shirt, 0, -0.15, 0);
    const el = new THREE.Group(); el.position.y = -0.32; sh.add(el);
    add(el, new THREE.CapsuleGeometry(0.05, 0.22, 2, 6), skin, 0, -0.13, 0);
    add(el, new THREE.IcosahedronGeometry(0.06, 0), skin, 0, -0.29, 0);
    const hip = new THREE.Group(); hip.position.set(s * 0.11, -0.04, 0); body.add(hip);
    add(hip, new THREE.CapsuleGeometry(0.078, 0.28, 2, 6), shorts, 0, -0.2, 0);
    const kn = new THREE.Group(); kn.position.y = -0.44; hip.add(kn);
    add(kn, new THREE.CapsuleGeometry(0.066, 0.28, 2, 6), skin, 0, -0.2, 0);
    add(kn, new THREE.BoxGeometry(0.12, 0.08, 0.25), shoe, 0, -0.43, 0.05);
    limbs['sh' + side] = sh; limbs['el' + side] = el; limbs['hip' + side] = hip; limbs['kn' + side] = kn;
  }
  return { root, body, neck, head, cape, limbs, ch };
}

const tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler();
const lerpA = (a, b, k) => a + (b - a) * k;
function wrapPI(a) { return Math.atan2(Math.sin(a), Math.cos(a)); }

export class RacerView {
  constructor(scene, info, label, labelColor) {
    this.info = info;
    this.m = buildRunner(info.char);
    this.root = this.m.root;
    scene.add(this.root);
    this.phase = Math.random() * 6; this.prevState = -1; this.lastPitch = 0; this.lastRoll = 0; this.yaw = 0;
    this.t = 0; this.stepAcc = 0;
    if (label) {
      const tex = makeLabelTexture(label, labelColor || '#fff', null, 256, 64, 'bold 34px sans-serif');
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
      sp.scale.set(1.6, 0.4, 1); sp.position.y = 2.35; sp.renderOrder = 10;
      this.root.add(sp); this.label = sp;
    }
  }
  // s: {x,y,z, yaw,pitch,roll, state, flags, vx,vz, st}
  apply(s, dt, particles) {
    const m = this.m, L = m.limbs, b = m.body;
    this.t += dt;
    const k = 1 - Math.exp(-14 * dt);
    this.root.position.set(s.x, s.y, s.z);
    this.root.rotation.set(0, s.yaw, 0);
    const sp = Math.hypot(s.vx, s.vz);
    const state = s.state;
    if (state !== this.prevState) {
      if (this.prevState === ST.TUMBLE) { this.lastPitch = wrapPI(b.rotation.x); this.lastRoll = wrapPI(b.rotation.z); }
      else if (this.prevState === ST.DIVE) { this.lastPitch = b.rotation.x; this.lastRoll = 0; }
      this.prevState = state;
    }
    const tgt = { shL: 0, shR: 0, elL: 0, elR: 0, hipL: 0, hipR: 0, knL: 0, knR: 0, shZL: 0, shZR: 0 };
    let bodyY = 0.95, pitch = 0, roll = 0, direct = false;
    switch (state) {
      case ST.IDLE: {
        const br = Math.sin(this.t * 2.5) * 0.03;
        pitch = 0.25; bodyY = 0.85 + br;
        tgt.hipL = -0.6; tgt.knL = 0.9; tgt.hipR = 0.35; tgt.knR = 0.5; tgt.shL = 0.5; tgt.shR = -0.6; tgt.elL = -0.5; tgt.elR = -0.9;
        break;
      }
      case ST.RUN: {
        const amp = Math.min(1, 0.25 + sp / 9);
        this.phase += dt * (3 + sp * 0.95);
        const p = this.phase;
        tgt.hipL = -Math.sin(p) * 0.95 * amp; tgt.hipR = Math.sin(p) * 0.95 * amp;
        tgt.knL = 0.25 + Math.max(0, Math.sin(p + 1.4)) * 1.35 * amp; tgt.knR = 0.25 + Math.max(0, Math.sin(p + 1.4 + Math.PI)) * 1.35 * amp;
        tgt.shL = Math.sin(p) * 0.9 * amp; tgt.shR = -Math.sin(p) * 0.9 * amp;
        tgt.elL = -0.9 - 0.3 * amp; tgt.elR = -0.9 - 0.3 * amp; tgt.shZL = 0.15; tgt.shZR = -0.15;
        pitch = 0.08 + Math.min(0.25, sp * 0.015) - (s.meter || 0) * 0.35; // lean back when out of control
        roll = Math.sin(this.t * 13) * (s.meter || 0) * 0.25;
        if (s.meter > 0.5) { tgt.shZL = 1.2 + Math.sin(this.t * 17) * 0.5; tgt.shZR = -1.2 - Math.sin(this.t * 15) * 0.5; } // windmilling
        bodyY = 0.95 + Math.abs(Math.sin(p)) * 0.07 * amp - 0.05 * amp;
        if (s.flags & 4) roll += Math.sin(this.t * 20) * 0.2;
        // footsteps kick turf
        if (particles && sp > 4 && s.grounded) {
          this.stepAcc += dt * (3 + sp * 0.95) / Math.PI;
          if (this.stepAcc > 1) { this.stepAcc = 0; particles.kick(s.x, s.y, s.z, s.vx, s.vz, sp * 0.35); }
        }
        break;
      }
      case ST.DIVE:
        pitch = 1.35; bodyY = 0.42; tgt.shL = tgt.shR = -2.9; tgt.elL = tgt.elR = 0; tgt.hipL = 0.25; tgt.hipR = 0.15; tgt.knL = 0.3; tgt.knR = 0.5;
        if (particles && s.grounded && sp > 2 && Math.random() < 0.5) particles.kick(s.x, s.y, s.z, s.vx, s.vz, 3);
        break;
      case ST.TUMBLE: {
        direct = true; pitch = s.pitch; roll = s.roll; bodyY = 0.5;
        const t = this.t;
        tgt.shL = Math.sin(t * 11) * 2; tgt.shR = Math.sin(t * 9 + 1) * 2; tgt.shZL = 1 + Math.sin(t * 7) * 0.8; tgt.shZR = -1 - Math.sin(t * 8) * 0.8;
        tgt.hipL = Math.sin(t * 10 + 2) * 1.2; tgt.hipR = Math.sin(t * 12) * 1.2; tgt.knL = 0.6 + Math.sin(t * 9) * 0.6; tgt.knR = 0.6 + Math.cos(t * 11) * 0.6;
        tgt.elL = -0.5; tgt.elR = -0.8;
        if (particles && Math.random() < 0.6 && s.grounded !== false) particles.kick(s.x, s.y, s.z, s.vx, s.vz, 4 + sp * 0.4);
        break;
      }
      case ST.GETUP: {
        const f = Math.min(1, (s.st || 0) / 0.7);
        const e = f * f * (3 - 2 * f);
        direct = true; pitch = lerpA(this.lastPitch, 0.1, e); roll = lerpA(this.lastRoll, 0, e); bodyY = lerpA(0.5, 0.92, e);
        tgt.hipL = -1.2 * (1 - e); tgt.knL = 1.6 * (1 - e) + 0.2; tgt.hipR = -0.5 * (1 - e); tgt.knR = 0.8 * (1 - e) + 0.2; tgt.shL = 0.6 * (1 - e); tgt.shR = 0.6 * (1 - e); tgt.elL = tgt.elR = -0.6;
        break;
      }
      case ST.CELEBRATE: {
        const j = Math.abs(Math.sin(this.t * 6));
        bodyY = 0.95 + j * 0.25; pitch = -0.1;
        tgt.shL = -2.9; tgt.shR = -2.9; tgt.shZL = -0.35 + Math.sin(this.t * 8) * 0.2; tgt.shZR = 0.35 - Math.sin(this.t * 8) * 0.2; tgt.elL = tgt.elR = -0.2;
        tgt.hipL = -0.3 * j; tgt.knL = 0.6 * j; tgt.hipR = -0.3 * j; tgt.knR = 0.6 * j;
        break;
      }
    }
    if (s.flags & 1 && (state === ST.RUN || state === ST.DIVE)) { tgt.shL = tgt.shR = state === ST.DIVE ? -3.0 : -1.55; tgt.elL = tgt.elR = -0.1; tgt.shZL = tgt.shZR = 0; }
    if (s.flags & 2 && state === ST.RUN) { tgt.shR = -1.6; tgt.elR = -0.2; tgt.shZR = 0.4; tgt.shL = -1.2; tgt.shZL = -0.3; }
    if (direct) { b.rotation.x = pitch; b.rotation.z = roll; }
    else { b.rotation.x = lerpA(b.rotation.x, pitch, k); b.rotation.z = lerpA(b.rotation.z, roll, k); }
    b.position.y = lerpA(b.position.y, bodyY, direct ? 1 : k);
    const kk = state === ST.TUMBLE ? 1 - Math.exp(-25 * dt) : k;
    L.shL.rotation.x = lerpA(L.shL.rotation.x, tgt.shL, kk); L.shR.rotation.x = lerpA(L.shR.rotation.x, tgt.shR, kk);
    L.shL.rotation.z = lerpA(L.shL.rotation.z, tgt.shZL, kk); L.shR.rotation.z = lerpA(L.shR.rotation.z, tgt.shZR, kk);
    L.elL.rotation.x = lerpA(L.elL.rotation.x, tgt.elL, kk); L.elR.rotation.x = lerpA(L.elR.rotation.x, tgt.elR, kk);
    L.hipL.rotation.x = lerpA(L.hipL.rotation.x, tgt.hipL, kk); L.hipR.rotation.x = lerpA(L.hipR.rotation.x, tgt.hipR, kk);
    L.knL.rotation.x = lerpA(L.knL.rotation.x, tgt.knL, kk); L.knR.rotation.x = lerpA(L.knR.rotation.x, tgt.knR, kk);
    m.neck.rotation.x = state === ST.DIVE ? -0.9 : state === ST.RUN ? -pitch * 0.6 : 0;
    if (m.cape) m.cape.rotation.x = lerpA(m.cape.rotation.x, -Math.min(1.3, 0.15 + sp * 0.09) + Math.sin(this.t * 14) * 0.08, k);
  }
  dispose(scene) { scene.remove(this.root); }
}

function cheeseTextures() {
  const mk = (w, h, f) => { const c = document.createElement('canvas'); c.width = w; c.height = h; f(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
  const face = mk(256, 256, (g) => {
    const gr = g.createRadialGradient(128, 128, 20, 128, 128, 128);
    gr.addColorStop(0, '#f7d774'); gr.addColorStop(0.8, '#efc356'); gr.addColorStop(0.93, '#d9952e'); gr.addColorStop(1, '#b8741e');
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 600; i++) { g.fillStyle = `rgba(150,90,20,${Math.random() * 0.12})`; g.beginPath(); g.arc(Math.random() * 256, Math.random() * 256, Math.random() * 3, 0, 7); g.fill(); }
    g.strokeStyle = 'rgba(150,40,20,0.75)'; g.lineWidth = 6; g.beginPath(); g.arc(128, 128, 70, 0, 7); g.stroke();
    g.fillStyle = 'rgba(150,40,20,0.8)'; g.font = 'bold 44px serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('CC', 128, 120);
    g.font = 'bold 15px serif'; g.fillText('HILL  ROLL', 128, 158);
  });
  const rind = mk(512, 64, (g) => {
    g.fillStyle = '#d99a35'; g.fillRect(0, 0, 512, 64);
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${120 + Math.random() * 80},${60 + Math.random() * 50},10,${Math.random() * 0.2})`; g.fillRect(Math.random() * 512, Math.random() * 64, 2 + Math.random() * 6, 1 + Math.random() * 2); }
    g.fillStyle = 'rgba(90,40,10,0.35)'; for (let x = 0; x < 512; x += 32) g.fillRect(x, 0, 3, 64);
    g.fillStyle = 'rgba(255,240,200,0.25)'; g.fillRect(0, 6, 512, 4); g.fillRect(0, 54, 512, 4);
  });
  return { face, rind };
}
export class CheeseView {
  constructor(scene) {
    const { face, rind } = cheeseTextures();
    const geo = new THREE.CylinderGeometry(0.5, 0.5, 0.34, 36, 1);
    const mats = [new THREE.MeshStandardMaterial({ map: rind, roughness: 0.55 }), new THREE.MeshStandardMaterial({ map: face, roughness: 0.6 }), new THREE.MeshStandardMaterial({ map: face, roughness: 0.6 })];
    const mesh = new THREE.Mesh(geo, mats); mesh.rotation.z = Math.PI / 2; mesh.castShadow = true; mesh.receiveShadow = true;
    this.group = new THREE.Group();
    this.group.add(mesh);
    // soft glow marker so it is easy to spot from afar
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.95, 32), new THREE.MeshBasicMaterial({ color: 0xffd34d, transparent: true, opacity: 0.35, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; this.ring = ring; scene.add(ring);
    scene.add(this.group);
  }
  apply(x, y, z, q, groundY) {
    this.group.position.set(x, y, z);
    this.group.quaternion.set(q[0], q[1], q[2], q[3]);
    this.ring.position.set(x, groundY + 0.06, z);
    this.ring.visible = y - groundY < 1.4;
  }
}
