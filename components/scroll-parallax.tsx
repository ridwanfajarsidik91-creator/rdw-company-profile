"use client";

import { ArrowDown } from "lucide-react";
import { motion, useScroll, useSpring, useTransform, type UseScrollOptions } from "motion/react";
import Image from "next/image";
import { useRef, useSyncExternalStore, type ReactNode, type RefObject } from "react";

const mobileQuery = "(max-width: 760px)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreferences(onChange: () => void) {
  const queries = [window.matchMedia(mobileQuery), window.matchMedia(reducedMotionQuery)];
  queries.forEach((query) => query.addEventListener("change", onChange));
  return () => queries.forEach((query) => query.removeEventListener("change", onChange));
}

function getIntensity() {
  if (window.matchMedia(reducedMotionQuery).matches) return 0;
  return window.matchMedia(mobileQuery).matches ? 0.5 : 1;
}

function useParallax(target: RefObject<HTMLElement | null>, offset: UseScrollOptions["offset"]) {
  const intensity = useSyncExternalStore(subscribeToMotionPreferences, getIntensity, () => 0);
  const { scrollYProgress } = useScroll({ target, offset });
  const progress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 24,
    mass: 0.46,
    restDelta: 0.001,
    skipInitialAnimation: true,
  });
  return { progress, intensity };
}

export function HeroParallax({ children }: { children: ReactNode }) {
  const target = useRef<HTMLElement>(null);
  const { progress, intensity } = useParallax(target, ["start 79px", "end 79px"]);
  const y = useTransform(progress, [0, 1], [0, 116 * intensity]);
  const scale = useTransform(progress, [0, 1], [1, 1 + 0.055 * intensity]);

  return (
    <section ref={target} id="home" className="hero" aria-labelledby="hero-title">
      <motion.div className="hero-parallax-background" aria-hidden="true" style={{ y, scale }}>
        <Image
          src="/images/hero-ayam-rdw.webp"
          alt=""
          fill
          sizes="(max-width: 760px) 120svh, 100vw"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container-shell hero-content">{children}</div>
      <a className="hero-scroll-cue" href="#produk" aria-label="Lihat produk">
        <ArrowDown size={20} strokeWidth={1.6} aria-hidden="true" />
      </a>
    </section>
  );
}

export function ProductParallax({ children }: { children: ReactNode }) {
  const target = useRef<HTMLDivElement>(null);
  const { progress, intensity } = useParallax(target, ["start 84%", "end 30%"]);
  const y = useTransform(progress, [0, 1], [-22 * intensity, 22 * intensity]);

  return (
    <div ref={target} className="photo-image">
      <motion.div className="product-parallax-plane" style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function AboutParallax({ children }: { children: ReactNode }) {
  const target = useRef<HTMLDivElement>(null);
  const { progress, intensity } = useParallax(target, ["start 84%", "end 24%"]);
  const copyY = useTransform(progress, [0, 1], [-8 * intensity, 8 * intensity]);
  const accentY = useTransform(progress, [0, 1], [`${6 * intensity}px`, `${-6 * intensity}px`]);
  const style = { y: copyY, "--about-accent-y": accentY };

  return (
    <div ref={target} className="container-shell">
      <motion.div className="about-parallax-copy" style={style}>
        {children}
      </motion.div>
    </div>
  );
}
