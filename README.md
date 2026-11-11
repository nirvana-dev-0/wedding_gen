# Wedding Invitation Generator — Next.js

Versi Next.js App Router (TypeScript + Tailwind) dari Wedding Invitation Generator.
Bukan satu file HTML statis. Tiap template punya komponen scene sendiri
(Three.js / GSAP) yang beda cara bukanya.

## Jalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build produksi
npm start       # jalankan hasil build
```

Tidak ada deploy otomatis. Jangan deploy tanpa persetujuan user.

## Halaman

- `/` Beranda
- `/templates` Katalog template
- `/buat` Editor buat undangan
- `/tamu` Tamu dan link (`?to=nama`)
- `/checkout` Checkout / publish (simulasi, diberi label)
- `/sukses` Sukses terbit
- `/undanganku` Daftar undangan tersimpan (localStorage)
- `/bantuan` Bantuan dan FAQ
- `/u/[slug]?to=Nama` Undangan tamu full-scroll

## Paket

- Basic Rp39.000, tanpa musik
- Premium Rp79.000, satu lagu tema per template
- Exclusive Rp129.000, pilih dari 10 lagu

Musik dibuat dengan Web Audio, mulai setelah tamu menekan Ketuk untuk lanjut.
Pembayaran masih simulasi. Data contoh: Aisyah & Rizky, slug `rizky-aisyah`.
