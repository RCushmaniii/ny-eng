import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "the-three-minute-talk",
  slugEs: "la-charla-de-tres-minutos",
  title: [
    "The Three-Minute Talk: Put the Triangle Together",
    "La Charla de Tres Minutos: Une el Triángulo",
  ],
  summary: [
    "Seven moves, three minutes: a hook, a credibility line, one claim, three reasons, one story, a specific ask and a close that echoes the opening.",
    "Siete movimientos, tres minutos: un gancho, una línea de credibilidad, una afirmación, tres razones, una historia, una petición concreta y un cierre que retoma el inicio.",
  ],
  description: [
    "Build a complete three-minute persuasive talk in English: seven moves, a fully annotated model, strong openings and closings, and short Q&A answers.",
    "Arma una charla persuasiva de tres minutos en inglés: siete movimientos, un modelo completo con notas, aperturas, cierres y respuestas breves.",
  ],
  minutes: 20,
  blocks: [
    {
      t: "p",
      html: [
        "You have the parts. You can report facts without spin, attach evidence to a claim, tell one moment as a story, earn trust in a sentence, and say it all at a pace people can follow. Three minutes is where those parts become one thing. It is also the length real work gives you: a slot in a quarterly review, the first answer in a steering committee, the moment a VP says <em>walk me through it</em>. At an unhurried pace with pauses, three minutes is about 350 words. That is less than one page, so every sentence needs a job.",
        "Ya tienes las piezas. Puedes reportar hechos sin adornarlos, ponerle evidencia a una afirmación, contar un momento como historia, ganarte la confianza en una oración y decir todo a un ritmo que se pueda seguir. En tres minutos esas piezas se vuelven una sola cosa. Además, es el tiempo que te da el trabajo real: un espacio en una revisión trimestral, la primera respuesta ante un comité directivo, el momento en que alguien de la dirección te dice <em>walk me through it</em>. A un ritmo tranquilo y con pausas, tres minutos son unas 350 palabras. Es menos de una página, así que cada oración necesita una función.",
      ],
    },
    {
      t: "idea",
      title: ["One claim, seven moves", "Una afirmación, siete movimientos"],
      html: [
        "A three-minute talk is a single claim carried by seven moves, and each move leans on one corner of the triangle. Ethos makes them willing to listen. Logos makes the claim hold. Pathos makes it matter today. When a talk fails, one corner is usually missing: all data and no reason to care, all story and no evidence, or a good case from someone the room has no reason to trust yet.",
        "Una charla de tres minutos es una sola afirmación sostenida por siete movimientos, y cada movimiento se apoya en una esquina del triángulo. Ethos hace que quieran escucharte. Logos hace que la afirmación se sostenga. Pathos hace que importe hoy. Cuando una charla falla, por lo general falta una esquina: puros datos y ninguna razón para que importe, pura historia y nada de evidencia, o un buen caso en boca de alguien en quien la sala todavía no tiene por qué confiar.",
      ],
    },
    {
      t: "framework",
      title: ["The seven moves, with a time budget", "Los siete movimientos, con su tiempo"],
      lead: [
        "The times add up to three minutes. The model lines come from the full talk below.",
        "Los tiempos suman tres minutos. Las frases modelo salen de la charla completa que viene abajo.",
      ],
      steps: [
        {
          label: ["Hook (10 to 15 seconds)", "Gancho (10 a 15 segundos)"],
          html: [
            "A concrete fact or moment that raises a question in the listener's mind. No agenda, no thanks, no <em>today I'm going to talk about</em>. Often it is the first line of your story, with the rest held back. <b>Pathos.</b>",
            "Un hecho o un momento concreto que le despierta una pregunta a quien escucha. Sin agenda, sin agradecimientos, sin <em>today I'm going to talk about</em>. Muchas veces es la primera línea de tu historia, y el resto te lo guardas. <b>Pathos.</b>",
          ],
          say: "On September 12th, we loaded 600 finished units onto a truck. Four hours later, we took every one of them back off.",
        },
        {
          label: ["Credibility line (10 seconds)", "Línea de credibilidad (10 segundos)"],
          html: [
            "One sentence on why you, on this topic. Experience that is relevant to the claim, not your career history. <b>Ethos.</b>",
            "Una oración sobre por qué tú, en este tema. Experiencia que tenga que ver con la afirmación, no tu trayectoria completa. <b>Ethos.</b>",
          ],
          say: "I've run quality at the Querétaro plant for six years, and I've signed off on every shipment that has left it.",
        },
        {
          label: ["Claim (10 to 15 seconds)", "Afirmación (10 a 15 segundos)"],
          html: [
            "What you want them to accept, in one sentence someone could disagree with. Before the thirty-second mark. <b>Logos.</b>",
            "Lo que quieres que acepten, en una oración con la que alguien podría no estar de acuerdo. Antes del segundo treinta. <b>Logos.</b>",
          ],
          say: "I'm here to ask you to approve a 90-day pilot: inspect at station 4, where defects start, instead of at the end of the line, where we find them.",
        },
        {
          label: [
            "Three reasons, each with evidence (60 to 75 seconds)",
            "Tres razones, cada una con evidencia (60 a 75 segundos)",
          ],
          html: [
            "Count them, then give them. One reason and one piece of evidence each; one number with a comparison somewhere in the three. <b>Logos.</b>",
            "Di cuántas son y luego dalas. Una razón y una evidencia por cada una; en alguna de las tres, un número con su comparación. <b>Logos.</b>",
          ],
          say: "There are three reasons. First, we know where the problem is.",
        },
        {
          label: ["One story (40 to 45 seconds)", "Una historia (40 a 45 segundos)"],
          html: [
            "One person, one moment, the feeling with its cause, and the link back to the claim. If your hook opened a question, this is where you answer it. <b>Pathos.</b>",
            "Una persona, un momento, la emoción con su causa y el enlace de regreso a la afirmación. Si tu gancho abrió una pregunta, aquí la respondes. <b>Pathos.</b>",
          ],
          say: "Now, back to that truck. The supervisor that night was Tomás.",
        },
        {
          label: ["The ask (15 to 20 seconds)", "La petición (15 a 20 segundos)"],
          html: [
            "What you need, how much, by when, and what you will report back. A verb, a number and a date. <b>Logos and ethos.</b>",
            "Qué necesitas, cuánto, para cuándo y qué vas a reportar de regreso. Un verbo, un número y una fecha. <b>Logos y ethos.</b>",
          ],
          say: "So here's my ask: 18,000 dollars and line 2, for 90 days, starting October 1st.",
        },
        {
          label: ["The close (10 seconds)", "El cierre (10 segundos)"],
          html: [
            "One or two sentences that echo the hook. Then stop talking. The last thing they hear should be your point, not <em>that's all</em>. <b>Pathos.</b>",
            "Una o dos oraciones que retoman el gancho. Y te callas. Lo último que oigan debe ser tu punto, no <em>that's all</em>. <b>Pathos.</b>",
          ],
          say: "Tomás's team shouldn't have to unload another truck. Let's look at eight in the morning.",
        },
      ],
    },
    {
      t: "model",
      title: ["The full talk, annotated by corner", "La charla completa, anotada por esquina"],
      context: [
        "Elena is the quality manager at a plant in Querétaro. At the quarterly operations review she has three minutes with the US leadership team. Read it once straight through, then read the notes.",
        "Elena es gerente de calidad en una planta de Querétaro. En la revisión trimestral de operaciones tiene tres minutos con el equipo directivo de Estados Unidos. Léela una vez de corrido y después lee las notas.",
      ],
      lines: [
        {
          en: "On September 12th, we loaded 600 finished units onto a truck. Four hours later, we took every one of them back off.",
          note: [
            "<b>Hook. Pathos.</b> A date, a number and an image. The room wants to know why, and she does not tell them yet.",
            "<b>Gancho. Pathos.</b> Una fecha, un número y una imagen. La sala quiere saber por qué, y ella todavía no se lo dice.",
          ],
        },
        {
          en: "I'm Elena. I've run quality at the Querétaro plant for six years, and I've signed off on every shipment that has left it.",
          note: [
            "<b>Credibility line. Ethos.</b> Competence and responsibility in one sentence. Nothing about her degree or her title.",
            "<b>Línea de credibilidad. Ethos.</b> Competencia y responsabilidad en una oración. Nada sobre su carrera ni su puesto.",
          ],
        },
        {
          en: "I'm here to ask you to approve a 90-day pilot: inspect at station 4, where defects start, instead of at the end of the line, where we find them.",
          note: [
            "<b>Claim. Logos.</b> Twenty seconds in, they know what she wants. The contrast (<em>where defects start</em> against <em>where we find them</em>) is the whole argument in small.",
            "<b>Afirmación. Logos.</b> A los veinte segundos ya saben qué quiere. El contraste (<em>where defects start</em> contra <em>where we find them</em>) es todo el argumento en miniatura.",
          ],
        },
        {
          en: "There are three reasons.",
          note: [
            "<b>Signpost. Logos.</b> Four words, followed by a pause.",
            "<b>Señal. Logos.</b> Cuatro palabras, seguidas de una pausa.",
          ],
        },
        {
          en: "First, we know where the problem is. Last quarter, seven out of ten defects started at station 4.",
          note: [
            "<b>Reason one. Logos.</b> A reason, then one number, said as <em>seven out of ten</em> because that is easier to hear than a percentage.",
            "<b>Razón uno. Logos.</b> Una razón y luego un número, dicho como <em>seven out of ten</em> porque al oído es más fácil que un porcentaje.",
          ],
        },
        {
          en: "Second, finding them late is expensive. Between station 4 and final inspection there are 40 minutes of work, and we do all of it on parts that are already bad. Last quarter, that added up to 310 hours of rework.",
          note: [
            "<b>Reason two. Logos.</b> The mechanism first (40 minutes of work on bad parts), then the total. The listener understands the number before hearing it.",
            "<b>Razón dos. Logos.</b> Primero el mecanismo (40 minutos de trabajo sobre piezas malas) y luego el total. Quien escucha entiende el número antes de oírlo.",
          ],
        },
        {
          en: "And third, this is cheap to test. One camera, one line, 90 days: 18,000 dollars. To put that in perspective, rework and scrap cost us more than twice that last quarter.",
          note: [
            "<b>Reason three. Logos.</b> A rule of three inside the reason, then the price with a comparison. She names the cost herself.",
            "<b>Razón tres. Logos.</b> Una regla de tres dentro de la razón, y luego el precio con su comparación. El costo lo menciona ella misma.",
          ],
        },
        {
          en: "Now, back to that truck. The supervisor that night was Tomás. At seven p.m., final inspection flagged a misaligned seal, and the units were already loaded. Tomás and five people from his shift unloaded all 600 and checked them by hand until four in the morning.",
          note: [
            "<b>Story. Pathos.</b> One person, one night, exact hours. It answers the question the hook opened, so the room has been waiting for it.",
            "<b>Historia. Pathos.</b> Una persona, una noche, horas exactas. Responde la pregunta que abrió el gancho, así que la sala la estaba esperando.",
          ],
        },
        {
          en: 'The next day he said to me, "We made that mistake at eight in the morning. We just didn\'t look until seven at night."',
          note: [
            "<b>The feeling, in his words. Pathos.</b> No adjective. The quote also restates her claim better than she could.",
            "<b>La emoción, en sus palabras. Pathos.</b> Ni un adjetivo. Además, la cita plantea la afirmación de Elena mejor de lo que ella podría.",
          ],
        },
        {
          en: "The shipment left a day late, and I made the call to the customer myself.",
          note: [
            "<b>Ethos.</b> She owns the failure. Admitting a bad day makes everything else she says more believable.",
            "<b>Ethos.</b> Asume la falla. Reconocer un mal día hace más creíble todo lo demás que dice.",
          ],
        },
        {
          en: "I'll be straight with you about what I don't know. I can't promise the camera catches everything. That's why I'm asking for a pilot and not a full rollout.",
          note: [
            "<b>Ethos.</b> A stated limit, turned into the reason for the size of the ask.",
            "<b>Ethos.</b> Un límite reconocido, convertido en la razón del tamaño de la petición.",
          ],
        },
        {
          en: "So here's my ask: 18,000 dollars and line 2, for 90 days, starting October 1st. On January 15th, I'll bring you two numbers: defects caught at station 4, and rework hours.",
          note: [
            "<b>The ask. Logos and ethos.</b> Amount, scope, start date, and how she will be held to account. They can say yes in one word.",
            "<b>La petición. Logos y ethos.</b> Monto, alcance, fecha de inicio y cómo va a rendir cuentas. Pueden decir que sí con una palabra.",
          ],
        },
        {
          en: "If we do nothing, we keep paying for 40 minutes of work on parts we already know are bad.",
          note: [
            "<b>Stakes. Pathos.</b> The cost of doing nothing, in one plain sentence.",
            "<b>Lo que está en juego. Pathos.</b> El costo de no hacer nada, en una oración sencilla.",
          ],
        },
        {
          en: "Tomás's team shouldn't have to unload another truck. Let's look at eight in the morning.",
          note: [
            "<b>Close. Pathos.</b> It returns to the truck and to his words, and ends on an action. Then she stops.",
            "<b>Cierre. Pathos.</b> Regresa al camión y a las palabras de Tomás, y termina en una acción. Y se detiene.",
          ],
        },
      ],
    },
    {
      t: "compare",
      title: ["Openings and closings", "Aperturas y cierres"],
      rows: [
        {
          weak: "Hello everyone, thank you for having me. Today I'm going to talk about employee turnover.",
          strong:
            "In the last twelve months, we trained 40 new technicians. Nineteen of them are gone.",
          why: [
            "The first names a topic. The second gives a fact that makes the room ask <em>why</em>, which is the question the talk answers.",
            "La primera nombra un tema. La segunda da un hecho que hace que la sala se pregunte <em>why</em>, que es la pregunta que la charla responde.",
          ],
        },
        {
          weak: "First, let me tell you a little about my background and my career.",
          strong:
            "I've led this team through two system migrations, so I know what a third one will cost us.",
          why: [
            "A credibility line is one sentence, and it is about this topic. The résumé can stay on LinkedIn.",
            "Una línea de credibilidad es una oración, y trata de este tema. El currículum se puede quedar en LinkedIn.",
          ],
        },
        {
          weak: "Before I begin, sorry for my English, I'm a little nervous.",
          strong: "Good morning. I have one recommendation and three minutes.",
          why: [
            "The apology tells the room what to listen for. The strong opening tells them what they will get and how long it will take.",
            "La disculpa le dice a la sala en qué fijarse. La apertura fuerte le dice qué va a recibir y cuánto va a tardar.",
          ],
        },
        {
          weak: "So I think it would be good if we could maybe get some support for this.",
          strong: "I'm asking for two things: 25,000 dollars, and a decision by the 15th.",
          why: [
            "<em>Some support</em> cannot be approved because nobody knows what it is. A number and a date can.",
            "<em>Some support</em> no se puede aprobar porque nadie sabe qué es. Un número y una fecha sí.",
          ],
        },
        {
          weak: "And, well, that's all. Thank you for your attention.",
          strong:
            "Nineteen technicians left last year. With this program, I believe we keep ten of them. I'd like your approval today.",
          why: [
            "The weak close gives away the last ten seconds. The strong one returns to the opening number, states the gain and repeats the ask.",
            "El cierre débil regala los últimos diez segundos. El fuerte regresa al número del inicio, plantea la ganancia y repite la petición.",
          ],
        },
        {
          weak: "Any questions? No? Okay.",
          strong: "What questions do you have?",
          why: [
            "The first closes the door in the same breath. The second assumes there are questions and waits for them.",
            "La primera cierra la puerta en el mismo respiro. La segunda da por hecho que hay preguntas y las espera.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: [
        "Lines for the first and last thirty seconds",
        "Frases para los primeros y los últimos treinta segundos",
      ],
      items: [
        {
          en: "Let me start with a number.",
          use: [
            "A hook for a data-driven room. Give the number, then pause.",
            "Un gancho para una sala que se guía por datos. Da el número y haz una pausa.",
          ],
        },
        {
          en: "Three weeks ago, something happened on our line that I want you to know about.",
          use: [
            "A hook that opens a story and holds back the ending.",
            "Un gancho que abre una historia y se guarda el final.",
          ],
        },
        {
          en: "I've spent the last ___ years on exactly this problem.",
          use: [
            "The credibility line when your experience is the reason to listen.",
            "La línea de credibilidad cuando tu experiencia es la razón para escucharte.",
          ],
        },
        {
          en: "I'm here to ask for one decision.",
          use: [
            "Announces the claim and tells senior people what you need from them.",
            "Anuncia la afirmación y le dice a la gente de alto nivel qué necesitas de su parte.",
          ],
        },
        {
          en: "Now, back to ___.",
          use: [
            "Returns to the hook when it is time for the story.",
            "Regresa al gancho cuando llega el momento de la historia.",
          ],
        },
        {
          en: "So here's my ask.",
          use: [
            "Marks the ask so nobody misses it. Pause, then give the number and the date.",
            "Marca la petición para que nadie se la pierda. Haz una pausa y luego da el número y la fecha.",
          ],
        },
        {
          en: "Specifically, I need ___ by ___.",
          use: ["The ask itself: what and when.", "La petición en sí: qué y para cuándo."],
        },
        {
          en: "I'll report back on ___ with ___.",
          use: [
            "Commits you to a result. It makes a yes easier because the risk has a checkpoint.",
            "Te compromete con un resultado. Facilita el sí porque el riesgo tiene un punto de revisión.",
          ],
        },
        {
          en: "If you remember one thing from this, make it this: ___.",
          use: [
            "A close for when the echo of the hook is not available.",
            "Un cierre para cuando no puedes retomar el gancho.",
          ],
        },
        {
          en: "What questions do you have?",
          use: [
            "Opens Q&A. Say it, then wait a full five seconds.",
            "Abre las preguntas. Dila y luego espera cinco segundos completos.",
          ],
        },
      ],
    },
    {
      t: "framework",
      title: [
        "Answering questions: pause, answer, support, stop",
        "Para responder preguntas: pause, answer, support, stop",
      ],
      lead: [
        "A good answer in Q&A is the lesson on logos at one-tenth the size: the point first, one piece of support, and silence.",
        "Una buena respuesta en la sesión de preguntas es la lección de logos a una décima parte del tamaño: primero el punto, un solo respaldo y silencio.",
      ],
      steps: [
        {
          label: ["Pause", "Pause: haz una pausa"],
          html: [
            "Let them finish. Take one breath. If you are not sure what they asked, check before you answer.",
            "Deja que terminen. Respira una vez. Si no tienes claro qué te preguntaron, confirma antes de responder.",
          ],
          say: "Let me make sure I understood: you're asking what this costs after the pilot?",
        },
        {
          label: ["Answer", "Answer: responde"],
          html: [
            "Yes, no, or the number, in the first sentence.",
            "Sí, no o el número, en la primera oración.",
          ],
          say: "The short answer is no, we don't need new headcount.",
        },
        {
          label: ["Support", "Support: respalda"],
          html: ["One reason or one fact. Only one.", "Una razón o un hecho. Solo uno."],
          say: "The line operators run the camera check, and it adds about ten seconds per unit.",
        },
        {
          label: ["Stop", "Stop: detente"],
          html: [
            "Stop talking and look at the person. If you do not know, say so and give a date. A clean <em>I don't know</em> builds more trust than a confident guess.",
            "Deja de hablar y mira a la persona. Si no sabes, dilo y da una fecha. Un <em>I don't know</em> limpio genera más confianza que una suposición dicha con seguridad.",
          ],
          say: "I don't have that number with me, and I'd rather not guess. I'll send it to you by Thursday.",
        },
      ],
    },
    {
      t: "trap",
      title: [
        "The ritual opening and the soft ask",
        "La apertura de protocolo y la petición suavizada",
      ],
      html: [
        "In Spanish, a formal presentation opens with greetings and thanks and closes with <em>eso es todo, gracias por su atención</em>. Skipping them can feel abrupt. In a short American business talk, those rituals take up the two moments when attention is highest: the first ten seconds and the last ten. One short greeting is enough, and a plain <em>thank you</em> after your close. Three direct translations to retire: <span class='x'>✗</span> <em>Good morning with everyone</em> → <span class='ok'>✓</span> <em>Good morning, everyone</em>. <span class='x'>✗</span> <em>I'm going to talk you about…</em> → <span class='ok'>✓</span> <em>I'm going to talk to you about…</em>, or better, skip it and say the hook. <span class='x'>✗</span> <em>That's all</em> → <span class='ok'>✓</span> end on your ask. The ask is the other place the two cultures differ. Spanish courtesy softens a request until it is easy to decline: <em>no sé si sería posible…</em> In English, a soft ask sounds as though you do not expect a yes. A verb, a number and a date is the considerate form here, because it gives people something they can answer.",
        "En español, una presentación formal abre con saludos y agradecimientos y cierra con <em>eso es todo, gracias por su atención</em>. Saltárselos puede sentirse brusco. En una charla de negocios corta en Estados Unidos, ese protocolo ocupa los dos momentos de mayor atención: los primeros diez segundos y los últimos diez. Con un saludo breve basta, y con un <em>thank you</em> sencillo después de tu cierre. Tres traducciones directas que conviene retirar: <span class='x'>✗</span> <em>Good morning with everyone</em> → <span class='ok'>✓</span> <em>Good morning, everyone</em>. <span class='x'>✗</span> <em>I'm going to talk you about…</em> → <span class='ok'>✓</span> <em>I'm going to talk to you about…</em>, o mejor, sáltatela y di el gancho. <span class='x'>✗</span> <em>That's all</em> → <span class='ok'>✓</span> termina con tu petición. La petición es el otro punto donde las dos culturas difieren. La cortesía en español suaviza una solicitud hasta que es fácil decirle que no: <em>no sé si sería posible…</em> En inglés, una petición suavizada suena a que no esperas un sí. Un verbo, un número y una fecha es aquí la forma considerada de pedir, porque le das a la gente algo que sí puede responder.",
      ],
    },
    {
      t: "choice",
      title: ["Choose the move", "Elige el movimiento"],
      items: [
        {
          prompt: [
            "You have three minutes in front of a steering committee. Which first sentence do you use?",
            "Tienes tres minutos frente a un comité directivo. ¿Con qué oración abres?",
          ],
          options: [
            {
              en: "Good morning, thank you all for your time. I know you are very busy, so I will try to be brief.",
              ok: false,
              why: [
                "Polite and common, and it spends your best ten seconds on nothing. <em>I'll try to be brief</em> also makes a promise people now watch you keep.",
                "Cortés y común, y gasta tus mejores diez segundos en nada. Además, <em>I'll try to be brief</em> es una promesa que la gente ahora va a vigilar.",
              ],
            },
            {
              en: "Today I will present the agenda: first the background, then the analysis, then the proposal, and finally the next steps.",
              ok: false,
              why: [
                "Clear, but an agenda for a three-minute talk hides the claim until the end. Context first, point last.",
                "Clara, pero una agenda para una charla de tres minutos esconde la afirmación hasta el final. Contexto primero, conclusión al último.",
              ],
            },
            {
              en: "Last month, a customer waited eleven days for a part we had in stock the whole time.",
              ok: true,
              why: [
                "A concrete fact with a question built in. The committee wants the next sentence.",
                "Un hecho concreto que ya trae una pregunta adentro. El comité quiere oír la siguiente oración.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Your three reasons are done. Which line takes you into the story?",
            "Ya diste tus tres razones. ¿Qué frase te lleva a la historia?",
          ],
          options: [
            {
              en: "Now I'd like to share a personal anecdote, if you allow me.",
              ok: false,
              why: [
                "It asks permission and labels the story as optional. The room relaxes its attention.",
                "Pide permiso y presenta la historia como opcional. La sala baja la atención.",
              ],
            },
            {
              en: "Those are the numbers. Here's what they looked like on the night of September 12th.",
              ok: true,
              why: [
                "It ties the story to the evidence and gives a date. The room knows this is still the argument.",
                "Conecta la historia con la evidencia y da una fecha. La sala sabe que esto sigue siendo el argumento.",
              ],
            },
            {
              en: "There are many examples I could give you, but I will mention just a few of them.",
              ok: false,
              why: [
                "You have forty seconds. One example, told well.",
                "Tienes cuarenta segundos. Un ejemplo, bien contado.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Your talk is ending. Which ask do you make?",
            "Tu charla está por terminar. ¿Qué petición haces?",
          ],
          options: [
            {
              en: "I hope you will consider supporting this initiative.",
              ok: false,
              why: [
                "Nobody can say yes to <em>consider supporting</em>. They will consider it, and that will be the end of it.",
                "Nadie puede decirle que sí a <em>consider supporting</em>. Lo van a considerar, y ahí va a quedar.",
              ],
            },
            {
              en: "I'm asking you to approve two hires for the Guadalajara team, starting in January.",
              ok: true,
              why: [
                "A verb, a number and a date. It can be approved, declined or negotiated in this meeting.",
                "Un verbo, un número y una fecha. Se puede aprobar, rechazar o negociar en esta misma junta.",
              ],
            },
            {
              en: "So let me know what you think, and we can see how to move forward.",
              ok: false,
              why: [
                "Friendly, and it hands the next step to nobody in particular.",
                "Amable, y le deja el siguiente paso a nadie en particular.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A VP asks: <em>What does this cost after the pilot?</em> You have not calculated it.",
            "Una VP pregunta: <em>What does this cost after the pilot?</em> No lo calculaste.",
          ],
          options: [
            {
              en: "It will be very affordable, I'm sure. Probably not much more.",
              ok: false,
              why: [
                "A guess dressed as an answer. If the real number is higher, it costs you more than the pilot.",
                "Una suposición disfrazada de respuesta. Si el número real es más alto, te cuesta más que el piloto.",
              ],
            },
            {
              en: "That's a great question. So, the pilot is 18,000, and as I mentioned, it covers one line for 90 days, and…",
              ok: false,
              why: [
                "It answers a question she did not ask. Senior people notice the dodge immediately.",
                "Responde una pregunta que ella no hizo. La gente de alto nivel nota la evasión de inmediato.",
              ],
            },
            {
              en: "I don't know yet, and I'd rather not guess. I'll have a full-rollout estimate for you by Friday.",
              ok: true,
              why: [
                "A clean limit and a date. It is the same move Elena makes in the talk, and it earns the same trust.",
                "Un límite claro y una fecha. Es el mismo movimiento que hace Elena en la charla, y gana la misma confianza.",
              ],
            },
          ],
        },
        {
          prompt: [
            "At the ninety-second mark a director interrupts: <em>Sorry, what exactly are you asking for?</em>",
            "Al minuto y medio, un director te interrumpe: <em>Sorry, what exactly are you asking for?</em>",
          ],
          options: [
            {
              en: "I'm getting to that in a moment. Let me just finish this part first.",
              ok: false,
              why: [
                "It puts your structure ahead of his question. He stops listening until he gets the answer.",
                "Pone tu estructura por encima de su pregunta. Deja de escuchar hasta que le des la respuesta.",
              ],
            },
            {
              en: "Ninety days and 18,000 dollars to test inspection at station 4. I was about to give you the third reason.",
              ok: true,
              why: [
                "The ask in one line, then back to your place. An interruption is a request for the short version.",
                "La petición en una línea, y de regreso a donde ibas. Una interrupción es una solicitud de la versión corta.",
              ],
            },
            {
              en: "Sorry, sorry, maybe I was not clear. Let me start again from the beginning.",
              ok: false,
              why: [
                "Two apologies and a restart. He asked for one sentence.",
                "Dos disculpas y volver a empezar. Él pidió una oración.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "p",
      html: [
        "Now build yours. Choose something real: a decision you actually want from people you actually work with. Build it in the order below, which is different from the order you will say it in. The claim and the ask come first because everything else exists to support them. Write keywords, not sentences.",
        "Ahora arma la tuya. Elige algo real: una decisión que de verdad quieres de gente con la que de verdad trabajas. Ármala en el orden de abajo, que es distinto al orden en que la vas a decir. La afirmación y la petición van primero porque todo lo demás existe para sostenerlas. Escribe palabras clave, no oraciones.",
      ],
    },
    {
      t: "list",
      ordered: true,
      items: [
        [
          "<b>Claim:</b> one sentence someone could disagree with.",
          "<b>Afirmación:</b> una oración con la que alguien podría no estar de acuerdo.",
        ],
        [
          "<b>Ask:</b> what, how much, by when, and what you will report back.",
          "<b>Petición:</b> qué, cuánto, para cuándo y qué vas a reportar de regreso.",
        ],
        [
          "<b>Three reasons:</b> one piece of evidence each. Circle the one number you will give a comparison.",
          "<b>Tres razones:</b> una evidencia para cada una. Encierra en un círculo el número al que le vas a dar una comparación.",
        ],
        [
          "<b>Story:</b> one person, one moment, what they said or felt and why.",
          "<b>Historia:</b> una persona, un momento, qué dijo o sintió y por qué.",
        ],
        [
          "<b>Credibility line:</b> why you, on this topic, in one sentence.",
          "<b>Línea de credibilidad:</b> por qué tú, en este tema, en una oración.",
        ],
        [
          "<b>Hook:</b> the most concrete fact or moment you have. Look first at the opening of your story.",
          "<b>Gancho:</b> el hecho o el momento más concreto que tengas. Busca primero en el arranque de tu historia.",
        ],
        [
          "<b>Close:</b> echo the hook and end on an action.",
          "<b>Cierre:</b> retoma el gancho y termina en una acción.",
        ],
      ],
    },
    {
      t: "speak",
      title: ["The 30-second skeleton", "El esqueleto de 30 segundos"],
      prompt: [
        "Before the full talk, say only its bones: hook, claim, ask. If these three hold together in thirty seconds, the talk will hold together in three minutes. If they do not, more reasons will not fix it.",
        "Antes de la charla completa, di solo sus huesos: gancho, afirmación, petición. Si los tres se sostienen juntos en treinta segundos, la charla se va a sostener en tres minutos. Si no, más razones no lo van a arreglar.",
      ],
      think: 30,
      speak: 30,
      frame: "[Hook.] // I'm here to ask for ___. // Specifically, I need ___ by ___. //",
      checklist: [
        [
          "My hook was a fact or a moment, not a greeting or a topic.",
          "Mi gancho fue un hecho o un momento, no un saludo ni un tema.",
        ],
        [
          "The claim followed naturally from the hook.",
          "La afirmación se desprendió con naturalidad del gancho.",
        ],
        ["The ask had a number and a date.", "La petición tuvo un número y una fecha."],
        ["I paused after each of the three.", "Hice una pausa después de cada uno de los tres."],
      ],
      model:
        "Last month, a customer waited eleven days for a part we had in stock the whole time. I'm here to ask for a change in how we release inventory. Specifically, I need approval for the Laredo warehouse to ship without a second sign-off, starting March 1st.",
    },
    {
      t: "speak",
      title: ["Your three-minute talk", "Tu charla de tres minutos"],
      prompt: [
        "Take five minutes with your keyword notes, then stand up and give the whole talk, recorded, without stopping. If you lose a word, use a rescue line and keep going. Listen once, write one strength and one thing to try next, and give it a second time tomorrow.",
        "Tómate cinco minutos con tus notas de palabras clave, luego ponte de pie y da la charla completa, grabándote y sin detenerte. Si pierdes una palabra, usa una frase de rescate y sigue. Escúchate una vez, escribe una fortaleza y una cosa por intentar la próxima vez, y dala por segunda vez mañana.",
      ],
      think: 300,
      speak: 180,
      frame:
        "[Hook.] // I'm ___, and I've ___. // I'm here to ask for ___. // There are three reasons. First, ___. Second, ___. And third, ___. // Now, back to ___. // So here's my ask: ___ by ___. // [Echo the hook.]",
      checklist: [
        ["I finished between 2:40 and 3:10.", "Terminé entre 2:40 y 3:10."],
        [
          "The claim came before the thirty-second mark.",
          "La afirmación llegó antes del segundo treinta.",
        ],
        [
          "Each reason had one piece of evidence, and one number had a comparison.",
          "Cada razón tuvo una evidencia, y un número tuvo su comparación.",
        ],
        [
          "The story had one person and one moment, and I linked it back to the claim.",
          "La historia tuvo una persona y un momento, y la conecté de regreso con la afirmación.",
        ],
        [
          "The ask had a verb, a number and a date.",
          "La petición tuvo un verbo, un número y una fecha.",
        ],
        [
          "I can point to at least one line for each corner: ethos, logos, pathos.",
          "Puedo señalar por lo menos una línea para cada esquina: ethos, logos, pathos.",
        ],
        [
          "My last sentence was my point, not <em>that's all</em>.",
          "Mi última oración fue mi punto, no <em>that's all</em>.",
        ],
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "Seven moves: hook, credibility line, claim, three reasons, one story, the ask, the close.",
          "Siete movimientos: gancho, línea de credibilidad, afirmación, tres razones, una historia, la petición, el cierre.",
        ],
        [
          "Build it from the claim and the ask outward. Say it from the hook.",
          "Ármala desde la afirmación y la petición hacia afuera. Dila desde el gancho.",
        ],
        [
          "Every line serves a corner of the triangle. If one corner has no lines, the talk will lean.",
          "Cada línea sirve a una esquina del triángulo. Si una esquina se queda sin líneas, la charla se ladea.",
        ],
        [
          "The ask is a verb, a number and a date.",
          "La petición es un verbo, un número y una fecha.",
        ],
        [
          "In Q&A: pause, answer in the first sentence, give one support, stop.",
          "En las preguntas: pausa, responde en la primera oración, da un solo respaldo y detente.",
        ],
      ],
    },
  ],
};
