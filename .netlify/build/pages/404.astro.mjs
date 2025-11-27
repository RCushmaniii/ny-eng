import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../chunks/Base_D0GHnMc8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const isSpanishPath = Astro2.url.pathname.startsWith("/es");
  const lang = isSpanishPath ? "es" : "en";
  const content = {
    en: {
      title: "404: Page Not Found",
      description: "The page you were looking for doesn't exist or has been moved. Please check the URL or use the navigation menu to find what you need, or return to our homepage for more resources.",
      heading: "404",
      subheading: "Page Not Found",
      bodyText: "The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to our homepage.",
      buttonText: "Back to Homepage",
      buttonLink: "/en/"},
    es: {
      title: "404: P\xE1gina No Encontrada",
      description: "La p\xE1gina que buscas no existe o ha sido movida. Por favor verifica la URL o usa el men\xFA de navegaci\xF3n para encontrar lo que necesitas, o vuelve a nuestra p\xE1gina principal para m\xE1s recursos.",
      heading: "404",
      subheading: "P\xE1gina No Encontrada",
      bodyText: "La p\xE1gina que buscas no existe o ha sido movida. Por favor, verifica la URL o navega de regreso a nuestra p\xE1gina principal.",
      buttonText: "Volver a la P\xE1gina Principal",
      buttonLink: "/es/"}
  };
  const pageContent = isSpanishPath ? content.es : content.en;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": pageContent.title, "description": pageContent.description, "lang": lang, "tkey": "404", "ogImage": { src: "/images/logos/new-york-english-sq-og.jpg" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full min-h-[80vh] flex items-center"> <div class="site-container mx-auto px-4 py-base text-center"> <div class="max-w-2xl mx-auto"> <h1 class="mb-4 text-9xl font-bold text-primary" data-aos="fade-up"> ${pageContent.heading} </h1> <h2 class="mb-8" data-aos="fade-up" data-aos-delay="100"> ${pageContent.subheading} </h2> <p class="text-body-base mb-12" data-aos="fade-up" data-aos-delay="200"> ${pageContent.bodyText} </p> <div data-aos="fade-up" data-aos-delay="300"> ${renderComponent($$result2, "Button", $$Button, { "href": pageContent.buttonLink, "variant": "primary", "size": "lg" }, { "default": ($$result3) => renderTemplate`${pageContent.buttonText}` })} </div> </div> </div> </div> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/404.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
