import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export default function CTA() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-md bg-ink px-8 py-16 text-cream sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="eyebrow text-goldlight">Get in touch</div>
              <h2 className="max-w-xl text-3xl leading-[1.15] text-cream sm:text-4xl lg:text-[2.6rem]">
                Let&rsquo;s talk about your next project.
              </h2>
              <p className="mt-5 max-w-lg text-cream/60">
                For inquiries regarding investments, collaborations, or our
                developments, our team would be glad to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link href="/contact" className="btn btn-light w-full sm:w-auto">
                Start a Conversation
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
