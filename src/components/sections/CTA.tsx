import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { localeHref, site } from "@/lib/content";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export default function CTA({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-md bg-ink px-8 py-16 text-cream sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="absolute -end-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="eyebrow text-goldlight">{dict.cta.eyebrow}</div>
              <h2 className="max-w-xl text-3xl leading-[1.15] text-cream sm:text-4xl lg:text-[2.6rem]">
                {dict.cta.heading}
              </h2>
              <p className="mt-5 max-w-lg text-cream/60">{dict.cta.body}</p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href={localeHref(locale, "/contact")}
                className="btn btn-light w-full sm:w-auto"
              >
                {dict.common.startConversation}
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-cream/70 transition-colors hover:text-goldlight"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="text-sm text-cream/70 transition-colors hover:text-goldlight"
                dir="ltr"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
