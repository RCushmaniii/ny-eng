/**
 * "From Correct to Connected" — the executive guide behind the blog post
 * /en/blog/why-correct-english-sounds-disconnected/ (ES twin
 * /es/blog/ingles-correcto-pero-desconectado/). Single source of content.
 *
 *   - print layout  /print/connected-english/{en,es}/  (noindex)
 *   - the PDF in public/downloads/, generated FROM the print layout by
 *     scripts/build-audit-pdf.mjs. Edit here, then re-run that script.
 *
 * Delivered behind LeadMagnetForm (guide="connected-english"), which posts to
 * api/corporate-guide/download.ts. The post is the free version; this is the
 * worked-example and practice layer it does not have room for.
 *
 * English example sentences stay in English in BOTH editions: the reader is
 * learning to say them in English. Only the explanation is translated.
 */

export type GuideLang = "en" | "es";

export interface Step {
  label: string;
  text: string;
}

export interface Example {
  setting: string;
  before: string;
  /** The rebuilt version, one entry per framework step, in step order. */
  after: string[];
  note: string;
}

export interface Rewrite {
  setting: string;
  before: string;
  after: string;
  note: string;
}

export interface GuideContent {
  title: string;
  subtitle: string;
  audience: string;
  contentsLabel: string;
  contents: string[];
  author: string;

  introHeading: string;
  intro: string[];
  pull: string;

  beforeLabel: string;
  afterLabel: string;
  formulaLabel: string;

  f1Eyebrow: string;
  f1Heading: string;
  f1Lede: string;
  f1Steps: Step[];
  f1Body: string[];
  f1Examples: Example[];

  relHeading: string;
  relIntro: string;
  relColumns: [string, string, string];
  relRows: Array<{ relation: string; weak: string; strong: string }>;
  relTest: string;

  f2Eyebrow: string;
  f2Heading: string;
  f2Lede: string;
  f2Steps: Step[];
  f2Body: string[];
  ladderHeading: string;
  ladder: Step[];
  f2Examples: Example[];

  rewritesHeading: string;
  rewritesIntro: string;
  rewrites: Rewrite[];

  practiceHeading: string;
  practiceIntro: string;
  practice: Step[];

  sheetHeading: string;
  sheetArgument: string;
  sheetFlow: string;
  sheetFormulaArgument: string;
  sheetFormulaFlow: string;
  sheetPhrasesLabel: string;
  sheetPhrases: string[];
  sheetTestLabel: string;
  sheetTest: string;

  closingHeading: string;
  closing: string[];
  bookLabel: string;
  bookUrl: string;
  courseLine: string;
  courseUrl: string;
}

// ---------------------------------------------------------------------------
// Shared English examples (identical in both editions by design)
// ---------------------------------------------------------------------------

const f1Before = [
  "We should keep the launch date. The reporting module is 40% of the remaining work. We can discuss phase two later.",
  "I need two more QA engineers. Production defects doubled this quarter. Also, the team is working a lot of overtime.",
  "I think we should stay with the current supplier. On-time delivery is 96% now. The other supplier is cheaper but needs qualification.",
];

const f1After = [
  [
    "We should keep the March launch date and move the reporting module to phase two.",
    "The reporting module is about 40% of the remaining development work.",
    "Keeping it in phase one puts the date at risk for the features your sales team actually needs in March.",
    "So splitting the release protects the date that matters most to you.",
  ],
  [
    "I'm asking for two additional QA engineers for Q1.",
    "Defects found in production doubled between Q3 and Q4.",
    "Every defect a customer finds costs us far more than one we catch in testing, in rework and in trust.",
    "Two QA hires is the fastest way to protect the renewal conversations we have in Q2.",
  ],
  [
    "I recommend we stay with our current supplier for now.",
    "Their on-time delivery recovered to 96% over the last two months.",
    "That tells us the delays came from the port congestion, not from their operations.",
    "Switching now would add months of qualification work to fix a problem that has already resolved itself.",
  ],
];

const f2Before = [
  "OK, the budget is approved. Next point: staffing.",
  "Those are our three growth markets. Now, pricing.",
  "The contract is signed. Secondly, the implementation team.",
];

const f2After = [
  [
    "The budget for phase one is approved.",
    "That covers the build, but it doesn't cover the people who will run it,",
    "which makes staffing the real decision for today.",
  ],
  [
    "Those are the three markets where we're growing.",
    "What they have in common is that we're winning on service, not on price,",
    "and that's the reason for the pricing proposal I want to walk you through next.",
  ],
  [
    "With the contract signed,",
    "the main risk moves from legal to delivery,",
    "so the next step is confirming the implementation team by Friday.",
  ],
];

const rewriteBefore = [
  "Revenue declined this quarter. Our largest customer reduced its orders. Inventory increased. We have a new sales strategy. We expect improvement next quarter.",
  "The migration is delayed. The vendor delivered the API late. The team is working weekends. The new date is March 15. Please let me know if you have questions.",
  "There were many changes. The client asked for new features. Also, the exchange rate. We are trying to control it.",
];

const rewriteAfter = [
  "Revenue declined this quarter, primarily because our largest customer reduced its orders. Lower demand also pushed inventory up, which is putting pressure on working capital. To address both problems, we've introduced a sales strategy focused on diversifying the customer base, and if execution stays on schedule, we expect performance to begin improving next quarter.",
  "The migration will move to March 15, two weeks later than planned. The delay comes from the vendor's API, which arrived late and needed rework before we could integrate it. We've recovered part of that time by running testing in parallel, so the impact is two weeks rather than four. The one decision I need from you is whether we share the new date with customers now or after the first test cycle on March 1.",
  "We're 8% over budget, and most of that comes from scope: the client added two features in October that weren't in the original estimate. The rest is the exchange rate, which moved against us in the third quarter. The scope part we can recover, and I'm proposing we bill those features as a change order. The exchange-rate part we can't, so I'd rather adjust the forecast now than surprise you in December.",
];

const phrases = [
  "…which is why…",
  "…and that's what's driving…",
  "That solves X, but it exposes Y.",
  "The reason that matters is…",
  "Which means…",
  "So the real question becomes…",
  "Even so,…",
  "If that holds,…",
  "That's the context for…",
  "Once X is in place, the next priority is Y.",
  "That leaves one open issue:…",
  "The one decision I need from you is…",
];

const relWeakStrong: Array<{ weak: string; strong: string }> = [
  { weak: "Also, … / And …", strong: "…because… / …which is driven by…" },
  { weak: "Furthermore, …", strong: "…so… / …which means… / As a result,…" },
  { weak: "On the other hand, …", strong: "…but… / Even so,…" },
  { weak: "However, … (to open)", strong: "Even though X, Y. / While X, Y." },
  { weak: "Another thing is…", strong: "If X, then Y. / As long as X,…" },
  { weak: "Secondly, …", strong: "Before we can X, we need Y. / That's why X comes first." },
];

const en: GuideContent = {
  title: "From Correct to Connected",
  subtitle: "An executive guide to English that holds together",
  audience:
    "For senior professionals whose English is grammatically strong, and who sense their ideas don't land in English with the weight they carry in Spanish.",
  contentsLabel: "Inside",
  contents: [
    "Why correct English can still lose the room",
    "Framework 1: Claim → Evidence → Explanation → Link",
    "The relationship words that carry meaning",
    "Framework 2: Look Back → Connect → Move Forward",
    "Three full rewrites: update, status email, tough question",
    "A five-day practice plan",
    "One-page reference sheet",
  ],
  author: "Robert Cushman · NY English Teacher",

  introHeading: "The gap nobody corrects",
  intro: [
    "You can give an update in English with no grammar mistakes at all and still make your listener do the hard part. Three correct sentences: sales declined, we lost two distributors, we're launching a promotion. Across the table, your counterpart is working out how those facts relate. Did the distributors cause the decline? Is the promotion the fix for the distributors, or for something else?",
    "Nothing in that update would be marked wrong by a teacher, which is exactly why nobody ever fixed it. The sentences are correct one by one and disconnected as a group, and the listener feels the gap even when they can't name it.",
    "Senior listeners will do that assembly work once or twice. Then, quietly, they adjust how they rate the speaker. Not your English. You.",
    "The good news is that connection is easier to learn than grammar. It comes down to two frameworks, and this guide gives you worked examples, the words that carry each relationship, and a short practice plan so you can use both in your next meeting.",
  ],
  pull: "Strong English isn't a collection of correct sentences. It's a chain of connected ideas.",

  beforeLabel: "Correct, disconnected",
  afterLabel: "Connected",
  formulaLabel: "The formula",

  f1Eyebrow: "Framework 1",
  f1Heading: "Build the argument",
  f1Lede: "Claim → Evidence → Explanation → Link",
  f1Steps: [
    { label: "Claim", text: "The point you're making." },
    { label: "Evidence", text: "The specific fact that supports it." },
    { label: "Explanation", text: "Why that fact proves the point." },
    { label: "Link", text: "What it means for the decision in front of the room." },
  ],
  f1Body: [
    "Most professionals deliver the first two and skip the third. The pattern I hear constantly is Claim → Evidence → New Topic. Your evidence does not speak for itself; it never does. The explanation is where your reasoning becomes visible, and your reasoning is what a senior audience is actually evaluating.",
    'One more thing to notice in the examples below: the strong version never announces itself. It doesn\'t say "this evidence supports my point because." It just does the explaining.',
  ],
  f1Examples: [
    {
      setting: "Client call: protecting a launch date",
      before: f1Before[0],
      after: f1After[0],
      note: "The before version leaves the client to work out why 40% matters. The explanation answers that before they have to ask.",
    },
    {
      setting: "Budget request to a US vice president",
      before: f1Before[1],
      after: f1After[1],
      note: '"Also, overtime" is a second claim with no support. The rebuilt version drops it and finishes the first argument.',
    },
    {
      setting: 'Email answering "Should we switch suppliers?"',
      before: f1Before[2],
      after: f1After[2],
      note: "The before version hands over three facts and lets the reader choose. The after version makes the recommendation and shows why.",
    },
  ],

  relHeading: 'Why "furthermore" won\'t save you',
  relIntro:
    "When English feels choppy, the instinct is to add connectors: furthermore, moreover, in addition, secondly. Connectors describe relationships. They don't create them. If the logical relationship isn't there, the connector makes a promise the sentence doesn't keep, and that sounds more mechanical than no connector at all. Decide the relationship first, then choose the word that carries it.",
  relColumns: ["Relationship", "Sounds connected, isn't", "Carries the relationship"],
  relRows: [
    { relation: "Cause", ...relWeakStrong[0] },
    { relation: "Consequence", ...relWeakStrong[1] },
    { relation: "Contrast", ...relWeakStrong[2] },
    { relation: "Concession", ...relWeakStrong[3] },
    { relation: "Condition", ...relWeakStrong[4] },
    { relation: "Priority", ...relWeakStrong[5] },
  ],
  relTest:
    "The test: could you explain out loud why sentence two belongs after sentence one? If yes, a connector makes that relationship faster to hear. If no, the connector is decoration on a gap.",

  f2Eyebrow: "Framework 2",
  f2Heading: "Build the flow",
  f2Lede: "Look Back → Connect → Move Forward",
  f2Steps: [
    { label: "Look back", text: "Name what you just established." },
    { label: "Connect", text: "State how it relates to what comes next." },
    { label: "Move forward", text: "Introduce the next idea." },
  ],
  f2Body: [
    "This is the one to remember. Every time you change topic, in a meeting, a presentation or a report, the strongest transition does all three in a single sentence. The listener never wonders why you changed subject, because you showed them the bridge as you crossed it.",
  ],
  ladderHeading: "Three rungs of the same transition",
  ladder: [
    {
      label: "Basic",
      text: '"Secondly, we need to discuss suppliers." Organized, but you have announced a new point, not connected it.',
    },
    {
      label: "Better",
      text: '"Beyond the production fixes, we also have a supplier issue." The new idea now touches the old one.',
    },
    {
      label: "Strongest",
      text: '"Production is stable, but stability exposed how much we depend on two suppliers, which is the real risk going into Q4." The relationship is the sentence.',
    },
  ],
  f2Examples: [
    {
      setting: "Meeting: moving to the next agenda item",
      before: f2Before[0],
      after: f2After[0],
      note: '"Next point" changes the subject. The rebuilt version gives the room a reason to care about the next subject.',
    },
    {
      setting: "Presentation: moving between sections",
      before: f2Before[1],
      after: f2After[1],
      note: "The pricing proposal now arrives as a conclusion from the market data, not as slide seven.",
    },
    {
      setting: "Email: moving from one paragraph to the next",
      before: f2Before[2],
      after: f2After[2],
      note: "One sentence closes the legal topic, names the new risk and assigns the next step.",
    },
  ],

  rewritesHeading: "Three full rewrites",
  rewritesIntro:
    "The same facts in each pair. Nearly the same vocabulary. What changes is that every sentence picks up something from the sentence before it.",
  rewrites: [
    {
      setting: "Quarter-end update",
      before: rewriteBefore[0],
      after: rewriteAfter[0],
      note: "Follow the chain: the decline, because of the customer, lower demand, both problems, improvement.",
    },
    {
      setting: "Project status email to a US manager",
      before: rewriteBefore[1],
      after: rewriteAfter[1],
      note: 'The new date comes first, the cause second, what you did about it third, and the decision you need last. "Working weekends" is effort, not information, so it goes.',
    },
    {
      setting: 'Answering "Why are we over budget?" in a meeting',
      before: rewriteBefore[2],
      after: rewriteAfter[2],
      note: "Number first, then the two causes in order of size, then what can and can't be recovered. A tough question is the moment the explanation step matters most.",
    },
  ],

  practiceHeading: "A five-day practice plan",
  practiceIntro:
    "Ten minutes a day, using your own material. The goal is not to memorize the frameworks but to notice the gaps in your own English until you start closing them automatically.",
  practice: [
    {
      label: "Day 1",
      text: "Open one email you sent in English this week. Mark every place where two sentences sit side by side with no stated relationship.",
    },
    {
      label: "Day 2",
      text: "Rewrite one paragraph from that email as Claim → Evidence → Explanation → Link. Read both versions out loud.",
    },
    {
      label: "Day 3",
      text: "Before your next meeting, write the one sentence you'll use to move between two agenda items, using Look Back → Connect → Move Forward.",
    },
    {
      label: "Day 4",
      text: 'Find one "also," "furthermore" or "secondly" in your writing. Name the real relationship and replace the word with one that carries it.',
    },
    {
      label: "Day 5",
      text: "Record yourself answering a tough question you expect this month, in under 45 seconds. Listen for the explanation step. If it's missing, add it and record again.",
    },
  ],

  sheetHeading: "Reference sheet",
  sheetArgument: "Build the argument",
  sheetFlow: "Build the flow",
  sheetFormulaArgument: "Claim → Evidence → Explanation → Link",
  sheetFormulaFlow: "Look Back → Connect → Move Forward",
  sheetPhrasesLabel: "Phrases that carry a relationship",
  sheetPhrases: phrases,
  sheetTestLabel: "The test",
  sheetTest: "Did I state the relationship, or did I make the listener build it?",

  closingHeading: "Doing this live is the hard part",
  closing: [
    "Frameworks on paper are the easy part. The hard part is doing this in real time, when a vice president interrupts with a question you didn't expect and you have three seconds to answer in your second language.",
    "That's the part I coach. Bring a real update from your calendar, and we'll rebuild it until the connections come out under pressure.",
  ],
  bookLabel: "Book a private strategy session",
  bookUrl: "https://www.nyenglishteacher.com/en/book/",
  courseLine: "Or practice on your own with the free Executive English course:",
  courseUrl: "https://www.nyenglishteacher.com/en/course/executive/",
};

const es: GuideContent = {
  title: "De Correcto a Conectado",
  subtitle: "Guía ejecutiva para un inglés que se sostiene",
  audience:
    "Para profesionales senior cuyo inglés es gramaticalmente sólido, pero que sienten que sus ideas no aterrizan en inglés con el peso que tienen en español.",
  contentsLabel: "Contenido",
  contents: [
    "Por qué un inglés correcto todavía puede perder la sala",
    "Marco 1: Claim → Evidence → Explanation → Link",
    "Las palabras de relación que sí cargan significado",
    "Marco 2: Look Back → Connect → Move Forward",
    "Tres reescrituras completas: reporte, correo de estatus, pregunta difícil",
    "Plan de práctica de cinco días",
    "Hoja de referencia de una página",
  ],
  author: "Robert Cushman · NY English Teacher",

  introHeading: "La brecha que nadie corrige",
  intro: [
    "Puedes dar una actualización en inglés sin un solo error de gramática y aun así dejarle a tu oyente la parte difícil. Tres oraciones correctas: las ventas bajaron, perdimos dos distribuidores, vamos a lanzar una promoción. Del otro lado de la mesa, tu contraparte está tratando de descifrar cómo se relacionan esos hechos. ¿Los distribuidores causaron la caída? ¿La promoción es la respuesta a los distribuidores o a otra cosa?",
    "Nada en esa actualización lo marcaría como error un maestro, y justo por eso nadie lo corrigió nunca. Las oraciones son correctas una por una y desconectadas en conjunto, y el oyente siente el hueco aunque no sepa nombrarlo.",
    "Un oyente senior hace ese trabajo de armar el argumento una o dos veces. Después, sin decir nada, ajusta su opinión sobre quien habla. No sobre tu inglés. Sobre ti.",
    "La buena noticia: la conexión se aprende más fácil que la gramática. Se reduce a dos marcos, y en esta guía tienes ejemplos resueltos, las palabras que cargan cada relación y un plan de práctica corto para que uses los dos en tu próxima junta.",
  ],
  pull: "Un inglés sólido no es una colección de oraciones correctas. Es una cadena de ideas conectadas.",

  beforeLabel: "Correcto, desconectado",
  afterLabel: "Conectado",
  formulaLabel: "La fórmula",

  f1Eyebrow: "Marco 1",
  f1Heading: "Construye el argumento",
  f1Lede: "Claim → Evidence → Explanation → Link",
  f1Steps: [
    { label: "Claim (afirmación)", text: "El punto que estás haciendo." },
    { label: "Evidence (evidencia)", text: "El hecho específico que lo respalda." },
    { label: "Explanation (explicación)", text: "Por qué ese hecho prueba tu punto." },
    { label: "Link (vínculo)", text: "Qué significa para la decisión que está en la mesa." },
  ],
  f1Body: [
    "La mayoría de los profesionales entrega las dos primeras partes y se salta la tercera. El patrón que escucho constantemente es Claim → Evidence → Tema Nuevo. Tu evidencia no habla por sí misma; nunca lo hace. La explicación es donde tu razonamiento se vuelve visible, y tu razonamiento es lo que una audiencia senior está evaluando en realidad.",
    'Fíjate en algo más en los ejemplos: la versión fuerte nunca se anuncia. No dice "this evidence supports my point because". Simplemente explica.',
  ],
  f1Examples: [
    {
      setting: "Llamada con cliente: proteger una fecha de lanzamiento",
      before: f1Before[0],
      after: f1After[0],
      note: "La versión original deja que el cliente adivine por qué importa el 40%. La explicación lo responde antes de que tenga que preguntar.",
    },
    {
      setting: "Solicitud de presupuesto a un vicepresidente en EE. UU.",
      before: f1Before[1],
      after: f1After[1],
      note: '"Also, overtime" es una segunda afirmación sin respaldo. La versión reconstruida la quita y termina el primer argumento.',
    },
    {
      setting: 'Correo que responde "¿Cambiamos de proveedor?"',
      before: f1Before[2],
      after: f1After[2],
      note: "La versión original entrega tres hechos y deja que el lector elija. La nueva hace la recomendación y muestra por qué.",
    },
  ],

  relHeading: 'Por qué "furthermore" no te va a salvar',
  relIntro:
    "Cuando tu inglés se siente cortado, el instinto es agregar conectores: furthermore, moreover, in addition, secondly. Los conectores describen relaciones. No las crean. Si la relación lógica no está ahí, el conector hace una promesa que la oración no cumple, y eso suena más mecánico que no usar ninguno. Primero decide la relación; después elige la palabra que la carga.",
  relColumns: ["Relación", "Suena conectado, no lo está", "Carga la relación"],
  relRows: [
    { relation: "Causa", ...relWeakStrong[0] },
    { relation: "Consecuencia", ...relWeakStrong[1] },
    { relation: "Contraste", ...relWeakStrong[2] },
    { relation: "Concesión", ...relWeakStrong[3] },
    { relation: "Condición", ...relWeakStrong[4] },
    { relation: "Prioridad", ...relWeakStrong[5] },
  ],
  relTest:
    "La prueba: ¿podrías explicar en voz alta por qué la oración dos va después de la oración uno? Si sí, un conector hace que esa relación se escuche más rápido. Si no, el conector es decoración sobre un hueco.",

  f2Eyebrow: "Marco 2",
  f2Heading: "Construye el flujo",
  f2Lede: "Look Back → Connect → Move Forward",
  f2Steps: [
    { label: "Look back (mira atrás)", text: "Nombra lo que acabas de establecer." },
    { label: "Connect (conecta)", text: "Di cómo se relaciona con lo que sigue." },
    { label: "Move forward (avanza)", text: "Presenta la siguiente idea." },
  ],
  f2Body: [
    "Este es el que tienes que recordar. Cada vez que cambias de tema, en una junta, una presentación o un reporte, la transición más fuerte hace las tres cosas en una sola oración. El oyente nunca se pregunta por qué cambiaste de tema, porque le mostraste el puente mientras lo cruzabas.",
  ],
  ladderHeading: "Tres niveles de la misma transición",
  ladder: [
    {
      label: "Básico",
      text: '"Secondly, we need to discuss suppliers." Ordenado, pero anunciaste un punto nuevo; no lo conectaste.',
    },
    {
      label: "Mejor",
      text: '"Beyond the production fixes, we also have a supplier issue." La idea nueva ya toca la anterior.',
    },
    {
      label: "El más fuerte",
      text: '"Production is stable, but stability exposed how much we depend on two suppliers, which is the real risk going into Q4." La relación es la oración.',
    },
  ],
  f2Examples: [
    {
      setting: "Junta: pasar al siguiente punto de la agenda",
      before: f2Before[0],
      after: f2After[0],
      note: '"Next point" cambia de tema. La versión reconstruida le da a la sala una razón para que le importe el siguiente tema.',
    },
    {
      setting: "Presentación: pasar de una sección a otra",
      before: f2Before[1],
      after: f2After[1],
      note: "La propuesta de precios ahora llega como conclusión de los datos de mercado, no como la lámina siete.",
    },
    {
      setting: "Correo: pasar de un párrafo al siguiente",
      before: f2Before[2],
      after: f2After[2],
      note: "Una sola oración cierra el tema legal, nombra el nuevo riesgo y asigna el siguiente paso.",
    },
  ],

  rewritesHeading: "Tres reescrituras completas",
  rewritesIntro:
    "Los mismos hechos en cada par. Casi el mismo vocabulario. Lo que cambia es que cada oración retoma algo de la oración anterior.",
  rewrites: [
    {
      setting: "Reporte de cierre de trimestre",
      before: rewriteBefore[0],
      after: rewriteAfter[0],
      note: "Sigue la cadena: la caída, por el cliente, menor demanda, ambos problemas, mejora.",
    },
    {
      setting: "Correo de estatus de proyecto a un gerente en EE. UU.",
      before: rewriteBefore[1],
      after: rewriteAfter[1],
      note: 'Primero la nueva fecha, después la causa, luego lo que hiciste al respecto y al final la decisión que necesitas. "Working weekends" es esfuerzo, no información, así que sale.',
    },
    {
      setting: 'Responder "¿Por qué estamos sobre presupuesto?" en una junta',
      before: rewriteBefore[2],
      after: rewriteAfter[2],
      note: "Primero el número, después las dos causas en orden de tamaño, luego qué se puede recuperar y qué no. Una pregunta difícil es el momento en que más importa la explicación.",
    },
  ],

  practiceHeading: "Plan de práctica de cinco días",
  practiceIntro:
    "Diez minutos al día, con tu propio material. La meta no es memorizar los marcos, sino notar los huecos en tu propio inglés hasta que empieces a cerrarlos en automático.",
  practice: [
    {
      label: "Día 1",
      text: "Abre un correo que hayas enviado en inglés esta semana. Marca cada lugar donde dos oraciones están juntas sin una relación explícita.",
    },
    {
      label: "Día 2",
      text: "Reescribe un párrafo de ese correo como Claim → Evidence → Explanation → Link. Lee las dos versiones en voz alta.",
    },
    {
      label: "Día 3",
      text: "Antes de tu próxima junta, escribe la oración que vas a usar para pasar de un punto de la agenda al siguiente, con Look Back → Connect → Move Forward.",
    },
    {
      label: "Día 4",
      text: 'Busca un "also", "furthermore" o "secondly" en lo que escribiste. Nombra la relación real y cambia la palabra por una que la cargue.',
    },
    {
      label: "Día 5",
      text: "Grábate respondiendo en menos de 45 segundos una pregunta difícil que esperas este mes. Escucha si está el paso de la explicación. Si falta, agrégalo y vuelve a grabar.",
    },
  ],

  sheetHeading: "Hoja de referencia",
  sheetArgument: "Construye el argumento",
  sheetFlow: "Construye el flujo",
  sheetFormulaArgument: "Claim → Evidence → Explanation → Link",
  sheetFormulaFlow: "Look Back → Connect → Move Forward",
  sheetPhrasesLabel: "Frases que cargan una relación",
  sheetPhrases: phrases,
  sheetTestLabel: "La prueba",
  sheetTest: "¿Dije la relación, o hice que el oyente la construyera?",

  closingHeading: "Hacerlo en vivo es la parte difícil",
  closing: [
    "Los marcos en papel son la parte fácil. Lo difícil es hacerlo en tiempo real, cuando un vicepresidente te interrumpe con una pregunta que no esperabas y tienes tres segundos para responder en tu segundo idioma.",
    "Esa es la parte que yo entreno. Trae una actualización real de tu calendario y la reconstruimos hasta que las conexiones te salgan bajo presión.",
  ],
  bookLabel: "Reserva una sesión de estrategia privada",
  bookUrl: "https://www.nyenglishteacher.com/es/reservar/",
  courseLine: "O practica por tu cuenta con el curso gratuito de Inglés Ejecutivo:",
  courseUrl: "https://www.nyenglishteacher.com/es/curso/ejecutivo/",
};

export const connectedEnglishGuide: Record<GuideLang, GuideContent> = { en, es };
