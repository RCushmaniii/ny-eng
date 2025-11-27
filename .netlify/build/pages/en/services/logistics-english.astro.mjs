import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { c as coreMethodology } from '../../../chunks/methodology_Dk6F-KZ9.mjs';
import { t as testimonials } from '../../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../../renderers.mjs';

const $$LogisticsEnglish = createComponent(($$result, $$props, $$slots) => {
  const logisticsService = services.find((s) => s.slug === "logistics-english");
  const featuredTestimonialSlug = "karla-sanmina-corporation";
  const featuredTestimonial = testimonials.find((t) => t.slug === featuredTestimonialSlug);
  const title = "Logistics English Coaching for Supply Chain | NY";
  const seoDescription = "Master logistics English for global supply chain. Communicate with precision across carriers, customs, and clients.";
  const heroContent = {
    title: "Master the Language of the Global Supply Chain",
    description: "Communicate with precision across carriers, customs, and clients to keep your operations moving.",
    backgroundImage: logisticsService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "Are You Facing These Challenges?",
    painPoints: [
      "Misunderstandings over BOLs, incoterms, or customs paperwork have caused costly delays.",
      "You struggle to negotiate effectively with international freight forwarders.",
      "Explaining shipping disruptions to clients is stressful and often unclear."
    ],
    icon: "\u{1F914}",
    image: logisticsService?.squareImage
  };
  const ctaContent = {
    eyebrow: "Take the Final Step",
    title: "Transform Your Logistics Communication",
    description: "A free, no-obligation strategy session is the best way to understand how targeted coaching can eliminate communication errors and boost your career.",
    buttonText: "Book My Free Strategy Session",
    buttonLink: "/en/book/",
    whatToExpectTitle: "In Your Free Session, We Will:",
    whatToExpectList: [
      "Pinpoint your specific communication challenges in supply chain operations",
      "Define 1-2 key goals for your professional growth in logistics",
      "Outline a sample learning path tailored to your industry needs"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "en", "tkey": "services/logistics-english", "ogImage": { src: typeof logisticsService?.backgroundImage === "string" ? logisticsService.backgroundImage : "/images/logos/new-york-english-og.jpg" }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/logistics-english/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-logistica/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/en/services/logistics-english/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": coreMethodology, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/logistics-english.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/logistics-english.astro";
const $$url = "/en/services/logistics-english";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LogisticsEnglish,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
