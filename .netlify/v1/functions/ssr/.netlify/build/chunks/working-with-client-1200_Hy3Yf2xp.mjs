import { a as createComponent, c as createAstro, r as renderComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_D3t1T5I4.mjs';
import { $ as $$ } from './.Layout_CLomzcre.mjs';

const $$Astro$1 = createAstro("https://www.nyenglishteacher.com");
const $$LineChart = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LineChart;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chart-line", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M3 3v16a2 2 0 0 0 2 2h16"></path> <path d="m19 9-5 5-4-4-3 3"></path> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/node_modules/lucide-astro/dist/LineChart.astro", void 0);

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$Waves = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Waves;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "waves", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path> <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path> <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/node_modules/lucide-astro/dist/Waves.astro", void 0);

const meImage = new Proxy({"src":"/_astro/me-blue-shirt.Ck-D4-sq.jpg","width":850,"height":1134,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/about/me-blue-shirt.jpg";
							}
							
							return target[name];
						}
					});

const ceoImage = new Proxy({"src":"/_astro/working-with-client-1200.BwJi9AyQ.jpg","width":1200,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/about/working-with-client-1200.jpg";
							}
							
							return target[name];
						}
					});

export { $$LineChart as $, $$Waves as a, ceoImage as c, meImage as m };
