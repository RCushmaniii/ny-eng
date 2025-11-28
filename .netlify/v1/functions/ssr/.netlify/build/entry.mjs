import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_m0Widu37.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/leads.astro.mjs');
const _page3 = () => import('./pages/api/admin/leads.astro.mjs');
const _page4 = () => import('./pages/api/quiz/submit.astro.mjs');
const _page5 = () => import('./pages/api/quiz/test.astro.mjs');
const _page6 = () => import('./pages/dev/dashboard.astro.mjs');
const _page7 = () => import('./pages/dev/docs/bilingual-system-guide.astro.mjs');
const _page8 = () => import('./pages/dev/docs/blog-i18n-edge-cases.astro.mjs');
const _page9 = () => import('./pages/dev/docs/booking-system.astro.mjs');
const _page10 = () => import('./pages/dev/docs/deployment-checklist.astro.mjs');
const _page11 = () => import('./pages/dev/docs/documentation-index.astro.mjs');
const _page12 = () => import('./pages/dev/docs/hreflang-fix-summary.astro.mjs');
const _page13 = () => import('./pages/dev/docs/image-optimization-priorities.astro.mjs');
const _page14 = () => import('./pages/dev/docs/quiz-lead-magnet-system.astro.mjs');
const _page15 = () => import('./pages/dev/docs/redirect-analysis-summary.astro.mjs');
const _page16 = () => import('./pages/dev/docs/windsurf-rules.astro.mjs');
const _page17 = () => import('./pages/dev/docs.astro.mjs');
const _page18 = () => import('./pages/en/404.astro.mjs');
const _page19 = () => import('./pages/en/about.astro.mjs');
const _page20 = () => import('./pages/en/assessments.astro.mjs');
const _page21 = () => import('./pages/en/blog/_page_.astro.mjs');
const _page22 = () => import('./pages/en/blog/_slug_.astro.mjs');
const _page23 = () => import('./pages/en/blog.astro.mjs');
const _page24 = () => import('./pages/en/blog/_---page_.astro.mjs');
const _page25 = () => import('./pages/en/blog/_---slug_.astro.mjs');
const _page26 = () => import('./pages/en/book.astro.mjs');
const _page27 = () => import('./pages/en/category/_category_.astro.mjs');
const _page28 = () => import('./pages/en/contact.astro.mjs');
const _page29 = () => import('./pages/en/faqs.astro.mjs');
const _page30 = () => import('./pages/en/legal/privacy-policy.astro.mjs');
const _page31 = () => import('./pages/en/legal/terms-of-service.astro.mjs');
const _page32 = () => import('./pages/en/legal/_---slug_.astro.mjs');
const _page33 = () => import('./pages/en/quiz/executives.astro.mjs');
const _page34 = () => import('./pages/en/quiz/high-stakes.astro.mjs');
const _page35 = () => import('./pages/en/quiz/it-services.astro.mjs');
const _page36 = () => import('./pages/en/quiz/professional-services.astro.mjs');
const _page37 = () => import('./pages/en/quiz/question/_id_.astro.mjs');
const _page38 = () => import('./pages/en/quiz/report.astro.mjs');
const _page39 = () => import('./pages/en/quiz/results.astro.mjs');
const _page40 = () => import('./pages/en/quiz/start.astro.mjs');
const _page41 = () => import('./pages/en/quiz/_quiztype_/question/_id_.astro.mjs');
const _page42 = () => import('./pages/en/quiz/_quiztype_/report.astro.mjs');
const _page43 = () => import('./pages/en/quiz/_quiztype_/results.astro.mjs');
const _page44 = () => import('./pages/en/services/executive-english.astro.mjs');
const _page45 = () => import('./pages/en/services/high-stakes-english.astro.mjs');
const _page46 = () => import('./pages/en/services/interview-prep.astro.mjs');
const _page47 = () => import('./pages/en/services/logistics-english.astro.mjs');
const _page48 = () => import('./pages/en/services/medical-english.astro.mjs');
const _page49 = () => import('./pages/en/services/professional-english.astro.mjs');
const _page50 = () => import('./pages/en/services/public-speaking-english.astro.mjs');
const _page51 = () => import('./pages/en/services/startup-founders.astro.mjs');
const _page52 = () => import('./pages/en/services/tech-english.astro.mjs');
const _page53 = () => import('./pages/en/services/technical-sales-english.astro.mjs');
const _page54 = () => import('./pages/en/services.astro.mjs');
const _page55 = () => import('./pages/en/testimonials/_industry_.astro.mjs');
const _page56 = () => import('./pages/en/testimonials.astro.mjs');
const _page57 = () => import('./pages/en/thank-you.astro.mjs');
const _page58 = () => import('./pages/en.astro.mjs');
const _page59 = () => import('./pages/es/404.astro.mjs');
const _page60 = () => import('./pages/es/about.astro.mjs');
const _page61 = () => import('./pages/es/assessments.astro.mjs');
const _page62 = () => import('./pages/es/blog/_page_.astro.mjs');
const _page63 = () => import('./pages/es/blog/_slug_.astro.mjs');
const _page64 = () => import('./pages/es/blog.astro.mjs');
const _page65 = () => import('./pages/es/blog/_---page_.astro.mjs');
const _page66 = () => import('./pages/es/blog/_---slug_.astro.mjs');
const _page67 = () => import('./pages/es/categoria/_category_.astro.mjs');
const _page68 = () => import('./pages/es/category/_category_.astro.mjs');
const _page69 = () => import('./pages/es/contact.astro.mjs');
const _page70 = () => import('./pages/es/faqs.astro.mjs');
const _page71 = () => import('./pages/es/legal/privacy-policy.astro.mjs');
const _page72 = () => import('./pages/es/legal/terms-of-service.astro.mjs');
const _page73 = () => import('./pages/es/legal/_---slug_.astro.mjs');
const _page74 = () => import('./pages/es/quiz/executives.astro.mjs');
const _page75 = () => import('./pages/es/quiz/high-stakes.astro.mjs');
const _page76 = () => import('./pages/es/quiz/it-services.astro.mjs');
const _page77 = () => import('./pages/es/quiz/professional-services.astro.mjs');
const _page78 = () => import('./pages/es/quiz/question/_id_.astro.mjs');
const _page79 = () => import('./pages/es/quiz/report.astro.mjs');
const _page80 = () => import('./pages/es/quiz/results.astro.mjs');
const _page81 = () => import('./pages/es/quiz/start.astro.mjs');
const _page82 = () => import('./pages/es/quiz/_quiztype_/question/_id_.astro.mjs');
const _page83 = () => import('./pages/es/quiz/_quiztype_/results.astro.mjs');
const _page84 = () => import('./pages/es/reservar.astro.mjs');
const _page85 = () => import('./pages/es/servicios/hablar-en-publico.astro.mjs');
const _page86 = () => import('./pages/es/servicios/ingles-para-ejecutivos.astro.mjs');
const _page87 = () => import('./pages/es/servicios/ingles-para-fundadores-de-startups.astro.mjs');
const _page88 = () => import('./pages/es/servicios/ingles-para-logistica.astro.mjs');
const _page89 = () => import('./pages/es/servicios/ingles-para-medicos.astro.mjs');
const _page90 = () => import('./pages/es/servicios/ingles-para-presentaciones.astro.mjs');
const _page91 = () => import('./pages/es/servicios/ingles-para-profesionales.astro.mjs');
const _page92 = () => import('./pages/es/servicios/ingles-para-tecnologia.astro.mjs');
const _page93 = () => import('./pages/es/servicios/ingles-para-ventas-tecnicas.astro.mjs');
const _page94 = () => import('./pages/es/servicios/preparacion-para-entrevistas.astro.mjs');
const _page95 = () => import('./pages/es/servicios.astro.mjs');
const _page96 = () => import('./pages/es/testimonios/_industry_.astro.mjs');
const _page97 = () => import('./pages/es/testimonios.astro.mjs');
const _page98 = () => import('./pages/es/thank-you.astro.mjs');
const _page99 = () => import('./pages/es.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/leads.astro", _page2],
    ["src/pages/api/admin/leads.ts", _page3],
    ["src/pages/api/quiz/submit.ts", _page4],
    ["src/pages/api/quiz/test.ts", _page5],
    ["src/pages/dev/dashboard.astro", _page6],
    ["src/pages/dev/docs/bilingual-system-guide.astro", _page7],
    ["src/pages/dev/docs/blog-i18n-edge-cases.astro", _page8],
    ["src/pages/dev/docs/booking-system.astro", _page9],
    ["src/pages/dev/docs/deployment-checklist.astro", _page10],
    ["src/pages/dev/docs/documentation-index.astro", _page11],
    ["src/pages/dev/docs/hreflang-fix-summary.astro", _page12],
    ["src/pages/dev/docs/image-optimization-priorities.astro", _page13],
    ["src/pages/dev/docs/quiz-lead-magnet-system.astro", _page14],
    ["src/pages/dev/docs/redirect-analysis-summary.astro", _page15],
    ["src/pages/dev/docs/windsurf-rules.astro", _page16],
    ["src/pages/dev/docs/index.astro", _page17],
    ["src/pages/en/404.astro", _page18],
    ["src/pages/en/about.astro", _page19],
    ["src/pages/en/assessments/index.astro", _page20],
    ["src/pages/en/blog/[page].astro", _page21],
    ["src/pages/en/blog/[slug].astro", _page22],
    ["src/pages/en/blog/index.astro", _page23],
    ["src/pages/en/blog/[...page].astro", _page24],
    ["src/pages/en/blog/[...slug].astro", _page25],
    ["src/pages/en/book.astro", _page26],
    ["src/pages/en/category/[category].astro", _page27],
    ["src/pages/en/contact.astro", _page28],
    ["src/pages/en/faqs.astro", _page29],
    ["src/pages/en/legal/privacy-policy.astro", _page30],
    ["src/pages/en/legal/terms-of-service.astro", _page31],
    ["src/pages/en/legal/[...slug].astro", _page32],
    ["src/pages/en/quiz/executives/index.astro", _page33],
    ["src/pages/en/quiz/high-stakes/index.astro", _page34],
    ["src/pages/en/quiz/it-services/index.astro", _page35],
    ["src/pages/en/quiz/professional-services/index.astro", _page36],
    ["src/pages/en/quiz/question/[id].astro", _page37],
    ["src/pages/en/quiz/report.astro", _page38],
    ["src/pages/en/quiz/results.astro", _page39],
    ["src/pages/en/quiz/start.astro", _page40],
    ["src/pages/en/quiz/[quizType]/question/[id].astro", _page41],
    ["src/pages/en/quiz/[quizType]/report.astro", _page42],
    ["src/pages/en/quiz/[quizType]/results.astro", _page43],
    ["src/pages/en/services/executive-english.astro", _page44],
    ["src/pages/en/services/high-stakes-english.astro", _page45],
    ["src/pages/en/services/interview-prep.astro", _page46],
    ["src/pages/en/services/logistics-english.astro", _page47],
    ["src/pages/en/services/medical-english.astro", _page48],
    ["src/pages/en/services/professional-english.astro", _page49],
    ["src/pages/en/services/public-speaking-english.astro", _page50],
    ["src/pages/en/services/startup-founders.astro", _page51],
    ["src/pages/en/services/tech-english.astro", _page52],
    ["src/pages/en/services/technical-sales-english.astro", _page53],
    ["src/pages/en/services/index.astro", _page54],
    ["src/pages/en/testimonials/[industry].astro", _page55],
    ["src/pages/en/testimonials/index.astro", _page56],
    ["src/pages/en/thank-you.astro", _page57],
    ["src/pages/en/index.astro", _page58],
    ["src/pages/es/404.astro", _page59],
    ["src/pages/es/about.astro", _page60],
    ["src/pages/es/assessments/index.astro", _page61],
    ["src/pages/es/blog/[page].astro", _page62],
    ["src/pages/es/blog/[slug].astro", _page63],
    ["src/pages/es/blog/index.astro", _page64],
    ["src/pages/es/blog/[...page].astro", _page65],
    ["src/pages/es/blog/[...slug].astro", _page66],
    ["src/pages/es/categoria/[category].astro", _page67],
    ["src/pages/es/category/[category].astro", _page68],
    ["src/pages/es/contact.astro", _page69],
    ["src/pages/es/faqs.astro", _page70],
    ["src/pages/es/legal/privacy-policy.astro", _page71],
    ["src/pages/es/legal/terms-of-service.astro", _page72],
    ["src/pages/es/legal/[...slug].astro", _page73],
    ["src/pages/es/quiz/executives/index.astro", _page74],
    ["src/pages/es/quiz/high-stakes/index.astro", _page75],
    ["src/pages/es/quiz/it-services/index.astro", _page76],
    ["src/pages/es/quiz/professional-services/index.astro", _page77],
    ["src/pages/es/quiz/question/[id].astro", _page78],
    ["src/pages/es/quiz/report.astro", _page79],
    ["src/pages/es/quiz/results.astro", _page80],
    ["src/pages/es/quiz/start.astro", _page81],
    ["src/pages/es/quiz/[quizType]/question/[id].astro", _page82],
    ["src/pages/es/quiz/[quizType]/results.astro", _page83],
    ["src/pages/es/reservar.astro", _page84],
    ["src/pages/es/servicios/hablar-en-publico.astro", _page85],
    ["src/pages/es/servicios/ingles-para-ejecutivos.astro", _page86],
    ["src/pages/es/servicios/ingles-para-fundadores-de-startups.astro", _page87],
    ["src/pages/es/servicios/ingles-para-logistica.astro", _page88],
    ["src/pages/es/servicios/ingles-para-medicos.astro", _page89],
    ["src/pages/es/servicios/ingles-para-presentaciones.astro", _page90],
    ["src/pages/es/servicios/ingles-para-profesionales.astro", _page91],
    ["src/pages/es/servicios/ingles-para-tecnologia.astro", _page92],
    ["src/pages/es/servicios/ingles-para-ventas-tecnicas.astro", _page93],
    ["src/pages/es/servicios/preparacion-para-entrevistas.astro", _page94],
    ["src/pages/es/servicios/index.astro", _page95],
    ["src/pages/es/testimonios/[industry].astro", _page96],
    ["src/pages/es/testimonios/index.astro", _page97],
    ["src/pages/es/thank-you.astro", _page98],
    ["src/pages/es/index.astro", _page99]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c76ae791-de1b-488e-9697-ee6131ffb976"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
