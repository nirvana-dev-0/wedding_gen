"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function SuksesInner() {
  const params = useSearchParams();
  const slug = params.get("slug") ?? "rizky-aisyah";
  const tpl = params.get("tpl") ?? "klasik";
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <p className="text-6xl">✓</p>
      <h1 className="serif text-4xl font-semibold mt-4">Undanganmu sudah terbit</h1>
      <p className="mt-3 text-[#5c5546] leading-relaxed">Link undanganmu aktif 3 bulan. Bagikan link di bawah ke tamu, tiap tamu dapat namanya sendiri di sampul.</p>
      <p className="mt-6 bg-white border border-[#e3dcc9] rounded-xl px-4 py-3 break-all">/u/{slug}?to=NamaTamu</p>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <Link href={`/u/${slug}?tpl=${tpl}`} className="rounded-full bg-[#241f18] text-white px-6 py-3">Lihat undangan</Link>
        <Link href="/undanganku" className="rounded-full border px-6 py-3">Ke Undanganku</Link>
        <Link href="/tamu" className="rounded-full border px-6 py-3">Kelola tamu</Link>
      </div>
    </div>
  );
}
export default function SuksesPage() {
  return <Suspense fallback={<div className="p-10">Memuat…</div>}><SuksesInner /></Suspense>;
}
