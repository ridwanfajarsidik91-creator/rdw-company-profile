"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { navigation } from "../app/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="container-shell header-inner">
        <a href="#home" className="brand" aria-label="RDW — Supplier & Distributor, beranda" onClick={() => setIsOpen(false)}>
          <Image src="/images/logo-rdw.webp" alt="" width={108} height={48} loading="eager" unoptimized />
          <span>Supplier &amp;<br />Distributor</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label="Menu navigasi"
          aria-controls="navigasi"
          aria-expanded={isOpen}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} strokeWidth={1.7} aria-hidden /> : <Menu size={22} strokeWidth={1.7} aria-hidden />}
        </button>
        <nav className="navigation" aria-label="Navigasi utama" id="navigasi" data-open={isOpen}>
          {navigation.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={href === "#kontak" ? "navigation-contact" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
