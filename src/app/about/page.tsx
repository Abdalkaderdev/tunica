import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { site, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2018 in Erbil, Iraq, Tunica Group is a diversified enterprise spanning real estate development, luxury fashion, and hospitality.",
};

const principles = [
  {
    title: "Craftsmanship",
    body: "From the structure of a building to the stitching of a garment, we hold every detail to the same standard. Quality is not a finishing touch — it is the starting point.",
  },
  {
    title: "Long-term Partnership",
    body: "We build relationships that outlast any single project. Investors, partners, and clients return to Tunica because we treat their trust as the asset worth protecting.",
  },
  {
    title: "One Standard",
    body: "Real estate, fashion, hospitality — three very different industries, measured against a single idea of excellence. Whatever carries the Tunica name is held to it.",
  },
];

export default function AboutPage() {
  return (
    <article>
      <section className="bg-cream pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <div className="eyebrow">About Tunica</div>
            <h1 className="text-4xl font-light leading-[1.1] sm:text-5xl lg:text-6xl">
              A diversified group, built on a single standard of quality.
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-stone">
            <p>
              Founded in {site.founded} in Erbil, Iraq, Tunica Group has grown a
              professional, diversified portfolio spanning real estate
              development, hospitality, fashion, and retail.
            </p>
            <p>
              Our real estate arm has delivered landmark mixed-use developments,
              while our fashion and retail division serves as exclusive
              distributor for the Neapolitan luxury house of Kiton across Iraq.
              Beyond these, the Group has stepped into hospitality through Chêne
              Café, its growing café concept.
            </p>
            <p>
              Today, Tunica is recognised for its ability to adapt quickly to
              market change, deliver high-quality outcomes, and build
              relationships that last well beyond a single project.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="wrap">
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[4px]">
            <Image
              src="/images/phoenix-aerial.jpg"
              alt="Aerial view of Phoenix Tower and the surrounding Erbil parkland"
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
            <div className="eyebrow">Our approach</div>
            <h2 className="text-3xl leading-[1.15] sm:text-4xl lg:text-[2.5rem]">
              How we think about the work.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-8 md:grid-cols-3">
            {principles.map((p) => (
              <StaggerItem
                key={p.title}
                className="border-t border-ink/15 pt-6"
              >
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
              Interested in working with Tunica?
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-light">
                Start a Conversation
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-semibold text-cream/80 transition-colors hover:text-goldlight"
              >
                View our portfolio →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
