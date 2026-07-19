"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import { getNav, localeHref, site } from "@/lib/content";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = getNav(dict, locale);
  const home = localeHref(locale, "/");
  const contact = localeHref(locale, "/contact");

  // The home page opens on a dark, full-screen hero, so the header can start
  // transparent there. Every other route begins on a light background, where a
  // transparent header would leave the cream nav text invisible.
  const overDarkHero = pathname === home;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || !overDarkHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        solid
          ? "border-b border-cream/10 bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between py-4">
        <Link
          href={home}
          onClick={() => setOpen(false)}
          className="text-cream"
          aria-label="Tunica Group — home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} variant="dark" />
          <Link href={contact} className="btn btn-light">
            {dict.common.startConversation}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? dict.common.close : dict.common.menu}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-cream transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-cream transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-cream transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-ink md:hidden"
          >
            <div className="wrap flex flex-col gap-1 pb-8 pt-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-cream/10 py-4 font-serif text-2xl text-cream transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={contact}
                onClick={() => setOpen(false)}
                className="btn btn-light mt-6 self-start"
              >
                {dict.common.startConversation}
              </Link>
              <div className="mt-6">
                <LanguageSwitcher locale={locale} variant="dark" />
              </div>
              <div className="mt-6 space-y-1 text-sm text-cream/60">
                <a href={`mailto:${site.email}`} className="block hover:text-gold">
                  {site.email}
                </a>
                <a href={`tel:${site.phoneHref}`} className="block hover:text-gold">
                  {site.phone}
                </a>
              </div>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
