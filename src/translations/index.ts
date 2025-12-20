import { ar } from "./ar";
import { fr } from "./fr";

export type Language = "ar" | "fr";
export type TranslationKeys = keyof typeof ar;

export const translations = {
  ar,
  fr,
};

export const getTranslation = (lang: Language) => translations[lang];
