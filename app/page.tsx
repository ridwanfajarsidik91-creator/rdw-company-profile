import { Globe2, Handshake, Mail, MapPin, Package, Send, Truck } from "lucide-react";
import { Header } from "../components/header";
import { ActionLink, Photo, SectionHeading } from "../components/ui";
import { customers, products, salesLink, site } from "./site";

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

const contacts = [
  { label: "Domain", text: site.domain, icon: Globe2 },
  { label: "General Inquiries", text: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Sales & Business Inquiries", text: site.sales, href: salesLink(), icon: Send },
];

export default function HomePage() {
  return (
    <>
      <a href="#isi" className="skip-link">Lewati ke konten</a>
      <Header />
      <main id="isi" tabIndex={-1}>
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="container-shell hero-grid">
            <div>
              <p className="eyebrow"><span>Supplier &amp; Distributor <span aria-hidden>·</span> Bandung Barat</span></p>
              <h1 id="hero-title">Mitra Pasokan Ayam.<br /><span>Solusi Distribusi.</span></h1>
              <p className="hero-description">
                RDW menyediakan ayam hidup dan ayam gebrus untuk kebutuhan pasar tradisional, rumah potong ayam, serta industri pengolahan ayam.
              </p>
              <ActionLink href={salesLink()}>Hubungi tim sales</ActionLink>
            </div>
            <Photo
              className="hero-photo"
              src={products[0].photo}
              alt={products[0].alt}
              caption="Ayam Gebrus / Foto ilustrasi"
              sizes="(max-width: 760px) 90vw, (max-width: 1333px) 42vw, 550px"
              priority
            />
          </div>
        </section>

        <section id="produk" className="section-space" aria-labelledby="produk-title">
          <div className="container-shell">
            <SectionHeading id="produk-title" label="Our Products" title="Produk unggulan RDW." description="Pasokan ayam untuk kebutuhan perdagangan dan produksi." />
            <div className="grid gap-6 min-[761px]:grid-cols-2">
              {products.map((product) => (
                <article className="tile product-card" key={product.name}>
                  <Photo
                    className="product-photo"
                    src={product.photo}
                    alt={product.alt}
                    sizes="(max-width: 760px) 90vw, (max-width: 1333px) 45vw, 588px"
                  />
                  <div className="product-body">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <ActionLink
                      href={salesLink(`Permintaan Penawaran ${product.name}`)}
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
                <article className="tile customer-card" key={customer.name}>
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

        <section id="tentang" className="section-space about" aria-labelledby="tentang-title">
          <div className="container-shell">
            <SectionHeading
              id="tentang-title"
              label="Tentang kami"
              title="Mitra pasokan untuk bisnis Anda."
              description="RDW bergerak di bidang pengadaan dan distribusi ayam hidup serta ayam gebrus untuk pasar tradisional, rumah potong ayam, industri pengolahan, dan pedagang besar. Kami berfokus pada koordinasi pasokan sesuai kebutuhan dan kesepakatan mitra bisnis."
            />
          </div>
        </section>

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

        <section id="mitra" className="section-space partnership" aria-labelledby="mitra-title">
          <div className="container-shell partnership-inner">
            <SectionHeading
              id="mitra-title"
              label="Kemitraan"
              title="Mari bangun kemitraan bersama RDW."
              description="Diskusikan jenis ayam, volume kebutuhan, tujuan pengiriman, dan ketentuan kerja sama dengan tim RDW."
            />
            <ActionLink href="#kontak" variant="navy">Informasi kontak</ActionLink>
          </div>
        </section>

        <section id="kontak" className="section-space contact" aria-labelledby="kontak-title">
          <div className="container-shell">
            <SectionHeading id="kontak-title" label="Kontak" title="Mari mulai percakapan." />
            <address className="contact-address">
              <MapPin size={22} aria-hidden />
              <div>
                <strong>RDW — Supplier &amp; Distributor</strong><br />
                Jl. Cipeusing, RT.04/RW.04, Kertawangi,<br />
                Kec. Cisarua, Kabupaten Bandung Barat,<br />
                Jawa Barat 40551, Indonesia
              </div>
            </address>
            <div className="contact-grid grid gap-4 min-[761px]:grid-cols-3">
              {contacts.map(({ label, text, href, icon: Icon }) => (
                <div className="contact-card" key={label}>
                  <Icon className="contact-icon" size={21} strokeWidth={1.7} aria-hidden />
                  <div>
                    <p lang="en">{label}</p>
                    {href ? <a href={href}>{text}</a> : <strong>{text}</strong>}
                  </div>
                </div>
              ))}
            </div>
            <ActionLink href={site.maps} external>Petunjuk Arah — Google Maps</ActionLink>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container-shell footer-inner">
          <p>© 2026 RDW — Supplier &amp; Distributor.</p>
          <p>{site.domain}</p>
        </div>
      </footer>
    </>
  );
}
