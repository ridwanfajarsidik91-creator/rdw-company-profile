"use client";

import { Bird, Boxes } from "lucide-react";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "./ui";

const destinations = ["Pasar Tradisional", "Rumah Potong Ayam", "Industri Pengolahan"];

function Connector({ progress, horizontal = false }: { progress: MotionValue<number>; horizontal?: boolean }) {
  return (
    <div className={horizontal ? "chain-line chain-line-horizontal" : "chain-line"} aria-hidden="true">
      <motion.span style={horizontal ? { scaleX: progress } : { scaleY: progress }} />
    </div>
  );
}

export function SupplyChain() {
  const diagram = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: diagram, offset: ["start 84%", "end 65%"] });
  const revealedProgress = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress > revealedProgress.get()) revealedProgress.set(progress);
  });
  const incoming = useTransform(revealedProgress, [0, 0.35], [0, 1]);
  const outgoing = useTransform(revealedProgress, [0.31, 0.7], [0, 1]);
  const branch = useTransform(revealedProgress, [0.66, 0.9], [0, 1]);
  const destinationsProgress = useTransform(revealedProgress, [0.83, 1], [0, 1]);

  return (
    <section id="rantai-pasokan" className="section-space supply-section" aria-labelledby="rantai-pasokan-title">
      <div className="container-shell">
        <SectionHeading id="rantai-pasokan-title" label="Rantai pasokan" title="Dari pemasok ke pelanggan bisnis." />
        <ol className="chain-diagram" ref={diagram} role="list" aria-label="Alur distribusi RDW">
          <li data-reveal>
            <div className="chain-node"><Bird size={22} aria-hidden="true" /> Pemasok Ayam</div>
            <Connector progress={incoming} />
          </li>
          <li data-reveal>
            <div className="chain-node chain-node-rdw"><Boxes size={22} aria-hidden="true" /> RDW — Supplier &amp; Distributor</div>
            <Connector progress={outgoing} />
          </li>
          <li className="chain-branches">
            <Connector progress={branch} horizontal />
            <ul className="chain-destinations" role="list">
              {destinations.map((destination) => (
                <li key={destination} data-reveal>
                  <Connector progress={destinationsProgress} />
                  <span className="chain-node">{destination}</span>
                </li>
              ))}
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
