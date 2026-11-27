import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { site } from "../app/site";
import { ActionLink, SectionHeading } from "./ui";
import "./corporate-footer.css";

const footerNavigation = [
  { href: "#home", label: "Home" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#produk", label: "Produk" },
  { href: "#rantai-pasokan", label: "Rantai Pasokan" },
  { href: "#mitra", label: "Kemitraan" },
];

export function CorporateFooter() {
  const { address } = site;

  return (
    <footer id="kontak" className="corporate-footer" aria-labelledby="kontak-title">
      <div className="container-shell">
        <div className="footer-heading">
          <SectionHeading id="kontak-title" label="Kontak" title="Mari mulai percakapan." />
        </div>

        <div className="footer-columns">
          <div className="footer-brand" data-reveal>
            <div className="footer-logo">
              <Image src={site.logo} alt="Logo RDW" width={110} height={49} unoptimized />
            </div>
            <p className="footer-brand-label">Supplier &amp; Distributor</p>
            <p>Mitra pengadaan dan distribusi ayam untuk kebutuhan perdagangan dan industri.</p>
            <p className="footer-location">Bandung Barat, Jawa Barat, Indonesia.</p>
          </div>

          <nav className="footer-navigation" aria-labelledby="footer-navigation-title" data-reveal>
            <h3 id="footer-navigation-title"><span className="headline-motion">Navigasi</span></h3>
            <ul role="list">
              {footerNavigation.map(({ href, label }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer-contact" data-reveal>
            <h3><span className="headline-motion">Hubungi Kami</span></h3>
            <address>
              <div className="footer-contact-line">
                <MapPin size={18} strokeWidth={1.7} aria-hidden="true" />
                <p>
                  {address.streetAddress},<br />
                  {address.district}, {address.addressLocality},<br />
                  {address.addressRegion} {address.postalCode}, Indonesia
                </p>
              </div>
              <div className="footer-contact-line">
                <Mail size={18} strokeWidth={1.7} aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </address>
            <ActionLink href={site.maps} external>Petunjuk Arah — Google Maps</ActionLink>
          </div>
        </div>

        <div className="footer-bottom" data-reveal>
          <p>© 2026 RDW — Supplier &amp; Distributor.</p>
          <p lang="en">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
