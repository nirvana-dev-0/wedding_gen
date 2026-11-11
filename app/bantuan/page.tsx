import Faq from "@/components/Faq";
export default function BantuanPage() {
  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-xs tracking-[0.3em] text-[#8a6a1f]">BANTUAN</p>
        <h1 className="serif text-4xl font-semibold mt-1">Bantuan</h1>
        <p className="mt-3 text-[#5c5546] leading-relaxed">Kalau link tidak terbuka, coba buka ulang dari kartu terbaru, bukan dari riwayat lama. Kalau musik tidak berbunyi, pastikan kamu sudah menekan Buka Undangan, karena browser hanya mengizinkan suara setelah interaksi.</p>
      </div>
      <Faq />
    </div>
  );
}
