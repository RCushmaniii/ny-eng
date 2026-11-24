import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "sentence-boundaries",
  slugEs: "limites-de-la-oracion",
  title: [
    "Sentence Boundaries: Run-ons, Splices and Fragments",
    "Los Límites de la Oración: Oraciones Unidas, Comas y Fragmentos",
  ],
  summary: [
    "Know exactly where an English sentence ends, and the four correct ways to join two ideas.",
    "Aprende exactamente dónde termina una oración en inglés y las cuatro formas correctas de unir dos ideas.",
  ],
  description: [
    "Fix comma splices, run-ons and fragments in business English. Learn the period test and the four correct ways to join two complete ideas.",
    "Corrige comas mal usadas, oraciones encimadas y fragmentos en tu inglés de negocios. Aprende la prueba del punto y las cuatro formas de unir ideas.",
  ],
  minutes: 16,
  blocks: [
    {
      t: "p",
      html: [
        "You write a sentence the way you would in Spanish: one idea, a comma, the next idea, a comma, the conclusion. In Spanish it flows. In English, an educated reader sees an error in the first line, and it is the kind of error that makes them read the rest more skeptically. Your ideas were connected correctly. The punctuation between them was Spanish.",
        "Escribes una oración como lo harías en español: una idea, una coma, la siguiente idea, otra coma, la conclusión. En español fluye. En inglés, un lector educado ve un error en la primera línea, y es el tipo de error que lo hace leer lo demás con más escepticismo. Tus ideas estaban bien conectadas. La puntuación entre ellas era la del español.",
      ],
    },
    {
      t: "idea",
      title: ["A comma cannot join two sentences", "Una coma no puede unir dos oraciones"],
      html: [
        "English is strict about one thing Spanish is relaxed about: where a sentence ends. If a group of words has its own subject and verb and can stand alone, it is a complete sentence, and a comma alone is too weak to attach it to another one. <b>The period test:</b> put a period where your comma is. If both halves stand as sentences, the comma is wrong. <span class='x'>✗</span> <em>The numbers look good, we should present them Friday.</em> Both halves pass the test, so the comma fails. This error is called a comma splice, and it is the most common punctuation error Spanish speakers make in English.",
        "El inglés es estricto con algo en lo que el español es flexible: dónde termina una oración. Si un grupo de palabras tiene su propio sujeto y verbo y se sostiene solo, es una oración completa, y una coma sola no tiene fuerza para pegarla a otra. <b>La prueba del punto:</b> pon un punto donde está tu coma. Si las dos mitades se sostienen como oraciones, la coma está mal. <span class='x'>✗</span> <em>The numbers look good, we should present them Friday.</em> Las dos mitades pasan la prueba, así que la coma reprueba. Este error se llama <em>comma splice</em> y es el error de puntuación más común de quienes hablamos español cuando escribimos en inglés.",
      ],
    },
    {
      t: "framework",
      title: [
        "The four correct ways to join two ideas",
        "Las cuatro formas correctas de unir dos ideas",
      ],
      lead: [
        "Two complete ideas: <em>The vendor missed the deadline</em> and <em>We're moving the launch to July</em>. English gives you four ways to connect them, and each one tells the reader something different.",
        "Dos ideas completas: <em>The vendor missed the deadline</em> y <em>We're moving the launch to July</em>. El inglés te da cuatro formas de conectarlas, y cada una le dice algo distinto a tu lector.",
      ],
      steps: [
        {
          label: ["A period", "Un punto"],
          html: [
            "Two sentences. The simplest fix and never wrong. The reader connects the ideas on their own, and each one gets full weight.",
            "Dos oraciones. La solución más simple y nunca está mal. Tu lector conecta las ideas por su cuenta, y cada una recibe todo su peso.",
          ],
          say: "The vendor missed the deadline. We're moving the launch to July.",
        },
        {
          label: ["A comma plus a joining word", "Una coma más una palabra de enlace"],
          html: [
            "The comma needs a partner: <b>and, but, so, or, yet</b>. The joining word states the relationship, so choose it for its meaning. <em>So</em> gives a result, <em>but</em> a contrast, <em>and</em> only an addition.",
            "La coma necesita pareja: <b>and, but, so, or, yet</b>. La palabra de enlace declara la relación, así que elígela por su significado. <em>So</em> da un resultado, <em>but</em> un contraste, <em>and</em> solo una suma.",
          ],
          say: "The vendor missed the deadline, so we're moving the launch to July.",
        },
        {
          label: ["A semicolon", "Un punto y coma"],
          html: [
            "A semicolon joins two complete sentences that belong together, with no joining word. It is more formal than a period and is used far less. Both sides must pass the period test.",
            "El punto y coma une dos oraciones completas que van juntas, sin palabra de enlace. Es más formal que el punto y se usa mucho menos. Los dos lados tienen que pasar la prueba del punto.",
          ],
          say: "The vendor missed the deadline; the launch moves to July.",
        },
        {
          label: ["Make one idea depend on the other", "Haz que una idea dependa de la otra"],
          html: [
            "Start one idea with <b>because, although, since, when, if, after</b> or <b>while</b>, and it stops being a sentence on its own. It now leans on the main idea. When the dependent part comes first, close it with a comma. When it comes second, you usually need no comma.",
            "Empieza una idea con <b>because, although, since, when, if, after</b> o <b>while</b> y deja de ser una oración por sí sola. Ahora se apoya en la idea principal. Cuando la parte dependiente va primero, ciérrala con una coma. Cuando va después, por lo general no lleva coma.",
          ],
          say: "Because the vendor missed the deadline, we're moving the launch to July.",
        },
      ],
    },
    {
      t: "compare",
      title: [
        "Comma splices and run-ons, repaired",
        "Comas mal usadas y oraciones encimadas, reparadas",
      ],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "The numbers look good, we should present them Friday.",
          strong: "The numbers look good, so we should present them Friday.",
          why: [
            "The second idea is a result of the first. <em>So</em> says that, and gives the comma the partner it needs.",
            "La segunda idea es resultado de la primera. <em>So</em> lo dice y le da a la coma la pareja que necesita.",
          ],
        },
        {
          weak: "I reviewed the contract, it has two problems.",
          strong: "I reviewed the contract. It has two problems.",
          why: [
            "A period is the cleanest fix here. The short second sentence also makes the reader stop on the news.",
            "Aquí el punto es la solución más limpia. Además, la segunda oración, corta, hace que tu lector se detenga en la noticia.",
          ],
        },
        {
          weak: "We wanted to launch in May, however the testing took longer than planned.",
          strong: "We wanted to launch in May, but testing took longer than planned.",
          why: [
            "<em>However</em> is not a joining word, so a comma before it does not connect two sentences. Use <em>but</em>, or keep <em>however</em> with stronger punctuation: <em>We wanted to launch in May; however, testing took longer.</em>",
            "<em>However</em> no es palabra de enlace, así que una coma antes no conecta dos oraciones. Usa <em>but</em>, o conserva <em>however</em> con puntuación más fuerte: <em>We wanted to launch in May; however, testing took longer.</em>",
          ],
        },
        {
          weak: "Priya is out this week, please send your questions to Marcus.",
          strong: "Priya is out this week. Please send your questions to Marcus.",
          why: [
            "A request beginning with <em>please</em> is a full sentence (its subject is an understood <em>you</em>). It needs its own period.",
            "Una petición que empieza con <em>please</em> es una oración completa (su sujeto es un <em>you</em> sobreentendido). Necesita su propio punto.",
          ],
        },
        {
          weak: "The client approved the design, then they asked for three changes.",
          strong: "The client approved the design and then asked for three changes.",
          why: [
            "<em>Then</em> is not a joining word either. Add <em>and</em>. With the repeated subject <em>they</em> removed, no comma is needed at all.",
            "<em>Then</em> tampoco es palabra de enlace. Agrega <em>and</em>. Al quitar el sujeto repetido <em>they</em>, ya no hace falta ninguna coma.",
          ],
        },
        {
          weak: "The demo went well they want a proposal by Monday.",
          strong: "The demo went well, and they want a proposal by Monday.",
          why: [
            "Two sentences with nothing between them is a run-on. Any of the four joins fixes it; here the second idea simply adds to the first.",
            "Dos oraciones sin nada en medio forman un <em>run-on</em>. Cualquiera de las cuatro uniones lo arregla; aquí la segunda idea solo se suma a la primera.",
          ],
        },
        {
          weak: "The supplier raised prices in March, we looked for alternatives, we found two, one of them is cheaper, the quality is lower.",
          strong:
            "The supplier raised prices in March, so we looked for alternatives. We found two. One is cheaper, but its quality is lower.",
          why: [
            "Five sentences on one string of commas. The repair uses three of the four joins and shows the logic the commas were hiding: result, then findings, then a contrast.",
            "Cinco oraciones colgadas de una hilera de comas. La reparación usa tres de las cuatro uniones y muestra la lógica que las comas escondían: resultado, hallazgos y luego un contraste.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Joining patterns to copy", "Patrones de unión para copiar"],
      items: [
        {
          en: "We're over budget, so we're pausing the two open hires.",
          use: [
            "<em>, so</em> for a result. The most useful join in business writing.",
            "<em>, so</em> para un resultado. La unión más útil en la escritura de negocios.",
          ],
        },
        {
          en: "The demo went well, but they haven't committed to a date.",
          use: [
            "<em>, but</em> for a contrast. It does the work of <em>however</em> with less weight.",
            "<em>, but</em> para un contraste. Hace el trabajo de <em>however</em> con menos peso.",
          ],
        },
        {
          en: "We can renew now, or we can wait for the Q4 pricing.",
          use: [
            "<em>, or</em> to set out two options as equals.",
            "<em>, or</em> para plantear dos opciones al mismo nivel.",
          ],
        },
        {
          en: "Because the audit starts Monday, we need the files by Friday.",
          use: [
            "Reason first: a comma closes the <em>because</em> part.",
            "La razón primero: una coma cierra la parte de <em>because</em>.",
          ],
        },
        {
          en: "We need the files by Friday because the audit starts Monday.",
          use: [
            "Reason second: no comma before <em>because</em>.",
            "La razón después: sin coma antes de <em>because</em>.",
          ],
        },
        {
          en: "Although sales grew 8%, margin fell two points.",
          use: [
            "<em>Although</em> puts the less important fact in the dependent part and leaves the main clause for the one that matters.",
            "<em>Although</em> pone el dato menos importante en la parte dependiente y deja la oración principal para el que importa.",
          ],
        },
        {
          en: "If the vendor confirms today, we ship on Thursday.",
          use: [
            "A condition first, then a comma, then what follows from it.",
            "Primero la condición, luego una coma y luego lo que se deriva de ella.",
          ],
        },
        {
          en: "The pilot ended in June; however, we're still collecting data.",
          use: [
            "The full <em>however</em> pattern inside one sentence: semicolon before, comma after.",
            "El patrón completo de <em>however</em> dentro de una oración: punto y coma antes, coma después.",
          ],
        },
        {
          en: "The pilot ended in June. However, we're still collecting data.",
          use: [
            "The same idea as two sentences. Equally correct and easier to get right.",
            "La misma idea en dos oraciones. Igual de correcta y más fácil de escribir bien.",
          ],
        },
        {
          en: "The client changed the scope twice, which is why we need another week.",
          use: [
            "<em>, which is why</em> attaches a conclusion to the sentence that causes it. It cannot start a sentence of its own.",
            "<em>, which is why</em> pega una conclusión a la oración que la causa. No puede empezar una oración propia.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: ["Fragments: the opposite error", "Fragmentos: el error contrario"],
    },
    {
      t: "p",
      html: [
        "A fragment is punctuated like a sentence but is missing something: a subject, a verb, or a main idea to lean on. The usual cause is a period placed too early, which cuts a dependent part away from its sentence. Spanish adds a second cause. Spanish lets you drop the subject (<em>Es importante confirmar</em>); English does not, so <span class='x'>✗</span> <em>Is important to confirm</em> has no subject. English needs <em>it</em>, or better, a real one.",
        "Un fragmento tiene puntuación de oración pero le falta algo: un sujeto, un verbo o una idea principal en la cual apoyarse. La causa más frecuente es un punto que llega antes de tiempo y separa una parte dependiente de su oración. El español agrega una segunda causa. En español puedes omitir el sujeto (<em>Es importante confirmar</em>); en inglés no, así que a <span class='x'>✗</span> <em>Is important to confirm</em> le falta sujeto. El inglés necesita <em>it</em> o, mejor todavía, un sujeto de verdad.",
      ],
    },
    {
      t: "compare",
      title: ["Fragments, repaired", "Fragmentos, reparados"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "We need another week. Because the client changed the scope.",
          strong: "We need another week because the client changed the scope.",
          why: [
            "A <em>because</em> part cannot stand alone. Attach it to the sentence it explains.",
            "Una parte con <em>because</em> no se sostiene sola. Pégala a la oración que explica.",
          ],
        },
        {
          weak: "The client changed the scope twice. Which is why we need another week.",
          strong: "The client changed the scope twice, which is why we need another week.",
          why: [
            "<em>Which</em> refers back to the sentence before it, so it has to stay inside that sentence. To start a new one, write <em>That is why</em>.",
            "<em>Which</em> se refiere a la oración anterior, así que tiene que quedarse dentro de ella. Para empezar una nueva, escribe <em>That is why</em>.",
          ],
        },
        {
          weak: "Is necessary to sign the form before Friday.",
          strong: "You need to sign the form before Friday.",
          why: [
            "The Spanish sentence has no stated subject; the English one must. <em>It is necessary to sign</em> is correct, but a real subject, <em>you</em>, is shorter and says who acts.",
            "La oración en español no tiene sujeto explícito; la del inglés lo exige. <em>It is necessary to sign</em> es correcta, pero un sujeto real, <em>you</em>, es más corto y dice quién actúa.",
          ],
        },
        {
          weak: "Attached the report with the final numbers.",
          strong: "I've attached the report with the final numbers.",
          why: [
            "A direct copy of <em>Adjunto el reporte</em>, where the Spanish verb ending carries the subject. English needs <em>I</em>. <em>The report is attached</em> works too.",
            "Copia directa de <em>Adjunto el reporte</em>, donde la terminación del verbo en español lleva el sujeto. El inglés necesita <em>I</em>. <em>The report is attached</em> también funciona.",
          ],
        },
        {
          weak: "Regarding the March invoice. It was paid on April 2.",
          strong: "The March invoice was paid on April 2.",
          why: [
            "A topic announced as its own sentence is a fragment. Make the topic the subject and the announcement disappears.",
            "Un tema anunciado como oración aparte es un fragmento. Convierte el tema en sujeto y el anuncio desaparece.",
          ],
        },
      ],
    },
    {
      t: "list",
      items: [
        [
          "<b>When a semicolon earns its place.</b> Between two complete sentences so closely tied that a period would separate them too much, often a balance or a contrast: <em>The plan is approved; the budget is not.</em>",
          "<b>Cuándo el punto y coma se gana su lugar.</b> Entre dos oraciones completas tan ligadas que un punto las separaría demasiado, muchas veces un equilibrio o un contraste: <em>The plan is approved; the budget is not.</em>",
        ],
        [
          "A semicolon also separates items in a list when the items contain commas: <em>The review team is Dana Lee, finance; Marcus Hill, legal; and Priya Shah, operations.</em>",
          "El punto y coma también separa los elementos de una lista cuando esos elementos ya traen comas: <em>The review team is Dana Lee, finance; Marcus Hill, legal; and Priya Shah, operations.</em>",
        ],
        [
          "<b>A colon</b> follows a complete sentence and delivers what that sentence promised: <em>We have one problem: the supplier wants payment up front.</em>",
          "<b>Los dos puntos</b> van después de una oración completa y entregan lo que esa oración prometió: <em>We have one problem: the supplier wants payment up front.</em>",
        ],
        [
          "<b>A dash</b> adds something you want the reader to feel: <em>The supplier can deliver by Friday—at double the price.</em> A pair of dashes sets off an aside: <em>The second quote—the one from Monterrey—is 15% lower.</em> American English writes the dash long and without spaces. Its force depends on being rare, so one per message is usually enough.",
          "<b>La raya</b> agrega algo que quieres que tu lector sienta: <em>The supplier can deliver by Friday—at double the price.</em> Un par de rayas aparta un comentario: <em>The second quote—the one from Monterrey—is 15% lower.</em> El inglés estadounidense escribe la raya larga y sin espacios. Su fuerza depende de que aparezca poco, así que una por mensaje suele bastar.",
        ],
        [
          "<b>When in doubt, use a period.</b> Two short correct sentences are always better than one long sentence with the wrong mark in the middle.",
          "<b>Si tienes duda, usa un punto.</b> Dos oraciones cortas y correctas siempre son mejores que una larga con el signo equivocado en medio.",
        ],
      ],
    },
    {
      t: "model",
      title: [
        "A status update with every join in it",
        "Un informe de avance con todas las uniones",
      ],
      context: [
        "Elena updates Marcus on a warehouse move. Read it once for the content, then once for the punctuation between ideas.",
        "Elena le informa a Marcus cómo va el cambio de un almacén. Léelo una vez por el contenido y otra por la puntuación entre las ideas.",
      ],
      lines: [
        {
          en: "Hi Marcus, the Monterrey warehouse move is on schedule, with one risk.",
        },
        {
          en: "We finished the inventory count on Friday, and the numbers match the system.",
          note: [
            "Two complete sentences joined by comma plus <em>and</em>.",
            "Dos oraciones completas unidas por coma más <em>and</em>.",
          ],
        },
        {
          en: "Because the new racks arrived early, the team started installing them this week.",
          note: [
            "The reason comes first as a dependent part, closed with a comma.",
            "La razón va primero como parte dependiente, cerrada con una coma.",
          ],
        },
        {
          en: "The risk is the forklift delivery.",
          note: [
            "A short sentence with its own period. The reader stops on it.",
            "Una oración corta con su propio punto. Tu lector se detiene en ella.",
          ],
        },
        {
          en: "The supplier promised June 3; however, they have missed two dates this year.",
          note: [
            "Semicolon before <em>however</em>, comma after. A comma before it would be a splice.",
            "Punto y coma antes de <em>however</em>, coma después. Una coma antes sería un <em>comma splice</em>.",
          ],
        },
        {
          en: "If they miss this one, we'll rent two forklifts locally, which adds about $2,400.",
          note: [
            "Condition, comma, main idea; then <em>which</em> attaches the cost to the sentence it belongs to.",
            "Condición, coma, idea principal; luego <em>which</em> pega el costo a la oración a la que pertenece.",
          ],
        },
        {
          en: "I'll know by Monday—and I'll tell you the same day.",
          note: [
            "One dash in the whole message, saved for the commitment.",
            "Una sola raya en todo el mensaje, reservada para el compromiso.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: ["The comma that works in Spanish", "La coma que sí funciona en español"],
      html: [
        "Spanish prose links complete clauses with commas all the time, and good Spanish writers build long, layered sentences that way. It is a strength of the language. English readers were trained to treat the same comma as an error, and they notice it immediately. Three carry-overs to check in every draft: a comma between two complete sentences; <em>, however</em> or <em>, therefore</em> or <em>, then</em> used as if they were <em>but</em> and <em>so</em> (<em>sin embargo</em> after a comma is fine in Spanish; <em>however</em> after a comma is not enough in English); and a sentence that opens with <em>Is</em> because the Spanish one had no subject. One caution in the other direction: the cure is not to chop everything into five-word sentences. Join ideas when the join shows the logic. Just use one of the four correct joins.",
        "La prosa en español une oraciones completas con comas todo el tiempo, y quien escribe bien en español construye así oraciones largas y con capas. Es una fortaleza del idioma. A los lectores de inglés les enseñaron a tratar esa misma coma como un error, y la notan de inmediato. Tres costumbres que conviene revisar en cada borrador: una coma entre dos oraciones completas; <em>, however</em>, <em>, therefore</em> o <em>, then</em> usados como si fueran <em>but</em> y <em>so</em> (<em>sin embargo</em> después de una coma está bien en español; <em>however</em> después de una coma no alcanza en inglés); y una oración que empieza con <em>Is</em> porque la del español no tenía sujeto. Una advertencia en sentido contrario: el remedio no es partir todo en oraciones de cinco palabras. Une las ideas cuando la unión muestra la lógica. Solo usa una de las cuatro uniones correctas.",
      ],
    },
    {
      t: "choice",
      title: [
        "Which version is punctuated correctly?",
        "¿Qué versión tiene la puntuación correcta?",
      ],
      items: [
        {
          prompt: [
            "You are telling a client that the first invoice was wrong and a corrected one is attached.",
            "Le avisas a un cliente que la primera factura estaba mal y que va adjunta una corregida.",
          ],
          options: [
            {
              en: "The first invoice had the wrong tax rate, I've attached a corrected one.",
              ok: false,
              why: [
                "A comma splice. Both halves pass the period test.",
                "Un <em>comma splice</em>. Las dos mitades pasan la prueba del punto.",
              ],
            },
            {
              en: "The first invoice had the wrong tax rate. I've attached a corrected one.",
              ok: true,
              why: [
                "Two complete sentences, two periods. The simplest correct join.",
                "Dos oraciones completas, dos puntos. La unión correcta más simple.",
              ],
            },
            {
              en: "The first invoice had the wrong tax rate; and I've attached a corrected one.",
              ok: false,
              why: [
                "A semicolon replaces the joining word. Use a semicolon alone, or a comma with <em>and</em>.",
                "El punto y coma reemplaza a la palabra de enlace. Usa el punto y coma solo, o una coma con <em>and</em>.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You agree with most of a proposal but need different payment terms.",
            "Estás de acuerdo con casi toda una propuesta, pero necesitas otras condiciones de pago.",
          ],
          options: [
            {
              en: "We agree with most of the proposal, however, the payment terms need to change.",
              ok: false,
              why: [
                "The most common version and still a splice. Commas on both sides of <em>however</em> do not join two sentences.",
                "La versión más común y aun así un <em>comma splice</em>. Las comas a ambos lados de <em>however</em> no unen dos oraciones.",
              ],
            },
            {
              en: "We agree with most of the proposal however the payment terms need to change.",
              ok: false,
              why: [
                "A run-on. Two sentences with no punctuation between them.",
                "Un <em>run-on</em>. Dos oraciones sin puntuación en medio.",
              ],
            },
            {
              en: "We agree with most of the proposal; however, the payment terms need to change.",
              ok: true,
              why: [
                "Semicolon before <em>however</em>, comma after. A period before <em>However</em> would be equally correct.",
                "Punto y coma antes de <em>however</em>, coma después. Un punto antes de <em>However</em> sería igual de correcto.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are reporting two facts about a pilot: the results were strong, and the client asked to expand it.",
            "Reportas dos hechos de un piloto: los resultados fueron sólidos y el cliente pidió ampliarlo.",
          ],
          options: [
            {
              en: "Although the pilot results were strong and the client asked to expand it.",
              ok: false,
              why: [
                "A fragment. <em>Although</em> makes the whole thing dependent, and no main idea ever arrives.",
                "Un fragmento. <em>Although</em> vuelve dependiente todo el conjunto, y la idea principal nunca llega.",
              ],
            },
            {
              en: "The pilot results were strong, and the client asked to expand it.",
              ok: true,
              why: [
                "Two complete sentences joined by a comma plus <em>and</em>.",
                "Dos oraciones completas unidas por una coma más <em>and</em>.",
              ],
            },
            {
              en: "The pilot results were strong. The client asking to expand it.",
              ok: false,
              why: [
                "The second part has no complete verb. <em>Asking</em> alone cannot carry a sentence; it needs <em>is asking</em> or <em>asked</em>.",
                "A la segunda parte le falta un verbo completo. <em>Asking</em> solo no sostiene una oración; necesita <em>is asking</em> o <em>asked</em>.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Legal has not approved the wording, so the announcement is delayed.",
            "Legal no aprobó la redacción, así que el anuncio se retrasa.",
          ],
          options: [
            {
              en: "Because legal hasn't approved the wording; we're delaying the announcement.",
              ok: false,
              why: [
                "A semicolon needs a complete sentence on each side. The <em>because</em> part is not one.",
                "El punto y coma necesita una oración completa de cada lado. La parte con <em>because</em> no lo es.",
              ],
            },
            {
              en: "Because legal hasn't approved the wording. We're delaying the announcement.",
              ok: false,
              why: [
                "The period cuts the reason away from its sentence and leaves a fragment.",
                "El punto separa la razón de su oración y deja un fragmento.",
              ],
            },
            {
              en: "Because legal hasn't approved the wording, we're delaying the announcement.",
              ok: true,
              why: [
                "Dependent part first, comma, main idea.",
                "Parte dependiente primero, coma, idea principal.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Choose the best repair of this chain: <em>Marcus reviewed the numbers, he found an error in the freight costs, the total is $14,000 lower, we need to resend the report.</em>",
            "Elige la mejor reparación de esta cadena: <em>Marcus reviewed the numbers, he found an error in the freight costs, the total is $14,000 lower, we need to resend the report.</em>",
          ],
          options: [
            {
              en: "Marcus reviewed the numbers and found an error in the freight costs. The total is $14,000 lower, so we need to resend the report.",
              ok: true,
              why: [
                "Two sentences, each with one clear join. <em>So</em> shows that resending follows from the lower total.",
                "Dos oraciones, cada una con una unión clara. <em>So</em> muestra que reenviar es consecuencia del total más bajo.",
              ],
            },
            {
              en: "Marcus reviewed the numbers; he found an error in the freight costs; the total is $14,000 lower; we need to resend the report.",
              ok: false,
              why: [
                "Each semicolon is legal, but the chain is as flat as before. The reader still has to work out how the ideas relate.",
                "Cada punto y coma es válido, pero la cadena queda igual de plana que antes. Tu lector todavía tiene que deducir cómo se relacionan las ideas.",
              ],
            },
            {
              en: "Marcus reviewed the numbers, found an error in the freight costs, the total is $14,000 lower, so we need to resend the report.",
              ok: false,
              why: [
                "Better at the start and the end, but <em>the total is $14,000 lower</em> is still a complete sentence hanging on commas.",
                "Mejora al principio y al final, pero <em>the total is $14,000 lower</em> sigue siendo una oración completa colgada de comas.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Rewrite: fix the boundaries", "Reescribe: arregla los límites"],
      items: [
        {
          task: [
            "Four sentences on one string of commas. Repair it with at least two different joins.",
            "Cuatro oraciones en una hilera de comas. Repárala con al menos dos uniones distintas.",
          ],
          before:
            "We received your order on Monday, the items are in stock, we will ship them tomorrow, you will receive the tracking number by email.",
          after:
            "We received your order on Monday, and the items are in stock. We'll ship them tomorrow and email you the tracking number.",
          why: [
            "Two sentences. The first joins two facts with comma plus <em>and</em>. The second shares one subject, <em>we</em>, between two verbs, so it needs no comma.",
            "Dos oraciones. La primera une dos hechos con coma más <em>and</em>. La segunda comparte un sujeto, <em>we</em>, entre dos verbos, así que no necesita coma.",
          ],
        },
        {
          task: [
            "Fix the punctuation around <em>however</em> and <em>therefore</em>, or replace them.",
            "Corrige la puntuación alrededor de <em>however</em> y <em>therefore</em>, o reemplázalos.",
          ],
          before:
            "The candidate has strong technical skills, however she has never managed a team, therefore we recommend a second interview.",
          after:
            "The candidate has strong technical skills, but she has never managed a team. We recommend a second interview.",
          why: [
            "<em>But</em> can join with a comma; <em>however</em> cannot. The recommendation gets its own sentence, where it stands out. <em>Therefore</em> was not needed: the order already shows the logic.",
            "<em>But</em> sí puede unir con una coma; <em>however</em> no. La recomendación recibe su propia oración, donde destaca. <em>Therefore</em> no hacía falta: el orden ya muestra la lógica.",
          ],
        },
        {
          task: [
            "Two fragments follow the first sentence. Attach them or rebuild them.",
            "Dos fragmentos siguen a la primera oración. Pégalos o reconstrúyelos.",
          ],
          before:
            "Thank you for the proposal. Which we reviewed yesterday. Being the price our main concern.",
          after:
            "Thank you for the proposal, which we reviewed yesterday. Our main concern is the price.",
          why: [
            "The <em>which</em> part goes back into its sentence. <em>Being the price</em> copies <em>siendo el precio</em>; English wants a subject and a full verb: <em>Our main concern is</em>.",
            "La parte con <em>which</em> regresa a su oración. <em>Being the price</em> copia <em>siendo el precio</em>; el inglés pide un sujeto y un verbo completo: <em>Our main concern is</em>.",
          ],
        },
        {
          task: [
            "Both halves are missing a subject, and a comma joins them. Fix all three problems.",
            "A las dos mitades les falta sujeto y las une una coma. Arregla los tres problemas.",
          ],
          before:
            "Is important to mention that the system will be down on Saturday starting at 6 p.m., is recommended to save your work before that time.",
          after:
            "The system will be down on Saturday starting at 6 p.m., so please save your work before then.",
          why: [
            "<em>Is important to mention that</em> had no subject and no content; the fact itself is now the sentence. <em>Is recommended</em> became a direct request, joined with <em>so</em>.",
            "<em>Is important to mention that</em> no tenía sujeto ni contenido; ahora el hecho mismo es la oración. <em>Is recommended</em> se convirtió en una petición directa, unida con <em>so</em>.",
          ],
        },
        {
          task: [
            "These three sentences are correct but choppy. Join them into one that shows how the ideas relate.",
            "Estas tres oraciones son correctas pero entrecortadas. Únelas en una sola que muestre cómo se relacionan las ideas.",
          ],
          before:
            "The supplier raised prices. We are staying with them. Their quality is the best we have found.",
          after:
            "Although the supplier raised prices, we're staying with them because their quality is the best we have found.",
          why: [
            "<em>Although</em> lowers the price increase to background, the decision takes the main clause, and <em>because</em> attaches the reason. Correct boundaries include knowing when to join.",
            "<em>Although</em> manda el aumento de precio al fondo, la decisión ocupa la oración principal y <em>because</em> le pega la razón. Manejar bien los límites incluye saber cuándo unir.",
          ],
        },
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "The period test: if a period could replace your comma and both halves stand alone, the comma is wrong.",
          "La prueba del punto: si un punto puede reemplazar tu coma y las dos mitades se sostienen solas, la coma está mal.",
        ],
        [
          "Four correct joins: a period; a comma plus <em>and, but, so, or, yet</em>; a semicolon; or a dependent part with <em>because, although, if, when</em>.",
          "Cuatro uniones correctas: un punto; una coma más <em>and, but, so, or, yet</em>; un punto y coma; o una parte dependiente con <em>because, although, if, when</em>.",
        ],
        [
          "<em>However</em>, <em>therefore</em> and <em>then</em> do not join sentences. Use a period or a semicolon before them.",
          "<em>However</em>, <em>therefore</em> y <em>then</em> no unen oraciones. Usa un punto o un punto y coma antes de ellos.",
        ],
        [
          "Every English sentence needs a stated subject. A sentence that begins with <em>Is</em> is missing one.",
          "Toda oración en inglés necesita un sujeto explícito. A una que empieza con <em>Is</em> le falta.",
        ],
        ["When in doubt, use a period.", "Si tienes duda, usa un punto."],
      ],
    },
  ],
};
