import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import PortfolioGrid from "@/components/PortfolioGrid";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A selection of completed and in-progress developments across Tunica Group — real estate, fashion & retail, and hospitality in Erbil, Iraq.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-36 text-cream sm:pb-20 sm:pt-44">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow text-goldlight">Portfolio</div>
            <h1 className="max-w-3xl text-4xl font-light leading-[1.1] sm:text-6xl">
              A record of what we&rsquo;ve built.
            </h1>
            <p className="mt-6 max-w-xl text-cream/60">
              Completed and in-progress projects across the Group — each one
              held to the same measure of quality, from structure to detail.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="wrap">
          <PortfolioGrid projects={projects} />

          <Reveal className="mt-20 border-t border-ink/10 pt-12 text-center">
            <h2 className="mx-auto max-w-xl text-2xl leading-snug sm:text-3xl">
              Interested in working with us, or investing in a project?
            </h2>
            <Link href="/contact" className="btn btn-solid mt-8">
              Start a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
