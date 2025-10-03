import en from '../i18n/en.json' with { type: 'json' };
import es from '../i18n/es.json' with { type: 'json' };

type Messages = typeof en;

export function getTranslations(lang: 'en' | 'es'): Messages {
  return (lang === 'es' ? es : en) as Messages;
}
