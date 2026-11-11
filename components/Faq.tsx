import { FAQ } from "@/lib/data";
export default function Faq() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10" id="faq">
      <p className="text-xs tracking-[0.2em] text-[#8a6a1f]">PERTANYAAN UMUM</p>
      <h2 className="serif text-3xl font-semibold mt-1">Yang sering ditanyakan</h2>
      <div className="mt-6 space-y-3">
        {FAQ.map((f) => (
          <details key={f.q} className="bg-white border border-[#e3dcc9] rounded-xl px-4 py-3">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-[#5c5546] leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
