import type { SiteConfig } from '@data/config';
import type { ConnectItem } from '../../components/Footer.astro';

export const footerContentEs = (siteConfig: Pick<SiteConfig, 'companyName'>) => {
  const currentYear = new Date().getFullYear();
  return {
    logoLink: "/es/",
    tagline: "Ayudando a profesionales a hablar inglés con confianza y fluidez.",
    sections: {
      about: {
        title: "Sobre Mí",
        links: [
          { name: "Quién Soy", href: "/es/about#about-me" }, // Adjust link if slug is /es/sobre-mi
          { name: "Mis Valores", href: "/es/about#about-values" },
          { name: "Por Qué Trabajar Conmigo", href: "/es/about#about-why" },
        ],
      },
      resources: {
        title: "Recursos",
        links: [
          { name: "Preguntas Frecuentes", href: "/es/#faqs" },
          { name: "Blog", href: "/es/blog" },
          { name: "Consulta Gratuita", href: "https://ny-english-teacher.odoo.com/book/7ceefa20", target: "_blank", rel: "noopener noreferrer" },
        ],
      },
      connect: {
        title: "Contacto",
        items: [
          { type: "text", content: "WhatsApp: +52 33 1559 0572" },
          { type: "link", name: "Agendar una Consulta", href: "https://ny-english-teacher.odoo.com/book/7ceefa20", target: "_blank", rel: "noopener noreferrer" },
          { type: "link", name: "Contáctame", href: "/es/contact" }, // Adjust link if slug is /es/contacto
        ] as ConnectItem[],
      },
    },
    legalMenu: [
      { name: "Política de Privacidad", href: "/es/legal/privacy-policy" }, // Adjust link, e.g., /es/politica-privacidad
      { name: "Términos de Servicio", href: "/es/legal/terms-of-service" }, // Adjust link, e.g., /es/terminos-servicio
    ],
    copyrightText: `© ${currentYear} ${siteConfig.companyName}. Todos los derechos reservados.`,
    defaultFooterCta: {
      title: "Transforma Tu Inglés Profesional Hoy",
      description: "Reserva tu consulta gratuita para obtener la claridad, confianza e impacto que tu rol exige.",
      hideCta: false,
      button: {
        text: "Reservar mi Consulta Gratuita",
        link: "https://ny-english-teacher.odoo.com/book/7ceefa20",
        target: "_blank",
      },
    },
  };
};