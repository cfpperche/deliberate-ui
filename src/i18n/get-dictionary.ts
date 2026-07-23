import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/types";
import en from "./dictionaries/en";
import pt from "./dictionaries/pt";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  pt,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
