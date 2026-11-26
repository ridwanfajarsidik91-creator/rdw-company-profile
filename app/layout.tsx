import type { Metadata, Viewport } from "next";
import { site } from "./site";
import { siteOrigin } from "./site-origin";
import "./globals.css";
import "./enhancements.css";

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: site.title,
  description: site.description,
  alternates: { canonical: site.url },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{
      url: new URL("/og-rdw.jpg", site.url),
      type: "image/jpeg",
      width: 1200,
      height: 630,
      alt: "RDW — Mitra Pasokan Ayam. Solusi Distribusi.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: new URL("/og-rdw.jpg", site.url), alt: "RDW — Mitra Pasokan Ayam. Solusi Distribusi." }],
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
