import type { MetadataRoute } from "next";
import { site, sectorMeta } from "@/lib/content";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-19");
  const base = site.url;

  const paths: { path: string; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
    { path: "", changeFrequency: "monthly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    ...sectorMeta.map((s) => ({
      path: `/sectors/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return locales.flatMap((locale) =>
    paths.map(({ path, changeFrequency, priority }) => ({
      url: `${base}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${base}/${l}${path}`]),
        ),
      },
    })),
  );
}
