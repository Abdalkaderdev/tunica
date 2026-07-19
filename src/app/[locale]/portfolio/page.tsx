import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/motion/Reveal";
import PortfolioGrid from "@/components/PortfolioGrid";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { getProjects, localeHref } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.portfolio.title,
    description: dict.meta.portfolio.description,
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const projects = getProjects(dict);

  return (
    <>
      <section className="bg-ink pb-16 pt-36 text-cream sm:pb-20 sm:pt-44">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow text-goldlight">{dict.portfolioPage.eyebrow}</div>
            <h1 className="max-w-3xl text-4xl font-light leading-[1.1] sm:text-6xl">
              {dict.portfolioPage.heading}
            </h1>
            <p className="mt-6 max-w-xl text-cream/60">{dict.portfolioPage.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="wrap">
          <PortfolioGrid projects={projects} allLabel={dict.portfolioPage.filterAll} />

          <Reveal className="mt-20 border-t border-ink/10 pt-12 text-center">
            <h2 className="mx-auto max-w-xl text-2xl leading-snug sm:text-3xl">
              {dict.portfolioPage.ctaHeading}
            </h2>
            <Link href={localeHref(locale, "/contact")} className="btn btn-solid mt-8">
              {dict.common.startConversation}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
