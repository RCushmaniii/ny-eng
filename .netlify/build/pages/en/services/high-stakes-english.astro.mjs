import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { c as coreMethodology } from '../../../chunks/methodology_Dk6F-KZ9.mjs';
import { t as testimonials } from '../../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../../renderers.mjs';

const $$HighStakesEnglish = createComponent(($$result, $$props, $$slots) => {
  const highStakesService = services.find(
    (s) => s.slug === "high-stakes-english"
  );
  const featuredTestimonial = testimonials[9];
  const title = "High-Stakes English Coaching for Presentations | NY";
  const seoDescription = "Master English for critical presentations and negotiations. Build confidence when it matters most.";
  const heroContent = {
    title: "High-Stakes English",
    description: "Master English for critical presentations, negotiations, and high-pressure situations where clarity matters most.",
    backgroundImage: highStakesService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "Are You Facing These Challenges?",
    painPoints: [
      "You feel nervous and lose confidence when presenting to English-speaking audiences.",
      "Interview situations in English make you anxious and unable to showcase your true abilities.",
      "You struggle to engage your audience and deliver your message with impact and authority."
    ],
    icon: "\u{1F914}",
    image: highStakesService?.squareImage,
    quizCta: {
      text: "Discover your 'Language Gap' Score in 60 seconds.",
      link: "/en/quiz/high-stakes/question/1",
      linkLabel: "Start the Assessment \u2192"
    }
  };
  const ctaContent = {
    eyebrow: "Take the Final Step",
    title: "Master High-Pressure Communication",
    description: "A free, no-obligation strategy session is the best way to understand how targeted coaching can boost your confidence and communication effectiveness.",
    buttonText: "Book My Free Strategy Session",
    buttonLink: "/en/book/",
    whatToExpectTitle: "In Your Free Session, We Will:",
    whatToExpectList: [
      "Assess your current presentation and interview skills",
      "Identify specific areas for improvement in high-stakes scenarios",
      "Create a personalized plan to overcome speaking anxiety and build confidence"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "en", "tkey": "services/high-stakes-english", "ogImage": {
    src: typeof highStakesService?.backgroundImage === "string" ? highStakesService.backgroundImage : "/images/logos/new-york-english-og.jpg"
  }, "customHreflangs": [
    {
      lang: "en-US",
      href: "https://www.nyenglishteacher.com/en/services/high-stakes-english/"
    },
    {
      lang: "es-MX",
      href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-presentaciones/"
    }
  ], "customCanonical": "https://www.nyenglishteacher.com/en/services/high-stakes-english/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": coreMethodology })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/high-stakes-english.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/high-stakes-english.astro";
const $$url = "/en/services/high-stakes-english";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HighStakesEnglish,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
