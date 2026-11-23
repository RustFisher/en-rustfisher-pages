/**
 * 猫咪音效
 * ------------------------------------------------------------------
 * 优先播放 audio/meow.mp3；文件缺失或解码失败时，
 * 用 WebAudio 合成一段喵声作为兜底，保证点击总有反馈。
 * AudioContext 在首次点击时创建，属于用户手势，浏览器允许播放。
 */

let audioCtx = null;
let meowBuffer = null;
let meowTried = false;

function getCtx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AC();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
  return audioCtx;
}

async function loadMeowBuffer() {
  if (meowTried) return meowBuffer;
  meowTried = true;
  try {
    const res = await fetch('audio/meow.mp3');
    if (!res.ok) throw new Error(res.status);
    const data = await res.arrayBuffer();
    meowBuffer = await getCtx().decodeAudioData(data);
  } catch {
    meowBuffer = null;
  }
  return meowBuffer;
}

function playBufferMeow(c) {
  const src = c.createBufferSource();
  src.buffer = meowBuffer;
  src.playbackRate.value = 0.9 + Math.random() * 0.2;

  const gain = c.createGain();
  gain.gain.value = 0.55;

  src.connect(gain);
  gain.connect(c.destination);
  src.start();
}

function playSynthMeow(c) {
  const now = c.currentTime;
  const dur = 0.55;

  const osc = c.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(520, now);
  osc.frequency.exponentialRampToValueAtTime(950, now + 0.12);
  osc.frequency.exponentialRampToValueAtTime(430, now + dur);

  const vibrato = c.createOscillator();
  vibrato.frequency.value = 7 + Math.random() * 2;
  const vibGain = c.createGain();
  vibGain.gain.value = 26;
  vibrato.connect(vibGain);
  vibGain.connect(osc.frequency);

  const filter = c.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(900, now);
  filter.frequency.exponentialRampToValueAtTime(1500, now + 0.12);
  filter.frequency.exponentialRampToValueAtTime(700, now + dur);
  filter.Q.value = 1.6;

  const gain = c.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.42, now + 0.06);
  gain.gain.setValueAtTime(0.42, now + 0.22);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(c.destination);

  osc.start(now);
  vibrato.start(now);
  osc.stop(now + dur + 0.05);
  vibrato.stop(now + dur + 0.05);
}

export async function playMeow() {
  try {
    const c = getCtx();
    const buffer = await loadMeowBuffer();
    if (buffer) playBufferMeow(c);
    else playSynthMeow(c);
  } catch {
    /* 音频不可用时静默忽略 */
  }
}
