import type { Locale } from "./config";
import en, { type Dictionary } from "./dictionaries/en";
import ar from "./dictionaries/ar";
import ku from "./dictionaries/ku";

const dictionaries: Record<Locale, Dictionary> = { en, ar, ku };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };
