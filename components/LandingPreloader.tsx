"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const KEY = "wedding-nextjs-landing-intro";

export default function LandingPreloader() {
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const close = useRef<() => void>(() => undefined);
  const finished = useRef(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY) === "1") return;
    } catch {
      // sessionStorage can be blocked; show the intro without persistence.
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible || !root.current) return;
    try { sessionStorage.setItem(KEY, "1"); } catch { /* no-op */ }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      if (reduce) {
        setVisible(false);
        return;
      }
      gsap.to(root.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setVisible(false),
      });
    };
    close.current = finish;

    const timer = window.setTimeout(finish, reduce ? 900 : 3400);
    const ctx = gsap.context(() => {
      if (reduce) return;
      const tl = gsap.timeline();
      tl.fromTo(".intro-arch", { opacity: 0, scale: 0.86, y: 18 }, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" })
        .fromTo(".intro-monogram", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 0.35)
        .fromTo(".intro-line", { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: "power2.inOut", transformOrigin: "center" }, 0.6)
        .to(".intro-door-left", { rotateY: -108, duration: 1.15, ease: "power2.inOut" }, 1.5)
        .to(".intro-door-right", { rotateY: 108, duration: 1.15, ease: "power2.inOut" }, 1.5)
        .fromTo(".intro-progress", { scaleX: 0 }, { scaleX: 1, duration: 3.1, ease: "power1.inOut", transformOrigin: "left" }, 0.2);
    }, root);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") finish();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      ctx.revert();
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] overflow-hidden bg-[#14100a] text-[#f8f5f0]"
      role="dialog"
      aria-modal="true"
      aria-label="Pembuka undangan pernikahan"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70">
        <span className="intro-spark absolute left-[16%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#c6a969]" />
        <span className="intro-spark absolute left-[78%] top-[30%] h-1 w-1 rounded-full bg-[#c6a969]" style={{ animationDelay: "0.7s" }} />
        <span className="intro-spark absolute left-[28%] top-[74%] h-1 w-1 rounded-full bg-[#c6a969]" style={{ animationDelay: "1.2s" }} />
        <span className="intro-spark absolute left-[68%] top-[68%] h-1.5 w-1.5 rounded-full bg-[#c6a969]" style={{ animationDelay: "1.8s" }} />
      </div>

      <div className="relative flex min-h-full flex-col items-center justify-center px-6 py-10 text-center">
        <p className="text-[10px] tracking-[0.42em] text-[#c6a969]">UNDANGAN NIKAH</p>

        <div className="intro-arch relative mt-6 w-[min(78vw,320px)]" style={{ perspective: 1000 }}>
          <div className="relative h-64 overflow-hidden rounded-t-[999px] border border-[#c6a969]/60 bg-[#1d1710] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-5 rounded-t-[999px] border border-[#c6a969]/30" />
            <div className="intro-door-left absolute inset-y-0 left-0 w-1/2 border-r border-[#c6a969]/40 bg-gradient-to-br from-[#2a1e0f] to-[#17110b]" style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }} />
            <div className="intro-door-right absolute inset-y-0 right-0 w-1/2 border-l border-[#c6a969]/40 bg-gradient-to-bl from-[#2a1e0f] to-[#17110b]" style={{ transformOrigin: "right center", backfaceVisibility: "hidden" }} />
            <div className="intro-monogram absolute inset-0 flex flex-col items-center justify-center">
              <span className="serif text-5xl text-[#e6d29c]">R &amp; A</span>
              <span className="mt-3 text-[10px] tracking-[0.3em] text-[#c6a969]">12 · 12 · 2026</span>
            </div>
          </div>
        </div>

        <div className="intro-line mt-8 h-px w-40 bg-gradient-to-r from-transparent via-[#c6a969] to-transparent" />
        <p className="serif mt-5 text-3xl">Rizky &amp; Aisyah</p>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#d8cfba]">Sebuah undangan kecil, dibuka pelan-pelan.</p>

        <div className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-white/15">
          <div className="intro-progress h-full w-full bg-[#c6a969]" />
        </div>
        <button
          type="button"
          autoFocus
          onClick={() => close.current()}
          className="mt-5 text-xs tracking-[0.18em] text-[#a99c82] underline underline-offset-4 hover:text-[#f8f5f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a969]"
        >
          Lewati pembuka
        </button>
      </div>
    </div>
  );
}
