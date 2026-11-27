import { Handshake, Package, Truck } from "lucide-react";
import { BusinessAdvantages } from "../components/business-advantages";
import { CorporateFooter } from "../components/corporate-footer";
import { Header } from "../components/header";
import { CompanyMetrics, CompanyOperations } from "../components/operational-sections";
import { OrganizationSchema } from "../components/organization-schema";
import { PageMotion } from "../components/page-motion";
import { AboutParallax, HeroParallax } from "../components/scroll-parallax";
import { SupplyChain } from "../components/supply-chain";
import { ActionLink, Photo, SectionHeading } from "../components/ui";
import { customers, products } from "./site";

const services = [
  {
    label: "Supply",
    name: "Pengadaan Barang",
    description: "Koordinasi kebutuhan barang berdasarkan permintaan dan kesepakatan mitra.",
    icon: Package,
  },
  {
    label: "Distribution",
    name: "Distribusi",
    description: "Koordinasi penyaluran barang sesuai kebutuhan pengiriman.",
    icon: Truck,
  },
  {
    label: "Partnership",
    name: "Kerja Sama Bisnis",
    description: "Diskusi kebutuhan pasokan dan peluang kerja sama jangka panjang.",
    icon: Handshake,
  },
];

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <a href="#isi" className="skip-link">Lewati ke konten</a>
      <Header />
      <main id="isi" tabIndex={-1}>
        <HeroParallax>
          <div className="hero-copy">
            <p className="eyebrow"><span>Supplier &amp; Distributor <span aria-hidden>·</span> Bandung Barat</span></p>
            <h1 id="hero-title">Mitra Pasokan Ayam.<br /><span>Solusi Distribusi.</span></h1>
            <ActionLink href="#kontak">Hubungi tim sales</ActionLink>
          </div>
        </HeroParallax>

        <section id="produk" className="section-space" aria-labelledby="produk-title">
          <div className="container-shell">
            <SectionHeading id="produk-title" label="Our Products" title="Produk unggulan RDW." description="Pasokan ayam untuk kebutuhan perdagangan dan produksi." />
            <div className="grid gap-6 min-[761px]:grid-cols-2">
              {products.map((product) => (
                <article className="tile product-card" data-reveal key={product.name}>
                  <Photo
                    className="product-photo"
                    src={product.photo}
                    alt={product.alt}
                    sizes="(max-width: 760px) 90vw, (max-width: 1333px) 45vw, 588px"
                    parallax
                  />
                  <div className="product-body">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <ActionLink
                      href="#kontak"
                      label={`Minta penawaran ${product.name}`}
                      variant="navy"
                    >
                      Minta penawaran
                    </ActionLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pelanggan" className="section-space bg-mist" aria-labelledby="pelanggan-title">
          <div className="container-shell">
            <SectionHeading id="pelanggan-title" label="Our Customers" title="Melayani berbagai sektor usaha." description="RDW berfokus pada kebutuhan pasokan ayam untuk pelanggan bisnis (B2B)." />
            <div className="grid gap-5 min-[541px]:grid-cols-2 min-[1001px]:grid-cols-4">
              {customers.map((customer) => (
                <article className="tile customer-card" data-reveal key={customer.name}>
                  <Photo
                    className="customer-photo"
                    src={customer.photo}
                    alt={customer.alt}
                    sizes="(max-width: 540px) 90vw, (max-width: 1000px) 45vw, (max-width: 1333px) 23vw, 285px"
                  />
                  <div className="tile-body">
                    <p className="category" lang="en">{customer.category}</p>
                    <h3>{customer.name}</h3>
                    <p>{customer.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SupplyChain />

        <section id="tentang" className="section-space about" aria-labelledby="tentang-title">
          <AboutParallax>
            <SectionHeading
              id="tentang-title"
              label="Tentang kami"
              title="Mitra pasokan untuk bisnis Anda."
              description="RDW bergerak di bidang pengadaan dan distribusi ayam hidup serta ayam gebrus untuk pasar tradisional, rumah potong ayam, industri pengolahan, dan pedagang besar. Kami berfokus pada koordinasi pasokan sesuai kebutuhan dan kesepakatan mitra bisnis."
            />
          </AboutParallax>
        </section>

        <CompanyMetrics />

        <section id="layanan" className="section-space bg-mist" aria-labelledby="layanan-title">
          <div className="container-shell">
            <SectionHeading id="layanan-title" label="Layanan" title="Dukungan untuk kebutuhan pasokan ayam." />
            <div className="grid gap-5 min-[761px]:grid-cols-3">
              {services.map(({ name, label, description, icon: Icon }) => (
                <article className="tile service-card" key={name}>
                  <div className="icon-box"><Icon size={23} strokeWidth={1.65} aria-hidden /></div>
                  <p className="category" lang="en">{label}</p>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <BusinessAdvantages />
        <CompanyOperations />

        <section id="mitra" className="section-space partnership" aria-labelledby="mitra-title">
          <div className="container-shell partnership-inner" data-reveal>
            <SectionHeading
              id="mitra-title"
              label="Kemitraan"
              title="Mari bangun kemitraan bersama RDW."
              description="Diskusikan jenis ayam, volume kebutuhan, tujuan pengiriman, dan ketentuan kerja sama dengan tim RDW."
            />
            <ActionLink href="#kontak" variant="navy">Informasi kontak</ActionLink>
          </div>
        </section>
      </main>
      <CorporateFooter />
      <PageMotion />
    </>
  );
}
