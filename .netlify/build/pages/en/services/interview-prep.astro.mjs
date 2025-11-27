import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { c as coreMethodology } from '../../../chunks/methodology_Dk6F-KZ9.mjs';
import { t as testimonials } from '../../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../../renderers.mjs';

const $$InterviewPrep = createComponent(($$result, $$props, $$slots) => {
  const serviceSlug = "interview-prep";
  const serviceData = services.find((service) => service.slug === serviceSlug);
  const heroContent = {
    title: "Land Your Dream Job with Confident English",
    description: "Master the communication skills that get you hired. From technical explanations to executive presence, I'll help you interview with confidence and authority.",
    backgroundImage: serviceData?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "Does This Sound Familiar?",
    painPoints: [
      "You freeze up when explaining your technical expertise in English",
      "Your answers sound rehearsed instead of natural and confident",
      "You struggle to articulate your value proposition clearly",
      "You worry about grammar mistakes undermining your credibility",
      "You can't think of strong examples under interview pressure"
    ],
    icon: "\u{1F4BC}",
    image: serviceData?.squareImage
  };
  const andreaTestimonial = testimonials.find((t) => t.slug === "andrea-ceva-logistics");
  const ctaContent = {
    eyebrow: "Take the Final Step",
    title: "Transform Your Interview Performance",
    description: "A free, no-obligation strategy session is the best way to understand how targeted coaching can boost your interview confidence and success rate.",
    buttonText: "Book My Free Strategy Session",
    buttonLink: "/en/book/",
    whatToExpectTitle: "In Your Free Session, We Will:",
    whatToExpectList: [
      "Assess your current interview communication strengths and gaps",
      "Practice answering common technical and behavioral questions",
      "Create a personalized preparation plan for your target roles"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Interview Preparation English Coaching | NY English", "description": "Master confident English for job interviews. Clear technical explanations, compelling stories, and executive presence that gets you hired.", "lang": "en", "tkey": "services/interview-prep", "ogImage": { src: typeof serviceData?.backgroundImage === "string" ? serviceData.backgroundImage : "/images/logos/new-york-english-og.jpg" }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/interview-prep/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/preparacion-para-entrevistas/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/en/services/interview-prep/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": coreMethodology })}  ${andreaTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": andreaTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/interview-prep.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/interview-prep.astro";
const $$url = "/en/services/interview-prep";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$InterviewPrep,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
