import { site } from "@/lib/content";

type JsonLdSchema = Record<string, unknown>;

const organization: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  foundingDate: String(site.founded),
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Erbil",
    addressRegion: "Kurdistan Region",
    addressCountry: "IQ",
  },
  sameAs: [site.instagram],
};

const website: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

const schema: JsonLdSchema[] = [organization, website];

export default function JsonLd() {
  return (
    <>
      {schema.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
