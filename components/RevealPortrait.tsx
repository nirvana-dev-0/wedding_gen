"use client";
import { useRef, useState } from "react";
import type { TemplateDef } from "@/lib/data";

// Gesture kedua ala Jovela: potret tersembunyi, dibuka dengan
// gosok foil, angkat veil, atau tarik benang sampai kertas sobek.
// Ada tombol tampilkan dan dukungan keyboard sebagai cadangan.
export default function RevealPortrait({ tpl }: { tpl: TemplateDef }) {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const dragging = useRef(false);

  function reveal() { setOpen(true); setProgress(100); }
  function onDown() { dragging.current = true; }
  function onMove(e: React.PointerEvent) {
    if (!dragging.current || open) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const p = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    setProgress((prev) => Math.max(prev, p));
    if (p > 75) reveal();
  }
  function onUp() { dragging.current = false; }

  const label = tpl.reveal === "foil" ? "Gosok foil emas untuk melihat foto" : tpl.reveal === "veil" ? "Angkat veil untuk melihat foto" : "Tarik benang merah sampai kertas sobek";
  const frame = tpl.frame === "arch" ? "frame-arch" : tpl.frame === "octagon" ? "frame-octagon" : tpl.frame === "oval" ? "frame-oval" : tpl.frame === "pointed" ? "frame-pointed" : tpl.frame === "paper" ? "frame-paper" : "frame-bubble";

  return (
    <div className="max-w-sm mx-auto text-center">
      <div className={`relative overflow-hidden border-2 ${frame} ${open ? "" : "cursor-pointer"}`}
        style={{ borderColor: tpl.palette.gold, background: tpl.palette.bg, minHeight: 320, touchAction: "none" }}
        role="button" tabIndex={0} aria-label={label}
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") reveal(); }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ color: tpl.palette.ink }}>
          <div className="h-28 w-28 rounded-full flex items-center justify-center text-5xl" style={{ background: tpl.palette.gold }}>R&amp;A</div>
          <p className="serif text-2xl mt-4">Rizky &amp; Aisyah</p>
          <p className="text-sm opacity-80">Foto mempelai</p>
        </div>
        {!open && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: tpl.reveal === "foil" ? "linear-gradient(135deg,#d4af37,#f5e6a8,#b8860b)" : tpl.reveal === "veil" ? "rgba(248,245,240,0.92)" : "#f4efe4", color: "#241f18", opacity: 1 - progress / 130 }}>
            <span className="text-4xl">{tpl.reveal === "foil" ? "✦" : tpl.reveal === "veil" ? "🕊" : "🧵"}</span>
            <p className="px-6 text-sm font-medium">{label}</p>
            <div className="h-1.5 w-40 rounded-full bg-black/15 overflow-hidden"><div className="h-full bg-[#8a6a1f]" style={{ width: `${progress}%` }} /></div>
          </div>
        )}
      </div>
      {!open && <button type="button" onClick={reveal} className="mt-3 rounded-full border px-5 py-2 text-sm" style={{ borderColor: tpl.palette.gold }}>Tampilkan foto</button>}
    </div>
  );
}
