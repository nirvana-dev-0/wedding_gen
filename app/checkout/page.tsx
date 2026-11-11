"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PACKAGES, formatRp, templateById } from "@/lib/data";
import { saveInvitation } from "@/lib/store";

function CheckoutInner() {
  const params = useSearchParams();
  const tpl = templateById(params.get("tpl") ?? "klasik");
  const pkg = PACKAGES.find((p) => p.id === params.get("pkg")) ?? PACKAGES[1];
  const slug = params.get("slug") ?? "rizky-aisyah";
  const track = params.get("track") ?? tpl.track;
  const [method, setMethod] = useState("QRIS");
  const [paid, setPaid] = useState(false);
  const [seconds, setSeconds] = useState(900);

  function pay() {
    setPaid(true);
    saveInvitation({ slug, bride: "Aisyah", groom: "Rizky", templateId: tpl.id, pkg: pkg.id, date: "Sabtu, 12 Desember 2026", createdAt: new Date().toISOString() });
    const t = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    setTimeout(() => clearInterval(t), 1000);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <p className="text-xs tracking-[0.3em] text-[#8a6a1f]">CHECKOUT</p>
      <h1 className="serif text-4xl font-semibold mt-1">Bayar dan terbitkan</h1>
      <p className="mt-2 text-sm bg-amber-100 border border-amber-300 rounded-lg px-3 py-2">Ini pembayaran simulasi. Tidak ada uang yang berpindah. Link dan QR di halaman ini contoh.</p>

      <div className="bg-white border border-[#e3dcc9] rounded-2xl p-5 mt-6">
        <h2 className="font-semibold">Ringkasan</h2>
        <dl className="mt-3 space-y-1 text-sm">
          <div className="flex justify-between"><dt>Template</dt><dd>{tpl.name}</dd></div>
          <div className="flex justify-between"><dt>Paket</dt><dd>{pkg.name}</dd></div>
          <div className="flex justify-between"><dt>Musik</dt><dd>{pkg.id === "basic" ? "Tanpa musik" : pkg.id === "premium" ? tpl.track : track}</dd></div>
          <div className="flex justify-between"><dt>Link</dt><dd>/u/{slug}</dd></div>
          <div className="flex justify-between border-t pt-2 mt-2"><dt className="font-semibold">Total</dt><dd className="serif text-2xl font-semibold">{formatRp(pkg.price)}</dd></div>
        </dl>
      </div>

      <div className="bg-white border border-[#e3dcc9] rounded-2xl p-5 mt-4">
        <h2 className="font-semibold">Metode bayar (simulasi)</h2>
        <div className="flex gap-2 mt-3">
          {["QRIS", "Transfer VA", "E-Wallet"].map((m) => (
            <button key={m} type="button" onClick={() => setMethod(m)} aria-pressed={method === m} className={`rounded-full border px-4 py-2 text-sm ${method === m ? "bg-[#241f18] text-white" : ""}`}>{m}</button>
          ))}
        </div>
        {method === "QRIS" && <div className="mt-4 h-40 w-40 border-2 border-dashed flex items-center justify-center text-sm">QR contoh</div>}
        {method === "Transfer VA" && <p className="mt-4 text-sm">Nomor VA contoh: 8808 1234 5678 90</p>}
        {method === "E-Wallet" && <p className="mt-4 text-sm">E-wallet contoh: DANA / GoPay / OVO</p>}
        <p className="text-xs mt-3 text-[#7a7264]">Batas waktu bayar simulasi: {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}</p>
        {!paid ? (
          <button type="button" onClick={pay} className="mt-4 rounded-full bg-[#241f18] text-white px-6 py-3">Bayar {formatRp(pkg.price)} dan terbitkan</button>
        ) : (
          <div className="mt-4">
            <p className="font-semibold">Pembayaran simulasi diterima.</p>
            <Link href={`/sukses?slug=${encodeURIComponent(slug)}&tpl=${tpl.id}`} className="inline-block mt-3 rounded-full bg-[#241f18] text-white px-6 py-3">Lihat halaman sukses →</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return <Suspense fallback={<div className="p-10">Memuat checkout…</div>}><CheckoutInner /></Suspense>;
}
