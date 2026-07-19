import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { sectors } from "@/lib/content";

export default function Sectors() {
  return (
    <section id="sectors" className="bg-ink py-24 text-cream sm:py-32">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <div className="eyebrow text-goldlight">Sectors</div>
          <h2 className="text-3xl leading-[1.15] text-cream sm:text-4xl lg:text-[2.75rem]">
            Three industries, one standard.
          </h2>
          <p className="mt-5 text-cream/60">
            From skyline-defining towers to tailored Italian suits and café
            culture, every venture under Tunica is held to the same measure of
            quality.
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-cream/10 border-y border-cream/10 sm:mt-20">
          {sectors.map((sector, i) => (
            <Reveal key={sector.slug} delay={i * 0.05}>
              <Link
                href={`/sectors/${sector.slug}`}
                className="group grid items-center gap-8 py-10 sm:grid-cols-[auto_1fr_1.1fr] sm:gap-12 sm:py-12"
              >
                <div className="font-serif text-2xl text-goldlight/70 sm:text-3xl">
                  {sector.index}
                </div>

                <div className="max-w-md">
                  <div className="mb-2 text-xs uppercase tracking-[0.18em] text-cream/40">
                    {sector.kicker}
                  </div>
                  <h3 className="text-2xl text-cream transition-colors duration-300 group-hover:text-goldlight sm:text-3xl">
                    {sector.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {sector.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-goldlight">
                    Explore sector
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden rounded-sm sm:aspect-[16/11]">
                  <Image
                    src={sector.image}
                    alt={sector.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover:bg-ink/0" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
