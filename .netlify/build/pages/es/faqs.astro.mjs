import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../chunks/Base_D0GHnMc8.mjs';
import { f as faqHeroImage, $ as $$FaqsSegmented, s as segmentedFaqLists } from '../../chunks/faq-hero_CTyPMMf9.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Obt\xE9n Respuestas a Tus Preguntas | New York English Teacher";
  const seoDescription = "Todo lo que necesitas saber sobre cerrar tu brecha de comunicaci\xF3n y escalar tu carrera con coaching premium de ingl\xE9s.";
  const faqData = segmentedFaqLists.premium_es;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": seoTitle, "description": seoDescription, "lang": "es", "tkey": "faqs", "hideCta": true, "data-astro-cid-5efnm5d6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="faq-hero"${addAttribute(`background-image: url(${faqHeroImage.src})`, "style")} data-astro-cid-5efnm5d6> <img${addAttribute(faqHeroImage.src, "src")} alt="FAQ Hero Background" class="hero-bg-image" data-astro-cid-5efnm5d6> <div class="hero-overlay" data-astro-cid-5efnm5d6></div> <div class="hero-content" data-astro-cid-5efnm5d6> <p class="hero-eyebrow" data-astro-cid-5efnm5d6>// DEPURA TU COMUNICACIÓN</p> <h1 class="hero-title" data-astro-cid-5efnm5d6>Obtén Respuestas a Tus Preguntas</h1> <p class="hero-subtitle" data-astro-cid-5efnm5d6>
Todo lo que necesitas saber sobre optimizar tu inglés para momentos de
        carrera de alto riesgo.
</p> </div> </section>  ${renderComponent($$result2, "FaqsSegmented", $$FaqsSegmented, { "sections": faqData.sections, "showCta": true, "ctaHeading": "\xBFListo para convertir fluidez en influencia?", "ctaButtonText": "Agenda Tu Llamada de Descubrimiento Gratis", "ctaButtonLink": "/es/book/", "data-astro-cid-5efnm5d6": true })} ` })} `;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/faqs.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/faqs.astro";
const $$url = "/es/faqs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faqs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
