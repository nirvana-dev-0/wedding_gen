export type TemplateId =
  | "klasik" | "sunda" | "floral" | "islami"
  | "garden" | "navy" | "kabar" | "chat";

export type PackageId = "basic" | "premium" | "exclusive";

export interface TemplateDef {
  id: TemplateId;
  name: string;
  desc: string;
  palette: { bg: string; ink: string; gold: string; accent: string };
  frame: "arch" | "octagon" | "oval" | "pointed" | "paper" | "bubble";
  openLabel: string;
  openHint: string;
  guestBox: string;
  reveal: "foil" | "veil" | "thread";
  track: string;
  scene: string;
}

export const CONTINUE_LABEL = "Ketuk untuk lanjut";

export const TEMPLATES: TemplateDef[] = [
  { id: "klasik", name: "Klasik Jawa Emas", desc: "Pintu gebyok kayu, motif kawung, emas tipis di atas navy sogan.", palette: { bg: "#14100a", ink: "#f8f5f0", gold: "#c6a969", accent: "#8a6a1f" }, frame: "arch", openLabel: "Buka pintu gebyok", openHint: "Ketuk untuk membuka gebyok", guestBox: "Bingkai emas ganda, nama di plakat kayu", reveal: "foil", track: "Gamelan", scene: "Gebyok 3D berputar terbuka, kawung berputar, partikel emas beterbangan." },
  { id: "sunda", name: "Sunda Heritage", desc: "Gulungan kertas, mega mendung biru, siger emas.", palette: { bg: "#10233a", ink: "#f4efe6", gold: "#d9b45b", accent: "#2e6f73" }, frame: "octagon", openLabel: "Buka gulungan", openHint: "Ketuk untuk membuka gulungan", guestBox: "Pita biru gulungan, nama di atas kertas", reveal: "thread", track: "Degung", scene: "Mega mendung bergerak berlapis, gulungan 3D terbuka dari tengah." },
  { id: "floral", name: "Floral Putih Minimal", desc: "Peoni mekar, putih bersih, garis bunga tanpa kotak.", palette: { bg: "#fdfbf7", ink: "#3a3a34", gold: "#c9a86a", accent: "#e8b4b8" }, frame: "oval", openLabel: "Lihat bunga mekar", openHint: "Ketuk, peoninya mekar", guestBox: "Garis bunga tanpa kotak, nama di bawah kelopak", reveal: "veil", track: "Piano Peony", scene: "Peoni mekar pakai GSAP scale dan rotate, kelopak jatuh satu-satu." },
  { id: "islami", name: "Kubah Cahaya Islami", desc: "Kubah geometri bercahaya, bintang berkelip, lentera.", palette: { bg: "#0b3d2e", ink: "#f8f5f0", gold: "#d4af37", accent: "#0f766e" }, frame: "pointed", openLabel: "Buka kubah cahaya", openHint: "Ketuk untuk menyalakan cahaya kubah", guestBox: "Wadah bentuk arch, nama di dalam lengkung", reveal: "veil", track: "Oud", scene: "Kubah 3D bercahaya, bintang berkelip, lentera bergoyang." },
  { id: "garden", name: "Rustic Garden Sage", desc: "Gerbang besi taman, mawar jatuh, hijau sage.", palette: { bg: "#eef0e6", ink: "#2f3a2c", gold: "#a8894f", accent: "#8a9a7b" }, frame: "arch", openLabel: "Buka gerbang taman", openHint: "Ketuk, gerbangnya terbuka", guestBox: "Papan kayu garis putus-putus, nama di papan", reveal: "thread", track: "Gitar Taman", scene: "Gerbang 3D terbuka, mawar jatuh, parallax daun di pinggir." },
  { id: "navy", name: "Navy Royal", desc: "Amplop navy, segel lilin maroon, foil emas di atas gelap.", palette: { bg: "#0e1a33", ink: "#f5f0e6", gold: "#d4af37", accent: "#7a1f2b" }, frame: "oval", openLabel: "Pecahkan segel dan buka", openHint: "Ketuk segel lilinnya", guestBox: "Kotak navy berbingkai foil emas dan segel lilin", reveal: "foil", track: "Royal Trio", scene: "Amplop 3D, flap terbuka, segel lilin retak dan pecah." },
  { id: "kabar", name: "Kabar Gembira", desc: "Koran vintage, masthead, kolom cerita.", palette: { bg: "#f4efe4", ink: "#1c1a16", gold: "#9a7b2d", accent: "#7a1f2b" }, frame: "paper", openLabel: "Baca halaman dalam", openHint: "Ketuk, korannya terbuka", guestBox: "Potongan koran bermaterai UNTUK", reveal: "thread", track: "Jazz", scene: "Halaman koran 3D berputar masuk, headline muncul baris demi baris." },
  { id: "chat", name: "Sapa Sayang", desc: "Undangan sebagai percakapan chat, gelembung hijau.", palette: { bg: "#eef3ec", ink: "#1f2a20", gold: "#8a9a7b", accent: "#25d366" }, frame: "bubble", openLabel: "Balas dan buka undangan", openHint: "Ketuk, pesannya masuk", guestBox: "Gelembung chat hijau, nama di dalam gelembung", reveal: "veil", track: "Lo-fi", scene: "Gelembung chat masuk berurutan pakai GSAP, titik mengetik berkedip." },
];

export const PACKAGES: { id: PackageId; name: string; price: number; desc: string; music: string }[] = [
  { id: "basic", name: "Basic", price: 39000, desc: "Template dasar, link undangan.", music: "Tanpa musik" },
  { id: "premium", name: "Premium", price: 79000, desc: "Tema premium, RSVP, musik, galeri.", music: "Satu lagu tema per template" },
  { id: "exclusive", name: "Exclusive", price: 129000, desc: "Kustomisasi lebih banyak, fitur ekstra.", music: "Pilih dari 10 lagu" },
];

export const TRACKS = [
  "Gamelan", "Degung", "Piano Peony", "Oud", "Gitar Taman",
  "Royal Trio", "Jazz", "Lo-fi", "Romantic Piano", "Cinematic Strings",
];

export const SAMPLE_GUESTS = [
  "Budi Santoso", "Keluarga Besar Hartono", "Siti Rahma dan Pasangan", "Dewi Lestari",
];

export const COUPLE = {
  bride: "Aisyah", groom: "Rizky", slug: "rizky-aisyah",
  date: "Sabtu, 12 Desember 2026", dateISO: "2026-12-12T09:00:00+07:00", venue: "Gedung Serbaguna Malang",
  address: "Jl. Merdeka No. 12, Malang",
  rsvpDeadline: "5 Desember 2026", rsvpContact: "0812-3456-7890",
};

export const FAQ = [
  { q: "Bagaimana cara membuat undangan?", a: "Pilih template, isi nama dan acara, lalu bayar dan terbitkan. Link langsung jadi dan bisa dibagikan." },
  { q: "Berapa biayanya dan kapan bayar?", a: "Basic Rp39.000, Premium Rp79.000, Exclusive Rp129.000. Bayar di awal sebelum undangan diterbitkan." },
  { q: "Bagaimana cara membagikan ke tamu?", a: "Tiap tamu dapat link sendiri, contohnya /u/rizky-aisyah?to=Budi. Nama tamu muncul di sampul." },
  { q: "Apakah tamu perlu aplikasi atau akun?", a: "Tidak. Link dibuka di browser HP, tanpa aplikasi dan tanpa akun." },
  { q: "Apakah bisa pakai foto, musik, dan RSVP?", a: "Bisa di paket Premium dan Exclusive. Basic hanya template dasar dan link undangan." },
  { q: "Berapa lama link aktif dan apakah bisa diubah setelah terbit?", a: "Link aktif 3 bulan. Isi undangan masih bisa diubah setelah terbit dari halaman Undanganku." },
];

export function formatRp(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}
export function templateById(id: string): TemplateDef {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}
