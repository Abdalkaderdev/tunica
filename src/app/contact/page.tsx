import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tunica Group — real estate, luxury fashion, and hospitality in Erbil, Iraq. Let's talk about your next project.",
};

type Detail = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  secondary?: string;
  mapHref?: string;
};

const details: Detail[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
  },
  {
    label: "Office",
    value: site.address.line1,
    secondary: site.address.line2,
    mapHref: site.address.maps,
  },
  {
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="wrap pt-32 pb-24">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left — intro & details */}
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Let&apos;s talk about your next project.
            </h1>
            <p className="mt-6 max-w-md text-lg text-stone">
              Whether you&apos;re exploring a development, a partnership, or a
              conversation about what we do, we&apos;d be glad to hear from you.
              Reach us using the details below, or send a message directly.
            </p>

            <dl className="mt-12 space-y-8">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs uppercase tracking-wide text-gold">
                    {detail.label}
                  </dt>
                  <dd className="mt-2 text-ink">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="link-underline"
                        {...(detail.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span>{detail.value}</span>
                    )}
                    {detail.secondary ? (
                      <span className="block text-stone">
                        {detail.secondary}
                      </span>
                    ) : null}
                    {detail.mapHref ? (
                      <a
                        href={detail.mapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline mt-2 inline-block text-sm text-gold"
                      >
                        View on map ↗
                      </a>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map band */}
      <section aria-label="Our location on the map">
        <div className="wrap pb-24">
          <iframe
            src="https://www.google.com/maps?q=Phoenix%20Tower%20Zagros%20Street%20Erbil%20Iraq&output=embed"
            title="Map showing Tunica Group's location in Erbil, Iraq"
            loading="lazy"
            className="h-[420px] w-full rounded-lg border border-ink/10"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
