import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "grammar-that-costs-credibility",
  slugEs: "gramatica-que-cuesta-credibilidad",
  title: ["The Grammar That Costs You Credibility", "La Gramática que te Cuesta Credibilidad"],
  summary: [
    "Five small families of error that readers notice before your ideas, and the rule that fixes each one.",
    "Cinco pequeñas familias de errores que tu lector nota antes que tus ideas, y la regla que corrige cada una.",
  ],
  description: [
    "Articles, subject-verb agreement, tense, parallel lists, and the punctuation that differs from Spanish: the small errors readers notice first.",
    "Artículos, concordancia, tiempos verbales, listas paralelas y la puntuación que cambia respecto al español: los errores que tu lector nota primero.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "Nobody corrects these errors. A colleague understands <em>We received many feedbacks</em> perfectly and replies to the content. That is why the error survives for years in the writing of people whose English is otherwise excellent. But the reader did notice, and in a proposal, a résumé or a message to a new client, a few of these in one paragraph change how the rest is read.",
        "Estos errores nadie te los corrige. Cualquier colega entiende perfectamente <em>We received many feedbacks</em> y contesta sobre el contenido. Por eso el error sobrevive durante años en la escritura de personas cuyo inglés es excelente en todo lo demás. Pero tu lector sí lo notó, y en una propuesta, un currículum o un mensaje a un cliente nuevo, unos cuantos de estos en un párrafo cambian la forma en que se lee lo demás.",
      ],
    },
    {
      t: "idea",
      title: ["Five checks, each with a rule", "Cinco revisiones, cada una con su regla"],
      html: [
        "Almost every credibility error a Spanish-speaking professional makes in written English belongs to one of five families: <b>articles</b>, <b>subject-verb agreement</b>, <b>tense</b>, <b>parallel form</b>, and <b>mechanics</b> (capital letters, dates, numbers, quotation marks). None of them is a matter of ear or talent. Each has a rule you can apply, and once you know your own two or three, you can search a draft for them by name. Read this lesson to find out which ones are yours.",
        "Casi todos los errores que le restan credibilidad al inglés escrito de quienes hablamos español pertenecen a una de cinco familias: <b>artículos</b>, <b>concordancia entre sujeto y verbo</b>, <b>tiempos verbales</b>, <b>forma paralela</b> y <b>mecánica</b> (mayúsculas, fechas, números, comillas). Ninguna depende del oído ni del talento. Cada una tiene una regla que puedes aplicar, y cuando conoces las dos o tres que son tuyas, puedes buscarlas por nombre en un borrador. Lee esta lección para descubrir cuáles son las tuyas.",
      ],
    },
    {
      t: "framework",
      title: [
        "Articles: four questions for any noun",
        "Artículos: cuatro preguntas para cualquier sustantivo",
      ],
      lead: [
        "Spanish and English both have articles, but they disagree about when to use them. Ask these questions in order.",
        "El español y el inglés tienen artículos, pero no coinciden en cuándo usarlos. Hazte estas preguntas en orden.",
      ],
      steps: [
        {
          label: ["Am I speaking in general?", "¿Estoy hablando en general?"],
          html: [
            "When a plural or uncountable noun means the thing in general, as an idea or a category, English uses <b>no article</b>. Spanish uses one: <em>la inflación, los clientes, la comunicación</em>. This is the most common article error in both directions.",
            "Cuando un sustantivo plural o incontable se refiere a la cosa en general, como idea o categoría, el inglés <b>no usa artículo</b>. El español sí: <em>la inflación, los clientes, la comunicación</em>. Es el error de artículos más frecuente.",
          ],
          say: "Inflation is squeezing margins, and customers expect faster delivery.",
        },
        {
          label: ["Does the reader know which one?", "¿Mi lector sabe cuál?"],
          html: [
            "Use <b>the</b> when the noun is specific: already mentioned, defined by the words after it, or the only one in the situation.",
            "Usa <b>the</b> cuando el sustantivo es específico: ya se mencionó, lo definen las palabras que lo siguen o es el único en la situación.",
          ],
          say: "The customers we lost in Q2 all mentioned the delivery times in the new contract.",
        },
        {
          label: [
            "Is it one countable thing, not yet identified?",
            "¿Es una sola cosa contable, todavía sin identificar?",
          ],
          html: [
            "A singular countable noun can almost never stand bare in English. It needs <b>a/an</b>, <b>the</b>, or a word like <em>my, this, each</em>. That includes jobs and roles, where Spanish drops the article: <em>es ingeniera</em>, <em>trabaja como gerente</em>.",
            "Un sustantivo contable en singular casi nunca puede ir solo en inglés. Necesita <b>a/an</b>, <b>the</b> o una palabra como <em>my, this, each</em>. Eso incluye profesiones y puestos, donde el español omite el artículo: <em>es ingeniera</em>, <em>trabaja como gerente</em>.",
          ],
          say: "We need a decision by Friday. Priya is an engineer and works as a project manager.",
        },
        {
          label: ["Can it be counted at all?", "¿Se puede contar?"],
          html: [
            "Some business nouns that are countable in Spanish are uncountable in English: <b>information, advice, feedback, research, equipment, software, training, evidence, progress</b>. They take no <em>a/an</em> and no plural <em>-s</em>, and the verb is singular. To count them, count something else: <em>a piece of advice, two training sessions</em>.",
            "Algunos sustantivos de negocios que en español se cuentan son incontables en inglés: <b>information, advice, feedback, research, equipment, software, training, evidence, progress</b>. No llevan <em>a/an</em> ni <em>-s</em> de plural, y el verbo va en singular. Para contarlos, cuenta otra cosa: <em>a piece of advice, two training sessions</em>.",
          ],
          say: "Thanks for the feedback. It was useful, and I have one piece of advice in return.",
        },
      ],
    },
    {
      t: "compare",
      title: ["Articles, repaired", "Artículos, reparados"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "The inflation is affecting the costs in all the regions.",
          strong: "Inflation is affecting costs in every region.",
          why: [
            "Inflation and costs in general: no article. <em>The costs</em> would be right only for specific ones, as in <em>the costs in the March report</em>.",
            "Inflación y costos en general: sin artículo. <em>The costs</em> sería correcto solo para unos específicos, como en <em>the costs in the March report</em>.",
          ],
        },
        {
          weak: "Elena is engineer and works as plant manager.",
          strong: "Elena is an engineer and works as a plant manager.",
          why: [
            "A job is a singular countable noun, so it needs <em>a/an</em>. This one comes straight from <em>es ingeniera</em>.",
            "Un puesto es un sustantivo contable en singular, así que necesita <em>a/an</em>. Este error viene directo de <em>es ingeniera</em>.",
          ],
        },
        {
          weak: "We received many feedbacks and an important information from the client.",
          strong:
            "We received a lot of feedback and one important piece of information from the client.",
          why: [
            "<em>Feedback</em> and <em>information</em> are uncountable: no plural, no <em>an</em>, and <em>a lot of</em> or <em>much</em> in place of <em>many</em>.",
            "<em>Feedback</em> e <em>information</em> son incontables: sin plural, sin <em>an</em>, y con <em>a lot of</em> o <em>much</em> en lugar de <em>many</em>.",
          ],
        },
        {
          weak: "I will send you the contract the next week.",
          strong: "I'll send you the contract next week.",
          why: [
            "<em>Next</em> and <em>last</em> before <em>week, month, quarter, year</em>, counted from today, take no article. Spanish says <em>la próxima semana</em>.",
            "<em>Next</em> y <em>last</em> antes de <em>week, month, quarter, year</em>, contados desde hoy, no llevan artículo. En español decimos <em>la próxima semana</em>.",
          ],
        },
        {
          weak: "The most of our suppliers are in the north.",
          strong: "Most of our suppliers are in the north.",
          why: [
            "<em>Most</em> meaning <em>the majority</em> has no article. <em>The most</em> is the superlative: <em>the most reliable supplier</em>.",
            "<em>Most</em> con el sentido de <em>la mayoría</em> no lleva artículo. <em>The most</em> es el superlativo: <em>the most reliable supplier</em>.",
          ],
        },
        {
          weak: "Please see the details in the page 4 of the phase 2 plan.",
          strong: "Please see the details on page 4 of the phase 2 plan.",
          why: [
            "A noun followed by its number is already identified and takes no article: <em>page 4, phase 2, room 12, Q3</em>. The preposition changes too: <em>on</em> a page.",
            "Un sustantivo seguido de su número ya está identificado y no lleva artículo: <em>page 4, phase 2, room 12, Q3</em>. También cambia la preposición: <em>on</em> a page.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: [
        "Article patterns worth memorizing whole",
        "Patrones de artículos que conviene memorizar completos",
      ],
      items: [
        {
          en: "next week, last month, this quarter",
          use: ["Time counted from today: no article.", "Tiempo contado desde hoy: sin artículo."],
        },
        {
          en: "on page 4, in phase 2, in Q3",
          use: ["Noun plus number: no article.", "Sustantivo más número: sin artículo."],
        },
        {
          en: "most customers, most of the team",
          use: [
            "<em>Most</em> for the majority: never <em>the most of</em>.",
            "<em>Most</em> para la mayoría: nunca <em>the most of</em>.",
          ],
        },
        {
          en: "as a manager, as an advisor",
          use: [
            "A role after <em>as</em> takes <em>a/an</em>.",
            "Un puesto después de <em>as</em> lleva <em>a/an</em>.",
          ],
        },
        {
          en: "twice a month, $40 an hour, 60 miles an hour",
          use: [
            "<em>A/an</em> meaning <em>per</em>. Spanish uses <em>al</em> or <em>por</em>.",
            "<em>A/an</em> con el sentido de <em>por</em>. El español usa <em>al</em> o <em>por</em>.",
          ],
        },
        {
          en: "on schedule, under budget, in stock, on hold",
          use: ["Fixed status phrases: no article.", "Frases fijas de estatus: sin artículo."],
        },
        {
          en: "by email, by phone, by truck",
          use: [
            "<em>By</em> plus a means of communication or transport: no article.",
            "<em>By</em> más un medio de comunicación o transporte: sin artículo.",
          ],
        },
        {
          en: "the same as last year",
          use: [
            "<em>Same</em> always takes <em>the</em>.",
            "<em>Same</em> siempre lleva <em>the</em>.",
          ],
        },
        {
          en: "the first shipment, the best option, the only vendor",
          use: [
            "Ordinals, superlatives and <em>only</em> point to one specific thing, so they take <em>the</em>.",
            "Los ordinales, los superlativos y <em>only</em> señalan una cosa específica, así que llevan <em>the</em>.",
          ],
        },
        {
          en: "in Mexico, in Texas, in the United States",
          use: [
            "Most countries and states take no article. <em>The United States</em> always does.",
            "La mayoría de los países y estados no llevan artículo. <em>The United States</em> siempre lo lleva.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: ["Agreement and tense, repaired", "Concordancia y tiempos verbales, reparados"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "The list of open items are longer than last month.",
          strong: "The list of open items is longer than last month.",
          why: [
            "The subject is <em>list</em>. The verb agrees with it and ignores the nearest noun. Cover the words between the subject and the verb, and read what is left: <em>The list is</em>.",
            "El sujeto es <em>list</em>. El verbo concuerda con él e ignora el sustantivo más cercano. Tapa las palabras entre el sujeto y el verbo y lee lo que queda: <em>The list is</em>.",
          ],
        },
        {
          weak: "Each of the regional managers have a different target.",
          strong: "Each of the regional managers has a different target.",
          why: [
            "<em>Each, every, everyone, everybody, no one</em> are singular, whatever follows them.",
            "<em>Each, every, everyone, everybody, no one</em> son singulares, sin importar lo que los siga.",
          ],
        },
        {
          weak: "The people on the finance team is reviewing the numbers.",
          strong: "The people on the finance team are reviewing the numbers.",
          why: [
            "<em>La gente</em> is singular; <em>people</em> is plural. The reverse case is <em>news</em>, which looks plural and is singular: <em>The news is good</em>.",
            "<em>La gente</em> es singular; <em>people</em> es plural. El caso contrario es <em>news</em>, que parece plural y es singular: <em>The news is good</em>.",
          ],
        },
        {
          weak: "A number of clients has asked for the Spanish version.",
          strong: "A number of clients have asked for the Spanish version.",
          why: [
            "<em>A number of</em> means <em>several</em> and takes a plural verb. <em>The number of</em> is a figure and takes a singular one: <em>The number of clients has doubled</em>.",
            "<em>A number of</em> significa <em>varios</em> y lleva verbo en plural. <em>The number of</em> es una cifra y lo lleva en singular: <em>The number of clients has doubled</em>.",
          ],
        },
        {
          weak: "We met with the client on Tuesday. They like the proposal and ask for a discount, so we sent a new quote.",
          strong:
            "We met with the client on Tuesday. They liked the proposal and asked for a discount, so we sent a new quote.",
          why: [
            "The story is in the past, so every event in it stays in the past. Drifting into the present mid-story makes the reader wonder what is finished and what is still happening.",
            "La historia está en pasado, así que todos sus eventos se quedan en pasado. Pasarse al presente a media historia hace que tu lector se pregunte qué ya terminó y qué sigue pasando.",
          ],
        },
        {
          weak: "We have sent the signed contract yesterday.",
          strong: "We sent the signed contract yesterday.",
          why: [
            "A finished time (<em>yesterday, last week, in March, two days ago</em>) requires the simple past. <em>Have sent</em> works only with no finished time: <em>We have sent the contract</em>.",
            "Un tiempo ya terminado (<em>yesterday, last week, in March, two days ago</em>) exige el pasado simple. <em>Have sent</em> funciona solo sin un tiempo terminado: <em>We have sent the contract</em>.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: ["Parallel form in lists and bullets", "Forma paralela en listas y viñetas"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "The new system is faster, cheaper, and it has more security.",
          strong: "The new system is faster, cheaper, and more secure.",
          why: [
            "Items in a series must share one grammatical form. Two adjectives followed by a full clause breaks the pattern; three adjectives keeps it.",
            "Los elementos de una serie deben compartir una misma forma gramatical. Dos adjetivos seguidos de una oración completa rompen el patrón; tres adjetivos lo mantienen.",
          ],
        },
        {
          weak: "My role includes managing the budget, to hire the team, and vendor negotiation.",
          strong:
            "My role includes managing the budget, hiring the team, and negotiating with vendors.",
          why: [
            "Three forms (<em>-ing</em>, <em>to</em> + verb, noun) became one. Test each item against the opening words: <em>includes managing, includes hiring, includes negotiating</em>.",
            "Tres formas (<em>-ing</em>, <em>to</em> + verbo, sustantivo) se volvieron una. Prueba cada elemento con las palabras iniciales: <em>includes managing, includes hiring, includes negotiating</em>.",
          ],
        },
        {
          weak: "Next steps: (1) Review the contract. (2) The budget needs approval. (3) Scheduling the kickoff.",
          strong:
            "Next steps: (1) Review the contract. (2) Approve the budget. (3) Schedule the kickoff.",
          why: [
            "Bullets are a series too. Start every action item with a verb in the same form, and the list reads as a plan.",
            "Las viñetas también son una serie. Empieza cada punto de acción con un verbo en la misma forma y la lista se lee como un plan.",
          ],
        },
        {
          weak: "We can either renew the contract or looking for a new vendor.",
          strong: "We can either renew the contract or look for a new vendor.",
          why: [
            "Pairs need matching forms as well: <em>either… or, both… and, not only… but also</em>. Whatever follows the first word must be matched after the second.",
            "Los pares también necesitan formas iguales: <em>either… or, both… and, not only… but also</em>. Lo que sigue a la primera palabra debe repetirse en forma después de la segunda.",
          ],
        },
        {
          weak: "The goal is not only to reduce costs but also improving delivery times.",
          strong: "The goal is not only to reduce costs but also to improve delivery times.",
          why: [
            "<em>To reduce</em> after <em>not only</em> calls for <em>to improve</em> after <em>but also</em>.",
            "<em>To reduce</em> después de <em>not only</em> pide <em>to improve</em> después de <em>but also</em>.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: ["Mechanics that differ from Spanish", "Mecánica que cambia respecto al español"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "The call with the german team is on monday, 3 of march.",
          strong: "The call with the German team is on Monday, March 3.",
          why: [
            "English capitalizes days, months, languages and nationalities. Spanish lowercases all four. The American date puts the month first, with no <em>of</em>.",
            "El inglés escribe con mayúscula los días, los meses, los idiomas y las nacionalidades. El español escribe los cuatro con minúscula. La fecha estadounidense pone primero el mes, sin <em>of</em>.",
          ],
        },
        {
          weak: "The kickoff is on June 5 2026 in Austin.",
          strong: "The kickoff is on June 5, 2026, in Austin.",
          why: [
            "In a full American date, a comma separates the day from the year, and a second comma follows the year when the sentence continues.",
            "En una fecha estadounidense completa, una coma separa el día del año, y una segunda coma va después del año cuando la oración continúa.",
          ],
        },
        {
          weak: 'The client called the timeline "aggressive but possible".',
          strong: 'The client called the timeline "aggressive but possible."',
          why: [
            "In American English, periods and commas go inside the closing quotation mark. Spanish, and British English, put them outside.",
            "En el inglés estadounidense, los puntos y las comas van dentro de las comillas de cierre. El español, y el inglés británico, los ponen afuera.",
          ],
        },
        {
          weak: "Revenue was 2.5 millions of dollars.",
          strong: "Revenue was $2.5 million.",
          why: [
            "After a number, <em>million</em> and <em>billion</em> take no <em>-s</em> and no <em>of</em>. The dollar sign goes before the figure.",
            "Después de un número, <em>million</em> y <em>billion</em> no llevan <em>-s</em> ni <em>of</em>. El signo de dólares va antes de la cifra.",
          ],
        },
        {
          weak: "I spoke with the Plant Director and with Eng. Ruiz.",
          strong: "I spoke with the plant director and with Mr. Ruiz.",
          why: [
            "A job title is capitalized directly before a name (<em>Plant Director Ana Soto</em>) and lowercase when it only describes the role. English also has no equivalent of <em>Ing.</em> or <em>Lic.</em>; apart from <em>Dr.</em>, use <em>Mr.</em> or <em>Ms.</em>, or the first name.",
            "El nombre de un puesto lleva mayúscula justo antes de un nombre (<em>Plant Director Ana Soto</em>) y minúscula cuando solo describe el cargo. Además, el inglés no tiene equivalente de <em>Ing.</em> ni de <em>Lic.</em>; fuera de <em>Dr.</em>, usa <em>Mr.</em> o <em>Ms.</em>, o el nombre de pila.",
          ],
        },
        {
          weak: "Dear Marcus: The training starts at 15:00 hrs.",
          strong: "Hi Marcus, The training starts at 3 p.m.",
          why: [
            "An American email greeting ends with a comma; the colon belongs to formal letters. American business writing also uses the 12-hour clock with <em>a.m.</em> and <em>p.m.</em>",
            "El saludo de un correo estadounidense termina con coma; los dos puntos son para cartas formales. La escritura de negocios estadounidense también usa el reloj de 12 horas con <em>a.m.</em> y <em>p.m.</em>",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["A short update with every rule in it", "Un informe corto con todas las reglas"],
      context: [
        "Priya summarizes a client meeting for Dana. Each note names the rule at work.",
        "Priya le resume a Dana una junta con un cliente. Cada nota nombra la regla que está en juego.",
      ],
      lines: [
        {
          en: "Hi Dana, here is the summary of Tuesday's meeting with the Monterrey client.",
          note: [
            "Comma after the greeting. <em>Tuesday</em> capitalized. <em>The summary</em>: a specific one.",
            "Coma después del saludo. <em>Tuesday</em> con mayúscula. <em>The summary</em>: uno específico.",
          ],
        },
        {
          en: "Everyone on their team likes the proposal, and most of their questions were about training.",
          note: [
            "<em>Everyone</em> takes a singular verb. <em>Most of</em> without <em>the</em>. <em>Training</em> in general, uncountable: no article.",
            "<em>Everyone</em> lleva verbo en singular. <em>Most of</em> sin <em>the</em>. <em>Training</em> en general, incontable: sin artículo.",
          ],
        },
        {
          en: "The list of changes they requested is short:",
          note: [
            "The subject is <em>list</em>, so the verb is <em>is</em>, five words later.",
            "El sujeto es <em>list</em>, así que el verbo es <em>is</em>, cinco palabras después.",
          ],
        },
        {
          en: "1. Move the kickoff to Monday, March 9.",
          note: [
            "Each item starts with a verb in the same form. Month before day.",
            "Cada punto empieza con un verbo en la misma forma. El mes antes del día.",
          ],
        },
        {
          en: "2. Add a Spanish version of the manual.",
          note: [
            "<em>Spanish</em> capitalized. <em>A version</em>: one, not yet identified.",
            "<em>Spanish</em> con mayúscula. <em>A version</em>: una, todavía sin identificar.",
          ],
        },
        {
          en: "3. Include two training sessions for the night shift.",
          note: [
            "<em>Training</em> cannot be counted, so the sessions are.",
            "<em>Training</em> no se puede contar, así que se cuentan las sesiones.",
          ],
        },
        {
          en: "The total stays at $1.2 million.",
          note: [
            "Dollar sign first; <em>million</em> with no <em>-s</em>.",
            "Primero el signo de dólares; <em>million</em> sin <em>-s</em>.",
          ],
        },
        {
          en: 'Their operations director, Luis Ortega, called the timeline "aggressive but possible."',
          note: [
            "Title in lowercase because it describes the role. Period inside the quotation marks.",
            "El puesto con minúscula porque describe el cargo. El punto dentro de las comillas.",
          ],
        },
        {
          en: "I sent him the revised schedule yesterday, and I'll call him on Friday.",
          note: [
            "<em>Yesterday</em> requires the simple past.",
            "<em>Yesterday</em> exige el pasado simple.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: [
        "Two that cost real money: dates and billions",
        "Dos que cuestan dinero de verdad: las fechas y los <em>billions</em>",
      ],
      html: [
        "<b>Dates.</b> In the United States, <em>05/06/2026</em> is May 6. In Mexico it is June 5. In anything that crosses the border, write the month as a word: <em>June 5, 2026</em>. Nobody can misread it. <b>Billions.</b> An English <em>billion</em> is a thousand million: 1,000,000,000, or <em>mil millones</em>. A Spanish <em>billón</em> is a million million, which English calls a <em>trillion</em>. So <em>2,000 millones de pesos</em> is <em>2 billion pesos</em>. The comma and the decimal point, at least, are no problem: Mexico and the United States write <em>1,250.50</em> the same way. Colleagues in South America and Europe usually reverse the two marks, so check any figure that comes from them.",
        "<b>Fechas.</b> En Estados Unidos, <em>05/06/2026</em> es el 6 de mayo. En México es el 5 de junio. En cualquier cosa que cruce la frontera, escribe el mes con letra: <em>June 5, 2026</em>. Nadie lo puede leer mal. <b>Billions.</b> Un <em>billion</em> en inglés son mil millones: 1,000,000,000. Un billón en español es un millón de millones, que en inglés se llama <em>trillion</em>. Entonces 2,000 millones de pesos son <em>2 billion pesos</em>. La coma y el punto decimal, al menos, no dan problema: México y Estados Unidos escriben <em>1,250.50</em> igual. En Sudamérica y Europa por lo general invierten los dos signos, así que revisa cualquier cifra que venga de allá.",
      ],
    },
    {
      t: "choice",
      title: ["Which version is correct?", "¿Qué versión es correcta?"],
      items: [
        {
          prompt: [
            "A colleague sent comments on your draft. You are thanking her.",
            "Una colega te mandó comentarios sobre tu borrador. Le das las gracias.",
          ],
          options: [
            {
              en: "Thanks for the feedbacks. They were very useful.",
              ok: false,
              why: ["<em>Feedback</em> has no plural.", "<em>Feedback</em> no tiene plural."],
            },
            {
              en: "Thanks for the feedback. It was very useful.",
              ok: true,
              why: [
                "Uncountable noun, singular pronoun, singular verb.",
                "Sustantivo incontable, pronombre en singular, verbo en singular.",
              ],
            },
            {
              en: "Thanks for your feedback. They were very useful.",
              ok: false,
              why: [
                "The noun is right, but the pronoun still treats it as plural. Uncountable nouns are referred to as <em>it</em>.",
                "El sustantivo está bien, pero el pronombre todavía lo trata como plural. A los sustantivos incontables se les refiere con <em>it</em>.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are reporting on one survey that produced several results.",
            "Reportas sobre una encuesta que arrojó varios resultados.",
          ],
          options: [
            {
              en: "The results of the customer survey shows a clear pattern.",
              ok: false,
              why: [
                "The verb agreed with <em>survey</em>, the nearest noun. The subject is <em>results</em>.",
                "El verbo concordó con <em>survey</em>, el sustantivo más cercano. El sujeto es <em>results</em>.",
              ],
            },
            {
              en: "The result of the customer surveys show a clear pattern.",
              ok: false,
              why: [
                "Now the subject is singular (<em>result</em>) and the verb is plural. It also changes the facts: there was one survey.",
                "Ahora el sujeto es singular (<em>result</em>) y el verbo plural. Además cambia los hechos: hubo una sola encuesta.",
              ],
            },
            {
              en: "The results of the customer survey show a clear pattern.",
              ok: true,
              why: [
                "<em>Results… show</em>. Cover <em>of the customer survey</em> and the agreement is obvious.",
                "<em>Results… show</em>. Tapa <em>of the customer survey</em> y la concordancia se ve sola.",
              ],
            },
          ],
        },
        {
          prompt: [
            "The contract was signed last Friday and the work began this Monday. Today is Wednesday.",
            "El contrato se firmó el viernes pasado y el trabajo empezó este lunes. Hoy es miércoles.",
          ],
          options: [
            {
              en: "We signed the contract last Friday and started work on Monday.",
              ok: true,
              why: [
                "Two finished events with stated times: simple past for both.",
                "Dos eventos terminados con tiempo indicado: pasado simple en los dos.",
              ],
            },
            {
              en: "We have signed the contract last Friday and have started work on Monday.",
              ok: false,
              why: [
                "<em>Have signed</em> cannot be combined with a finished time such as <em>last Friday</em>.",
                "<em>Have signed</em> no se puede combinar con un tiempo terminado como <em>last Friday</em>.",
              ],
            },
            {
              en: "We signed the contract last Friday and have started work on Monday.",
              ok: false,
              why: [
                "The first half is right. The second repeats the error: <em>on Monday</em> is a finished time, so it needs <em>started</em>.",
                "La primera mitad está bien. La segunda repite el error: <em>on Monday</em> es un tiempo terminado, así que necesita <em>started</em>.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are listing three goals for the quarter in one sentence.",
            "Enumeras tres metas del trimestre en una oración.",
          ],
          options: [
            {
              en: "This quarter we will reduce delivery times, renegotiating the freight contract, and hire two analysts.",
              ok: false,
              why: [
                "The middle item changed form. <em>We will renegotiating</em> does not work.",
                "El elemento de en medio cambió de forma. <em>We will renegotiating</em> no funciona.",
              ],
            },
            {
              en: "This quarter we will reduce delivery times, the freight contract will be renegotiated, and hire two analysts.",
              ok: false,
              why: [
                "A full passive clause sits between two verbs that depend on <em>we will</em>. The series falls apart in the middle.",
                "Una oración pasiva completa quedó entre dos verbos que dependen de <em>we will</em>. La serie se desarma a la mitad.",
              ],
            },
            {
              en: "This quarter we will reduce delivery times, renegotiate the freight contract, and hire two analysts.",
              ok: true,
              why: [
                "Three base verbs, each one completing <em>we will</em>.",
                "Tres verbos en forma base, y cada uno completa <em>we will</em>.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are announcing a board meeting and the budget it will vote on.",
            "Anuncias una junta de consejo y el presupuesto que se va a votar.",
          ],
          options: [
            {
              en: "The board meets on Thursday, October 8, to approve the $3.5 million budget.",
              ok: true,
              why: [
                "Day and month capitalized, month before day, commas around the date, dollar sign first, <em>million</em> with no <em>-s</em>.",
                "Día y mes con mayúscula, el mes antes del día, comas alrededor de la fecha, primero el signo de dólares, <em>million</em> sin <em>-s</em>.",
              ],
            },
            {
              en: "The board meets on thursday, October 8, to approve the $3.5 millions budget.",
              ok: false,
              why: [
                "The day needs a capital letter, and <em>million</em> takes no <em>-s</em> after a number.",
                "El día necesita mayúscula, y <em>million</em> no lleva <em>-s</em> después de un número.",
              ],
            },
            {
              en: "The board meets on Thursday 8 of October to approve the budget of 3.5 million of dollars.",
              ok: false,
              why: [
                "The date follows Spanish order with <em>of</em>, and <em>million of dollars</em> copies <em>millones de dólares</em>.",
                "La fecha sigue el orden del español con <em>of</em>, y <em>million of dollars</em> copia <em>millones de dólares</em>.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Rewrite: one family at a time", "Reescribe: una familia a la vez"],
      items: [
        {
          task: [
            "Articles. This sentence has five errors, some extra and some missing.",
            "Artículos. Esta oración tiene cinco errores, unos por artículo de más y otros por artículo de menos.",
          ],
          before:
            "The last year the company opened new office in the Texas, and the sales in United States grew 20%.",
          after:
            "Last year the company opened a new office in Texas, and sales in the United States grew 20%.",
          why: [
            "<em>Last year</em> and <em>Texas</em> lose the article; <em>office</em> gains <em>a</em>; <em>sales</em> in general loses <em>the</em>; <em>the United States</em> gains it.",
            "<em>Last year</em> y <em>Texas</em> pierden el artículo; <em>office</em> gana <em>a</em>; <em>sales</em> en general pierde <em>the</em>; <em>the United States</em> lo gana.",
          ],
        },
        {
          task: [
            "Agreement. Find the real subject of each verb.",
            "Concordancia. Encuentra el sujeto real de cada verbo.",
          ],
          before:
            "The quality of the samples that the supplier sent last week were not acceptable, and each of the samples have a different defect.",
          after:
            "The quality of the samples that the supplier sent last week was not acceptable, and each of the samples has a different defect.",
          why: [
            "<em>Quality… was</em>: nine words separate the subject from its verb. <em>Each… has</em>: <em>each</em> is singular.",
            "<em>Quality… was</em>: nueve palabras separan el sujeto de su verbo. <em>Each… has</em>: <em>each</em> es singular.",
          ],
        },
        {
          task: [
            "Tense. Everything here happened yesterday, except one thing that is still pending.",
            "Tiempos verbales. Todo esto pasó ayer, salvo una cosa que sigue pendiente.",
          ],
          before:
            "Yesterday we have had a call with the vendor. They explain the delay and promise a new date, but they didn't send it yet.",
          after:
            "Yesterday we had a call with the vendor. They explained the delay and promised a new date, but they haven't sent it yet.",
          why: [
            "<em>Yesterday</em> takes the simple past, and the story stays in it. The pending item is the one place for <em>haven't sent… yet</em>, because it is still true now.",
            "<em>Yesterday</em> lleva pasado simple, y la historia se queda ahí. El pendiente es el único lugar para <em>haven't sent… yet</em>, porque sigue siendo cierto ahora.",
          ],
        },
        {
          task: [
            "Parallel form. Make the three items match, each starting with a verb.",
            "Forma paralela. Haz que los tres puntos coincidan y que cada uno empiece con un verbo.",
          ],
          before:
            "Responsibilities: (1) Management of the regional budget. (2) To supervise a team of eight. (3) Reports are prepared monthly for the board.",
          after:
            "Responsibilities: (1) Manage the regional budget. (2) Supervise a team of eight. (3) Prepare monthly reports for the board.",
          why: [
            "A noun, a <em>to</em> verb and a passive sentence became three base verbs. The list is shorter and reads as one person's job.",
            "Un sustantivo, un verbo con <em>to</em> y una oración pasiva se volvieron tres verbos en forma base. La lista queda más corta y se lee como el trabajo de una sola persona.",
          ],
        },
        {
          task: [
            "Mechanics. Fix the capital letters, the date, the time and the number. There is also a comma joining two sentences.",
            "Mecánica. Corrige las mayúsculas, la fecha, la hora y el número. También hay una coma que une dos oraciones.",
          ],
          before:
            "the workshop for the american clients is on tuesday 4 of november at 16:00 hrs, the cost is 1.2 millions of pesos.",
          after:
            "The workshop for the American clients is on Tuesday, November 4, at 4 p.m. The cost is 1.2 million pesos.",
          why: [
            "Capitals on the first word, the nationality, the day and the month; month before day; 12-hour time; <em>million</em> with no <em>-s</em> and no <em>of</em>; and a period between the two sentences.",
            "Mayúsculas en la primera palabra, la nacionalidad, el día y el mes; el mes antes del día; hora en formato de 12; <em>million</em> sin <em>-s</em> y sin <em>of</em>; y un punto entre las dos oraciones.",
          ],
        },
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "General ideas take no article in English: <em>Inflation is rising. Customers want speed.</em> A singular countable noun always needs one: <em>She is an engineer.</em>",
          "Las ideas generales no llevan artículo en inglés: <em>Inflation is rising. Customers want speed.</em> Un sustantivo contable en singular siempre lo necesita: <em>She is an engineer.</em>",
        ],
        [
          "<em>Information, advice, feedback, training, equipment, research</em>: no plural, no <em>a/an</em>.",
          "<em>Information, advice, feedback, training, equipment, research</em>: sin plural y sin <em>a/an</em>.",
        ],
        [
          "Cover the words between the subject and the verb, then check that they agree.",
          "Tapa las palabras entre el sujeto y el verbo y luego revisa que concuerden.",
        ],
        [
          "A finished time takes the simple past: <em>We sent it yesterday.</em>",
          "Un tiempo terminado lleva pasado simple: <em>We sent it yesterday.</em>",
        ],
        [
          "Every item in a list takes the same form. Write the month as a word, and remember that a <em>billion</em> is <em>mil millones</em>.",
          "Todos los elementos de una lista llevan la misma forma. Escribe el mes con letra y recuerda que un <em>billion</em> son mil millones.",
        ],
      ],
    },
  ],
};
