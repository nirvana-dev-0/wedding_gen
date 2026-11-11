import type { TemplateDef } from "@/lib/data";

// Kotak Kepada Yth, beda bentuk dan bahan per template.
export default function GuestBox({ tpl, name }: { tpl: TemplateDef; name: string }) {
  const display = name.trim() ? name : "Bapak/Ibu/Saudara/i";
  const base = "mx-auto max-w-sm px-6 py-5 text-center";
  if (tpl.id === "klasik") return <div className={`${base} border-4 border-double rounded-lg`} style={{ borderColor: tpl.palette.gold, background: "#f8f5f0", color: "#241f18" }}><p className="text-xs tracking-[0.25em] text-[#8a6a1f]">KEPADA YTH</p><p className="serif text-2xl mt-1">{display}</p></div>;
  if (tpl.id === "sunda") return <div className={`${base} rounded-lg`} style={{ background: "#2e6f73", color: "#fff" }}><p className="text-xs tracking-[0.25em]">KEPADA YTH</p><p className="serif text-2xl mt-1">{display}</p><p className="text-xs mt-1 opacity-80">pita biru gulungan</p></div>;
  if (tpl.id === "floral") return <div className={`${base} border-b-2`} style={{ borderColor: "#e8b4b8" }}><p className="text-xs tracking-[0.25em] text-[#a3767a]">KEPADA YTH</p><p className="serif text-2xl mt-1">❀ {display} ❀</p></div>;
  if (tpl.id === "islami") return <div className={`${base} frame-pointed border-2`} style={{ borderColor: tpl.palette.gold, background: "#0b3d2e", color: "#f8f5f0" }}><p className="text-xs tracking-[0.25em]" style={{ color: tpl.palette.gold }}>KEPADA YTH</p><p className="serif text-2xl mt-1">{display}</p></div>;
  if (tpl.id === "garden") return <div className={`${base} border-2 border-dashed rounded-lg`} style={{ borderColor: "#8a9a7b", background: "#eef0e6", color: "#2f3a2c" }}><p className="text-xs tracking-[0.25em]">KEPADA YTH</p><p className="serif text-2xl mt-1">{display}</p></div>;
  if (tpl.id === "navy") return <div className={`${base} rounded-lg border-2`} style={{ borderColor: tpl.palette.gold, background: "#0e1a33", color: "#f5f0e6" }}><p className="text-xs tracking-[0.25em]" style={{ color: tpl.palette.gold }}>KEPADA YTH</p><p className="serif text-2xl mt-1">{display}</p><span className="inline-block mt-2 h-8 w-8 rounded-full text-xs flex items-center justify-center" style={{ background: "#7a1f2b" }}>R&amp;A</span></div>;
  if (tpl.id === "kabar") return <div className={`${base} rounded border-2 border-[#1c1a16] bg-[#fdf8ec] text-[#1c1a16]`}><p className="text-xs tracking-[0.25em]">UNTUK</p><p className="serif text-2xl mt-1 font-bold">{display}</p></div>;
  return <div className={`${base} frame-bubble text-left`} style={{ background: "#25d366", color: "#fff" }}><p className="text-xs tracking-[0.25em]">KEPADA YTH</p><p className="serif text-2xl mt-1">{display}</p></div>;
}
