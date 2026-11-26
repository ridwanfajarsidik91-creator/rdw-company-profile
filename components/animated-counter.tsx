"use client";

import { animate } from "motion";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

const formatter = new Intl.NumberFormat("id-ID");

export function AnimatedCounter({ value }: { value: number }) {
  const number = useRef<HTMLSpanElement>(null);
  const visible = useInView(number, { once: true });
  const formatted = formatter.format(value);
  const fractionDigits = formatted.split(",")[1]?.length ?? 0;

  useEffect(() => {
    const element = number.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!visible || !element || preference.matches) return;

    const units = 10 ** fractionDigits;
    const animation = animate(0, value, {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (current) => {
        element.textContent = formatter.format(Math.trunc(current * units) / units);
      },
      onComplete: () => { element.textContent = formatter.format(value); },
    });
    const finish = () => {
      animation.stop();
      element.textContent = formatter.format(value);
    };
    preference.addEventListener("change", finish);
    return () => {
      preference.removeEventListener("change", finish);
      finish();
    };
  }, [formatted, fractionDigits, value, visible]);

  return (
    <>
      <span className="sr-only">{formatted}</span>
      <span ref={number} aria-hidden="true" className="counter-value"
        style={{ minInlineSize: `${formatted.length}ch` }}>{formatted}</span>
    </>
  );
}
