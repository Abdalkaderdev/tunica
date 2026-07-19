import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { getStats, localeHref } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.aboutPage;
  const stats = getStats(dict);

  return (
    <article>
      <section className="bg-cream pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1 className="text-4xl font-light leading-[1.1] sm:text-5xl lg:text-6xl">
              {t.heading}
            </h1>
          </Reveal>
          <Reveal
            delay={0.1}
            className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-stone"
          >
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="wrap">
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[4px]">
            <Image
              src="/images/phoenix-aerial.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 1180px) 100vw, 1180px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 text-cream sm:py-24">
        <div className="wrap">
          <Stagger className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="font-serif text-4xl text-goldlight sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-cream/60">
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-cream py-24 sm:py-32">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <div className="eyebrow">{t.approachEyebrow}</div>
            <h2 className="text-3xl leading-[1.15] sm:text-4xl lg:text-[2.5rem]">
              {t.approachHeading}
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-8 md:grid-cols-3">
            {t.principles.map((p) => (
              <StaggerItem key={p.title} className="border-t border-ink/15 pt-6">
                <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
                <p className="mt-4 text-stone">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-cream pb-24 sm:pb-32">
        <div className="wrap">
          <Reveal className="overflow-hidden rounded-[6px] bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl leading-[1.15] text-cream sm:text-4xl">
              {t.ctaHeading}
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={localeHref(locale, "/contact")} className="btn btn-light">
                {dict.common.startConversation}
              </Link>
              <Link
                href={localeHref(locale, "/portfolio")}
                className="text-sm font-semibold text-cream/80 transition-colors hover:text-goldlight"
              >
                {t.viewPortfolio} →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
