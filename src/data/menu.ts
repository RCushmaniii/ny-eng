// src/data/menu.ts

export interface MenuItem {
  name: string;
  link: string;
  children?: MenuItem[];
  showArrow?: boolean;
}

export const headerMenu: MenuItem[] = [
  // { name: 'Classes Info', link: '/class-info' },
  {
    name: 'About',
    link: '/about',
    children: [
      { name: 'Team', link: '/about/team' },
      { name: 'Mission', link: '/about/mission' }
    ],
    showArrow: true
  },
  { name: 'Testimonials', link: '/en/testimonials' },
  { name: 'Blog', link: '/blog' },
];

export const footerMenu: MenuItem[] = [
  { name: 'Style Guide', link: '/style-guide' },
];

export const legalMenu: MenuItem[] = [
  { name: 'Privacy Policy', link: '/legal/privacy-policy' },
  { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

