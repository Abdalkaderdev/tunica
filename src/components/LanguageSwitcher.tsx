"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { locales, localeNames, type Locale } from "@/i18n/config";

/** Replace the leading locale segment of the current path with `next`. */
function swapLocale(pathname: string, next: Locale): string {
  const parts = pathname.split("/");
  // parts[0] is "" (leading slash), parts[1] is the current locale
  if (parts.length > 1 && locales.includes(parts[1] as Locale)) {
    parts[1] = next;
    return parts.join("/") || `/${next}`;
  }
  return `/${next}`;
}

export default function LanguageSwitcher({
  locale,
  variant = "dark",
}: {
  locale: Locale;
  variant?: "dark" | "light";
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const text =
    variant === "dark" ? "text-cream/80" : "text-ink/70";

  return (
    <div
      className="relative"
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-gold ${text}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
        {localeNames[locale].native}
      </button>

      <AnimatePresence>
        {open && (
          <m.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute end-0 top-full z-50 mt-2 min-w-[150px] overflow-hidden rounded-md border border-ink/10 bg-cream py-1 shadow-xl"
            role="listbox"
          >
            {locales.map((loc) => (
              <li key={loc}>
                <Link
                  href={swapLocale(pathname, loc)}
                  onClick={() => setOpen(false)}
                  hrefLang={loc}
                  className={`flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-ink/5 ${
                    loc === locale ? "text-gold" : "text-ink"
                  }`}
                  role="option"
                  aria-selected={loc === locale}
                >
                  <span>{localeNames[loc].native}</span>
                  <span className="text-xs text-stone/50">
                    {localeNames[loc].english}
                  </span>
                </Link>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
