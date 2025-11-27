import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$ContactInfo } from '../../chunks/ContactInfo_CnwI9_xv.mjs';
import { b as bookingHero } from '../../chunks/nyc-statue-of-liberty_Dd5Jdjvm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const heroContent = {
    title: "Cont\xE1ctame",
    description: "Si tu ingl\xE9s pudiera hablar\u2026 \xBFser\xEDa merecedor de un ascenso?"
  };
  const metadata = {
    title: "Contacto | Coaching de Ingl\xE9s Empresarial en NY",
    description: "Cont\xE1ctame por formulario o WhatsApp para consultas sobre coaching de ingl\xE9s ejecutivo personalizado."
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "es", "tkey": "contact", "title": metadata.title, "description": metadata.description, "ogImage": {
    src: "/images/logos/new-york-english-sq-og.jpg",
    alt: "Contacto New York English Teacher - Coach de Comunicaci\xF3n en Ingl\xE9s de Negocios",
    width: 1200,
    height: 630
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": {
    ...heroContent,
    backgroundImage: bookingHero,
    overlayOpacity: 0.3
  } })} ${renderComponent($$result2, "ContactInfo", $$ContactInfo, { "background": "base", "padding": "base", "lang": "es" })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/contact.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/contact.astro";
const $$url = "/es/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
