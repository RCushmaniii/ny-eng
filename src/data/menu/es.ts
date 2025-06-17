// src/data/menu/es.ts

export interface MenuItem {
  name: string;
  link: string;
  children?: MenuItem[];
  showArrow?: boolean;
}

export const headerMenu: MenuItem[] = [
  // { name: 'Información de Clases', link: '/es/class-info' },
  {
    name: 'Acerca de',
    link: '/es/about',
    children: [
      { name: 'Equipo', link: '/es/about/team' },
      { name: 'Misión', link: '/es/about/mission' }
    ],
    showArrow: true
  },
  { name: 'Casos de Éxito', link: '/es/testimonios' },
  { name: 'Blog', link: '/es/blog' },
];

export const footerMenu: MenuItem[] = [
  { name: 'Guía de Estilo', link: '/es/style-guide' },
];

export const legalMenu: MenuItem[] = [
  { name: 'Política de Privacidad', link: '/es/legal/privacy-policy' },
  { name: 'Términos de Servicio', link: '/es/legal/terms-of-service' }
];
