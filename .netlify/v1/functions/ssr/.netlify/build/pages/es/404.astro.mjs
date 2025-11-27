import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../chunks/Base_D0GHnMc8.mjs';
export { renderers } from '../../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "P\xE1gina Desaparecida";
  const seoDescription = "Esta p\xE1gina se tom\xF3 un descanso para tomar caf\xE9 y nunca regres\xF3.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": seoTitle, "description": seoDescription, "lang": "es", "tkey": "404", "ogImage": { src: "/images/logos/new-york-english-sq-og.jpg" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full min-h-[80vh] flex items-center"> <div class="site-container mx-auto px-4 py-base text-center"> <div class="max-w-2xl mx-auto"> <h1 class="mb-4 text-9xl font-bold text-primary" data-aos="fade-up">404</h1> <h2 class="mb-8" data-aos="fade-up" data-aos-delay="100">Página No Encontrada</h2> <p class="text-body-base mb-12" data-aos="fade-up" data-aos-delay="200">
La página que buscas no existe o ha sido movida. 
                    Por favor, verifica la URL o navega de regreso a nuestra página principal.
</p> <div data-aos="fade-up" data-aos-delay="300"> ${renderComponent($$result2, "Button", $$Button, { "href": "/es/", "variant": "primary", "size": "lg" }, { "default": ($$result3) => renderTemplate`
Volver a la Página Principal
` })} </div> </div> </div> </div> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/404.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/404.astro";
const $$url = "/es/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
