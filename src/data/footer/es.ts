import type { ConnectItem } from '@components/Footer.astro';
import { routes } from '@utils/paths';

export const footerContentEs = (siteConfig: { companyName: string }) => {
  const currentYear = new Date().getFullYear();
  return {
    logoLink: routes.es.home,
    tagline: "Ayudando a profesionales a hablar inglés con confianza y fluidez.",
    sections: {
      about: {
        title: "Sobre Mí",
        links: [
          { name: "Quién Soy", href: `${routes.es.about}#about-me` },
          { name: "Mis Valores", href: `${routes.es.about}#about-values` },
          { name: "Por Qué Trabajar Conmigo", href: `${routes.es.about}#about-why` },
        ],
      },
      resources: {
        title: "Recursos",
        links: [
          { name: "Preguntas Frecuentes", href: `${routes.es.home}#faqs` },
          { name: "Blog", href: routes.es.blog },
          { name: "Consulta Gratuita", href: "/es/book/" },
        ],
      },
      connect: {
        title: "Contacto",
        items: [
          { type: "link", name: "Contáctame por WhatsApp", href: "https://wa.link/pk4f97", target: "_blank", rel: "noopener noreferrer" },
          { type: "link", name: "Agendar una Consulta", href: "/es/book/" },
          { type: "link", name: "Contáctame", href: routes.es.contact },
        ] as ConnectItem[],
      },
    },
    legalMenu: [
      { name: "Política de Privacidad", href: routes.es.legal.privacy },
      { name: "Términos de Servicio", href: routes.es.legal.terms },
    ],
    copyrightText: `© ${currentYear} ${siteConfig.companyName}. Todos los derechos reservados.`,
    defaultFooterCta: {
      title: "Transforma Tu Inglés Profesional Hoy",
      description: "Reserva tu consulta gratuita para obtener la claridad, confianza e impacto que tu rol exige.",
      hideCta: false,
      button: {
        text: "Reservar mi Consulta Gratuita",
        link: "/es/book/",
      },
    },
  };
};