// ---------------------------------------------------------------------------
// Tiny synthesized WebAudio layer: no samples, everything is generated noise/oscillators.
// footsteps, thuds, wind that rises with speed, crowd bed, and a roar on the catch.
// ---------------------------------------------------------------------------
let ctx = null, master = null, noiseBuf = null, wind = null, crowd = null, muted = false;
export const audio = {
  get ready() { return !!ctx; },
  get muted() { return muted; },
  unlock() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try { ctx = new AC(); } catch (e) { ctx = null; return; }
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.7; master.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); let b = 0;
    for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; b = 0.97 * b + 0.03 * w; d[i] = w * 0.5 + b * 2.5; } // white + a bit of brown
    wind = loopNoise('bandpass', 700, 0.7); wind.g.gain.value = 0;
    crowd = loopNoise('bandpass', 1100, 0.5); crowd.g.gain.value = 0;
    // crowd "murmur": slow amplitude wobble
    const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 3.1; lg.gain.value = 0.25;
    lfo.connect(lg); lg.connect(crowd.f.frequency); lfo.start();
  },
  toggleMute() { muted = !muted; if (master) master.gain.setTargetAtTime(muted ? 0 : 0.7, ctx.currentTime, 0.05); return muted; },
  // continuous layers; speed in m/s, crowdLevel 0..1
  update(speed, crowdLevel, active) {
    if (!ctx) return;
    const t = ctx.currentTime;
    const w = active ? Math.min(0.5, Math.max(0, (speed - 4) / 22)) : 0;
    wind.g.gain.setTargetAtTime(w * w * 1.6, t, 0.15);
    wind.f.frequency.setTargetAtTime(400 + speed * 55, t, 0.2);
    crowd.g.gain.setTargetAtTime(active ? 0.04 + crowdLevel * 0.08 : 0.015, t, 0.4);
  },
  step(intensity = 1) {
    if (!ctx) return;
    burst(0.05, 'lowpass', 380 + Math.random() * 120, 0.18 * intensity);
  },
  thud(s = 1) {
    if (!ctx) return;
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(110 + Math.random() * 30, t); o.frequency.exponentialRampToValueAtTime(38, t + 0.22);
    g.gain.setValueAtTime(Math.min(0.9, 0.25 + s * 0.06), t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.32);
    burst(0.12, 'lowpass', 600, Math.min(0.5, 0.1 + s * 0.03));
  },
  whoosh() { if (ctx) burst(0.35, 'bandpass', 900, 0.35, 2400); },
  cheer(big = false) {
    if (!ctx) return;
    const dur = big ? 2.8 : 1.2;
    for (let i = 0; i < (big ? 4 : 2); i++) burst(dur, 'bandpass', 700 + i * 350, big ? 0.45 : 0.18, null, 0.25);
  },
};
function loopNoise(type, freq, q) {
  const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
  const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain(); src.connect(f); f.connect(g); g.connect(master); src.start();
  return { src, f, g };
}
function burst(dur, type, freq, vol, freqTo = null, attack = 0.005) {
  const t = ctx.currentTime;
  const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.playbackRate.value = 0.8 + Math.random() * 0.4;
  const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); if (freqTo) f.frequency.exponentialRampToValueAtTime(freqTo, t + dur);
  const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f); f.connect(g); g.connect(master);
  src.start(t, Math.random() * 1.5); src.stop(t + dur + 0.05);
}
