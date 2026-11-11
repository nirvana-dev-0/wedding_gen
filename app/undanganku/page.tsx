"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { loadInvitations, type SavedInvitation } from "@/lib/store";
import { templateById } from "@/lib/data";

export default function UndangankuPage() {
  const [list, setList] = useState<SavedInvitation[]>([]);
  useEffect(() => { setList(loadInvitations()); }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <p className="text-xs tracking-[0.3em] text-[#8a6a1f]">UNDANGANKU</p>
      <h1 className="serif text-4xl font-semibold mt-1">Undanganmu</h1>
      <p className="mt-2 text-[#5c5546]">Daftar ini tersimpan di browser ini (localStorage). Undangan yang diterbitkan lewat checkout simulasi muncul di sini.</p>
      {list.length === 0 ? (
        <div className="bg-white border border-[#e3dcc9] rounded-2xl p-8 mt-6 text-center">
          <p className="serif text-2xl">Belum ada undangan</p>
          <p className="text-[#5c5546] mt-2">Buat undangan pertamamu, lalu terbitkan lewat checkout.</p>
          <Link href="/buat" className="inline-block mt-4 rounded-full bg-[#241f18] text-white px-6 py-3">Buat undangan</Link>
        </div>
      ) : (
        <ul className="grid md:grid-cols-2 gap-4 mt-6">
          {list.map((inv) => {
            const tpl = templateById(inv.templateId);
            return (
              <li key={inv.slug} className="rounded-2xl overflow-hidden border border-[#e3dcc9] bg-white">
                <div className="h-28 flex items-center justify-center" style={{ background: tpl.palette.bg, color: tpl.palette.ink }}>
                  <p className="serif text-2xl">{inv.groom} &amp; {inv.bride}</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold">{tpl.name} · Paket {inv.pkg}</p>
                  <p className="text-sm text-[#5c5546]">{inv.date} · /u/{inv.slug}</p>
                  <div className="flex gap-2 mt-3">
                    <Link href={`/u/${inv.slug}?tpl=${inv.templateId}`} className="rounded-full bg-[#241f18] text-white px-4 py-2 text-sm">Buka</Link>
                    <Link href={`/buat?tpl=${inv.templateId}`} className="rounded-full border px-4 py-2 text-sm">Ubah</Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
