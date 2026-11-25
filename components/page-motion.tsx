"use client";

import { inView, scroll } from "motion";
import { animate } from "motion/mini";
import { useEffect } from "react";

export function PageMotion() {
  useEffect(() => {
    const stopReveals = inView("[data-reveal]:not([data-revealed])", (element) => {
      element.setAttribute("data-revealed", "");
    }, { amount: 0.15 });

    const header = document.querySelector(".site-header");
    const updateHeader = () => header?.toggleAttribute("data-scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const hero = document.querySelector<HTMLElement>("#home");
    const image = hero?.querySelector<HTMLImageElement>(".hero-photo img");
    const desktopMotion = window.matchMedia(
      "(min-width: 901px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let stopParallax: (() => void) | undefined;

    function updateParallax() {
      stopParallax?.();
      stopParallax = undefined;
      if (!desktopMotion.matches || !hero || !image) return;

      const parallax = animate(image, {
        transform: ["translateY(0px)", "translateY(18px)"],
      }, { ease: "linear" });
      const detach = scroll(parallax, { target: hero, offset: ["start start", "end start"] });
      stopParallax = () => {
        // Cancel first so Motion does not commit the scrolled transform on detach.
        parallax.cancel();
        detach();
      };
    }

    updateParallax();
    desktopMotion.addEventListener("change", updateParallax);

    return () => {
      stopReveals();
      window.removeEventListener("scroll", updateHeader);
      desktopMotion.removeEventListener("change", updateParallax);
      stopParallax?.();
    };
  }, []);

  return null;
}
