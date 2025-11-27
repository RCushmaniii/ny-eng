import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$Hero } from '../../chunks/Eyebrow_Dor9w_17.mjs';
import { s as servicesHeroImage, $ as $$ServicesGrid, a as $$ProfessionalProfiles, b as $$CtaBanner } from '../../chunks/services-hero_BwqYpdKy.mjs';
import { a as serviciosEs, b as professionalProfilesEs } from '../../chunks/services_B12aH-xU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "es";
  const tkey = "services";
  const seoTitle = "Servicios de Coaching de Ingl\xE9s de Negocios | NY English";
  const seoDescription = "Explora coaching personalizado de ingl\xE9s para ejecutivos, profesionales de tecnolog\xEDa, m\xE9dicos y m\xE1s. Mejora tu fluidez y confianza en entornos empresariales reales.";
  const heroContent = {
    title: "Coaching Especializado de Ingl\xE9s de Negocios para Tu \xC9xito",
    description: "Programas dirigidos para perfeccionar tus habilidades de comunicaci\xF3n y acelerar tu carrera.",
    buttons: [
      {
        text: "Reserva Tu Consulta Gratuita",
        link: "/es/book/",
        variant: "primary"
      }
    ],
    backgroundImage: servicesHeroImage,
    backgroundImageMobile: servicesHeroImage,
    backgroundImageAlt: "Servicios profesionales de coaching de ingl\xE9s de negocios",
    overlayOpacity: 0.3
  };
  const ctaContent = {
    eyebrow: "\xBFNo Est\xE1s Seguro Cu\xE1l Servicio Es El Adecuado Para Ti?",
    title: "Hablemos de tus objetivos y encontremos el camino perfecto hacia adelante.",
    description: "Reserva una consulta gratuita para descubrir c\xF3mo puedo ayudarte a lograr tus objetivos de comunicaci\xF3n en ingl\xE9s.",
    button: {
      text: "Reserva Tu Consulta Gratuita",
      link: "/es/book/",
      variant: "primary"
    }
  };
  const professionalProfilesContent = {
    title: "Dise\xF1ado para Profesionales Ambiciosos",
    description: "Mi coaching no es de talla \xFAnica. Me asocio con innovadores, l\xEDderes y especialistas que necesitan comunicarse con precisi\xF3n y autoridad. Tengo \xE9xito comprobado con:"
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": seoTitle, "description": seoDescription, "lang": lang, "tkey": tkey, "ogImage": { src: "/images/logos/new-york-english-og-wide.jpg" }, "heroImage": servicesHeroImage, "hideCta": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "content": heroContent })}  ${renderComponent($$result2, "ServicesGrid", $$ServicesGrid, { "services": serviciosEs, "title": "Domina el Ingl\xE9s de Negocios para el Crecimiento Profesional y la Comunicaci\xF3n Global", "description": "Desbloquea tu m\xE1ximo potencial con coaching personalizado de ingl\xE9s para profesionales. Ya sea que lideres equipos, vendas soluciones t\xE9cnicas, te prepares para entrevistas o te expandes internacionalmente\u2014nuestros programas est\xE1n dise\xF1ados para resultados reales." })}  ${renderComponent($$result2, "ProfessionalProfiles", $$ProfessionalProfiles, { "profiles": professionalProfilesEs, "content": professionalProfilesContent })}  ${renderComponent($$result2, "CtaBanner", $$CtaBanner, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/index.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/servicios/index.astro";
const $$url = "/es/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
