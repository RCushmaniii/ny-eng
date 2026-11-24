import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "tone-and-register",
  slugEs: "tono-y-registro",
  title: [
    "Tone and Register: Direct, Warm, Never Stiff",
    "Tono y Registro: Directo, Cálido, Nunca Rígido",
  ],
  summary: [
    "How to write in the American business register: plain, friendly and brief, including the hard messages: a request, a no, bad news, a follow-up and a disagreement.",
    "Cómo escribir en el registro de negocios estadounidense: sencillo, amable y breve, incluso en los mensajes difíciles: una petición, un no, una mala noticia, un seguimiento y un desacuerdo.",
  ],
  description: [
    "Learn the American business register: make requests, say no, deliver bad news and follow up in writing that is direct and warm, never stiff.",
    "Aprende el registro de negocios estadounidense: pide, di que no, da malas noticias y da seguimiento por escrito con un tono directo y cálido, nunca rígido.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "You write a careful, respectful email, and the American reader finds it stiff, or cannot find the request inside the courtesy. So you correct course, send three short lines, and a colleague asks whether you are upset. Both results come from the same place: register, the level of formality and warmth a reader expects.",
        "Escribes un correo cuidadoso y respetuoso, y a tu lector estadounidense le parece rígido, o no encuentra la petición entre tanta cortesía. Entonces corriges, mandas tres líneas cortas, y alguien del equipo te pregunta si estás molesto. Los dos resultados vienen del mismo lugar: el registro, es decir, el nivel de formalidad y calidez que espera quien te lee.",
      ],
    },
    {
      t: "p",
      html: [
        "In Mexican business writing, respect is shown through formality and a certain length: <em>Estimado licenciado</em>, <em>por medio del presente</em>, <em>quedo atenta a sus comentarios</em>. In American business writing, respect is shown by saving the reader's time and speaking plainly, and warmth comes from sounding like a person: a first name, a contraction, a specific thank-you. Neither culture is more polite. They put politeness in different places, and a courtesy translated word for word lands in the wrong place.",
        "En la escritura de negocios en México, el respeto se muestra con formalidad y cierta extensión: <em>Estimado licenciado</em>, <em>por medio del presente</em>, <em>quedo atenta a sus comentarios</em>. En la estadounidense, el respeto se muestra ahorrándole tiempo al lector y hablando claro, y la calidez viene de sonar como persona: un nombre de pila, una contracción, un agradecimiento específico. Ninguna de las dos culturas es más cortés. Ponen la cortesía en lugares distintos, y una cortesía traducida palabra por palabra cae en el lugar equivocado.",
      ],
    },
    {
      t: "idea",
      title: [
        "Write it the way you would say it across the table",
        "Escríbelo como lo dirías de frente, en la mesa",
      ],
      html: [
        "Picture a colleague you respect sitting across from you. Read your sentence aloud. If you would never say it to that person's face (<em>I remain attentive to your kind comments</em>), do not write it. If you would say it but it would sound cold without your smile (<em>I need the file today</em>), add what your voice would have added: a reason, a <em>could you</em>, a thank-you. Plain, friendly, brief.",
        "Imagina a una persona del trabajo a quien respetas, sentada frente a ti. Lee tu oración en voz alta. Si nunca se la dirías de frente (<em>I remain attentive to your kind comments</em>), no la escribas. Si sí se la dirías, pero sin tu sonrisa sonaría fría (<em>I need the file today</em>), agrega lo que tu voz habría puesto: una razón, un <em>could you</em>, un agradecimiento. Sencillo, amable, breve.",
      ],
    },
    {
      t: "compare",
      title: [
        "From translated courtesy to plain warmth",
        "De la cortesía traducida a la calidez sencilla",
      ],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "Dear Mr. Thompson: I hope this email finds you well.",
          strong: "Hi Mark, thanks for the quick turnaround on the contract.",
          why: [
            "Once someone signs an email with a first name, use it. <em>I hope this email finds you well</em> is correct, but it is a formula; one specific line about the real exchange is warmer.",
            "Cuando alguien firma un correo con su nombre de pila, úsalo. <em>I hope this email finds you well</em> es correcto, pero es una fórmula; una línea específica sobre el intercambio real es más cálida.",
          ],
        },
        {
          weak: "I am writing to kindly request your valuable support with the Q2 figures.",
          strong: "Could you send me the Q2 figures by Thursday?",
          why: [
            "The first version never says what the support is. A clear question with a date is easier to say yes to, and that is the polite thing to offer a busy person.",
            "La primera versión nunca dice en qué consiste el apoyo. A una pregunta clara y con fecha es más fácil decirle que sí, y eso es lo cortés con alguien que tiene poco tiempo.",
          ],
        },
        {
          weak: "Please find attached the document for your kind review and consideration.",
          strong: "I've attached the proposal. Could you look at section 3 before our call?",
          why: [
            "Say what the attachment is and what you want done with it. <em>Kind review and consideration</em> gives the reader no task.",
            "Di qué es el archivo adjunto y qué quieres que hagan con él. <em>Kind review and consideration</em> no le da ninguna tarea al lector.",
          ],
        },
        {
          weak: "It would be greatly appreciated if the report could be sent at your earliest convenience.",
          strong:
            "Could you send the report by Friday? I'd like to read it before Monday's meeting.",
          why: [
            "The passive hides who is asking whom, and <em>at your earliest convenience</em> gives no date, so the reader cannot prioritize. A date with a reason is more considerate than a vague courtesy.",
            "La voz pasiva esconde quién le pide a quién, y <em>at your earliest convenience</em> no da fecha, así que el lector no puede priorizar. Una fecha con su razón es más considerada que una cortesía vaga.",
          ],
        },
        {
          weak: "I remain attentive to your comments.",
          strong: "Let me know what you think.",
          why: [
            "A direct translation of <em>quedo atento a sus comentarios</em>. English has no such closing; the natural equivalent is short and spoken.",
            "Traducción directa de <em>quedo atento a sus comentarios</em>. En inglés ese cierre no existe; el equivalente natural es corto y suena hablado.",
          ],
        },
        {
          weak: "Please do not hesitate to contact me should you require any further information.",
          strong: "Call me if anything is unclear.",
          why: [
            "The long version is grammatical and reads like a form letter. The short one sounds like an offer from a person.",
            "La versión larga es gramaticalmente correcta y se lee como carta de formato. La corta suena a ofrecimiento de una persona.",
          ],
        },
        {
          weak: "Thanking you in advance for your valuable support.",
          strong: "Thanks for your help with this.",
          why: [
            "<em>Agradeciendo de antemano</em> does not travel well: thanking in advance can sound as if you are assuming a yes. Thank people simply, and thank them again, specifically, once they have helped.",
            "<em>Agradeciendo de antemano</em> no viaja bien: agradecer por adelantado puede sonar a que das el sí por hecho. Agradece de forma sencilla, y vuelve a agradecer, con algo específico, cuando ya te ayudaron.",
          ],
        },
      ],
    },
    {
      t: "framework",
      title: ["Size the request to the ask", "Ajusta la petición al tamaño de lo que pides"],
      lead: [
        "Three levels cover almost every request you will write. Whatever the level: one request, one date, one reason.",
        "Tres niveles cubren casi cualquier petición que vayas a escribir. En cualquiera de ellos: una petición, una fecha, una razón.",
      ],
      steps: [
        {
          label: ["Routine: please + the verb", "Rutina: please + el verbo"],
          html: [
            "For normal work between colleagues, <em>please</em> plus an imperative is polite and efficient. Without <em>please</em>, the same sentence is an order. Avoid <em>kindly</em>: in American English it sounds old-fashioned at best, and at worst like a reprimand.",
            "Para el trabajo normal entre colegas, <em>please</em> más un imperativo es cortés y eficiente. Sin <em>please</em>, la misma oración es una orden. Evita <em>kindly</em>: en inglés estadounidense suena anticuado en el mejor de los casos y, en el peor, a regaño.",
          ],
          say: "Please send me the final numbers by noon.",
        },
        {
          label: [
            "A favor, or a senior reader: could you",
            "Un favor, o alguien de mayor jerarquía: could you",
          ],
          html: [
            "When the task is outside the person's normal job, or the reader outranks you, ask a question and give the reason. The question form leaves room to say no, and the reason shows you are not asking casually.",
            "Cuando la tarea no es parte del trabajo normal de la persona, o quien te lee tiene mayor jerarquía, haz una pregunta y da la razón. La pregunta deja espacio para decir que no, y la razón muestra que no pides a la ligera.",
          ],
          say: "Could you review the contract by Wednesday? Legal needs our comments on Thursday.",
        },
        {
          label: ["A big ask: name the cost", "Una petición grande: reconoce el costo"],
          html: [
            "For something that costs the reader real time or comfort, say that you know it does, and make refusing easy. One sentence of acknowledgment is enough; three sound anxious.",
            "Para algo que le cuesta tiempo o comodidad de verdad a quien te lee, di que lo sabes y facilita la negativa. Una oración de reconocimiento basta; tres suenan a ansiedad.",
          ],
          say: "Would you be able to join the client call on Friday at 7 a.m.? I know it's early, and I understand if you can't.",
        },
      ],
    },
    {
      t: "framework",
      title: [
        "Saying no, or giving bad news, in four lines",
        "Decir que no, o dar una mala noticia, en cuatro líneas",
      ],
      lead: [
        "The order matters more than the wording. The reader should never have to search for the answer.",
        "El orden importa más que las palabras. Quien te lee nunca debería tener que buscar la respuesta.",
      ],
      steps: [
        {
          label: ["The answer", "La respuesta"],
          html: [
            "State the no or the news in the first sentence, in plain words. A clear no is kinder than a soft maybe that the reader discovers was a no three weeks later.",
            "Di el no o la noticia en la primera oración, con palabras sencillas. Un no claro es más amable que un quizá suave que tu lector descubre tres semanas después que era un no.",
          ],
          say: "We can't deliver the full report by Friday.",
        },
        {
          label: ["One reason", "Una razón"],
          html: [
            "One sentence, the real reason. Several reasons read as excuses.",
            "Una oración, la razón real. Varias razones se leen como excusas.",
          ],
          say: "The regional data won't reach us until Thursday night.",
        },
        {
          label: ["What you can do", "Lo que sí puedes hacer"],
          html: [
            "This line carries the warmth. It shows you are still working on the reader's problem.",
            "Esta línea es la que lleva la calidez. Muestra que sigues trabajando en el problema de tu lector.",
          ],
          say: "I can send you the summary and the three key charts on Friday.",
        },
        {
          label: ["The next step", "El siguiente paso"],
          html: [
            "A date, an owner, or a question that lets the reader choose.",
            "Una fecha, una persona responsable o una pregunta que deje elegir a tu lector.",
          ],
          say: "The complete report will follow on Tuesday. Does that work for your board meeting?",
        },
      ],
    },
    {
      t: "compare",
      title: [
        "Five hard messages, too soft or too sharp",
        "Cinco mensajes difíciles, demasiado suaves o demasiado duros",
      ],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "Unfortunately, at this moment it would be a little complicated for us to commit to that date.",
          strong: "We can't commit to June 1. We can commit to June 15.",
          why: [
            "In Mexico, <em>está complicado</em> is an understood no. An American reads <em>complicated</em> as difficult but possible, and plans around June 1. Say <em>can't</em>, then say what you can do.",
            "En México, <em>está complicado</em> es un no que se entiende. Un estadounidense lee <em>complicated</em> como difícil pero posible, y planea con el 1 de junio. Di <em>can't</em> y después di lo que sí puedes.",
          ],
        },
        {
          weak: "We regret to inform you that some inconveniences have arisen with the delivery.",
          strong: "The delivery will be five days late. It will arrive on March 12.",
          why: [
            "<em>Some inconveniences</em> makes the reader imagine something worse than the truth. The fact and the new date are what the reader needs to replan.",
            "<em>Some inconveniences</em> hace que el lector imagine algo peor que la verdad. El hecho y la nueva fecha son lo que necesita para replanear.",
          ],
        },
        {
          weak: "I am still waiting for your answer to my email.",
          strong:
            "Following up on the pricing question below. Could you let me know by Wednesday? We send the quote on Thursday.",
          why: [
            "<em>Still waiting</em> reads as an accusation. A follow-up works when it gives a new piece of information: the deadline and why it exists.",
            "<em>Still waiting</em> se lee como reclamo. Un seguimiento funciona cuando trae un dato nuevo: la fecha límite y por qué existe.",
          ],
        },
        {
          weak: "With all due respect, I think you are wrong about the timeline.",
          strong:
            "I see the timeline differently. Testing alone took three weeks last time, so I don't think two is realistic.",
          why: [
            "<em>With all due respect</em> announces a fight, and <em>you are wrong</em> aims at the person. Disagree with the estimate, and bring a fact.",
            "<em>With all due respect</em> anuncia pleito, y <em>you are wrong</em> apunta a la persona. Discrepa de la estimación y trae un dato.",
          ],
        },
        {
          weak: "I need the file today.",
          strong: "Could you get me the file by 3 today? I'm presenting the numbers at 4.",
          why: [
            "Said aloud with a smile, the first version is fine. On a screen it is an order. The reason does the work your voice cannot.",
            "Dicha en voz alta y con una sonrisa, la primera versión está bien. En pantalla es una orden. La razón hace el trabajo que tu voz no puede hacer.",
          ],
        },
        {
          weak: "As I said in my previous email, the deadline is Friday.",
          strong: "The deadline is Friday at 5 p.m. Central.",
          why: [
            "<em>As I said</em> tells the reader they did not read your email. Repeating the fact costs you nothing and keeps the relationship intact.",
            "<em>As I said</em> le dice a tu lector que no leyó tu correo. Repetir el dato no te cuesta nada y deja la relación intacta.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["Bad news to a client", "Una mala noticia para un cliente"],
      context: [
        "Luis manages a software project for Dana's company. Final testing found a problem two weeks before launch.",
        "Luis lleva un proyecto de software para la empresa de Dana. Las pruebas finales encontraron un problema dos semanas antes del lanzamiento.",
      ],
      lines: [
        {
          en: "Hi Dana,",
          note: [
            "First name and <em>Hi</em>: the standard greeting once you are working together.",
            "Nombre de pila y <em>Hi</em>: el saludo estándar cuando ya trabajan juntos.",
          ],
        },
        {
          en: "The portal won't be ready on May 5. The new date is May 19.",
          note: [
            "The news first, with the new date. No <em>unfortunately</em>, no warm-up.",
            "Primero la noticia, con la nueva fecha. Sin <em>unfortunately</em>, sin preámbulo.",
          ],
        },
        {
          en: "The delay is ours: we found a security issue in the login flow during final testing, and we're not willing to launch with it.",
          note: [
            "One reason, owned in the first person. <em>We're not willing</em> turns the delay into a decision made for the client's benefit.",
            "Una razón, asumida en primera persona. <em>We're not willing</em> convierte el retraso en una decisión tomada en beneficio del cliente.",
          ],
        },
        {
          en: "Everything else is finished and has passed testing.",
          note: [
            "Limits the problem. The reader now knows its exact size.",
            "Delimita el problema. El lector ya sabe de qué tamaño es exactamente.",
          ],
        },
        {
          en: "To keep your team on schedule, we can give you access to the test version on May 5, so training can start as planned.",
          note: [
            "What he can do. This is where the warmth is.",
            "Lo que sí puede hacer. Aquí es donde está la calidez.",
          ],
        },
        {
          en: "I'm sorry for the change. I know you had already announced the date to your team.",
          note: [
            "One apology, after the facts, and specific about the cost to her.",
            "Una sola disculpa, después de los hechos, y específica sobre lo que le cuesta a ella.",
          ],
        },
        {
          en: "Can we talk for 15 minutes tomorrow? I'm free at 10 or 2 Central.",
          note: [
            "A next step that is easy to accept: short, with two options and a time zone.",
            "Un siguiente paso fácil de aceptar: corto, con dos opciones y zona horaria.",
          ],
        },
        {
          en: "Luis",
        },
      ],
    },
    {
      t: "phrases",
      title: [
        "Lines for follow-ups, disagreement and thanks",
        "Frases para dar seguimiento, discrepar y agradecer",
      ],
      items: [
        {
          en: "Following up on my note from Tuesday.",
          use: [
            "A neutral first follow-up. Add the date you need an answer by.",
            "Un primer seguimiento neutral. Agrega la fecha en la que necesitas la respuesta.",
          ],
        },
        {
          en: "Do you have everything you need from me?",
          use: [
            "A follow-up that offers help instead of asking why it is late.",
            "Un seguimiento que ofrece ayuda en vez de preguntar por qué va tarde.",
          ],
        },
        {
          en: "I need this by Thursday to make the board deadline.",
          use: [
            "Urgency with its reason. Stronger than any <em>urgent</em>.",
            "Urgencia con su razón. Más fuerte que cualquier <em>urgent</em>.",
          ],
        },
        {
          en: "No rush on this. Next week is fine.",
          use: [
            "Say it when it is true. It makes your real deadlines believable.",
            "Dilo cuando sea cierto. Hace creíbles tus fechas límite de verdad.",
          ],
        },
        {
          en: "I see it differently.",
          use: [
            "Opens a disagreement without attacking. Follow it with a fact.",
            "Abre un desacuerdo sin atacar. Síguelo con un dato.",
          ],
        },
        {
          en: "I'd push back on one point.",
          use: [
            "Limits the disagreement to one thing and signals you accept the rest.",
            "Limita el desacuerdo a una sola cosa y avisa que aceptas lo demás.",
          ],
        },
        {
          en: "That won't work for us, but here's what will.",
          use: [
            "A no with an alternative in the same breath.",
            "Un no con su alternativa en la misma frase.",
          ],
        },
        {
          en: "I can't take this on this month.",
          use: [
            "A clear no to extra work between peers. Add when you could, if you could.",
            "Un no claro a trabajo extra entre colegas. Agrega cuándo sí podrías, si es el caso.",
          ],
        },
        {
          en: "You're right. I missed that.",
          use: [
            "Owning a mistake in five words. Short reads as confident.",
            "Asumir un error en cinco palabras. Lo breve se lee como seguridad.",
          ],
        },
        {
          en: "Thanks for turning this around so fast.",
          use: [
            "Specific thanks: it names what the person did.",
            "Un agradecimiento específico: nombra lo que hizo la persona.",
          ],
        },
        {
          en: "Happy to walk you through it on a call if that's easier.",
          use: [
            "An offer that closes an email warmly without a formula.",
            "Un ofrecimiento que cierra un correo con calidez y sin fórmulas.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: ["How to sound senior", "Cómo sonar con autoridad"],
    },
    {
      t: "list",
      items: [
        [
          "<b>Write shorter.</b> Length reads as nervousness. The most senior person on a thread often writes the shortest message.",
          "<b>Escribe más corto.</b> La extensión se lee como nerviosismo. Muchas veces, la persona de mayor jerarquía en un hilo es quien escribe el mensaje más corto.",
        ],
        [
          "<b>Own the verb.</b> <em>I recommend</em>, <em>I decided</em>, <em>I don't know yet; I'll know by Friday</em>. Avoid <em>it was decided</em> and <em>it is considered</em> when the person deciding is you.",
          "<b>Hazte cargo del verbo.</b> <em>I recommend</em>, <em>I decided</em>, <em>I don't know yet; I'll know by Friday</em>. Evita <em>it was decided</em> e <em>it is considered</em> cuando quien decide eres tú.",
        ],
        [
          "<b>One softener per sentence.</b> <span class='x'>✗</span> <em>I just wanted to ask if maybe you could possibly</em> <span class='ok'>✓</span> <em>Could you</em>.",
          "<b>Un suavizador por oración.</b> <span class='x'>✗</span> <em>I just wanted to ask if maybe you could possibly</em> <span class='ok'>✓</span> <em>Could you</em>.",
        ],
        [
          "<b>Apologize once, for something you caused.</b> Never as a greeting: <em>Sorry to bother you</em> tells the reader your message is a bother before they have read it.",
          "<b>Discúlpate una vez, por algo que tú causaste.</b> Nunca como saludo: <em>Sorry to bother you</em> le dice a tu lector que tu mensaje es una molestia antes de que lo lea.",
        ],
        [
          "<b>Use contractions.</b> <em>I'm</em>, <em>we'll</em>, <em>don't</em> and <em>can't</em> are normal in email at every level. Keep the full forms for contracts and formal reports, and for the rare sentence where you want the stress: <em>We do not share customer data.</em>",
          "<b>Usa contracciones.</b> <em>I'm</em>, <em>we'll</em>, <em>don't</em> y <em>can't</em> son normales en un correo, a cualquier nivel. Deja las formas completas para contratos y reportes formales, y para la rara oración donde quieres el énfasis: <em>We do not share customer data.</em>",
        ],
      ],
    },
    {
      t: "trap",
      title: ["Titles and formulas that do not translate", "Títulos y fórmulas que no se traducen"],
      html: [
        "Professional titles are a courtesy in Mexico and do not exist in American business. <span class='x'>✗</span> <em>Dear Eng. Ramírez</em> and <span class='x'>✗</span> <em>Dear Lic. Torres</em> will confuse the reader. Write <span class='ok'>✓</span> <em>Hi Carlos</em>, or <span class='ok'>✓</span> <em>Dear Mr. Ramírez</em> for a formal first contact; <em>Dr.</em> is used only for physicians and people with a doctorate. The same goes for the closing ritual. <em>Sin más por el momento</em>, <em>quedo a sus órdenes</em> and <em>reciba un cordial saludo</em> have no English form. <span class='x'>✗</span> <em>I remain at your orders</em> sounds odd, even servile, to an American. End with the next step and then <span class='ok'>✓</span> <em>Thanks</em>, <span class='ok'>✓</span> <em>Best</em> or <span class='ok'>✓</span> <em>Best regards</em>, and your first name.",
        "Los títulos profesionales son una cortesía en México y no existen en los negocios en Estados Unidos. <span class='x'>✗</span> <em>Dear Eng. Ramírez</em> y <span class='x'>✗</span> <em>Dear Lic. Torres</em> van a confundir a tu lector. Escribe <span class='ok'>✓</span> <em>Hi Carlos</em>, o <span class='ok'>✓</span> <em>Dear Mr. Ramírez</em> en un primer contacto formal; <em>Dr.</em> se usa solo para médicos y para quien tiene un doctorado. Lo mismo pasa con el ritual de cierre. <em>Sin más por el momento</em>, <em>quedo a sus órdenes</em> y <em>reciba un cordial saludo</em> no tienen forma en inglés. <span class='x'>✗</span> <em>I remain at your orders</em> le suena raro, incluso servil, a un estadounidense. Termina con el siguiente paso y después <span class='ok'>✓</span> <em>Thanks</em>, <span class='ok'>✓</span> <em>Best</em> o <span class='ok'>✓</span> <em>Best regards</em>, y tu nombre de pila.",
      ],
    },
    {
      t: "choice",
      title: ["Choose the message you would send", "Elige el mensaje que mandarías"],
      items: [
        {
          prompt: [
            "You need headcount figures from a peer in another department. You have never worked together.",
            "Necesitas cifras de plantilla de un colega de otra área. Nunca han trabajado juntos.",
          ],
          options: [
            {
              en: "Kindly send me the Q2 headcount figures by Thursday.",
              ok: false,
              why: [
                "<em>Kindly</em> plus an imperative sounds like an instruction from above, and there is no reason given.",
                "<em>Kindly</em> más un imperativo suena a instrucción desde arriba, y no da ninguna razón.",
              ],
            },
            {
              en: "Could you send me the Q2 headcount figures by Thursday? I need them for Friday's budget review.",
              ok: true,
              why: [
                "A question, a date and a reason. Easy to understand and easy to say yes to.",
                "Una pregunta, una fecha y una razón. Fácil de entender y fácil de aceptar.",
              ],
            },
            {
              en: "I was wondering if it might be possible for you to send me the Q2 headcount figures when you have a moment.",
              ok: false,
              why: [
                "Three softeners and no date. Polite, and easy to postpone forever.",
                "Tres suavizadores y ninguna fecha. Cortés, y fácil de posponer para siempre.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A client asks for a 15% discount. You cannot give it, but you have some room.",
            "Un cliente pide un descuento del 15%. No puedes darlo, pero tienes algo de margen.",
          ],
          options: [
            {
              en: "Unfortunately, a discount of that size would be complicated for us at this time.",
              ok: false,
              why: [
                "The client hears <em>difficult, so keep pushing</em>. You will have this conversation again next week.",
                "El cliente escucha <em>difícil, así que sigue insistiendo</em>. Vas a tener esta misma conversación la próxima semana.",
              ],
            },
            {
              en: "We can't do 15%. We can do 8% if you sign a two-year agreement.",
              ok: true,
              why: [
                "A clear no and a real offer in two sentences. The client knows exactly where things stand.",
                "Un no claro y una oferta real en dos oraciones. El cliente sabe exactamente en dónde están las cosas.",
              ],
            },
            {
              en: "No, 15% is not possible. Our prices are already very competitive.",
              ok: false,
              why: [
                "Clear, but it closes the door and adds a small lecture. Nothing for the client to say yes to.",
                "Claro, pero cierra la puerta y agrega un pequeño sermón. No hay nada a lo que el cliente pueda decir que sí.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Your VP has not answered a request for approval in a week. You need it by Friday.",
            "Tu VP lleva una semana sin contestar una solicitud de aprobación. La necesitas para el viernes.",
          ],
          options: [
            {
              en: "I am still waiting for your approval on the vendor contract.",
              ok: false,
              why: [
                "It reads as a complaint, and it gives no deadline.",
                "Se lee como queja, y no da fecha límite.",
              ],
            },
            {
              en: "Sorry to bother you again. I know how busy you are. Whenever you have time, could you take a look at the vendor contract?",
              ok: false,
              why: [
                "Two apologies and <em>whenever you have time</em> tell your VP this can wait. It cannot.",
                "Dos disculpas y un <em>whenever you have time</em> le dicen a tu VP que esto puede esperar. No puede.",
              ],
            },
            {
              en: "Following up on the vendor contract. I need your approval by Friday to hold the current price. Is there anything I can clarify?",
              ok: true,
              why: [
                "New information (the deadline and what depends on it) plus an offer to help. Nothing to resent.",
                "Información nueva (la fecha y lo que depende de ella) más un ofrecimiento de ayuda. Nada que pueda molestar.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A colleague proposes a two-week timeline on a thread with five people copied. You think it is too short.",
            "Un colega propone un plazo de dos semanas en un hilo con cinco personas copiadas. A ti te parece muy corto.",
          ],
          options: [
            {
              en: "I think two weeks is tight. The last integration took five, and this one touches more systems. Could we plan for four?",
              ok: true,
              why: [
                "It disagrees with the number, gives the evidence and proposes an alternative. Nobody loses face.",
                "Discrepa de la cifra, da la evidencia y propone una alternativa. Nadie queda mal.",
              ],
            },
            {
              en: "With all due respect, two weeks is not realistic.",
              ok: false,
              why: [
                "The opening phrase signals an attack, and there is no evidence and no proposal behind it.",
                "La frase inicial anuncia un ataque, y detrás no hay evidencia ni propuesta.",
              ],
            },
            {
              en: "Maybe we could consider whether the timeline might need some review at some point.",
              ok: false,
              why: [
                "So soft that nobody on the thread will know you disagree.",
                "Tan suave que nadie en el hilo se va a enterar de que no estás de acuerdo.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Yesterday you sent leadership a report with a wrong revenue figure. You need to correct it.",
            "Ayer mandaste a la dirección un reporte con una cifra de ingresos equivocada. Tienes que corregirlo.",
          ],
          options: [
            {
              en: "Please accept my sincerest apologies for the terrible mistake in yesterday's report. I am very embarrassed, and I assure you it will never happen again.",
              ok: false,
              why: [
                "The email is about your feelings, the correction is missing, and the size of the apology makes the error look bigger than it is.",
                "El correo trata de cómo te sientes, falta la corrección, y el tamaño de la disculpa hace que el error parezca más grande de lo que es.",
              ],
            },
            {
              en: "Correction to yesterday's report: Q2 revenue was $4.2M, not $4.7M. My error. A corrected version is attached.",
              ok: true,
              why: [
                "The right number first, ownership in two words, the fix attached. This is how a senior person corrects a mistake.",
                "Primero la cifra correcta, la responsabilidad en dos palabras, la corrección adjunta. Así corrige un error alguien con autoridad.",
              ],
            },
            {
              en: "Please note that a revised version of the report is attached.",
              ok: false,
              why: [
                "It hides what changed. Readers have to hunt for the difference, and it can look evasive.",
                "Esconde qué cambió. Los lectores tienen que buscar la diferencia, y puede parecer evasivo.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Rewrite for tone", "Reescribe cuidando el tono"],
      items: [
        {
          task: [
            "Turn this into a plain request with a date and a reason. Invent the date and the reason.",
            "Convierte esto en una petición sencilla con fecha y razón. Inventa la fecha y la razón.",
          ],
          before:
            "I am writing to kindly request your valuable support in order to obtain the signed copy of the agreement at your earliest convenience.",
          after:
            "Could you send me the signed copy of the agreement by Wednesday? We need it to open the account.",
          why: [
            "Twenty-four words became a question anyone can answer. <em>Kindly</em>, <em>valuable support</em> and <em>at your earliest convenience</em> added length and no courtesy an American would notice.",
            "Veinticuatro palabras se volvieron una pregunta que cualquiera puede contestar. <em>Kindly</em>, <em>valuable support</em> y <em>at your earliest convenience</em> agregaban extensión, y ninguna cortesía que un estadounidense fuera a notar.",
          ],
        },
        {
          task: [
            "Say no clearly, give one reason, and offer what you can do.",
            "Di que no con claridad, da una razón y ofrece lo que sí puedes hacer.",
          ],
          before:
            "Regarding your request for two additional engineers, unfortunately at this moment it is a little complicated because of the current situation of the team.",
          after:
            "I can't give you two engineers this quarter; the whole team is committed to the March release. I can give you one engineer for two weeks starting April 6.",
          why: [
            "<em>A little complicated</em> and <em>the current situation</em> leave the reader guessing. The rewrite gives the answer, the real reason and an offer with a date.",
            "<em>A little complicated</em> y <em>the current situation</em> dejan al lector adivinando. La nueva versión da la respuesta, la razón real y una oferta con fecha.",
          ],
        },
        {
          task: [
            "Follow up without apologizing and without accusing.",
            "Da seguimiento sin disculparte y sin reclamar.",
          ],
          before:
            "Sorry to bother you again, but I am still waiting for the feedback on the proposal that I sent you two weeks ago and I have not received any answer.",
          after:
            "Following up on the proposal I sent on May 4. Could you send me your feedback by Friday? I'd like to get the final version to the client next week.",
          why: [
            "The original apologizes and accuses in the same sentence. The rewrite does neither: it names the document, sets a date and explains the date.",
            "El original se disculpa y reclama en la misma oración. La nueva versión no hace ninguna de las dos cosas: nombra el documento, pone una fecha y explica la fecha.",
          ],
        },
        {
          task: [
            "Give this bad news plainly: what happened, the new date, one reason. Invent the details.",
            "Da esta mala noticia sin rodeos: qué pasó, la nueva fecha, una razón. Inventa los detalles.",
          ],
          before:
            "We regret to inform you that due to some unforeseen circumstances, certain delays may be experienced in the delivery of your order.",
          after:
            "Your order will arrive on June 20, eight days later than planned. Our supplier shipped the wrong part, and the replacement arrives on Monday. I'm sorry for the delay.",
          why: [
            "<em>Unforeseen circumstances</em> and <em>may be experienced</em> hide who, what and when. The customer needs a date to plan around, and a real reason is what makes the apology believable.",
            "<em>Unforeseen circumstances</em> y <em>may be experienced</em> esconden quién, qué y cuándo. El cliente necesita una fecha para planear, y una razón real es lo que hace creíble la disculpa.",
          ],
        },
        {
          task: [
            "This is clear but cold. Keep it short and make it something you would say to a colleague's face.",
            "Esto es claro pero frío. Déjalo corto y conviértelo en algo que le dirías de frente a un colega.",
          ],
          before: "You sent the wrong file. Send the correct one today.",
          after:
            "This looks like the March version. Could you send me the April file today? I need it for tomorrow's review.",
          why: [
            "The rewrite describes what you see instead of what the person did, asks instead of ordering, and gives the reason. It is one sentence longer and it protects the relationship.",
            "La nueva versión describe lo que ves en vez de lo que hizo la persona, pregunta en vez de ordenar y da la razón. Tiene una oración más y cuida la relación.",
          ],
        },
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "American business register is plain, friendly and brief. Respect is shown by clarity and by saving the reader's time.",
          "El registro de negocios estadounidense es sencillo, amable y breve. El respeto se muestra con claridad y ahorrándole tiempo a quien te lee.",
        ],
        [
          "If you would not say it across a table, do not write it. If it would sound cold without your voice, add a reason.",
          "Si no lo dirías de frente, no lo escribas. Si sin tu voz sonaría frío, agrega una razón.",
        ],
        [
          "Every request: one ask, one date, one reason. <em>Please</em> for routine work, <em>Could you</em> for favors and senior readers.",
          "En cada petición: una cosa, una fecha, una razón. <em>Please</em> para el trabajo de rutina, <em>Could you</em> para favores y para quien tiene mayor jerarquía.",
        ],
        [
          "A no or bad news goes in four lines: the answer, one reason, what you can do, the next step. Never <em>complicated</em> when you mean <em>can't</em>.",
          "Un no o una mala noticia va en cuatro líneas: la respuesta, una razón, lo que sí puedes hacer, el siguiente paso. Nunca <em>complicated</em> cuando quieres decir <em>can't</em>.",
        ],
        [
          "Short, first-person, one apology, contractions: that is how seniority sounds in writing.",
          "Corto, en primera persona, una sola disculpa, con contracciones: así suena la autoridad por escrito.",
        ],
      ],
    },
  ],
};
