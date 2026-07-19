"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { m, useScroll, useTransform } from "motion/react";
import { localeHref } from "@/lib/content";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <m.div style={{ y }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src="/images/phoenix-tower.jpg"
          alt="Phoenix Tower, Tunica Group's flagship development in Erbil"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </m.div>
      <m.div
        style={{ opacity: overlay }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/50 to-ink"
      />

      <div className="wrap flex h-full flex-col justify-end pb-20 sm:pb-24">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="eyebrow text-goldlight"
        >
          {dict.hero.eyebrow}
        </m.div>

        <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.08] text-cream sm:text-6xl lg:text-7xl">
          <Line delay={0.15}>{dict.hero.line1}</Line>
          <Line delay={0.28}>
            {dict.hero.line2pre}
            <em className="italic text-goldlight">{dict.hero.line2em}</em>
          </Line>
          <Line delay={0.41}>{dict.hero.line3}</Line>
        </h1>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link href={localeHref(locale, "/portfolio")} className="btn btn-light">
            {dict.common.viewOurWork}
          </Link>
          <Link
            href={localeHref(locale, "/#sectors")}
            className="text-sm font-semibold text-cream/80 transition-colors hover:text-goldlight"
          >
            {dict.common.exploreSectors} →
          </Link>
        </m.div>
      </div>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/30 p-1.5">
          <m.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-1.5 w-1.5 rounded-full bg-cream/70"
          />
        </div>
      </m.div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <m.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease, delay }}
        className="block"
      >
        {children}
      </m.span>
    </span>
  );
}
