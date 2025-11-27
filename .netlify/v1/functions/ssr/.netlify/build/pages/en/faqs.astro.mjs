import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../chunks/Base_D0GHnMc8.mjs';
import { f as faqHeroImage, $ as $$FaqsSegmented, s as segmentedFaqLists } from '../../chunks/faq-hero_CTyPMMf9.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Get Your Questions Answered | New York English Teacher";
  const seoDescription = "Everything you need to know about closing your Communication Gap and scaling your career with premium English coaching.";
  const faqData = segmentedFaqLists.premium;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": seoTitle, "description": seoDescription, "lang": "en", "tkey": "faqs", "hideCta": true, "data-astro-cid-d5bt46l3": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="faq-hero" data-astro-cid-d5bt46l3> <img${addAttribute(faqHeroImage.src, "src")} alt="FAQ Hero Background" class="hero-bg-image" data-astro-cid-d5bt46l3> <div class="hero-overlay" data-astro-cid-d5bt46l3></div> <div class="hero-content" data-astro-cid-d5bt46l3> <p class="hero-eyebrow" data-astro-cid-d5bt46l3>// DEBUG YOUR COMMUNICATION</p> <h1 class="hero-title" data-astro-cid-d5bt46l3>Get Your Questions Answered</h1> <p class="hero-subtitle" data-astro-cid-d5bt46l3>
Everything you need to know about optimizing your English for
        high-stakes career moments.
</p> </div> </section>  ${renderComponent($$result2, "FaqsSegmented", $$FaqsSegmented, { "sections": faqData.sections, "showCta": true, "ctaHeading": "Ready to turn fluency into influence?", "ctaButtonText": "Book Your Free Discovery Call", "ctaButtonLink": "/en/book/", "data-astro-cid-d5bt46l3": true })} ` })} `;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/faqs.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/faqs.astro";
const $$url = "/en/faqs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faqs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
