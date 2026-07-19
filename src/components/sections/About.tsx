import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { site, stats } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/kiton-boutique.jpg"
              alt="Interior of the Kiton boutique operated by Tunica Group"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-sm bg-ink px-7 py-6 text-cream shadow-xl sm:block lg:-right-8">
            <div className="font-serif text-4xl text-goldlight">{site.founded}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/60">
              Founded in Erbil
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <div className="eyebrow">About Tunica</div>
            <h2 className="max-w-xl text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
              A diversified group built on craftsmanship and long-term
              partnership.
            </h2>
          </Reveal>

          <div className="mt-6 max-w-xl space-y-4 text-stone">
            <Reveal delay={0.05}>
              <p>
                Founded in {site.founded} in Erbil, Iraq, Tunica Group has grown
                a professional, diversified portfolio spanning real estate
                development, hospitality, fashion, and retail.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Our real estate arm has delivered landmark mixed-use
                developments, while our fashion division brings luxury houses to
                the region. Through Chêne Café, the Group has stepped into
                hospitality — each venture held to a single standard.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Link href="/about" className="link-underline mt-8">
              Read our story
              <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/10 pt-10 sm:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="font-serif text-3xl text-ink sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-stone/70">
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
