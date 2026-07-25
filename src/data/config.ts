export interface SiteConfig {
  companyName: string;
  siteUrl: string;
  Socials: {
    Facebook: string;
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
  // Socials feed schema.org `sameAs` (BlogPostSchema, ProfessionalServiceSchema), which is an
  // explicit claim that these profiles are ours. A dead or unowned URL here weakens entity
  // trust — empty string is always safer than a guess. Verify live before adding; see
  // docs/EXTERNAL-FOOTPRINT.md for verification status and dates.
  Socials: {
    Facebook: "https://www.facebook.com/nyenglishteacher", // verified 2026-07-25
    xSocial: "", // was https://x.com/nyenglishteach — 404, does not exist (2026-07-25)
    Github: "",
    Instagram: "", // profile resolves but ownership unconfirmed — do not claim until verified
    LinkedIn: "", // was .../company/new-york-english-teacher — 404, does not exist (2026-07-25)
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
  categoryHeroImageAlt: "New York English Teacher Blog - Business English Resources",
  siteUrl: "https://www.nyenglishteacher.com",
} as const;

// Performance optimization note:
// The default-category-hero.jpg (125KB) should be optimized to <50KB for better page load times

export const themeSetting = {
  theme: "zeus",
} as const;
