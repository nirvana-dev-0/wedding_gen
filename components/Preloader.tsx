"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import type { TemplateDef } from "@/lib/data";

const PreloaderScene = dynamic(() => import("./PreloaderScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden />,
});

export default function Preloader({ tpl, onDone }: { tpl: TemplateDef; onDone: () => void }) {
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const finished = useRef(false);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(reduce);
    const duration = reduce ? 900 : 2300;

    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      if (reduce || !root.current) {
        onDoneRef.current();
        return;
      }
      gsap.to(root.current, { opacity: 0, duration: 0.4, ease: "power2.inOut", onComplete: () => onDoneRef.current() });
    };

    const timer = window.setTimeout(finish, duration);
    const ctx = gsap.context(() => {
      if (reduce) return;
      gsap.fromTo(".pre-object", { opacity: 0, scale: 0.72, y: 18 }, { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power3.out" });
      gsap.fromTo(".pre-copy", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.25, ease: "power2.out" });
      gsap.fromTo(".pre-bar", { scaleX: 0 }, { scaleX: 1, duration: duration / 1000, ease: "power1.inOut", transformOrigin: "left" });
    }, root);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") finish();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{ background: tpl.palette.bg, color: tpl.palette.ink }}
      role="dialog"
      aria-modal="true"
      aria-label={`Membuka ${tpl.name}`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{ borderColor: tpl.palette.gold }} />
        <div className="absolute left-1/2 top-1/2 h-[52vmin] w-[52vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-60" style={{ borderColor: tpl.palette.gold }} />
      </div>

      <p className="text-[10px] tracking-[0.4em]" style={{ color: tpl.palette.gold }}>MEMBUKA UNDANGAN</p>
      <div className="pre-object mt-4 h-64 w-64 sm:h-72 sm:w-72">
        <PreloaderScene id={tpl.id} gold={tpl.palette.gold} reduced={reduced} />
      </div>

      <div className="pre-copy mt-2">
        <p className="serif text-3xl">{tpl.name}</p>
        <p className="mt-1 text-sm opacity-75">Rizky &amp; Aisyah</p>
      </div>

      <div className="mt-7 h-1 w-48 overflow-hidden rounded-full bg-white/20">
        <div className="pre-bar h-full w-full" style={{ background: tpl.palette.gold }} />
      </div>
      <button
        type="button"
        autoFocus
        onClick={() => {
          if (finished.current) return;
          finished.current = true;
          if (reduced || !root.current) { onDoneRef.current(); return; }
          gsap.to(root.current, { opacity: 0, duration: 0.4, ease: "power2.inOut", onComplete: () => onDoneRef.current() });
        }}
        className="mt-5 text-xs tracking-[0.18em] underline underline-offset-4 opacity-70 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{ outlineColor: tpl.palette.gold }}
      >
        Lewati pembuka
      </button>
    </div>
  );
}
