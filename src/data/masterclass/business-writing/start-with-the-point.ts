import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "start-with-the-point",
  slugEs: "empieza-por-el-punto",
  title: ["Start With the Point", "Empieza por el Punto"],
  summary: [
    "Put what you need in the first two lines, then give only the context the reader needs to say yes.",
    "Pon lo que necesitas en las dos primeras líneas y después da solo el contexto que tu lector necesita para decir que sí.",
  ],
  description: [
    "Put the point in the first two lines. Learn the bottom-line-up-front method for business email and reverse the context-first habit from Spanish.",
    "Pon el punto en las dos primeras líneas. Aprende a escribir correos en inglés que dicen primero lo que necesitas y después el contexto.",
  ],
  minutes: 15,
  blocks: [
    {
      t: "p",
      html: [
        "You send a careful email to a US colleague. Four paragraphs, every fact in order, the request at the end. The reply comes back in one line and answers a question you did not ask. Or no reply comes at all, and a week later you are writing <em>Just following up</em>.",
        "Le mandas un correo muy cuidado a alguien de Estados Unidos. Cuatro párrafos, cada dato en su lugar, la petición al final. La respuesta llega en una línea y contesta algo que no preguntaste. O no llega, y una semana después estás escribiendo <em>Just following up</em>.",
      ],
    },
    {
      t: "p",
      html: [
        "Nothing was wrong with your English. The order was wrong for that reader. This course works on written English in two halves: lessons 2 to 5 build sentences that are correct and tight, and lessons 6 to 10 make them easy and persuasive to read. Every lesson shows weak sentences repaired, then asks you to repair some yourself. Type your version before you reveal the model; that is where the learning happens. If you can, keep one real email you sent this week open beside the lesson and apply each idea to it.",
        "Tu inglés no tenía nada de malo. El orden era el equivocado para ese lector. Este curso trabaja tu inglés escrito en dos mitades: las lecciones 2 a 5 construyen oraciones correctas y compactas, y las lecciones 6 a 10 las vuelven fáciles de leer y convincentes. Cada lección te muestra oraciones débiles ya reparadas y luego te pide reparar algunas. Escribe tu versión antes de ver el modelo; ahí es donde se aprende. Si puedes, ten abierto un correo real que mandaste esta semana y aplícale cada idea.",
      ],
    },
    {
      t: "idea",
      title: ["The reader decides in two lines", "Tu lector decide en dos líneas"],
      html: [
        "An American business reader opens your message with a full inbox behind it and reads the first two lines to answer one question: <b>what does this person need from me?</b> If the answer is there, they act. If it is not, they skim for it, guess, or save the message for later. So write the first two lines as if they were the whole message. State what you need or what you are telling them, and when. Everything after that is support the reader may or may not read.",
        "Quien te lee en una empresa estadounidense abre tu mensaje con la bandeja llena y lee las dos primeras líneas para contestar una sola pregunta: <b>¿qué necesita de mí esta persona?</b> Si la respuesta está ahí, actúa. Si no está, la busca por encima, la adivina o deja el mensaje para después. Entonces escribe las dos primeras líneas como si fueran todo el mensaje. Di qué necesitas o qué estás informando, y para cuándo. Todo lo que sigue es apoyo que tu lector quizá lea y quizá no.",
      ],
    },
    {
      t: "framework",
      title: ["The point-first plan", "El plan de punto primero"],
      lead: [
        "Run these five steps before you write anything longer than three lines. It takes a minute and saves the reader five.",
        "Sigue estos cinco pasos antes de escribir cualquier cosa de más de tres líneas. Te toma un minuto y le ahorra cinco a tu lector.",
      ],
      steps: [
        {
          label: ["Finish the sentence", "Completa la oración"],
          html: [
            "Before you type the greeting, complete this privately: <em>After reading this, I want you to ___.</em> If you cannot finish it, you are not ready to write. If you finish it with two unrelated actions, you have two messages.",
            "Antes de escribir el saludo, completa esto para ti: <em>After reading this, I want you to ___.</em> Si no puedes terminarla, todavía no estás en condiciones de escribir. Si la terminas con dos acciones que no tienen relación, tienes dos mensajes.",
          ],
          say: "After reading this, I want Dana to approve the new launch date by Friday.",
        },
        {
          label: ["Turn it into the first line", "Conviértela en la primera línea"],
          html: [
            "Rewrite that private sentence as something you can say to the reader: the action, the object, the date.",
            "Reescribe esa oración privada como algo que le puedes decir a tu lector: la acción, el objeto, la fecha.",
          ],
          say: "Can you approve moving the billing launch to July 14 by Friday?",
        },
        {
          label: ["Give the reason in one sentence", "Da la razón en una oración"],
          html: [
            "The second line answers the question the first one raises, which is almost always <em>why</em>.",
            "La segunda línea contesta la pregunta que provoca la primera, que casi siempre es <em>why</em>.",
          ],
          say: "Testing found errors in the tax module, and launching with them would produce incorrect invoices.",
        },
        {
          label: [
            "Add only what the reader needs to say yes",
            "Agrega solo lo que tu lector necesita para decir que sí",
          ],
          html: [
            "Go through your background facts one by one. Keep a fact if the reader would ask for it before deciding. Cut it if it only shows how much work you did.",
            "Revisa tus antecedentes uno por uno. Conserva un dato si tu lector lo pediría antes de decidir. Quítalo si solo demuestra cuánto trabajaste.",
          ],
          say: "The two extra weeks cover a full retest. The cost is $18,000, and it fits in the contingency budget.",
        },
        {
          label: ["Close with the next step, or stop", "Cierra con el siguiente paso, o detente"],
          html: [
            "Say what happens once they answer. If there is nothing to add, end the message. A closing line that repeats the request in softer words adds length and no information.",
            "Di qué pasa cuando te contesten. Si no hay nada que agregar, termina el mensaje. Una línea de cierre que repite la petición con palabras más suaves agrega longitud y ninguna información.",
          ],
          say: "Once you approve, I'll send the vendor the new schedule the same day.",
        },
      ],
    },
    {
      t: "compare",
      title: ["First lines, repaired", "Primeras líneas, reparadas"],
      labels: [
        ["Before", "Antes"],
        ["After", "Después"],
      ],
      rows: [
        {
          weak: "I hope you are doing well. I am writing in relation to the Q3 budget that we reviewed last week.",
          strong:
            "Can you approve the revised Q3 budget by Wednesday? The only change is $12,000 moved from travel to training.",
          why: [
            "The first version announces a topic. The second makes the request, gives the deadline, and tells the reader how small the decision is.",
            "La primera versión anuncia un tema. La segunda hace la petición, da la fecha límite y le dice a tu lector qué tan pequeña es la decisión.",
          ],
        },
        {
          weak: "As you may remember, last month we discussed the possibility of hiring a second analyst for the team.",
          strong: "I'd like to open the second analyst position this month. Here's the case.",
          why: [
            "Reminding the reader of a past conversation delays the news. Lead with what you want now; <em>Here's the case</em> tells them the reasons are coming.",
            "Recordarle a tu lector una conversación pasada retrasa la noticia. Empieza con lo que quieres hoy; <em>Here's the case</em> le avisa que las razones vienen enseguida.",
          ],
        },
        {
          weak: "I wanted to give you some context about the situation with the packaging vendor.",
          strong:
            "The packaging vendor will miss the May 5 delivery by two weeks. We need to decide today whether to wait or switch.",
          why: [
            "<em>Some context about the situation</em> makes the reader wait to learn whether the news is good or bad. The repaired version gives the fact and the decision it forces.",
            "<em>Some context about the situation</em> obliga a tu lector a esperar para saber si la noticia es buena o mala. La versión reparada da el hecho y la decisión que provoca.",
          ],
        },
        {
          weak: "Following up on our conversation, please find attached the document for your review and comments.",
          strong:
            "The contract draft is attached. Please check section 4 (payment terms) and send me changes by Monday.",
          why: [
            "<em>For your review and comments</em> does not say what to look at or by when. Naming the section and the day turns a vague favor into a ten-minute task.",
            "<em>For your review and comments</em> no dice qué revisar ni para cuándo. Nombrar la sección y el día convierte un favor vago en una tarea de diez minutos.",
          ],
        },
        {
          weak: "There are a few topics I would like to comment on regarding the launch.",
          strong: "Three things on the launch: one decision for you and two updates.",
          why: [
            "When a message truly has several parts, say how many and which one needs the reader. They will read the decision first and the updates when they have time.",
            "Cuando un mensaje de verdad tiene varias partes, di cuántas son y cuál necesita a tu lector. Va a leer primero la decisión y las novedades cuando tenga tiempo.",
          ],
        },
        {
          weak: "I am sending you this information in case it is useful for you.",
          strong:
            "No action needed. For your records: the audit closed yesterday with no findings.",
          why: [
            "An update has a point too. Saying <em>No action needed</em> first is a courtesy: the reader knows in three words that they can relax.",
            "Un informe también tiene un punto. Decir primero <em>No action needed</em> es una cortesía: en tres palabras tu lector sabe que puede estar tranquilo.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["Before: the context-first email", "Antes: el correo que empieza por el contexto"],
      context: [
        "Luis manages a billing-system migration. He needs Dana, a US director, to approve a later launch date and extra budget. Notice where the request sits.",
        "Luis dirige la migración de un sistema de facturación. Necesita que Dana, directora en Estados Unidos, apruebe una fecha de lanzamiento posterior y presupuesto adicional. Fíjate dónde queda la petición.",
      ],
      lines: [
        {
          en: "Hi Dana, I hope this email finds you well.",
        },
        {
          en: "As you know, in March we started the migration of the billing system together with the vendor's team.",
          note: [
            "The reader already knows this. The first real sentence spends her attention on old information.",
            "Tu lectora ya lo sabe. La primera oración de verdad gasta su atención en información vieja.",
          ],
        },
        {
          en: "During the first weeks the progress was according to the plan, but in May the vendor changed the lead engineer and some activities were delayed.",
          note: [
            "History in chronological order. Dana still does not know whether this is a problem or a report.",
            "Historia en orden cronológico. Dana todavía no sabe si esto es un problema o un informe.",
          ],
        },
        {
          en: "We had several meetings with them to find alternatives, and we analyzed different scenarios.",
          note: [
            "This shows effort. It gives her nothing she needs in order to decide.",
            "Esto demuestra esfuerzo. No le da nada que necesite para decidir.",
          ],
        },
        {
          en: "Additionally, the testing phase revealed some issues with the tax module that were not considered initially.",
          note: [
            "The real reason arrives in sentence five, introduced as an extra.",
            "La verdadera razón llega en la quinta oración, presentada como un extra.",
          ],
        },
        {
          en: "For all the above, I would like to ask if it would be possible to consider moving the launch date to July 14 and approving an additional $18,000 for testing.",
          note: [
            "The request, in sentence six, wrapped in three layers of softening. A reader who stopped at line two never saw it.",
            "La petición, en la sexta oración, envuelta en tres capas de suavizantes. Quien dejó de leer en la segunda línea nunca la vio.",
          ],
        },
        {
          en: "I remain attentive to your comments.",
          note: ["No deadline, no next step.", "Sin fecha límite y sin siguiente paso."],
        },
      ],
    },
    {
      t: "model",
      title: [
        "After: the same email, point first",
        "Después: el mismo correo, con el punto primero",
      ],
      context: [
        "Same facts, same courtesy, about half the words. The order follows the five steps.",
        "Los mismos hechos, la misma cortesía, más o menos la mitad de las palabras. El orden sigue los cinco pasos.",
      ],
      lines: [
        {
          en: "Hi Dana,",
        },
        {
          en: "I need your approval on two things by Friday: moving the billing launch from June 30 to July 14, and $18,000 for additional testing.",
          note: [
            "The whole message in one sentence: the action, both items, the deadline. The two requests belong together because they are one decision.",
            "Todo el mensaje en una oración: la acción, los dos puntos, la fecha límite. Las dos peticiones van juntas porque son una sola decisión.",
          ],
        },
        {
          en: "The reason is the tax module. Testing found errors in how it calculates sales tax, and launching with them would mean incorrect invoices.",
          note: [
            "The reason, with its consequence. This is the fact Dana would have asked for.",
            "La razón, con su consecuencia. Este es el dato que Dana habría pedido.",
          ],
        },
        {
          en: "The vendor also replaced its lead engineer in May, which cost us about a week.",
          note: [
            "One sentence of history, kept because it explains part of the delay.",
            "Una oración de historia, que se queda porque explica parte del retraso.",
          ],
        },
        {
          en: "With two more weeks and a full retest, I'm confident in July 14. Without them, we launch on time with a known defect.",
          note: [
            "The choice stated as a choice. She can see what each answer costs.",
            "La decisión planteada como decisión. Dana ve cuánto cuesta cada respuesta.",
          ],
        },
        {
          en: "Once you approve, I'll send the vendor the new schedule the same day. If you'd rather talk it through, I'm free Thursday after 2.",
          note: [
            "The next step, and an easy way to reach him. The warmth is in the offer.",
            "El siguiente paso y una forma fácil de localizarlo. La calidez está en el ofrecimiento.",
          ],
        },
        {
          en: "Thanks, Luis",
        },
      ],
    },
    {
      t: "phrases",
      title: ["First lines you can use today", "Primeras líneas que puedes usar hoy"],
      items: [
        {
          en: "I need your decision on the vendor by Thursday.",
          use: [
            "When the reader has to choose. Name the decision and the day.",
            "Cuando tu lector tiene que elegir. Nombra la decisión y el día.",
          ],
        },
        {
          en: "Can you approve the travel budget by end of day Wednesday?",
          use: [
            "A direct request for a yes. A question with a date is polite and clear at once.",
            "Una petición directa de un sí. Una pregunta con fecha es amable y clara a la vez.",
          ],
        },
        {
          en: "I recommend we extend the pilot by one month. Here's why.",
          use: [
            "When you are advising. Give the recommendation first and the reasoning second.",
            "Cuando estás recomendando. Primero la recomendación y después el razonamiento.",
          ],
        },
        {
          en: "Short version: we're on schedule, with one risk.",
          use: [
            "To open a status update. The reader gets the headline before the detail.",
            "Para abrir un informe de avance. Tu lector recibe el titular antes del detalle.",
          ],
        },
        {
          en: "We have a problem with the March shipment, and I have a fix to propose.",
          use: [
            "Bad news. Say it in the first clause and show at once that you have a plan.",
            "Malas noticias. Dilas en la primera parte de la oración y muestra enseguida que tienes un plan.",
          ],
        },
        {
          en: "One request and two updates.",
          use: [
            "When a message has several parts. Tell the reader what is coming and what needs them.",
            "Cuando un mensaje tiene varias partes. Dile a tu lector qué viene y qué lo necesita.",
          ],
        },
        {
          en: "No action needed. This is for your records.",
          use: [
            "For information only. It lets the reader file the message without worry.",
            "Solo para informar. Le permite a tu lector archivar el mensaje sin preocuparse.",
          ],
        },
        {
          en: "To answer your question: yes, we can deliver by the 15th.",
          use: [
            "When you are replying. Answer first, then explain or add conditions.",
            "Cuando estás contestando. Primero la respuesta, luego la explicación o las condiciones.",
          ],
        },
        {
          en: "Could you send me the Q2 numbers by Tuesday? I need them for the board deck.",
          use: [
            "Asking a colleague for something. The second sentence gives the reason in a few words.",
            "Para pedirle algo a alguien de tu equipo o de otro. La segunda oración da la razón en pocas palabras.",
          ],
        },
        {
          en: "Details are below if you want them.",
          use: [
            "After the point. It tells the reader the rest is optional.",
            "Después del punto. Le dice a tu lector que el resto es opcional.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: [
        "Context first is courtesy in Spanish",
        "En español, el contexto primero es cortesía",
      ],
      html: [
        "In Spanish business writing, you earn the request. You greet, you set the scene, you walk through the reasoning, and the ask arrives at the end, where it feels justified and respectful. Opening with <em>Necesito tu aprobación</em> can sound abrupt. American business English runs the other way: the request comes first because it respects the reader's time, and the reasons follow for whoever wants them. Neither order is rude at home. Carried into English, though, context first makes the writer seem unsure of what they want, and it hides the request from a reader who skims. You can keep your warmth. A greeting and a friendly line cost five words. Then make the request.",
        "En la escritura de negocios en español, la petición se gana. Saludas, pones el contexto, recorres el razonamiento, y la petición llega al final, donde se siente justificada y respetuosa. Abrir con <em>Necesito tu aprobación</em> puede sonar brusco. El inglés de negocios estadounidense funciona al revés: la petición va primero porque respeta el tiempo de quien lee, y las razones siguen para quien las quiera. Ninguno de los dos órdenes es grosero en su casa. Pero llevado al inglés, el contexto primero hace que quien escribe parezca no tener claro qué quiere, y le esconde la petición a un lector que lee por encima. Puedes conservar tu calidez. Un saludo y una línea amable cuestan cinco palabras. Luego haz la petición.",
      ],
    },
    {
      t: "list",
      ordered: true,
      items: [
        [
          "<b>A five-minute diagnostic.</b> Open the last important email you sent in English. Cover everything except the first two sentences. Could the reader act on those two alone?",
          "<b>Un diagnóstico de cinco minutos.</b> Abre el último correo importante que mandaste en inglés. Tapa todo menos las dos primeras oraciones. ¿Tu lector podría actuar solo con esas dos?",
        ],
        [
          "Find the sentence that holds your request or your main news. Count which sentence it is. If it is the fourth or later, the email is upside down.",
          "Encuentra la oración que contiene tu petición o tu noticia principal. Cuenta qué número de oración es. Si es la cuarta o una posterior, el correo está de cabeza.",
        ],
        [
          "Underline the action you wanted and the date you wanted it by. If either is missing, write it in the margin.",
          "Subraya la acción que querías y la fecha para la que la querías. Si falta alguna, escríbela al margen.",
        ],
        [
          "Count the purposes. Two unrelated requests in one email usually get one answer. Split them.",
          "Cuenta los propósitos. Dos peticiones sin relación en un mismo correo suelen recibir una sola respuesta. Sepáralas.",
        ],
        [
          "Mark each background sentence the reader needed in order to decide. Whatever is unmarked could have been cut.",
          "Marca cada oración de contexto que tu lector necesitaba para decidir. Lo que quedó sin marcar se pudo haber quitado.",
        ],
      ],
    },
    {
      t: "choice",
      title: ["Choose the best opening", "Elige la mejor apertura"],
      items: [
        {
          prompt: [
            "You compared two logistics vendors. Your VP has to pick one by Thursday so the contract can be signed this month. Which first line serves her best?",
            "Comparaste dos proveedores de logística. Tu vicepresidenta tiene que elegir uno antes del jueves para que el contrato se firme este mes. ¿Qué primera línea le sirve más?",
          ],
          options: [
            {
              en: "I recommend Vendor B, and I need your decision by Thursday so we can sign this month.",
              ok: true,
              why: [
                "Recommendation, action and deadline in one sentence. She knows what you think and what she has to do.",
                "Recomendación, acción y fecha límite en una oración. Sabe qué piensas y qué le toca hacer.",
              ],
            },
            {
              en: "Over the past three weeks, my team and I evaluated two logistics vendors against six criteria.",
              ok: false,
              why: [
                "True and professional, but it starts the story at the beginning. The decision she owes you is still invisible.",
                "Cierto y profesional, pero empieza la historia desde el principio. La decisión que te debe sigue sin verse.",
              ],
            },
            {
              en: "Attached is the vendor comparison. Let me know your thoughts when you have a chance.",
              ok: false,
              why: [
                "It hands her the analysis to do again, with no recommendation and no date. <em>When you have a chance</em> tells her it can wait.",
                "Le pasas el análisis para que lo vuelva a hacer, sin recomendación y sin fecha. <em>When you have a chance</em> le dice que puede esperar.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A client launch will slip by one week because a security review found a problem that is now fixed. You are writing to the client.",
            "El lanzamiento de un cliente se va a retrasar una semana porque una revisión de seguridad encontró un problema que ya quedó resuelto. Le escribes al cliente.",
          ],
          options: [
            {
              en: "I want to share some news regarding the project timeline and the results of our security review.",
              ok: false,
              why: [
                "It announces that news exists without giving it. The client reads on already worried.",
                "Anuncia que hay noticias sin darlas. El cliente sigue leyendo ya con preocupación.",
              ],
            },
            {
              en: "The launch is moving from May 12 to May 19. Our security review found one problem, which is now fixed, and we need the week to retest.",
              ok: true,
              why: [
                "The new date first, then the cause and its status. The client can update their own plans after one sentence.",
                "Primero la nueva fecha, luego la causa y cómo va. El cliente puede ajustar sus planes después de una oración.",
              ],
            },
            {
              en: "As part of our commitment to quality, we run a complete security review before every launch.",
              ok: false,
              why: [
                "This sounds like preparation for bad news, and readers recognize it. Give the date; the commitment shows in the fix.",
                "Suena a preparación para una mala noticia, y quien lee lo reconoce. Da la fecha; el compromiso se nota en la solución.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Your manager writes: <em>Is the pricing analysis ready?</em> It is not. You need two more days because the finance data arrived late.",
            "Tu jefa escribe: <em>Is the pricing analysis ready?</em> No está listo. Necesitas dos días más porque los datos de finanzas llegaron tarde.",
          ],
          options: [
            {
              en: "Finance sent the data on Tuesday instead of last Friday, so we have been working with less time than planned.",
              ok: false,
              why: [
                "She asked a yes-or-no question and got a cause. It also reads as an excuse because the answer is missing.",
                "Hizo una pregunta de sí o no y recibió una causa. Además se lee como excusa porque falta la respuesta.",
              ],
            },
            {
              en: "We're making good progress and should have it to you very soon.",
              ok: false,
              why: [
                "Friendly, but it avoids the answer and gives no date. She will have to ask again.",
                "Amable, pero evita la respuesta y no da fecha. Va a tener que preguntar otra vez.",
              ],
            },
            {
              en: "Not yet. You'll have it Thursday by noon. The finance data arrived four days late.",
              ok: true,
              why: [
                "Answer, new date, reason, in that order. A plain <em>Not yet</em> with a firm date is more reassuring than a soft maybe.",
                "Respuesta, nueva fecha, razón, en ese orden. Un <em>Not yet</em> directo con fecha firme tranquiliza más que un quizá suave.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You need last year's return rates from Priya, an analyst on another team who has never worked with you.",
            "Necesitas las tasas de devolución del año pasado y las tiene Priya, analista de otro equipo que nunca trabajó contigo.",
          ],
          options: [
            {
              en: "Hi Priya, I'm Elena from the Mexico City operations team. Could you send me last year's return rates by region by Friday? I need them for a supplier review on the 20th.",
              ok: true,
              why: [
                "One line of who you are, then the request, the date and the reason. A stranger needs exactly that much context.",
                "Una línea de quién eres, luego la petición, la fecha y la razón. Alguien que no te conoce necesita justo ese contexto.",
              ],
            },
            {
              en: "Hi Priya, my name is Elena and I work in the Mexico City operations team, where we are currently reviewing our suppliers for next year. As part of this process we are analyzing several indicators.",
              ok: false,
              why: [
                "Two sentences in, Priya knows your project and still does not know what you want from her.",
                "Después de dos oraciones, Priya conoce tu proyecto y todavía no sabe qué quieres de ella.",
              ],
            },
            {
              en: "Hi Priya, send me last year's return rates by region by Friday.",
              ok: false,
              why: [
                "The point is first, but a bare command to someone who does not know you, with no reason, is too thin. Point first still includes who you are and why.",
                "El punto va primero, pero una orden seca a alguien que no te conoce, sin razón, se queda corta. Punto primero incluye decir quién eres y por qué.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["Rewrite: move the point up", "Reescribe: sube el punto"],
      items: [
        {
          task: [
            "Rewrite so the request and its deadline come first. Keep one sentence of reason.",
            "Reescribe para que la petición y su fecha límite vayan primero. Deja una oración de razón.",
          ],
          before:
            "As you know, the annual sales conference is in October and this year we are expecting more people than last year. We have been looking at different hotels. For that reason I wanted to ask if you could confirm the number of attendees from your region.",
          after:
            "Could you confirm how many people from your region are attending the October sales conference? I need the number by Friday to reserve the hotel.",
          why: [
            "The request moved from the last sentence to the first and gained a date. The hotel search became the reason, in eight words.",
            "La petición pasó de la última oración a la primera y ganó una fecha. La búsqueda de hotel se volvió la razón, en ocho palabras.",
          ],
        },
        {
          task: [
            "This is an update with no request. Give it a first line that tells the reader the headline and that nothing is required.",
            "Este es un informe sin petición. Dale una primera línea que le diga a tu lector el titular y que no se requiere nada.",
          ],
          before:
            "I wanted to inform you about the status of the warehouse audit. The auditors were with us on Monday and Tuesday and reviewed inventory and safety procedures. They did not find any problems.",
          after:
            "No action needed: the warehouse audit closed on Tuesday with no findings. The auditors reviewed inventory and safety procedures over two days.",
          why: [
            "The result was the last sentence; now it is the first. <em>No action needed</em> tells the reader how to treat the message.",
            "El resultado era la última oración; ahora es la primera. <em>No action needed</em> le dice a tu lector cómo tratar el mensaje.",
          ],
        },
        {
          task: [
            "Answer the question first. The question was: <em>Can your team take the Canada rollout in Q3?</em>",
            "Contesta primero la pregunta. La pregunta fue: <em>Can your team take the Canada rollout in Q3?</em>",
          ],
          before:
            "Thanks for thinking of us. Right now the team is finishing the Texas rollout, which ends in July, and two people are on leave in August. Considering this, it could be possible to start in September if we get one more engineer.",
          after:
            "Yes, starting in September, if we get one more engineer. The team is on the Texas rollout through July, and two people are on leave in August.",
          why: [
            "A conditional yes is still an answer, and it belongs in the first line with its condition. The constraints follow as explanation.",
            "Un sí condicionado sigue siendo una respuesta, y va en la primera línea con su condición. Las limitaciones siguen como explicación.",
          ],
        },
        {
          task: [
            "This email has two unrelated purposes. Write the first lines of the two separate emails it should be.",
            "Este correo tiene dos propósitos sin relación. Escribe las primeras líneas de los dos correos separados que debería ser.",
          ],
          before:
            "I am writing because we need your signature on the renewal of the office lease, which expires next month, and I also wanted to ask if you could recommend someone for the open designer position.",
          after:
            "Email 1: Please sign the office lease renewal by the 25th. The current lease expires on the 30th. Email 2: Do you know a designer you'd recommend for our open position?",
          why: [
            "One is urgent and legal; the other is a favor with no deadline. In one email, the favor hides the signature or the signature buries the favor.",
            "Uno es urgente y legal; el otro es un favor sin fecha. En un solo correo, el favor esconde la firma o la firma entierra el favor.",
          ],
        },
        {
          task: [
            "Bad news. Put the fact and your proposed fix in the first two sentences.",
            "Malas noticias. Pon el hecho y la solución que propones en las dos primeras oraciones.",
          ],
          before:
            "I would like to comment on a situation that came up this week with the customs process. As you know, the regulations changed in January, and our broker has been adapting. Unfortunately, it seems that the shipment for the Dallas client will not arrive on the agreed date.",
          after:
            "The Dallas shipment will arrive five days late, on March 19, because of a customs delay. I'd like to offer the client free expedited delivery on their next order; can you approve that today?",
          why: [
            "The delay, the new date and the cause fit in one sentence. The second sentence shows a plan and asks for the one thing you need.",
            "El retraso, la nueva fecha y la causa caben en una oración. La segunda muestra un plan y pide lo único que necesitas.",
          ],
        },
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "Before writing, finish this sentence: <em>After reading this, I want you to ___.</em>",
          "Antes de escribir, completa esta oración: <em>After reading this, I want you to ___.</em>",
        ],
        [
          "The first two lines carry the request or the news, and the date. Write them as if nothing else will be read.",
          "Las dos primeras líneas llevan la petición o la noticia, y la fecha. Escríbelas como si no se fuera a leer nada más.",
        ],
        [
          "Keep background only if the reader needs it to say yes.",
          "Conserva el contexto solo si tu lector lo necesita para decir que sí.",
        ],
        [
          "One message, one purpose. Two unrelated requests are two emails.",
          "Un mensaje, un propósito. Dos peticiones sin relación son dos correos.",
        ],
        [
          "Context first is good manners in Spanish. In American business English, the point first is the good manners.",
          "En español, el contexto primero es buena educación. En el inglés de negocios estadounidense, la buena educación es el punto primero.",
        ],
      ],
    },
  ],
};
