import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, g as addAttribute, r as renderComponent } from './astro/server_D3t1T5I4.mjs';
import { $ as $$Image } from './_astro_assets_C60441bi.mjs';
import { n as normalizePath, a as $$Button } from './Base_D0GHnMc8.mjs';
import 'clsx';
/* empty css                         */
import { d as getPaddingClass, c as getBackgroundColor, g as getHeadlineColor, e as getTextColor } from './styleUtils_BxmvIgKT.mjs';
import { a as $$Eyebrow } from './Eyebrow_Dor9w_17.mjs';

const $$Astro$2 = createAstro("https://www.nyenglishteacher.com");
const $$ServicesGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServicesGrid;
  const { services, title = "Master Business English for Career Growth & Global Communication", description = "Unlock your full potential with personalized English coaching for professionals. Whether you're leading teams, selling technical solutions, preparing for interviews, or expanding internationally\u2014our programs are designed for real results." } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="services-grid py-16 bg-gray-50"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> ${title} </h2> ${description && renderTemplate`<p class="text-lg text-gray-600 max-w-3xl mx-auto"> ${description} </p>`} </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"> ${services.map((service) => renderTemplate`<a${addAttribute(normalizePath(service.link), "href")} class="service-card group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[280px] flex items-center justify-center"> <!-- Background Image --> ${renderComponent($$result, "Image", $$Image, { "src": service.backgroundImage, "alt": `${service.title} background`, "class": "absolute inset-0 w-full h-full object-cover", "quality": 70, "format": "webp" })} <!-- Dark overlay --> <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div> <!-- Content --> <div class="text-center text-white p-8 z-10 relative"> <h3 class="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors"> ${service.title} </h3> <p class="text-gray-200 leading-relaxed"> ${service.description} </p> </div> <!-- Hover overlay --> <div class="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> </a>`)} </div> </div> </section>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/sections/ServicesGrid.astro", void 0);

const $$Astro$1 = createAstro("https://www.nyenglishteacher.com");
const $$ProfessionalProfiles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProfessionalProfiles;
  const {
    profiles,
    content,
    title = content?.title ?? "Tailored for Ambitious Professionals",
    description = content?.description ?? "My coaching is not one-size-fits-all. I partner with innovators, leaders, and specialists who need to communicate with precision and authority. I have proven success with:"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="professional-profiles py-16 bg-white" data-astro-cid-nfruxexl> <div class="container mx-auto px-4 text-center" data-astro-cid-nfruxexl> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-astro-cid-nfruxexl> ${title} </h2> <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12" data-astro-cid-nfruxexl> ${description} </p> <div class="profile-tags flex flex-wrap justify-center gap-3 max-w-4xl mx-auto" data-astro-cid-nfruxexl> ${profiles.map((profile) => renderTemplate`<a${addAttribute(profile.link, "href")} class="profile-tag bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer transform" data-astro-cid-nfruxexl> ${profile.name} </a>`)} </div> </div> </section> `;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/sections/ProfessionalProfiles.astro", void 0);

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$CtaBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CtaBanner;
  const {
    content: { eyebrow, title, description, button },
    variant = "contained",
    background = "dark",
    padding,
    paddingTop,
    paddingBottom
  } = Astro2.props;
  const bgColor = getBackgroundColor(background);
  const textColor = getTextColor(background);
  const headlineColor = getHeadlineColor(background);
  const paddingClass = getPaddingClass({ padding, paddingTop, paddingBottom });
  const containerBgColors = {
    white: "bg-background-alt",
    alt: "bg-white",
    dark: "bg-background-dark/50"
  };
  const containerBgColor = containerBgColors[background];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([bgColor, paddingClass], "class:list")}> <div${addAttribute([
    variant === "contained" ? "site-container px-4" : "px-4",
    "text-center"
  ], "class:list")}> <div${addAttribute([
    "mx-auto",
    variant === "contained" ? "max-w-3xl rounded-xl p-12" : "max-w-4xl",
    variant === "contained" && containerBgColor
  ], "class:list")}> ${eyebrow && renderTemplate`${renderComponent($$result, "Eyebrow", $$Eyebrow, { "text": eyebrow, "background": background })}`} <h2${addAttribute([headlineColor], "class:list")} data-aos="fade-up"> ${title} </h2> ${description && renderTemplate`<p${addAttribute(["mt-4", textColor, "opacity-90"], "class:list")} data-aos="fade-up" data-aos-delay="100"> ${description} </p>`} ${button && renderTemplate`<div class="mt-8" data-aos="fade-up" data-aos-delay="200"> ${renderComponent($$result, "Button", $$Button, { "href": button.link, "variant": button.variant || "primary", "target": button.target || "_self", "size": "md" }, { "default": ($$result2) => renderTemplate`${button.text}` })} </div>`} </div> </div> </section>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/sections/CtaBanner.astro", void 0);

const servicesHeroImage = new Proxy({"src":"/_astro/services-hero.BS-G0UU_.jpg","width":1600,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/assets/images/services/services-hero.jpg";
							}
							
							return target[name];
						}
					});

export { $$ServicesGrid as $, $$ProfessionalProfiles as a, $$CtaBanner as b, servicesHeroImage as s };
