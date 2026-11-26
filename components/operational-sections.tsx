import Image from "next/image";
import { operationPhotos, verifiedMetrics } from "../app/operational-data";
import { AnimatedCounter } from "./animated-counter";
import { SectionHeading } from "./ui";

export function CompanyMetrics() {
  if (!verifiedMetrics.length) return null;

  return (
    <section id="rdw-dalam-angka" className="section-space bg-mist" aria-labelledby="rdw-dalam-angka-title">
      <div className="container-shell">
        <SectionHeading id="rdw-dalam-angka-title" label="Statistik perusahaan" title="RDW dalam angka." />
        <dl className="metrics-grid">
          {verifiedMetrics.map(({ label, value, unit, context }) => (
            <div className="tile metric-tile" key={label}>
              <dt>{label}</dt>
              <dd><AnimatedCounter value={value} /> {unit}</dd>
              <dd>{context}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function CompanyOperations() {
  if (!operationPhotos.length) return null;

  return (
    <section id="operasional" className="section-space bg-mist" aria-labelledby="operasional-title">
      <div className="container-shell">
        <SectionHeading id="operasional-title" label="Operasional RDW" title="Dokumentasi kegiatan RDW." />
        <div className="operations-grid">
          {operationPhotos.map(({ src, width, height, alt, caption }) => (
            <figure className="photo operations-photo" data-reveal key={src}>
              <Image src={src} width={width} height={height} alt={alt}
                sizes="(max-width: 760px) 90vw, (max-width: 1333px) 90vw, 1200px" />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
