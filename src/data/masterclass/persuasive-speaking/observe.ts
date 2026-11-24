import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "observe",
  slugEs: "observar",
  title: ["Observe: Say Only What You Can See", "Observar: Di Solo lo que Puedes Ver"],
  summary: [
    "Describe what is in front of you in facts anyone could verify, in one order you choose and keep, before you say what any of it means.",
    "Describe lo que tienes enfrente con hechos que cualquiera podría verificar, en un orden que eliges y mantienes, antes de decir qué significa.",
  ],
  description: [
    "Learn to report facts in English without spin: separate what you see from what you conclude, pick an order, and use the language of description.",
    "Aprende a reportar hechos en inglés sin adornos: separa lo que ves de lo que concluyes, elige un orden y usa el lenguaje de la descripción.",
  ],
  minutes: 16,
  blocks: [
    {
      t: "p",
      html: [
        "Your weekly update, more or less as you gave it: <em>The integration is going well, the team is really committed, and the vendor has been a little difficult.</em> Your VP nods and asks, <em>Okay, but where are we?</em> You said three sentences and she did not get one fact. Everything you gave her was a conclusion, and she has no way to tell whether she would reach the same one.",
        "Tu reporte semanal, más o menos como lo diste: <em>The integration is going well, the team is really committed, and the vendor has been a little difficult.</em> Tu VP asiente y pregunta: <em>Okay, but where are we?</em> Dijiste tres oraciones y ella no recibió un solo hecho. Todo lo que le diste fueron conclusiones, y no tiene forma de saber si ella llegaría a las mismas.",
      ],
    },
    {
      t: "p",
      html: [
        "Conclusions feel like information because they took work to reach. To the listener they are the least useful part: <em>going well</em> hides the numbers, <em>committed</em> hides what people did, <em>difficult</em> hides what the vendor said. This lesson trains the job underneath all of that, which is saying what is there. It is the first half of logos, and it is harder than it sounds.",
        "Las conclusiones se sienten como información porque costó trabajo llegar a ellas. Para quien escucha son la parte menos útil: <em>going well</em> esconde los números, <em>committed</em> esconde lo que hizo la gente, <em>difficult</em> esconde lo que dijo el proveedor. Esta lección entrena el paso que está debajo de todo eso, que es decir lo que hay. Es la primera mitad de logos, y es más difícil de lo que suena.",
      ],
    },
    {
      t: "idea",
      title: ["Facts only", "Facts only: solo hechos"],
      html: [
        "An observation is something anyone standing where you stand would also see: a number, an object, a position, an action in progress, the exact words someone used. Test every sentence with one question: <em>Do I see that, or am I concluding it?</em> If two honest people could look at the same thing and disagree with your sentence, it is a conclusion. Save it. It will be worth more in the next lesson, with its evidence already on the table.",
        "Una observación es algo que cualquiera, parado donde tú estás, también vería: un número, un objeto, una posición, una acción en curso, las palabras exactas que alguien usó. Pon a prueba cada oración con una pregunta: <em>Do I see that, or am I concluding it?</em> Si dos personas honestas pudieran ver lo mismo y no estar de acuerdo con tu oración, es una conclusión. Guárdala. Va a pesar más en la siguiente lección, con su evidencia ya sobre la mesa.",
      ],
    },
    {
      t: "compare",
      title: ["Conclusion vs. observation", "Conclusión vs. observación"],
      labels: [
        ["Conclusion", "Conclusión"],
        ["Observation", "Observación"],
      ],
      rows: [
        {
          weak: "The client is unhappy.",
          strong:
            "The client has sent three emails since Monday, and she copied her director on the last one.",
          why: [
            "<em>Unhappy</em> is your reading of her. The emails and the copy line are what happened, and the listener can weigh them.",
            "<em>Unhappy</em> es tu lectura de ella. Los correos y la copia son lo que pasó, y quien escucha puede sopesarlos.",
          ],
        },
        {
          weak: "The team is working really hard.",
          strong: "Four of our six engineers were online on Saturday.",
          why: [
            "Praise tells the room how you feel about the team. The count tells them what the team did.",
            "El elogio le dice a la sala cómo te sientes con el equipo. El conteo le dice lo que el equipo hizo.",
          ],
        },
        {
          weak: "The launch didn't go very well.",
          strong:
            "We had 212 sign-ups on day one against a target of 500, and checkout was down for forty minutes.",
          why: [
            "Two numbers and a duration. Whether that is a disaster or a slow start is now something the room can decide with you.",
            "Dos números y una duración. Si eso fue un desastre o un arranque lento ya es algo que la sala puede decidir contigo.",
          ],
        },
        {
          weak: "He's obviously not interested.",
          strong: "He hasn't answered my last two emails, and he declined Thursday's call.",
          why: [
            "<em>Obviously</em> is a signal that a conclusion is coming without its evidence. There are other reasons a person goes quiet.",
            "<em>Obviously</em> es la señal de que viene una conclusión sin su evidencia. Hay otras razones por las que alguien deja de contestar.",
          ],
        },
        {
          weak: "The vendor is unreliable.",
          strong: "The vendor has missed two of the last three delivery dates.",
          why: [
            "A character judgment starts a fight. A count of missed dates starts a conversation about the contract.",
            "Un juicio sobre el carácter arranca un pleito. Un conteo de fechas incumplidas arranca una conversación sobre el contrato.",
          ],
        },
        {
          weak: "The warehouse is a mess.",
          strong:
            "There are pallets in two of the three aisles, and the labels on the top shelf are facing the wall.",
          why: [
            "<em>A mess</em> depends on your standards. Where the pallets are does not.",
            "<em>A mess</em> depende de tus estándares. Dónde están las tarimas, no.",
          ],
        },
        {
          weak: "She agreed to the new timeline.",
          strong: 'She said, "I can live with the 24th."',
          why: [
            "Reported agreement is a conclusion too. Her exact words let the room hear how firm the yes was.",
            "Un acuerdo reportado también es una conclusión. Sus palabras exactas dejan que la sala oiga qué tan firme fue el sí.",
          ],
        },
      ],
    },
    {
      t: "framework",
      title: ["Choose an order and keep it", "Elige un orden y mantenlo"],
      lead: [
        "Facts in random order are as hard to follow as opinions. Use the think time to pick a path through what you see.",
        "Los hechos en desorden son tan difíciles de seguir como las opiniones. Usa el tiempo de pensar para elegir una ruta por lo que ves.",
      ],
      steps: [
        {
          label: ["Name the whole thing", "Nombra el conjunto"],
          html: [
            "One sentence that tells the listener what they are about to hear described. Without it, your details have nowhere to go.",
            "Una oración que le diga a quien escucha qué le vas a describir. Sin ella, tus detalles no tienen dónde acomodarse.",
          ],
          say: "This is a workbench in a bicycle repair shop.",
        },
        {
          label: ["Announce your order", "Anuncia tu orden"],
          html: [
            "Left to right, top to bottom, near to far, largest to smallest, or for a status report, oldest to newest. Say it out loud. It helps the listener, and it stops you from jumping around.",
            "De izquierda a derecha, de arriba hacia abajo, de cerca a lejos, de lo más grande a lo más chico o, en un reporte de avance, de lo más antiguo a lo más reciente. Dilo en voz alta. Le ayuda a quien escucha, y a ti te impide andar brincando.",
          ],
          say: "I'll go from top to bottom.",
        },
        {
          label: ["Place each thing", "Ubica cada cosa"],
          html: [
            "<em>There is</em> or <em>there are</em>, the thing, and where it is. One thing or one group per sentence.",
            "<em>There is</em> o <em>there are</em>, la cosa y dónde está. Una cosa o un grupo por oración.",
          ],
          say: "There are tires hanging overhead. Below them, there's a pegboard with tools on it.",
        },
        {
          label: ["Say what is happening", "Di lo que está pasando"],
          html: [
            "For any action in progress, the present continuous: <em>is weighing</em>, <em>are waiting</em>, <em>is coming in</em>.",
            "Para cualquier acción en curso, el presente continuo: <em>is weighing</em>, <em>are waiting</em>, <em>is coming in</em>.",
          ],
          say: "Light is coming in through the window.",
        },
        {
          label: ["Stop without a verdict", "Detente sin veredicto"],
          html: [
            "When the time is up, finish the sentence you are in and stop. The pull to close with <em>so it's a very nice shop</em> is strong. Resist it; that sentence is a conclusion.",
            "Cuando se acabe el tiempo, termina la oración en la que vas y detente. La tentación de cerrar con <em>so it's a very nice shop</em> es fuerte. Resístela; esa oración es una conclusión.",
          ],
          say: "That's what I can see.",
        },
      ],
    },
    {
      t: "phrases",
      title: ["The language of description", "El lenguaje de la descripción"],
      items: [
        {
          en: "There's a ___ on the left. / There are two ___ on the right.",
          use: [
            "The workhorse. <em>There's</em> for one thing, <em>there are</em> for more than one.",
            "La frase que más vas a usar. <em>There's</em> para una cosa, <em>there are</em> para más de una.",
          ],
        },
        {
          en: "In the foreground, ___. In the background, ___.",
          use: [
            "Near to far, for a photo or a room.",
            "De cerca a lejos, para una foto o un espacio.",
          ],
        },
        {
          en: "In the center, ___. Around it, ___.",
          use: [
            "Starts from the main subject and moves outward.",
            "Empieza por el sujeto principal y avanza hacia afuera.",
          ],
        },
        {
          en: "At the top of the chart, ___. At the bottom, ___.",
          use: [
            "For slides, dashboards and tables. Note <em>at</em> the top, <em>at</em> the bottom.",
            "Para diapositivas, tableros y tablas. Fíjate: <em>at</em> the top, <em>at</em> the bottom.",
          ],
        },
        {
          en: "Next to that, ___. / Behind it, ___. / Above it, ___.",
          use: [
            "Links each new thing to the last one, so the listener can build the picture.",
            "Enlaza cada cosa nueva con la anterior, para que quien escucha pueda ir armando la imagen.",
          ],
        },
        {
          en: "Moving to the right, ___.",
          use: [
            "A spoken arrow. Tells the room you are still on your path.",
            "Una flecha hablada. Le dice a la sala que sigues en tu ruta.",
          ],
        },
        {
          en: "Someone is ___ing.",
          use: [
            "An action in progress. Present continuous, always.",
            "Una acción en curso. Presente continuo, siempre.",
          ],
        },
        {
          en: "As of this morning, ___.",
          use: [
            "Puts a time on a fact at work. A number without a time is half an observation.",
            "Le pone hora a un hecho en el trabajo. Un número sin hora es media observación.",
          ],
        },
        {
          en: "Her exact words were ___.",
          use: [
            "Reports what was said instead of what you understood.",
            "Reporta lo que se dijo en vez de lo que tú entendiste.",
          ],
        },
        {
          en: "I can't tell from here whether ___.",
          use: [
            "Marks the edge of what you can see. Saying it makes the rest more believable.",
            "Marca el límite de lo que alcanzas a ver. Decirlo hace más creíble todo lo demás.",
          ],
        },
        {
          en: "I haven't checked ___ yet.",
          use: [
            "The same honesty in a status report. Far better than a guess that sounds like a fact.",
            "La misma honestidad en un reporte de avance. Mucho mejor que una suposición que suena a hecho.",
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Picture 1: the repair shop", "Imagen 1: el taller de bicicletas"],
      prompt: [
        "Study the picture for the full minute. Choose your order and find six things you can name. Then describe it for thirty seconds to someone who cannot see it. Facts only: what is here and where it is. No guesses about the owner, no opinions about the shop.",
        "Estudia la imagen el minuto completo. Elige tu orden y encuentra seis cosas que puedas nombrar. Luego descríbela durante treinta segundos para alguien que no la puede ver. Solo hechos: qué hay y dónde está. Sin suposiciones sobre el dueño y sin opiniones sobre el taller.",
      ],
      image: {
        src: "/images/course/persuasive-speaking/bicycle-repair-shop.jpg",
        alt: [
          "A workbench in a bicycle repair shop, with a bike on a stand, tools on a pegboard and tires hanging overhead.",
          "Una mesa de trabajo en un taller de bicicletas, con una bicicleta en un soporte, herramientas en un tablero y llantas colgadas arriba.",
        ],
      },
      think: 60,
      speak: 30,
      frame: "This is ___. I'll go from ___ to ___. There's ___. There are ___. Next to that, ___.",
      checklist: [
        [
          "I named the whole scene in my first sentence.",
          "Nombré la escena completa en mi primera oración.",
        ],
        ["I said my order and kept to it.", "Dije mi orden y lo mantuve."],
        [
          "I used <em>there are</em> for every plural.",
          "Usé <em>there are</em> en todos los plurales.",
        ],
        [
          "Every sentence passes the test: <em>Do I see that, or am I concluding it?</em>",
          "Todas mis oraciones pasan la prueba: <em>Do I see that, or am I concluding it?</em>",
        ],
        ["I ended without a verdict.", "Terminé sin dar un veredicto."],
      ],
      model:
        "This is a workbench in a bicycle repair shop. I'll go from top to bottom. Overhead, there are tires hanging. Below them, there's a pegboard with tools on it, and some of the tool outlines are empty. On the bench, I can see rags, sorted bolts, a mug and a radio. There's a bike on a repair stand. Light is coming in through a window, and there's a work lamp. That's what I can see.",
    },
    {
      t: "speak",
      title: ["Picture 2: the market", "Imagen 2: el mercado"],
      prompt: [
        "This picture holds more than anyone can say in thirty seconds, so the skill is choosing. In the minute of think time, pick one order, for example from the vendor outward, or from one side of the frame to the other, and decide where you will start. Then speak, and when you are tempted to jump to something interesting on the other side, stay on your path. You will not finish the picture. That is expected.",
        "Esta imagen tiene más de lo que alguien puede decir en treinta segundos, así que la habilidad está en elegir. En el minuto de pensar, elige un orden, por ejemplo del vendedor hacia afuera, o de un lado del encuadre al otro, y decide por dónde vas a empezar. Luego habla, y cuando te den ganas de brincar a algo interesante del otro lado, quédate en tu ruta. No vas a terminar la imagen. Es lo esperado.",
      ],
      image: {
        src: "/images/course/persuasive-speaking/street-market.jpg",
        alt: [
          "A street market seen from above, with a vendor weighing tomatoes.",
          "Un mercado en la calle visto desde arriba, con una persona que pesa jitomates en un puesto.",
        ],
      },
      think: 60,
      speak: 30,
      frame:
        "This is a street market, seen from above. I'll start with ___ and move ___. A vendor is weighing tomatoes. Next to that, ___. Behind that, ___.",
      checklist: [
        [
          "I announced one order before my first detail.",
          "Anuncié un orden antes de mi primer detalle.",
        ],
        [
          "I never jumped back to something I had already passed.",
          "No me regresé a algo que ya había pasado.",
        ],
        [
          "I used the present continuous for what people are doing.",
          "Usé el presente continuo para lo que la gente está haciendo.",
        ],
        [
          "I left things out on purpose and did not speed up to fit them in.",
          "Dejé cosas fuera a propósito y no aceleré para que cupieran.",
        ],
        [
          "No sentence said what anyone is thinking or feeling.",
          "Ninguna oración dijo lo que alguien está pensando o sintiendo.",
        ],
      ],
    },
    {
      t: "h",
      text: [
        "The same job at work: status without spin",
        "El mismo paso en el trabajo: un reporte sin adornos",
      ],
    },
    {
      t: "model",
      title: ["A status report in facts", "Un reporte de avance en hechos"],
      context: [
        "Elena leads customer support. On Monday's operations call, a US vice president asks where the ticket backlog stands.",
        "Elena dirige atención a clientes. En la llamada de operaciones del lunes, un vicepresidente en Estados Unidos pregunta cómo va el rezago de tickets.",
      ],
      lines: [
        {
          en: "Here's where support stands as of eight this morning.",
          note: [
            "She names the whole thing and puts a time on it.",
            "Nombra el conjunto y le pone hora.",
          ],
        },
        {
          en: "I'll go from the biggest number to the smallest.",
          note: [
            "The order, announced. The room knows how to listen.",
            "El orden, anunciado. La sala ya sabe cómo escuchar.",
          ],
        },
        {
          en: "There are 340 open tickets. Last Monday there were 210.",
          note: [
            "Two numbers side by side. She does not say <em>a big increase</em>; the room can subtract.",
            "Dos números lado a lado. No dice <em>a big increase</em>; la sala sabe restar.",
          ],
        },
        {
          en: "About 200 of the 340 are about one thing: the invoice export.",
          note: [
            "Still an observation. She is counting, and has not yet said why.",
            "Sigue siendo una observación. Está contando, y todavía no dice por qué.",
          ],
        },
        {
          en: "Sixty tickets are more than five days old. Our target is zero.",
          note: [
            "A fact and the standard it is measured against. No adjective needed.",
            "Un hecho y el estándar contra el que se mide. No hace falta ningún adjetivo.",
          ],
        },
        {
          en: "Two agents are out this week, and one new agent started on Tuesday.",
          note: [
            "People and dates. She does not say the team is <em>short-staffed</em>; that would be a conclusion, and the room can reach it without help.",
            "Personas y fechas. No dice que al equipo <em>le falta gente</em>; eso sería una conclusión, y la sala puede llegar a ella sin ayuda.",
          ],
        },
        {
          en: "I haven't looked at the weekend numbers yet, so I can't tell you whether Saturday was better or worse.",
          note: [
            "The edge of what she has seen, stated plainly. Everything before it gains weight.",
            "El límite de lo que ha visto, dicho sin rodeos. Todo lo anterior gana peso.",
          ],
        },
        {
          en: "Those are the facts. I have a view on the cause, and I'll give you that separately.",
          note: [
            "She draws the line between observing and inferring out loud. That line is what makes a reporter trusted.",
            "Traza en voz alta la línea entre observar e inferir. Esa línea es lo que hace confiable a quien reporta.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: [
        "Hay, en, and the verb that should be moving",
        "Hay, en, y el verbo que debería estar en movimiento",
      ],
      html: [
        "Three small transfers from Spanish show up in almost every description. <b>Hay</b> is one word for one thing or many; English splits it. <span class='x'>✗</span> <em>There is three open tickets.</em> <span class='ok'>✓</span> <em>There are three open tickets.</em> The same goes for <em>people</em>, which is plural: <span class='x'>✗</span> <em>people is waiting</em>, <span class='ok'>✓</span> <em>people are waiting</em>. <b>En</b> is one word for three: <em>on</em> a surface (<em>on the bench</em>, <em>on the wall</em>, <em>on the slide</em>), <em>in</em> an enclosed space (<em>in the drawer</em>, <em>in the room</em>, <em>in the chart</em> for data inside it), <em>at</em> a point (<em>at the top</em>, <em>at the entrance</em>). <span class='x'>✗</span> <em>The tools are in the wall.</em> <span class='ok'>✓</span> <em>The tools are on the wall.</em> And Spanish uses the simple present for what is happening now, <em>el vendedor pesa los jitomates</em>, where English needs the continuous: <span class='x'>✗</span> <em>The vendor weighs tomatoes.</em> <span class='ok'>✓</span> <em>The vendor is weighing tomatoes.</em> One larger habit sits on top of these. A warm adjective, <em>muy buen equipo</em>, <em>excelente avance</em>, is generous and normal in a Mexican update. In an American one, a report built on adjectives gets heard as opinion, and the listener starts asking for the numbers. Keep the warmth for how you treat people, and give the report in nouns and numbers.",
        "Tres pequeños traslados del español aparecen en casi todas las descripciones. <b>Hay</b> es una sola palabra para una cosa o para muchas; el inglés la divide. <span class='x'>✗</span> <em>There is three open tickets.</em> <span class='ok'>✓</span> <em>There are three open tickets.</em> Lo mismo pasa con <em>people</em>, que es plural: <span class='x'>✗</span> <em>people is waiting</em>, <span class='ok'>✓</span> <em>people are waiting</em>. <b>En</b> es una palabra para tres: <em>on</em> para una superficie (<em>on the bench</em>, <em>on the wall</em>, <em>on the slide</em>), <em>in</em> para un espacio cerrado (<em>in the drawer</em>, <em>in the room</em>, <em>in the chart</em> para los datos que contiene), <em>at</em> para un punto (<em>at the top</em>, <em>at the entrance</em>). <span class='x'>✗</span> <em>The tools are in the wall.</em> <span class='ok'>✓</span> <em>The tools are on the wall.</em> Y el español usa el presente simple para lo que está pasando ahora, <em>el vendedor pesa los jitomates</em>, donde el inglés necesita el continuo: <span class='x'>✗</span> <em>The vendor weighs tomatoes.</em> <span class='ok'>✓</span> <em>The vendor is weighing tomatoes.</em> Encima de estos hay una costumbre más grande. Un adjetivo cálido, <em>muy buen equipo</em>, <em>excelente avance</em>, es generoso y normal en un reporte en México. En uno estadounidense, un reporte armado con adjetivos se oye como opinión, y quien escucha empieza a pedir los números. Guarda la calidez para el trato con la gente, y da el reporte con sustantivos y números.",
      ],
    },
    {
      t: "choice",
      title: ["Which line is the observation", "¿Cuál frase es la observación?"],
      items: [
        {
          prompt: [
            "Your director asks: <em>How did the pilot go?</em> Start with the facts.",
            "Tu director pregunta: <em>How did the pilot go?</em> Empieza por los hechos.",
          ],
          options: [
            {
              en: "It went really well. The store managers loved it.",
              ok: false,
              why: [
                "Two conclusions. <em>Loved it</em> is what you read in their faces; he cannot check it.",
                "Dos conclusiones. <em>Loved it</em> es lo que leíste en sus caras; él no lo puede verificar.",
              ],
            },
            {
              en: "Twelve stores ran it for four weeks. Nine of the twelve hit the sales target.",
              ok: true,
              why: [
                "Scope, duration and result, all countable. Now your opinion of the pilot has something to stand on.",
                "Alcance, duración y resultado, todo contable. Ahora tu opinión sobre el piloto tiene en qué apoyarse.",
              ],
            },
            {
              en: "Honestly, better than I expected, considering the problems we had at the start.",
              ok: false,
              why: [
                "It reports your expectations. He still does not know what happened in the stores.",
                "Reporta tus expectativas. Él sigue sin saber qué pasó en las tiendas.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A colleague has dialed in from her car and cannot see the chart on the screen. Describe it for her.",
            "Una colega se conectó desde su carro y no puede ver la gráfica en pantalla. Descríbesela.",
          ],
          options: [
            {
              en: "As you can see, the numbers really speak for themselves.",
              ok: false,
              why: [
                "She cannot see, and numbers never speak for themselves. Nothing has been described.",
                "No puede ver, y los números nunca hablan solos. No describiste nada.",
              ],
            },
            {
              en: "It's a little complicated, but the main idea is that we're doing fine.",
              ok: false,
              why: [
                "A verdict in place of a description. She has to trust your reading of a chart she has not seen.",
                "Un veredicto en lugar de una descripción. Tiene que confiar en tu lectura de una gráfica que no vio.",
              ],
            },
            {
              en: "There are three lines on the chart. The top one is revenue, and it's rising from left to right.",
              ok: true,
              why: [
                "The whole, then the first part, with its position and its direction. She can picture it.",
                "El conjunto y luego la primera parte, con su posición y su dirección. Ya se la puede imaginar.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are walking a remote colleague through the plant on a video call. Which opening will she be able to follow?",
            "Le estás mostrando la planta a una colega remota por videollamada. ¿Cuál entrada va a poder seguir?",
          ],
          options: [
            {
              en: "I'll go from the entrance to the back. At the entrance, there's a security desk. Behind it, there are two packing lines.",
              ok: true,
              why: [
                "An order, announced and kept. Each thing is placed in relation to the one before.",
                "Un orden, anunciado y mantenido. Cada cosa queda ubicada en relación con la anterior.",
              ],
            },
            {
              en: "So there's a forklift here, and the packing lines, and, oh, at the entrance there's the security desk, and going back to the forklift...",
              ok: false,
              why: [
                "Every item is a fact, and she is lost anyway. Order is part of the observation.",
                "Cada elemento es un hecho, y aun así ella ya se perdió. El orden es parte de la observación.",
              ],
            },
            {
              en: "It's a typical plant. You know how they look.",
              ok: false,
              why: [
                "It skips the job. If she knew how this one looked, she would not need the tour.",
                "Se salta el paso. Si supiera cómo se ve esta, no necesitaría el recorrido.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A teammate tells you: <em>The vendor is being impossible.</em> You need the observation under that sentence. What do you ask?",
            "Alguien de tu equipo te dice: <em>The vendor is being impossible.</em> Necesitas la observación que está debajo de esa oración. ¿Qué preguntas?",
          ],
          options: [
            {
              en: "Why do you think they're being so difficult?",
              ok: false,
              why: [
                "A reasonable question that asks for a second conclusion on top of the first.",
                "Una pregunta razonable que pide una segunda conclusión encima de la primera.",
              ],
            },
            {
              en: "What exactly did they say, and when?",
              ok: true,
              why: [
                "It asks for words and a time, the two things you can carry into the next meeting.",
                "Pide palabras y una hora, las dos cosas que puedes llevar a la siguiente junta.",
              ],
            },
            {
              en: "I know. They've always been like that.",
              ok: false,
              why: [
                "Friendly, and now there are two people with a conclusion and nobody with a fact.",
                "Amable, y ahora hay dos personas con una conclusión y nadie con un hecho.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Someone asks: <em>Is the Tijuana line running?</em> You are looking at a dashboard that last refreshed at 2 p.m. It is now 4.",
            "Alguien pregunta: <em>Is the Tijuana line running?</em> Estás viendo un tablero que se actualizó por última vez a las 2 p.m. Ya son las 4.",
          ],
          options: [
            {
              en: "Yes, it's running.",
              ok: false,
              why: [
                "You saw that it was running at two. Whether it is running now is a conclusion presented as a fact.",
                "Viste que estaba funcionando a las dos. Que esté funcionando ahora es una conclusión presentada como hecho.",
              ],
            },
            {
              en: "It should be, I think. I haven't heard anything.",
              ok: false,
              why: [
                "Honest about the doubt, but it hides the one solid fact you do have.",
                "Honesto sobre la duda, pero esconde el único hecho firme que sí tienes.",
              ],
            },
            {
              en: "As of the 2 p.m. refresh, it was running. I don't have anything more recent.",
              ok: true,
              why: [
                "The fact, its time, and the edge of what you know. The person asking can decide whether to call the plant.",
                "El hecho, su hora y el límite de lo que sabes. Quien pregunta puede decidir si llama a la planta.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["At work: a status report in facts", "En el trabajo: un reporte de avance en hechos"],
      prompt: [
        "Choose one thing you are responsible for this week: a project, a queue, a budget, a hire. In the think time, write four keywords and pick an order. Then give its status in facts only. No <em>good</em>, <em>bad</em>, <em>well</em>, <em>difficult</em> or <em>on track</em>. If you catch a conclusion coming, replace it with the number or the event behind it.",
        "Elige una cosa que esté a tu cargo esta semana: un proyecto, una lista de pendientes, un presupuesto, una contratación. En el tiempo de pensar, escribe cuatro palabras clave y elige un orden. Luego da su estado solo con hechos. Sin <em>good</em>, <em>bad</em>, <em>well</em>, <em>difficult</em> ni <em>on track</em>. Si sientes que viene una conclusión, cámbiala por el número o el evento que está detrás.",
      ],
      think: 30,
      speak: 45,
      frame:
        "Here's where ___ stands as of ___. There are ___. ___ is done. ___ is still open. I haven't checked ___ yet.",
      checklist: [
        ["I put a time on my report.", "Le puse hora a mi reporte."],
        ["I gave at least three numbers or dates.", "Di por lo menos tres números o fechas."],
        ["I did not use a single judging adjective.", "No usé ni un solo adjetivo que juzgue."],
        [
          "I said one thing I have not checked or cannot see.",
          "Dije una cosa que no he revisado o que no alcanzo a ver.",
        ],
        [
          "Someone who disagrees with me about the project would still accept every sentence.",
          "Alguien que no está de acuerdo conmigo sobre el proyecto aceptaría, aun así, todas mis oraciones.",
        ],
      ],
      model:
        "Here's where the Guadalajara hiring stands as of this morning. I'll go in order of the process. There are four open positions. We've received 86 applications and interviewed eleven people. Two offers are out: one was accepted on Friday, and one is waiting for an answer by Wednesday. Two positions have no finalist. I haven't checked with the agency yet about new candidates for those. That's what I have.",
    },
    {
      t: "takeaways",
      items: [
        [
          "An observation is what anyone standing in your place would also see. Everything else is a conclusion.",
          "Una observación es lo que cualquiera en tu lugar también vería. Todo lo demás es una conclusión.",
        ],
        [
          "Test each sentence: <em>Do I see that, or am I concluding it?</em>",
          "Pon a prueba cada oración: <em>Do I see that, or am I concluding it?</em>",
        ],
        [
          "Name the whole, announce an order, and keep it. You will leave things out; choose which.",
          "Nombra el conjunto, anuncia un orden y mantenlo. Vas a dejar cosas fuera; decide cuáles.",
        ],
        [
          "<em>There are</em> for plurals, <em>on</em> for surfaces, <em>-ing</em> for what is happening now.",
          "<em>There are</em> para plurales, <em>on</em> para superficies, <em>-ing</em> para lo que está pasando ahora.",
        ],
        [
          "At work, give the facts with a time, say what you have not checked, and keep your view separate.",
          "En el trabajo, da los hechos con su hora, di lo que no has revisado y mantén tu opinión aparte.",
        ],
      ],
    },
  ],
};
