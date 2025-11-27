import { a as createComponent, c as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_D3t1T5I4.mjs';
import { $ as $$ } from './.Layout_CLomzcre.mjs';

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$Calendar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calendar;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "calendar", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M8 2v4"></path> <path d="M16 2v4"></path> <rect width="18" height="18" x="3" y="4" rx="2"></rect> <path d="M3 10h18"></path> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/node_modules/lucide-astro/dist/Calendar.astro", void 0);

export { $$Calendar as $ };
