"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SAMPLE_GUESTS } from "@/lib/data";

function TamuInner() {
  const params = useSearchParams();
  const slug = params.get("slug") ?? "rizky-aisyah";
  const tpl = params.get("tpl") ?? "klasik";
  const pkg = params.get("pkg") ?? "premium";
  const track = params.get("track") ?? "";
  const [guests, setGuests] = useState<string[]>(SAMPLE_GUESTS);
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState("");

  function addFromText(text: string) {
    const names = text.split(/\n|,/).map((s) => s.trim()).filter(Boolean);
    setGuests((g) => Array.from(new Set([...g, ...names])));
  }
  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    f.text().then(addFromText).catch(() => undefined);
  }
  function link(name: string) {
    const base = typeof window !== "undefined" ? window.location.origin : "";
    return `${base}/u/${slug}?to=${encodeURIComponent(name)}`;
  }
  async function copyAll() {
    const text = guests.map((g) => `${g}: ${link(g)}`).join("\n");
    try { await navigator.clipboard.writeText(text); setCopied("Semua link disalin."); } catch { setCopied("Salin gagal, salin manual dari daftar."); }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <p className="text-xs tracking-[0.3em] text-[#8a6a1f]">TAMU DAN LINK</p>
      <h1 className="serif text-4xl font-semibold mt-1">Tamu dan link</h1>
      <p className="mt-2 text-[#5c5546] leading-relaxed">Tiap tamu dapat link sendiri. Nama tamu muncul di sampul dari parameter <code>?to=nama</code>. Kalau parameter kosong atau aneh, tampilannya jadi Bapak/Ibu/Saudara/i.</p>

      <section className="bg-white border border-[#e3dcc9] rounded-2xl p-5 mt-6">
        <h2 className="font-semibold">Tambah tamu</h2>
        <div className="flex gap-2 mt-3">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nama tamu, satu per baris atau dipisah koma" className="flex-1 border rounded-lg px-3 py-2" />
          <button type="button" onClick={() => { addFromText(input); setInput(""); }} className="rounded-full bg-[#241f18] text-white px-5">Tambah</button>
        </div>
        <label className="block mt-4 text-sm">Impor dari file teks atau CSV (satu nama per baris)
          <input type="file" accept=".txt,.csv" onChange={onFile} className="block mt-1" />
        </label>
        <p className="text-xs mt-2 text-[#7a7264]">Impor Excel (XLSX) belum didukung di versi Next.js ini, pakai teks atau CSV dulu.</p>
      </section>

      <section className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">{guests.length} tamu</h2>
          <button type="button" onClick={copyAll} className="rounded-full border px-4 py-2 text-sm">Salin semua link</button>
        </div>
        {copied && <p className="text-sm mt-2 text-[#5c5546]">{copied}</p>}
        <ul className="mt-3 space-y-2">
          {guests.map((g) => (
            <li key={g} className="bg-white border border-[#e3dcc9] rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-2">
              <span className="serif text-lg">{g}</span>
              <span className="text-sm text-[#5c5546] break-all">/u/{slug}?to={encodeURIComponent(g)}</span>
              <Link href={`/u/${slug}?to=${encodeURIComponent(g)}&tpl=${tpl}`} className="text-sm underline">Lihat sebagai tamu</Link>
            </li>
          ))}
        </ul>
      </section>

      <Link href={`/checkout?tpl=${tpl}&pkg=${pkg}&track=${encodeURIComponent(track)}&slug=${encodeURIComponent(slug)}`} className="inline-block mt-8 rounded-full bg-[#241f18] text-white px-6 py-3">Lanjut ke checkout →</Link>
    </div>
  );
}

export default function TamuPage() {
  return <Suspense fallback={<div className="p-10">Memuat tamu…</div>}><TamuInner /></Suspense>;
}
