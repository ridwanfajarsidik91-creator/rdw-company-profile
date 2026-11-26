export const site = {
  domain: "www.rdw.company",
  url: "https://www.rdw.company/",
  name: "RDW — Supplier & Distributor",
  logo: "/images/logo-rdw.webp",
  title: "RDW | Supplier Ayam Hidup & Ayam Gebrus di Bandung Barat",
  description:
    "RDW memasok dan mendistribusikan ayam hidup serta ayam gebrus dari Bandung Barat untuk pasar tradisional, rumah potong ayam, dan industri pengolahan.",
  email: "info@rdw.company",
  address: {
    streetAddress: "Jl. Cipeusing, RT.04/RW.04, Kertawangi",
    district: "Kec. Cisarua",
    addressLocality: "Kabupaten Bandung Barat",
    addressRegion: "Jawa Barat",
    postalCode: "40551",
    addressCountry: "ID",
  },
  maps: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x2e68e22c57d946ab:0x2df6a5c71ba71985",
};

export const navigation = [
  ["#home", "Home"],
  ["#tentang", "Tentang"],
  ["#produk", "Produk"],
  ["#mitra", "Kemitraan"],
  ["#kontak", "Kontak"],
] as const;

export const products = [
  {
    name: "Ayam Gebrus",
    photo: "/images/ayam-gebrus.webp",
    alt: "Ayam potong utuh yang telah dibersihkan",
    description:
      "Ayam potong segar untuk pedagang pasar tradisional, distributor, dan bahan baku industri pengolahan ayam.",
  },
  {
    name: "Ayam Hidup",
    photo: "/images/ayam-hidup.webp",
    alt: "Ayam broiler hidup berbulu putih di kandang",
    description:
      "Pasokan ayam broiler hidup untuk rumah potong ayam, pedagang, dan kebutuhan perdagangan ayam hidup.",
  },
];

export const customers = [
  {
    name: "Pasar Tradisional",
    category: "Wet Market",
    photo: "/images/pasar.webp",
    alt: "Lapak ayam potong di pasar tradisional",
    description: "Pedagang ayam potong di pasar tradisional dan pasar basah.",
  },
  {
    name: "Rumah Potong Ayam (RPA)",
    category: "Slaughterhouse",
    photo: "/images/rpa.webp",
    alt: "Peralatan baja tahan karat di rumah potong ayam",
    description: "Pasokan ayam hidup untuk kebutuhan pemotongan.",
  },
  {
    name: "Industri Pengolahan Ayam",
    category: "Processing",
    photo: "/images/pengolahan.webp",
    alt: "Pekerja menyiapkan potongan ayam di meja produksi",
    description: "Bahan baku ayam gebrus untuk produksi parting, boneless, dan olahan ayam.",
  },
  {
    name: "Distributor & Pedagang Besar",
    category: "Wholesale",
    photo: "/images/distributor.webp",
    alt: "Peti distribusi di dalam gudang penyimpanan",
    description: "Pasokan ayam untuk perdagangan dan jaringan distribusi.",
  },
];
