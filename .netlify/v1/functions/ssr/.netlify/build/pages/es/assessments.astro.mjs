import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base, a as $$Button } from '../../chunks/Base_D0GHnMc8.mjs';
import { $ as $$Laptop } from '../../chunks/Laptop_xhFI1iEF.mjs';
import { $ as $$Briefcase, a as $$GraduationCap, b as $$Presentation } from '../../chunks/Presentation_Dj_9idFW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Evaluaci\xF3n Gratuita de Habilidades de Comunicaci\xF3n | 4 Tests Espec\xEDficos | NY English";
  const description = "Realiza nuestro Quiz de Confianza en Comunicaci\xF3n gratuito de 90 segundos. Obt\xE9n tu puntuaci\xF3n personalizada (0-100) y descubre exactamente qu\xE9 te est\xE1 costando negocios. 4 evaluaciones espec\xEDficas para TI, ejecutivos, profesionales y presentadores.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "es", "tkey": "assessments", "hideCta": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-28 md:pt-32 lg:pt-36 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"> <div class="max-w-5xl mx-auto px-4"> <header class="mb-12 mt-12 text-center"> <p class="text-sm font-semibold uppercase tracking-wide text-sky-600 mb-2">
La Auditoría de Comunicación de 90 Segundos
</p> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
Identifica Tu Puntuación de Autoridad en Comunicación de Liderazgo
</h1> <p class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-4">
Obtén insights instantáneos sobre tu claridad, confianza y presencia
          ejecutiva—los factores que impulsan promociones y confianza.
</p> <ul class="text-left text-base text-slate-700 max-w-xl mx-auto space-y-2 mb-8"> <li class="flex items-start gap-2"> <span class="text-green-600 font-bold mt-0.5">✔</span> <span>4 evaluaciones específicas por industria</span> </li> <li class="flex items-start gap-2"> <span class="text-green-600 font-bold mt-0.5">✔</span> <span>Puntuación personalizada (0–100)</span> </li> <li class="flex items-start gap-2"> <span class="text-green-600 font-bold mt-0.5">✔</span> <span>Análisis instantáneo de brechas y próximos pasos</span> </li> <li class="flex items-start gap-2"> <span class="text-green-600 font-bold mt-0.5">✔</span> <span>Diseñado para profesionales ocupados (toma menos de 2 minutos)</span> </li> </ul> </header> <h2 class="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
Elige Tu Evaluación Especializada
</h2> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-16"> <article class="assessment-card bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"> <div class="flex justify-center mb-4"> <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-md"> ${renderComponent($$result2, "Laptop", $$Laptop, { "size": 36, "class": "text-blue-600" })} </div> </div> <h3 class="text-xl font-bold text-slate-900 mb-2 text-center">
Auditoría de Comunicación para TI
</h3> <p class="text-sm font-medium text-sky-700 mb-4 text-center">
Para Ingenieros Senior, Líderes Técnicos y Gerentes de TI
</p> <ul class="text-sm text-slate-600 space-y-2 mb-6 flex-grow"> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Enfoque:</strong> Traducir complejidad, velocidad de procesamiento
                y discusiones de arquitectura</span> </li> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Resultado:</strong> Puntuación instantánea de Autoridad
                en Comunicación para desbloquear tu carrera</span> </li> </ul> ${renderComponent($$result2, "Button", $$Button, { "href": "/es/quiz/it-services/question/1", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": ($$result3) => renderTemplate`
Iniciar Evaluación de TI →
` })} </article> <article class="assessment-card bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"> <div class="flex justify-center mb-4"> <div class="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center shadow-md"> ${renderComponent($$result2, "Briefcase", $$Briefcase, { "size": 36, "class": "text-purple-600" })} </div> </div> <h3 class="text-xl font-bold text-slate-900 mb-2 text-center">
Auditoría de Comunicación Ejecutiva
</h3> <p class="text-sm font-medium text-sky-700 mb-4 text-center">
Para Fundadores, Ejecutivos C-Level y Líderes Senior
</p> <ul class="text-sm text-slate-600 space-y-2 mb-6 flex-grow"> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Enfoque:</strong> Presencia ejecutiva, claridad estratégica
                y negociación de alto riesgo</span> </li> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Resultado:</strong> Análisis personalizado de brechas y
                próximos pasos para influencia C-Suite</span> </li> </ul> ${renderComponent($$result2, "Button", $$Button, { "href": "/es/quiz/executives/question/1", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": ($$result3) => renderTemplate`
Iniciar Auditoría Ejecutiva →
` })} </article> <article class="assessment-card bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"> <div class="flex justify-center mb-4"> <div class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-md"> ${renderComponent($$result2, "GraduationCap", $$GraduationCap, { "size": 36, "class": "text-green-600" })} </div> </div> <h3 class="text-xl font-bold text-slate-900 mb-2 text-center">
Auditoría de Comunicación Profesional
</h3> <p class="text-sm font-medium text-sky-700 mb-4 text-center">
Para Médicos, Abogados y Consultores Financieros
</p> <ul class="text-sm text-slate-600 space-y-2 mb-6 flex-grow"> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Enfoque:</strong> Precisión, empatía y construcción de confianza
                inquebrantable con clientes/pacientes</span> </li> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Resultado:</strong> Análisis instantáneo de brechas y recomendaciones
                para crecimiento de práctica</span> </li> </ul> ${renderComponent($$result2, "Button", $$Button, { "href": "/es/quiz/professional-services/question/1", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": ($$result3) => renderTemplate`
Iniciar Auditoría Profesional →
` })} </article> <article class="assessment-card bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"> <div class="flex justify-center mb-4"> <div class="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-md"> ${renderComponent($$result2, "Presentation", $$Presentation, { "size": 36, "class": "text-orange-600" })} </div> </div> <h3 class="text-xl font-bold text-slate-900 mb-2 text-center">
Diagnóstico de Desempeño de Alto Impacto
</h3> <p class="text-sm font-medium text-sky-700 mb-4 text-center">
Para Presentadores, Entrevistados y Oradores Públicos
</p> <ul class="text-sm text-slate-600 space-y-2 mb-6 flex-grow"> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Enfoque:</strong> Presencia, velocidad de procesamiento
                y autoridad de persuasión bajo presión</span> </li> <li class="flex items-start gap-2"> <span class="text-slate-400">•</span> <span><strong>Resultado:</strong> Descubre tu "Puntuación de Desempeño
                bajo Presión" al instante</span> </li> </ul> ${renderComponent($$result2, "Button", $$Button, { "href": "/es/quiz/high-stakes/question/1", "variant": "primary", "size": "lg", "class": "w-full" }, { "default": ($$result3) => renderTemplate`
Iniciar Diagnóstico →
` })} </article> </div> </div> </section> ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/assessments/index.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/es/assessments/index.astro";
const $$url = "/es/assessments";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
