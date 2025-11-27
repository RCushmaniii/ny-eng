import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$TestimonialsGrid } from '../../chunks/TestimonialsGrid_DHfbnHo8.mjs';
import { p as publishedTestimonials } from '../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Client Success Stories | Executive English Coaching";
  const description = "Real results from executives and professionals who leveled up their English for high-stakes work with personalized coaching.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "tkey": "testimonials", "lang": "en", "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TestimonialsGrid", $$TestimonialsGrid, { "testimonials": publishedTestimonials, "title": "Client Success Stories", "description": "Read how executives, founders, and professionals transformed their English communication for high-stakes work.", "lang": "en" })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/testimonials/index.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/testimonials/index.astro";
const $$url = "/en/testimonials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
