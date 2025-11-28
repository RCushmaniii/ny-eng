import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_CMgxdnwz.mjs';
import { $ as $$MarkdownLayout } from '../../../chunks/MarkdownLayout_BHKIIE_j.mjs';
import { marked } from 'marked';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$RedirectAnalysisSummary = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RedirectAnalysisSummary;
  const redirectContent = await import('../../../chunks/REDIRECT-ANALYSIS-SUMMARY_C2C0siq_.mjs');
  const markdownText = redirectContent.default;
  const htmlContent = marked(markdownText);
  const frontmatter = {
    title: "Redirect Analysis Summary",
    description: "Analysis of redirect chains and URL structure optimization",
    category: "SEO",
    icon: "\u{1F504}"
  };
  return renderTemplate`${renderComponent($$result, "MarkdownLayout", $$MarkdownLayout, { "frontmatter": frontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(htmlContent)}` })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/redirect-analysis-summary.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/redirect-analysis-summary.astro";
const $$url = "/dev/docs/redirect-analysis-summary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RedirectAnalysisSummary,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
