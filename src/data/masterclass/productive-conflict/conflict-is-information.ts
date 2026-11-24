import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "conflict-is-information",
  slugEs: "el-conflicto-es-informacion",
  title: ["Conflict Is Information", "El Conflicto Es Información"],
  summary: [
    "A disagreement tells you what the other person is protecting, and this lesson shows you how to read it, what makes it escalate, and what you do by default when the pressure is on.",
    "Un desacuerdo te dice qué está protegiendo la otra persona, y esta lección te enseña a leerlo, a ver qué lo hace escalar y a reconocer qué haces por reflejo cuando hay presión.",
  ],
  description: [
    "A disagreement shows what the other person is protecting. Learn what escalates conflict in English and find your own default under pressure.",
    "Un desacuerdo te muestra qué protege la otra persona. Aprende qué hace escalar un conflicto en inglés y descubre tu reacción bajo presión.",
  ],
  minutes: 15,
  blocks: [
    {
      t: "p",
      html: [
        "You are in the weekly sync with the US team. You present the rollout date, and Marcus says, in front of eight people, <em>“I don't think that timeline is realistic.”</em> Your pulse goes up. In the next five seconds you will do one of three things: go quiet and let it pass, agree to something you don't believe, or answer more sharply than you meant to. An hour later you will think of exactly what you should have said, in perfect English.",
        "Estás en la junta semanal con el equipo de Estados Unidos. Presentas la fecha del lanzamiento y Marcus dice, frente a ocho personas: <em>“I don't think that timeline is realistic.”</em> Se te acelera el pulso. En los siguientes cinco segundos vas a hacer una de tres cosas: quedarte en silencio y dejarlo pasar, aceptar algo en lo que no crees o contestar más fuerte de lo que querías. Una hora después se te va a ocurrir exactamente lo que debiste decir, en un inglés perfecto.",
      ],
    },
    {
      t: "p",
      html: [
        "That gap between what you know and what comes out under pressure is what this course closes. Your English is already good enough for the calm version of that conversation. The tense version needs specific moves and specific sentences, practiced out loud until they are available when your heart rate is up. This first lesson gives you the map: what a disagreement is telling you, what turns it into a fight, and what you personally tend to do when it starts.",
        "Esa distancia entre lo que sabes y lo que te sale bajo presión es lo que este curso cierra. Tu inglés ya alcanza para la versión tranquila de esa conversación. La versión tensa necesita movimientos concretos y frases concretas, practicadas en voz alta hasta que estén disponibles cuando traes el pulso acelerado. Esta primera lección te da el mapa: qué te está diciendo un desacuerdo, qué lo convierte en pleito y qué tiendes a hacer tú cuando empieza.",
      ],
    },
    {
      t: "idea",
      title: ["Conflict is information", "El conflicto es información"],
      html: [
        "When someone pushes back, they are showing you what they are protecting: a deadline, a budget, their team's workload, their credibility with their own boss. Marcus is probably protecting a promise he made to someone about that date. If you hear his sentence as an attack, you defend, and you learn nothing. If you hear it as information, you ask, and you find out what the conversation is really about. Aim to walk out with a better decision and the relationship intact. Winning the exchange is a different goal, and it usually costs you both of those.",
        "Cuando alguien te cuestiona, te está mostrando qué protege: una fecha, un presupuesto, la carga de trabajo de su equipo, su credibilidad ante su propio jefe. Marcus probablemente está protegiendo algo que le prometió a alguien sobre esa fecha. Si escuchas su frase como un ataque, te defiendes y no aprendes nada. Si la escuchas como información, preguntas y descubres de qué se trata en realidad la conversación. La meta es salir con una mejor decisión y con la relación intacta. Ganar el intercambio es otra meta, y casi siempre te cuesta esas dos cosas.",
      ],
    },
    {
      t: "p",
      html: [
        "Two things get confused here. <b>Disagreement</b> is two people holding different views about a plan, a number, or a priority. Teams need it; a meeting where nobody disagrees is a meeting where problems stay hidden. <b>Friction</b> is everything added on top that makes the other person feel attacked. The disagreement is the useful part. The friction is the part that damages. Four things produce nearly all of it.",
        "Aquí se confunden dos cosas. El <b>desacuerdo</b> son dos personas con opiniones distintas sobre un plan, una cifra o una prioridad. Los equipos lo necesitan; una junta donde nadie difiere es una junta donde los problemas se quedan escondidos. La <b>fricción</b> es todo lo que se le agrega encima y hace que la otra persona se sienta atacada. El desacuerdo es la parte útil. La fricción es la que daña. Casi toda sale de cuatro cosas.",
      ],
    },
    {
      t: "list",
      ordered: true,
      items: [
        [
          "<b>Tone.</b> Speed and volume carry more than the words. The same sentence said fast and loud is an attack; said slowly and at normal volume, it is a point of view.",
          "<b>El tono.</b> La velocidad y el volumen pesan más que las palabras. La misma frase dicha rápido y fuerte es un ataque; dicha despacio y a volumen normal, es un punto de vista.",
        ],
        [
          "<b>Absolutes.</b> <em>Always</em>, <em>never</em>, <em>every time</em>, <em>nobody</em>. They are almost never true, so the other person stops discussing the issue and starts hunting for the one exception.",
          "<b>Los absolutos.</b> <em>Always</em>, <em>never</em>, <em>every time</em>, <em>nobody</em>. Casi nunca son ciertos, así que la otra persona deja de discutir el tema y se pone a buscar la excepción.",
        ],
        [
          "<b>“You” statements.</b> <em>You didn't</em>, <em>you should have</em>, <em>you people</em>. A sentence that starts with <em>you</em> plus a failure is heard as a verdict on the person.",
          "<b>Las frases con “you”.</b> <em>You didn't</em>, <em>you should have</em>, <em>you people</em>. Una frase que empieza con <em>you</em> más una falla se escucha como un veredicto sobre la persona.",
        ],
        [
          "<b>Audience.</b> A challenge that is fine one-on-one becomes a threat to someone's standing when their boss or their team is listening. People defend their reputation harder than they defend their idea.",
          "<b>El público.</b> Un cuestionamiento que es aceptable a solas se vuelve una amenaza a la imagen de alguien cuando su jefe o su equipo están escuchando. La gente defiende su reputación con más fuerza que su idea.",
        ],
      ],
    },
    {
      t: "compare",
      title: [
        "The same disagreement, with and without the friction",
        "El mismo desacuerdo, con y sin fricción",
      ],
      labels: [
        ["Friction", "Fricción"],
        ["Disagreement", "Desacuerdo"],
      ],
      rows: [
        {
          weak: "You never loop us in until it's too late.",
          strong: "We found out about the change on Thursday. That left us one day to adjust.",
          why: [
            "An absolute plus <em>you</em>. The strong version gives the one fact that matters and its cost. There is nothing in it to argue with.",
            "Un absoluto más <em>you</em>. La versión fuerte da el único dato que importa y lo que costó. No hay nada ahí que se pueda discutir.",
          ],
        },
        {
          weak: "Your forecast is wrong.",
          strong: "I'm getting a different number for Q3. Can we compare inputs?",
          why: [
            "<em>Your forecast is wrong</em> judges the person's work. <em>I'm getting a different number</em> reports a gap between two numbers and invites both people to look at it.",
            "<em>Your forecast is wrong</em> juzga el trabajo de la persona. <em>I'm getting a different number</em> reporta una diferencia entre dos cifras e invita a los dos a revisarla.",
          ],
        },
        {
          weak: "That's not what we agreed. You changed it.",
          strong: "My notes say we agreed on two regions. This version has four. What changed?",
          why: [
            "The weak line assigns guilt before knowing the facts. The strong one puts your evidence on the table and leaves room for a reason you have not heard yet.",
            "La versión débil asigna culpa antes de conocer los hechos. La fuerte pone tu evidencia sobre la mesa y deja espacio para una razón que todavía no conoces.",
          ],
        },
        {
          weak: "Everybody knows this vendor is a disaster.",
          strong:
            "This vendor missed two of the last three delivery dates. I'm not comfortable renewing.",
          why: [
            "<em>Everybody knows</em> recruits an invisible crowd against the person who chose the vendor. A count and a clear position do the same job without cornering anyone.",
            "<em>Everybody knows</em> recluta a una multitud invisible contra quien eligió al proveedor. Un conteo y una postura clara logran lo mismo sin acorralar a nadie.",
          ],
        },
        {
          weak: "(In front of the client) That number is wrong, Priya.",
          strong: "(In front of the client) Let us confirm that number and send it this afternoon.",
          why: [
            "Audience. Correcting a colleague in front of a client costs her standing and costs your company credibility. Protect the number in public and fix it in private.",
            "El público. Corregir a una colega frente al cliente le cuesta imagen a ella y credibilidad a tu empresa. Protege la cifra en público y corrígela en privado.",
          ],
        },
        {
          weak: "Why is your team always the bottleneck?",
          strong:
            "The last two releases waited on security review. What would help that go faster?",
          why: [
            "<em>Always</em>, <em>your team</em>, and a label. The strong version names two events and asks about the process, which is the thing that can actually change.",
            "<em>Always</em>, <em>your team</em> y una etiqueta. La versión fuerte menciona dos hechos y pregunta por el proceso, que es lo que sí puede cambiar.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: [
        "The gap between a softened no and a spoken one",
        "La distancia entre un no suavizado y un no dicho",
      ],
    },
    {
      t: "p",
      html: [
        "In Mexican professional culture, open disagreement in a meeting can feel rude, so a no is often delivered sideways: “lo vemos”, “déjame revisarlo”, “está complicado”. Everyone in the room understands. Translated into English, the signal disappears. <em>Let me look into it</em> sounds to an American colleague like a yes in progress. In most US workplaces, the respectful move is to say the disagreement out loud, early, in the meeting; staying quiet and raising it later can look like you were not straight with them. Neither habit is the wrong one. They are two codes, and the misreading happens at the border between them.",
        "En la cultura profesional mexicana, el desacuerdo abierto en una junta puede sentirse grosero, así que el no muchas veces se entrega de lado: “lo vemos”, “déjame revisarlo”, “está complicado”. Todos en la sala lo entienden. Traducida al inglés, la señal desaparece. <em>Let me look into it</em> le suena a un colega estadounidense como un sí en proceso. En la mayoría de los lugares de trabajo en Estados Unidos, lo respetuoso es decir el desacuerdo en voz alta, pronto y en la junta; quedarte en silencio y sacarlo después puede parecer que no hablaste con franqueza. Ninguna de las dos costumbres es la equivocada. Son dos códigos, y el malentendido ocurre en la frontera entre ambos.",
      ],
    },
    {
      t: "model",
      title: [
        "What Luis meant, and what Dana heard",
        "Lo que Luis quiso decir y lo que Dana escuchó",
      ],
      context: [
        "Dana, a program manager in Chicago, wants the Monterrey plant to start a second shift on the new line by March 1. Luis, the plant operations lead, knows he cannot hire and train operators that fast.",
        "Dana, gerente de programa en Chicago, quiere que la planta de Monterrey arranque un segundo turno en la línea nueva el 1 de marzo. Luis, líder de operaciones de la planta, sabe que no puede contratar y capacitar operadores tan rápido.",
      ],
      lines: [
        {
          who: "Dana",
          en: "So we're good to start the second shift March 1?",
          note: [
            "A closed question. She expects yes or no.",
            "Una pregunta cerrada. Espera un sí o un no.",
          ],
        },
        {
          who: "Luis",
          en: "It's a little complicated with the hiring. Let me look into it with HR.",
          note: [
            "In Luis's code, this is a no. <em>A little complicated</em> means <em>very difficult</em>.",
            "En el código de Luis, esto es un no. <em>A little complicated</em> quiere decir <em>muy difícil</em>.",
          ],
        },
        {
          who: "Dana",
          en: "Great, thanks. I'll tell the customer we're on track.",
          note: [
            "Dana heard: small issue, he is handling it. She just made a commitment to a customer.",
            "Dana escuchó: un detalle menor, él lo está resolviendo. Acaba de comprometerse con un cliente.",
          ],
        },
        {
          who: "Luis",
          en: "Okay. We'll do our best.",
          note: [
            "He does not want to contradict her twice. To Dana, <em>we'll do our best</em> confirms the date.",
            "No quiere contradecirla dos veces. Para Dana, <em>we'll do our best</em> confirma la fecha.",
          ],
        },
        {
          who: "Dana",
          en: "(Three weeks later) You told me March 1 was fine. Why am I hearing about this now?",
          note: [
            "Now there is a real conflict, and it is about trust. The original disagreement, about a date, would have been easy.",
            "Ahora sí hay un conflicto, y es de confianza. El desacuerdo original, sobre una fecha, habría sido fácil.",
          ],
        },
        {
          who: "Luis",
          en: "(What would have worked in line two) March 1 won't work. Hiring and training take six weeks, so the earliest realistic date is March 22.",
          note: [
            "One clear sentence, one reason, one alternative. It is warmer than the misunderstanding it prevents.",
            "Una frase clara, una razón, una alternativa. Es más cálida que el malentendido que evita.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: [
        "The opposite failure: translated bluntness",
        "La falla contraria: la franqueza traducida",
      ],
      html: [
        "When a Spanish speaker decides to be direct in English, the sentence often comes out word for word: <span class='x'>✗</span> <em>You are wrong.</em> <span class='x'>✗</span> <em>That is not possible.</em> <span class='x'>✗</span> <em>I am not agree.</em> In Spanish, “no es posible” can be said gently. In English, <em>That is not possible</em> with no contraction and no reason sounds like a door closing, and <em>You are wrong</em> is something Americans rarely say to a colleague's face. English directness is built differently: contractions, a reason, and the plan as the subject instead of the person. <span class='ok'>✓</span> <em>That won't work for us, and here's why.</em> <span class='ok'>✓</span> <em>I don't agree with that approach.</em> Lesson 3 builds this register in detail.",
        "Cuando alguien que habla español decide hablar directo en inglés, la frase muchas veces sale palabra por palabra: <span class='x'>✗</span> <em>You are wrong.</em> <span class='x'>✗</span> <em>That is not possible.</em> <span class='x'>✗</span> <em>I am not agree.</em> En español, “no es posible” se puede decir con suavidad. En inglés, <em>That is not possible</em>, sin contracción y sin una razón, suena a puerta que se cierra, y <em>You are wrong</em> es algo que en Estados Unidos casi nadie le dice de frente a un colega. La franqueza en inglés se construye de otra forma: contracciones, una razón y el plan como sujeto en lugar de la persona. <span class='ok'>✓</span> <em>That won't work for us, and here's why.</em> <span class='ok'>✓</span> <em>I don't agree with that approach.</em> La lección 3 construye ese registro a detalle.",
      ],
    },
    {
      t: "framework",
      title: ["Your default under pressure", "Tu reacción por defecto bajo presión"],
      lead: [
        "Everyone has one of these on a bad day. Read all three, hear the sample line in your own voice, and pick the one that sounds most like you. That is the habit the rest of the course is working against.",
        "Todos tenemos una de estas en un mal día. Lee las tres, escucha la frase de ejemplo en tu propia voz y elige la que más se parece a ti. Ese es el hábito contra el que trabaja el resto del curso.",
      ],
      steps: [
        {
          label: ["Avoid", "Evitar"],
          html: [
            "You go quiet, change the subject, or postpone. It feels polite and safe. The cost: the other side reads silence as agreement, the problem grows, and you end up having a harder conversation later with less trust.",
            "Te quedas en silencio, cambias de tema o lo pospones. Se siente educado y seguro. El costo: la otra parte lee el silencio como acuerdo, el problema crece y terminas teniendo una conversación más difícil después, con menos confianza.",
          ],
          say: "Let's see how it goes. We can talk about it later.",
        },
        {
          label: ["Accommodate", "Ceder"],
          html: [
            "You say yes to end the tension. It feels cooperative. The cost: you have committed to something you do not believe in or cannot deliver, and when it fails, the failure is yours.",
            "Dices que sí para terminar con la tensión. Se siente como cooperar. El costo: te comprometiste a algo en lo que no crees o que no puedes cumplir, y cuando falle, la falla va a ser tuya.",
          ],
          say: "Sure, no problem. We'll make it work.",
        },
        {
          label: ["Attack", "Atacar"],
          html: [
            "You defend fast and hard: you correct, you interrupt, you raise the evidence and your volume together. It feels like standing up for your team. The cost: you may be right about the facts and still lose the room, because people remember how the exchange felt longer than who was correct.",
            "Te defiendes rápido y fuerte: corriges, interrumpes, subes la evidencia y el volumen al mismo tiempo. Se siente como defender a tu equipo. El costo: puedes tener razón en los hechos y aun así perder la sala, porque la gente recuerda cómo se sintió el intercambio por más tiempo que quién tenía la razón.",
          ],
          say: "That's just not true. We've explained this three times already.",
        },
      ],
    },
    {
      t: "phrases",
      title: ["One first move for each default", "Un primer movimiento para cada reacción"],
      items: [
        {
          en: "I have a concern about this, and I'd rather raise it now than later.",
          use: [
            "If you avoid. It gets the disagreement into the room in one sentence, and it frames speaking up as a courtesy.",
            "Si tiendes a evitar. Mete el desacuerdo a la sala en una frase y presenta el hablar como una cortesía.",
          ],
        },
        {
          en: "I'm not on board with this yet.",
          use: [
            "If you avoid. Short, calm, and impossible to mistake for agreement. <em>Yet</em> keeps the door open.",
            "Si tiendes a evitar. Corta, tranquila e imposible de confundir con un sí. <em>Yet</em> deja la puerta abierta.",
          ],
        },
        {
          en: "Before I say yes, I need to check one thing.",
          use: [
            "If you accommodate. It stops the automatic yes. Use it only when you really will check and come back with an answer.",
            "Si tiendes a ceder. Detiene el sí automático. Úsala solo cuando de verdad vas a revisar y a regresar con una respuesta.",
          ],
        },
        {
          en: "I don't want to agree to something I can't deliver.",
          use: [
            "If you accommodate. It turns your hesitation into reliability, which is what the other person wants from you anyway.",
            "Si tiendes a ceder. Convierte tu duda en confiabilidad, que de todos modos es lo que la otra persona quiere de ti.",
          ],
        },
        {
          en: "I can't commit to that date. Here's what I can commit to.",
          use: [
            "If you accommodate. A clear no followed immediately by something real.",
            "Si tiendes a ceder. Un no claro seguido de inmediato por algo real.",
          ],
        },
        {
          en: "Let me back up. That came out sharper than I meant.",
          use: [
            "If you attack. A five-second repair in the moment. It costs nothing and resets the tone.",
            "Si tiendes a atacar. Una reparación de cinco segundos en el momento. No cuesta nada y reinicia el tono.",
          ],
        },
        {
          en: "Tell me what worries you about it.",
          use: [
            "If you attack. It replaces your counter-argument with a request for the information the conflict is carrying.",
            "Si tiendes a atacar. Cambia tu contraargumento por una petición de la información que trae el conflicto.",
          ],
        },
        {
          en: "What am I missing?",
          use: [
            "For all three. It assumes the other person has a reason, which is usually true and always disarming.",
            "Para las tres. Da por hecho que la otra persona tiene una razón, lo cual casi siempre es cierto y siempre desarma.",
          ],
        },
        {
          en: "Can you and I pick this up right after the meeting?",
          use: [
            "When the audience is the problem. It removes the spectators without dropping the issue.",
            "Cuando el problema es el público. Quita a los espectadores sin soltar el tema.",
          ],
        },
      ],
    },
    {
      t: "choice",
      title: ["Read the situation, choose the response", "Lee la situación y elige la respuesta"],
      items: [
        {
          prompt: [
            "In a weekly sync with eight people, Marcus says your team's estimates “have never been reliable.” Your team hit its last three dates.",
            "En una junta semanal con ocho personas, Marcus dice que las estimaciones de tu equipo “have never been reliable”. Tu equipo cumplió sus últimas tres fechas.",
          ],
          options: [
            {
              en: "That's not true, and you know it. We hit the last three dates.",
              ok: false,
              why: [
                "The fact is right, but <em>and you know it</em> accuses him of lying in front of an audience. Now he has to defend his honesty, and the estimate is forgotten.",
                "El dato es correcto, pero <em>and you know it</em> lo acusa de mentir frente a un público. Ahora tiene que defender su honestidad y la estimación quedó olvidada.",
              ],
            },
            {
              en: "Okay. We'll take another look at the estimate.",
              ok: false,
              why: [
                "This lets the absolute stand. Eight people just heard you accept that your estimates are unreliable.",
                "Esto deja el absoluto en pie. Ocho personas acaban de oír que aceptas que tus estimaciones no son confiables.",
              ],
            },
            {
              en: "We hit the last three dates, so I want to understand what you're seeing. Can you and I go through it right after this?",
              ok: true,
              why: [
                "It corrects the record with one fact, treats his comment as information, and moves the rest away from the audience.",
                "Corrige el registro con un dato, trata su comentario como información y saca el resto de la vista del público.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Dana proposes moving the vendor review two weeks earlier. Your team is in an audit until the 18th and cannot do it.",
            "Dana propone adelantar dos semanas la revisión del proveedor. Tu equipo está en auditoría hasta el 18 y no puede hacerlo.",
          ],
          options: [
            {
              en: "Let me check with the team and get back to you.",
              ok: false,
              why: [
                "You already know the answer. Dana will hear a probable yes and plan around it.",
                "Ya sabes la respuesta. Dana va a escuchar un sí probable y va a planear con base en eso.",
              ],
            },
            {
              en: "Two weeks earlier won't work for us. We're in the audit until the 18th. The earliest I can do is the 21st.",
              ok: true,
              why: [
                "A clear no, the reason, and a real date. Dana can plan with this today.",
                "Un no claro, la razón y una fecha real. Dana puede planear con esto hoy mismo.",
              ],
            },
            {
              en: "That is impossible for us.",
              ok: false,
              why: [
                "Clear, but it closes the door and gives Dana nothing to work with. Without a reason it sounds like a refusal to try.",
                "Es claro, pero cierra la puerta y no le da a Dana nada con qué trabajar. Sin una razón, suena a que no quieres intentarlo.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Priya messages you directly: “This budget is 30% higher than what we discussed.” The scope grew after your last conversation.",
            "Priya te escribe por mensaje directo: “This budget is 30% higher than what we discussed.” El alcance creció después de su última conversación.",
          ],
          options: [
            {
              en: "The scope changed after we talked, so of course the number changed.",
              ok: false,
              why: [
                "True, and <em>of course</em> tells her she should have known. She will defend herself instead of discussing the budget.",
                "Es cierto, y <em>of course</em> le dice que debió saberlo. Va a defenderse en lugar de hablar del presupuesto.",
              ],
            },
            {
              en: "Sorry about that. I'll see what I can cut.",
              ok: false,
              why: [
                "You gave up ground before finding out what she is protecting. The total may be fine; she may only need to explain it to her director.",
                "Cediste terreno antes de saber qué está protegiendo. Tal vez el total está bien y solo necesita poder explicárselo a su director.",
              ],
            },
            {
              en: "It is higher, you're right. Is the problem the total, or that it came as a surprise?",
              ok: true,
              why: [
                "It confirms the fact and asks what the objection is really about. Those are two different problems with two different fixes.",
                "Confirma el dato y pregunta de qué se trata en realidad la objeción. Son dos problemas distintos con dos soluciones distintas.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Last week, to end an uncomfortable moment, you said yes to delivering the report by the 30th. You cannot. Today Elena says, “As we agreed, the report lands on the 30th.”",
            "La semana pasada, para terminar un momento incómodo, dijiste que sí a entregar el reporte el día 30. No puedes. Hoy Elena dice: “As we agreed, the report lands on the 30th.”",
          ],
          options: [
            {
              en: "Well, I never actually agreed to that.",
              ok: false,
              why: [
                "You did, and she remembers. Rewriting the conversation turns a scheduling problem into a trust problem.",
                "Sí lo aceptaste, y ella se acuerda. Reescribir la conversación convierte un problema de calendario en un problema de confianza.",
              ],
            },
            {
              en: "I said yes to the 30th last week, and I shouldn't have. I can't deliver it by then. I can have it to you on the 6th.",
              ok: true,
              why: [
                "It owns the earlier yes, corrects it now, and offers a date you can keep. Uncomfortable for ten seconds, and far cheaper than missing the 30th.",
                "Asume el sí anterior, lo corrige ahora y ofrece una fecha que sí puedes cumplir. Incómodo por diez segundos, y mucho más barato que fallar el día 30.",
              ],
            },
            {
              en: "Yes, we're working on it.",
              ok: false,
              why: [
                "A second yes on top of the first. Each one makes the eventual conversation worse.",
                "Un segundo sí encima del primero. Cada uno empeora la conversación que tarde o temprano va a llegar.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Diagnose a real one, out loud", "Diagnostica uno real, en voz alta"],
      prompt: [
        "Think of the last work disagreement that went worse than it should have. In English, out loud, say what it was about, what you think the other person was protecting, and which default you went to. Record yourself on your phone if you can.",
        "Piensa en el último desacuerdo de trabajo que salió peor de lo que debía. En inglés y en voz alta, di de qué se trató, qué crees que estaba protegiendo la otra persona y a cuál reacción te fuiste. Si puedes, grábate con tu celular.",
      ],
      think: 30,
      speak: 45,
      frame:
        "The disagreement was about ___. I think what they were protecting was ___. My default was to ___, and what I actually said was ___.",
      checklist: [
        [
          "I named what the other person was protecting in concrete terms (a date, a budget, their standing), not as a personality flaw.",
          "Dije qué estaba protegiendo la otra persona en términos concretos (una fecha, un presupuesto, su imagen), no como un defecto de personalidad.",
        ],
        [
          "I named my own default honestly: avoid, accommodate, or attack.",
          "Nombré mi propia reacción con honestidad: evitar, ceder o atacar.",
        ],
        [
          "I described the disagreement without <em>always</em>, <em>never</em>, or a sentence starting with <em>they</em> plus a failure.",
          "Describí el desacuerdo sin <em>always</em>, sin <em>never</em> y sin una frase que empezara con <em>they</em> más una falla.",
        ],
        [
          "I spoke at a pace I could keep up in a real meeting.",
          "Hablé a un ritmo que podría sostener en una junta real.",
        ],
      ],
      model:
        "The disagreement was about who owned the customer escalation. I think what Marcus was protecting was his team's time, because they had just come off a rough quarter. My default was to accommodate. What I actually said was, 'Sure, we'll take it,' and then my team worked two weekends on something that wasn't ours.",
    },
    {
      t: "takeaways",
      items: [
        [
          "A disagreement shows you what the other person is protecting. Ask about that before you defend your position.",
          "Un desacuerdo te muestra qué está protegiendo la otra persona. Pregunta por eso antes de defender tu postura.",
        ],
        [
          "Disagreement is useful. Friction is what damages, and it comes from tone, absolutes, “you” statements, and audience.",
          "El desacuerdo es útil. Lo que daña es la fricción, y viene del tono, los absolutos, las frases con “you” y el público.",
        ],
        [
          "A softened no translated into English is heard as a yes. A blunt no translated word for word is heard as an attack. The course teaches the register in between.",
          "Un no suavizado y traducido al inglés se escucha como un sí. Un no directo traducido palabra por palabra se escucha como un ataque. El curso enseña el registro intermedio.",
        ],
        [
          "Know your default: avoid, accommodate, or attack. Keep one first sentence ready for the moment you feel it start.",
          "Conoce tu reacción por defecto: evitar, ceder o atacar. Ten lista una primera frase para el momento en que la sientas venir.",
        ],
      ],
    },
  ],
};
