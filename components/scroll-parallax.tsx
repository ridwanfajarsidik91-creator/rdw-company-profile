"use client";

import { motion, useScroll, useSpring, useTransform, type UseScrollOptions } from "motion/react";
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
  return window.matchMedia(mobileQuery).matches ? 0.36 : 1;
}

function useParallax(target: RefObject<HTMLElement | null>, offset: UseScrollOptions["offset"]) {
  const intensity = useSyncExternalStore(subscribeToMotionPreferences, getIntensity, () => 0);
  const { scrollYProgress } = useScroll({ target, offset });
  const progress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 28,
    mass: 0.55,
    restDelta: 0.001,
    skipInitialAnimation: true,
  });
  return { progress, intensity };
}

export function HeroParallax({ children, photo }: { children: ReactNode; photo: ReactNode }) {
  const target = useRef<HTMLElement>(null);
  const { progress, intensity } = useParallax(target, ["start 79px", "end 79px"]);
  const foregroundY = useTransform(progress, [0, 0.88], [0, -84 * intensity]);
  const backgroundY = useTransform(progress, [0, 0.88], [0, 24 * intensity]);

  return (
    <section ref={target} id="home" className="hero" aria-labelledby="hero-title">
      <motion.div className="hero-parallax-background" aria-hidden style={{ y: backgroundY }} />
      <div className="container-shell hero-grid">
        {children}
        <motion.div className="hero-parallax-foreground" style={{ y: foregroundY }}>{photo}</motion.div>
      </div>
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
      <motion.div className="about-parallax-copy" data-reveal style={style}>
        {children}
      </motion.div>
    </div>
  );
}
