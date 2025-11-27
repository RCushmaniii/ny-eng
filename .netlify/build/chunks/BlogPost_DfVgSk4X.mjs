import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, g as addAttribute, r as renderComponent } from './astro/server_D3t1T5I4.mjs';
import { c as categories, $ as $$Date } from './Date_BT8kJAu9.mjs';
import 'clsx';
import { $ as $$Image } from './_astro_assets_C60441bi.mjs';

const $$Astro$1 = createAstro("https://www.nyenglishteacher.com");
const $$HashtagCategory = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HashtagCategory;
  const { category, lang = Astro2.url.pathname.startsWith("/es/") ? "es" : "en" } = Astro2.props;
  const categoryData = categories.find(
    (c) => lang === "es" && c.name_es === category || c.name === category
  );
  const displayCategory = categoryData ? lang === "es" && categoryData.name_es ? categoryData.name_es : categoryData.name : category;
  return renderTemplate`${maybeRenderHead()}<span class="text-sm text-gray-700 font-medium group-hover:text-primary transition-colors duration-300 mr-2">
#${displayCategory.toLowerCase().replace(/\s+/g, "").replace(/&/g, "y")} </span>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/ui/HashtagCategory.astro", void 0);

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, excerpt, featuredImage, imageAlt, publishDate, categories: postCategories, slug = "", index, lang } = Astro2.props;
  const cleanSlug = slug.replace(/^(en|es)\//, "");
  const validCategories = postCategories.filter((categoryName) => {
    if (lang === "es") {
      return categories.some(
        (category) => category.name_es && category.name_es === categoryName || category.name === categoryName
      );
    } else {
      return categories.some((category) => category.name === categoryName);
    }
  });
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${lang}/blog/${cleanSlug}/`, "href")} class="group flex flex-col h-full overflow-hidden bg-white rounded-lg border border-black transition-all duration-300 hover:border-primary" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}> <div class="relative aspect-[16/9] overflow-hidden border-black border-b group-hover:border-primary transition-colors duration-300"> ${featuredImage && typeof featuredImage === "object" && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": featuredImage, "alt": imageAlt || title, "width": 600, "height": 338, "class": "object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" })}`} <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> </div> <div class="py-4 px-4 flex flex-col flex-grow relative"> <!-- Date at the top --> <div class="text-sm text-gray-600 mb-3 group-hover:text-primary/80 transition-colors duration-300"> ${renderComponent($$result, "Date", $$Date, { "date": publishDate, "lang": lang })} </div> <h2 class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300"> ${title} </h2> <p class="mt-2 mb-8 text-body-base line-clamp-4 flex-grow text-small group-hover:text-gray-700 transition-colors duration-300"> ${excerpt ?? "Read more..."} </p> <!-- Categories as hashtags at the bottom --> <div class="absolute bottom-4 left-4 flex flex-wrap"> ${validCategories.map((categoryName) => renderTemplate`<div class="stop-prop"> ${renderComponent($$result, "HashtagCategory", $$HashtagCategory, { "category": categoryName, "lang": lang })} </div>`)} </div> </div> </a>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/blog/BlogPost.astro", void 0);

export { $$BlogPost as $ };
