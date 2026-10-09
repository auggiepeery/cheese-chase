// Low-poly stylised runner + cheese wheel models and their animation.
import * as THREE from 'three';
import { ST, CHARACTERS } from './core.js';
import { makeLabelTexture } from './world.js';
import { Ragdoll, J } from './ragdoll.js';

const matCache = new Map();
function M(c, extra) {
  const key = c + (extra ? JSON.stringify(extra) : '');
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshStandardMaterial({ color: c, roughness: 0.72, metalness: 0, flatShading: true, ...(extra || {}) }));
  return matCache.get(key);
}
function add(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m;
}
// ---------- low-poly characters ----------
// Every runner shares the same joint layout (so animation + ragdolls work for all), but builds, heights,
// outfits, hair, hats and accessories differ so each one reads as a distinct silhouette.
function addHat(head, ch) {
  const hc = M(ch.hatColor ?? 0x333333);
  switch (ch.hat) {
    case 'flatcap': add(head, new THREE.CylinderGeometry(0.19, 0.19, 0.08, 7), hc, 0, 0.13, -0.01); add(head, new THREE.BoxGeometry(0.26, 0.03, 0.14), hc, 0, 0.11, 0.15).rotation.x = 0.15; break;
    case 'headband': { const t = add(head, new THREE.TorusGeometry(0.17, 0.03, 4, 8), hc, 0, 0.06, 0); t.rotation.x = Math.PI / 2; break; }
    case 'sweatband': { const t = add(head, new THREE.TorusGeometry(0.172, 0.035, 4, 8), hc, 0, 0.07, 0); t.rotation.x = Math.PI / 2; break; }
    case 'chef': add(head, new THREE.CylinderGeometry(0.17, 0.15, 0.26, 7), hc, 0, 0.22, 0); add(head, new THREE.IcosahedronGeometry(0.22, 0), hc, 0, 0.42, 0).scale.set(1, 0.7, 1); break;
    case 'knight': {
      add(head, new THREE.CylinderGeometry(0.2, 0.21, 0.36, 8), M(ch.hatColor, { metalness: 0.6, roughness: 0.35 }), 0, 0.03, 0);
      add(head, new THREE.BoxGeometry(0.3, 0.035, 0.05), M(0x111111), 0, 0.04, 0.19);           // visor slit
      add(head, new THREE.BoxGeometry(0.03, 0.12, 0.05), M(0x111111), 0, -0.05, 0.19);
      const pl = add(head, new THREE.ConeGeometry(0.07, 0.42, 5), M(0xd62828), 0, 0.35, -0.08); pl.rotation.x = -0.6; // plume
      break;
    }
    case 'cowhood': {
      add(head, new THREE.IcosahedronGeometry(0.205, 0), M(0xf4f4f4), 0, 0.03, -0.03).scale.set(1, 1, 1.05);
      add(head, new THREE.BoxGeometry(0.2, 0.14, 0.04), M(0xf1c27d), 0, -0.01, 0.165); // face opening
      for (const s of [-1, 1]) {
        const h = add(head, new THREE.ConeGeometry(0.04, 0.16, 5), M(0xf5ecd0), s * 0.12, 0.22, 0); h.rotation.z = -s * 0.5;
        const e = add(head, new THREE.BoxGeometry(0.14, 0.05, 0.07), M(0x1a1a1a), s * 0.23, 0.08, 0); e.rotation.z = s * 0.5;
      }
      add(head, new THREE.BoxGeometry(0.16, 0.08, 0.06), M(0xf2a5b5), 0, -0.1, 0.2); // muzzle
      break;
    }
  }
}
function addHair(head, ch) {
  const hm = M(ch.hair);
  switch (ch.hairStyle) {
    case 'short': add(head, new THREE.SphereGeometry(0.182, 7, 4, 0, Math.PI * 2, 0, Math.PI * 0.45), hm, 0, 0.012, -0.02).rotation.x = -0.35; break;
    case 'quiff': add(head, new THREE.SphereGeometry(0.182, 7, 4, 0, Math.PI * 2, 0, Math.PI * 0.42), hm, 0, 0.01, -0.02).rotation.x = -0.3; add(head, new THREE.IcosahedronGeometry(0.09, 0), hm, 0, 0.17, 0.09).scale.set(1.4, 0.8, 1); break;
    case 'bun': add(head, new THREE.SphereGeometry(0.185, 7, 4, 0, Math.PI * 2, 0, Math.PI * 0.5), hm, 0, 0.01, -0.02).rotation.x = -0.25; add(head, new THREE.IcosahedronGeometry(0.1, 0), hm, 0, 0.17, -0.12); break;
    case 'ponytail': add(head, new THREE.SphereGeometry(0.182, 7, 4, 0, Math.PI * 2, 0, Math.PI * 0.45), hm, 0, 0.012, -0.02).rotation.x = -0.35; { const pt = add(head, new THREE.ConeGeometry(0.07, 0.34, 5), hm, 0, -0.02, -0.24); pt.rotation.x = -2.6; } break;
    case 'bald': for (const s of [-1, 1]) add(head, new THREE.BoxGeometry(0.05, 0.08, 0.16), hm, s * 0.165, -0.0, -0.04); break;
    case 'mohawk':
      for (let i = 0; i < 5; i++) { const c = add(head, new THREE.ConeGeometry(0.045, 0.26 - Math.abs(i - 1.5) * 0.03, 4), M(i % 2 ? 0xff2fa0 : ch.hair), 0, 0.2, 0.12 - i * 0.07); c.rotation.x = -0.3 - i * 0.15; }
      break;
  }
}
export function buildRunner(charIdx) {
  const ch = CHARACTERS[((charIdx % CHARACTERS.length) + CHARACTERS.length) % CHARACTERS.length];
  const ex = new Set(ch.extras || []);
  const W = ch.w || 1, H = ch.h || 1;
  const root = new THREE.Group();
  const scaler = new THREE.Group(); scaler.scale.setScalar(H); root.add(scaler);
  const body = new THREE.Group(); body.position.y = 0.95; scaler.add(body);
  const metal = ch.metal ? { metalness: 0.55, roughness: 0.4 } : undefined;
  const skin = M(ch.skin), shirt = M(ch.shirt, metal), shorts = M(ch.shorts, metal), shoe = M(ch.shoes ?? 0x222222, metal);
  const sleeve = M(ch.sleeve ?? ch.shirt, metal), arms = M(ch.arms ?? ch.skin, metal), legs = M(ch.legs ?? ch.skin, metal);
  // torso (scaled for build, so limbs don't shear)
  const torso = new THREE.Group(); torso.scale.set(W, 1, 0.75 + W * 0.25); body.add(torso);
  add(torso, new THREE.CylinderGeometry(0.2, 0.18, 0.24, 6), shorts, 0, 0.02, 0);
  add(torso, new THREE.CylinderGeometry(0.22, 0.18, 0.56, 6), shirt, 0, 0.38, 0);
  if (ch.hoops) for (const y of [0.24, 0.4, 0.56]) add(torso, new THREE.CylinderGeometry(0.218 + (y - 0.38) * 0.07, 0.212 + (y - 0.38) * 0.07, 0.07, 6), M(ch.hoops), 0, y, 0);
  if (ch.stripe) for (const s of [-1, 1]) add(torso, new THREE.BoxGeometry(0.05, 0.56, 0.42), M(ch.stripe), s * 0.17, 0.38, 0);
  if (ch.check) for (const y of [0.2, 0.36, 0.52]) add(torso, new THREE.CylinderGeometry(0.222, 0.215, 0.035, 6), M(ch.check), 0, y, 0);
  if (ex.has('belly')) add(torso, new THREE.IcosahedronGeometry(0.2, 0), shirt, 0, 0.24, 0.1).scale.set(1, 0.95, 0.9);
  if (ex.has('overalls')) { add(torso, new THREE.BoxGeometry(0.28, 0.3, 0.06), shorts, 0, 0.3, 0.16); for (const s of [-1, 1]) add(torso, new THREE.BoxGeometry(0.04, 0.3, 0.42), shorts, s * 0.1, 0.48, 0); }
  if (ex.has('apron')) { add(torso, new THREE.BoxGeometry(0.34, 0.75, 0.03), M(0xffffff), 0, 0.05, 0.2).rotation.x = -0.06; add(torso, new THREE.BoxGeometry(0.36, 0.04, 0.44), M(0xffffff), 0, 0.28, 0); }
  if (ex.has('buttons')) for (const y of [0.22, 0.34, 0.46, 0.58]) add(torso, new THREE.BoxGeometry(0.035, 0.035, 0.02), M(ch.name.startsWith('Chef') ? 0x333333 : 0xf5f5dc), 0, y, ex.has('belly') ? 0.27 : 0.205);
  if (ex.has('tabard')) { add(torso, new THREE.BoxGeometry(0.3, 0.8, 0.03), M(ch.tabard), 0, 0.22, 0.2); add(torso, new THREE.BoxGeometry(0.3, 0.8, 0.03), M(ch.tabard), 0, 0.22, -0.2); add(torso, new THREE.BoxGeometry(0.06, 0.32, 0.035), M(0xffd34d), 0, 0.38, 0.215); add(torso, new THREE.BoxGeometry(0.22, 0.06, 0.035), M(0xffd34d), 0, 0.42, 0.215); }
  if (ex.has('emblem')) { const e = add(torso, new THREE.CylinderGeometry(0.1, 0.1, 0.03, 3), M(0xffd34d), 0, 0.42, 0.2); e.rotation.x = Math.PI / 2; e.rotation.y = Math.PI; }
  if (ex.has('belt')) add(torso, new THREE.CylinderGeometry(0.205, 0.2, 0.06, 6), M(0xffd34d), 0, 0.13, 0);
  if (ex.has('shoulders')) for (const s of [-1, 1]) add(torso, new THREE.IcosahedronGeometry(0.12, 0), shirt, s * 0.22, 0.6, 0);
  if (ex.has('skirt')) add(torso, new THREE.CylinderGeometry(0.2, 0.3, 0.46, 7, 1, true), shorts, 0, -0.18, 0).material = M(ch.shorts, { side: THREE.DoubleSide });
  if (ex.has('robe')) add(torso, new THREE.CylinderGeometry(0.2, 0.32, 0.75, 7, 1, true), M(ch.shirt, { side: THREE.DoubleSide }), 0, -0.33, 0);
  if (ex.has('collar')) { const c = add(torso, new THREE.CylinderGeometry(0.1, 0.1, 0.05, 7), M(0xffffff), 0, 0.68, 0); void c; }
  if (ex.has('cross')) { add(torso, new THREE.BoxGeometry(0.03, 0.12, 0.02), M(0xd4af37, { metalness: 0.8, roughness: 0.3 }), 0, 0.4, 0.2); add(torso, new THREE.BoxGeometry(0.08, 0.03, 0.02), M(0xd4af37, { metalness: 0.8, roughness: 0.3 }), 0, 0.42, 0.2); }
  if (ex.has('pearls')) { const t = add(torso, new THREE.TorusGeometry(0.12, 0.022, 4, 10), M(0xfdf8ec), 0, 0.62, 0.04); t.rotation.x = Math.PI / 2 - 0.4; }
  if (ex.has('studs')) for (let i = 0; i < 8; i++) { const a = -0.9 + i * 0.26; add(torso, new THREE.OctahedronGeometry(0.025, 0), M(0xdddddd, { metalness: 0.9, roughness: 0.2 }), Math.sin(a) * 0.2, 0.6, Math.cos(a) * 0.2 * (i % 2 ? 1 : -1)); }
  if (ex.has('chain')) { const t = add(torso, new THREE.TorusGeometry(0.12, 0.012, 3, 10, Math.PI), M(0xcccccc, { metalness: 0.9, roughness: 0.3 }), 0.1, 0.02, 0.17); t.rotation.z = Math.PI; }
  if (ex.has('udder')) add(torso, new THREE.IcosahedronGeometry(0.07, 0), M(0xf2a5b5), 0, 0.08, 0.19);
  if (ex.has('spots')) for (const [x, y, z] of [[0.12, 0.45, 0.17], [-0.1, 0.3, -0.18], [0.15, 0.22, -0.12], [-0.14, 0.5, 0.12]]) add(torso, new THREE.IcosahedronGeometry(0.08, 0), M(0x111111), x, y, z).scale.set(1, 1, 0.35);
  const chest = new THREE.Object3D(); chest.position.y = 0.6; body.add(chest);
  const neck = new THREE.Group(); neck.position.y = 0.68; body.add(neck);
  const head = new THREE.Group(); head.position.y = 0.15; neck.add(head);
  add(head, new THREE.IcosahedronGeometry(0.17, 1), skin);
  addHair(head, ch);
  if (ch.hat !== 'knight') {
    for (const s of [-1, 1]) add(head, new THREE.BoxGeometry(0.035, 0.05, 0.02), M(0x111111), s * 0.06, 0.0, 0.16);
    add(head, new THREE.ConeGeometry(0.03, 0.06, 4), skin, 0, -0.02, 0.18).rotation.x = Math.PI / 2;
  }
  if (ex.has('glasses')) for (const s of [-1, 1]) add(head, new THREE.TorusGeometry(0.04, 0.009, 3, 8), M(0x222222), s * 0.065, 0.0, 0.17);
  if (ex.has('sunglasses')) add(head, new THREE.BoxGeometry(0.24, 0.05, 0.03), M(0x111111, { metalness: 0.5, roughness: 0.2 }), 0, 0.01, 0.165);
  if (ex.has('mask')) add(head, new THREE.BoxGeometry(0.3, 0.06, 0.2), M(0x111111), 0, 0.01, 0.07);
  if (ex.has('mustache')) add(head, new THREE.BoxGeometry(0.14, 0.03, 0.03), M(0x1a1a1a), 0, -0.065, 0.165);
  if (ex.has('straw')) { const st = add(head, new THREE.CylinderGeometry(0.006, 0.006, 0.18, 3), M(0xe8d27a), 0.06, -0.09, 0.22); st.rotation.set(1.3, 0, 0.6); }
  addHat(head, ch);
  let cape = null;
  if (ch.cape) { cape = new THREE.Group(); cape.position.set(0, 0.62, -0.17 * (0.75 + W * 0.25)); body.add(cape); add(cape, new THREE.BoxGeometry(0.46 * W, 0.78, 0.02), M(ch.cape), 0, -0.39, 0); }
  const limbs = {};
  for (const s of [-1, 1]) {
    const side = s < 0 ? 'R' : 'L';
    const sh = new THREE.Group(); sh.position.set(s * (0.07 + 0.2 * W), 0.6, 0); body.add(sh);
    add(sh, new THREE.CapsuleGeometry(0.06 * (0.6 + 0.4 * W), 0.24, 1, 5), sleeve, 0, -0.15, 0);
    const el = new THREE.Group(); el.position.y = -0.32; sh.add(el);
    add(el, new THREE.CapsuleGeometry(0.052, 0.22, 1, 5), arms, 0, -0.13, 0);
    add(el, new THREE.IcosahedronGeometry(0.062, 0), ch.metal ? M(0x6b7078, metal) : (ex.has('spots') ? M(0x1a1a1a) : skin), 0, -0.29, 0);
    if (ex.has('handbag') && s > 0) { add(el, new THREE.BoxGeometry(0.16, 0.13, 0.07), M(0x6b2c3a), 0, -0.36, 0.06); }
    const hand = new THREE.Object3D(); hand.position.y = -0.3; el.add(hand); limbs['hd' + side] = hand;
    const hip = new THREE.Group(); hip.position.set(s * 0.11 * (0.7 + 0.3 * W), -0.04, 0); body.add(hip);
    add(hip, new THREE.CapsuleGeometry(0.08 * (0.75 + 0.25 * W), 0.28, 1, 5), shorts, 0, -0.2, 0);
    if (ex.has('rips')) add(hip, new THREE.BoxGeometry(0.07, 0.05, 0.02), skin, 0, -0.32, 0.08);
    const kn = new THREE.Group(); kn.position.y = -0.44; hip.add(kn);
    add(kn, new THREE.CapsuleGeometry(0.066, 0.28, 1, 5), legs, 0, -0.2, 0);
    if (ex.has('socks')) add(kn, new THREE.CylinderGeometry(0.072, 0.07, 0.06, 6), M(0xf4f4f4), 0, -0.22, 0);
    if (ch.boots) add(kn, new THREE.CylinderGeometry(0.085, 0.08, 0.3, 6), M(ch.boots, metal), 0, -0.3, 0);
    add(kn, new THREE.BoxGeometry(0.13, 0.09, 0.27), shoe, 0, -0.43, 0.05);
    const foot = new THREE.Object3D(); foot.position.set(0, -0.44, 0.03); kn.add(foot); limbs['ft' + side] = foot;
    limbs['sh' + side] = sh; limbs['el' + side] = el; limbs['hip' + side] = hip; limbs['kn' + side] = kn;
  }
  return { root, scaler, H, body, neck, head, cape, limbs, ch, chest };
}

const tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler();
const lerpA = (a, b, k) => a + (b - a) * k;
function wrapPI(a) { return Math.atan2(Math.sin(a), Math.cos(a)); }

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _x = new THREE.Vector3(), _y = new THREE.Vector3(), _z = new THREE.Vector3();
const _m = new THREE.Matrix4(), _qa = new THREE.Quaternion(), _qb = new THREE.Quaternion(), _qi = new THREE.Quaternion();
const DOWN = new THREE.Vector3(0, -1, 0), UP = new THREE.Vector3(0, 1, 0);
const BONES = [ // group, parent group key, from joint, to joint, rest direction
  ['shL', 'body', J.SHL, J.ELL, DOWN], ['elL', 'shL', J.ELL, J.HDL, DOWN], ['shR', 'body', J.SHR, J.ELR, DOWN], ['elR', 'shR', J.ELR, J.HDR, DOWN],
  ['hipL', 'body', J.HIPL, J.KNL, DOWN], ['knL', 'hipL', J.KNL, J.FTL, DOWN], ['hipR', 'body', J.HIPR, J.KNR, DOWN], ['knR', 'hipR', J.KNR, J.FTR, DOWN],
];
const _lv = new THREE.Vector3(), _lv2 = new THREE.Vector3();
export class RacerView {
  constructor(scene, info, label, labelColor) {
    this.rd = new Ragdoll(); this.blend = null;
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
  groups() { const L = this.m.limbs; return { body: this.m.body, neck: this.m.neck, shL: L.shL, elL: L.elL, shR: L.shR, elR: L.elR, hipL: L.hipL, knL: L.knL, hipR: L.hipR, knR: L.knR }; }
  startRagdoll(s, kind) {
    const m = this.m, L = m.limbs;
    this.root.updateMatrixWorld(true);
    const wp = (o) => o.getWorldPosition(new THREE.Vector3()).toArray();
    const pts = [wp(m.body), wp(m.chest), wp(m.head), wp(L.shL), wp(L.shR), wp(L.elL), wp(L.elR), wp(L.hdL), wp(L.hdR), wp(L.hipL), wp(L.hipR), wp(L.knL), wp(L.knR), wp(L.ftL), wp(L.ftR)];
    const sp = Math.hypot(s.vx, s.vz);
    const fx = sp > 0.5 ? s.vx / sp : Math.sin(s.yaw), fz = sp > 0.5 ? s.vz / sp : Math.cos(s.yaw);
    // forward roll axis = up x forward
    const roll = kind === 'dive' ? 3.2 : 2.5 + sp * 0.45;
    const wx = fz * roll + (Math.random() - 0.5) * 2, wy = (Math.random() - 0.5) * 3, wz = -fx * roll + (Math.random() - 0.5) * 2;
    this.rd.init(pts, [s.vx, (s.vy || 0) + (kind === 'dive' ? 2.5 : 1.5), s.vz], [wx, wy, wz]);
    this.blend = null;
  }
  poseFromRagdoll() {
    const rd = this.rd, m = this.m, g = this.groups();
    const P = (i) => _v.set(rd.p[i * 3], rd.p[i * 3 + 1], rd.p[i * 3 + 2]);
    const pel = P(J.PELVIS).clone();
    this.root.position.set(pel.x, pel.y - 0.95 * m.H, pel.z);
    this.root.quaternion.identity();
    m.body.position.set(0, 0.95, 0);
    _y.copy(P(J.CHEST)).sub(pel).normalize();
    _x.copy(P(J.SHL)).sub(_v2.copy(P(J.SHR))).add(_v2.copy(P(J.HIPL)).sub(P(J.HIPR)));
    _x.addScaledVector(_y, -_x.dot(_y));
    if (!(_x.lengthSq() > 1e-6) || !Number.isFinite(_y.x)) return; // degenerate frame: keep the last pose
    _x.normalize();
    _z.crossVectors(_x, _y);
    _m.makeBasis(_x, _y, _z);
    m.body.quaternion.setFromRotationMatrix(_m);
    const world = { body: m.body.quaternion.clone() };
    const setBone = (grp, parentQ, a, b, rest) => {
      _v2.set(rd.p[b * 3] - rd.p[a * 3], rd.p[b * 3 + 1] - rd.p[a * 3 + 1], rd.p[b * 3 + 2] - rd.p[a * 3 + 2]).normalize();
      _qi.copy(parentQ).invert();
      _v2.applyQuaternion(_qi);
      grp.quaternion.setFromUnitVectors(rest, _v2);
      return parentQ.clone().multiply(grp.quaternion);
    };
    setBone(g.neck, world.body, J.CHEST, J.HEAD, UP);
    for (const [k, parent, a, b, rest] of BONES) world[k] = setBone(g[k], world[parent], a, b, rest);
  }
  endRagdoll() {
    const g = this.groups();
    this.blend = { t: 0, rootPos: this.root.position.clone(), rootQ: this.root.quaternion.clone(), bodyPos: this.m.body.position.clone(), q: {} };
    for (const k in g) { this.blend.q[k] = g[k].quaternion.clone(); g[k].quaternion.identity(); }
    this.rd.active = false;
  }
  // s: {x,y,z, yaw,pitch,roll, state, flags, vx,vz, st}
  apply(s, dt, particles) {
    this._apply(s, dt, particles);
    // pin the name label just above the HEAD (ragdoll or not), so it never floats off a tumbling body
    if (this.label) {
      this.root.updateMatrixWorld(true);
      this.m.head.getWorldPosition(_lv); this.m.body.getWorldPosition(_lv2);
      _lv.y = Math.max(_lv.y, _lv2.y + 0.25 * this.m.H); // upside down: stay above the body, not inside it
      this.root.worldToLocal(_lv);
      this.label.position.set(_lv.x, _lv.y + 0.32 + 0.18 * this.m.H, _lv.z);
    }
    if (this.tag && this.tag.visible) {
      this.root.updateMatrixWorld(true);
      this.m.head.getWorldPosition(_lv); this.m.body.getWorldPosition(_lv2);
      _lv.y = Math.max(_lv.y, _lv2.y + 0.25 * this.m.H); this.root.worldToLocal(_lv);
      this.tag.position.set(_lv.x, _lv.y + 0.3 + 0.18 * this.m.H, _lv.z);
    }
  }
  // small coloured place tag (gold/silver/bronze dot + name) shown over the top 3; rank 0 = hide
  setTag(rank, name) {
    if (!rank) { if (this.tag) this.tag.visible = false; return; }
    if (!this.tag) {
      this.tag = new THREE.Sprite(new THREE.SpriteMaterial({ depthTest: false, transparent: true, fog: false, sizeAttenuation: false, toneMapped: false }));
      this.tag.center.set(0.5, 0); this.tag.renderOrder = 10; this.tag.scale.set(0.22, 0.055, 1); this.root.add(this.tag); this.tagTex = {};
    }
    if (this.tagRank !== rank) {
      this.tagRank = rank;
      if (!this.tagTex[rank]) {
        const c = document.createElement('canvas'); c.width = 256; c.height = 64; const g = c.getContext('2d');
        const col = ['#ffd34d', '#dfe6ee', '#e0975a'][rank - 1];
        g.font = 'bold 30px sans-serif'; const w = Math.min(250, g.measureText(name).width + 62);
        g.fillStyle = 'rgba(20,14,6,0.55)'; g.beginPath(); g.roundRect((256 - w) / 2, 10, w, 44, 22); g.fill();
        g.fillStyle = col; g.beginPath(); g.arc((256 - w) / 2 + 24, 32, 13, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#1b1408'; g.font = 'bold 18px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(rank), (256 - w) / 2 + 24, 33);
        g.fillStyle = col; g.font = 'bold 30px sans-serif'; g.textAlign = 'left'; g.fillText(name, (256 - w) / 2 + 44, 33);
        const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; this.tagTex[rank] = t;
      }
      this.tag.material.map = this.tagTex[rank]; this.tag.material.needsUpdate = true;
    }
    this.tag.visible = true;
  }
  _apply(s, dt, particles) {
    const m = this.m, L = m.limbs, b = m.body;
    this.t += dt;
    // --- physics ragdoll while diving / tumbling ---
    if (s.state === ST.DIVE || s.state === ST.TUMBLE) {
      if (!this.rd.active) this.startRagdoll(s, s.state === ST.DIVE ? 'dive' : 'tumble');
      const tether = [s.x, s.y + (s.state === ST.DIVE ? 0.55 : 0.3), s.z];
      this.rd.update(dt, tether, s.state === ST.TUMBLE ? 1 : 0.4);
      this.poseFromRagdoll();
      this.kickCd = (this.kickCd || 0) - dt;
      if (particles && this.rd.impact > 3.5 && this.kickCd <= 0) { this.kickCd = 0.12; const c = this.rd.center(); particles.kick(c[0], c[1] - 0.25, c[2], s.vx, s.vz, Math.min(10, this.rd.impact)); }
      if (m.cape) m.cape.rotation.x = -1.2 + Math.sin(this.t * 20) * 0.3;
      this.prevState = s.state;
      return;
    }
    if (this.rd.active) { this.endRagdoll(); this.prevState = ST.GETUP; }
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
        // cadence follows ground speed (stride lengthens as you go faster) so feet don't skate
        const amp = Math.min(1, 0.3 + sp / 8);
        const stride = (1.0 + Math.min(1.1, sp * 0.07)) * (m.H || 1);
        this.phase += dt * Math.max(4, Math.PI * sp / stride);
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
          this.stepAcc += dt * Math.max(4, Math.PI * sp / ((1.0 + Math.min(1.1, sp * 0.07)) * (m.H || 1))) / Math.PI;
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
        const f = Math.min(1, (s.st || 0) / 0.45);
        pitch = 0.5 * (1 - f) + 0.1; bodyY = 0.7 + 0.25 * f;
        tgt.hipL = -1.1 * (1 - f); tgt.knL = 1.5 * (1 - f) + 0.2; tgt.hipR = -0.4 * (1 - f); tgt.knR = 0.8 * (1 - f) + 0.2;
        tgt.shL = 0.5 * (1 - f); tgt.shR = 0.5 * (1 - f); tgt.elL = tgt.elR = -0.6; tgt.shZL = 0.3; tgt.shZR = -0.3;
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
    // blend out of the ragdoll pose while getting up
    if (this.blend) {
      const B = this.blend;
      B.t += dt;
      const f = Math.min(1, B.t / 0.4), e = f * f * (3 - 2 * f);
      if (f >= 1) { this.blend = null; return; }
      const g = this.groups();
      for (const k in g) { _qa.copy(g[k].quaternion); g[k].quaternion.copy(B.q[k]).slerp(_qa, e); }
      _qb.copy(this.root.quaternion); this.root.quaternion.copy(B.rootQ).slerp(_qb, e);
      this.root.position.lerpVectors(B.rootPos, _v.copy(this.root.position), e);
      b.position.lerpVectors(B.bodyPos, _v.copy(b.position), e);
    }
  }
  // punchy impulse to the ragdoll (roll-jump launch): up/forward plus a forward flip
  kick(vx, vy, vz) {
    if (!this.rd.active) return;
    const sp = Math.hypot(vx, vz) || 1;
    this.rd.addVelocity([vx, vy, vz], [vz / sp * 3.2, 0, -vx / sp * 3.2]); // gentle flip (a hard spin tore the rig apart)
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
    const geo = new THREE.CylinderGeometry(0.5, 0.5, 0.34, 14, 1);
    const mats = [new THREE.MeshStandardMaterial({ map: rind, roughness: 0.55, flatShading: true }), new THREE.MeshStandardMaterial({ map: face, roughness: 0.6, flatShading: true }), new THREE.MeshStandardMaterial({ map: face, roughness: 0.6, flatShading: true })];
    const mesh = new THREE.Mesh(geo, mats); mesh.rotation.z = Math.PI / 2; mesh.castShadow = true; mesh.receiveShadow = true;
    this.group = new THREE.Group();
    this.group.add(mesh);
    // bright outline (inverted hull) so the wheel pops against grass and mud
    const hull = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.34, 14, 1), new THREE.MeshBasicMaterial({ color: 0xfff1a0, side: THREE.BackSide, fog: false, toneMapped: false }));
    hull.rotation.z = Math.PI / 2; hull.scale.set(1.16, 1.3, 1.16); this.group.add(hull); this.hull = hull;
    // tall soft beam of light above it (visible from anywhere on the hill)
    const bc = document.createElement('canvas'); bc.width = 4; bc.height = 128;
    { const g = bc.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, 'rgba(255,190,40,0)'); gr.addColorStop(0.55, 'rgba(255,185,40,0.4)'); gr.addColorStop(1, 'rgba(255,205,70,0.85)'); g.fillStyle = gr; g.fillRect(0, 0, 4, 128); }
    const bt = new THREE.CanvasTexture(bc); bt.colorSpace = THREE.SRGBColorSpace;
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.26, 14, 10, 1, true), new THREE.MeshBasicMaterial({ map: bt, transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, fog: false, toneMapped: false }));
    beam.renderOrder = 9; this.beam = beam; scene.add(beam);
    // soft glow marker so it is easy to spot from afar
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.95, 32), new THREE.MeshBasicMaterial({ color: 0xffd34d, transparent: true, opacity: 0.35, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; this.ring = ring; scene.add(ring);
    scene.add(this.group);
  }
  apply(x, y, z, q, groundY) {
    this.group.position.set(x, y, z);
    this.group.quaternion.set(q[0], q[1], q[2], q[3]);
    this.ring.position.set(x, groundY + 0.06, z);
    this.beam.position.set(x, y + 7.4, z);
    this.ring.visible = y - groundY < 1.4;
  }
}
