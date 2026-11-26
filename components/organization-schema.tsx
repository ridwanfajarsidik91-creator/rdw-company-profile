import { site } from "../app/site";

export function OrganizationSchema() {
  const { address } = site;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.name,
    alternateName: "RDW",
    url: site.url,
    logo: new URL(site.logo, site.url).href,
    description: site.description,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.streetAddress}, ${address.district}`,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
    />
  );
}
