import { routes } from '../../utils/paths.ts';

export const headerContent = {
  menu: [
    { name: "Servicios", link: routes.es.servicios },
    { name: "Sobre mí", link: routes.es.about },
    { name: "Blog", link: routes.es.blog },
    { name: "Casos de Éxito", link: routes.es.testimonios },
    { name: "Gratis", link: routes.es.gratis },
  ],
  cta: { text: "Contacto", link: routes.es.contact },
  logoLink: routes.es.home,
} as const;