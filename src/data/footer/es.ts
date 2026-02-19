import type { ConnectItem } from "@components/Footer.astro";
import { routes } from "@utils/paths";

export const footerContentEs = (siteConfig: { companyName: string }) => {
  const currentYear = new Date().getFullYear();
  return {
    logoLink: routes.es.home,
    tagline:
      "Empoderando a líderes internacionales para comunicarse con autoridad y presencia ejecutiva.",
    sections: {
      about: {
        title: "Sobre Mí",
        links: [
          { name: "Quién Soy", href: `${routes.es.about}#about-me` },
          { name: "Mis Valores", href: `${routes.es.about}#about-values` },
          {
            name: "Por Qué Trabajar Conmigo",
            href: `${routes.es.about}#about-why`,
          },
        ],
      },
      resources: {
        title: "Recursos",
        links: [
          {
            name: "Guías Ejecutivas",
            href: routes.es.recursos ?? "/es/recursos/",
          },
          { name: "Preguntas Frecuentes", href: "/es/faqs/" },
          { name: "Prueba mi Coach de Inglés con IA", href: "/es/chat/" },
          { name: "Blog", href: routes.es.blog },
          { name: "Evaluación de Referencia", href: "/es/assessments/" },
          { name: "Memes Ejecutivos", href: "/es/meme-portfolio/all/" },
        ],
      },
      connect: {
        title: "Contacto",
        items: [
          {
            type: "link",
            name: "WhatsApp Directo",
            href: "https://wa.link/pk4f97",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          { type: "link", name: "Agendar una Consulta", href: "/es/reservar/" },
          { type: "link", name: "Envíame un Email", href: routes.es.contact },
        ] as ConnectItem[],
      },
    },
    legalMenu: [
      { name: "Política de Privacidad", href: routes.es.legal.privacy },
      { name: "Términos de Servicio", href: routes.es.legal.terms },
    ],
    copyrightText: `© ${currentYear} ${siteConfig.companyName}. Todos los derechos reservados.`,
    defaultFooterCta: {
      title: "¿Listo para Dominar la Sala?",
      description:
        "Deja de permitir que las barreras del idioma limiten tu carrera. Reserva tu sesión estratégica para obtener la claridad e impacto que tu rol exige.",
      hideCta: false,
      button: {
        text: "Reservar Mi Sesión Estratégica",
        link: "/es/reservar/",
      },
    },
  };
};
