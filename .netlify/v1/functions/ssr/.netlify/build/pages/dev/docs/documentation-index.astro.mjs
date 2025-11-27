import { a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, u as unescapeHTML } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$MarkdownLayout } from '../../../chunks/MarkdownLayout_CiROzyT-.mjs';
import { marked } from 'marked';
export { renderers } from '../../../renderers.mjs';

const $$DocumentationIndex = createComponent(async ($$result, $$props, $$slots) => {
  const indexContent = await import('../../../chunks/INDEX_B_keRASC.mjs');
  const markdownText = indexContent.default;
  const htmlContent = marked(markdownText);
  const frontmatter = {
    title: "Documentation Index",
    description: "Main documentation overview and navigation",
    category: "Main",
    icon: "\u{1F3E0}"
  };
  return renderTemplate`${renderComponent($$result, "MarkdownLayout", $$MarkdownLayout, { "frontmatter": frontmatter }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(htmlContent)}` })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/documentation-index.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/docs/documentation-index.astro";
const $$url = "/dev/docs/documentation-index";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DocumentationIndex,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
