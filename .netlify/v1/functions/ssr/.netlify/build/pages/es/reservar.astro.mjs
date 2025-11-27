import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$BookingFormSteps } from '../../chunks/BookingFormSteps_B7kZaQmK.mjs';
import { b as bookingHero } from '../../chunks/nyc-statue-of-liberty_Dd5Jdjvm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Reservar = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Reserva Tu Consulta Gratuita de Ingl\xE9s | NY English",
    description: "Agenda tu consulta gratuita de 30 minutos. Obt\xE9n consejos personalizados para mejorar tu ingl\xE9s laboral y descubre c\xF3mo el coaching puede acelerar tu confianza."
  };
  const heroContent = {
    title: "Reserva Tu Consulta Gratuita de Ingl\xE9s",
    description: "Desbloquea la Comunicaci\xF3n Segura en el Trabajo",
    backgroundImage: bookingHero,
    overlayOpacity: 0.5
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "es", "tkey": "book", "title": metadata.title, "description": metadata.description, "ogImage": { src: "/images/logos/new-york-english-sq-og.jpg" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} <section class="py-16 md:py-24 bg-background-light"> <div class="site-container px-4"> <!-- Booking Form with Steps --> ${renderComponent($$result2, "BookingFormSteps", $$BookingFormSteps, { "lang": "es" })} </div> </section> </main> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/reservar.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/reservar.astro";
const $$url = "/es/reservar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reservar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
