import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "emails-and-reports",
  slugEs: "correos-y-reportes",
  title: ["Emails, Updates and Reports", "Correos, Actualizaciones y Reportes"],
  summary: [
    "Everything in the course applied to the three documents you write most: the email, the status update and the executive summary.",
    "Todo el curso aplicado a los tres documentos que más escribes: el correo, la actualización de estatus y el resumen ejecutivo.",
  ],
  description: [
    "Apply the course to real documents: subject lines that state the ask, the three-part email, the status update and the executive summary.",
    "Aplica el curso a documentos reales: asuntos que dicen lo que pides, el correo en tres partes, la actualización de estatus y el resumen ejecutivo.",
  ],
  minutes: 20,
  blocks: [
    {
      t: "p",
      html: [
        "The lessons so far were technique. This one puts the technique to work in the three documents you write most: the email, the status update and the summary. Start by picturing the real reader. They are on a phone, between two meetings, with forty unread messages. They see your subject line and about two lines of your text, and they decide right there whether to act now, later or never.",
        "Hasta aquí, las lecciones fueron técnica. Esta pone la técnica a trabajar en los tres documentos que más escribes: el correo, la actualización de estatus y el resumen. Empieza por imaginar a tu lector real. Está en el celular, entre dos juntas, con cuarenta mensajes sin leer. Ve tu asunto y unas dos líneas de tu texto, y ahí mismo decide si actúa ahora, después o nunca.",
      ],
    },
    {
      t: "idea",
      title: [
        "Write for the reader who stops after two lines",
        "Escribe para quien deja de leer después de dos líneas",
      ],
      html: [
        "If a reader sees only your subject line and your first two lines, they should already know what you need from them and by when. Everything below that point is reference: there for the person who wants the detail, and safe to skip for the person who does not. Each format in this lesson is that one idea in a different size.",
        "Si alguien ve solo tu asunto y tus dos primeras líneas, ya debe saber qué necesitas y para cuándo. Todo lo que está debajo de ese punto es material de consulta: ahí está para quien quiere el detalle, y quien no lo quiere se lo puede saltar sin riesgo. Cada formato de esta lección es esa misma idea en otro tamaño.",
      ],
    },
    {
      t: "compare",
      title: ["Subject lines that state the ask", "Asuntos que dicen lo que pides"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "Question",
          strong: "Approval needed by Friday: Q3 travel budget",
          why: [
            "The action and the date come first, because a phone shows only the first few words. The topic follows the colon.",
            "La acción y la fecha van primero, porque un celular solo muestra las primeras palabras. El tema va después de los dos puntos.",
          ],
        },
        {
          weak: "Update",
          strong: "Portal launch moved to May 19",
          why: [
            "When the message is news, the subject line can be the news. Many readers will not need to open the email at all, and that is a success.",
            "Cuando el mensaje es una noticia, el asunto puede ser la noticia. Muchos lectores ni siquiera van a tener que abrir el correo, y eso es un éxito.",
          ],
        },
        {
          weak: "Meeting",
          strong: "Can we move Thursday's review to 3 p.m.?",
          why: [
            "A question in the subject line gets answered from the inbox, often in one word.",
            "Una pregunta en el asunto se contesta desde la bandeja de entrada, muchas veces con una palabra.",
          ],
        },
        {
          weak: "URGENT!!!",
          strong: "Decision needed today: ship the partial order or wait?",
          why: [
            "<em>Urgent</em> says how you feel. The strong version says what the reader has to do and when, which is what makes a message urgent.",
            "<em>Urgent</em> dice cómo te sientes. La versión sólida dice qué tiene que hacer tu lector y cuándo, que es lo que vuelve urgente un mensaje.",
          ],
        },
        {
          weak: "Follow up",
          strong: "Following up: signed NDA needed by Wednesday",
          why: [
            "The reader should not have to open the message to learn what you are following up on.",
            "Tu lector no debería tener que abrir el mensaje para saber a qué le estás dando seguimiento.",
          ],
        },
        {
          weak: "RE: RE: FW: Lunch on Tuesday",
          strong: "Draft agenda for the June offsite",
          why: [
            "A new topic needs a new subject line. Replying on an old thread hides your message under a title the reader has already dismissed.",
            "Un tema nuevo necesita un asunto nuevo. Contestar en un hilo viejo esconde tu mensaje bajo un título que tu lector ya descartó.",
          ],
        },
        {
          weak: "Monthly report",
          strong: "April report: sales up 6%, churn flat",
          why: [
            "Put the headline in the subject line. The report becomes something people open because they already know why it matters.",
            "Pon el titular en el asunto. El reporte se vuelve algo que la gente abre porque ya sabe por qué importa.",
          ],
        },
      ],
    },
    {
      t: "framework",
      title: ["The three-part email", "El correo en tres partes"],
      lead: [
        "It fits nearly every email that asks for something. On a phone, a long paragraph fills the whole screen, so keep each part to a few lines.",
        "Sirve para casi cualquier correo que pide algo. En un celular, un párrafo largo llena toda la pantalla, así que deja cada parte en unas cuantas líneas.",
      ],
      steps: [
        {
          label: ["The ask, or the news", "La petición, o la noticia"],
          html: [
            "One or two sentences, right after the greeting. If you are asking, ask as a question with a date.",
            "Una o dos oraciones, justo después del saludo. Si vas a pedir algo, pídelo como pregunta y con fecha.",
          ],
          say: "Can you approve the attached quote for 40 laptops by Thursday?",
        },
        {
          label: ["What the reader needs in order to act", "Lo que tu lector necesita para actuar"],
          html: [
            "Only the facts that affect the decision: the number, the comparison, the risk. The history of how you got here almost never qualifies. If there are three or more separate facts, use bullets.",
            "Solo los datos que afectan la decisión: la cifra, la comparación, el riesgo. La historia de cómo llegaste hasta aquí casi nunca entra. Si son tres o más datos independientes, usa viñetas.",
          ],
          say: "The total is $38,400, which is $1,600 under budget. This vendor delivered our last order on time.",
        },
        {
          label: ["The next step", "El siguiente paso"],
          html: [
            "What happens after the reader answers, with a date and an owner. It tells them the cost of waiting without any pressure in the wording.",
            "Qué pasa después de que tu lector conteste, con fecha y responsable. Le dice lo que cuesta esperar, sin presionar con las palabras.",
          ],
          say: "If you approve by Thursday, the laptops will arrive before the new hires start on June 2.",
        },
      ],
    },
    {
      t: "model",
      title: ["A real-length email, before", "Un correo de tamaño real, antes"],
      context: [
        "Luis is asking his director to approve a new payroll provider. Every fact he needs is in this draft. Read it the way Dana will: on a phone, in ten seconds.",
        "Luis le pide a su directora que apruebe un nuevo proveedor de nómina. Todos los datos que necesita están en este borrador. Léelo como lo va a leer Dana: en el celular, en diez segundos.",
      ],
      lines: [
        {
          en: "<b>Subject:</b> Important information",
          note: [
            "Every email claims to be important. This subject line names neither the topic nor the action.",
            "Todos los correos dicen ser importantes. Este asunto no nombra ni el tema ni la acción.",
          ],
        },
        {
          en: "Dear Dana, I hope this email finds you well.",
          note: [
            "The first visible line is spent on a formula.",
            "La primera línea visible se gasta en una fórmula.",
          ],
        },
        {
          en: "As you may remember, in our meeting of last month we discussed about the possibility of changing the provider of the payroll service, due to the fact that we had some problems with the current one during the first quarter.",
          note: [
            "Background she already has. Also <span class='x'>✗</span> <em>discussed about</em>: the verb takes no preposition, <span class='ok'>✓</span> <em>we discussed changing</em>.",
            "Antecedentes que ella ya conoce. Además, <span class='x'>✗</span> <em>discussed about</em>: el verbo no lleva preposición, <span class='ok'>✓</span> <em>we discussed changing</em>.",
          ],
        },
        {
          en: "After that meeting, the team made an analysis of three different options, and we had several calls with each one of them, in which we reviewed the prices, the implementation times and the support that they offer.",
          note: [
            "The history of the work. It shows effort, which is not what she needs in order to decide.",
            "La historia del trabajo. Muestra esfuerzo, que no es lo que ella necesita para decidir.",
          ],
        },
        {
          en: "In this sense, I would like to inform you that the option that seems most convenient for us is the second one, since it offers a lower price and the implementation is faster.",
          note: [
            "The recommendation, in sentence four, without a number. <em>Convenient</em> is a false friend here: it means easy or handy, while <em>conveniente</em> means <em>best for us</em>.",
            "La recomendación, hasta la cuarta oración y sin una sola cifra. <em>Convenient</em> es un falso amigo aquí: significa cómodo o práctico, mientras que lo que Luis quiere decir con <em>conveniente</em> es <em>best for us</em>.",
          ],
        },
        {
          en: "For this reason, it would be necessary to have your approval in order to continue with the process, considering that the current contract finishes at the end of June.",
          note: [
            "The ask finally arrives, in an impersonal form and with no date. The real deadline is hidden in the last clause.",
            "Por fin llega la petición, en forma impersonal y sin fecha. La fecha límite real está escondida en la última cláusula.",
          ],
        },
        {
          en: "I remain attentive to your comments. Best regards, Luis",
          note: [
            "A translated closing. Dana has read 140 words and still has to work out what to do and by when.",
            "Un cierre traducido. Dana leyó 140 palabras y todavía tiene que deducir qué hacer y para cuándo.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["The same email, after", "El mismo correo, después"],
      context: [
        "Same facts, about half the words. Check it against the three parts.",
        "Los mismos datos, más o menos la mitad de las palabras. Compáralo con las tres partes.",
      ],
      lines: [
        {
          en: "<b>Subject:</b> Approval needed by May 30: new payroll provider",
          note: [
            "Action, date, topic. Dana knows what this is before she opens it.",
            "Acción, fecha, tema. Dana sabe de qué se trata antes de abrirlo.",
          ],
        },
        {
          en: "Hi Dana,",
        },
        {
          en: "Can you approve a switch to a new payroll provider by May 30? I recommend Option B in the attached comparison.",
          note: [
            "Part 1: the ask as a question with a date, then the recommendation. She could answer after this line.",
            "Parte 1: la petición como pregunta y con fecha, y luego la recomendación. Podría contestar después de esta línea.",
          ],
        },
        {
          en: "Of the three providers we evaluated, Option B is the strongest on all three points:",
          note: [
            "A full sentence introduces the list and says what the items are.",
            "Una oración completa presenta la lista y dice qué son los elementos.",
          ],
        },
        {
          en: "• Price: $4,200 a month, 15% less than we pay now<br>• Setup: four weeks, the fastest of the three<br>• Support: a named account manager in our time zone",
          note: [
            "Part 2: three separate, parallel facts, so bullets are the right tool. Each has the same shape: a label, then a fact.",
            "Parte 2: tres datos independientes y paralelos, así que las viñetas son la herramienta correcta. Todos tienen la misma forma: una etiqueta y después un dato.",
          ],
        },
        {
          en: "Why May 30: our current contract ends June 30, and setup takes four weeks.",
          note: [
            "The reason for the deadline, in one line. The date now looks like arithmetic, not pressure.",
            "La razón de la fecha límite, en una línea. Ahora la fecha se ve como aritmética, no como presión.",
          ],
        },
        {
          en: "If you approve, I'll sign the following week and send the team a transition plan.",
          note: [
            "Part 3: the next step, with an owner.",
            "Parte 3: el siguiente paso, con responsable.",
          ],
        },
        {
          en: "Thanks,<br>Luis",
        },
      ],
    },
    {
      t: "framework",
      title: [
        "The status update: what happened, what it means, what is next",
        "La actualización de estatus: qué pasó, qué significa, qué sigue",
      ],
      lead: [
        "For the weekly update, the incident note and the project report. Most updates stop after the first part; the second is the one your manager is reading for.",
        "Para la actualización semanal, la nota de incidente y el reporte de proyecto. La mayoría de las actualizaciones se quedan en la primera parte; la segunda es la que tu jefa o jefe está buscando.",
      ],
      steps: [
        {
          label: ["What happened", "Qué pasó"],
          html: [
            "The facts, with numbers. Results, not activity: <em>finished</em>, <em>shipped</em>, <em>signed</em>, <em>failed</em>.",
            "Los hechos, con cifras. Resultados, no actividad: <em>finished</em>, <em>shipped</em>, <em>signed</em>, <em>failed</em>.",
          ],
          say: "This week we finished user testing with 24 customers.",
        },
        {
          label: ["What it means", "Qué significa"],
          html: [
            "The effect on the date, the budget or the goal. If nothing changes, say so in plain words; <em>still on track</em> is information too.",
            "El efecto en la fecha, el presupuesto o la meta. Si no cambia nada, dilo con todas sus letras; <em>still on track</em> también es información.",
          ],
          say: "Nine of them could not complete checkout on a phone, so the mobile flow is not ready to launch.",
        },
        {
          label: ["What is next", "Qué sigue"],
          html: [
            "The next action, with a date and an owner. End with what you need from the reader, or tell them clearly that you need nothing.",
            "La siguiente acción, con fecha y responsable. Cierra con lo que necesitas de tu lector, o dile claramente que no necesitas nada.",
          ],
          say: "We will fix the two blocking issues by June 12 and retest with the same group on June 15. No action needed from you this week.",
        },
      ],
    },
    {
      t: "model",
      title: ["A weekly update in six lines", "Una actualización semanal en seis líneas"],
      context: [
        "Marcus runs a warehouse system rollout and sends this to his VP every Friday.",
        "Marcus lleva la implementación de un sistema de almacén y le manda esto a su VP todos los viernes.",
      ],
      lines: [
        {
          en: "<b>Subject:</b> Warehouse system: on track for July 1, one risk",
          note: [
            "The whole update in nine words. A VP who reads only this is informed.",
            "Toda la actualización en nueve palabras. Un VP que solo lea esto ya está informado.",
          ],
        },
        {
          en: "We are on track for the July 1 go-live.",
          note: [
            "The status first, before any detail.",
            "Primero el estatus, antes de cualquier detalle.",
          ],
        },
        {
          en: "This week we finished training both shifts, 46 people in total.",
          note: ["What happened: a result with a number.", "Qué pasó: un resultado con cifra."],
        },
        {
          en: "The one risk is the scanners: 12 of the 60 arrived defective, and the replacements are due June 18.",
          note: [
            "What it means. He says <em>the one risk</em>, so the reader knows there is no second one.",
            "Qué significa. Dice <em>the one risk</em>, y así el lector sabe que no hay un segundo.",
          ],
        },
        {
          en: "If they are late, we will go live on schedule with paper backup at two docks.",
          note: [
            "The plan B, before anyone has to ask for it.",
            "El plan B, antes de que alguien tenga que pedirlo.",
          ],
        },
        {
          en: "Next week: full dry run on Wednesday, results to you on Thursday.",
          note: ["What is next, with days.", "Qué sigue, con días."],
        },
        {
          en: "Nothing needed from you right now.",
          note: [
            "It closes the loop. The VP does not have to wonder whether there was a request somewhere.",
            "Cierra el ciclo. El VP no tiene que preguntarse si en algún lado había una petición.",
          ],
        },
      ],
    },
    {
      t: "p",
      html: [
        "<b>The executive summary</b> is the same idea at report size. It is not an introduction, and it does not describe the document. It is the whole document in miniature for the person who will read nothing else: the conclusion, the two or three facts behind it, and the decision you need. Write it last and put it first. The test is simple: could the reader make the decision from this paragraph alone?",
        "<b>El resumen ejecutivo</b> es la misma idea en tamaño reporte. No es una introducción, y no describe el documento. Es el documento completo en miniatura para quien no va a leer nada más: la conclusión, los dos o tres datos que la sostienen y la decisión que necesitas. Escríbelo al final y ponlo al principio. La prueba es sencilla: ¿tu lector podría tomar la decisión solo con ese párrafo?",
      ],
    },
    {
      t: "compare",
      title: [
        "The one-paragraph summary, before and after",
        "El resumen de un párrafo, antes y después",
      ],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "This report presents the results of the customer satisfaction survey that was carried out during the month of March. The survey was sent to 1,200 customers and the methodology is explained in section 2. The results are presented in sections 3 and 4, and finally some recommendations are included in section 5.",
          strong:
            "Customer satisfaction fell from 82% to 74% in a year, and slow support is the main reason: customers who waited more than a day for an answer were three times as likely to rate us poorly. We recommend adding two support agents at $9,000 a month. We need a decision by April 30 to have them trained before the summer peak.",
          why: [
            "The first version is a table of contents written as a paragraph. It tells the reader where the findings are, not what they are. The second gives the finding, the cause, the recommendation, the cost and the deadline.",
            "La primera versión es un índice escrito como párrafo. Le dice al lector dónde están los hallazgos, no cuáles son. La segunda da el hallazgo, la causa, la recomendación, el costo y la fecha límite.",
          ],
        },
        {
          weak: "The purpose of this document is to analyze the different alternatives for the renewal of the fleet of delivery vehicles, taking into account several factors such as cost, maintenance and environmental impact.",
          strong:
            "We should lease 20 electric vans instead of buying diesel ones. The lease payments are 8% higher over five years, but fuel and maintenance drop by about $60,000 a year, and the vans meet the city's new emissions rule. The lease offer expires on March 15.",
          why: [
            "<em>The purpose of this document is to analyze</em> describes your work. The reader wants the result of the analysis, and the strong version opens with it.",
            "<em>The purpose of this document is to analyze</em> describe tu trabajo. Tu lector quiere el resultado del análisis, y la versión sólida abre con él.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: [
        "Working lines for emails and updates",
        "Líneas de trabajo para correos y actualizaciones",
      ],
      items: [
        {
          en: "Decision needed by Friday:",
          use: [
            "In a subject line or as the first words of the email.",
            "En el asunto o como las primeras palabras del correo.",
          ],
        },
        {
          en: "FYI only. No action needed.",
          use: [
            "Tells the reader they can read this later, and that is a courtesy.",
            "Le dice a tu lector que puede leerlo después, y eso es una cortesía.",
          ],
        },
        {
          en: "Short version:",
          use: [
            "Before a one-line summary at the top of a longer message.",
            "Antes de un resumen de una línea al inicio de un mensaje más largo.",
          ],
        },
        {
          en: "Two questions:",
          use: [
            "Numbers the questions so the reader answers both. Then number them.",
            "Cuenta las preguntas para que tu lector conteste las dos. Después numéralas.",
          ],
        },
        {
          en: "Here's where we are:",
          use: [
            "Opens a status update in a thread.",
            "Abre una actualización de estatus dentro de un hilo.",
          ],
        },
        {
          en: "What I need from you:",
          use: [
            "Separates the request from the information around it.",
            "Separa la petición de la información que la rodea.",
          ],
        },
        {
          en: "Next steps:",
          use: [
            "Before a short list of actions, each with a name and a date.",
            "Antes de una lista corta de acciones, cada una con nombre y fecha.",
          ],
        },
        {
          en: "Details are below if you need them.",
          use: [
            "Marks the line where the essential part ends and the reference part begins.",
            "Marca la línea donde termina lo esencial y empieza el material de consulta.",
          ],
        },
        {
          en: "Adding Priya, who owns the budget.",
          use: [
            "When you copy someone new on a thread, say who they are and why.",
            "Cuando copias a alguien nuevo en un hilo, di quién es y por qué.",
          ],
        },
        {
          en: "I'll send an update by Thursday either way.",
          use: [
            "A promise with a date, even when you do not have the answer yet.",
            "Una promesa con fecha, incluso cuando todavía no tienes la respuesta.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: [
        "Dates, greetings and one grammar pattern",
        "Fechas, saludos y un patrón de gramática",
      ],
      html: [
        "Three small things cause real confusion. <b>Dates:</b> in the United States the month comes first, so <em>05/06</em> is May 6, not June 5. Always write the month as a word, <span class='ok'>✓</span> <em>June 5</em>, and add a time zone to any time: <span class='ok'>✓</span> <em>3 p.m. Central</em>. <b>Greetings:</b> <span class='x'>✗</span> <em>Dears,</em> is not English, because <em>dear</em> is not used as a plural noun the way <em>estimados</em> is. Write <span class='ok'>✓</span> <em>Hi everyone,</em> or <span class='ok'>✓</span> <em>Hi team,</em>. <b>Requests:</b> <em>necesitamos que nos envíes</em> does not become <span class='x'>✗</span> <em>we need that you send us</em>. English uses <span class='ok'>✓</span> <em>we need you to send us</em>, or more simply <span class='ok'>✓</span> <em>please send us</em>.",
        "Tres cosas pequeñas causan confusión de verdad. <b>Fechas:</b> en Estados Unidos el mes va primero, así que <em>05/06</em> es el 6 de mayo, no el 5 de junio. Escribe siempre el mes con letra, <span class='ok'>✓</span> <em>June 5</em>, y ponle zona horaria a cualquier hora: <span class='ok'>✓</span> <em>3 p.m. Central</em>. <b>Saludos:</b> <span class='x'>✗</span> <em>Dears,</em> no existe en inglés, porque <em>dear</em> no se usa como sustantivo plural, como sí pasa con <em>estimados</em>. Escribe <span class='ok'>✓</span> <em>Hi everyone,</em> o <span class='ok'>✓</span> <em>Hi team,</em>. <b>Peticiones:</b> <em>necesitamos que nos envíes</em> no se convierte en <span class='x'>✗</span> <em>we need that you send us</em>. En inglés es <span class='ok'>✓</span> <em>we need you to send us</em>, o más sencillo, <span class='ok'>✓</span> <em>please send us</em>.",
      ],
    },
    {
      t: "choice",
      title: [
        "Choose the version a busy reader can act on",
        "Elige la versión con la que un lector ocupado puede actuar",
      ],
      items: [
        {
          prompt: [
            "You are asking your CFO to approve an $18,000 expense by Friday. Which subject line?",
            "Le vas a pedir a tu CFO que apruebe un gasto de $18,000 para el viernes. ¿Cuál asunto?",
          ],
          options: [
            {
              en: "Budget question",
              ok: false,
              why: [
                "It names an area, not an action. It will be opened when there is time, which may be after Friday.",
                "Nombra un área, no una acción. Se va a abrir cuando haya tiempo, y eso puede ser después del viernes.",
              ],
            },
            {
              en: "Approval needed by Friday: $18,000 for the Dallas trade show",
              ok: true,
              why: [
                "Action, date, amount, purpose. A CFO can almost decide from the inbox.",
                "Acción, fecha, monto, propósito. Un CFO casi puede decidir desde la bandeja de entrada.",
              ],
            },
            {
              en: "URGENT: please read",
              ok: false,
              why: [
                "It demands attention and says nothing. Used twice, it stops working.",
                "Exige atención y no dice nada. A la segunda vez, deja de funcionar.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You need a decision from a director about an office lease. Which opening?",
            "Necesitas que una directora decida sobre la renta de una oficina. ¿Cuál inicio?",
          ],
          options: [
            {
              en: "I hope you're doing well. I wanted to give you some context on the Monterrey office lease before asking for your input.",
              ok: false,
              why: [
                "Friendly, and it promises context before the question. On a phone, those are the only two lines she sees.",
                "Amable, y promete contexto antes de la pregunta. En el celular, esas son las únicas dos líneas que ella ve.",
              ],
            },
            {
              en: "We need to decide by March 10 whether to renew the Monterrey lease. I recommend renewing for two years.",
              ok: true,
              why: [
                "The decision, the date and your recommendation, all in the first two lines.",
                "La decisión, la fecha y tu recomendación, todo en las dos primeras líneas.",
              ],
            },
            {
              en: "As you know, the Monterrey lease has been a topic of discussion for several months.",
              ok: false,
              why: [
                "She does know. The sentence uses the best position in the email to tell her nothing new.",
                "Sí lo sabe. La oración usa la mejor posición del correo para no decirle nada nuevo.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Your update says: <em>The supplier will deliver the parts on June 18 instead of June 4.</em> Which sentence should come next?",
            "Tu actualización dice: <em>The supplier will deliver the parts on June 18 instead of June 4.</em> ¿Cuál oración debe seguir?",
          ],
          options: [
            {
              en: "We are very disappointed with this supplier.",
              ok: false,
              why: [
                "A feeling. Your reader needs the consequence first.",
                "Un sentimiento. Tu lector necesita primero la consecuencia.",
              ],
            },
            {
              en: "That pushes assembly to June 22, so the first units will ship on July 1 instead of June 17.",
              ok: true,
              why: [
                "<em>What it means</em>: the effect on your own dates, which is what the reader has to plan around.",
                "<em>What it means</em>: el efecto en tus propias fechas, que es con lo que tu lector tiene que planear.",
              ],
            },
            {
              en: "The supplier explained that the delay is due to a shortage of raw materials at its plant in Ohio.",
              ok: false,
              why: [
                "The cause of the supplier's problem. It may belong lower down, after the effect on your project.",
                "La causa del problema del proveedor. Puede ir más abajo, después del efecto en tu proyecto.",
              ],
            },
          ],
        },
        {
          prompt: [
            "The deadline is <em>el 5 de junio</em>. You are writing to a colleague in Chicago.",
            "La fecha límite es el 5 de junio. Le escribes a un colega en Chicago.",
          ],
          options: [
            {
              en: "Please send your comments by 05/06.",
              ok: false,
              why: [
                "Your colleague will read May 6 and may think the deadline has already passed.",
                "Tu colega va a leer 6 de mayo y puede pensar que la fecha ya pasó.",
              ],
            },
            {
              en: "Please send your comments by June 5, end of day Central.",
              ok: true,
              why: [
                "The month as a word, plus the time and the zone. Nothing to interpret.",
                "El mes con letra, más la hora y la zona. Nada que interpretar.",
              ],
            },
            {
              en: "Please send your comments by the 5th of next month.",
              ok: false,
              why: [
                "Correct today and wrong if the email is read, or forwarded, after the month changes.",
                "Correcto hoy, e incorrecto si el correo se lee, o se reenvía, cuando ya cambió el mes.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Which sentence should open the executive summary of a pricing analysis?",
            "¿Cuál oración debe abrir el resumen ejecutivo de un análisis de precios?",
          ],
          options: [
            {
              en: "This document provides an overview of the findings of the Q2 pricing analysis.",
              ok: false,
              why: [
                "It describes the document. The reader is holding the document and wants what is in it.",
                "Describe el documento. El lector ya tiene el documento en las manos y quiere lo que trae.",
              ],
            },
            {
              en: "Raising prices 4% in Q3 would add about $1.1M in revenue with little risk of losing customers.",
              ok: true,
              why: [
                "The conclusion, with the number. Everything after it is support.",
                "La conclusión, con la cifra. Todo lo que sigue es sustento.",
              ],
            },
            {
              en: "Pricing is one of the most important levers available to any business.",
              ok: false,
              why: [
                "True of every business, so it tells this reader nothing about this one.",
                "Es cierto de cualquier negocio, así que a este lector no le dice nada sobre este.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Rewrite the real thing", "Reescribe documentos reales"],
      items: [
        {
          task: [
            "Write a subject line for this situation: you need Priya to confirm by Tuesday whether her team can host a client visit on May 14.",
            "Escribe un asunto para esta situación: necesitas que Priya te confirme para el martes si su equipo puede recibir una visita de un cliente el 14 de mayo.",
          ],
          before: "<b>Subject:</b> Information",
          after: "<b>Subject:</b> Please confirm by Tuesday: can you host the May 14 client visit?",
          why: [
            "The action and its date come first, then the question itself. Priya can answer without opening the email.",
            "Primero van la acción y su fecha, y después la pregunta misma. Priya puede contestar sin abrir el correo.",
          ],
        },
        {
          task: [
            "Rebuild this as a three-part email: the ask, what Marcus needs to know, the next step. Invent a date.",
            "Reconstruye esto como un correo en tres partes: la petición, lo que Marcus necesita saber, el siguiente paso. Inventa una fecha.",
          ],
          before:
            "Hello Marcus, I hope you are having a great week. As you know, we have been working on the new onboarding manual for several weeks and the team has made a big effort. The document is almost finished, however there are some sections that need information from your area, specifically the ones about security access. I would appreciate if you could help us with this when you have the opportunity.",
          after:
            "Hi Marcus,<br><br>Could you send me the security access steps for new hires by Wednesday?<br><br>They are the last missing piece of the onboarding manual (sections 4 and 5). A bullet list is enough; I'll do the formatting.<br><br>With your input on Wednesday, we can publish on Friday.<br><br>Thanks,<br>Elena",
          why: [
            "The request moved from the last sentence to the first and gained a date. The history of the manual is gone. The new second part tells Marcus exactly how little work is being asked of him, which makes a yes more likely.",
            "La petición pasó de la última oración a la primera y ganó una fecha. La historia del manual desapareció. La nueva segunda parte le dice a Marcus exactamente qué tan poco trabajo se le pide, y eso hace más probable el sí.",
          ],
        },
        {
          task: [
            "Turn this into a status update: what happened, what it means, what is next. Invent the facts you need.",
            "Convierte esto en una actualización de estatus: qué pasó, qué significa, qué sigue. Inventa los datos que necesites.",
          ],
          before:
            "This week was very complicated. We had many problems with the server and the team worked late several days. We are doing everything possible to recover the lost time.",
          after:
            "The server failed twice this week, which cost us three days of testing. That moves the test results from Friday to next Wednesday; the launch date does not change. To prevent a third failure, we are moving to the backup server tomorrow.",
          why: [
            "The original reports effort and feeling. The rewrite reports a fact with a number, its effect on the dates, and a specific action. <em>We are doing everything possible</em> reassures nobody; <em>the launch date does not change</em> does.",
            "El original reporta esfuerzo y ánimo. La nueva versión reporta un hecho con cifra, su efecto en las fechas y una acción específica. <em>We are doing everything possible</em> no tranquiliza a nadie; <em>the launch date does not change</em> sí.",
          ],
        },
        {
          task: [
            "Rewrite this opening of an executive summary so it gives the findings instead of describing the report. Invent the numbers.",
            "Reescribe este inicio de un resumen ejecutivo para que dé los hallazgos en vez de describir el reporte. Inventa las cifras.",
          ],
          before:
            "In this report we will see the analysis of the overtime of the plant during the first semester, the principal causes that were identified, and the recommendations.",
          after:
            "Overtime at the plant cost $212,000 in the first half of the year, 60% of it on the night shift. The main cause is unplanned maintenance on Line 2. Replacing that line's two oldest motors, for $35,000, should cut overtime by about a third.",
          why: [
            "Finding, cause, recommendation: one sentence each, with numbers. Two word choices also changed. In business English <em>semestre</em> is <em>the first half of the year</em> (<em>semester</em> is for schools), and <em>principal causes</em> is more naturally <em>main causes</em>.",
            "Hallazgo, causa, recomendación: una oración para cada uno, con cifras. También cambiaron dos palabras. En inglés de negocios, <em>semestre</em> es <em>the first half of the year</em> (<em>semester</em> es para escuelas), y <em>principal causes</em> suena más natural como <em>main causes</em>.",
          ],
        },
        {
          task: [
            "Make this readable on a phone. The three items are separate and parallel.",
            "Haz que esto se pueda leer en un celular. Los tres elementos son independientes y paralelos.",
          ],
          before:
            "For the visit we need that you send us the list of attendees with their full names and also the dietary restrictions if there are any and the arrival times of each one in order to organize the transportation, everything before Thursday please.",
          after:
            "For the visit, please send me three things by Thursday:<br>• The full name of everyone attending<br>• Any dietary restrictions<br>• Each person's arrival time, so we can arrange transportation",
          why: [
            "The deadline moved into the first line, where it will be seen. Three separate items became three bullets introduced by a full sentence. And <span class='x'>✗</span> <em>we need that you send us</em> became <span class='ok'>✓</span> <em>please send me</em>.",
            "La fecha límite pasó a la primera línea, donde sí se va a ver. Tres elementos independientes se volvieron tres viñetas presentadas por una oración completa. Y <span class='x'>✗</span> <em>we need that you send us</em> se volvió <span class='ok'>✓</span> <em>please send me</em>.",
          ],
        },
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "Write for the reader who sees only the subject line and two lines of text. They should know what you need and by when.",
          "Escribe para quien solo ve el asunto y dos líneas de texto. Debe saber qué necesitas y para cuándo.",
        ],
        [
          "Subject line: the action and the date first, then the topic. A new topic gets a new subject line.",
          "Asunto: primero la acción y la fecha, después el tema. Tema nuevo, asunto nuevo.",
        ],
        [
          "Email: the ask, what the reader needs in order to act, the next step.",
          "Correo: la petición, lo que tu lector necesita para actuar, el siguiente paso.",
        ],
        [
          "Update: what happened, what it means, what is next. The middle part is the one people skip and the one managers read for.",
          "Actualización: qué pasó, qué significa, qué sigue. La parte de en medio es la que se omite y la que la gerencia busca.",
        ],
        [
          "An executive summary gives the conclusion and the decision. It never describes the document.",
          "Un resumen ejecutivo da la conclusión y la decisión. Nunca describe el documento.",
        ],
      ],
    },
  ],
};
