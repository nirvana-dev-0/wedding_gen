"use client";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const path = usePathname();
  if (path.startsWith("/u/")) return null;
  return (
    <footer className="border-t border-[#e3dcc9] mt-16 py-8 text-center text-sm text-[#7a7264]">
      <p>Undangan Nikah, buat, bayar, bagikan. Pembayaran di situs ini masih simulasi.</p>
      <p className="mt-1">Basic Rp39.000 · Premium Rp79.000 · Exclusive Rp129.000</p>
    </footer>
  );
}
