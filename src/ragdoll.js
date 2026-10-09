// Verlet ragdoll: 15 point masses joined by distance constraints, colliding with the hill height-field.
// Pure JS (no three.js) so it can be unit-tested in node. Used cosmetically on clients: the authoritative
// racer (src/core.js) is a point mass; the ragdoll is tethered softly to it so all clients agree on where
// the body is, while the limbs flop, roll and bounce physically.
import { height } from './core.js';

export const J = { PELVIS: 0, CHEST: 1, HEAD: 2, SHL: 3, SHR: 4, ELL: 5, ELR: 6, HDL: 7, HDR: 8, HIPL: 9, HIPR: 10, KNL: 11, KNR: 12, FTL: 13, FTR: 14 };
const N = 15;
const RADII = [0.15, 0.16, 0.17, 0.08, 0.08, 0.06, 0.06, 0.06, 0.06, 0.09, 0.09, 0.07, 0.07, 0.06, 0.06];
const INVM = [0.35, 0.4, 0.8, 0.7, 0.7, 1.3, 1.3, 1.7, 1.7, 0.55, 0.55, 1.0, 1.0, 1.4, 1.4];
// rigid-ish torso: a braced box of pelvis/chest/shoulders/hips + head
const STICKS = [
  [0, 1], [1, 2], [3, 4], [1, 3], [1, 4], [0, 3], [0, 4], [9, 10], [0, 9], [0, 10], [9, 1], [10, 1], [3, 9], [4, 10], [3, 10], [4, 9], [2, 3], [2, 4], [2, 0],
  [3, 5], [5, 7], [4, 6], [6, 8], // arms
  [9, 11], [11, 13], [10, 12], [12, 14], // legs
];
// joint limits (approximate): limbs can't fold completely flat
const MINS = [[3, 7, 0.3], [4, 8, 0.3], [9, 13, 0.58], [10, 14, 0.58], [7, 2, 0.22], [8, 2, 0.22], [13, 0, 0.45], [14, 0, 0.45], [13, 2, 0.6], [14, 2, 0.6], [11, 12, 0.14], [13, 14, 0.12], [5, 0, 0.3], [6, 0, 0.3], [11, 1, 0.45], [12, 1, 0.45]];
// knees bend only backwards: keep the foot behind the line through hip->knee relative to torso forward (soft)
const GRAV = -16;

export class Ragdoll {
  constructor() {
    this.p = new Float64Array(N * 3); this.o = new Float64Array(N * 3);
    this.len = new Float64Array(STICKS.length);
    this.active = false; this.acc = 0; this.impact = 0; this.seed = Math.random() * 1000;
  }
  // pts: array of 15 [x,y,z]; vel: [vx,vy,vz]; omega: angular velocity [wx,wy,wz] about the centroid; h: step
  init(pts, vel, omega, h = 1 / 120) {
    let cx = 0, cy = 0, cz = 0;
    for (const q of pts) { cx += q[0] / N; cy += q[1] / N; cz += q[2] / N; }
    for (let i = 0; i < N; i++) {
      const [x, y, z] = pts[i];
      const rx = x - cx, ry = y - cy, rz = z - cz;
      const vx = vel[0] + omega[1] * rz - omega[2] * ry, vy = vel[1] + omega[2] * rx - omega[0] * rz, vz = vel[2] + omega[0] * ry - omega[1] * rx;
      this.p[i * 3] = x; this.p[i * 3 + 1] = y; this.p[i * 3 + 2] = z;
      this.o[i * 3] = x - vx * h; this.o[i * 3 + 1] = y - vy * h; this.o[i * 3 + 2] = z - vz * h;
    }
    for (let s = 0; s < STICKS.length; s++) {
      const [a, b] = STICKS[s];
      this.len[s] = Math.hypot(this.p[a * 3] - this.p[b * 3], this.p[a * 3 + 1] - this.p[b * 3 + 1], this.p[a * 3 + 2] - this.p[b * 3 + 2]);
    }
    this.active = true; this.acc = 0; this.t = 0;
  }
  // add a velocity (+ optional spin about the centroid) to every particle, e.g. a roll-jump launch
  addVelocity(vel, omega = [0, 0, 0], h = 1 / 120) {
    const c = this.center();
    for (let i = 0; i < N; i++) {
      const k = i * 3, rx = this.p[k] - c[0], ry = this.p[k + 1] - c[1], rz = this.p[k + 2] - c[2];
      const vx = vel[0] + omega[1] * rz - omega[2] * ry, vy = vel[1] + omega[2] * rx - omega[0] * rz, vz = vel[2] + omega[0] * ry - omega[1] * rx;
      this.o[k] -= vx * h; this.o[k + 1] -= vy * h; this.o[k + 2] -= vz * h;
    }
  }
  get(i) { return [this.p[i * 3], this.p[i * 3 + 1], this.p[i * 3 + 2]]; }
  center() { const p = this.p; return [(p[0] + p[3]) / 2, (p[1] + p[4]) / 2, (p[2] + p[5]) / 2]; }
  // advance by dt (fixed internal 1/120 steps). tether: [x,y,z] the body centre should follow (or null)
  update(dt, tether, flail = 1) {
    this.acc += Math.min(dt, 0.1);
    const h = 1 / 120;
    let n = 0;
    this.impact = 0;
    while (this.acc >= h && n < 16) { this.step(h, tether, flail); this.acc -= h; n++; }
  }
  step(h, tether, flail) {
    const p = this.p, o = this.o;
    this.t += h;
    for (let i = 0; i < N; i++) {
      const k = i * 3;
      const vx = (p[k] - o[k]) * 0.998, vy = (p[k + 1] - o[k + 1]) * 0.998, vz = (p[k + 2] - o[k + 2]) * 0.998;
      o[k] = p[k]; o[k + 1] = p[k + 1]; o[k + 2] = p[k + 2];
      p[k] += vx; p[k + 1] += vy + GRAV * h * h; p[k + 2] += vz;
    }
    // little "muscle" twitches so limbs flail rather than hang
    if (flail > 0) {
      const t = this.t * 9 + this.seed;
      for (const i of [7, 8, 13, 14]) {
        const k = i * 3, a = flail * 0.0004;
        p[k] += Math.sin(t + i) * a; p[k + 1] += Math.cos(t * 1.3 + i) * a; p[k + 2] += Math.sin(t * 0.7 + i * 2) * a;
      }
    }
    // soft tether to the authoritative body position (translation + gentle velocity nudge)
    if (tether) {
      const c = this.center();
      const dx = tether[0] - c[0], dy = tether[1] - c[1], dz = tether[2] - c[2];
      const d = Math.hypot(dx, dy, dz);
      if (d > 4) { for (let i = 0; i < N; i++) { p[i * 3] += dx; p[i * 3 + 1] += dy; p[i * 3 + 2] += dz; o[i * 3] += dx; o[i * 3 + 1] += dy; o[i * 3 + 2] += dz; } }
      else {
        const a = 0.06, b = 0.045; // move by a, add velocity (a-b)
        const ty = dy > 0 ? dy : dy * 0.3; // don't yank the body into the ground; let gravity do it
        for (let i = 0; i < N; i++) { p[i * 3] += dx * a; p[i * 3 + 1] += ty * a; p[i * 3 + 2] += dz * a; o[i * 3] += dx * b; o[i * 3 + 1] += ty * b; o[i * 3 + 2] += dz * b; }
      }
    }
    for (let it = 0; it < 8; it++) {
      for (let s = 0; s < STICKS.length; s++) {
        const [a, b] = STICKS[s];
        this.solve(a, b, this.len[s], 0);
      }
      for (const [a, b, m] of MINS) this.solve(a, b, m, 1);
      // ground
      for (let i = 0; i < N; i++) {
        const k = i * 3;
        const gh = height(p[k], p[k + 2]) + RADII[i];
        if (p[k + 1] < gh) {
          const vy = p[k + 1] - o[k + 1];
          if (it === 0 && -vy / h > this.impact) this.impact = -vy / h;
          p[k + 1] = gh;
          if (it === 0) {
            // turf friction (once per substep) + a small thud-bounce
            o[k] = p[k] - (p[k] - o[k]) * 0.93; o[k + 2] = p[k + 2] - (p[k + 2] - o[k + 2]) * 0.93;
            if (vy < 0) o[k + 1] = p[k + 1] + vy * 0.25;
          }
        }
      }
    }
  }
  solve(a, b, rest, minOnly) {
    const p = this.p, ka = a * 3, kb = b * 3;
    const dx = p[kb] - p[ka], dy = p[kb + 1] - p[ka + 1], dz = p[kb + 2] - p[ka + 2];
    const d = Math.hypot(dx, dy, dz) || 1e-6;
    if (minOnly && d >= rest) return;
    const wa = INVM[a], wb = INVM[b];
    const diff = (d - rest) / (d * (wa + wb));
    p[ka] += dx * diff * wa; p[ka + 1] += dy * diff * wa; p[ka + 2] += dz * diff * wa;
    p[kb] -= dx * diff * wb; p[kb + 1] -= dy * diff * wb; p[kb + 2] -= dz * diff * wb;
  }
  maxStickError() {
    let e = 0;
    for (let s = 0; s < STICKS.length; s++) {
      const [a, b] = STICKS[s];
      const d = Math.hypot(this.p[a * 3] - this.p[b * 3], this.p[a * 3 + 1] - this.p[b * 3 + 1], this.p[a * 3 + 2] - this.p[b * 3 + 2]);
      e = Math.max(e, Math.abs(d - this.len[s]) / this.len[s]);
    }
    return e;
  }
}
