import type { Metadata, Viewport } from "next";
import { site } from "./site";
import { siteOrigin } from "./site-origin";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "RDW — Supplier & Distributor",
    title: site.title,
    description: site.description,
    images: [{
      url: "/og-rdw.jpg",
      width: 1200,
      height: 630,
      alt: "RDW — Mitra Pasokan Ayam. Solusi Distribusi.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: "/og-rdw.jpg", alt: "RDW — Mitra Pasokan Ayam. Solusi Distribusi." }],
  },
};

export const viewport: Viewport = { themeColor: "#071C50" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
