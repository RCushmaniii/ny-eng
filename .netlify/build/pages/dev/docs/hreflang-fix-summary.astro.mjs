import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$MarkdownLayout } from '../../../chunks/MarkdownLayout_CiROzyT-.mjs';
import { marked } from 'marked';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$HreflangFixSummary = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HreflangFixSummary;
  const hreflangContent = await import('../../../chunks/HREFLANG-FIX-SUMMARY_CxZp0JEO.mjs');
  const markdownText = hreflangContent.default;
  const htmlContent = marked(markdownText);
  const frontmatter = {
    title: "Hreflang Fix Summary",
    description: "Summary of hreflang implementation and SEO fixes",
    category: "SEO",
    icon: "\u{1F517}"
  };
  return renderTemplate`${renderComponent($$result, "MarkdownLayout", $$MarkdownLayout, { "frontmatter": frontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(htmlContent)}` })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/hreflang-fix-summary.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/hreflang-fix-summary.astro";
const $$url = "/dev/docs/hreflang-fix-summary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HreflangFixSummary,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
