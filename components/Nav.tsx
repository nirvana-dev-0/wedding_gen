"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/templates", label: "Template" },
  { href: "/buat", label: "Buat Undangan" },
  { href: "/undanganku", label: "Undanganku" },
  { href: "/bantuan", label: "Bantuan" },
];

export default function Nav() {
  const path = usePathname();
  if (path.startsWith("/u/")) return null;
  return (
    <header className="sticky top-0 z-40 bg-[#f8f5f0]/95 backdrop-blur border-b border-[#e3dcc9]">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="serif whitespace-nowrap text-lg font-semibold tracking-wide sm:text-xl">Undangan<span className="text-[#8a6a1f]"> Nikah</span></Link>
        <nav className="flex gap-1 overflow-x-auto text-sm" aria-label="Navigasi utama">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap ${path === l.href ? "bg-[#241f18] text-white" : "hover:bg-[#ece5d3]"}`}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
