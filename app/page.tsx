import Link from "next/link";
import { PACKAGES, TEMPLATES, formatRp } from "@/lib/data";
import Faq from "@/components/Faq";
import LandingPreloader from "@/components/LandingPreloader";

export default function Home() {
  return (
    <div>
      <LandingPreloader />
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-10">
        <p className="text-xs tracking-[0.3em] text-[#8a6a1f]">UNDANGAN PERNIKAHAN DIGITAL</p>
        <h1 className="serif text-5xl md:text-7xl font-semibold leading-[1.05] mt-3 max-w-3xl">Undangan yang dibuka, bukan cuma dilihat.</h1>
        <p className="mt-4 text-lg text-[#5c5546] max-w-2xl leading-relaxed">Pilih template, isi nama dan acara, bayar, lalu bagikan link ke tamu. Tiap template punya cara buka sendiri, dari pintu gebyok dan gulungan kertas sampai peoni mekar dan gelembung chat.</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link href="/buat" className="rounded-full bg-[#241f18] text-white px-6 py-3">Buat undangan</Link>
          <Link href="/templates" className="rounded-full border border-[#8a6a1f] px-6 py-3">Lihat 8 template</Link>
        </div>
        <p className="mt-4 text-sm text-[#7a7264]">Mulai Rp39.000 · Link aktif 3 bulan · Tamu tidak perlu aplikasi</p>
      </section>

      <section className="bg-[#14100a] text-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs tracking-[0.3em] text-[#c6a969]">PILIH TEMPLATE</p>
          <h2 className="serif text-3xl font-semibold mt-1">Delapan dunia, delapan cara buka</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {TEMPLATES.map((t) => (
              <Link key={t.id} href={`/u/rizky-aisyah?tpl=${t.id}`} className="rounded-2xl overflow-hidden border border-[#c6a969]/40 hover:border-[#c6a969] transition-colors" style={{ background: t.palette.bg, color: t.palette.ink }}>
                <div className="h-36 flex items-center justify-center px-4 text-center">
                  <div><p className="serif text-2xl leading-tight">{t.name}</p><p className="text-xs mt-2 opacity-80">{t.openLabel}</p></div>
                </div>
                <div className="px-4 py-3 bg-black/30 text-sm"><p>{t.desc}</p><p className="mt-2 text-xs" style={{ color: t.palette.gold }}>Musik tema: {t.track}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-xs tracking-[0.3em] text-[#8a6a1f]">CARA KERJANYA</p>
        <h2 className="serif text-3xl font-semibold mt-1">Tiga langkah, langsung jadi</h2>
        <ol className="grid md:grid-cols-3 gap-4 mt-6">
          {[["01", "Pilih template", "Delapan template, tiap-tiap punya animasi buka sendiri."], ["02", "Isi dan bayar", "Nama mempelai, acara, lokasi, tamu. Bayar sesuai paket."], ["03", "Bagikan link", "Tiap tamu dapat link sendiri, namanya muncul di sampul."]].map(([n, h, p]) => (
            <li key={n} className="bg-white border border-[#e3dcc9] rounded-2xl p-5"><p className="serif text-3xl text-[#8a6a1f]">{n}</p><h3 className="font-semibold mt-2">{h}</h3><p className="text-[#5c5546] mt-1 leading-relaxed">{p}</p></li>
          ))}
        </ol>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-4">
        <p className="text-xs tracking-[0.3em] text-[#8a6a1f]">PAKET</p>
        <h2 className="serif text-3xl font-semibold mt-1">Harga sekali bayar</h2>
        <div className="overflow-x-auto mt-6">
          <table className="w-full bg-white border border-[#e3dcc9] rounded-2xl overflow-hidden text-left">
            <thead><tr className="border-b border-[#e3dcc9]"><th className="p-4">Paket</th><th className="p-4">Harga</th><th className="p-4">Isi</th><th className="p-4">Musik</th></tr></thead>
            <tbody>{PACKAGES.map((p) => (<tr key={p.id} className="border-b border-[#e3dcc9] last:border-0"><td className="p-4 font-semibold">{p.name}</td><td className="p-4">{formatRp(p.price)}</td><td className="p-4">{p.desc}</td><td className="p-4">{p.music}</td></tr>))}</tbody>
          </table>
        </div>
      </section>
      <Faq />
    </div>
  );
}
