import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import { site } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.contactPage;

  type Detail = {
    label: string;
    value: string;
    href?: string;
    external?: boolean;
    secondary?: string;
    mapHref?: string;
    ltr?: boolean;
  };

  const details: Detail[] = [
    { label: t.labels.email, value: site.email, href: `mailto:${site.email}`, ltr: true },
    { label: t.labels.phone, value: site.phone, href: `tel:${site.phoneHref}`, ltr: true },
    {
      label: t.labels.office,
      value: site.address.line1,
      secondary: site.address.line2,
      mapHref: site.address.maps,
      ltr: true,
    },
    {
      label: t.labels.instagram,
      value: site.instagramHandle,
      href: site.instagram,
      external: true,
      ltr: true,
    },
  ];

  return (
    <>
      <section className="wrap pb-24 pt-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {t.heading}
            </h1>
            <p className="mt-6 max-w-md text-lg text-stone">{t.intro}</p>

            <dl className="mt-12 space-y-8">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs uppercase tracking-wide text-gold">
                    {detail.label}
                  </dt>
                  <dd className="mt-2 text-ink" dir={detail.ltr ? "ltr" : undefined}>
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
                      <span className="block text-stone">{detail.secondary}</span>
                    ) : null}
                    {detail.mapHref ? (
                      <a
                        href={detail.mapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline mt-2 inline-block text-sm text-gold"
                      >
                        {dict.common.viewOnMap} ↗
                      </a>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <ContactForm dict={dict} />
          </div>
        </div>
      </section>

      <section aria-label={t.mapTitle}>
        <div className="wrap pb-24">
          <iframe
            src="https://www.google.com/maps?q=Phoenix%20Tower%20Zagros%20Street%20Erbil%20Iraq&output=embed"
            title={t.mapTitle}
            loading="lazy"
            className="h-[420px] w-full rounded-lg border border-ink/10"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
