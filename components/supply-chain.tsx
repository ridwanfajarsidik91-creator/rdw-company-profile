import { Bird, Boxes } from "lucide-react";
import { SectionHeading } from "./ui";

const destinations = ["Pasar Tradisional", "Rumah Potong Ayam", "Industri Pengolahan"];

function Connector({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <div className={horizontal ? "chain-line chain-line-horizontal" : "chain-line"} aria-hidden="true">
      <span />
    </div>
  );
}

export function SupplyChain() {
  return (
    <section id="rantai-pasokan" className="section-space supply-section" aria-labelledby="rantai-pasokan-title">
      <div className="container-shell">
        <SectionHeading id="rantai-pasokan-title" label="Rantai pasokan" title="Dari pemasok ke pelanggan bisnis." />
        <ol className="chain-diagram" data-reveal role="list" aria-label="Alur distribusi RDW">
          <li data-reveal>
            <div className="chain-node"><Bird size={22} aria-hidden="true" /> Pemasok Ayam</div>
            <Connector />
          </li>
          <li data-reveal>
            <div className="chain-node chain-node-rdw"><Boxes size={22} aria-hidden="true" /> RDW — Supplier &amp; Distributor</div>
            <Connector />
          </li>
          <li className="chain-branches">
            <Connector horizontal />
            <ul className="chain-destinations" role="list">
              {destinations.map((destination) => (
                <li key={destination} data-reveal>
                  <Connector />
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
