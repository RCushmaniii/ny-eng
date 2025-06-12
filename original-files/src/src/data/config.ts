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
  siteUrl: 'https://titan-core.com',
  Socials: {
    xSocial: 'https://x.com/astrodotbuild',
    Github: 'https://github.com/withastro',
    Instagram: 'https://www.instagram.com/astrodotbuild',
    LinkedIn: 'https://www.linkedin.com/company/astrodotbuild',
    Email: 'support@titan-core.com',
    Phone: '+123 456 7890',
    Location: '123 Main St, Anytown, USA',
  }
};

export const SEO = {
  Separator: '|',
  SiteName: 'New York English Teacher – Your Career Performance Accelerator',
  defaultDescription: 'A modern, high-performance Astro JS theme',
  defaultLang: 'en',
};

export const blogSetting = {
  postsPerPage: 6
}

export const themeSetting = {
  theme: 'zeus'
}