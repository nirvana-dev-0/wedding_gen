import Link from "next/link";
import { TEMPLATES } from "@/lib/data";

export default function TemplatesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <p className="text-xs tracking-[0.3em] text-[#8a6a1f]">KATALOG</p>
      <h1 className="serif text-4xl font-semibold mt-1">8 template, 8 cara buka</h1>
      <p className="mt-3 text-[#5c5546] max-w-2xl leading-relaxed">Bukan cuma ganti warna. Tiap template punya scene Three.js dan animasi GSAP sendiri, preloader dari objeknya, dan kotak Kepada Yth yang beda bentuk. Klik kartu untuk melihat contoh undangannya.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {TEMPLATES.map((t) => (
          <article key={t.id} className="rounded-2xl overflow-hidden border border-[#e3dcc9] bg-white">
            <Link href={`/u/rizky-aisyah?tpl=${t.id}`}>
              <div className="h-48 flex flex-col items-center justify-center px-4 text-center" style={{ background: t.palette.bg, color: t.palette.ink }}>
                <p className="text-[11px] tracking-[0.3em]" style={{ color: t.palette.gold }}>THE WEDDING OF</p>
                <p className="serif text-3xl mt-2 leading-tight">Rizky &amp; Aisyah</p>
                <p className="text-xs mt-2 opacity-80">{t.openLabel}</p>
              </div>
            </Link>
            <div className="p-4">
              <h2 className="serif text-xl font-semibold">{t.name}</h2>
              <p className="text-sm text-[#5c5546] mt-1 leading-relaxed">{t.desc}</p>
              <p className="text-xs mt-3 text-[#7a7264]">Scene: {t.scene}</p>
              <p className="text-xs mt-1 text-[#7a7264]">Kotak tamu: {t.guestBox}</p>
              <p className="text-xs mt-1 text-[#7a7264]">Musik tema: {t.track}</p>
              <div className="flex gap-2 mt-4">
                <Link href={`/u/rizky-aisyah?tpl=${t.id}`} className="rounded-full bg-[#241f18] text-white px-4 py-2 text-sm">Lihat contoh</Link>
                <Link href={`/buat?tpl=${t.id}`} className="rounded-full border px-4 py-2 text-sm">Pakai template ini</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <section className="mt-12 bg-white border border-[#e3dcc9] rounded-2xl p-6">
        <h2 className="serif text-2xl font-semibold">Kenapa tiap template terasa beda</h2>
        <p className="mt-2 text-[#5c5546] leading-relaxed">Cover-nya benda yang dibuka, bukan header. Motif dipakai dua skala, besar samar jadi wallpaper dan kecil tajam jadi border. Frame foto bukan persegi, menyesuaikan tema. Emas dipakai tipis sebagai garis dan monogram, bukan fill padat. Potret disembunyikan di balik gesture kedua, gosok foil, angkat veil, atau tarik benang.</p>
      </section>
    </div>
  );
}
