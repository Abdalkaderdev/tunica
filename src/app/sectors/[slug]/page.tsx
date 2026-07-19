import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { sectors } from "@/lib/content";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) return {};
  return {
    title: `${sector.name} — ${sector.kicker}`,
    description: sector.description,
    openGraph: {
      title: `${sector.name} — Tunica Group`,
      description: sector.description,
      images: [{ url: sector.image }],
    },
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) notFound();

  const others = sectors.filter((s) => s.slug !== slug);

  return (
    <article>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16 pt-32">
        <Image
          src={sector.image}
          alt={sector.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="wrap relative">
          <Reveal>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-goldlight">
              <span className="font-serif text-lg">{sector.index}</span>
              <span className="h-px w-8 bg-goldlight/50" />
              <span>{sector.kicker}</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-light leading-[1.1] text-cream sm:text-6xl">
              {sector.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">{sector.short}</p>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-stone">
            {sector.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{para}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <Link href="/contact" className="btn btn-solid mt-4">
                Inquire about {sector.name}
              </Link>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-md border border-ink/10 bg-white/50 p-8">
              <div className="text-xs uppercase tracking-[0.18em] text-gold">
                At a glance
              </div>
              <Stagger className="mt-6 space-y-6">
                {sector.highlights.map((h) => (
                  <StaggerItem
                    key={h.label}
                    className="flex items-baseline justify-between border-b border-ink/10 pb-4"
                  >
                    <span className="text-sm text-stone/70">{h.label}</span>
                    <span className="font-serif text-2xl text-ink">
                      {h.value}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other sectors */}
      <section className="border-t border-ink/10 bg-cream pb-24">
        <div className="wrap pt-16">
          <div className="eyebrow">Continue exploring</div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/sectors/${s.slug}`}
                className="group relative flex aspect-[16/9] items-end overflow-hidden rounded-sm p-6"
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.16em] text-goldlight">
                    {s.kicker}
                  </div>
                  <div className="font-serif text-2xl text-cream">{s.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
