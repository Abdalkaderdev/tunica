export const locales = ["en", "ar", "ku"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Locales that render right-to-left. */
export const rtlLocales: Locale[] = ["ar", "ku"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function dir(locale: Locale): "rtl" | "ltr" {
  return isRtl(locale) ? "rtl" : "ltr";
}

export const localeNames: Record<Locale, { native: string; english: string }> = {
  en: { native: "English", english: "English" },
  ar: { native: "العربية", english: "Arabic" },
  ku: { native: "کوردی", english: "Kurdish" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
