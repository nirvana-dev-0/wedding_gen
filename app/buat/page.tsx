"use client";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PACKAGES, TEMPLATES, TRACKS, formatRp, templateById } from "@/lib/data";
import { loadDraft, saveDraft } from "@/lib/store";

function EditorInner() {
  const params = useSearchParams();
  const [tplId, setTplId] = useState(params.get("tpl") ?? "klasik");
  const [pkg, setPkg] = useState("premium");
  const [track, setTrack] = useState(TRACKS[8]);
  const [form, setForm] = useState<Record<string, string>>({ bride: "Aisyah", groom: "Rizky", slug: "rizky-aisyah", date: "Sabtu, 12 Desember 2026", venue: "Gedung Serbaguna Malang", address: "Jl. Merdeka No. 12, Malang", maps: "" });
  const tpl = templateById(tplId);
  const chosen = PACKAGES.find((p) => p.id === pkg) ?? PACKAGES[1];

  useEffect(() => { const d = loadDraft(); if (Object.keys(d).length) setForm((f) => ({ ...f, ...d })); }, []);
  function set(k: string, v: string) { const next = { ...form, [k]: v }; setForm(next); saveDraft(next); }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <p className="text-xs tracking-[0.3em] text-[#8a6a1f]">BUAT UNDANGAN</p>
      <h1 className="serif text-4xl font-semibold mt-1">Atelier undangan</h1>
      <p className="mt-2 text-[#5c5546]">Pilih template, isi data, pilih paket, lalu lanjut ke tamu dan checkout. Draft tersimpan di browser ini.</p>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <div className="space-y-6">
          <section className="bg-white border border-[#e3dcc9] rounded-2xl p-5">
            <h2 className="font-semibold">1. Template</h2>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {TEMPLATES.map((t) => (
                <button key={t.id} type="button" onClick={() => setTplId(t.id)} aria-pressed={tplId === t.id}
                  className={`rounded-xl p-3 text-left border-2 ${tplId === t.id ? "border-[#8a6a1f]" : "border-[#e3dcc9]"}`} style={{ background: t.palette.bg, color: t.palette.ink }}>
                  <p className="serif text-lg leading-tight">{t.name}</p>
                  <p className="text-xs mt-1 opacity-80">{t.openLabel} · {t.track}</p>
                </button>
              ))}
            </div>
            <p className="text-xs mt-3 text-[#7a7264]">Scene template ini: {tpl.scene}</p>
          </section>

          <section className="bg-white border border-[#e3dcc9] rounded-2xl p-5">
            <h2 className="font-semibold">2. Mempelai dan acara</h2>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {(["bride", "groom", "slug", "date"] as const).map((k) => (
                <label key={k} className="text-sm capitalize">{k === "bride" ? "Mempelai wanita" : k === "groom" ? "Mempelai pria" : k === "slug" ? "Slug link" : "Tanggal"}
                  <input value={form[k]} onChange={(e) => set(k, e.target.value)} className="mt-1 w-full border-b-2 border-[#c6a969] bg-transparent py-1.5 outline-none" />
                </label>
              ))}
              <label className="text-sm col-span-2">Nama tempat<input value={form.venue} onChange={(e) => set("venue", e.target.value)} className="mt-1 w-full border-b-2 border-[#c6a969] bg-transparent py-1.5 outline-none" /></label>
              <label className="text-sm col-span-2">Alamat lengkap<input value={form.address} onChange={(e) => set("address", e.target.value)} className="mt-1 w-full border-b-2 border-[#c6a969] bg-transparent py-1.5 outline-none" /></label>
              <label className="text-sm col-span-2">Link Google Maps (dijadikan iframe di undangan)<input value={form.maps} onChange={(e) => set("maps", e.target.value)} placeholder="https://maps.google.com/..." className="mt-1 w-full border-b-2 border-[#c6a969] bg-transparent py-1.5 outline-none" /></label>
            </div>
          </section>

          <section className="bg-white border border-[#e3dcc9] rounded-2xl p-5">
            <h2 className="font-semibold">3. Paket dan musik</h2>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {PACKAGES.map((p) => (
                <button key={p.id} type="button" onClick={() => setPkg(p.id)} aria-pressed={pkg === p.id} className={`rounded-xl border-2 p-3 text-left ${pkg === p.id ? "border-[#8a6a1f]" : "border-[#e3dcc9]"}`}>
                  <p className="font-semibold">{p.name}</p><p className="text-sm">{formatRp(p.price)}</p><p className="text-xs mt-1 text-[#5c5546]">{p.music}</p>
                </button>
              ))}
            </div>
            {pkg === "exclusive" && (
              <label className="block text-sm mt-4">Pilih lagu
                <select value={track} onChange={(e) => setTrack(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2 bg-white">
                  {TRACKS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </label>
            )}
            {pkg === "premium" && <p className="text-sm mt-3 text-[#5c5546]">Lagu tema template ini: {tpl.track}. Musik mulai setelah tamu menekan Buka Undangan.</p>}
            {pkg === "basic" && <p className="text-sm mt-3 text-[#5c5546]">Paket Basic tanpa musik.</p>}
          </section>

          <Link href={`/tamu?tpl=${tplId}&pkg=${pkg}&track=${encodeURIComponent(track)}&slug=${encodeURIComponent(form.slug)}`} className="inline-block rounded-full bg-[#241f18] text-white px-6 py-3">Lanjut ke tamu →</Link>
        </div>

        <div>
          <p className="text-sm text-[#7a7264] mb-2">Preview sampul — {tpl.name}</p>
          <div className="rounded-2xl overflow-hidden sticky top-20" style={{ background: tpl.palette.bg, color: tpl.palette.ink }}>
            <div className="p-8 text-center min-h-[420px] flex flex-col items-center justify-center">
              <p className="text-[11px] tracking-[0.3em]" style={{ color: tpl.palette.gold }}>THE WEDDING OF</p>
              <p className="serif text-4xl mt-3">{form.groom} &amp; {form.bride}</p>
              <p className="text-sm mt-2 tracking-[0.25em]">{form.date.toUpperCase()}</p>
              <div className="gold-line w-40 my-5" />
              <p className="text-sm opacity-80">{tpl.openLabel}</p>
              <p className="text-xs mt-4 opacity-70">Paket {chosen.name} · {formatRp(chosen.price)} · {chosen.music}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuatPage() {
  return <Suspense fallback={<div className="p-10">Memuat editor…</div>}><EditorInner /></Suspense>;
}
