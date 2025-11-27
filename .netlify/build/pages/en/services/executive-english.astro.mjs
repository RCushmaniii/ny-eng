import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { c as coreMethodology } from '../../../chunks/methodology_Dk6F-KZ9.mjs';
import { t as testimonials } from '../../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../../renderers.mjs';

const $$ExecutiveEnglish = createComponent(($$result, $$props, $$slots) => {
  const serviceData = services.find((s) => s.slug === "executive-english");
  if (!serviceData) {
    throw new Error("Executive English service data not found");
  }
  const featuredTestimonial = testimonials[1];
  if (!featuredTestimonial) {
    throw new Error("Featured testimonial not found");
  }
  const title = "Executive English Coaching for C-Level Leaders | NY";
  const seoDescription = "Master executive communication for C-level leaders. Speak with confidence in boardrooms and high-stakes presentations.";
  const heroContent = {
    title: "Speak with Executive Authority",
    description: "Command the boardroom, inspire your teams, and communicate with unwavering confidence.",
    backgroundImage: serviceData.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "Does This Sound Familiar?",
    painPoints: [
      "You hesitate during high-stakes presentations, worried about making language mistakes.",
      "Your ideas lose impact when you can't find the right words quickly enough.",
      "You worry that your strategic vision isn't being communicated clearly across global teams."
    ],
    icon: "\u{1F630}",
    image: serviceData.squareImage,
    quizCta: {
      text: "Discover your Executive Communication Score in 60 seconds.",
      link: "/en/quiz/executives/question/1",
      linkLabel: "Start the Quiz \u2192"
    }
  };
  const ctaContent = {
    eyebrow: "Ready to Lead with Impact?",
    title: "Master Executive Communication",
    description: "A personalized strategy session will show you exactly how to communicate with the authority and clarity that drives real business results.",
    buttonText: "Book My Executive Strategy Session",
    buttonLink: "/en/book/",
    whatToExpectTitle: "In Your Free Session, We Will:",
    whatToExpectList: [
      "Assess your current communication style and executive presence",
      "Identify key scenarios where stronger communication will drive results",
      "Create a roadmap for developing your leadership voice"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "en", "tkey": "services/executive-english", "ogImage": {
    src: typeof serviceData.backgroundImage === "string" ? serviceData.backgroundImage : "/images/logos/new-york-english-og.jpg"
  }, "hideCta": true, "customHreflangs": [
    {
      lang: "en-US",
      href: "https://www.nyenglishteacher.com/en/services/executive-english/"
    },
    {
      lang: "es-MX",
      href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-ejecutivos/"
    }
  ], "customCanonical": "https://www.nyenglishteacher.com/en/services/executive-english/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent, "background": "white", "padding": "lg" })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": coreMethodology, "background": "light", "padding": "lg" })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/executive-english.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/executive-english.astro";
const $$url = "/en/services/executive-english";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ExecutiveEnglish,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
