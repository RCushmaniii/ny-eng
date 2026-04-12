// Import JSON directly as any type since TypeScript needs resolveJsonModule
const en = await import("./en.json");
const es = await import("./es.json");

// Define available languages for better type safety
export const LANGUAGES = {
  en: "en",
  es: "es",
} as const;

// Type for supported languages
export type Language = keyof typeof LANGUAGES;

/**
 * Get language from URL path
 * @param url Current URL
 * @returns Language code (en or es)
 */
export const getLangFromUrl = (url: URL): Language => {
  const [, lang] = url.pathname.split("/");
  if (lang === "es") return "es";
  return "en"; // Default to English
};

/**
 * Get language from string code
 * @param langCode Language code string ('en' or 'es')
 * @returns Typed Language
 */
export const getLanguage = (langCode: string): Language => {
  return langCode === "es" ? "es" : "en";
};

/**
 * Create a translation function for the specified language
 * @param lang Language to use for translations
 * @returns Translation function that accepts dot-notation keys
 */
export function useTranslations(lang: Language) {
  const translations: Record<Language, any> = {
    en: en.default,
    es: es.default,
  };

  return function t(key: string): string {
    // Split the key by dots to navigate the nested translations object
    const keys = key.split(".");
    let result: any = translations[lang];

    // Navigate through the nested keys
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key} for language: ${lang}`);
        // Fallback to English if key doesn't exist in the target language
        if (lang !== "en") {
          let enResult: any = translations.en;
          for (const englishKey of keys) {
            if (enResult && enResult[englishKey] !== undefined) {
              enResult = enResult[englishKey];
            } else {
              return key; // If not found in English either, return the key itself
            }
          }
          return enResult;
        }
        return key;
      }
    }

    return result;
  };
}
