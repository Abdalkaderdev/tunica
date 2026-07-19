import Link from "next/link";
import Logo from "@/components/Logo";
import { getNav, localeHref, site } from "@/lib/content";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const nav = getNav(dict, locale);
  return (
    <footer className="bg-ink text-cream">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <Link href={localeHref(locale, "/")} className="text-cream">
            <Logo />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            {dict.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {dict.footer.explore}
          </h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>
              <Link href={localeHref(locale, "/")} className="hover:text-gold">
                {dict.nav.home}
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {dict.footer.contact}
          </h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="leading-relaxed" dir="ltr">
              {site.address.line1}
              <br />
              {site.address.line2}
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="wrap flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {site.founded}–present {site.name}. {dict.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link href={localeHref(locale, "/privacy")} className="hover:text-gold">
              {dict.footer.privacy}
            </Link>
            <Link href={localeHref(locale, "/terms")} className="hover:text-gold">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
