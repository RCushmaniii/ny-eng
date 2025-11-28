import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_CMgxdnwz.mjs';
import { $ as $$MarkdownLayout } from '../../../chunks/MarkdownLayout_BHKIIE_j.mjs';
import { marked } from 'marked';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$BlogI18NEdgeCases = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogI18NEdgeCases;
  const blogContent = await import('../../../chunks/BLOG-I18N-EDGE-CASES_CJ_uJVUQ.mjs');
  const markdownText = blogContent.default;
  const htmlContent = marked(markdownText);
  const frontmatter = {
    title: "Blog i18n Edge Cases",
    description: "Edge cases and solutions for blog internationalization",
    category: "Blog",
    icon: "\u{1F4DD}"
  };
  return renderTemplate`${renderComponent($$result, "MarkdownLayout", $$MarkdownLayout, { "frontmatter": frontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(htmlContent)}` })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/blog-i18n-edge-cases.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/blog-i18n-edge-cases.astro";
const $$url = "/dev/docs/blog-i18n-edge-cases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlogI18NEdgeCases,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
