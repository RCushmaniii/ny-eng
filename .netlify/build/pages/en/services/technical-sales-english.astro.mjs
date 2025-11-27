import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { c as coreMethodology } from '../../../chunks/methodology_Dk6F-KZ9.mjs';
import { t as testimonials } from '../../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../../renderers.mjs';

const $$TechnicalSalesEnglish = createComponent(($$result, $$props, $$slots) => {
  const technicalSalesService = services.find((s) => s.slug === "technical-sales-english");
  const featuredTestimonialSlug = "ricardo-mendoza-mountz-torque";
  const featuredTestimonial = testimonials.find((t) => t.slug === featuredTestimonialSlug);
  const title = "Technical Sales English Coaching for Engineers | NY";
  const seoDescription = "Master technical sales English. Explain complex products clearly and close more deals with confident communication.";
  const heroContent = {
    title: "Close More Deals with Technical Fluency",
    description: "Bridge the gap between complex product specs and clear, persuasive client solutions.",
    backgroundImage: technicalSalesService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "Are You Facing These Challenges?",
    painPoints: [
      "Clients seem confused when you explain the technical advantages of your product.",
      "You rely too heavily on your Sales Engineer, losing your authority in the conversation.",
      "You struggle to find the right words during Q&A to answer technical objections simply."
    ],
    icon: "\u{1F914}",
    image: technicalSalesService?.squareImage
  };
  const ctaContent = {
    eyebrow: "Ready to Close More Deals?",
    title: "Master Technical Sales Communication",
    description: "Discover how to translate complex technical features into compelling value propositions that close deals faster.",
    buttonText: "Book My Sales Strategy Session",
    buttonLink: "/en/book/",
    whatToExpectTitle: "In Your Free Session, We Will:",
    whatToExpectList: [
      "Analyze your current technical sales presentations and identify gaps",
      "Practice simplifying complex concepts for non-technical buyers",
      "Develop strategies to handle technical objections with confidence"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "en", "tkey": "services/technical-sales-english", "ogImage": {
    src: technicalSalesService?.backgroundImage?.src || "/images/logos/new-york-english-og.jpg",
    alt: `${title} - Featured Image`,
    width: technicalSalesService?.backgroundImage?.width,
    height: technicalSalesService?.backgroundImage?.height
  }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/technical-sales-english/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-ventas-tecnicas/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/en/services/technical-sales-english/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": coreMethodology, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/technical-sales-english.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/technical-sales-english.astro";
const $$url = "/en/services/technical-sales-english";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TechnicalSalesEnglish,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
