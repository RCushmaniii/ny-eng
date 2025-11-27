import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { c as coreMethodology } from '../../../chunks/methodology_Dk6F-KZ9.mjs';
import { t as testimonials } from '../../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../../renderers.mjs';

const $$MedicalEnglish = createComponent(($$result, $$props, $$slots) => {
  const medicalService = services.find((s) => s.slug === "medical-english");
  const featuredTestimonialSlug = "dra-erika-itzel-medical-doctor";
  const featuredTestimonial = testimonials.find((t) => t.slug === featuredTestimonialSlug);
  const title = "Medical English Coaching for Healthcare Pros | NY";
  const seoDescription = "Master medical English for international patient care. Build confidence in clinical conversations and healthcare communication.";
  const heroContent = {
    title: "Master Medical English for International Patient Care",
    description: "Build confidence in clinical conversations and communicate with clarity in every healthcare interaction.",
    backgroundImage: medicalService?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "Are You Facing These Challenges?",
    painPoints: [
      "You feel less confident explaining diagnoses or treatment plans to English-speaking patients.",
      "Medical terminology and pronunciation create barriers during patient consultations.",
      "You worry about miscommunication affecting patient care and trust."
    ],
    icon: "\u{1F914}",
    image: medicalService?.squareImage
  };
  const ctaContent = {
    eyebrow: "Take the Final Step",
    title: "Transform Your Medical Communication",
    description: "A free, no-obligation strategy session is the best way to understand how targeted coaching can improve patient care and boost your confidence.",
    buttonText: "Book My Free Strategy Session",
    buttonLink: "/en/book/",
    whatToExpectTitle: "In Your Free Session, We Will:",
    whatToExpectList: [
      "Assess your current medical English communication skills",
      "Identify specific areas for improvement in patient interactions",
      "Create a personalized learning plan for healthcare professionals"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": seoDescription, "lang": "en", "tkey": "services/medical-english", "ogImage": {
    src: medicalService?.backgroundImage?.src || "/images/logos/new-york-english-og.jpg",
    alt: `${title} - Featured Image`,
    width: medicalService?.backgroundImage?.width,
    height: medicalService?.backgroundImage?.height
  }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/medical-english/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-medicos/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/en/services/medical-english/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": coreMethodology })}  ${featuredTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": featuredTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/medical-english.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/medical-english.astro";
const $$url = "/en/services/medical-english";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MedicalEnglish,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
