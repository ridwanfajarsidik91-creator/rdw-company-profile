"use client";

import { ArrowUp } from "lucide-react";
import { inView } from "motion";
import { motion, useScroll } from "motion/react";
import { useEffect, useRef } from "react";

export function PageMotion() {
  const { scrollYProgress } = useScroll();
  const backToTop = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const stopReveals = inView("[data-reveal]:not([data-revealed])", (element) => {
      element.setAttribute("data-revealed", "");
    }, { amount: 0.15 });

    const header = document.querySelector(".site-header");
    const control = backToTop.current;
    const updateScrollState = () => {
      header?.toggleAttribute("data-scrolled", window.scrollY > 12);
      control?.toggleAttribute("data-visible", window.scrollY > window.innerHeight * 0.8);
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      stopReveals();
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <a ref={backToTop} href="#home" className="back-to-top" aria-label="Kembali ke atas">
        <ArrowUp size={19} aria-hidden="true" />
      </a>
    </>
  );
}
