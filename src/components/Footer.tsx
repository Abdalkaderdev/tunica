import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  const year = 2018; // group founding; current year appended below at render
  return (
    <footer className="bg-ink text-cream">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <Link
            href="/"
            className="font-serif text-2xl tracking-tightish text-cream"
          >
            Tunica<span className="text-gold"> Group</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            A diversified enterprise across real estate, fashion, and
            hospitality — building lasting value in Erbil, Iraq since {year}.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
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
            Contact
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
            <li className="leading-relaxed">
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
          <p>© {year}–present Tunica Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
