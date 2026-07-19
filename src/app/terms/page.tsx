import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the Tunica Group website.",
};

export default function TermsPage() {
  return (
    <article className="bg-cream pb-24 pt-32 sm:pt-40">
      <div className="wrap max-w-3xl">
        <div className="eyebrow">Legal</div>
        <h1 className="text-4xl font-light leading-tight sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-stone/70">Last updated: July 2026</p>

        <div className="mt-12 space-y-10 leading-relaxed text-stone">
          <section>
            <p>
              These Terms govern your use of the {site.name} website. By
              accessing or using this site, you agree to them. If you do not
              agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">
              Informational purpose
            </h2>
            <p>
              The content on this site is provided for general information about
              Tunica Group and its ventures. It does not constitute an offer,
              investment advice, or a binding commitment of any kind. We may
              update or change content at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">
              Intellectual property
            </h2>
            <p>
              The Tunica Group name, logo, text, and imagery on this site are
              the property of Tunica Group or its partners and are protected by
              applicable law. Third-party names and marks — including Kiton,
              which is a trademark of its respective owner — remain the property
              of those owners and are used here for identification only.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">
              No warranty
            </h2>
            <p>
              This site is provided &ldquo;as is&rdquo; without warranties of
              any kind. While we work to keep information accurate and current,
              we do not guarantee that it is complete, error-free, or
              uninterrupted, and we are not liable for any loss arising from
              reliance on it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">
              External links
            </h2>
            <p>
              Our site may link to third-party websites for convenience. We do
              not control and are not responsible for the content, policies, or
              practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">
              Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the Kurdistan Region of
              Iraq. Any dispute relating to the site will be subject to the
              jurisdiction of its competent courts.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">Contact</h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-ink underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
              >
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
