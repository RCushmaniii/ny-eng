// Meme portfolio data - Spanish

export type MemeRole =
  | "all"
  | "tech-leaders"
  | "startup-founders"
  | "logistics-managers"
  | "executives"
  | "professional-services";

export interface Meme {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  roles: MemeRole[];
  datePublished: string;
}

export const roleLabels: Record<MemeRole, string> = {
  all: "Todos los Memes",
  "tech-leaders": "Lideres Tecnologicos e Ingenieros",
  "startup-founders": "Fundadores de Startups y CEOs",
  "logistics-managers": "Gerentes de Logistica y Cadena de Suministro",
  executives: "Ejecutivos C-Suite",
  "professional-services": "Servicios Profesionales",
};

export const roleSeoDescriptions: Record<MemeRole, string> = {
  all: "Memes divertidos y relatable sobre el ingles en el trabajo para profesionales en negocios globales. Momentos cotidianos del trabajo que se convierten en oportunidades de aprendizaje.",
  "tech-leaders":
    "Memes de ingles para lideres tecnologicos e ingenieros que navegan code reviews, standups y comunicacion entre equipos en su segundo idioma.",
  "startup-founders":
    "Memes de ingles para fundadores de startups y CEOs que hacen pitch, levantan capital y lideran equipos internacionales en su segundo idioma.",
  "logistics-managers":
    "Memes de ingles para gerentes de logistica y cadena de suministro que coordinan envios, documentacion aduanal y socios internacionales en ingles.",
  executives:
    "Memes de ingles para ejecutivos C-suite que presentan ante juntas directivas, lideran equipos globales y cierran negocios en su segundo idioma.",
  "professional-services":
    "Memes de ingles para abogados, consultores, doctores y otros profesionales que atienden clientes internacionales en ingles.",
};

export const memes: Meme[] = [
  {
    id: "tech-standup-struggle",
    title: "Cuando el Standup se Sale del Guion",
    caption:
      "Ensayaste tu update perfectamente... y luego alguien hace una pregunta de seguimiento.",
    image: "/images/memes/placeholder-1.jpg",
    alt: "Meme sobre lidiar con preguntas inesperadas durante un standup de tecnologia en ingles",
    roles: ["tech-leaders"],
    datePublished: "2025-06-01",
  },
  {
    id: "exec-board-meeting",
    title: "Cara de Poker en la Junta Directiva",
    caption:
      "Cuando entendiste como el 70% del reporte trimestral del CFO pero asientes como si fuera el 100%.",
    image: "/images/memes/placeholder-2.jpg",
    alt: "Meme sobre pretender entender todo durante una junta directiva en ingles",
    roles: ["executives"],
    datePublished: "2025-06-05",
  },
  {
    id: "startup-pitch-day",
    title: "Dia de Pitch: La Pronunciacion",
    caption:
      "Tu idea de startup vale millones, pero la palabra 'competitive advantage' simplemente no coopera.",
    image: "/images/memes/placeholder-3.jpg",
    alt: "Meme sobre pronunciar mal terminos clave de negocios durante un pitch de startup en ingles",
    roles: ["startup-founders"],
    datePublished: "2025-06-10",
  },
];

// Computed: group memes by role
export const memesByRole: Record<MemeRole, Meme[]> = {
  all: memes,
  "tech-leaders": memes.filter((m) => m.roles.includes("tech-leaders")),
  "startup-founders": memes.filter((m) =>
    m.roles.includes("startup-founders"),
  ),
  "logistics-managers": memes.filter((m) =>
    m.roles.includes("logistics-managers"),
  ),
  executives: memes.filter((m) => m.roles.includes("executives")),
  "professional-services": memes.filter((m) =>
    m.roles.includes("professional-services"),
  ),
};
