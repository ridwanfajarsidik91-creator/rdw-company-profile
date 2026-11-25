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

Impor repositori ke Vercel dengan preset Next.js. Metadata dan sitemap memakai `SITE_URL` jika diatur. Di Vercel Production, domain default-nya adalah `www.rdw.company`.

## Aset gambar

Logo RDW diambil dari HTML referensi. Visual produk dan segmen pelanggan dibuat dengan ImageGen dan disimpan sebagai WebP di `public/images/`. Subjek visual mencakup ayam potong utuh di latar putih, ayam broiler di kandang, lapak pasar tradisional, fasilitas pemotongan, pekerja pengolahan ayam, dan gudang distribusi. Halaman memberi label “Foto ilustrasi” pada visual tersebut.
