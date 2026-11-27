import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ProductParallax } from "./scroll-parallax";

export function SectionHeading({ label, title, description, id }: {
  label: string;
  title: string;
  description?: string;
  id: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">{label}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export function ActionLink({ href, children, label, variant = "gold", external = false }: {
  href: string;
  children: React.ReactNode;
  label?: string;
  variant?: "gold" | "navy";
  external?: boolean;
}) {
  const Icon = external ? ArrowUpRight : ArrowRight;

  return (
    <a
      className="action-link"
      data-variant={variant}
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}<Icon size={17} aria-hidden />
    </a>
  );
}

export function Photo({ src, alt, sizes, className, caption = "Foto ilustrasi", priority = false, parallax = false }: {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  caption?: string;
  priority?: boolean;
  parallax?: boolean;
}) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );

  return (
    <figure className={`photo ${className}`}>
      {parallax ? <ProductParallax>{image}</ProductParallax> : <div className="photo-image">{image}</div>}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
