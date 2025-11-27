import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../chunks/Base_D0GHnMc8.mjs';
export { renderers } from '../../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Page Vanished";
  const seoDescription = "This page took a coffee break and never came back.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": seoTitle, "description": seoDescription, "lang": "en", "tkey": "404", "ogImage": { src: "/images/logos/new-york-english-sq-og.jpg" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full min-h-[80vh] flex items-center"> <div class="site-container mx-auto px-4 py-base text-center"> <div class="max-w-2xl mx-auto"> <h1 class="mb-4 text-9xl font-bold text-primary" data-aos="fade-up">404</h1> <h2 class="mb-8" data-aos="fade-up" data-aos-delay="100">Page Not Found</h2> <p class="text-body-base mb-12" data-aos="fade-up" data-aos-delay="200">
The page you're looking for doesn't exist or has been moved. 
                    Please check the URL or navigate back to our homepage.
</p> <div data-aos="fade-up" data-aos-delay="300"> ${renderComponent($$result2, "Button", $$Button, { "href": "/en/", "variant": "primary", "size": "lg" }, { "default": ($$result3) => renderTemplate`
Back to Homepage
` })} </div> </div> </div> </div> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/404.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/404.astro";
const $$url = "/en/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
