/**
 * Real client quotes for the quiz landing pages.
 *
 * Until 2026-10-12 every quiz landing carried invented testimonials ("Ricardo M.,
 * Amazon", "Sofia L., raised $4M", "I scored 58…"). The quiz has had only a
 * handful of submissions, so no quote may claim to come from a quiz taker.
 *
 * Every excerpt here must be a verbatim slice of a PUBLISHED testimonial in
 * src/data/testimonials/{en,es}.ts. getQuizTestimonials() throws at build time
 * if one is not, so a quiz page can never show words a client did not write.
 */
import { publishedTestimonials as enTestimonials } from "../testimonials/en";
import { publishedTestimonials as esTestimonials } from "../testimonials/es";

export type QuizLandingKey =
  | "hub"
  | "it-services"
  | "executives"
  | "professional-services"
  | "high-stakes";

type Pick = { slug: string; excerpt: string };

const PICKS: Record<QuizLandingKey, Record<"en" | "es", Pick[]>> = {
  hub: {
    en: [
      {
        slug: "luis-manuel-becerra-lucatero-skysense",
        excerpt:
          "I’ve learned to structure presentations for impact, handle impromptu speaking under pressure, and lead conversations with clarity and confidence.",
      },
      {
        slug: "hugo-lopez-continental",
        excerpt:
          "Under his guidance, I moved from feeling hesitant in senior-level discussions to speaking with assurance in top-management meetings and presenting complex updates with clarity and persuasion.",
      },
      {
        slug: "jonathan-emmaus-infosys",
        excerpt:
          "Now I feel much more fluent and confident. I've been able to mobilize multinational teams and align them around strategies that make sense for everyone.",
      },
      {
        slug: "javier-ramirez-sophia",
        excerpt:
          "He uses a situational approach that results in practical knowledge that can be applied on a day to day basis.",
      },
    ],
    es: [
      {
        slug: "luis-manuel-becerra-lucatero-skysense",
        excerpt:
          "Aprendí a estructurar presentaciones con impacto, manejar situaciones de presentación improvisada bajo presión y liderar conversaciones con claridad y confianza.",
      },
      {
        slug: "hugo-lopez-continental",
        excerpt:
          "Bajo su guía, pasé de sentirme inseguro en conversaciones de alto nivel a hablar con seguridad en reuniones de alta dirección y presentar actualizaciones complejas con claridad y persuasión.",
      },
      {
        slug: "jonathan-emmaus-infosys",
        excerpt:
          "Ahora me siento mucho más fluido y seguro. He podido movilizar equipos multinacionales y alinearlos en torno a estrategias que tienen sentido para todos.",
      },
      {
        slug: "javier-ramirez-sophia",
        excerpt:
          "Utiliza un enfoque situacional que resulta en conocimiento práctico que se puede aplicar en el día a día.",
      },
    ],
  },
  "it-services": {
    en: [
      {
        slug: "luis-manuel-becerra-lucatero-skysense",
        excerpt:
          "I’ve learned to structure presentations for impact, handle impromptu speaking under pressure, and lead conversations with clarity and confidence.",
      },
      {
        slug: "jonathan-emmaus-infosys",
        excerpt:
          "The main challenge I faced when I started working in global environments was the lack of fluency to express my technical ideas effectively to both leaders and colleagues from different nationalities.",
      },
      {
        slug: "hugo-lopez-continental",
        excerpt:
          "Under his guidance, I moved from feeling hesitant in senior-level discussions to speaking with assurance in top-management meetings and presenting complex updates with clarity and persuasion.",
      },
    ],
    es: [
      {
        slug: "luis-manuel-becerra-lucatero-skysense",
        excerpt:
          "Aprendí a estructurar presentaciones con impacto, manejar situaciones de presentación improvisada bajo presión y liderar conversaciones con claridad y confianza.",
      },
      {
        slug: "jonathan-emmaus-infosys",
        excerpt:
          "El principal desafío que enfrenté cuando comencé a trabajar en entornos globales fue la falta de fluidez para expresar mis ideas técnicas de manera efectiva tanto a líderes como a colegas de diferentes nacionalidades.",
      },
      {
        slug: "hugo-lopez-continental",
        excerpt:
          "Bajo su guía, pasé de sentirme inseguro en conversaciones de alto nivel a hablar con seguridad en reuniones de alta dirección y presentar actualizaciones complejas con claridad y persuasión.",
      },
    ],
  },
  executives: {
    en: [
      {
        slug: "hugo-blum-100-ladrillos",
        excerpt:
          "Being a founder means constantly pitching, persuading, and leading. Robert's coaching gave me the language tools—and the confidence—to do it all in English.",
      },
      {
        slug: "andres-driscolls",
        excerpt:
          "Coaching with Robert helped me become much more confident and natural when speaking English—especially with U.S. clients.",
      },
      {
        slug: "alberto-escobar-terramar-brands",
        excerpt:
          "I lead meetings more confidently, communicate more clearly with international partners, and get better results across the board.",
      },
    ],
    es: [
      {
        slug: "hugo-blum-100-ladrillos",
        excerpt:
          "Ser fundador significa estar constantemente presentando, persuadiendo y liderando. El coaching de Robert me dio las herramientas lingüísticas —y la confianza— para hacerlo todo en inglés.",
      },
      {
        slug: "andres-guzman-driscolls",
        excerpt:
          "El coaching con Robert me ayudó a sentirme mucho más seguro y natural al hablar inglés, especialmente con clientes estadounidenses.",
      },
      {
        slug: "alberto-escobar-terramar-brands",
        excerpt:
          "Dirijo reuniones con más confianza, me comunico más claramente con socios internacionales y obtengo mejores resultados en general.",
      },
    ],
  },
  "professional-services": {
    en: [
      {
        slug: "dra-erika-itzel-medical-doctor",
        excerpt:
          "This has helped me care for international patients more effectively and communicate clearly during medical discussions and travel.",
      },
      {
        slug: "noe-martinez-high-stakes-english",
        excerpt:
          "More than just an English coach, Robert has been a true business coach. Each session blends language with practical tools that drive my professional growth.",
      },
      {
        slug: "humberto-grimaldo-tc-logistics",
        excerpt:
          "The lessons with Robert have helped me develop confidence when speaking in meetings with English-speaking clients and prospects.",
      },
    ],
    es: [
      {
        slug: "dra-erika-itzel-medico",
        excerpt:
          "Esto me ha ayudado a atender a pacientes internacionales de manera más efectiva y a comunicarme claramente durante discusiones médicas y viajes.",
      },
      {
        slug: "noe-martinez-high-stakes-english",
        excerpt:
          "Más que un coach de inglés, Robert ha sido un verdadero coach de negocios. Cada sesión combina el idioma con herramientas prácticas que impulsan mi crecimiento profesional.",
      },
      {
        slug: "humberto-grimaldo-tc-logistics",
        excerpt:
          "Las lecciones con Robert me han ayudado a desarrollar confianza al hablar en reuniones con clientes y prospectos de habla inglesa.",
      },
    ],
  },
  "high-stakes": {
    en: [
      {
        slug: "andrea-ceva-logistics",
        excerpt:
          "I'm more strategic and persuasive in interviews, presentations, and cross-border meetings—especially in high-stakes situations.",
      },
      {
        slug: "tania-ruelas-forvia-hella",
        excerpt:
          "Before working with Robert, I sometimes felt unsure presenting in English during high-stakes calls and real-time meetings, especially with international customers.",
      },
      {
        slug: "julio-smarttie",
        excerpt:
          "Robert's coaching didn't just improve my English—it boosted my confidence presenting to clients and investors.",
      },
    ],
    es: [
      {
        slug: "andrea-oliveira-ceva-logistics",
        excerpt:
          "Soy más estratégica y persuasiva en entrevistas, presentaciones y reuniones transfronterizas, especialmente en situaciones de alto riesgo.",
      },
      {
        slug: "tania-ruelas-forvia-hella",
        excerpt:
          "Antes de trabajar con Robert, a veces me sentía insegura al presentar en inglés durante llamadas importantes y reuniones en tiempo real, especialmente con clientes internacionales.",
      },
      {
        slug: "julio-aldana-smarttie",
        excerpt:
          "El coaching de Robert no solo mejoró mi inglés, sino que aumentó mi confianza al presentar a clientes e inversionistas.",
      },
    ],
  },
};

export interface QuizTestimonial {
  quote: string;
  name: string;
  title: string;
  /** Company. Kept as `location` so the landing pages' existing markup renders it unchanged. */
  location: string;
}

/** Straight vs curly apostrophes differ between data entries; compare without them. */
const norm = (s: string) => s.replace(/[’‘]/g, "'").replace(/\s+/g, " ");

export function getQuizTestimonials(lang: "en" | "es", key: QuizLandingKey): QuizTestimonial[] {
  const source = lang === "es" ? esTestimonials : enTestimonials;
  return PICKS[key][lang].map(({ slug, excerpt }) => {
    const t = source.find((x) => x.slug === slug);
    if (!t) {
      throw new Error(`quiz testimonials: no published ${lang} testimonial "${slug}" (${key})`);
    }
    if (!norm(t.content).includes(norm(excerpt))) {
      throw new Error(`quiz testimonials: excerpt for "${slug}" (${lang}, ${key}) is not verbatim`);
    }
    return { quote: excerpt, name: t.author, title: t.position, location: t.company };
  });
}
