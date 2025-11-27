import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { c as coreMethodology } from '../../../chunks/methodology_Dk6F-KZ9.mjs';
import { t as testimonials } from '../../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../../renderers.mjs';

const $$PublicSpeakingEnglish = createComponent(($$result, $$props, $$slots) => {
  const publicSpeakingService = services.find((s) => s.slug === "public-speaking-english");
  const featuredTestimonialSlug = "hugo-lopez-continental";
  const featuredTestimonial = testimonials.find((t) => t.slug === featuredTestimonialSlug);
  const title = "Public Speaking English Coaching for Leaders | NY";
  const seoDescription = "Master public speaking in English. Develop powerful presentation skills and command any room with confidence.";
  const heroContent = {
    title: "Command Any Room with Confident English",
    description: "Master powerful presentation skills and overcome speaking anxiety to deliver impactful messages that inspire action.",
    backgroundImage: publicSpeakingService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "Are You Facing These Challenges?",
    painPoints: [
      "You feel nervous and lose confidence when presenting to English-speaking audiences.",
      "Your accent or pronunciation makes you worry that your message isn't clear or professional.",
      "You struggle to engage your audience and keep them interested throughout your presentation."
    ],
    icon: "\u{1F914}",
    image: publicSpeakingService?.squareImage
  };
  const ctaContent = {
    eyebrow: "Take the Final Step",
    title: "Transform Your Public Speaking",
    description: "A free, no-obligation strategy session is the best way to understand how targeted coaching can boost your confidence and presentation skills.",
    buttonText: "Book My Free Strategy Session",
    buttonLink: "/en/book/",
    whatToExpectTitle: "In Your Free Session, We Will:",
    whatToExpectList: [
      "Assess your current presentation and speaking confidence",
      "Identify specific areas for improvement in public speaking",
      "Create a personalized plan to overcome speaking anxiety"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "en", "tkey": "services/public-speaking-english", "ogImage": {
    src: publicSpeakingService?.backgroundImage?.src || "/images/logos/new-york-english-og.jpg",
    alt: `${title} - Featured Image`,
    width: publicSpeakingService?.backgroundImage?.width,
    height: publicSpeakingService?.backgroundImage?.height
  }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/public-speaking-english/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/hablar-en-publico/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/en/services/public-speaking-english/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": coreMethodology })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/public-speaking-english.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/public-speaking-english.astro";
const $$url = "/en/services/public-speaking-english";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PublicSpeakingEnglish,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
