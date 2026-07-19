import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Tunica Group collects, uses, and protects the information you share with us.",
};

export default function PrivacyPage() {
  return (
    <article className="bg-cream pb-24 pt-32 sm:pt-40">
      <div className="wrap max-w-3xl">
        <div className="eyebrow">Legal</div>
        <h1 className="text-4xl font-light leading-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-stone/70">Last updated: July 2026</p>

        <div className="mt-12 space-y-10 leading-relaxed text-stone">
          <section>
            <p>
              This Privacy Policy explains how {site.name} (&ldquo;Tunica&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information collected
              through this website. We keep this simple: we only collect what we
              need to respond to you, and we do not sell your data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">
              Information we collect
            </h2>
            <p>
              When you submit our contact form, we collect the details you
              provide — typically your name, email address, company or
              organisation, chosen subject, and message. We may also collect
              anonymous, aggregate analytics about how the site is used (such as
              pages visited and general location), which help us improve it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">
              How we use it
            </h2>
            <p>
              We use the information you send us solely to respond to your
              inquiry and to communicate with you about it. We do not use your
              contact details for unrelated marketing, and we do not sell,
              rent, or trade your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">Cookies</h2>
            <p>
              This site may use essential and analytics cookies to function and
              to understand usage. You can control or disable cookies through
              your browser settings; the core site will continue to work
              without them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">
              Data retention &amp; security
            </h2>
            <p>
              We retain inquiry messages only as long as needed to address your
              request and maintain a reasonable business record. We take
              sensible measures to protect the information in our care, though
              no method of transmission over the internet is entirely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-ink">Contact</h2>
            <p>
              For any privacy question, or to request that we update or delete
              information you have shared, contact us at{" "}
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
