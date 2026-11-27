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
    let scrollFrame = 0;

    const clearHash = () => {
      if (window.location.hash) {
        const { pathname, search } = window.location;
        window.history.replaceState(window.history.state, "", pathname + search);
      }
    };

    const openFragment = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (!target) return;
      clearHash();
      target.scrollIntoView({ behavior: "instant", block: "start" });
    };

    const handleAnchor = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
          event.shiftKey || event.altKey || !(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;

      event.preventDefault();
      clearHash();
      window.cancelAnimationFrame(scrollFrame);
      // Wait for the mobile navigation to close before calculating the scroll position.
      scrollFrame = window.requestAnimationFrame(() => {
        if (!target.hasAttribute("tabindex")) target.tabIndex = -1;
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: "start" });
      });
    };
    const updateScrollState = () => {
      header?.toggleAttribute("data-scrolled", window.scrollY > 12);
      control?.toggleAttribute("data-visible", window.scrollY > window.innerHeight * 0.8);
    };
    updateScrollState();
    openFragment();
    window.addEventListener("click", handleAnchor);
    window.addEventListener("hashchange", openFragment);
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      stopReveals();
      window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("click", handleAnchor);
      window.removeEventListener("hashchange", openFragment);
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
