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
  {
    name: 'Services',
    link: '/en/services',
    children: [
      { name: 'Executive English', link: '/en/services/executive-english' },
      { name: 'Technical Sales English', link: '/en/services/technical-sales-english' },
      { name: 'English for Logistics', link: '/en/services/logistics-english' },
      { name: 'English for Medical Professionals', link: '/en/services/medical-english' },
      { name: 'Interview Preparation', link: '/en/services/interview-prep' },
      { name: 'Public Speaking', link: '/en/services/public-speaking-english' },
      { name: 'English for Startup Founders', link: '/en/services/startup-founders' },
      { name: 'English for Tech', link: '/en/services/tech-english' }
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

// Spanish menu structure
export const headerMenuEs: MenuItem[] = [
  {
    name: 'Acerca de',
    link: '/es/about',
    children: [
      { name: 'Equipo', link: '/es/about/team' },
      { name: 'Misión', link: '/es/about/mission' }
    ],
    showArrow: true
  },
  {
    name: 'Servicios',
    link: '/es/servicios',
    children: [
      { name: 'Inglés para Ejecutivos', link: '/es/servicios/executive-english' },
      { name: 'Inglés para Ventas Técnicas', link: '/es/servicios/technical-sales-english' },
      { name: 'Inglés para Logística', link: '/es/servicios/logistics-english' },
      { name: 'Inglés para Médicos', link: '/es/servicios/medical-english' },
      { name: 'Preparación para Entrevistas', link: '/es/servicios/interview-prep' },
      { name: 'Hablar en Público', link: '/es/servicios/public-speaking-english' },
      { name: 'Inglés para Fundadores de Startups', link: '/es/servicios/startup-founders' },
      { name: 'Inglés para Tecnología', link: '/es/servicios/tech-english' }
    ],
    showArrow: true
  },
  { name: 'Testimonios', link: '/es/testimonios' },
  { name: 'Blog', link: '/es/blog' },
];

export const footerMenuEs: MenuItem[] = [
  { name: 'Guía de Estilo', link: '/es/style-guide' },
];

export const legalMenuEs: MenuItem[] = [
  { name: 'Política de Privacidad', link: '/es/legal/privacy-policy' },
  { name: 'Términos de Servicio', link: '/es/legal/terms-of-service' }
];
