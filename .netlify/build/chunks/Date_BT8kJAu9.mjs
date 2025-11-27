import { c as createAstro, a as createComponent, m as maybeRenderHead, g as addAttribute, b as renderTemplate } from './astro/server_D3t1T5I4.mjs';
import 'clsx';

const categories = [
  // Service-based categories (ensure these match service pages)
  {
    name: "Startup Founders",
    name_es: "Inglés para Fundadores de Startups",
    slug: "startup-founders",
    esSlug: "ingles-para-fundadores-de-startups",
    description: "Master English for startup founders. Perfect your investor pitch, communicate your vision clearly, and lead international teams with confidence.",
    description_es: "Domina el inglés para fundadores. Perfecciona tu pitch para inversores, comunica tu visión con claridad y lidera equipos internacionales con confianza."
  },
  {
    name: "Tech English",
    name_es: "Inglés para Tecnología",
    slug: "tech-english",
    esSlug: "ingles-para-tecnologia",
    description: "Master technical English for IT and engineering. Explain complex concepts clearly, lead code reviews, and advance your tech career with confident communication.",
    description_es: "Domina el inglés técnico para IT e ingeniería. Explica conceptos complejos con claridad, lidera code reviews y avanza tu carrera tecnológica con comunicación segura."
  },
  {
    name: "Logistics English",
    name_es: "Inglés para Logística",
    slug: "logistics-english",
    esSlug: "ingles-para-logistica",
    description: "English for the logistics and supply chain industry, focusing on clear communication for global operations.",
    description_es: "Inglés para la industria de logística y cadena de suministro, enfocado en comunicación clara para operaciones globales."
  },
  {
    name: "Professional English",
    name_es: "Inglés para Profesionales",
    slug: "professional-english",
    esSlug: "ingles-para-profesionales",
    description: "Improve professional English for workplace success. Master business communication, write effective emails, and lead confident meetings with colleagues and clients.",
    description_es: "Mejora tu inglés profesional para el éxito laboral. Domina la comunicación empresarial, escribe correos efectivos y lidera reuniones seguras con colegas y clientes."
  },
  {
    name: "High-Stakes English",
    name_es: "Inglés para Presentaciones",
    slug: "high-stakes-english",
    esSlug: "ingles-para-presentaciones",
    description: "Master English for critical presentations and negotiations. Build confidence and clarity for high-pressure situations where your communication matters most.",
    description_es: "Domina el inglés para presentaciones críticas y negociaciones. Desarrolla confianza y claridad para situaciones de alta presión donde tu comunicación es crucial."
  },
  // Core Categories based on the new structure
  {
    name: "Business English",
    name_es: "Inglés para Negocios",
    slug: "business-english",
    esSlug: "ingles-para-negocios",
    description: "Master business vocabulary, professional communication, and industry-specific English for global success.",
    description_es: "Domina el vocabulario empresarial, la comunicación profesional y el inglés específico de tu industria para alcanzar el éxito global."
  },
  {
    name: "High-Impact Communication",
    name_es: "Comunicación de Alto Impacto",
    slug: "high-impact-communication",
    esSlug: "comunicacion-de-alto-impacto",
    description: "Excel in interviews, presentations, pitches, and high-stakes meetings with confident English communication.",
    description_es: "Destaca en entrevistas, presentaciones, propuestas y reuniones importantes con una comunicación en inglés segura y efectiva."
  },
  {
    name: "Career & Leadership",
    name_es: "Carrera & Liderazgo",
    slug: "career-leadership",
    esSlug: "carrera-liderazgo",
    description: "Advance your career with leadership English skills for promotions, visibility, and executive presence.",
    description_es: "Impulsa tu carrera con habilidades de liderazgo en inglés para conseguir promociones, visibilidad y presencia ejecutiva."
  },
  {
    name: "English Coaching",
    name_es: "Coaching en Inglés",
    slug: "english-coaching",
    esSlug: "coaching-en-ingles",
    description: "Discover proven English coaching methods, real client results, and performance-driven learning strategies.",
    description_es: "Descubre métodos comprobados de coaching en inglés, resultados reales de clientes y estrategias de aprendizaje orientadas al rendimiento."
  },
  {
    name: "Executive English",
    name_es: "Inglés Ejecutivo",
    slug: "executive-english",
    esSlug: "ingles-ejecutivo",
    description: "Master executive presence and strategic communication for C-level leaders. Excel in boardroom presentations and high-stakes meetings.",
    description_es: "Domina la presencia ejecutiva y comunicación estratégica para líderes de nivel C. Destaca en presentaciones y reuniones importantes."
  }
];

const $$Astro = createAstro("https://www.nyenglishteacher.com");
const $$Date = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Date;
  const { date, lang = "en" } = Astro2.props;
  let dateObj;
  if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] = date.split("-").map(Number);
    const jsDate = new globalThis.Date();
    jsDate.setFullYear(year, month - 1, day);
    jsDate.setHours(12, 0, 0, 0);
    dateObj = jsDate;
  } else if (date instanceof Date) {
    dateObj = date;
  } else {
    dateObj = new globalThis.Date(date);
  }
  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date provided to Date component");
  }
  let formattedDate;
  if (lang === "es") {
    formattedDate = dateObj.toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } else {
    formattedDate = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).replace(/(\d+)(?=(,))/, (match) => {
      const day = parseInt(match);
      const suffix = ["th", "st", "nd", "rd"][day % 10 > 3 || day > 20 ? 0 : day % 10];
      return day + suffix;
    });
  }
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(dateObj.toISOString(), "datetime")} class="text-sm text-body-base"> ${formattedDate} </time>`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/components/ui/Date.astro", void 0);

export { $$Date as $, categories as c };
