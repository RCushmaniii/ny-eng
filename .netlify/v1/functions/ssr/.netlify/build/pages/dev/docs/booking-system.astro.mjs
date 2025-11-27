import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$MarkdownLayout } from '../../../chunks/MarkdownLayout_CiROzyT-.mjs';
import { marked } from 'marked';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$BookingSystem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookingSystem;
  const bookingContent = await import('../../../chunks/BOOKING-SYSTEM_wYoMZPAh.mjs');
  const markdownText = bookingContent.default;
  const htmlContent = marked(markdownText);
  const frontmatter = {
    title: "Booking System",
    description: "Self-scheduling appointment system with Google Calendar integration",
    category: "Marketing",
    icon: "\u{1F4C5}"
  };
  return renderTemplate`${renderComponent($$result, "MarkdownLayout", $$MarkdownLayout, { "frontmatter": frontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(htmlContent)}` })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/booking-system.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/booking-system.astro";
const $$url = "/dev/docs/booking-system";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BookingSystem,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
