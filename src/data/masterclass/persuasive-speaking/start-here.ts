import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "start-here",
  slugEs: "empieza-aqui",
  title: [
    "Why Speaking Feels Hard, and the Three Jobs That Fix It",
    "Por Qué Cuesta Hablar en Público y Cómo Resolverlo en 3 Pasos",
  ],
  summary: [
    "Speaking in English feels hard because you are doing several jobs at once; split them into observe, infer and narrate, and think before each one.",
    "Hablar en inglés cuesta porque haces varias cosas al mismo tiempo; sepáralas en observar, inferir y narrar, y piensa antes de cada una.",
  ],
  description: [
    "Why presenting in English feels harder than it should, the three small jobs that make it manageable, and a 60-second baseline talk to record today.",
    "Por qué presentar en inglés cuesta más de lo que debería, los tres pasos que lo vuelven manejable y una charla de 60 segundos para grabar hoy.",
  ],
  minutes: 15,
  blocks: [
    {
      t: "p",
      html: [
        "You know the material better than anyone on the call. Then someone says <em>Can you walk us through it?</em> and the version that comes out is longer, flatter and less sure than the one in your head. You hear yourself start a sentence without knowing how it ends. Afterward you think of exactly what you should have said, in perfect English, in the elevator.",
        "Conoces el tema mejor que nadie en la llamada. Entonces alguien dice <em>Can you walk us through it?</em> y lo que sale es más largo, más plano y menos seguro que la versión que traías en la cabeza. Te oyes empezar una oración sin saber cómo termina. Después, ya en el elevador, se te ocurre exactamente lo que debiste decir, en un inglés perfecto.",
      ],
    },
    {
      t: "p",
      html: [
        "That gap has three causes, and your level of English is not one of them. <b>You are translating while performing.</b> You build the idea in Spanish, convert it, and deliver it, all in front of people, and the conversion uses up the attention you needed for the idea. <b>You are afraid of the blank.</b> The fear of losing a word makes you rush, and rushing is what loses the word. <b>You are holding yourself to your Spanish.</b> In Spanish you are precise, quick and funny, so every English sentence gets measured against that, and a sentence that is only correct feels like a failure. Each of these gets worse when you try to do everything at once.",
        "Esa distancia tiene tres causas, y tu nivel de inglés no es una de ellas. <b>Traduces mientras estás al frente.</b> Armas la idea en español, la conviertes y la dices, todo delante de la gente, y la conversión se gasta la atención que necesitabas para la idea. <b>Te da miedo quedarte en blanco.</b> El miedo a perder una palabra te hace acelerar, y acelerar es justo lo que hace que la pierdas. <b>Te comparas con tu español.</b> En español eres una persona precisa, rápida y con sentido del humor, así que cada oración en inglés se mide contra eso, y una oración que solo es correcta se siente como un fracaso. Las tres empeoran cuando intentas hacer todo al mismo tiempo.",
      ],
    },
    {
      t: "speak",
      title: [
        "Before you read on: record your baseline",
        "Antes de seguir: graba tu punto de partida",
      ],
      prompt: [
        "Do this now, before the course changes anything. Open the voice recorder on your phone and speak for 60 seconds on one topic: <b>your work, and one thing you would change about it.</b> Say what you do, then name one thing you would change and why. Do not prepare beyond the think time, do not restart, and do not listen to it yet. Save the file with today's date. You will record the same talk again at the end of the course and listen to the two side by side.",
        "Hazlo ahora, antes de que el curso cambie algo. Abre la grabadora de voz de tu celular y habla 60 segundos sobre un solo tema: <b>tu trabajo y una cosa que le cambiarías.</b> Di a qué te dedicas, y luego nombra una cosa que cambiarías y por qué. No te prepares más allá del tiempo de pensar, no vuelvas a empezar y todavía no te escuches. Guarda el archivo con la fecha de hoy. Al final del curso vas a grabar la misma charla otra vez y a escuchar las dos, una tras otra.",
      ],
      think: 30,
      speak: 60,
      checklist: [
        [
          "I spoke for the full 60 seconds, in English, out loud.",
          "Hablé los 60 segundos completos, en inglés y en voz alta.",
        ],
        ["I did not stop and start over.", "No me detuve para volver a empezar."],
        [
          "I saved the recording with today's date and the word <em>baseline</em>.",
          "Guardé la grabación con la fecha de hoy y la palabra <em>baseline</em>.",
        ],
        [
          "I did not re-record it to make it better. A flattering baseline is useless.",
          "No la volví a grabar para que saliera mejor. Un punto de partida maquillado no sirve de nada.",
        ],
      ],
    },
    {
      t: "idea",
      title: [
        "One job at a time, and think before you speak",
        "Un paso a la vez, y piensa antes de hablar",
      ],
      html: [
        "Nobody learns to present by being told to give a presentation. A talk is made of three small jobs: saying what is there, saying what it means, and telling what happened to someone. Each one can be practiced alone in under a minute. And each one gets a short silence first, because the thinking and the speaking go badly when they share the same seconds.",
        "Nadie aprende a presentar porque le digan que dé una presentación. Una charla está hecha de tres pasos pequeños: decir lo que hay, decir lo que significa y contar lo que le pasó a alguien. Cada uno se puede practicar por separado en menos de un minuto. Y a cada uno le toca un silencio corto antes, porque pensar y hablar salen mal cuando comparten los mismos segundos.",
      ],
    },
    {
      t: "framework",
      title: ["The three jobs", "Los tres pasos"],
      lead: [
        "Lessons 2, 3 and 4 take these one at a time. Here is the whole set, so you can hear the difference between them.",
        "Las lecciones 2, 3 y 4 los trabajan uno por uno. Aquí están los tres juntos, para que oigas la diferencia entre ellos.",
      ],
      steps: [
        {
          label: ["Observe", "Observe: observar"],
          html: [
            "Say only what anyone could verify by looking. No opinions, no causes, no adjectives that judge. It sounds too simple to practice, and it is the job most people cannot do for thirty seconds without slipping in a conclusion.",
            "Di solo lo que cualquiera podría verificar con mirar. Sin opiniones, sin causas, sin adjetivos que juzguen. Suena demasiado sencillo para practicarlo, y es el paso que casi nadie logra sostener treinta segundos sin colar una conclusión.",
          ],
          say: "Forty of our two hundred users have logged in since launch.",
        },
        {
          label: ["Infer", "Infer: inferir"],
          html: [
            "Now make a claim, and attach the evidence to it in the same breath. The claim is yours; the evidence belongs to everyone, and that is what lets the room check your thinking.",
            "Ahora haz una afirmación, y pégale la evidencia en el mismo aliento. La afirmación es tuya; la evidencia es de todos, y eso es lo que le permite a la sala revisar tu razonamiento.",
          ],
          say: "I think the training came too late, because most people got access a week before they got a session.",
        },
        {
          label: ["Narrate", "Narrate: narrar"],
          html: [
            "Take one moment and tell it as a small story: what came before, what happened, and what someone felt and why. This is the job that makes people care about the first two.",
            "Toma un solo momento y cuéntalo como una historia breve: qué pasó antes, qué pasó y qué sintió alguien y por qué. Este es el paso que hace que a la gente le importen los otros dos.",
          ],
          say: "On day one, Marta from billing opened the new system, couldn't find her invoices, and went back to the spreadsheet.",
        },
      ],
    },
    {
      t: "model",
      title: ["One question, three jobs", "Una pregunta, tres pasos"],
      context: [
        "Luis runs logistics from Monterrey. On a weekly call, Dana, a US director, asks him about a late delivery. He has not prepared for the question.",
        "Luis dirige logística desde Monterrey. En una llamada semanal, Dana, una directora en Estados Unidos, le pregunta por una entrega tardía. Él no traía preparada la respuesta.",
      ],
      lines: [
        {
          who: "Dana",
          en: "Luis, what happened with the Dallas shipment?",
        },
        {
          who: "Luis",
          en: "Give me one second.",
          note: [
            "Think first. Three seconds of silence, which feel long to him and normal to everyone else.",
            "Primero piensa. Tres segundos de silencio, que a él se le hacen largos y a los demás normales.",
          ],
        },
        {
          who: "Luis",
          en: "The truck left our warehouse Tuesday at 6 a.m. It reached the customer Thursday at noon. Their delivery window closed Wednesday at 5.",
          note: [
            "<b>Observe.</b> Three facts in time order, in short sentences. Nothing anyone can argue with.",
            "<b>Observar.</b> Tres hechos en orden cronológico, en oraciones cortas. Nada que alguien pueda discutir.",
          ],
        },
        {
          who: "Luis",
          en: "I think the delay was at the border and not on our side. The GPS shows the truck stopped in Nuevo Laredo for nineteen hours.",
          note: [
            "<b>Infer.</b> One claim, marked as his with <em>I think</em>, and the evidence right behind it.",
            "<b>Inferir.</b> Una afirmación, marcada como suya con <em>I think</em>, y la evidencia justo detrás.",
          ],
        },
        {
          who: "Luis",
          en: "Here's what that looked like for the customer. Their receiving crew stayed two hours late on Wednesday, waiting for a truck that didn't come, and nobody called them.",
          note: [
            "<b>Narrate.</b> One moment, seen from the customer's side.",
            "<b>Narrar.</b> Un solo momento, visto desde el lado del cliente.",
          ],
        },
        {
          who: "Luis",
          en: "Their manager told me the delay bothered her less than the silence.",
          note: [
            "The feeling, with its cause. Now the room knows which problem to fix.",
            "La emoción, con su causa. Ahora la sala sabe cuál es el problema que hay que arreglar.",
          ],
        },
        {
          who: "Dana",
          en: "Okay. That's clear. What do you want to change?",
          note: [
            "About forty seconds, no long sentences, no rare vocabulary. She is ready for his recommendation.",
            "Unos cuarenta segundos, sin oraciones largas y sin vocabulario rebuscado. Ella ya está lista para oír su recomendación.",
          ],
        },
      ],
    },
    {
      t: "p",
      html: [
        "The three jobs feed an old and reliable map of persuasion, the triangle that goes back to Aristotle. <b>Ethos</b> is why they should trust you. <b>Logos</b> is why what you say makes sense. <b>Pathos</b> is why they should care. Observe and infer are the raw material of logos. Narrate is the raw material of pathos. Ethos is built partly by doing the other two honestly, and it gets its own lesson once you have them. A talk that persuades has all three corners; most talks that fail are missing one.",
        "Los tres pasos alimentan un mapa de la persuasión antiguo y confiable, el triángulo que viene desde Aristóteles. <b>Ethos</b> es por qué deberían confiar en ti. <b>Logos</b> es por qué tiene sentido lo que dices. <b>Pathos</b> es por qué debería importarles. Observar e inferir son la materia prima de logos. Narrar es la materia prima de pathos. Ethos se construye en parte haciendo los otros dos con honestidad, y tiene su propia lección una vez que ya los dominas. Una charla que convence tiene las tres esquinas; a casi todas las que fallan les falta una.",
      ],
    },
    {
      t: "framework",
      title: ["Think first, then speak", "Primero piensa, después habla"],
      lead: [
        "Every exercise in this course runs on the same three beats. So does a good answer in a real meeting.",
        "Todos los ejercicios del curso siguen los mismos tres tiempos. También una buena respuesta en una junta real.",
      ],
      steps: [
        {
          label: ["Think, in silence", "Piensa, en silencio"],
          html: [
            "Use the think timer. Decide what you will say, in English, and write three or four keywords at most. Never sentences: if you write them you will read them, and if you wrote them in Spanish you are back to translating in public.",
            "Usa el tiempo de pensar. Decide qué vas a decir, en inglés, y escribe tres o cuatro palabras clave como máximo. Nunca oraciones: si las escribes, las vas a leer, y si las escribiste en español regresaste a traducir en público.",
          ],
          say: "truck left Tue / arrived Thu / border 19 h / crew waited",
        },
        {
          label: ["Speak, on the clock", "Habla, con reloj"],
          html: [
            "Out loud, standing if you can, for the full time. Short sentences. If a sentence goes wrong, finish it plainly and start a new one. Do not go back to repair it.",
            "En voz alta, de pie si puedes, durante todo el tiempo. Oraciones cortas. Si una oración sale mal, termínala de la forma más simple y empieza otra. No regreses a repararla.",
          ],
        },
        {
          label: ["Review: one and one", "Revisa: una y una"],
          html: [
            "Name one strength and one thing to try next. Only one of each. A list of ten faults teaches you to dread the next attempt; one target teaches you to make it.",
            "Nombra una fortaleza y una cosa por intentar. Solo una de cada una. Una lista de diez fallas te enseña a temerle al siguiente intento; un solo objetivo te enseña a hacerlo.",
          ],
          say: "Strength: I kept to facts. Next: shorter sentences.",
        },
      ],
    },
    {
      t: "compare",
      title: [
        "Everything at once vs. one job at a time",
        "Todo al mismo tiempo vs. un paso a la vez",
      ],
      labels: [
        ["Everything at once", "Todo al mismo tiempo"],
        ["One job at a time", "Un paso a la vez"],
      ],
      rows: [
        {
          weak: "So, well, about the project, I think that in general it's going more or less well, but there are some things that are, how do you say, a little bit delayed.",
          strong:
            "The project is on schedule overall. One piece is late: the data migration, by about a week.",
          why: [
            "The first speaker is deciding what to say while saying it. The second decided first, then observed: two facts, two short sentences.",
            "La primera persona decide qué decir mientras lo dice. La segunda lo decidió antes y luego observó: dos hechos, dos oraciones cortas.",
          ],
        },
        {
          weak: "Um, yes, so, the budget, well, it depends, because there are many things that we have to consider.",
          strong:
            "Give me a second. Two things drive that budget: headcount and the vendor contract.",
          why: [
            "Three seconds of silence cost nothing and bought a structured answer. Starting to talk in order to fill the silence is what produces <em>it depends</em>.",
            "Tres segundos de silencio no costaron nada y compraron una respuesta ordenada. Empezar a hablar para llenar el silencio es lo que produce el <em>it depends</em>.",
          ],
        },
        {
          weak: "The problem is that the people don't want to use the new system.",
          strong:
            "Only forty of two hundred people have logged in. I think the training came too late, because most of them got access a week before they got a session.",
          why: [
            "The weak version is a conclusion with nothing under it, and it blames the users. The strong one observes, then infers with evidence.",
            "La versión débil es una conclusión sin nada debajo, y además culpa a los usuarios. La fuerte observa, y luego infiere con evidencia.",
          ],
        },
        {
          weak: "It was a very difficult situation for the client and they were very upset with us.",
          strong:
            "At nine on the morning of their launch, the client opened the dashboard and it was empty. She called me before I'd finished my coffee.",
          why: [
            "<em>Very difficult</em> and <em>very upset</em> are labels. A time, a place and what she did let the room feel it without being told to.",
            "<em>Very difficult</em> y <em>very upset</em> son etiquetas. Una hora, un lugar y lo que ella hizo dejan que la sala lo sienta sin que nadie se lo ordene.",
          ],
        },
        {
          weak: "I would like to explain, if you allow me, the reasons for which we have taken the decision of postponing the launch of the product.",
          strong: "We postponed the launch. Here's why.",
          why: [
            "The long sentence is elegant Spanish carried over word by word, and one slip in the middle sinks all of it. Two short sentences are easier to say, easier to follow and sound more senior.",
            "La oración larga es un español elegante trasladado palabra por palabra, y un tropiezo a la mitad la hunde completa. Dos oraciones cortas son más fáciles de decir, más fáciles de seguir y suenan a más experiencia.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: [
        "Lines that buy you think time and start each job",
        "Frases que te dan tiempo de pensar y abren cada paso",
      ],
      items: [
        {
          en: "Give me one second.",
          use: [
            "Then actually take it, in silence. It reads as care, and nobody counts the seconds but you.",
            "Y de verdad tómatelo, en silencio. Se lee como cuidado, y nadie cuenta los segundos más que tú.",
          ],
        },
        {
          en: "Let me think about how to put that.",
          use: [
            "For a harder question. It tells the room the pause is on purpose.",
            "Para una pregunta más difícil. Le dice a la sala que la pausa es a propósito.",
          ],
        },
        {
          en: "Let me start with what we know.",
          use: [
            "Opens the observe job. Facts follow.",
            "Abre el paso de observar. Lo que sigue son hechos.",
          ],
        },
        {
          en: "Here's what I'm seeing.",
          use: [
            "The same opening, a little more informal. Good on a call.",
            "La misma entrada, un poco más informal. Funciona bien en una llamada.",
          ],
        },
        {
          en: "My read is ___.",
          use: [
            "Opens the infer job and marks what follows as your conclusion.",
            "Abre el paso de inferir y marca lo que sigue como conclusión tuya.",
          ],
        },
        {
          en: "I say that because ___.",
          use: [
            "Attaches the evidence to the claim you just made.",
            "Le pega la evidencia a la afirmación que acabas de hacer.",
          ],
        },
        {
          en: "Let me give you one example.",
          use: [
            "Opens the narrate job. One example, told properly, and not three.",
            "Abre el paso de narrar. Un ejemplo, bien contado, y no tres.",
          ],
        },
        {
          en: "Here's what that looked like for ___.",
          use: [
            "Moves from the numbers to one person: the customer, the team, a user.",
            "Pasa de los números a una persona: el cliente, el equipo, un usuario.",
          ],
        },
        {
          en: "That's what I have so far.",
          use: [
            "A clean stop. Better than trailing off or adding one more thing.",
            "Un cierre limpio. Mejor que irte apagando o agregar una cosa más.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: ["The script written in Spanish", "El guion escrito en español"],
      html: [
        "The natural way to prepare is to write out what you want to say in good Spanish, translate it, and memorize it. It feels safe and it produces the opposite. Written Spanish at a professional level runs in long sentences with the point at the end; translated, they come out as English nobody says, and memorized, they break at the first forgotten word because there is no idea underneath, only a string of words. In Mexico a long, courteous build-up also signals respect for the listener. Many Americans hear the same build-up as hesitation. Neither reading is wrong, and you do not have to give up yours; you only need a second way of preparing for when the room is American. Prepare in keywords, in English, and let the sentences be short and a little different each time. A plain sentence you can finish beats an elegant one you cannot.",
        "La forma natural de prepararse es escribir lo que quieres decir en buen español, traducirlo y memorizarlo. Se siente seguro y produce lo contrario. El español escrito a nivel profesional corre en oraciones largas con el punto al final; traducidas, salen en un inglés que nadie dice, y memorizadas, se rompen con la primera palabra olvidada, porque debajo no hay una idea, solo una fila de palabras. En México, además, una entrada larga y cortés es señal de respeto hacia quien escucha. Mucha gente en Estados Unidos oye esa misma entrada como titubeo. Ninguna de las dos lecturas está mal, y no tienes que renunciar a la tuya; solo necesitas una segunda forma de prepararte para cuando la sala es estadounidense. Prepárate con palabras clave, en inglés, y deja que las oraciones salgan cortas y un poco distintas cada vez. Una oración sencilla que sí terminas le gana a una elegante que no.",
      ],
    },
    {
      t: "choice",
      title: ["Which job, and which line", "Qué paso, y qué frase"],
      items: [
        {
          prompt: [
            "In a client meeting, your manager turns to you without warning: <em>Can you give us a quick update on the rollout?</em>",
            "En una junta con un cliente, tu jefa voltea contigo sin aviso: <em>Can you give us a quick update on the rollout?</em>",
          ],
          options: [
            {
              en: "Yes, of course, so, the rollout, well, as you know we started some weeks ago and there were some things at the beginning that we had to solve.",
              ok: false,
              why: [
                "Speaking started before thinking did. The room gets history and has to wait for the update.",
                "Empezaste a hablar antes de pensar. La sala recibe antecedentes y tiene que esperar el reporte.",
              ],
            },
            {
              en: "Sure. Give me one second. We're live in four of six plants. The last two go live on the 15th.",
              ok: true,
              why: [
                "A short pause, then two facts with numbers. That is a complete update, and it took ten seconds.",
                "Una pausa corta y luego dos hechos con números. Es un reporte completo, y tomó diez segundos.",
              ],
            },
            {
              en: "Sure. I didn't prepare anything, so sorry if this isn't very organized.",
              ok: false,
              why: [
                "It is honest, and it tells everyone to expect a weak answer before you give one.",
                "Es honesto, y le avisa a todos que esperen una respuesta floja antes de que la des.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You are asked to describe last week's customer visit. Which line is the observe job, facts only?",
            "Te piden describir la visita de un cliente la semana pasada. ¿Cuál frase es el paso de observar, solo hechos?",
          ],
          options: [
            {
              en: "They spent ninety minutes on the production floor and asked eleven questions about quality control.",
              ok: true,
              why: [
                "Anyone who was there could confirm both numbers. No judgment is mixed in.",
                "Cualquiera que estuvo ahí podría confirmar los dos números. No trae ningún juicio mezclado.",
              ],
            },
            {
              en: "They were clearly very impressed with the production floor.",
              ok: false,
              why: [
                "<em>Impressed</em> is your conclusion. It may be right, but it is the infer job and it needs evidence.",
                "<em>Impressed</em> es tu conclusión. Puede ser correcta, pero es el paso de inferir y necesita evidencia.",
              ],
            },
            {
              en: "It was a really productive visit for both sides.",
              ok: false,
              why: [
                "A pleasant summary that nobody can check. It reports your mood about the visit.",
                "Un resumen agradable que nadie puede verificar. Reporta cómo te sentiste con la visita.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You said: <em>I think we're going to lose this account.</em> Which line finishes the infer job?",
            "Dijiste: <em>I think we're going to lose this account.</em> ¿Cuál frase completa el paso de inferir?",
          ],
          options: [
            {
              en: "I've had a bad feeling about it for a few weeks now.",
              ok: false,
              why: [
                "A feeling is not evidence the room can look at, even when it turns out to be right.",
                "Una corazonada no es evidencia que la sala pueda ver, aunque al final resulte cierta.",
              ],
            },
            {
              en: "I say that because they've canceled the last two reviews and asked for our contract end date.",
              ok: true,
              why: [
                "Two things anyone could verify, attached directly to the claim.",
                "Dos cosas que cualquiera podría verificar, pegadas directamente a la afirmación.",
              ],
            },
            {
              en: "Honestly, it's a very, very delicate situation right now.",
              ok: false,
              why: [
                "It repeats the worry with stronger words. The claim still stands on nothing.",
                "Repite la preocupación con palabras más fuertes. La afirmación sigue sin apoyarse en nada.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You present to a US team tomorrow. It is 9 p.m. and you have thirty minutes. What do you tell yourself?",
            "Mañana presentas ante un equipo en Estados Unidos. Son las 9 de la noche y tienes treinta minutos. ¿Qué te dices?",
          ],
          options: [
            {
              en: "I'll write the whole thing out in Spanish so it's well thought through, then translate it and learn it.",
              ok: false,
              why: [
                "You will have a text to recite, and one missing word tomorrow leaves you with nothing under it.",
                "Vas a tener un texto para recitar, y mañana una palabra que falte te deja sin nada debajo.",
              ],
            },
            {
              en: "I'll write four keywords per section in English and say it out loud twice.",
              ok: true,
              why: [
                "The ideas are fixed and the sentences are free. Two spoken runs do more than an hour of writing.",
                "Las ideas quedan fijas y las oraciones libres. Dos pasadas en voz alta hacen más que una hora de escribir.",
              ],
            },
            {
              en: "I'll go through the slides one more time and trust that the words will come.",
              ok: false,
              why: [
                "Reading slides in silence is not rehearsal. The first time you say it out loud should not be in front of them.",
                "Leer las diapositivas en silencio no es ensayar. La primera vez que lo digas en voz alta no debería ser frente a ellos.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["One object, three jobs", "Un objeto, tres pasos"],
      prompt: [
        "Pick one object within reach: your phone, your mug, your bag. In the think time, find three keywords, one per job. Then speak: fifteen seconds of facts about it, one conclusion about its owner with the evidence, and one short moment it was part of.",
        "Elige un objeto que tengas a la mano: tu celular, tu taza, tu mochila. En el tiempo de pensar, busca tres palabras clave, una por paso. Luego habla: quince segundos de hechos sobre el objeto, una conclusión sobre su dueño con la evidencia, y un momento breve del que fue parte.",
      ],
      think: 30,
      speak: 45,
      frame:
        "This is ___. It has ___ and ___. I conclude that its owner ___, because ___. One morning last ___, ___.",
      checklist: [
        [
          "My first part had only things someone else could verify by looking.",
          "Mi primera parte tuvo solo cosas que otra persona podría verificar con mirar.",
        ],
        [
          "My conclusion came with a <em>because</em>.",
          "Mi conclusión vino con un <em>because</em>.",
        ],
        [
          "My story was one moment, and something happened in it.",
          "Mi historia fue un solo momento, y algo pasó en él.",
        ],
        [
          "I could hear where one job ended and the next began.",
          "Se alcanzó a oír dónde terminó un paso y dónde empezó el siguiente.",
        ],
      ],
      model:
        "This is my work bag. It's black, it has two outside pockets, and one of the zippers is broken. There's a laptop inside, a charger, and three pens. I conclude that its owner travels a lot and doesn't replace things quickly, because there's an airline tag still on the handle and the zipper has been broken since March. One morning last spring, I was running for a flight in Houston, the zipper gave out, and my laptop slid across the terminal floor. A stranger picked it up and handed it to me without a word. I still haven't fixed the zipper.",
    },
    {
      t: "list",
      ordered: true,
      items: [
        [
          "<b>How to use this course.</b> Take the lessons in order, one per sitting. Each one takes 12 to 20 minutes.",
          "<b>Cómo usar este curso.</b> Toma las lecciones en orden, una por sesión. Cada una lleva de 12 a 20 minutos.",
        ],
        [
          "Do every speaking exercise out loud, with the timer. Reading the exercise and imagining your answer does not count; the skill lives in your mouth.",
          "Haz todos los ejercicios de hablar en voz alta, con el reloj. Leer el ejercicio e imaginar tu respuesta no cuenta; esta habilidad se queda en la boca.",
        ],
        [
          "Respect the think time. Keywords in English, never sentences.",
          "Respeta el tiempo de pensar. Palabras clave en inglés, nunca oraciones.",
        ],
        [
          "Attempt first, then open the model answer. It is one good version among many, and yours does not need to match it.",
          "Primero inténtalo y después abre la respuesta modelo. Es una buena versión entre muchas, y la tuya no tiene que parecerse.",
        ],
        [
          "After each attempt, write one strength and one thing to try next. Then do it once more with that one change.",
          "Después de cada intento, escribe una fortaleza y una cosa por intentar. Luego hazlo una vez más con ese único cambio.",
        ],
        [
          "Lessons 2 to 4 train the three jobs. Lessons 5 to 7 are the triangle. Lesson 8 is your voice, lesson 9 puts it all into three minutes, and lesson 10 is the plan for the month after.",
          "Las lecciones 2 a 4 entrenan los tres pasos. Las lecciones 5 a 7 son el triángulo. La lección 8 es tu voz, la 9 junta todo en tres minutos y la 10 es el plan para el mes siguiente.",
        ],
      ],
    },
    {
      t: "takeaways",
      items: [
        [
          "Speaking feels hard because you are translating, performing and judging yourself in the same seconds. Your English is already enough for this course.",
          "Hablar cuesta porque traduces, te presentas y te juzgas en los mismos segundos. Tu inglés ya alcanza para este curso.",
        ],
        [
          "Three jobs: observe what is there, infer what it means with evidence, narrate one moment.",
          "Tres pasos: observar lo que hay, inferir lo que significa con evidencia, narrar un momento.",
        ],
        [
          "Think first, then speak. Keywords in English, short sentences, no going back to repair.",
          "Primero piensa, después habla. Palabras clave en inglés, oraciones cortas, sin regresar a reparar.",
        ],
        [
          "After every attempt: one strength, one thing to try next.",
          "Después de cada intento: una fortaleza y una cosa por intentar.",
        ],
        [
          "Keep your baseline recording. You will need it in lesson 10.",
          "Guarda tu grabación de punto de partida. La vas a necesitar en la lección 10.",
        ],
      ],
    },
  ],
};
