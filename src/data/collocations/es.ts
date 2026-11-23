// Mexican Professional Spanish (es-MX, register: tú) explanations for the collocations bank.
// The English being taught — prompts, formulas, example sentences — stays in English.
// Items are keyed by the English prompt exactly as it appears in data.ts:
//   `${q}` or `${q} ${hint}` when the item has a hint.
// index.ts throws at build time if a key here matches no item, or a `v` list has the wrong length.

export interface CollocationItemEs {
  hint?: string;
  a?: string;
  /** "When to use" text for each variant, in the same order as the English `v` list. */
  v?: string[];
  note?: string;
  trap?: string;
}

export interface CollocationGroupEs {
  title: string;
  rule: string;
  items: Record<string, CollocationItemEs>;
}

export const DATA_ES: CollocationGroupEs[] = [
  {
    title: "Responsabilidad y rendición de cuentas",
    rule: "Pregúntate <b>quién responde por qué</b>. La tarea o el resultado lleva <b>for</b>; la persona u organismo ante quien respondes lleva <b>to</b>; aquello en lo que te apoyas lleva <b>on</b>.",
    items: {
      "Responsible ______": {
        v: [
          "la tarea o el resultado — <em>responsible for hiring</em>",
          "la persona ante quien respondes — <em>responsible to the board</em>",
        ],
        note: "Las dos aparecen en una misma oración: <em>She is responsible <b>to</b> the board <b>for</b> performance.</em>",
      },
      "Be accountable ______": {
        v: [
          "el resultado — <em>accountable for the shortfall</em>",
          "la persona u organismo — <em>accountable to shareholders</em>",
        ],
      },
      "Report ______ (a supervisor)": {
        hint: "(a un superior)",
        v: [
          "la persona que está arriba de ti — <em>reports to the CEO</em>",
          "el tema del informe — <em>reported on the pilot</em>",
        ],
      },
      "Answer ______ (a board or authority)": {
        hint: "(a un consejo o autoridad)",
        trap: "Cuidado: le respondes (<b>answer to</b>) a <em>someone</em>, pero contestas (<b>answer</b>) una <em>question</em> sin preposición. <span class='x'>✗</span> <em>answer to the question</em>.",
      },
      "Be assigned ______ (a project)": { hint: "(a un proyecto)" },
      "Be qualified ______ (a position)": {
        hint: "(para un puesto)",
        note: "Antes de un verbo, usa <b>to</b>: <em>qualified to sign off on the accounts.</em>",
      },
      "Delegate ______": {
        trap: "<span class='x'>✗</span> <em>delegate her the review</em>. La persona siempre necesita <b>to</b>.",
      },
      "Take over ______ (a role from a predecessor)": {
        hint: "(un puesto, de quien lo ocupaba antes)",
        note: "<b>Take over something</b> (sin <b>from</b>) significa asumir el control de algo: <em>take over the portfolio.</em>",
      },
      "Account ______": {
        note: "Dos usos: <b>explicar</b> (<em>account for the variance</em>) y <b>representar una parte de</b> (<em>accounts for 40%</em>).",
      },
    },
  },
  {
    title: "Personas y comunicación",
    rule: "<b>With</b> = lado a lado. <b>To</b> = la dirección en la que viaja un mensaje. <b>About</b> = el tema del mensaje. <b>In</b> / <b>to</b> = sumarte a algo o aportarle algo.",
    items: {
      "Work ______ (a person or team)": { hint: "(con una persona o equipo)" },
      "Work ______ (a task or project)": {
        hint: "(en una tarea o proyecto)",
        note: "El mismo verbo, dos preposiciones. <b>With</b> para personas, <b>on</b> para cosas.",
      },
      "Speak ______ (someone)": {
        hint: "(con alguien)",
        v: [
          "una sola dirección — entregas un mensaje",
          "dos direcciones — una conversación entre iguales",
        ],
        note: "En la práctica son intercambiables. <b>With</b> suena un poco más colaborativo, que suele ser lo que buscas con tus pares.",
      },
      "Talk ______": {
        v: [
          "la persona — <em>talk to your manager</em>",
          "el tema — <em>talk about the budget</em>",
          "una conversación de ida y vuelta",
        ],
      },
      "Listen ______": {
        trap: "<span class='x'>✗</span> <em>listen the presentation</em>. A diferencia de <b>hear</b>, <b>listen</b> siempre necesita <b>to</b>.",
      },
      "Follow up ______ (someone)": {
        hint: "(con alguien)",
        v: [
          "la persona — <em>follow up with the client</em>",
          "el tema — <em>follow up on the proposal</em>",
        ],
      },
      "Meet ______": {
        v: [
          "conocer a alguien o encontrártelo — <em>I met him in Madrid</em>",
          "una reunión formal y agendada — <em>meet with counsel</em>",
        ],
        note: "<b>Meet with</b> es lo normal en el inglés de negocios de Norteamérica para reuniones agendadas. En otros lugares, <b>meet</b> a secas cubre los dos usos.",
      },
      "Consult ______": {
        v: [
          "una persona o firma — <em>consult with advisers</em>",
          "una fuente que revisas — <em>consult the policy</em>",
        ],
      },
      "Check ______": {
        v: [
          "pedirle permiso o confirmación a una persona",
          "revisar cómo va algo o alguien",
          "ponerte al día rápidamente — <em>check in with the team</em>",
        ],
      },
      "Negotiate ______": {
        v: [
          "la contraparte — <em>negotiate with the supplier</em>",
          "la cosa en sí — <em>negotiate the terms</em>",
          "el punto en disputa — <em>negotiate over scope</em>",
        ],
      },
      "Apologize ______": {
        trap: "<span class='x'>✗</span> <em>apologize you</em>. La persona siempre lleva <b>to</b>.",
      },
      "(Be) involved ______": {
        note: "<b>Involved with</b> existe, pero sugiere un vínculo cercano o personal. Para el trabajo, quédate con <b>in</b>.",
      },
      "Agree ______ (a plan or schedule)": {
        hint: "(un plan o calendario)",
        v: [
          "llegar a una decisión compartida — <em>agree on a date</em>",
          "aceptar lo que se propuso — <em>agree to the terms</em>",
          "compartir una opinión, con una persona — <em>I agree with her</em>",
        ],
      },
    },
  },
  {
    title: "Enfoque, planeación y fechas límite",
    rule: "<b>For</b> = algo que tienes por delante. <b>On</b> = donde se posa tu atención. <b>To</b> = el punto hacia el que avanzas.",
    items: {
      "Prepare ______": {
        note: "<b>Prepare something</b> no lleva preposición: <em>I prepared the summary.</em> El <b>for</b> aparece solo cuando te preparas <em>para</em> un evento.",
      },
      "Ready ______": {
        note: "Antes de un verbo, usa <b>to</b>: <em>ready to present.</em>",
      },
      "Plan ______": {
        v: [
          "una situación que esperas y para la que quieres estar listo",
          "una intención, seguida de <b>-ing</b> — <em>planning on hiring</em>",
          "un objeto directo — <em>plan the agenda</em>",
        ],
      },
      "Aim ______": {
        v: [
          "una meta que quieres alcanzar — <em>aim for 15%</em>",
          "seguido de un verbo — <em>aim to finish early</em>",
          "un público o un efecto buscado — <em>aimed at senior buyers</em>",
        ],
      },
      "Wait ______": {
        trap: "<span class='x'>✗</span> <em>wait the client</em> · <span class='x'>✗</span> <em>wait to the client</em>. Siempre <b>wait for</b>.",
      },
      "Look ______ (search for something)": { hint: "(buscar algo)" },
      "Make progress ______ (a task or goal)": {
        hint: "(en una tarea o meta)",
        v: [
          "una tarea específica — <em>progress on the audit</em>",
          "una meta o cifra — <em>progress toward the target</em>",
        ],
      },
      "Fall behind ______": {
        note: "Con <em>schedule</em>, quita la preposición: <em>The project fell behind schedule.</em>",
      },
      "Catch up ______ (a person or unfinished work)": {
        hint: "(con una persona o con trabajo pendiente)",
        v: [
          "una persona — <em>catch up with the team</em>",
          "lo atrasado — <em>catch up on email</em>",
        ],
      },
      "Look forward ______": {
        trap: "<span class='x'>✗</span> <em>look forward to hear</em>. Aquí <b>to</b> es preposición, así que el verbo que sigue va en <b>-ing</b>: <b>to hearing</b>, <b>to meeting</b>, <b>to working</b>.",
      },
      "Stick ______ (a plan or budget)": { hint: "(a un plan o presupuesto)" },
      "Push back ______": {
        v: [
          "una propuesta o solicitud — <em>push back on the deadline</em>",
          "una presión sostenida o una tendencia",
        ],
      },
      "Allow ______ (delays, contingency)": {
        hint: "(retrasos, imprevistos)",
        note: "<b>Allow</b> + persona + to: <em>That allows us to move faster.</em>",
      },
      "Run ______ (time, budget)": { hint: "(tiempo, presupuesto)" },
    },
  },
  {
    title: "Problemas, reglas y recursos",
    rule: "<b>With</b> = lo que manejas. <b>From</b> = el origen, o aquello de lo que te alejas. <b>To</b> y <b>by</b> = lo que te llega de fuera. <b>In</b> = aquello en lo que pones recursos.",
    items: {
      "Come up ______ (a solution)": {
        hint: "(una solución)",
        note: "Sin <b>with</b>, el significado cambia: <em>The issue came up in the meeting</em> = el tema salió en la reunión.",
      },
      "Recover ______ (a delay or setback)": { hint: "(de un retraso o contratiempo)" },
      "Comply ______": {
        trap: "<span class='x'>✗</span> <em>comply to</em> · <span class='x'>✗</span> <em>comply the rules</em>. Solo <b>comply with</b>.",
      },
      "Result ______": {
        v: ["lo que vino después — el <b>efecto</b>", "lo que vino antes — la <b>causa</b>"],
        note: "Un par de alto valor. Si los inviertes, la oración dice lo contrario de lo que quieres decir.",
      },
      "Lead ______ (an outcome)": {
        hint: "(a un resultado)",
        note: "<b>Lead something</b> significa encabezarlo: <em>She leads the division.</em> Ahí no hay preposición.",
      },
      "Insist ______": {
        note: "Después de <b>on</b>, usa <b>-ing</b>: <em>insisted on reviewing it first.</em> O usa <b>insist that</b> + oración.",
      },
      "Apply ______": {
        v: [
          "lo que quieres — un puesto, financiamiento, una prórroga",
          "a dónde lo envías — una empresa, una escuela, un comité",
          "<i>segundo sentido</i> — aplicar para alguien: <em>the policy applies to everyone</em>",
        ],
      },
      "Protect ______": {
        v: [
          "una amenaza existente de la que alejas a alguien",
          "un riesgo futuro posible contra el que te proteges de antemano",
        ],
      },
      "Be based ______": {
        v: [
          "ubicación — una ciudad o un país",
          "fundamento o evidencia — datos, supuestos, un estudio",
        ],
        note: "Dos significados completamente distintos. Apréndelos en pareja para no mezclarlos nunca.",
      },
      "Be affected ______": {
        note: "La voz pasiva casi siempre lleva <b>by</b> para la causa: <em>approved by</em>, <em>delayed by</em>, <em>signed by</em>.",
      },
      "Follow through ______": {
        note: "Compara <b>follow up on</b> (dar seguimiento) con <b>follow through on</b> (cumplir lo que prometiste).",
      },
    },
  },
  {
    title: "Calidad, confianza y emociones",
    rule: "Las emociones suelen llevar <b>about</b> o <b>with</b>. La capacidad lleva <b>of</b>, <b>at</b> o <b>in</b>. La comparación lleva <b>from</b> o <b>to</b>.",
    items: {
      "Disappointed ______ (results or people)": {
        hint: "(resultados o personas)",
        v: [
          "un resultado o una situación",
          "el desempeño o el carácter de una persona",
          "lo que lo causó — un poco más formal",
        ],
      },
      "Impressed ______": {
        v: ["uso cotidiano, sobre una persona o su trabajo", "un poco más formal, sobre la causa"],
      },
      "Concerned ______": {
        note: "<b>Concerned with</b> significa <em>que trata de</em>, no preocupado: <em>This section is concerned with governance.</em>",
      },
      "Confident ______ (a person or team's ability)": {
        hint: "(la capacidad de una persona o equipo)",
      },
      "Confident ______ (future results)": {
        hint: "(resultados futuros)",
        note: "<b>In</b> para la capacidad de alguien. <b>About</b> para un resultado que esperas.",
      },
      "Clear ______": {
        v: [
          "claridad general sobre un tema",
          "claridad sobre un punto específico — <em>clear on the deadline</em>",
        ],
      },
      "Capable ______": {
        note: "Después de <b>of</b>, los verbos van en <b>-ing</b>: <em>capable of handling it.</em>",
      },
      "Good ______ (a skill)": {
        hint: "(una habilidad)",
        trap: "<span class='x'>✗</span> <em>good in negotiating</em>. Para habilidades, siempre <b>good at</b> + <b>-ing</b>.",
      },
      "Committed ______": {
        trap: "<span class='x'>✗</span> <em>committed to improve</em>. Aquí <b>to</b> es preposición — usa <b>-ing</b>.",
      },
      "Open ______": {
        note: "Va seguido de <b>-ing</b>, no del verbo base: <em>open to changing it.</em>",
      },
      "Different ______": {
        v: [
          "lo más seguro por escrito y en contextos internacionales",
          "común en el inglés hablado de EE. UU. — <em>different than ours</em>",
          "común en el inglés hablado del Reino Unido y Australia",
        ],
      },
    },
  },
  {
    title: "Sin preposición: las trampas del objeto directo",
    rule: "Estos verbos toman su objeto <b>de inmediato</b>. En español aparece una preposición en ese lugar, y por eso este grupo sobrevive hasta el inglés fluido de nivel directivo. La preposición <em>es</em> el error.",
    items: {
      "Discuss ______": {
        trap: "<span class='x'>✗</span> <em>discuss about the plan</em>. Si quieres usar <b>about</b>, cambia el verbo: <b>talk about</b>.",
      },
      "Contact ______": {
        trap: "<span class='x'>✗</span> <em>contact with the firm</em>. El sustantivo sí conserva <b>with</b>: <em>get in contact <b>with</b> them</em>.",
      },
      "Attend ______": {
        trap: "<span class='x'>✗</span> <em>attend to the meeting</em>. <b>Attend to</b> existe, pero significa <em>ocuparse de algo</em>: <em>attend to a complaint.</em>",
      },
      "Join ______": {
        trap: "<span class='x'>✗</span> <em>join to the team</em>. Para una llamada, las dos funcionan: <em>join the call</em> o <em>join us on the call</em>.",
      },
      "Enter ______": {
        trap: "<span class='x'>✗</span> <em>enter to the market</em>. Excepción: <b>enter into</b> <em>an agreement</em>.",
      },
      "Answer ______": {
        trap: "<span class='x'>✗</span> <em>answer to the question</em>. <b>Answer to</b> es solo para la persona a quien le reportas.",
      },
      "Reach ______": {
        trap: "<span class='x'>✗</span> <em>reach to an agreement</em>. <b>Reach out to</b> es otra expresión, para contactar a personas.",
      },
      "Affect ______": {
        trap: "<span class='x'>✗</span> <em>affect to three teams</em>. Además: <b>affect</b> es el verbo y <b>effect</b> es el sustantivo — <em>it had an effect on three teams</em>.",
      },
      "Approve ______": {
        note: "<b>Approve of</b> existe, pero significa <em>considerar que algo está bien</em>: <em>I do not approve of that practice.</em>",
      },
      "Request ______": {
        trap: "<span class='x'>✗</span> <em>request for headcount</em>. El sustantivo sí conserva <b>for</b>: <em>a request <b>for</b> headcount</em>.",
      },
      "Emphasize ______": {
        trap: "<span class='x'>✗</span> <em>emphasize on accountability</em>. Si quieres usar <b>on</b>, di <b>place emphasis on</b>.",
      },
      "Address ______": {
        note: "<b>Address something to someone</b> es distinto — significa dirigírselo: <em>address the memo to the committee.</em>",
      },
      "Lead ______": {
        note: "Compara con <b>lead to</b> + un resultado: <em>That decision led to a rethink.</em>",
      },
      "Coordinate ______": {
        note: "<b>Coordinate with</b> es correcto cuando nombras a la otra parte: <em>We coordinated with the regional teams.</em>",
      },
      "Reduce ______": {
        note: "Agrega cifras con <b>by</b> y <b>to</b>: <em>reduced costs <b>by</b> 12%, <b>to</b> four million.</em>",
      },
      "Ensure ______": {
        note: "También <b>ensure that</b> + oración: <em>Ensure that everyone has seen it.</em>",
      },
    },
  },
  {
    title: "Dos objetos: ¿quién necesita «to»?",
    rule: "<b>En todas las fórmulas de abajo, <i>someone</i> es una persona y <i>something</i> es una cosa.</b> Cuando un verbo acepta cualquiera de los dos, la fórmula lo indica.<br><br>Hay dos patrones, y mezclarlos es el error más común a nivel directivo. <b>Patrón A</b> — someone va primero, sin preposición: <em>tell me the plan, send her the file.</em> <b>Patrón B</b> — something va primero y someone necesita <b>to</b>: <em>explain the plan to me, recommend a candidate to the board.</em><br><br>En el Patrón B, someone se <b>omite</b> con mucha frecuencia, porque los dos ya saben de quién se trata: <em>I will explain later</em> (to you), <em>I would recommend waiting</em> (to you). Eso es normal y natural. Lo que nunca puedes hacer es poner a someone antes de something sin <b>to</b>.",
    items: {
      "Remember ______": {
        a: "remember something — no a la persona a quien le recuerdas algo",
        note: "El español <em>recordar</em> cubre los dos verbos; el inglés los separa. <b>You remember</b> algo tú mismo. <b>You remind</b> a otra persona. Si el objeto es una persona, el verbo casi siempre es <b>remind</b>.",
      },
      "Remind ______": {
        v: [
          "una acción que quieres que haga — <em>remind her to call</em>",
          "un hecho o un recuerdo — <em>remind them of the policy</em>",
          "un tema, un poco más informal — <em>remind him about Friday</em>",
        ],
        note: "<b>Remind</b> siempre necesita a una persona. <span class='x'>✗</span> <em>I reminded the deadline.</em>",
      },
      "Recommend ______": {
        note: "Lo que recomiendas puede ser <b>something</b> (<em>recommend a different structure to the board</em>) o <b>someone</b> (<em>recommend her to the committee</em>) — en ambos casos, quien recibe la recomendación lleva <b>to</b>.<br><br>El segundo error es el peligroso: <em>recommended me to take the role</em> suena a que ella <b>me</b> recomendó a mí con alguien más. Cuando te refieres a un consejo, usa <b>recommend that</b> + oración: <em>I recommend that we revisit the timeline.</em><br><br>Fíjate también en qué tan seguido someone desaparece por completo — <em>I would recommend waiting</em> está completa, porque los dos sabemos que es para ti.",
      },
      "Suggest ______": {
        note: "<b>Suggest</b> y <b>recommend</b> se comportan igual: ninguno puede llevar a la persona justo después del verbo.",
      },
      "Advise ______": {
        a: "advise someone to do something — sin preposición antes de someone",
        note: "Este es el contraste útil. <span class='ok'>✓</span> <em>advised <b>me</b> to wait</em> — pero <span class='x'>✗</span> <em>recommended me to wait</em> y <span class='x'>✗</span> <em>suggested me to wait</em>. <b>Advise</b> lleva a la persona directamente; <b>recommend</b> y <b>suggest</b> nunca.",
      },
      "Explain ______": {
        note: "Someone se puede omitir cuando es obvio: <em>I will explain in the meeting.</em> Lo que no puedes hacer es poner a someone primero sin <b>to</b>.",
      },
      "Describe ______": {
        trap: "<span class='x'>✗</span> <em>describe me the approach</em>. El mismo patrón que <b>explain</b>.",
      },
      "Tell ______": {
        trap: "<span class='x'>✗</span> <em>tell to me</em>. <b>Tell</b> lleva a la persona directamente — es Patrón A.",
      },
      "Say ______": {
        note: "Aprende <b>say</b> y <b>tell</b> en pareja: <b>tell</b> + persona, <b>say</b> + <b>to</b> + persona.",
      },
      "Ask ______": {
        v: [
          "la persona — <em>ask the sponsor</em>",
          "algo que quieres — <em>ask for an extension</em>",
          "un tema — <em>ask about the budget</em>",
        ],
        trap: "<span class='x'>✗</span> <em>ask to him</em>. Después de <b>ask</b>, la persona nunca lleva <b>to</b>.",
      },
      "Show ______": {
        v: [
          "someone primero — <em>show me the file</em>",
          "something primero — <em>show the file to her</em>",
        ],
        note: "Uno de los verbos flexibles — los dos patrones son correctos. Usa el Patrón B cuando something es corto y someone es largo: <em>show it to the regional leadership team.</em>",
      },
      "Send ______": {
        v: [
          "someone primero — <em>send her the deck</em>",
          "something primero — <em>send the deck to her</em>",
        ],
      },
      "Give ______": {
        v: [
          "someone primero — <em>give him the brief</em>",
          "something primero — <em>give the brief to him</em>",
        ],
      },
      "Offer ______": {
        v: [
          "someone primero — <em>offer her the role</em>",
          "something primero — <em>offer the role to her</em>",
        ],
      },
      "Announce ______": {
        trap: "<span class='x'>✗</span> <em>announce us the decision</em>. Solo Patrón B.",
      },
      "Present ______": {
        note: "También <b>present someone with</b> something: <em>They presented her with an offer.</em>",
      },
      "Introduce ______": {
        trap: "<span class='x'>✗</span> <em>introduce me with</em> · <span class='x'>✗</span> <em>present me to</em> (para personas, usa <b>introduce</b>).",
      },
      "Inform ______": {
        v: [
          "formal, por escrito — <em>inform them of the outcome</em>",
          "un poco menos formal — <em>inform her about the delay</em>",
        ],
        trap: "<span class='x'>✗</span> <em>inform to the committee</em>. <b>Inform</b> lleva a la persona directamente, sin preposición antes.",
      },
      "Provide ______": {
        v: [
          "cuando someone va primero — <em>provide them with support</em>",
          "cuando something va primero — <em>provide support to them</em>",
        ],
        trap: "<span class='x'>✗</span> <em>provide them the data</em> se escucha, pero <b>with</b> o <b>to</b> es más seguro por escrito.",
      },
      "Thank ______": {
        trap: "<span class='x'>✗</span> <em>thank to you</em> · <span class='x'>✗</span> <em>thank for your time</em> sin nombrar a la persona. Di <em>thank <b>you</b> for your time</em>.",
      },
      "Congratulate ______": {
        trap: "<span class='x'>✗</span> <em>congratulate him for the appointment</em>. Usa <b>on</b> — y fíjate que el sustantivo también es <em>congratulations <b>on</b></em>.",
      },
      "Report ______ (a fact to a person)": {
        hint: "(un hecho a una persona)",
        note: "El mismo verbo que <b>report to</b> <em>a manager</em>, pero aquí something va primero y someone lleva <b>to</b>.",
      },
    },
  },
];

export const CHEAT_ES: [string, string][] = [
  [
    "ON",
    "aquello en lo que te apoyas o a lo que le pones atención — <em>depend on, focus on, insist on</em>",
  ],
  [
    "FOR",
    "algo que tienes por delante, o la tarea por la que respondes — <em>prepare for, responsible for, apply for</em>",
  ],
  ["WITH", "junto a alguien, o lo que manejas — <em>work with, deal with, comply with</em>"],
  [
    "TO",
    "la dirección en la que viaja un mensaje o un compromiso — <em>report to, explain to, committed to</em>",
  ],
  ["IN", "dentro de una actividad o un campo — <em>participate in, invest in, interested in</em>"],
  ["OF", "una parte que pertenece a un todo — <em>in charge of, aware of, capable of</em>"],
  ["ABOUT", "el tema de una emoción o de una conversación — <em>concerned about, talk about</em>"],
  [
    "FROM",
    "el origen, o aquello de lo que te alejas — <em>result from, recover from, benefit from</em>",
  ],
  ["BY", "la causa, en oraciones pasivas — <em>affected by, approved by</em>"],
  ["NONE", "el verbo toma su objeto directamente — <em>discuss, contact, attend</em>"],
];
