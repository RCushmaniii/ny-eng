import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "narrate",
  slugEs: "narrar",
  title: ["Narrate: Turn One Moment Into a Story", "Narrar: Convierte un Momento en una Historia"],
  summary: [
    "Choose a single moment, tell what came before and after it, and give the feeling together with its cause.",
    "Elige un solo momento, cuenta qué pasó antes y después, y da la emoción junto con su causa.",
  ],
  description: [
    "Tell a short story in English that people remember: one moment, before and after, a feeling with its cause, and past tenses that stay put.",
    "Cuenta en inglés una historia breve que sí se recuerda: un momento, el antes y el después, una emoción con su causa y los tiempos del pasado.",
  ],
  minutes: 18,
  blocks: [
    {
      t: "p",
      html: [
        "In the project review you say: <em>We had a serious problem with the client in March, but the team reacted very well and in the end we solved it.</em> Every word is true, and it is gone from the room before the next agenda item. Then a colleague describes the same week and begins, <em>It was 6:40 on a Friday, and I was the last one in the office.</em> People stop typing.",
        "En la revisión del proyecto dices: <em>We had a serious problem with the client in March, but the team reacted very well and in the end we solved it.</em> Cada palabra es cierta, y ya se fue de la sala antes del siguiente punto de la agenda. Luego alguien de tu equipo describe la misma semana y empieza: <em>It was 6:40 on a Friday, and I was the last one in the office.</em> La gente deja de teclear.",
      ],
    },
    {
      t: "p",
      html: [
        "Your version was a summary: months compressed into three verdicts. Hers was a moment. A listener cannot picture <em>a serious problem</em>, and what cannot be pictured is not remembered. This lesson trains the smallest unit of story, one moment told well in under a minute. Later in the course you will use it to move a decision; here the job is only to build it.",
        "Tu versión fue un resumen: meses comprimidos en tres veredictos. La de ella fue un momento. Nadie puede imaginarse <em>a serious problem</em>, y lo que no se puede imaginar no se recuerda. Esta lección entrena la unidad más pequeña de una historia, un momento bien contado en menos de un minuto. Más adelante en el curso lo vas a usar para mover una decisión; aquí el trabajo es solo construirlo.",
      ],
    },
    {
      t: "idea",
      title: [
        "One moment, a before and an after, a feeling with its cause",
        "Un momento, un antes y un después, una emoción con su causa",
      ],
      html: [
        "A story is a change you can watch. So it needs a single scene, minutes long and not months; what was true just before it; and what was different just after. Then it needs one feeling, and the feeling needs its <em>because</em>. <em>He is scared</em> is a label, and the listener has to take your word for it. <em>He's scared because from the ground the board looked half this high</em> puts the listener up there with him.",
        "Una historia es un cambio que se puede ver. Por eso necesita una sola escena, de minutos y no de meses; lo que era cierto justo antes; y lo que fue distinto justo después. Luego necesita una emoción, y la emoción necesita su <em>because</em>. <em>He is scared</em> es una etiqueta, y quien escucha tiene que creértela. <em>He's scared because from the ground the board looked half this high</em> sube a quien escucha ahí con él.",
      ],
    },
    {
      t: "framework",
      title: ["Before, after, feeling", "Before, after, feeling"],
      lead: [
        "Five moves, about ten seconds each. If you stall in the middle, the next time marker restarts you: <em>Earlier that day… Right now… A minute later… In the end…</em>",
        "Cinco movimientos, de unos diez segundos cada uno. Si te atoras a la mitad, el siguiente marcador de tiempo te vuelve a arrancar: <em>Earlier that day… Right now… A minute later… In the end…</em>",
      ],
      steps: [
        {
          label: ["The moment", "El momento"],
          html: [
            "A time, a place, and what someone was doing. Small enough to film in one shot.",
            "Una hora, un lugar y lo que alguien estaba haciendo. Tan chico que se pudiera filmar en una sola toma.",
          ],
          say: "It was 6:40 on a Friday, and I was the last one in the office.",
        },
        {
          label: ["Before", "Before: el antes"],
          html: [
            "What was true earlier, the thing that makes this moment matter. One sentence, usually with <em>had</em>.",
            "Lo que era cierto antes, eso que hace que este momento importe. Una oración, casi siempre con <em>had</em>.",
          ],
          say: "Earlier that day, I had told the client we were ready for Monday.",
        },
        {
          label: ["The turn", "El giro"],
          html: [
            "What happened. Use your shortest sentence here; the turn does not need decoration.",
            "Lo que pasó. Usa aquí tu oración más corta; el giro no necesita adorno.",
          ],
          say: "I ran one last test order. It came back with the wrong price on every line.",
        },
        {
          label: ["The feeling, with its cause", "La emoción, con su causa"],
          html: [
            "One feeling, named plainly, and why this person felt it at this moment. The cause is where the listener recognizes themselves.",
            "Una emoción, nombrada sin rodeos, y por qué esta persona la sintió en este momento. En la causa es donde quien escucha se reconoce.",
          ],
          say: 'I felt sick, because "ready" had been my word.',
        },
        {
          label: ["After", "After: el después"],
          html: [
            "What happened next and what is different now. End on a fact, and let the room draw the moral.",
            "Qué pasó después y qué es distinto ahora. Cierra con un hecho, y deja que la sala saque la moraleja.",
          ],
          say: 'In the end we went live on Wednesday, and nobody on my team says "ready" before a full test anymore.',
        },
      ],
    },
    {
      t: "compare",
      title: ["A label vs. a moment", "Una etiqueta vs. un momento"],
      labels: [
        ["Label", "Etiqueta"],
        ["Moment", "Momento"],
      ],
      rows: [
        {
          weak: "The client was very angry.",
          strong:
            'The client closed her laptop and said, "I\'ve heard this before." She had. Twice, from us.',
          why: [
            "What she did, her exact words, and the cause. The word <em>angry</em> never appears and is not needed.",
            "Lo que hizo, sus palabras exactas y la causa. La palabra <em>angry</em> nunca aparece y no hace falta.",
          ],
        },
        {
          weak: "I was nervous before the demo.",
          strong:
            "I checked the cable three times before the client walked in, because our last demo had died on the first slide.",
          why: [
            "The feeling shows in an action, and the <em>because</em> tells the room it was a reasonable thing to feel.",
            "La emoción se ve en una acción, y el <em>because</em> le dice a la sala que era razonable sentirla.",
          ],
        },
        {
          weak: "The team was very happy with the result.",
          strong:
            "When the number came up on the screen, nobody spoke. Then Jorge started clapping, by himself. It was our first green month in a year.",
          why: [
            "A second of silence, one person, and the cause last. <em>Very happy</em> could describe any team on any day.",
            "Un segundo de silencio, una persona y la causa al final. <em>Very happy</em> podría describir a cualquier equipo en cualquier día.",
          ],
        },
        {
          weak: "She was frustrated with the new system.",
          strong:
            "She typed the same invoice number for the third time and pushed the keyboard away. The system had logged her out again.",
          why: [
            "The cause arrives in the past perfect, <em>had logged her out</em>: the thing that happened just before the moment.",
            "La causa llega en pasado perfecto, <em>had logged her out</em>: lo que pasó justo antes del momento.",
          ],
        },
        {
          weak: "It was a difficult meeting.",
          strong:
            "Twenty minutes into the meeting, the CFO stopped taking notes and put his pen down.",
          why: [
            "One detail the listener can see does the work of the adjective, and does it better.",
            "Un detalle que se puede ver hace el trabajo del adjetivo, y lo hace mejor.",
          ],
        },
        {
          weak: "We had many problems during the project and it was very stressful.",
          strong:
            "In week three, our server went down in the middle of the client's own board meeting.",
          why: [
            "<em>Many problems</em> is a summary of six months. One of them, with its week and its place, stands for all of them.",
            "<em>Many problems</em> es el resumen de seis meses. Uno solo, con su semana y su lugar, representa a todos.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: [
        "Lines that move a story through time",
        "Frases que mueven una historia en el tiempo",
      ],
      items: [
        {
          en: "It was ___ on a ___, and I was ___ing.",
          use: [
            "Sets the scene: the time in simple past, the background action in <em>-ing</em>.",
            "Arma la escena: la hora en pasado simple, la acción de fondo en <em>-ing</em>.",
          ],
        },
        {
          en: "Earlier that day, ___.",
          use: ["Steps back to the before.", "Da un paso atrás, hacia el antes."],
        },
        {
          en: "Up to that point, we had ___.",
          use: [
            "The before as a state: what everyone believed until the turn.",
            "El antes como un estado: lo que todos creían hasta que llegó el giro.",
          ],
        },
        {
          en: "That's when ___.",
          use: [
            "Announces the turn. Follow it with a short sentence.",
            "Anuncia el giro. Después de ella va una oración corta.",
          ],
        },
        {
          en: "A minute later, ___.",
          use: [
            "Moves forward one step. Also the best cure for a stall.",
            "Avanza un paso. También es el mejor remedio cuando te atoras.",
          ],
        },
        {
          en: "What I didn't know was ___.",
          use: [
            "Gives the listener something the person in the story did not have.",
            "Le da a quien escucha algo que la persona de la historia no tenía.",
          ],
        },
        {
          en: "I remember thinking, ___.",
          use: [
            "A feeling delivered as a thought. Often more natural than naming the emotion.",
            "Una emoción entregada como pensamiento. Muchas veces es más natural que nombrar la emoción.",
          ],
        },
        {
          en: "I was ___, because ___.",
          use: [
            "The feeling with its cause. <em>Relieved</em>, <em>embarrassed</em>, <em>furious</em>, <em>proud</em>: pick the exact one.",
            "La emoción con su causa. <em>Relieved</em>, <em>embarrassed</em>, <em>furious</em>, <em>proud</em>: elige la exacta.",
          ],
        },
        {
          en: 'She looked at me and said, "___."',
          use: [
            "Exact words, in quotes. One line of speech makes a scene real.",
            "Palabras exactas, entre comillas. Una línea de diálogo vuelve real una escena.",
          ],
        },
        {
          en: "In the end, ___.",
          use: ["How it came out.", "Cómo terminó."],
        },
        {
          en: "Since then, ___.",
          use: [
            "What is different now. The strongest way to close a lesson-learned story.",
            "Lo que es distinto ahora. La forma más fuerte de cerrar una historia de lección aprendida.",
          ],
        },
      ],
    },
    {
      t: "p",
      html: [
        "<b>The tenses of a story.</b> Three do nearly all the work. The <b>simple past</b> carries the events in order: <em>I ran the test. It failed. I called her.</em> The <b>past continuous</b> paints what was already going on: <em>I was packing up when the alert came in.</em> The <b>past perfect</b> reaches back to the before: <em>I had told the client we were ready.</em> A story about work stays in the past from the first sentence to the last. A picture is different, because you are looking at the moment itself: the before goes in the past, the moment in the present continuous, and the after in the future. <em>Earlier that day he watched his cousin jump. Right now he's standing at the edge. A minute from now he's going to step off.</em>",
        "<b>Los tiempos de una historia.</b> Tres hacen casi todo el trabajo. El <b>pasado simple</b> lleva los eventos en orden: <em>I ran the test. It failed. I called her.</em> El <b>pasado continuo</b> pinta lo que ya estaba ocurriendo: <em>I was packing up when the alert came in.</em> El <b>pasado perfecto</b> se va hacia atrás, al antes: <em>I had told the client we were ready.</em> Una historia de trabajo se queda en pasado desde la primera oración hasta la última. Una imagen es distinta, porque estás viendo el momento mismo: el antes va en pasado, el momento en presente continuo y el después en futuro. <em>Earlier that day he watched his cousin jump. Right now he's standing at the edge. A minute from now he's going to step off.</em>",
      ],
    },
    {
      t: "speak",
      title: ["Picture 1: the diving board", "Imagen 1: el trampolín"],
      prompt: [
        "What brought him up here, and what happens next? The picture gives you only the moment; the before and the after are yours to invent. In the think time, decide four things: what happened earlier, what he is doing right now, what he feels and why, and how it ends. Then tell it.",
        "¿Qué lo trajo hasta aquí arriba, y qué pasa después? La imagen te da solo el momento; el antes y el después te toca inventarlos. En el tiempo de pensar, decide cuatro cosas: qué pasó antes, qué está haciendo ahora, qué siente y por qué, y cómo termina. Luego cuéntalo.",
      ],
      image: {
        src: "/images/course/persuasive-speaking/diving-board.jpg",
        alt: [
          "A boy standing at the edge of a high diving board.",
          "Un niño parado en la orilla de un trampolín alto.",
        ],
      },
      think: 30,
      speak: 45,
      frame:
        "Earlier that day, ___. Right now, he's ___. He feels ___ because ___. A minute from now, ___. In the end, ___.",
      checklist: [
        [
          "My story had a before, the moment, and an after.",
          "Mi historia tuvo un antes, el momento y un después.",
        ],
        [
          "I named one feeling and gave its cause with <em>because</em>.",
          "Nombré una emoción y di su causa con <em>because</em>.",
        ],
        [
          "I included one specific detail that I chose, such as a person, a number or a sound.",
          "Incluí un detalle específico elegido por mí, como una persona, un número o un sonido.",
        ],
        [
          "The before was in the past, and the moment in the present continuous.",
          "El antes estuvo en pasado, y el momento en presente continuo.",
        ],
        [
          "I ended on what happens, and did not explain the moral.",
          "Cerré con lo que pasa, y no expliqué la moraleja.",
        ],
      ],
      model:
        "Earlier that afternoon, he watched his older cousin jump from this board and come up laughing, and he told everyone he would do it too. Right now he's standing at the very edge, and he isn't moving. He's scared, because from the ground the board looked half this high, and everyone he told is down there watching. A minute from now, he's going to close his eyes and step off. In the end, he'll climb out of the pool and get right back in line.",
    },
    {
      t: "speak",
      title: ["Picture 2: moving day", "Imagen 2: el día de la mudanza"],
      prompt: [
        "What is he leaving behind, and what will he miss most? This one is quieter than the diving board; nothing dramatic is about to happen. The story is in the cause of the feeling, so spend your think time there. Choose one thing he will miss and decide exactly why that one.",
        "¿Qué está dejando atrás, y qué va a extrañar más? Esta es más callada que la del trampolín; no está por pasar nada dramático. La historia está en la causa de la emoción, así que usa ahí tu tiempo de pensar. Elige una cosa que va a extrañar y decide exactamente por qué esa.",
      ],
      image: {
        src: "/images/course/persuasive-speaking/moving-day.jpg",
        alt: [
          "A boy on the front steps of an empty house on moving day, with a box of keepsakes, a truck being closed and a tire swing.",
          "Un niño en los escalones de la entrada de una casa vacía el día de la mudanza, con una caja de recuerdos, un camión que están cerrando y un columpio de llanta.",
        ],
      },
      think: 30,
      speak: 45,
      frame:
        "Earlier that morning, ___. Right now, he's ___. The thing he'll miss most is ___, because ___. A minute from now, ___. In the end, ___.",
      checklist: [
        [
          "I chose one thing he will miss, and only one.",
          "Elegí una cosa que va a extrañar, y solo una.",
        ],
        [
          "The cause was specific to him. It could not be said about any child on any moving day.",
          "La causa fue específica de él. No se podría decir de cualquier niño en cualquier mudanza.",
        ],
        [
          "I used at least two time markers to move the story.",
          "Usé por lo menos dos marcadores de tiempo para mover la historia.",
        ],
        [
          "I did not use <em>very</em> or <em>really</em> to make the feeling bigger.",
          "No usé <em>very</em> ni <em>really</em> para hacer más grande la emoción.",
        ],
      ],
      model:
        "Earlier that morning, the house was still full of boxes. He carried the last one out himself, the one with his own keepsakes, and he wouldn't let anyone else touch it. Right now he's on the front steps with that box. The house behind him is empty, and someone is closing the truck. The thing he'll miss most is the tire swing, because his grandfather hung it the summer he turned five, and it's the one thing that can't go in the truck. A minute from now, someone will call his name. In the end, he'll look back once, at the swing.",
    },
    {
      t: "model",
      title: ["One evening in March", "Una tarde de marzo"],
      context: [
        "Andrea manages implementations. In a team review, she is asked what she learned from a go-live that slipped by two days.",
        "Andrea coordina implementaciones. En una revisión con su equipo, le preguntan qué aprendió de una salida a producción que se retrasó dos días.",
      ],
      lines: [
        {
          en: "Let me tell you about one evening in March.",
          note: [
            "She promises one moment, and that is all she will tell.",
            "Promete un solo momento, y eso es todo lo que va a contar.",
          ],
        },
        {
          en: "It was 6:40 on a Friday, and I was the last one in the office.",
          note: [
            "Time, place, and a background action in the past continuous.",
            "Hora, lugar y una acción de fondo en pasado continuo.",
          ],
        },
        {
          en: "Earlier that day, I had told the client we were ready for Monday's go-live.",
          note: [
            "The before, in the past perfect. Now the room knows what is at risk.",
            "El antes, en pasado perfecto. Ahora la sala sabe qué está en riesgo.",
          ],
        },
        {
          en: "I ran one last test order, mostly so I could enjoy my weekend.",
          note: [
            "A small honest detail. It tells you she expected nothing.",
            "Un detalle pequeño y honesto. Te dice que no esperaba nada.",
          ],
        },
        {
          en: "It came back with the wrong price on every line.",
          note: [
            "The turn. Ten words, and the only adjective is <em>wrong</em>.",
            "El giro. Diez palabras, y el único adjetivo es <em>wrong</em>.",
          ],
        },
        {
          en: 'I felt sick, because "ready" had been my word, and I had said it without testing a full order.',
          note: [
            "The feeling with its cause. The cause is also the lesson, and she has not had to announce it.",
            "La emoción con su causa. La causa es también la lección, y no tuvo que anunciarla.",
          ],
        },
        {
          en: 'I called the client that night. She was quiet for a second, and then she said, "Thank you for telling me on Friday."',
          note: [
            "The after, with the client's exact words.",
            "El después, con las palabras exactas de la clienta.",
          ],
        },
        {
          en: 'We went live on Wednesday. Since then, nobody on my team says "ready" until a full order has gone through.',
          note: [
            "She ends on what changed. The past tense held from the first line to this one.",
            "Cierra con lo que cambió. El pasado se sostuvo desde la primera línea hasta esta.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: ["The story that slides into the present", "La historia que se resbala al presente"],
      html: [
        "Spoken Spanish tells stories in the present all the time: <em>y entonces llego, y me dice que no, y yo me quedo helado</em>. It is vivid and completely natural. In English at work, the same switch sounds like losing control of the tenses: <span class='x'>✗</span> <em>So I arrive, and he says me no, and I stay frozen.</em> <span class='ok'>✓</span> <em>I arrived, he said no, and I froze.</em> Start in the past and stay there. Four smaller transfers travel with stories. Feelings in Spanish are things you <em>have</em>; in English you <em>are</em> them: <span class='x'>✗</span> <em>I had fear</em>, <span class='ok'>✓</span> <em>I was scared</em>. <em>Me dio pena</em> is <span class='ok'>✓</span> <em>I was embarrassed</em>, a word that has nothing to do with <em>embarazada</em>. The <em>-ed</em> form is how you feel and the <em>-ing</em> form is what causes it: <span class='x'>✗</span> <em>I was boring in the meeting</em> says you bored everyone else; <span class='ok'>✓</span> <em>I was bored</em>. <em>Say</em> does not take a person directly: <span class='x'>✗</span> <em>She said me</em>, <span class='ok'>✓</span> <em>She told me</em> or <em>She said to me</em>. And a finished time takes the simple past: <span class='x'>✗</span> <em>Yesterday I have called the client</em>, <span class='ok'>✓</span> <em>Yesterday I called the client</em>.",
        "El español hablado cuenta historias en presente todo el tiempo: <em>y entonces llego, y me dice que no, y yo me quedo helado</em>. Es vívido y completamente natural. En inglés, en el trabajo, ese mismo cambio suena a que perdiste el control de los tiempos: <span class='x'>✗</span> <em>So I arrive, and he says me no, and I stay frozen.</em> <span class='ok'>✓</span> <em>I arrived, he said no, and I froze.</em> Empieza en pasado y quédate ahí. Con las historias viajan cuatro traslados más pequeños. En español las emociones se <em>tienen</em>; en inglés se <em>es</em> o se <em>está</em>: <span class='x'>✗</span> <em>I had fear</em>, <span class='ok'>✓</span> <em>I was scared</em>. <em>Me dio pena</em> es <span class='ok'>✓</span> <em>I was embarrassed</em>, una palabra que no tiene nada que ver con <em>embarazada</em>. La forma en <em>-ed</em> es cómo te sientes y la forma en <em>-ing</em> es lo que lo provoca: <span class='x'>✗</span> <em>I was boring in the meeting</em> dice que tú aburriste a todos; <span class='ok'>✓</span> <em>I was bored</em>. <em>Say</em> no lleva a la persona directamente: <span class='x'>✗</span> <em>She said me</em>, <span class='ok'>✓</span> <em>She told me</em> o <em>She said to me</em>. Y un tiempo ya terminado lleva pasado simple: <span class='x'>✗</span> <em>Yesterday I have called the client</em>, <span class='ok'>✓</span> <em>Yesterday I called the client</em>.",
      ],
    },
    {
      t: "choice",
      title: ["Choose the line that tells it", "Elige la frase que lo cuenta"],
      items: [
        {
          prompt: [
            "In a team review, someone asks what the migration was like. Which opening starts a story?",
            "En una revisión con tu equipo, alguien pregunta cómo estuvo la migración. ¿Cuál entrada arranca una historia?",
          ],
          options: [
            {
              en: "The migration was complicated from the beginning, for many different reasons.",
              ok: false,
              why: [
                "A summary of the whole thing. There is nothing in it to see.",
                "Un resumen de todo el asunto. No trae nada que se pueda ver.",
              ],
            },
            {
              en: "I'd like to share a story about the migration that I think is quite interesting.",
              ok: false,
              why: [
                "It promises a story and rates it in advance. Start the story instead; let them decide if it is interesting.",
                "Promete una historia y la califica por adelantado. Mejor empieza la historia; que la sala decida si es interesante.",
              ],
            },
            {
              en: "At two in the morning on migration night, the progress bar stopped at 71 percent.",
              ok: true,
              why: [
                "A time, a thing on a screen, and a problem. Everyone wants the next sentence.",
                "Una hora, algo en una pantalla y un problema. Todos quieren la siguiente oración.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are describing how the client reacted when you moved the date.",
            "Estás describiendo cómo reaccionó la clienta cuando recorriste la fecha.",
          ],
          options: [
            {
              en: "She was disappointed, because she had already promised her board the March date.",
              ok: true,
              why: [
                "One feeling and its cause. Now her reaction makes sense, and the room is on her side.",
                "Una emoción y su causa. Ahora su reacción tiene sentido, y la sala está de su lado.",
              ],
            },
            {
              en: "She was very disappointed.",
              ok: false,
              why: [
                "A label. The listener knows the word and feels nothing.",
                "Una etiqueta. Quien escucha conoce la palabra y no siente nada.",
              ],
            },
            {
              en: "She was extremely, deeply disappointed with all of us.",
              ok: false,
              why: [
                "More adverbs on the same label. The feeling gets louder and no clearer.",
                "Más adverbios sobre la misma etiqueta. La emoción suena más fuerte y no más clara.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are in the middle of a story about a client visit. Which version holds its tenses?",
            "Vas a la mitad de una historia sobre la visita a un cliente. ¿Cuál versión sostiene sus tiempos?",
          ],
          options: [
            {
              en: "So I walk into the room, and the client is already there, and he says me that the board moved the meeting.",
              ok: false,
              why: [
                "The Spanish storytelling present, carried over, plus <em>says me</em>. In English it reads as a tense error.",
                "El presente narrativo del español, trasladado, más <em>says me</em>. En inglés se lee como un error de tiempos.",
              ],
            },
            {
              en: "I walked into the room. The client was already there, and he told me the board had moved the meeting up.",
              ok: true,
              why: [
                "Simple past for the events, <em>was</em> for the background, <em>had moved</em> for what happened before.",
                "Pasado simple para los eventos, <em>was</em> para el fondo, <em>had moved</em> para lo que pasó antes.",
              ],
            },
            {
              en: "I have walked into the room, and the client has been there already, and he has told me about the meeting.",
              ok: false,
              why: [
                "The present perfect does not tell stories. A finished sequence of events takes the simple past.",
                "El presente perfecto no cuenta historias. Una secuencia de eventos ya terminada lleva pasado simple.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Halfway through your story you stall. You have set the scene and you do not know what to say next.",
            "A la mitad de tu historia te atoras. Ya armaste la escena y no sabes qué decir después.",
          ],
          options: [
            {
              en: "Anyway, it was a very difficult day for everybody.",
              ok: false,
              why: [
                "It abandons the story and retreats to a summary.",
                "Abandona la historia y se refugia en un resumen.",
              ],
            },
            {
              en: "Well, there were a lot of other things too, but I don't remember exactly.",
              ok: false,
              why: [
                "Honest, and it tells the room the story has no direction.",
                "Honesto, y le dice a la sala que la historia no tiene rumbo.",
              ],
            },
            {
              en: "A minute later, my phone rang. It was the plant manager.",
              ok: true,
              why: [
                "A time marker forces the next event. The story is moving again.",
                "Un marcador de tiempo obliga a que venga el siguiente evento. La historia se vuelve a mover.",
              ],
            },
          ],
        },
        {
          prompt: ["How do you end it?", "¿Cómo la cierras?"],
          options: [
            {
              en: "So the moral is that communication is very important in every project.",
              ok: false,
              why: [
                "A moral that fits any story adds nothing to this one, and it talks down to the room.",
                "Una moraleja que le queda a cualquier historia no le suma nada a esta, y trata a la sala como si no hubiera entendido.",
              ],
            },
            {
              en: "In the end we kept the account, and I've called every client on Friday afternoon since.",
              ok: true,
              why: [
                "The outcome and what changed. The room draws the lesson, which is why it sticks.",
                "El resultado y lo que cambió. La sala saca la lección, y por eso se le queda.",
              ],
            },
            {
              en: "And, well, that's the story.",
              ok: false,
              why: [
                "The story ends without landing. The last line is the one people repeat later.",
                "La historia termina sin aterrizar. La última línea es la que la gente repite después.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "rewrite",
      title: ["From report to story", "Del reporte a la historia"],
      items: [
        {
          task: [
            "Replace the summary with one moment: a time, a place, a person, what they did. (Invent the details.)",
            "Cambia el resumen por un momento: una fecha, un lugar, una persona, lo que hizo. (Inventa los detalles.)",
          ],
          before:
            "Last year we had a lot of quality problems with the new line, and customers complained a lot.",
          after:
            'Last June, a customer in Ohio opened a box from our new line and found twelve units with no labels. He sent us a photo with one word under it: "Again?"',
          why: [
            "One customer and one box stand for the year. The single word in quotes carries the history that <em>complained a lot</em> could not.",
            "Un cliente y una caja representan todo el año. La palabra entre comillas carga con la historia que <em>complained a lot</em> no pudo cargar.",
          ],
        },
        {
          task: ["Give the feeling its cause.", "Dale su causa a la emoción."],
          before: "The new analyst was nervous during her first presentation.",
          after:
            "The new analyst was nervous during her first presentation, because the CFO had sat down in the front row with her report already marked up in red.",
          why: [
            "Now the nerves are reasonable, and the listener is nervous for her.",
            "Ahora los nervios son razonables, y quien escucha se pone nervioso por ella.",
          ],
        },
        {
          task: [
            "Put the whole story in the past and fix the verbs.",
            "Pasa toda la historia al pasado y corrige los verbos.",
          ],
          before:
            "So yesterday the client calls me and he is telling me that the invoice has been wrong, and I say him that I will check.",
          after:
            "Yesterday the client called me and told me the invoice was wrong. I said I would check.",
          why: [
            "<em>Calls</em> became <em>called</em>, <em>say him</em> became <em>said</em>, and <em>will</em> moved back to <em>would</em>. One long sentence became two.",
            "<em>Calls</em> se volvió <em>called</em>, <em>say him</em> se volvió <em>said</em>, y <em>will</em> retrocedió a <em>would</em>. Una oración larga se volvió dos.",
          ],
        },
        {
          task: [
            "Combine these so the listener hears which thing happened first.",
            "Combínalas para que se oiga cuál cosa pasó primero.",
          ],
          before: "We arrived to the plant at eight. The line stopped at six. Nobody called us.",
          after:
            "When we arrived at the plant at eight, the line had already been down for two hours, and nobody had called us.",
          why: [
            "The past perfect puts the stopped line before the arrival, which is where the story is. Also: <em>arrive at</em> a place, never <em>arrive to</em>.",
            "El pasado perfecto pone la línea detenida antes de la llegada, que es donde está la historia. Además: <em>arrive at</em> un lugar, nunca <em>arrive to</em>.",
          ],
        },
      ],
    },
    {
      t: "speak",
      title: [
        "At work: a customer story or a lesson learned",
        "En el trabajo: la historia de un cliente o una lección aprendida",
      ],
      prompt: [
        "Choose one real moment from your working life: something a customer did or said, or the minute you learned something the hard way. In the think time, write four keywords: the moment, the before, the feeling and its cause, the after. Then tell it in the past, start to finish.",
        "Elige un momento real de tu vida de trabajo: algo que un cliente hizo o dijo, o el minuto en que aprendiste algo a la mala. En el tiempo de pensar, escribe cuatro palabras clave: el momento, el antes, la emoción con su causa, el después. Luego cuéntalo en pasado, de principio a fin.",
      ],
      think: 30,
      speak: 60,
      frame:
        "It was ___, and I was ___. Earlier that ___, ___ had ___. That's when ___. I was ___, because ___. In the end, ___. Since then, ___.",
      checklist: [
        [
          "I told one moment, and did not summarize a whole project.",
          "Conté un momento, y no resumí un proyecto completo.",
        ],
        ["I stayed in the past from start to finish.", "Me quedé en pasado de principio a fin."],
        ["My feeling had a cause.", "Mi emoción tuvo una causa."],
        [
          "I included one detail a listener could see or hear.",
          "Incluí un detalle que quien escucha podría ver u oír.",
        ],
        [
          "I ended on what changed, and did not add a general moral.",
          "Cerré con lo que cambió, y no agregué una moraleja general.",
        ],
      ],
      model:
        "It was the last week of November, and I was visiting a customer's warehouse in León. Earlier that year, they had bought our scanners, but they were still writing every pallet number on paper, just in case. That's when I saw Rosa, the night supervisor, finish her shift and stay another hour, copying her paper list into our system. I was embarrassed, because we had sold them a tool and left them with two jobs where they used to have one. The next morning we sat down with Rosa and turned off the paper process together. Since then, I visit every new customer in their first month, at the hour when the real work happens.",
    },
    {
      t: "takeaways",
      items: [
        [
          "Tell one moment, minutes long. A summary of months is a report.",
          "Cuenta un momento, de minutos. Un resumen de meses es un reporte.",
        ],
        [
          "Before, the turn, after. When you stall, say the next time marker.",
          "El antes, el giro, el después. Cuando te atores, di el siguiente marcador de tiempo.",
        ],
        ["Every feeling gets its <em>because</em>.", "Cada emoción lleva su <em>because</em>."],
        [
          "One detail the listener can see or hear does more than any adjective.",
          "Un detalle que se puede ver u oír hace más que cualquier adjetivo.",
        ],
        [
          "A work story starts in the past and stays there. End on what changed.",
          "Una historia de trabajo empieza en pasado y ahí se queda. Cierra con lo que cambió.",
        ],
      ],
    },
  ],
};
