import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { c as coreMethodology } from '../../../chunks/methodology_Dk6F-KZ9.mjs';
import { t as testimonials } from '../../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../../renderers.mjs';

const $$TechEnglish = createComponent(($$result, $$props, $$slots) => {
  const serviceSlug = "tech-english";
  const serviceData = services.find((service) => service.slug === serviceSlug);
  const heroContent = {
    title: "Master Technical English for Global Impact",
    description: "Communicate technical concepts clearly and confidently. Lead code reviews, presentations, and discussions in English with ease.",
    backgroundImage: serviceData?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "Does This Sound Familiar?",
    painPoints: [
      "You struggle to explain complex technical concepts clearly in English",
      "Code reviews and technical discussions feel overwhelming in a second language",
      "You avoid speaking up in architecture meetings due to language barriers",
      "Documentation and technical writing take much longer than they should",
      "You miss out on leadership opportunities because of communication hesitation"
    ],
    icon: "\u{1F4BB}",
    image: serviceData?.squareImage,
    quizCta: {
      text: "Get your Technical Communication Score in 60 seconds.",
      link: "/en/quiz/it-services/question/1",
      linkLabel: "Start the Quiz \u2192"
    }
  };
  const julioTestimonial = testimonials[0];
  const ctaContent = {
    eyebrow: "Take the Final Step",
    title: "Transform Your Technical Communication",
    description: "A free, no-obligation strategy session is the best way to understand how targeted coaching can accelerate your tech career through better English communication.",
    buttonText: "Book My Free Strategy Session",
    buttonLink: "/en/book/",
    whatToExpectTitle: "In Your Free Session, We Will:",
    whatToExpectList: [
      "Assess your current technical communication strengths and gaps",
      "Practice explaining complex technical concepts clearly",
      "Create a personalized plan to boost your confidence in tech discussions"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tech English Coaching for IT Professionals | NY", "description": "Master technical English for IT and engineering. Explain complex ideas clearly, lead code reviews, and boost your tech career with confidence.", "lang": "en", "tkey": "services/tech-english", "ogImage": {
    src: typeof serviceData?.backgroundImage === "string" ? serviceData.backgroundImage : "/images/logos/new-york-english-og.jpg"
  }, "customHreflangs": [
    {
      lang: "en-US",
      href: "https://www.nyenglishteacher.com/en/services/tech-english/"
    },
    {
      lang: "es-MX",
      href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-tecnologia/"
    }
  ], "customCanonical": "https://www.nyenglishteacher.com/en/services/tech-english/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": coreMethodology })}  ${julioTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": julioTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/tech-english.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/tech-english.astro";
const $$url = "/en/services/tech-english";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TechEnglish,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
