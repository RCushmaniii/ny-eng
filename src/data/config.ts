export interface SiteConfig {
  companyName: string;
  siteUrl: string;
  Socials: {
    xSocial: string;
    Github: string;
    Instagram: string;
    LinkedIn: string;
    Email: string;
    Phone: string;
    Location: string;
  };
}

export const siteConfig: SiteConfig = {
  companyName: "New York English Teacher",
  siteUrl: "https://www.nyenglishteacher.com",
  Socials: {
    xSocial: "https://x.com/nyenglishteach",
    Github: "",
    Instagram: "https://www.instagram.com/nyenglishteacher",
    LinkedIn: "https://www.linkedin.com/company/new-york-english-teacher",
    Email: "info@nyenglishteacher.com",
    Phone: "",
    Location: "New York, NY",
  } as const,
};

export const SEO = {
  Separator: "|",
  SiteName: "New York English Teacher – Your Career Performance Accelerator",
  defaultDescription:
    "Professional Business English coaching for career advancement and effective communication",
  defaultLang: "en",
} as const;

// NOTE: Avoid Astro image metadata pipeline for the category hero to prevent build errors on malformed images.
// If you want to use an asset import here later, re-export a fresh JPG/WebP and swap this string to an import.
export const blogSetting = {
  postsPerPage: 6,
  categoryHeroImage: "/images/logos/new-york-english-og.jpg",
  categoryHeroImageAlt:
    "New York English Teacher Blog - Business English Resources",
  siteUrl: "https://www.nyenglishteacher.com",
} as const;

// Performance optimization note:
// The default-category-hero.jpg (125KB) should be optimized to <50KB for better page load times

export const themeSetting = {
  theme: "zeus",
} as const;
