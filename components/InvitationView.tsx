"use client";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { COUPLE, templateById, type TemplateDef } from "@/lib/data";
import { startMusic, stopMusic, trackFor } from "@/lib/music";
import Preloader from "./Preloader";
import GuestBox from "./GuestBox";
import RevealPortrait from "./RevealPortrait";
import Reveal from "./Reveal";
import LocationPanel from "./LocationPanel";

const TemplateScene = dynamic(() => import("./TemplateScene"), {
  ssr: false,
  loading: () => <div className="h-[100svh] bg-black/10" aria-hidden />,
});

const LIGHT_TEMPLATES = ["floral", "garden", "kabar", "chat"];

function Falling({ char, color }: { char: string; color: string }) {
  const items = useMemo(
    () => Array.from({ length: 10 }, (_, i) => ({ left: (i * 9 + 3) % 96, delay: (i % 5) * 1.4, dur: 7 + (i % 4), size: 14 + (i % 3) * 6 })),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((it, i) => (
        <span
          key={i}
          className="falling absolute"
          style={{ left: `${it.left}%`, animationDelay: `${it.delay}s`, animationDuration: `${it.dur}s`, fontSize: it.size, color }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

function Divider({ color }: { color: string }) {
  return (
    <div aria-hidden className="mx-auto my-6 flex items-center justify-center gap-2">
      <span className="h-px w-12" style={{ background: color, opacity: 0.55 }} />
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: color }} />
      <span className="h-px w-12" style={{ background: color, opacity: 0.55 }} />
    </div>
  );
}

function Section({
  id,
  label,
  title,
  tpl,
  children,
  background,
}: {
  id?: string;
  label: string;
  title: string;
  tpl: TemplateDef;
  children: ReactNode;
  background?: string;
}) {
  return (
    <section id={id} className="guest-section relative flex flex-col justify-center overflow-hidden px-5 py-20 sm:px-8" style={background ? { background } : undefined}>
      <div className="mx-auto w-full max-w-xl">
        <Reveal variant="fade">
          <p className="text-center text-[10px] tracking-[0.34em]" style={{ color: tpl.palette.gold }}>{label}</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="serif mt-2 text-center text-3xl font-semibold sm:text-4xl">{title}</h2>
        </Reveal>
        <Reveal variant="fade" delay={120}>
          <Divider color={tpl.palette.gold} />
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Countdown() {
  const [left, setLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const target = new Date(COUPLE.dateISO).getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = left ?? { d: 0, h: 0, m: 0, s: 0 };
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3" aria-label="Hitung mundur menuju hari pernikahan">
      {([["d", "Hari"], ["h", "Jam"], ["m", "Menit"], ["s", "Detik"]] as const).map(([key, label]) => (
        <div key={key} className="flex flex-col items-center justify-center rounded-2xl border px-1 py-4 sm:py-5" style={{ borderColor: "currentColor" }}>
          <span className="serif text-2xl font-semibold tabular-nums sm:text-3xl">{String(parts[key]).padStart(2, "0")}</span>
          <span className="mt-1 text-[10px] tracking-[0.16em] opacity-70">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function InvitationView({ templateId, guest, pkg = "premium", chosenTrack }: { templateId: string; guest: string; pkg?: string; chosenTrack?: string }) {
  const tpl = templateById(templateId);
  const [loaded, setLoaded] = useState(false);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const track = trackFor(pkg, tpl.track, chosenTrack);
  const light = LIGHT_TEMPLATES.includes(tpl.id);
  const surface = light ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.055)";
  const line = light ? "rgba(36,31,24,0.14)" : "rgba(248,245,240,0.16)";
  const tint = light ? "rgba(36,31,24,0.035)" : "rgba(255,255,255,0.04)";
  const fallingChar = tpl.id === "floral" || tpl.id === "garden" ? "❀" : "✦";

  useEffect(() => () => stopMusic(), []);

  function open() {
    setOpened(true);
    if (track) {
      startMusic(track);
      setPlaying(true);
    }
  }

  function toggleMusic() {
    if (playing) {
      stopMusic();
      setPlaying(false);
      return;
    }
    if (track) {
      startMusic(track);
      setPlaying(true);
    }
  }

  return (
    <div
      data-guest-scroll
      className={`guest-scroll relative h-[100svh] ${loaded ? "overflow-y-auto" : "overflow-hidden"}`}
      style={{ background: tpl.palette.bg, color: tpl.palette.ink }}
    >
      {!loaded && <Preloader tpl={tpl} onDone={() => setLoaded(true)} />}
      <Falling char={fallingChar} color={tpl.palette.gold} />

      <div className="relative z-10">
        {!opened ? (
          loaded ? <TemplateScene tpl={tpl} onOpen={open} /> : <div className="min-h-[100svh]" aria-hidden />
        ) : (
          <div>
            <section className="guest-section relative flex flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[62vmin] w-[62vmin] -translate-x-1/2 -translate-y-1/3 rounded-full border" style={{ borderColor: tpl.palette.gold, opacity: 0.16 }} />
                <div className="absolute left-1/2 top-0 h-[42vmin] w-[42vmin] -translate-x-1/2 -translate-y-1/3 rounded-full border" style={{ borderColor: tpl.palette.gold, opacity: 0.1 }} />
              </div>

              <Reveal variant="fade">
                <p className="text-[10px] tracking-[0.4em]" style={{ color: tpl.palette.gold }}>THE WEDDING OF</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="serif mt-3 text-5xl font-semibold sm:text-6xl">Rizky &amp; Aisyah</h1>
              </Reveal>
              <Reveal variant="fade" delay={150}>
                <p className="mt-3 text-xs tracking-[0.28em] opacity-80">SABTU, 12 DESEMBER 2026</p>
              </Reveal>
              <Reveal variant="scale" delay={220} className="mt-8 w-full">
                <GuestBox tpl={tpl} name={guest} />
              </Reveal>
              <Reveal variant="fade" delay={300}>
                <p className="mt-10 text-[10px] tracking-[0.24em] opacity-55">GULIR UNTUK MEMBUKA KISAH</p>
              </Reveal>
            </section>

            <Section label="DOA" title="Sebuah doa kecil" tpl={tpl} background={tint}>
              <Reveal variant="up">
                <p className="serif mx-auto max-w-lg text-center text-2xl leading-relaxed sm:text-3xl">
                  “Dan di antara tanda-tanda kebesaran-Nya, Dia menciptakan pasangan untukmu agar kamu tenang bersamanya.”
                </p>
              </Reveal>
            </Section>

            <Section label="MEMPELAI" title="Dua hati, satu tujuan" tpl={tpl}>
              <Reveal variant="scale" delay={80}>
                <RevealPortrait tpl={tpl} />
              </Reveal>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Reveal variant="left" delay={140}>
                  <div className="rounded-2xl border p-5 text-center" style={{ borderColor: line, background: surface }}>
                    <p className="script text-3xl">Aisyah</p>
                    <p className="mt-2 text-sm leading-relaxed opacity-75">Putri Bapak H. Ahmad dan Ibu Siti</p>
                  </div>
                </Reveal>
                <Reveal variant="right" delay={200}>
                  <div className="rounded-2xl border p-5 text-center" style={{ borderColor: line, background: surface }}>
                    <p className="script text-3xl">Rizky</p>
                    <p className="mt-2 text-sm leading-relaxed opacity-75">Putra Bapak Budi dan Ibu Dewi</p>
                  </div>
                </Reveal>
              </div>
            </Section>

            <Section label="HITUNG MUNDUR" title="Menuju hari bahagia" tpl={tpl} background={tint}>
              <Reveal variant="up" delay={80}>
                <Countdown />
              </Reveal>
              <Reveal variant="fade" delay={160}>
                <p className="mt-5 text-center text-sm opacity-70">Kami menantikan momen ini bersama.</p>
              </Reveal>
            </Section>

            <Section label="ACARA" title="Akad dan resepsi" tpl={tpl}>
              <div className="grid gap-3 sm:grid-cols-2">
                <Reveal variant="left" delay={80}>
                  <div className="h-full rounded-2xl border p-5" style={{ borderColor: line, background: surface }}>
                    <p className="text-[10px] tracking-[0.24em]" style={{ color: tpl.palette.gold }}>AKAD NIKAH</p>
                    <p className="serif mt-2 text-2xl">Sabtu, 12 Desember 2026</p>
                    <p className="mt-2 text-sm">09.00 WIB</p>
                    <p className="mt-1 text-sm opacity-75">{COUPLE.venue}</p>
                  </div>
                </Reveal>
                <Reveal variant="right" delay={150}>
                  <div className="h-full rounded-2xl border p-5" style={{ borderColor: line, background: surface }}>
                    <p className="text-[10px] tracking-[0.24em]" style={{ color: tpl.palette.gold }}>RESEPSI</p>
                    <p className="serif mt-2 text-2xl">Sabtu, 12 Desember 2026</p>
                    <p className="mt-2 text-sm">11.00 WIB</p>
                    <p className="mt-1 text-sm opacity-75">{COUPLE.venue}</p>
                  </div>
                </Reveal>
              </div>
            </Section>

            <Section label="LOKASI" title="Temukan kami" tpl={tpl} background={tint}>
              <Reveal variant="scale" delay={100}>
                <LocationPanel tpl={tpl} />
              </Reveal>
            </Section>

            <Section label="RSVP" title="Konfirmasi kehadiran" tpl={tpl}>
              <Reveal variant="up" delay={80}>
                <div className="mx-auto max-w-md rounded-2xl border p-6 text-center" style={{ borderColor: line, background: surface }}>
                  <p className="text-sm leading-relaxed">
                    Biar tempat duduk dan hidangan cukup, kabari kami sebelum <span className="font-semibold">{COUPLE.rsvpDeadline}</span>.
                  </p>
                  <p className="mt-4 text-sm opacity-75">Hubungi {COUPLE.rsvpContact}</p>
                  <p className="mt-2 text-xs opacity-55">Cukup pesan biasa, tidak perlu mengisi formulir.</p>
                </div>
              </Reveal>
            </Section>

            <Section label="PENUTUP" title="Sampai jumpa" tpl={tpl} background={tint}>
              <Reveal variant="up" delay={80}>
                <p className="mx-auto max-w-md text-center text-base leading-relaxed opacity-80">
                  Terima kasih sudah membuka undangan kami. Doa dan kehadiranmu berarti untuk Rizky dan Aisyah.
                </p>
              </Reveal>
              <Reveal variant="fade" delay={160}>
                <p className="script mt-8 text-center text-4xl">Rizky &amp; Aisyah</p>
              </Reveal>
              <Reveal variant="fade" delay={220}>
                <p className="mt-2 text-center text-xs opacity-55">{COUPLE.venue} · {COUPLE.address}</p>
              </Reveal>
            </Section>
          </div>
        )}
      </div>

      {opened && track && (
        <button
          type="button"
          onClick={toggleMusic}
          aria-pressed={playing}
          aria-label={`${playing ? "Jeda" : "Putar"} musik ${track}`}
          title={`${playing ? "Jeda" : "Putar"} musik ${track}`}
          className="fixed bottom-5 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border text-xs shadow-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{
            borderColor: tpl.palette.gold,
            background: playing ? tpl.palette.gold : light ? "rgba(255,255,255,0.82)" : "rgba(20,16,10,0.75)",
            color: playing ? "#14100a" : tpl.palette.ink,
            outlineColor: tpl.palette.gold,
          }}
        >
          {playing ? "❚❚" : "▶"}
        </button>
      )}
    </div>
  );
}
