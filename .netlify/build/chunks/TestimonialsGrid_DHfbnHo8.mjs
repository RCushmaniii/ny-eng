import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, g as addAttribute, r as renderComponent, s as spreadAttributes, d as renderScript, x as defineScriptVars } from './astro/server_D3t1T5I4.mjs';
import { $ as $$Image } from './_astro_assets_C60441bi.mjs';
import { d as cn } from './Base_D0GHnMc8.mjs';
import { a as testimonialsByIndustry, i as industryLabels } from './en_CaYIpOur.mjs';
import { t as testimonialsByIndustry$1, i as industryLabels$1 } from './es_D4JzuYnV.mjs';

const $$Astro$2 = createAstro("https://www.nyenglishteacher.com");
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { testimonial, showHeadline = false, showReadMore = true, showCtaLink = true } = Astro2.props;
  const avatarSizeClass = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  }[testimonial.avatarSize || "md"];
  const stars = "\u2605".repeat(testimonial.stars || 5);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:bg-gray-900 dark:border-gray-800"> ${showHeadline && testimonial.headline && renderTemplate`<h3 class="text-lg font-bold mb-3 text-gray-900 dark:text-white">${testimonial.headline}</h3>`} <div class="mb-4 text-yellow-500 text-xl">${stars}</div> <blockquote class="mb-6 italic text-gray-700 dark:text-gray-300">
"${testimonial.content}"
</blockquote> <div class="flex items-center"> ${typeof testimonial.avatar === "string" ? renderTemplate`<img${addAttribute(testimonial.avatar, "src")}${addAttribute(`${testimonial.author} profile picture`, "alt")}${addAttribute(cn(avatarSizeClass, "rounded-full mr-4 object-cover"), "class")}${addAttribute(testimonial.avatarSize === "lg" ? 64 : 48, "width")}${addAttribute(testimonial.avatarSize === "lg" ? 64 : 48, "height")} loading="lazy">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": testimonial.avatar, "alt": `${testimonial.author} profile picture`, "class": cn(avatarSizeClass, "rounded-full mr-4 object-cover"), "width": testimonial.avatarSize === "lg" ? 64 : 48, "height": testimonial.avatarSize === "lg" ? 64 : 48, "loading": "lazy" })}`} <div> <p class="font-semibold text-gray-900 dark:text-white"> ${testimonial.author} </p> <p class="text-sm text-gray-600 dark:text-gray-400"> ${testimonial.position} ${testimonial.company && `, ${testimonial.company}`} </p> </div> </div> ${showReadMore && showCtaLink && testimonial.link && renderTemplate`<div class="mt-4 text-right"> <a${addAttribute(testimonial.link?.endsWith("/") ? testimonial.link : `${testimonial.link}/`, "href")} class="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"${spreadAttributes(testimonial.link.startsWith("http") ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {})}> ${testimonial.linkText || (testimonial.link.includes("/es/") ? "Leer m\xE1s" : "Read more")} <span class="ml-1">→</span> </a> </div>`} </div>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/ui/TestimonialCard.astro", void 0);

const $$Astro$1 = createAstro("https://www.nyenglishteacher.com");
const $$ExpandableTestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExpandableTestimonialCard;
  const { testimonial, showHeadline = false, showReadMore = true, showCtaLink = true } = Astro2.props;
  const avatarSizeClass = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  }[testimonial.avatarSize || "md"];
  const stars = "\u2605".repeat(testimonial.stars || 5);
  const hasShortContent = !!testimonial.shortContent;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:bg-gray-900 dark:border-gray-800"> ${showHeadline && testimonial.headline && renderTemplate`<h3 class="text-lg font-bold mb-3 text-gray-900 dark:text-white">${testimonial.headline}</h3>`} <div class="mb-4 text-yellow-500 text-xl">${stars}</div> ${hasShortContent ? renderTemplate`<div class="testimonial-content"> <blockquote class="mb-6 italic text-gray-700 dark:text-gray-300 short-content">
"${testimonial.shortContent}"
<span class="text-primary-600 hover:text-primary-800 font-medium text-sm toggle-content-btn cursor-pointer" data-action="expand"${addAttribute(testimonial.link?.includes("/es/") ? "es" : "en", "data-lang")}> ${testimonial.link?.includes("/es/") ? "Mostrar m\xE1s" : "Show more"} </span> </blockquote> <blockquote class="mb-6 italic text-gray-700 dark:text-gray-300 full-content hidden">
"${testimonial.content}"
<span class="text-primary-600 hover:text-primary-800 font-medium text-sm toggle-content-btn cursor-pointer" data-action="collapse"${addAttribute(testimonial.link?.includes("/es/") ? "es" : "en", "data-lang")}> ${testimonial.link?.includes("/es/") ? "Mostrar menos" : "Show less"} </span> </blockquote> </div>` : renderTemplate`<blockquote class="mb-6 italic text-gray-700 dark:text-gray-300">
"${testimonial.content}"
</blockquote>`} <div class="flex items-center"> ${typeof testimonial.avatar === "string" ? renderTemplate`<img${addAttribute(testimonial.avatar, "src")}${addAttribute(`${testimonial.author} profile picture`, "alt")}${addAttribute(cn(avatarSizeClass, "rounded-full mr-4 object-cover"), "class")}${addAttribute(testimonial.avatarSize === "lg" ? 64 : 48, "width")}${addAttribute(testimonial.avatarSize === "lg" ? 64 : 48, "height")} loading="lazy">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": testimonial.avatar, "alt": `${testimonial.author} profile picture`, "class": cn(avatarSizeClass, "rounded-full mr-4 object-cover"), "width": testimonial.avatarSize === "lg" ? 64 : 48, "height": testimonial.avatarSize === "lg" ? 64 : 48, "loading": "lazy" })}`} <div> <p class="font-semibold text-gray-900 dark:text-white"> ${testimonial.author} </p> <p class="text-sm text-gray-600 dark:text-gray-400"> ${testimonial.position} ${testimonial.company && `, ${testimonial.company}`} </p> </div> </div> ${showReadMore && showCtaLink && testimonial.link && renderTemplate`<div class="mt-4 text-right"> <a${addAttribute(testimonial.link?.endsWith("/") ? testimonial.link : `${testimonial.link}/`, "href")} class="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"${spreadAttributes(testimonial.link.startsWith("http") ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {})}> ${testimonial.linkText || (testimonial.link.includes("/es/") ? "Leer m\xE1s" : "Read more")} <span class="ml-1">→</span> </a> </div>`} </div> ${renderScript($$result, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/ui/ExpandableTestimonialCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/ui/ExpandableTestimonialCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$TestimonialsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialsGrid;
  const {
    testimonials: initialTestimonials,
    title = "Client Success Stories",
    description,
    showFilters = true,
    selectedIndustry = "all",
    lang = "en"
  } = Astro2.props;
  const labels = lang === "en" ? industryLabels : industryLabels$1;
  const testimonialsByIndustry$2 = lang === "en" ? testimonialsByIndustry : testimonialsByIndustry$1;
  const testimonials = selectedIndustry === "all" ? initialTestimonials : initialTestimonials.filter((t) => t.industries.includes(selectedIndustry));
  const baseUrl = lang === "en" ? "/en/testimonials/" : "/es/testimonios/";
  const availableIndustries = Object.entries(testimonialsByIndustry$2).filter(([_, testimonials2]) => testimonials2.length > 0).map(([industry]) => industry);
  return renderTemplate`${maybeRenderHead()}<section class="testimonials-grid py-16 bg-gray-50"> <div class="container mx-auto px-4"> <div class="text-center mb-12 pt-16"> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> ${title} </h1> ${description && renderTemplate`<p class="text-lg text-gray-600 max-w-3xl mx-auto"> ${description} </p>`} </div> ${showFilters && renderTemplate(_a || (_a = __template(['<div class="mb-10 flex flex-col sm:flex-row justify-center items-center gap-4"> <label for="industry-filter" class="font-medium text-gray-900"> ', ' </label> <div class="relative"> <select id="industry-filter" class="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans" style="font-family: NotoSansKR, ui-sans-serif, system-ui, sans-serif;"> ', " </select> <script>(function(){", "\n            const industryFilter = document.getElementById('industry-filter');\n            if (industryFilter instanceof HTMLSelectElement) {\n              industryFilter.addEventListener('change', function() {\n                const selectedIndustry = this.value;\n                if (selectedIndustry === 'all') {\n                  window.location.href = baseUrl;\n                } else {\n                  window.location.href = `${baseUrl}${selectedIndustry}/`;\n                }\n              });\n            }\n          })();<\/script> </div> </div>"], ['<div class="mb-10 flex flex-col sm:flex-row justify-center items-center gap-4"> <label for="industry-filter" class="font-medium text-gray-900"> ', ' </label> <div class="relative"> <select id="industry-filter" class="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 font-sans" style="font-family: NotoSansKR, ui-sans-serif, system-ui, sans-serif;"> ', " </select> <script>(function(){", "\n            const industryFilter = document.getElementById('industry-filter');\n            if (industryFilter instanceof HTMLSelectElement) {\n              industryFilter.addEventListener('change', function() {\n                const selectedIndustry = this.value;\n                if (selectedIndustry === 'all') {\n                  window.location.href = baseUrl;\n                } else {\n                  window.location.href = \\`\\${baseUrl}\\${selectedIndustry}/\\`;\n                }\n              });\n            }\n          })();<\/script> </div> </div>"])), lang === "en" ? "Filter by industry:" : "Filtrar por industria:", Object.entries(labels).filter(([key]) => availableIndustries.includes(key)).map(([key, label]) => renderTemplate`<option${addAttribute(key, "value")}${addAttribute(selectedIndustry === key, "selected")}>${label}</option>`), defineScriptVars({ baseUrl }))} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"> ${testimonials.map((testimonial) => testimonial.shortContent ? renderTemplate`${renderComponent($$result, "ExpandableTestimonialCard", $$ExpandableTestimonialCard, { "testimonial": testimonial, "showHeadline": true })}` : renderTemplate`${renderComponent($$result, "TestimonialCard", $$TestimonialCard, { "testimonial": testimonial, "showHeadline": true })}`)} </div> ${testimonials.length === 0 && renderTemplate`<div class="text-center py-16"> <p class="text-lg text-gray-600 mb-4"> ${lang === "en" ? "No testimonials found for this industry." : "No se encontraron testimonios para esta industria."} </p> <a${addAttribute(baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`, "href")} class="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"> ${lang === "en" ? "View All Testimonials" : "Ver Todos los Testimonios"} </a> </div>`} </div> </section>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/sections/TestimonialsGrid.astro", void 0);

export { $$TestimonialsGrid as $ };
