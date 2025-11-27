import { a as createComponent, c as createAstro, r as renderComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_D3t1T5I4.mjs';
import { $ as $$ } from './.Layout_CLomzcre.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$BookOpen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookOpen;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "book-open", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 7v14"></path> <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/node_modules/lucide-astro/dist/BookOpen.astro", void 0);

export { $$BookOpen as $ };
