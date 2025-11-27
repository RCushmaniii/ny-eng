import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { c as coreMethodology } from '../../../chunks/methodology_Dk6F-KZ9.mjs';
import { t as testimonials } from '../../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../../renderers.mjs';

const $$ProfessionalEnglish = createComponent(($$result, $$props, $$slots) => {
  const professionalService = services.find(
    (s) => s.slug === "professional-english"
  );
  const featuredTestimonialSlug = "dra-erika-itzel-medical-doctor";
  const featuredTestimonial = testimonials.find(
    (t) => t.slug === featuredTestimonialSlug
  );
  const title = "Professional English Coaching for Specialists | NY";
  const seoDescription = "Master professional English for medical and legal specialists. Communicate clearly with clients and colleagues.";
  const heroContent = {
    title: "English for Professional Fields",
    description: "Master specialized terminology and communicate with clarity in every client interaction and professional setting.",
    backgroundImage: professionalService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "Are You Facing These Challenges?",
    painPoints: [
      "You feel less confident explaining complex topics to English-speaking clients or patients.",
      "Specialized terminology and pronunciation create barriers during professional interactions.",
      "You worry about miscommunication affecting client relationships and trust."
    ],
    icon: "\u{1F914}",
    image: professionalService?.squareImage,
    quizCta: {
      text: "Get your Professional Communication Score in 60 seconds.",
      link: "/en/quiz/professional-services/question/1",
      linkLabel: "Start the Quiz \u2192"
    }
  };
  const ctaContent = {
    eyebrow: "Take the Final Step",
    title: "Transform Your Professional Communication",
    description: "A free, no-obligation strategy session is the best way to understand how targeted coaching can improve client interactions and boost your confidence.",
    buttonText: "Book My Free Strategy Session",
    buttonLink: "/en/book/",
    whatToExpectTitle: "In Your Free Session, We Will:",
    whatToExpectList: [
      "Assess your current professional English communication skills",
      "Identify specific areas for improvement in client interactions",
      "Create a personalized learning plan for your professional field"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "en", "tkey": "services/professional-english", "ogImage": {
    src: typeof professionalService?.backgroundImage === "string" ? professionalService.backgroundImage : "/images/logos/new-york-english-og.jpg"
  }, "customHreflangs": [
    {
      lang: "en-US",
      href: "https://www.nyenglishteacher.com/en/services/professional-english/"
    },
    {
      lang: "es-MX",
      href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-profesionales/"
    }
  ], "customCanonical": "https://www.nyenglishteacher.com/en/services/professional-english/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": coreMethodology })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/professional-english.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/professional-english.astro";
const $$url = "/en/services/professional-english";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProfessionalEnglish,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
