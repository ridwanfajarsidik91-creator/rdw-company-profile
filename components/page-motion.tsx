"use client";

import { inView } from "motion";
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

    return () => {
      stopReveals();
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return null;
}
