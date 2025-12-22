import en from "../locales/en.js";
import es from "../locales/es.js";

const translations = { en, es };

export function getTranslation(locale, key) {
  const parts = key.split(".");
  let result = translations[locale];
  for (const part of parts) {
    if (result && part in result) {
      result = result[part];
    } else {
      return key; // fallback to key if not found
    }
  }
  return result;
}

export function getCurrentLocale(pathname) {
  return pathname.startsWith("/es/") ? "es" : "en";
}
