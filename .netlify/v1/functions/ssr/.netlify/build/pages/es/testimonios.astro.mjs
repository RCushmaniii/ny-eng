import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$TestimonialsGrid } from '../../chunks/TestimonialsGrid_DHfbnHo8.mjs';
import { p as publishedTestimonials } from '../../chunks/es_D4JzuYnV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Historias de \xC9xito | Coaching de Ingl\xE9s Ejecutivo";
  const description = "Historias de \xE9xito de ejecutivos y profesionales que transformaron su comunicaci\xF3n en ingl\xE9s con coaching personalizado y efectivo.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "es", "tkey": "testimonials", "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TestimonialsGrid", $$TestimonialsGrid, { "testimonials": publishedTestimonials, "title": "Historias de \xC9xito", "description": "Descubre c\xF3mo ejecutivos, fundadores y profesionales transformaron su comunicaci\xF3n en ingl\xE9s para situaciones importantes.", "lang": "es" })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/testimonios/index.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/testimonios/index.astro";
const $$url = "/es/testimonios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
