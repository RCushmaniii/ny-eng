import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$InnerHero } from '../../chunks/InnerHero_Bn_CzPt-.mjs';
import { $ as $$BookingFormSteps } from '../../chunks/BookingFormSteps_B7kZaQmK.mjs';
import { b as bookingHero } from '../../chunks/nyc-statue-of-liberty_Dd5Jdjvm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Book = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Book Your Free Business English Consultation | NY English",
    description: "Schedule your free 30-minute consultation. Get personalized advice on improving your English for work and discover how coaching can fast-track your confidence."
  };
  const heroContent = {
    title: "Book Your Free Business English Consultation",
    description: "Unlock Confident Communication at Work",
    backgroundImage: bookingHero,
    overlayOpacity: 0.5
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "en", "tkey": "book", "title": metadata.title, "description": metadata.description, "ogImage": { src: "/images/logos/new-york-english-sq-og.jpg" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} <section class="py-16 md:py-24 bg-background-light"> <div class="site-container px-4"> <!-- Booking Form with Steps --> ${renderComponent($$result2, "BookingFormSteps", $$BookingFormSteps, { "lang": "en" })} </div> </section> </main> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/book.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/book.astro";
const $$url = "/en/book";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Book,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
