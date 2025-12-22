// src/utils/paths.ts

export type Locale = "en" | "es";

export interface LocaleRoutes {
  home: string;
  about: string;
  services?: string; // only exists on EN (key name differs on ES)
  servicios?: string; // only exists on ES
  testimonials?: string; // EN
  testimonios?: string; // ES
  blog: string;
  contact: string;
  resources?: string; // EN
  recursos?: string; // ES
  legal: {
    privacy: string;
    terms: string;
  };
  category: (slug: string) => string;
  blogPage: (n: number) => string;
  post: (slug: string) => string;
}

export interface RoutesByLocale {
  en: LocaleRoutes;
  es: LocaleRoutes;
}

export const routes: RoutesByLocale = {
  en: {
    home: "/en/",
    about: "/en/about/",
    services: "/en/services/",
    testimonials: "/en/testimonials/",
    blog: "/en/blog/",
    contact: "/en/contact/",
    resources: "/en/resources/",
    legal: {
      privacy: "/en/legal/privacy-policy/",
      terms: "/en/legal/terms-of-service/",
    },
    category: (slug: string) => `/en/category/${slug}/`,
    blogPage: (n: number) => (n === 1 ? "/en/blog/" : `/en/blog/${n}/`),
    post: (slug: string) => `/en/blog/${slug}/`,
  },
  es: {
    home: "/es/",
    about: "/es/about/",
    servicios: "/es/servicios/",
    testimonios: "/es/testimonios/",
    blog: "/es/blog/",
    contact: "/es/contact/",
    recursos: "/es/recursos/",
    legal: {
      privacy: "/es/legal/privacy-policy/",
      terms: "/es/legal/terms-of-service/",
    },
    category: (slug: string) => `/es/category/${slug}/`,
    blogPage: (n: number) => (n === 1 ? "/es/blog/" : `/es/blog/${n}/`),
    post: (slug: string) => `/es/blog/${slug}/`,
  },
};

// ✅ Add a default export so `import routes from '@utils/paths'` works
export default routes;

// Optional ergonomic helpers (use anywhere)
export const getRoutes = (lang: Locale) => routes[lang];
export const hrefCategory = (lang: Locale, slug: string) =>
  routes[lang].category(slug);
export const hrefPost = (lang: Locale, slug: string) => routes[lang].post(slug);
export const hrefBlogPage = (lang: Locale, n: number) =>
  routes[lang].blogPage(n);
