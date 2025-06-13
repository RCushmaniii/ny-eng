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
  companyName: 'New York English Teacher',
  siteUrl: 'https://www.nyenglishteacher.com',
  Socials: {
    xSocial: 'https://x.com/nyenglishteach',
    Github: '',
    Instagram: 'https://www.instagram.com/nyenglishteacher',
    LinkedIn: 'https://www.linkedin.com/company/new-york-english-teacher',
    Email: 'info@nyenglishteacher.com',
    Phone: '',
    Location: 'New York, NY',
  } as const
};

export const SEO = {
  Separator: '|',
  SiteName: 'New York English Teacher – Your Career Performance Accelerator',
  defaultDescription: 'Professional Business English coaching for career advancement and effective communication',
  defaultLang: 'en',
} as const;

import defaultCategoryHero from '@assets/images/blog/default-category-hero.jpg';

export const blogSetting = {
  postsPerPage: 6,
  categoryHeroImage: defaultCategoryHero,
  categoryHeroImageAlt: 'New York English Teacher Blog - Business English Resources',
  siteUrl: 'https://www.nyenglishteacher.com'
} as const

export const themeSetting = {
  theme: 'zeus'
} as const