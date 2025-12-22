// src/data/menu.ts

export interface MenuItem {
  name: string;
  link: string;
  children?: MenuItem[];
  showArrow?: boolean;
}

import { serviceCategories } from "./service-categories.js";

export const headerMenu: MenuItem[] = [
  {
    name: "About",
    link: "/en/about/",
    children: [],
    showArrow: true,
  },
  {
    name: "Services",
    link: "/en/services/",
    children: serviceCategories.map(
      (service: (typeof serviceCategories)[number]) => ({
        name: service.label,
        link: `/en/services/${service.slug}`,
      }),
    ),
    showArrow: true,
  },
  { name: "Testimonials", link: "/en/testimonials/" },
  { name: "Blog", link: "/en/blog/" },
];

export const footerMenu: MenuItem[] = [];

export const legalMenu: MenuItem[] = [
  { name: "Privacy Policy", link: "/en/legal/privacy-policy/" },
  { name: "Terms of Service", link: "/en/legal/terms-of-service/" },
];

// Spanish menu structure
export const headerMenuEs: MenuItem[] = [
  {
    name: "Acerca de",
    link: "/es/about/",
    children: [],
    showArrow: true,
  },
  {
    name: "Servicios",
    link: "/es/servicios/",
    children: serviceCategories.map(
      (service: (typeof serviceCategories)[number]) => ({
        name: service.esLabel,
        link: `/es/servicios/${service.esSlug}`,
      }),
    ),
    showArrow: true,
  },
  { name: "Testimonios", link: "/es/testimonios/" },
  { name: "Blog", link: "/es/blog/" },
];

export const footerMenuEs: MenuItem[] = [];

export const legalMenuEs: MenuItem[] = [
  { name: "Política de Privacidad", link: "/es/legal/privacy-policy/" },
  { name: "Términos de Servicio", link: "/es/legal/terms-of-service/" },
];
