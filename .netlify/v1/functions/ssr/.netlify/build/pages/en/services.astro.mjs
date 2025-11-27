import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$Hero } from '../../chunks/Eyebrow_Dor9w_17.mjs';
import { s as servicesHeroImage, $ as $$ServicesGrid, a as $$ProfessionalProfiles, b as $$CtaBanner } from '../../chunks/services-hero_BwqYpdKy.mjs';
import { s as services, p as professionalProfiles } from '../../chunks/services_B12aH-xU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const tkey = "services";
  const seoTitle = "Business English Coaching Services | NY English";
  const seoDescription = "Explore personalized English coaching for executives, tech, medical professionals, and more. Improve your fluency and confidence in real-world business settings.";
  const heroContent = {
    title: "Specialized Business English Coaching for Your Success",
    description: "Targeted programs to sharpen your communication skills and accelerate your career.",
    buttons: [
      {
        text: "Book Your Free Consultation",
        link: "/en/book/",
        variant: "primary"
      }
    ],
    backgroundImage: servicesHeroImage,
    backgroundImageMobile: servicesHeroImage,
    backgroundImageAlt: "Professional business English coaching services",
    overlayOpacity: 0.3
  };
  const professionalProfilesContent = {
    title: "Tailored for Ambitious Professionals",
    description: "My coaching is not one-size-fits-all. I partner with innovators, leaders, and specialists who need to communicate with precision and authority. I have proven success with:"
  };
  const ctaContent = {
    eyebrow: "Not Sure Which Service Is Right for You?",
    title: "Let's discuss your goals and find the perfect path forward.",
    description: "Book a free consultation to discover how I can help you achieve your English communication goals.",
    button: {
      text: "Book a Free Consultation",
      link: "/en/book/",
      variant: "primary"
    }
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": seoTitle, "description": seoDescription, "lang": lang, "tkey": tkey, "ogImage": { src: "/images/logos/new-york-english-og-wide.jpg" }, "heroImage": servicesHeroImage, "hideCta": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "content": heroContent })}  ${renderComponent($$result2, "ServicesGrid", $$ServicesGrid, { "services": services, "title": "Master Business English for Career Growth & Global Communication", "description": "Unlock your full potential with personalized English coaching for professionals. Whether you're leading teams, selling technical solutions, preparing for interviews, or expanding internationally\u2014our programs are designed for real results." })}  ${renderComponent($$result2, "ProfessionalProfiles", $$ProfessionalProfiles, { "profiles": professionalProfiles, "content": professionalProfilesContent })}  ${renderComponent($$result2, "CtaBanner", $$CtaBanner, { "content": ctaContent })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/index.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/services/index.astro";
const $$url = "/en/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
