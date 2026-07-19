import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

/** Locale-independent company data. */
export const site = {
  name: "Tunica Group",
  shortName: "Tunica",
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

/** Prefix a path with the active locale, e.g. localeHref("ar", "/about") → "/ar/about". */
export function localeHref(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export type SectorSlug = "real-estate" | "fashion" | "hospitality";

/** Structural sector data — text comes from the dictionary, keyed by slug. */
export const sectorMeta: {
  slug: SectorSlug;
  index: string;
  image: string;
  imageAlt: string;
}[] = [
  {
    slug: "real-estate",
    index: "01",
    image: "/images/phoenix-tower.jpg",
    imageAlt: "Phoenix Tower rising above Erbil's commercial district",
  },
  {
    slug: "fashion",
    index: "02",
    image: "/images/kiton-boutique.jpg",
    imageAlt: "Interior of the Kiton boutique, Erbil",
  },
  {
    slug: "hospitality",
    index: "03",
    image: "/images/chene-storefront.jpg",
    imageAlt: "Chêne Café storefront signage at Phoenix Tower",
  },
];

export type ProjectId =
  | "phoenix-tower"
  | "phoenix-aerial"
  | "kiton-boutique"
  | "kiton-interior"
  | "chene-storefront"
  | "chene-bag";

/** Structural project data — text (title, blurb, location) comes from the dictionary. */
export const projectMeta: {
  id: ProjectId;
  sectorKey: "Real Estate" | "Fashion & Retail" | "Hospitality";
  statusKey: "Completed" | "Ongoing";
  image: string;
  imageAlt: string;
}[] = [
  {
    id: "phoenix-tower",
    sectorKey: "Real Estate",
    statusKey: "Ongoing",
    image: "/images/phoenix-tower.jpg",
    imageAlt: "Phoenix Tower exterior",
  },
  {
    id: "phoenix-aerial",
    sectorKey: "Real Estate",
    statusKey: "Ongoing",
    image: "/images/phoenix-aerial.jpg",
    imageAlt: "Aerial view of Phoenix Tower and surrounding parkland",
  },
  {
    id: "kiton-boutique",
    sectorKey: "Fashion & Retail",
    statusKey: "Completed",
    image: "/images/kiton-boutique.jpg",
    imageAlt: "Kiton boutique interior",
  },
  {
    id: "kiton-interior",
    sectorKey: "Fashion & Retail",
    statusKey: "Completed",
    image: "/images/kiton-interior.jpg",
    imageAlt: "Kiton retail interior detail",
  },
  {
    id: "chene-storefront",
    sectorKey: "Hospitality",
    statusKey: "Completed",
    image: "/images/chene-storefront.jpg",
    imageAlt: "Chêne Café storefront",
  },
  {
    id: "chene-bag",
    sectorKey: "Hospitality",
    statusKey: "Completed",
    image: "/images/chene-bag.jpg",
    imageAlt: "Chêne Café branded takeaway packaging",
  },
];

/** Values for the stat row, paired with dictionary labels by key. */
export const statValues: { key: keyof Dictionary["stats"]; value: string }[] = [
  { key: "founded", value: "2018" },
  { key: "sectors", value: "3" },
  { key: "projects", value: "150+" },
  { key: "standard", value: "1" },
];

// ---- Localized view models (combine structure + dictionary) ----

export type LocalizedSector = {
  slug: SectorSlug;
  index: string;
  image: string;
  imageAlt: string;
  name: string;
  kicker: string;
  short: string;
  body: string[];
  highlights: { label: string; value: string }[];
};

export function getSectors(dict: Dictionary): LocalizedSector[] {
  return sectorMeta.map((m) => {
    const t = dict.sectors[m.slug];
    return {
      ...m,
      name: t.name,
      kicker: t.kicker,
      short: t.short,
      body: t.body,
      highlights: t.highlights,
    };
  });
}

export function getSector(
  dict: Dictionary,
  slug: string,
): LocalizedSector | undefined {
  return getSectors(dict).find((s) => s.slug === slug);
}

export type LocalizedProject = {
  id: ProjectId;
  image: string;
  imageAlt: string;
  title: string;
  blurb: string;
  location: string;
  sector: string;
  status: string;
};

export function getProjects(dict: Dictionary): LocalizedProject[] {
  return projectMeta.map((m) => {
    const t = dict.projects[m.id];
    return {
      id: m.id,
      image: m.image,
      imageAlt: m.imageAlt,
      title: t.title,
      blurb: t.blurb,
      location: t.location,
      sector: dict.sectorLabels[m.sectorKey],
      status: dict.statusLabels[m.statusKey],
    };
  });
}

export function getStats(dict: Dictionary): { value: string; label: string }[] {
  return statValues.map((s) => ({ value: s.value, label: dict.stats[s.key] }));
}

export function getNav(dict: Dictionary, locale: Locale) {
  return [
    { label: dict.nav.about, href: localeHref(locale, "/about") },
    { label: dict.nav.sectors, href: localeHref(locale, "/#sectors") },
    { label: dict.nav.portfolio, href: localeHref(locale, "/portfolio") },
    { label: dict.nav.contact, href: localeHref(locale, "/contact") },
  ];
}
