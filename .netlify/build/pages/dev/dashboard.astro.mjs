import { a as createComponent } from '../../chunks/astro/server_CMgxdnwz.mjs';
import 'clsx';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  {
    throw new Error("Dashboard only available in development mode");
  }
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/dashboard.astro", void 0);
const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/dev/dashboard.astro";
const $$url = "/dev/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
