export const site = {
  name: "Tunica Group",
  shortName: "Tunica",
  tagline: "Building lasting value across real estate, fashion & hospitality.",
  description:
    "Tunica Group is a diversified enterprise founded in 2018 in Erbil, Iraq, operating across real estate development, luxury fashion, and hospitality.",
  founded: 2018,
  url: "https://tunicagroup.com",
  email: "info@tunicagroup.com",
  phone: "+964 750 521 0004",
  phoneHref: "+9647505210004",
  instagram: "https://www.instagram.com/tunica.group",
  instagramHandle: "@tunica.group",
  address: {
    line1: "Phoenix Tower 1002, Zagros Street",
    line2: "44001 Erbil, Iraq",
    maps: "https://www.google.com/maps/search/?api=1&query=Phoenix+Tower+Zagros+Street+Erbil+Iraq",
  },
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Sectors", href: "/#sectors" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export type Sector = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: { label: string; value: string }[];
  body: string[];
};

export const sectors: Sector[] = [
  {
    slug: "real-estate",
    index: "01",
    name: "Real Estate",
    kicker: "Phoenix Tower & Developments",
    short:
      "Landmark mixed-use developments in the heart of Erbil's commercial district — designed for business, lifestyle, and long-term growth.",
    description:
      "Tunica's real estate arm develops, renovates, and extends mixed-use properties across Erbil, with Phoenix Tower as its flagship — a hub for business, lifestyle, and growth designed with sustainability and smart technology at its core.",
    image: "/images/phoenix-tower.jpg",
    imageAlt: "Phoenix Tower rising above Erbil's commercial district",
    highlights: [
      { label: "New Builds", value: "50+" },
      { label: "Renovations", value: "50+" },
      { label: "Extensions", value: "50+" },
    ],
    body: [
      "Our real estate division has delivered landmark mixed-use developments across Erbil, combining residential, retail, and commercial space under a single, considered standard of quality.",
      "Phoenix Tower, our flagship, sits in the heart of the city's commercial district — a hub for business, lifestyle, and growth, designed with sustainability and smart technology at its core.",
      "From ground-up new builds to renovations and extensions, every project is guided by the same measure: enduring value for the people who live and work inside it.",
    ],
  },
  {
    slug: "fashion",
    index: "02",
    name: "Fashion & Retail",
    kicker: "Kiton Iraq",
    short:
      "Exclusive official distributor of Kiton across Iraq — the celebrated Neapolitan house of handmade menswear and timeless tailoring.",
    description:
      "Tunica is the exclusive official distributor of Kiton across Iraq — a prestigious Italian luxury house founded in Naples in 1968, renowned for handmade menswear and timeless tailoring.",
    image: "/images/kiton-boutique.jpg",
    imageAlt: "Interior of the Kiton boutique, Erbil",
    highlights: [
      { label: "House Founded", value: "1968" },
      { label: "Origin", value: "Naples" },
      { label: "Coverage", value: "Iraq" },
    ],
    body: [
      "Tunica is the exclusive official distributor of Kiton across Iraq — bringing one of the world's most respected luxury houses to the region.",
      "Founded in Naples in 1968, Kiton is renowned for handmade menswear and timeless tailoring, where each garment reflects generations of Neapolitan craftsmanship.",
      "Our boutique offers a curated selection of Kiton's collections in a setting built to match the quality of the clothing itself.",
    ],
  },
  {
    slug: "hospitality",
    index: "03",
    name: "Hospitality",
    kicker: "Chêne Café",
    short:
      "A French-style café within Phoenix Tower — one of Erbil's finest café experiences, and the Group's first step into hospitality.",
    description:
      "Chêne Café is a French-style café within Phoenix Tower, offering one of Erbil's finest café experiences in a vibrant, inviting atmosphere — the Group's first step into hospitality.",
    image: "/images/chene-storefront.jpg",
    imageAlt: "Chêne Café storefront signage at Phoenix Tower",
    highlights: [
      { label: "Concept", value: "French" },
      { label: "Location", value: "Phoenix Tower" },
      { label: "Chapter", value: "First" },
    ],
    body: [
      "Chêne Café is a French-style café set within Phoenix Tower, offering one of Erbil's finest café experiences in a vibrant, inviting atmosphere.",
      "It marks the Group's first step into hospitality — an extension of the same attention to detail that defines our developments and retail.",
      "From the cup to the counter to the room around it, Chêne is designed as a destination, not just a stop.",
    ],
  },
];

export type Project = {
  title: string;
  sector: string;
  status: "Completed" | "Ongoing";
  location: string;
  image: string;
  imageAlt: string;
  blurb: string;
};

export const projects: Project[] = [
  {
    title: "Phoenix Tower",
    sector: "Real Estate",
    status: "Ongoing",
    location: "Zagros Street, Erbil",
    image: "/images/phoenix-tower.jpg",
    imageAlt: "Phoenix Tower exterior",
    blurb:
      "A flagship mixed-use tower — residences, retail, and hospitality anchored in Erbil's commercial district.",
  },
  {
    title: "Phoenix Tower — Aerial",
    sector: "Real Estate",
    status: "Ongoing",
    location: "Zagros Street, Erbil",
    image: "/images/phoenix-aerial.jpg",
    imageAlt: "Aerial view of Phoenix Tower and surrounding parkland",
    blurb:
      "The tower in context — overlooking parkland and the growing Erbil skyline.",
  },
  {
    title: "Kiton Iraq Boutique",
    sector: "Fashion & Retail",
    status: "Completed",
    location: "Phoenix Tower, Erbil",
    image: "/images/kiton-boutique.jpg",
    imageAlt: "Kiton boutique interior",
    blurb:
      "The exclusive Kiton retail environment in Iraq — Neapolitan tailoring in a considered, luxurious setting.",
  },
  {
    title: "Kiton — Retail Interior",
    sector: "Fashion & Retail",
    status: "Completed",
    location: "Phoenix Tower, Erbil",
    image: "/images/kiton-interior.jpg",
    imageAlt: "Kiton retail interior detail",
    blurb:
      "Warm materials, natural light, and craftsmanship carried from the garments into the space.",
  },
  {
    title: "Chêne Café",
    sector: "Hospitality",
    status: "Completed",
    location: "Phoenix Tower, Erbil",
    image: "/images/chene-storefront.jpg",
    imageAlt: "Chêne Café storefront",
    blurb:
      "A French-style café concept — the Group's first hospitality venture, set within Phoenix Tower.",
  },
  {
    title: "Chêne Café — Brand",
    sector: "Hospitality",
    status: "Completed",
    location: "Phoenix Tower, Erbil",
    image: "/images/chene-bag.jpg",
    imageAlt: "Chêne Café branded takeaway packaging",
    blurb:
      "Considered branding across every touchpoint, from the storefront to the cup in hand.",
  },
];

export const stats = [
  { value: "2018", label: "Founded in Erbil" },
  { value: "3", label: "Sectors" },
  { value: "150+", label: "Projects delivered" },
  { value: "1", label: "Standard of quality" },
];
