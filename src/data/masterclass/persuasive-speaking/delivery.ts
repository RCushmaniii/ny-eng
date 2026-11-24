import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "delivery",
  slugEs: "voz-y-presencia",
  title: ["Delivery: Voice, Pace and the Pause", "Voz y Presencia: Ritmo, Volumen y la Pausa"],
  summary: [
    "Slow down by pausing, stress the word that carries the meaning, end statements with your voice going down, and know what to say when a word will not come.",
    "Baja la velocidad con pausas, acentúa la palabra que lleva el significado, cierra tus afirmaciones con la voz hacia abajo y aprende qué decir cuando no te llega una palabra.",
  ],
  description: [
    "Sound calm and clear in English: thought groups, stress, falling intonation, the two-second pause, fewer fillers, and rescue lines for a lost word.",
    "Proyecta calma y claridad en inglés: grupos de sentido, acento, entonación descendente, la pausa de dos segundos y frases de rescate útiles.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "Record yourself presenting in English and listen back. Three things tend to stand out. You speak faster than you do in Spanish. Your sentences run into each other. And somewhere in the middle there is a search for a word, filled with a long <em>ehh</em>.",
        "Grábate presentando en inglés y escúchate. Suelen saltar tres cosas. Hablas más rápido que en español. Tus oraciones se enciman una con otra. Y en algún punto buscas una palabra, y ese hueco se llena con un <em>ehh</em> largo.",
      ],
    },
    {
      t: "p",
      html: [
        "Speed in a second language feels like fluency from the inside. From the outside it sounds like nerves, and it makes every unfamiliar sound harder for the listener to decode. The fix is mechanical, which is good news: four things you do with your voice, a routine for the first ten seconds, and a few sentences to say when a word will not come.",
        "La velocidad en un segundo idioma se siente como fluidez desde adentro. Desde afuera suena a nervios, y hace que cada sonido poco familiar le cueste más trabajo a quien escucha. La solución es mecánica, y eso es buena noticia: cuatro cosas que haces con la voz, una rutina para los primeros diez segundos y unas cuantas frases para cuando no te llega una palabra.",
      ],
    },
    {
      t: "idea",
      title: [
        "Slow down by pausing, not by stretching",
        "Baja la velocidad con pausas, no alargando las palabras",
      ],
      html: [
        "Telling yourself to speak slowly works for about one sentence. Pausing works for the whole talk. Speak in short groups of words that belong together, and stop completely between them. The pause gives the listener time to process, gives you time to find the next phrase, and tells the room you are not afraid of silence. Two seconds feels endless to the person speaking and perfectly normal to everyone else.",
        "Decirte que hables despacio funciona como por una oración. Hacer pausas funciona toda la intervención. Habla en grupos cortos de palabras que van juntas, y detente por completo entre uno y otro. La pausa le da a quien escucha tiempo de procesar, te da a ti tiempo de encontrar la siguiente frase y le dice a la sala que el silencio no te asusta. Dos segundos se le hacen eternos a quien habla y perfectamente normales a los demás.",
      ],
    },
    {
      t: "framework",
      title: ["Chunk, stress, drop, pause", "Chunk, stress, drop, pause"],
      lead: [
        "Mark your first sentence, your claim and your last sentence this way before any talk. In the examples, a slash is one beat, a double slash is a full two-second stop, and CAPITALS show the stressed word.",
        "Marca así tu primera oración, tu afirmación y tu última oración antes de cualquier intervención. En los ejemplos, una diagonal es un tiempo, dos diagonales son una pausa completa de dos segundos, y las MAYÚSCULAS indican la palabra acentuada.",
      ],
      steps: [
        {
          label: ["Chunk", "Chunk: agrupa"],
          html: [
            "Break the sentence into thought groups of three to seven words. One group, one breath, one idea.",
            "Divide la oración en grupos de sentido de tres a siete palabras. Un grupo, una respiración, una idea.",
          ],
          say: "We should move the launch / from March 3rd / to March 24th.",
        },
        {
          label: ["Stress", "Stress: acentúa"],
          html: [
            "In each group, one word carries the meaning. Make it longer and a little louder, and let the small words (<em>to, the, of, for</em>) go by quickly. Move the stress and you change the message: the first version below is about the deadline, the second about the need to stop discussing.",
            "En cada grupo, una palabra lleva el significado. Hazla más larga y un poco más fuerte, y deja que las palabras chicas (<em>to, the, of, for</em>) pasen rápido. Si mueves el acento, cambias el mensaje: la primera versión de abajo habla del plazo; la segunda, de que ya hay que dejar de discutir.",
          ],
          say: "We need to decide THIS week. // We need to DECIDE this week.",
        },
        {
          label: ["Drop", "Drop: baja la voz"],
          html: [
            "End every statement with your voice going down on the last stressed word. A rise at the end turns a statement into a question and asks the room for permission.",
            "Cierra cada afirmación con la voz hacia abajo en la última palabra acentuada. Si subes al final, la afirmación se vuelve pregunta y le pides permiso a la sala.",
          ],
          say: "I recommend the second VENDOR. //",
        },
        {
          label: ["Pause", "Pause: detente"],
          html: [
            "One beat at a slash. Two full seconds after your claim, after a number and before your last line. Close your mouth during the pause; that is what keeps the <em>um</em> out.",
            "Un tiempo en cada diagonal. Dos segundos completos después de tu afirmación, después de un número y antes de tu última línea. Cierra la boca durante la pausa; eso es lo que deja fuera al <em>um</em>.",
          ],
          say: "One in twelve transactions FAILED. // Our limit is one in a THOUSAND. //",
        },
      ],
    },
    {
      t: "compare",
      title: ["Rushed vs. marked", "De corrido vs. marcado"],
      labels: [
        ["Rushed", "De corrido"],
        ["Marked", "Marcado"],
      ],
      rows: [
        {
          weak: "So basically what we found is that customers are leaving in the first month.",
          strong: "Customers are leaving / in the FIRST month. //",
          why: [
            "The warm-up (<em>so basically what we found is that</em>) is gone, and the stress sits on the word that is news.",
            "Desapareció el calentamiento (<em>so basically what we found is that</em>), y el acento cae en la palabra que es noticia.",
          ],
        },
        {
          weak: "I think we should, um, probably consider, like, a pilot?",
          strong: "I recommend a PILOT. // Ninety days, / one team. //",
          why: [
            "Two fillers, two hedges and a rising end, all removed. The same idea now sounds like a decision.",
            "Dos muletillas, dos titubeos y un final hacia arriba, todo fuera. La misma idea ahora suena a decisión.",
          ],
        },
        {
          weak: "We have three options and the first one is to renew and the second one is to switch and the third one is to build it ourselves.",
          strong: "We have THREE options. // RENEW, / SWITCH, / or build it OURSELVES. //",
          why: [
            "Chaining everything with <em>and</em> is how a long Spanish sentence flows. In spoken English, the period is a pause the listener can hear.",
            "Encadenar todo con <em>and</em> es como fluye una oración larga en español. En inglés hablado, el punto es una pausa que se alcanza a oír.",
          ],
        },
        {
          weak: "The deadline is Friday, right? And we're not ready, right?",
          strong: "The deadline is FRIDAY. // We're not READY. //",
          why: [
            "Each <em>right?</em> hands the sentence to the room for approval. You know the deadline; say it going down.",
            "Cada <em>right?</em> le entrega la oración a la sala para que la apruebe. Tú sabes cuál es el plazo; dilo con la voz hacia abajo.",
          ],
        },
        {
          weak: "It costs eighteen thousand dollars, which is not that much if you really think about it.",
          strong: "It costs eighteen THOUSAND dollars. // Rework cost us FORTY last quarter. //",
          why: [
            "Rushing to defend a number tells the room you think it is too high. Say it, stop, then give the comparison.",
            "Apresurarte a defender un número le dice a la sala que a ti te parece alto. Dilo, detente y luego da la comparación.",
          ],
        },
        {
          weak: "And yeah, so, that's all I have, thank you, any questions?",
          strong: "That's my RECOMMENDATION. // What questions do you HAVE? //",
          why: [
            "The last line is the one people leave with. Say it as slowly as the first, looking up.",
            "La última línea es con la que la gente se queda. Dila tan despacio como la primera, con la mirada arriba.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["A marked script", "Un guion marcado"],
      context: [
        "The opening of a talk, marked for delivery. Read it silently once and hear where the stops are. You will read it out loud in the next exercise.",
        "El arranque de una intervención, marcado para decirse en voz alta. Léelo una vez en silencio y escucha dónde van las pausas. Lo vas a leer en voz alta en el siguiente ejercicio.",
      ],
      lines: [
        {
          en: "Good MORNING. //",
          note: [
            "Two words, voice down, full stop. A slow first line sets the pace for everything after it.",
            "Dos palabras, voz hacia abajo, pausa completa. Una primera línea lenta marca el ritmo de todo lo que sigue.",
          ],
        },
        {
          en: "I'm here to ask for ONE decision. //",
          note: [
            "The stress goes on the word that sets expectations. The pause lets it register.",
            "El acento cae en la palabra que fija la expectativa. La pausa deja que se asiente.",
          ],
        },
        {
          en: "Last quarter, / we spent THREE HUNDRED hours / fixing parts we had already FINISHED. //",
          note: [
            "Three thought groups. The number gets length, not speed.",
            "Tres grupos de sentido. Al número se le da duración, no velocidad.",
          ],
        },
        {
          en: "Seven out of TEN of those defects / started at the SAME station. //",
          note: [
            "In each group the stress falls on the new information.",
            "En cada grupo el acento cae en la información nueva.",
          ],
        },
        {
          en: "We find them at the END of the line. // FORTY minutes too late. //",
          note: [
            "A full stop before a short phrase is the spoken version of bold type.",
            "Una pausa completa antes de una frase corta es la versión hablada de las negritas.",
          ],
        },
        {
          en: "I'm asking for ninety DAYS / and eighteen thousand DOLLARS / to catch them where they START. //",
          note: [
            "The ask, in three groups, and the final word falls. No rise, no <em>right?</em>",
            "La petición, en tres grupos, y la última palabra baja. Sin subir la voz, sin <em>right?</em>",
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Read the marked script", "Lee el guion marcado"],
      prompt: [
        "Read the six lines of the marked script out loud and record it. Obey every mark, with a full two seconds at each double slash. It should take 40 to 50 seconds. If you finish in under 30, you skipped the pauses; do it again.",
        "Lee en voz alta las seis líneas del guion marcado y grábate. Respeta cada marca, con dos segundos completos en cada doble diagonal. Debe tomarte entre 40 y 50 segundos. Si terminas en menos de 30, te saltaste las pausas; repítelo.",
      ],
      think: 30,
      speak: 50,
      checklist: [
        ["My voice went down at every double slash.", "Mi voz bajó en cada doble diagonal."],
        [
          "The words in capitals were longer, not just louder.",
          "Las palabras en mayúsculas duraron más, no solo sonaron más fuerte.",
        ],
        ["My mouth was closed during the pauses.", "Tuve la boca cerrada durante las pausas."],
        [
          "No <em>um</em>, no <em>ehh</em>, no <em>so</em> at the start of a line.",
          "Sin <em>um</em>, sin <em>ehh</em>, sin <em>so</em> al inicio de una línea.",
        ],
        ["The first line was the slowest.", "La primera línea fue la más lenta."],
      ],
    },
    {
      t: "trap",
      title: ["Spanish rhythm in English sentences", "Ritmo de español en oraciones en inglés"],
      html: [
        "Spanish gives every syllable roughly the same length. English leans hard on a few stressed words and compresses the rest. When English is spoken with an even Spanish rhythm, every word arrives with the same weight, and the listener has to work out which ones matter. You do not need a different accent. You need to lengthen the key word. Two more habits cross over. The Spanish check-in <em>¿no?</em> becomes <em>right?</em> at the end of every sentence, which in English sounds like a request for approval. And the Spanish thinking sounds, <em>este…</em> and <em>eh…</em>, become a long <em>ehh</em> that American ears notice more than <em>um</em>. The replacement for all three is the same: close your mouth and pause.",
        "El español le da a cada sílaba más o menos la misma duración. El inglés se apoya con fuerza en unas cuantas palabras acentuadas y comprime las demás. Cuando hablas inglés con el ritmo parejo del español, todas las palabras llegan con el mismo peso, y quien escucha tiene que descifrar cuáles importan. No necesitas otro acento. Necesitas alargar la palabra clave. Hay dos costumbres más que se cuelan. El <em>¿no?</em> con el que confirmamos en español se vuelve <em>right?</em> al final de cada oración, y en inglés suena a que pides aprobación. Y los sonidos con los que pensamos, <em>este…</em> y <em>eh…</em>, se vuelven un <em>ehh</em> largo que al oído estadounidense le llama más la atención que <em>um</em>. El reemplazo para los tres es el mismo: cierra la boca y haz una pausa.",
      ],
    },
    {
      t: "p",
      html: [
        "Everyone who works in a second language loses words in public. What the room remembers is what you did next. An apology (<em>sorry, my English</em>) makes the moment about your English. A calm workaround makes it a non-event: describe the thing, use a simpler word, or say the idea a second way. Native speakers do the same several times a day.",
        "Toda persona que trabaja en un segundo idioma pierde palabras en público. Lo que la sala recuerda es lo que hiciste después. Una disculpa (<em>sorry, my English</em>) convierte el momento en un tema sobre tu inglés. Una salida tranquila lo vuelve irrelevante: describe la cosa, usa una palabra más sencilla o di la idea de otra forma. Quienes hablan inglés como lengua materna hacen lo mismo varias veces al día.",
      ],
    },
    {
      t: "phrases",
      title: ["Rescue lines", "Frases de rescate"],
      items: [
        {
          en: "Let me put that another way.",
          use: [
            "When a sentence gets tangled. Stop it, say this, and start a shorter one.",
            "Cuando una oración se te enreda. Córtala, di esto y empieza una más corta.",
          ],
        },
        {
          en: "What I mean is ___.",
          use: [
            "A second attempt at the same idea in simpler words.",
            "Un segundo intento de la misma idea con palabras más sencillas.",
          ],
        },
        {
          en: "Give me one second.",
          use: [
            "Then silence. Asking for a second and taking it is completely acceptable.",
            "Y luego silencio. Pedir un segundo y tomártelo es totalmente aceptable.",
          ],
        },
        {
          en: "The word escapes me. It's the thing that ___.",
          use: [
            "Name the gap once, without apology, and describe what you mean.",
            "Nombra el hueco una vez, sin disculparte, y describe lo que quieres decir.",
          ],
        },
        {
          en: "What's the word for a contract that renews by itself?",
          use: [
            "Asking the room is a confident move. People like to help, and you get the word.",
            "Preguntarle a la sala es una jugada segura. A la gente le gusta ayudar, y te llevas la palabra.",
          ],
        },
        {
          en: "In simple terms, ___.",
          use: [
            "When the technical term will not come, or the audience may not know it anyway.",
            "Cuando no te llega el término técnico, o cuando de todos modos la audiencia quizá no lo conoce.",
          ],
        },
        {
          en: "Let me check my notes.",
          use: [
            "For a blank. Look down, find your place, look up, continue. No apology.",
            "Para cuando te quedas en blanco. Baja la mirada, encuentra dónde ibas, levántala y sigue. Sin disculpa.",
          ],
        },
        {
          en: "Where was I. Right: the second reason.",
          use: [
            "Finds your place out loud and uses a signpost to restart.",
            "Retomas el hilo en voz alta y usas una señal para arrancar de nuevo.",
          ],
        },
        {
          en: "Let me say that number again.",
          use: [
            "When you misspoke a figure. Correct it cleanly and move on.",
            "Cuando dijiste mal una cifra. Corrígela con limpieza y sigue adelante.",
          ],
        },
        {
          en: "Let me come back to that.",
          use: [
            "Parks a point you cannot finish now. Come back to it, or it costs you trust.",
            "Deja pendiente un punto que no puedes terminar ahora. Regresa a él, o te cuesta confianza.",
          ],
        },
      ],
    },
    {
      t: "framework",
      title: ["The first ten seconds", "Los primeros diez segundos"],
      lead: [
        "Nerves are strongest just before you start and just after. Give your body a routine so your mind does not have to improvise one.",
        "Los nervios pegan más fuerte justo antes de empezar y justo después. Dale a tu cuerpo una rutina para que tu mente no tenga que improvisarla.",
      ],
      steps: [
        {
          label: ["Plant", "Plántate"],
          html: [
            "Both feet on the floor, weight even. On a video call, sit back in the chair with the camera at eye level. Stillness reads as calm.",
            "Los dos pies en el piso, el peso parejo. En una videollamada, recárgate en la silla con la cámara a la altura de los ojos. La quietud se lee como calma.",
          ],
        },
        {
          label: ["Breathe out", "Exhala"],
          html: [
            "One slow breath out before your first word. Starting on a gulp of air is how the first sentence comes out fast and high.",
            "Una exhalación lenta antes de tu primera palabra. Arrancar con una bocanada de aire es lo que hace que la primera oración salga rápida y aguda.",
          ],
        },
        {
          label: ["Find one face", "Busca una cara"],
          html: [
            "Look at one person, or at the camera lens, for the whole first sentence. Move to someone else for the next one. One thought, one person.",
            "Mira a una persona, o al lente de la cámara, durante toda la primera oración. Pasa a alguien más para la siguiente. Una idea, una persona.",
          ],
        },
        {
          label: ["Say the sentence you know cold", "Di la oración que te sabes de memoria"],
          html: [
            "Memorize exactly one thing: your first sentence. Leave the rest of the talk as keywords. Knowing the first ten words carries you through the worst of the nerves.",
            "Memoriza exactamente una cosa: tu primera oración. El resto de la intervención déjalo en palabras clave. Saberte las primeras diez palabras te saca de lo peor de los nervios.",
          ],
          say: "Good morning. I'm here to ask for one decision.",
        },
        {
          label: ["Pause", "Haz una pausa"],
          html: [
            "Stop for two seconds after it. You just showed the room, and yourself, that you set the pace.",
            "Detente dos segundos después de decirla. Acabas de mostrarle a la sala, y a ti, que el ritmo lo pones tú.",
          ],
        },
      ],
    },
    {
      t: "list",
      items: [
        [
          "<b>Hands:</b> let them rest at your sides or lightly together at waist height. Use them when you count (<em>first, second, third</em>) or show size. Put the pen down.",
          "<b>Manos:</b> déjalas a los lados o juntas sin apretar a la altura de la cintura. Úsalas cuando cuentes (<em>first, second, third</em>) o cuando muestres un tamaño. Suelta la pluma.",
        ],
        [
          "<b>Feet:</b> stand still while you make a point. Move only between points.",
          "<b>Pies:</b> quédate en tu lugar mientras planteas un punto. Muévete solo entre un punto y otro.",
        ],
        [
          "<b>Slides:</b> say the sentence to a person, not to the screen. If you need to read a number, read it, look up, and then say what it means.",
          "<b>Diapositivas:</b> dile la oración a una persona, no a la pantalla. Si necesitas leer un número, léelo, levanta la mirada y entonces di qué significa.",
        ],
        [
          "<b>On video:</b> look at the lens for your claim and your ask. The faces on the screen can wait two sentences.",
          "<b>En video:</b> mira al lente para tu afirmación y para tu petición. Las caras en la pantalla pueden esperar dos oraciones.",
        ],
      ],
    },
    {
      t: "choice",
      title: ["What do you do next", "¿Qué haces después?"],
      items: [
        {
          prompt: [
            "Mid-sentence, you cannot find the English word for <em>licitación</em>.",
            "A media oración, no encuentras la palabra en inglés para <em>licitación</em>.",
          ],
          options: [
            {
              en: "Sorry, my English is not so good today. How do you say…",
              ok: false,
              why: [
                "The apology moves the room's attention from your point to your English, and it stays there.",
                "La disculpa mueve la atención de la sala de tu punto a tu inglés, y ahí se queda.",
              ],
            },
            {
              en: "…the formal process where suppliers compete for the contract. We open it in May.",
              ok: true,
              why: [
                "You described it and kept going. Most of the room will not notice a word was missing. (The term is <em>bidding process</em>, or <em>RFP</em>.)",
                "Lo describiste y seguiste. La mayoría de la sala ni va a notar que faltó una palabra. (El término es <em>bidding process</em>, o <em>RFP</em>.)",
              ],
            },
            {
              en: "…the licitación. We open the licitación in May.",
              ok: false,
              why: [
                "It works only if everyone speaks Spanish. Otherwise you lost them at the one noun the sentence depends on.",
                "Solo funciona si todos hablan español. Si no, los perdiste en el único sustantivo del que depende la oración.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You just stated your recommendation. The room is silent and nobody reacts.",
            "Acabas de plantear tu recomendación. La sala está en silencio y nadie reacciona.",
          ],
          options: [
            {
              en: "So, yeah, I mean, that's basically what we were thinking, more or less.",
              ok: false,
              why: [
                "It fills the silence by weakening what you just said.",
                "Llena el silencio debilitando lo que acabas de decir.",
              ],
            },
            {
              en: "Does that make sense?",
              ok: false,
              why: [
                "Useful after a complicated explanation. Right after your claim, it asks for reassurance.",
                "Sirve después de una explicación complicada. Justo después de tu afirmación, pide que te tranquilicen.",
              ],
            },
            {
              en: "(Two seconds of silence.) Let me give you the two reasons.",
              ok: true,
              why: [
                "The silence is people thinking. Let it happen, then continue with a signpost.",
                "El silencio es la gente pensando. Déjalo ocurrir y luego continúa con una señal.",
              ],
            },
          ],
        },
        {
          prompt: [
            "On a video call, someone says: <em>Sorry, could you repeat that?</em>",
            "En una videollamada, alguien dice: <em>Sorry, could you repeat that?</em>",
          ],
          options: [
            {
              en: "(The same words, faster and louder.) We expect the certification by the end of Q2.",
              ok: false,
              why: [
                "If speed was the problem, more speed makes it worse, and volume does not help.",
                "Si el problema era la velocidad, más velocidad lo empeora, y el volumen no ayuda.",
              ],
            },
            {
              en: "Sure. We expect the certification / by the end of JUNE. //",
              ok: true,
              why: [
                "Slower, in two groups, and one word swapped (<em>Q2</em> for <em>June</em>) in case the word was the problem.",
                "Más lento, en dos grupos, y con una palabra cambiada (<em>Q2</em> por <em>June</em>) por si el problema era la palabra.",
              ],
            },
            {
              en: "Sorry, sorry, it's my accent. I said we expect the certification by the end of Q2.",
              ok: false,
              why: [
                "People ask for repeats because of audio, speed or distraction far more often than accent. Do not offer an explanation nobody asked for.",
                "La gente pide que repitas por el audio, la velocidad o una distracción mucho más seguido que por el acento. No ofrezcas una explicación que nadie pidió.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Your mind goes blank in the middle of your second reason.",
            "Te quedas en blanco a la mitad de tu segunda razón.",
          ],
          options: [
            {
              en: "I'm so sorry, I completely lost my idea. This is embarrassing.",
              ok: false,
              why: [
                "Now the room is managing your embarrassment. A blank lasts three seconds; this makes it last a minute.",
                "Ahora la sala está atendiendo tu pena. Un blanco dura tres segundos; con esto dura un minuto.",
              ],
            },
            {
              en: "Um, so, yeah, the thing is, basically, it's, how to say, the second thing…",
              ok: false,
              why: [
                "Searching out loud announces the search. Search in silence.",
                "Buscar en voz alta anuncia que estás buscando. Busca en silencio.",
              ],
            },
            {
              en: "Let me check my notes. (Pause.) Right: the second reason is cost.",
              ok: true,
              why: [
                "A calm line, a real pause, and a signpost to restart. It looks like preparation.",
                "Una frase tranquila, una pausa de verdad y una señal para retomar. Se ve como preparación.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Your own first ten seconds", "Tus propios primeros diez segundos"],
      prompt: [
        "Write the first sentence and the claim of a talk or update you will really give this week. Mark the chunks, the stress and the pauses. Stand up, plant your feet, breathe out, and say both to one point on the wall or to your camera. Record three takes and keep the third.",
        "Escribe la primera oración y la afirmación de una presentación o un reporte que de verdad vas a dar esta semana. Marca los grupos, el acento y las pausas. Ponte de pie, planta los pies, exhala y di las dos a un punto en la pared o a tu cámara. Graba tres tomas y quédate con la tercera.",
      ],
      think: 60,
      speak: 20,
      frame: "Good morning. // I'm here to ___. // My recommendation is ___. //",
      checklist: [
        ["I breathed out before the first word.", "Exhalé antes de la primera palabra."],
        [
          "I paused for a full two seconds after the first sentence.",
          "Hice una pausa de dos segundos completos después de la primera oración.",
        ],
        [
          "One word in each group was clearly longer.",
          "Una palabra de cada grupo duró claramente más.",
        ],
        [
          "Both sentences ended with my voice going down.",
          "Las dos oraciones terminaron con mi voz hacia abajo.",
        ],
        ["Zero fillers in twenty seconds.", "Cero muletillas en veinte segundos."],
      ],
      model:
        "Good afternoon. // I have ONE update / and ONE request. // The update: / we passed the AUDIT. // The request: / two more WEEKS / to close the last three FINDINGS. //",
    },
    {
      t: "takeaways",
      items: [
        [
          "Slow down by pausing. Short groups of words, a full stop between them.",
          "Baja la velocidad con pausas. Grupos cortos de palabras, y una pausa completa entre ellos.",
        ],
        [
          "One stressed word per group, made longer. That word is your message.",
          "Una palabra acentuada por grupo, y más larga. Esa palabra es tu mensaje.",
        ],
        [
          "Statements go down at the end. Drop <em>right?</em>",
          "Las afirmaciones bajan al final. Suelta el <em>right?</em>",
        ],
        ["Replace every filler with a closed mouth.", "Cambia cada muletilla por la boca cerrada."],
        [
          "When a word will not come, describe it and keep going. Never apologize for your English.",
          "Cuando no te llegue una palabra, descríbela y sigue. Nunca te disculpes por tu inglés.",
        ],
      ],
    },
  ],
};
