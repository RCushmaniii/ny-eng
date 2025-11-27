import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$Challenge, a as $$MethodologySection, b as $$FeaturedTestimonial, c as $$CtaSection } from '../../../chunks/CtaSection_0eMfMH1J.mjs';
import { s as services } from '../../../chunks/services_B12aH-xU.mjs';
import { c as coreMethodology } from '../../../chunks/methodology_Dk6F-KZ9.mjs';
import { t as testimonials } from '../../../chunks/en_CaYIpOur.mjs';
export { renderers } from '../../../renderers.mjs';

const $$StartupFounders = createComponent(($$result, $$props, $$slots) => {
  const serviceSlug = "startup-founders";
  const serviceData = services.find((service) => service.slug === serviceSlug);
  const heroContent = {
    title: "Scale Your Startup with Confident English Communication",
    description: "Master the language of innovation, investment, and leadership. From pitch decks to board meetings, communicate your vision with clarity and authority.",
    backgroundImage: serviceData?.backgroundImage,
    overlayOpacity: 0.7
  };
  const challengeContent = {
    headline: "Does This Sound Familiar?",
    painPoints: [
      "You struggle to articulate your vision clearly to investors and stakeholders",
      "Technical explanations sound confusing instead of compelling in English",
      "You lose credibility due to grammar mistakes during crucial presentations",
      "Your team meetings lack the clarity needed to drive rapid execution",
      "You avoid speaking opportunities that could accelerate your company's growth"
    ],
    icon: "\u{1F680}",
    image: serviceData?.squareImage
  };
  const hugoTestimonial = testimonials.find((t) => t.slug === "hugo-blum-100-ladrillos");
  const ctaContent = {
    eyebrow: "Take the Final Step",
    title: "Transform Your Startup Communication",
    description: "A free, no-obligation strategy session is the best way to understand how targeted coaching can accelerate your company's growth through better communication.",
    buttonText: "Book My Free Strategy Session",
    buttonLink: "/en/book/",
    whatToExpectTitle: "In Your Free Session, We Will:",
    whatToExpectList: [
      "Assess your current communication challenges as a founder",
      "Identify key opportunities to improve investor and team interactions",
      "Create a personalized plan to scale your leadership communication"
    ]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Startup Founders English Coaching | NY English", "description": "English coaching for startup founders. Perfect your investor pitch, lead your team, and communicate your vision with confidence and clarity.", "lang": "en", "tkey": "services/startup-founders", "ogImage": { src: typeof serviceData?.backgroundImage === "string" ? serviceData.backgroundImage : "/images/logos/new-york-english-og.jpg" }, "customHreflangs": [
    { lang: "en-US", href: "https://www.nyenglishteacher.com/en/services/startup-founders/" },
    { lang: "es-MX", href: "https://www.nyenglishteacher.com/es/servicios/ingles-para-fundadores-de-startups/" }
  ], "customCanonical": "https://www.nyenglishteacher.com/en/services/startup-founders/" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })}  ${renderComponent($$result2, "Challenge", $$Challenge, { "content": challengeContent })}  ${renderComponent($$result2, "MethodologySection", $$MethodologySection, { "content": coreMethodology })}  ${hugoTestimonial && renderTemplate`${renderComponent($$result2, "FeaturedTestimonial", $$FeaturedTestimonial, { "testimonial": hugoTestimonial })}`} ${renderComponent($$result2, "CtaSection", $$CtaSection, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/startup-founders.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/startup-founders.astro";
const $$url = "/en/services/startup-founders";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StartupFounders,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
