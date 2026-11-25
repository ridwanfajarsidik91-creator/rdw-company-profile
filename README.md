# RDW — Supplier & Distributor

Company profile RDW dengan Next.js App Router, TypeScript, Tailwind CSS, dan Lucide.

## Menjalankan proyek

Gunakan Node.js 22 atau lebih baru.

```sh
npm ci
npm run dev
```

Buka [localhost:3000](http://localhost:3000). Untuk validasi, jalankan `npm run lint`, `npm run type-check`, dan `npm run build`.

## Deployment

Impor repositori ke Vercel dengan preset Next.js. Metadata dan sitemap memakai `VERCEL_PROJECT_PRODUCTION_URL` jika tersedia. Atur `SITE_URL` ke URL HTTPS resmi setelah domain RDW terkonfirmasi. Domain yang dicantumkan di referensi ditampilkan sebagai teks karena saat peninjauan host tersebut mengarah ke perusahaan lain. Alamat email mengikuti brief.

## Aset gambar

Logo RDW diambil dari HTML referensi. Visual produk dan segmen pelanggan dibuat dengan ImageGen dan disimpan sebagai WebP di `public/images/`. Subjek visual mencakup ayam potong utuh di latar putih, ayam broiler di kandang, lapak pasar tradisional, fasilitas pemotongan, pekerja pengolahan ayam, dan gudang distribusi. Halaman memberi label “Foto ilustrasi” pada visual tersebut.
