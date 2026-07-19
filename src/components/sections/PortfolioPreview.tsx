import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getProjects, localeHref } from "@/lib/content";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export default function PortfolioPreview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const featured = getProjects(dict).slice(0, 3);
  const portfolioHref = localeHref(locale, "/portfolio");

  return (
    <section id="portfolio" className="bg-cream py-24 sm:py-32">
      <div className="wrap">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <div className="eyebrow">{dict.portfolioSection.eyebrow}</div>
            <h2 className="text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
              {dict.portfolioSection.heading}
            </h2>
          </div>
          <Link href={portfolioHref} className="link-underline shrink-0">
            {dict.common.viewAllProjects}
            <span aria-hidden className="dir-arrow">→</span>
          </Link>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <Link href={portfolioHref} className="group block overflow-hidden rounded-sm">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-goldlight">
                      <span>{project.sector}</span>
                      <span className="h-1 w-1 rounded-full bg-goldlight/60" />
                      <span className="text-cream/70">{project.status}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl text-cream">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
