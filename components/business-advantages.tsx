import { ClipboardList, Handshake, MessagesSquare, PackageCheck, Truck } from "lucide-react";
import { SectionHeading } from "./ui";

const advantages = [
  { title: "Koordinasi pasokan", description: "Pembahasan dimulai dari jenis ayam, jumlah, dan jadwal yang dibutuhkan mitra.", icon: ClipboardList },
  { title: "Kualitas produk", description: "Jenis dan spesifikasi produk dibahas di awal agar pesanan sesuai kebutuhan usaha.", icon: PackageCheck },
  { title: "Efisiensi distribusi", description: "Tujuan dan jadwal pengiriman dibahas bersama untuk mendukung perencanaan distribusi.", icon: Truck },
  { title: "Kemitraan jangka panjang", description: "RDW terbuka untuk membahas kebutuhan pasokan rutin dan ketentuan kerja sama.", icon: Handshake },
  { title: "Pelayanan bisnis profesional", description: "Mitra dapat membahas penawaran, pesanan, dan kebutuhan pengiriman dengan tim RDW.", icon: MessagesSquare },
];

export function BusinessAdvantages() {
  return (
    <section id="keunggulan" className="section-space" aria-labelledby="keunggulan-title">
      <div className="container-shell advantages-layout">
        <SectionHeading id="keunggulan-title" label="Keunggulan RDW" title="Pasokan yang direncanakan bersama." />
        <ul className="advantages-list" role="list">
          {advantages.map(({ title, description, icon: Icon }) => (
            <li key={title} data-reveal>
              <div className="icon-box"><Icon size={21} strokeWidth={1.65} aria-hidden="true" /></div>
              <div>
                <h3><span className="headline-motion">{title}</span></h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
