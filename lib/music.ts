// Musik Web Audio: melodi sederhana per lagu, tanpa file audio.
// Diputar hanya setelah tamu menekan Buka Undangan.
import { TRACKS } from "./data";

const SCALES: Record<string, number[]> = {
  "Gamelan": [262, 294, 330, 392, 440, 523],
  "Degung": [262, 311, 349, 392, 466, 523],
  "Piano Peony": [262, 330, 392, 440, 523, 659],
  "Oud": [220, 262, 294, 330, 392, 440],
  "Gitar Taman": [196, 247, 294, 330, 392, 494],
  "Royal Trio": [262, 330, 392, 523, 659, 784],
  "Jazz": [262, 311, 349, 415, 466, 554],
  "Lo-fi": [220, 262, 330, 392, 440, 523],
  "Romantic Piano": [262, 294, 330, 392, 440, 494],
  "Cinematic Strings": [196, 220, 262, 294, 330, 392],
};

let ctx: AudioContext | null = null;
let timer: ReturnType<typeof setInterval> | null = null;
let step = 0;
let current: string | null = null;

export function trackFor(pkg: string, templateTrack: string, chosen?: string): string | null {
  if (pkg === "basic") return null;
  if (pkg === "exclusive") return chosen && TRACKS.includes(chosen) ? chosen : TRACKS[8];
  return templateTrack;
}

export function startMusic(track: string) {
  stopMusic();
  current = track;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  ctx = new AC();
  const notes = SCALES[track] ?? SCALES["Gamelan"];
  step = 0;
  timer = setInterval(() => {
    if (!ctx) return;
    const freq = notes[step % notes.length] * (step % 12 >= 6 ? 1 : 1);
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = track === "Oud" ? "sawtooth" : "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.9);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1);
    step += step % 5 === 4 ? 2 : 1;
  }, 480);
}

export function stopMusic() {
  if (timer) { clearInterval(timer); timer = null; }
  if (ctx) { ctx.close().catch(() => undefined); ctx = null; }
  current = null;
}
export function nowPlaying() { return current; }
