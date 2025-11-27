import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_Bn_CzPt-.mjs';
import { n as nycImage } from '../../chunks/nyc-thank-you_DtMqLjQy.mjs';
export { renderers } from '../../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "\xA1Gracias! | New York English",
    description: "Gracias por contactarme. Me pondr\xE9 en contacto pronto para discutir tus objetivos de comunicaci\xF3n en ingl\xE9s."
  };
  const heroContent = {
    title: "\xA1Gracias!",
    description: "He recibido tu mensaje y me pondr\xE9 en contacto pronto.",
    backgroundImage: nycImage,
    overlayOpacity: 0.4
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "es", "tkey": "thank-you", "title": metadata.title, "description": metadata.description, "ogImage": { src: "/images/logos/new-york-english-sq-og.jpg" }, "hideCta": false, "noindex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<section class="py-16 md:py-24"> <div class="site-container px-4 text-center max-w-2xl mx-auto"> <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
¿Qué Sigue?
</h2> <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
Mientras esperas, siéntete libre de explorar:
</p> <div class="flex flex-col md:flex-row gap-6 justify-center mb-8"> <a href="/es/servicios/" class="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"> <svg class="w-8 h-8 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg> <span class="text-lg font-medium text-gray-900 dark:text-white">Revisa nuestros diferentes servicios</span> </a> <a href="/es/testimonios/" class="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"> <svg class="w-8 h-8 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> <span class="text-lg font-medium text-gray-900 dark:text-white">Ve testimonios de estudiantes exitosos</span> </a> </div> ${renderComponent($$result2, "Button", $$Button, { "href": "/es/", "variant": "primary" }, { "default": ($$result3) => renderTemplate`Volver a la Página Principal` })} </div> </section> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/thank-you.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/thank-you.astro";
const $$url = "/es/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
