import en from '../i18n/en.json';
import es from '../i18n/es.json';

export function getTranslations(lang: string) {
  if (lang === 'es') return es;
  return en;
}
