import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "lower-the-temperature",
  slugEs: "bajar-la-temperatura",
  title: ["Lower the Temperature First", "Primero Baja la Temperatura"],
  summary: [
    "Before you argue the point, cool the conversation: notice your own reaction, buy three seconds, slow down, and name the tension without blaming anyone.",
    "Antes de discutir el punto, enfría la conversación: nota tu propia reacción, gana tres segundos, baja el ritmo y nombra la tensión sin culpar a nadie.",
  ],
  description: [
    "Cool a tense conversation in English before you argue it: buy three seconds, slow your pace, name the tension, and drop the words that add heat.",
    "Enfría una conversación tensa en inglés antes de discutirla: gana tres segundos, baja el ritmo, nombra la tensión y evita las palabras que la calientan.",
  ],
  minutes: 15,
  blocks: [
    {
      t: "p",
      html: [
        "The call was fine until Priya said, <em>“This is the second time your team has missed the integration date.”</em> You have a good answer. You also have a tight jaw, and you are talking faster than you were a minute ago. Your sentences get longer, your grammar gets shakier, and the answer that was clear in your head comes out as a defense.",
        "La llamada iba bien hasta que Priya dijo: <em>“This is the second time your team has missed the integration date.”</em> Tienes una buena respuesta. También traes la mandíbula apretada y estás hablando más rápido que hace un minuto. Tus frases se alargan, tu gramática se tambalea y la respuesta que tenías clara en la cabeza sale como una defensa.",
      ],
    },
    {
      t: "p",
      html: [
        "Under emotion, everyone loses some range. In a second language you lose more: the careful phrasing goes first, and what is left is direct translation at high speed. So the order of operations matters. Temperature first, content second. A strong argument delivered into a hot conversation is wasted, because the other person is busy defending and you are no longer choosing your words.",
        "Con la emoción encima, todos perdemos algo de rango. En un segundo idioma pierdes más: lo primero que se va es la forma cuidada de decir las cosas, y lo que queda es traducción directa a toda velocidad. Por eso importa el orden. Primero la temperatura, después el contenido. Un buen argumento dicho en una conversación caliente se desperdicia, porque la otra persona está ocupada defendiéndose y tú ya no estás eligiendo tus palabras.",
      ],
    },
    {
      t: "idea",
      title: ["Calm is something people can hear", "La calma es algo que se oye"],
      html: [
        "You do not need to feel calm to sound calm. Calm, as the other person experiences it, is three audible things: a slower pace, a lower volume, and words that do not accuse. All three are under your control even when your pulse is not. And the effect runs in both directions. When you slow down, the other person usually slows down with you, and within a few sentences you actually are calmer.",
        "No necesitas sentirte en calma para sonar en calma. La calma, como la percibe la otra persona, son tres cosas que se oyen: un ritmo más lento, un volumen más bajo y palabras que no acusan. Las tres están bajo tu control aunque tu pulso no lo esté. Y el efecto va en los dos sentidos. Cuando bajas el ritmo, la otra persona casi siempre lo baja contigo, y en unas cuantas frases ya estás de verdad en calma.",
      ],
    },
    {
      t: "framework",
      title: ["Notice, buy, slow, name", "Nota, gana tiempo, baja el ritmo, nombra"],
      lead: [
        "Use this the moment a conversation turns, before you answer the substance. The whole sequence takes less than fifteen seconds.",
        "Úsalo en el momento en que una conversación cambia de tono, antes de responder al fondo. Toda la secuencia toma menos de quince segundos.",
      ],
      steps: [
        {
          label: ["Notice your signal", "Nota tu señal"],
          html: [
            "Everyone has a physical tell: a tight jaw, heat in the face, faster speech, or the most reliable one, composing your reply while the other person is still talking. Learn yours. Noticing it is the whole step. You cannot manage a reaction you have not registered.",
            "Todos tenemos una señal física: la mandíbula apretada, calor en la cara, hablar más rápido o, la más confiable, armar tu respuesta mientras la otra persona sigue hablando. Aprende cuál es la tuya. Notarla es todo el paso. No puedes manejar una reacción que no registraste.",
          ],
        },
        {
          label: ["Buy three seconds", "Gana tres segundos"],
          html: [
            "Say one short sentence that commits you to nothing and gives you a breath. Three seconds is enough to stop the first answer, which is almost always the defensive one, and let the second one arrive.",
            "Di una frase corta que no te comprometa a nada y te dé un respiro. Tres segundos bastan para frenar la primera respuesta, que casi siempre es la defensiva, y dejar que llegue la segunda.",
          ],
          say: "Give me a second. I want to answer that properly.",
        },
        {
          label: ["Slow down and come down", "Baja el ritmo y el volumen"],
          html: [
            "Speak a little slower and a little quieter than the other person. Use short sentences and let your voice fall at the end of each one. A voice that rises at the end sounds unsure or annoyed; a voice that falls sounds settled.",
            "Habla un poco más lento y un poco más bajo que la otra persona. Usa frases cortas y deja que tu voz baje al final de cada una. Una voz que sube al final suena insegura o molesta; una voz que baja suena asentada.",
          ],
          say: "Okay. Let me tell you where we are.",
        },
        {
          label: ["Name the tension, blame no one", "Nombra la tensión sin culpar a nadie"],
          html: [
            "If the heat is still there, say out loud what is happening in the conversation, with <em>we</em> or <em>I</em> as the subject. Describing the tension is very different from accusing someone of causing it. Said plainly, it usually produces relief, because the other person has noticed it too.",
            "Si el calor sigue ahí, di en voz alta lo que está pasando en la conversación, con <em>we</em> o <em>I</em> como sujeto. Describir la tensión es muy distinto de acusar a alguien de causarla. Dicho con sencillez, casi siempre produce alivio, porque la otra persona también lo notó.",
          ],
          say: "I think we're talking past each other.",
        },
      ],
    },
    {
      t: "phrases",
      title: ["To buy three seconds", "Para ganar tres segundos"],
      items: [
        {
          en: "Give me a second.",
          use: [
            "The shortest one. Completely normal in American meetings, and nobody reads it as weakness.",
            "La más corta. Totalmente normal en juntas en Estados Unidos, y nadie la lee como debilidad.",
          ],
        },
        {
          en: "Let me think about that for a moment.",
          use: [
            "When the comment surprised you. Then really stay silent for two or three seconds.",
            "Cuando el comentario te tomó por sorpresa. Después quédate de verdad en silencio dos o tres segundos.",
          ],
        },
        {
          en: "That's a fair point to raise. Let me answer it carefully.",
          use: [
            "When the challenge has some truth in it. It grants that the question is legitimate without granting the conclusion.",
            "Cuando el cuestionamiento tiene algo de verdad. Reconoce que la pregunta es legítima sin aceptar la conclusión.",
          ],
        },
        {
          en: "Hold on. I want to get this right.",
          use: [
            "When you feel yourself about to answer fast. It tells the room you are choosing your words.",
            "Cuando sientes que vas a contestar rápido. Le dice a la sala que estás eligiendo tus palabras.",
          ],
        },
        {
          en: "Let me make sure I answer what you're actually asking.",
          use: [
            "When the comment was loaded and you are not sure what the real question is.",
            "Cuando el comentario venía cargado y no tienes claro cuál es la pregunta de fondo.",
          ],
        },
        {
          en: "I'm going to take a breath before I answer that.",
          use: [
            "One-on-one, with someone you know well. Honest, a little disarming, and it lowers the temperature for both of you.",
            "A solas, con alguien a quien conoces bien. Honesta, desarma un poco y baja la temperatura para los dos.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["To name the tension without blame", "Para nombrar la tensión sin culpar"],
      items: [
        {
          en: "I think we're talking past each other.",
          use: [
            "When each of you keeps repeating a point and neither is answering the other's. The subject is <em>we</em>, so nobody is at fault.",
            "Cuando cada quien repite su punto y ninguno le responde al otro. El sujeto es <em>we</em>, así que nadie tiene la culpa.",
          ],
        },
        {
          en: "I think we're answering two different questions.",
          use: [
            "When you suspect the disagreement is about definitions: you mean the launch date, they mean the announcement date.",
            "Cuando sospechas que el desacuerdo es de definiciones: tú hablas de la fecha de lanzamiento y ellos de la fecha del anuncio.",
          ],
        },
        {
          en: "We're both getting frustrated, and I don't think we're that far apart.",
          use: [
            "When the tone is hotter than the actual gap. Naming the frustration as shared takes the sting out of it.",
            "Cuando el tono está más caliente que la diferencia real. Nombrar la frustración como compartida le quita filo.",
          ],
        },
        {
          en: "I don't think I'm explaining this well. Let me try it a different way.",
          use: [
            "When they are not getting your point. You take responsibility for the gap, which costs little and cools a lot.",
            "Cuando no están entendiendo tu punto. Asumes tú la responsabilidad de la distancia, lo cual cuesta poco y enfría mucho.",
          ],
        },
        {
          en: "This is getting more heated than either of us wants.",
          use: [
            "When voices have gone up. It assumes good intent on both sides.",
            "Cuando ya subieron las voces. Da por hecho la buena intención de los dos lados.",
          ],
        },
        {
          en: "Can we slow down for a minute? I want to make sure I'm following you.",
          use: [
            "When the other person is talking fast and stacking points. You ask for the slowdown as a favor to your own understanding.",
            "Cuando la otra persona habla rápido y encima un punto tras otro. Pides la pausa como un favor para que tú puedas entender.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: ["Words that add heat", "Palabras que suben la temperatura"],
    },
    {
      t: "compare",
      title: [
        "Language that heats, language that cools",
        "Lenguaje que calienta, lenguaje que enfría",
      ],
      labels: [
        ["Heats", "Calienta"],
        ["Cools", "Enfría"],
      ],
      rows: [
        {
          weak: "You always send the specs at the last minute.",
          strong:
            "The last two specs came in the day before the deadline. That's hard for us to absorb.",
          why: [
            "<em>Always</em> invites the answer <em>not always</em>. A count of two is impossible to dispute and makes the same point.",
            "<em>Always</em> invita a contestar <em>not always</em>. Un conteo de dos no se puede discutir y dice lo mismo.",
          ],
        },
        {
          weak: "We never get a heads-up from your side.",
          strong: "We didn't get a heads-up on this one, and it cost us a day.",
          why: [
            "<em>Never</em> puts the whole relationship on trial. <em>On this one</em> keeps the complaint the size of the actual problem.",
            "<em>Never</em> pone a juicio toda la relación. <em>On this one</em> deja la queja del tamaño del problema real.",
          ],
        },
        {
          weak: "Obviously, that won't work in Mexico.",
          strong:
            "That won't work in Mexico as written. The labor rules are different. Here's the part that has to change.",
          why: [
            "<em>Obviously</em> says: you should already know this. If it were obvious to them, they would not have proposed it.",
            "<em>Obviously</em> dice: ya deberías saber esto. Si para ellos fuera obvio, no lo habrían propuesto.",
          ],
        },
        {
          weak: "With all due respect, those numbers are off.",
          strong: "I have different numbers. Can I show you what I'm looking at?",
          why: [
            "In American English, <em>with all due respect</em> announces that something disrespectful is coming. The listener braces before you reach your point.",
            "En el inglés de Estados Unidos, <em>with all due respect</em> anuncia que viene algo irrespetuoso. Quien te escucha se pone en guardia antes de que llegues a tu punto.",
          ],
        },
        {
          weak: "Calm down. It's not a big deal.",
          strong: "I can tell this matters a lot. Let's go through it one piece at a time.",
          why: [
            "<em>Calm down</em> tells a person their reaction is wrong, which reliably makes it bigger. Cool the conversation by slowing it down yourself.",
            "<em>Calm down</em> le dice a una persona que su reacción está mal, y eso la hace crecer sin falla. Enfría la conversación bajándole tú el ritmo.",
          ],
        },
        {
          weak: "As I already said, the budget is fixed.",
          strong: "The budget is fixed. I may not have been clear about that earlier.",
          why: [
            "<em>As I already said</em> means: you were not listening. Repeating the fact without the reminder gets the same information across and nobody loses face.",
            "<em>As I already said</em> quiere decir: no estabas escuchando. Repetir el dato sin el recordatorio transmite la misma información y nadie queda mal.",
          ],
        },
        {
          weak: "You're not listening to me.",
          strong: "I don't think I'm getting my point across. Let me try again.",
          why: [
            "Same problem, opposite subject. <em>You're not listening</em> is an accusation; <em>I'm not getting my point across</em> is an offer.",
            "El mismo problema con el sujeto contrario. <em>You're not listening</em> es una acusación; <em>I'm not getting my point across</em> es un ofrecimiento.",
          ],
        },
        {
          weak: "Fine. Whatever you think is best.",
          strong: "I'm not there yet, and I don't want to pretend I am. Give me a minute.",
          why: [
            "<em>Fine</em> said flatly is cold anger, and Americans hear it immediately. Saying you are not convinced is cooler than pretending you are.",
            "<em>Fine</em> dicho en seco es enojo frío, y en Estados Unidos lo detectan de inmediato. Decir que todavía no te convence es más templado que fingir que sí.",
          ],
        },
      ],
    },
    {
      t: "model",
      title: ["Fifteen seconds that change the call", "Quince segundos que cambian la llamada"],
      context: [
        "You lead the engineering team in Guadalajara. Priya, a product manager in Austin, opens a one-on-one call about the payments integration, which slipped a week.",
        "Diriges al equipo de ingeniería en Guadalajara. Priya, gerente de producto en Austin, abre una llamada uno a uno sobre la integración de pagos, que se atrasó una semana.",
      ],
      lines: [
        {
          who: "Priya",
          en: "This is the second time your team has missed the integration date. I look ridiculous in front of the client.",
          note: [
            "Fast and loud, with <em>your team</em>. Notice what she is protecting: her standing with the client.",
            "Rápido y fuerte, con <em>your team</em>. Fíjate en qué protege: su imagen ante el cliente.",
          ],
        },
        {
          who: "You",
          en: "Give me a second. I want to answer that properly.",
          note: [
            "Buy three seconds. The first answer in your head was <em>That's not fair</em>. You let it go.",
            "Gana tres segundos. La primera respuesta que traías era <em>That's not fair</em>. La dejas pasar.",
          ],
        },
        {
          who: "You",
          en: "Okay. The date slipped a week. That's on our side, and I know it landed on you.",
          note: [
            "Slower and quieter than Priya. Three short sentences, each ending on a falling tone.",
            "Más lento y más bajo que Priya. Tres frases cortas, cada una terminando con la voz hacia abajo.",
          ],
        },
        {
          who: "Priya",
          en: "It's always a week. Then another week. I can't keep going back to them with a new date.",
          note: [
            "Still hot, and now there is an absolute. Arguing with <em>always</em> would restart the fight.",
            "Sigue caliente, y ahora hay un absoluto. Discutir el <em>always</em> reiniciaría el pleito.",
          ],
        },
        {
          who: "You",
          en: "I think we're answering two different questions. You need a date you can give the client and not have to change. I've been giving you our best-case date.",
          note: [
            "Name the tension with <em>we</em>. You describe the mismatch without assigning it to her.",
            "Nombra la tensión con <em>we</em>. Describes el desajuste sin cargárselo a ella.",
          ],
        },
        {
          who: "Priya",
          en: "Yes. Exactly. I don't need the optimistic date. I need the real one.",
          note: [
            "Her pace drops to match yours. The conversation is now about dates and no longer about blame.",
            "Su ritmo baja hasta igualar el tuyo. La conversación ahora es sobre fechas y ya no sobre culpas.",
          ],
        },
        {
          who: "You",
          en: "Then here's the real one. The 24th, with the security review included. I'd put my name on that.",
          note: [
            "Only now do you get to the substance, and it lands because the temperature came down first.",
            "Apenas ahora llegas al fondo, y funciona porque la temperatura bajó primero.",
          ],
        },
      ],
    },
    {
      t: "trap",
      title: ["Four translations that add heat", "Cuatro traducciones que suben la temperatura"],
      html: [
        "Several things that sound neutral or even kind in Mexican Spanish turn sharp in English. “Tranquilo” or “cálmate” becomes <span class='x'>✗</span> <em>Calm down</em> or <em>Relax</em>, which Americans hear as dismissive. “Con todo respeto” becomes <span class='x'>✗</span> <em>With all due respect</em>, which signals an insult on the way. “Obviamente”, often just a filler in Spanish, becomes <span class='x'>✗</span> <em>Obviously</em>, which sounds condescending. “Como te comenté” becomes <span class='x'>✗</span> <em>As I told you</em>, which sounds like a reprimand. Drop all four. One more habit matters here: when we are nervous in a second language, we speed up to get the sentence over with, and silence feels like evidence that we are searching for a word. To an American listener, a three-second pause before a hard answer reads as thoughtfulness and confidence. <span class='ok'>✓</span> Pause, then speak slower than feels natural.",
        "Varias cosas que suenan neutras o hasta amables en el español de México se vuelven filosas en inglés. “Tranquilo” o “cálmate” se convierte en <span class='x'>✗</span> <em>Calm down</em> o <em>Relax</em>, que en Estados Unidos se oye como si le restaras importancia. “Con todo respeto” se convierte en <span class='x'>✗</span> <em>With all due respect</em>, que avisa que viene un insulto. “Obviamente”, que en español muchas veces es solo una muletilla, se convierte en <span class='x'>✗</span> <em>Obviously</em>, que suena condescendiente. “Como te comenté” se convierte en <span class='x'>✗</span> <em>As I told you</em>, que suena a regaño. Suelta las cuatro. Hay un hábito más que importa aquí: con los nervios de hablar en un segundo idioma, aceleramos para terminar la frase de una vez, y el silencio se siente como prueba de que andamos buscando una palabra. Para alguien de Estados Unidos, una pausa de tres segundos antes de una respuesta difícil se lee como reflexión y seguridad. <span class='ok'>✓</span> Haz la pausa y luego habla más lento de lo que se te hace natural.",
      ],
    },
    {
      t: "choice",
      title: ["Cool it or heat it", "Enfriar o calentar"],
      items: [
        {
          prompt: [
            "In a budget review, Marcus says loudly, “Your region overspends every single quarter.” You went over in one quarter of the last four.",
            "En una revisión de presupuesto, Marcus dice en voz alta: “Your region overspends every single quarter.” Tu región se pasó en uno de los últimos cuatro trimestres.",
          ],
          options: [
            {
              en: "That's simply not true. Check the numbers before you say something like that.",
              ok: false,
              why: [
                "Correct on the facts, and it matches his volume and adds an order. Now there are two hot people in the room.",
                "Tienes razón en los datos, pero igualas su volumen y además le das una orden. Ahora hay dos personas calientes en la sala.",
              ],
            },
            {
              en: "Give me a second. We went over in Q2, by four percent. The other three quarters came in under. I can show you the breakdown.",
              ok: true,
              why: [
                "Three seconds, then short factual sentences. The absolute is corrected by a count, without the words <em>you're wrong</em>.",
                "Tres segundos y luego frases cortas con datos. El absoluto se corrige con un conteo, sin decir <em>you're wrong</em>.",
              ],
            },
            {
              en: "With all due respect, Marcus, I think you may be mistaken about that.",
              ok: false,
              why: [
                "It sounds polite to a Spanish speaker. To Marcus, <em>with all due respect</em> sounds like the opening of a fight.",
                "A quien habla español le suena cortés. A Marcus, <em>with all due respect</em> le suena al inicio de un pleito.",
              ],
            },
          ],
        },
        {
          prompt: [
            "Elena is visibly upset on a video call about a shipment that arrived incomplete. She is speaking fast and repeating herself.",
            "Elena está visiblemente molesta en una videollamada por un envío que llegó incompleto. Habla rápido y se repite.",
          ],
          options: [
            {
              en: "Elena, relax. We're going to fix it.",
              ok: false,
              why: [
                "The intention is kind. <em>Relax</em> tells her that her reaction is the problem, and she will get louder to prove it is justified.",
                "La intención es buena. <em>Relax</em> le dice que el problema es su reacción, y va a subir el tono para demostrar que está justificada.",
              ],
            },
            {
              en: "Can we slow down for a minute? I want to make sure I'm following you. Start with what arrived.",
              ok: true,
              why: [
                "You ask for the slower pace as something you need, and you give her one concrete thing to do. Her speed drops without being criticized.",
                "Pides el ritmo más lento como algo que tú necesitas y le das una cosa concreta que hacer. Su velocidad baja sin que la critiques.",
              ],
            },
            {
              en: "I understand, I understand, but let me explain what happened on our side.",
              ok: false,
              why: [
                "Doubled words and a jump to your own explanation. She hears someone waiting for a turn to talk, and the pace goes up.",
                "Palabras repetidas y un salto a tu propia explicación. Ella oye a alguien que espera su turno para hablar, y el ritmo sube.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You and Dana have gone back and forth four times about the launch. You keep saying “the 15th is fine” and she keeps saying “the 15th is too late.” You suspect you mean different events.",
            "Dana y tú llevan cuatro vueltas sobre el lanzamiento. Tú insistes en que “the 15th is fine” y ella en que “the 15th is too late”. Sospechas que hablan de eventos distintos.",
          ],
          options: [
            {
              en: "As I said, the 15th is fine. I don't know how else to explain it.",
              ok: false,
              why: [
                "<em>As I said</em> blames her for not listening, and the second sentence signals you have given up on her.",
                "<em>As I said</em> la culpa por no escuchar, y la segunda frase indica que ya te diste por vencido con ella.",
              ],
            },
            {
              en: "I think we're answering two different questions. When you say the 15th, do you mean code complete or live for customers?",
              ok: true,
              why: [
                "It names the loop with <em>we</em> and tests the one thing that could explain it.",
                "Nombra el círculo con <em>we</em> y pone a prueba lo único que podría explicarlo.",
              ],
            },
            {
              en: "Okay, fine. Let's move it to the 10th if that's what you want.",
              ok: false,
              why: [
                "It ends the tension by giving in on a date before you know whether you even disagree. And <em>fine</em> carries resentment.",
                "Termina la tensión cediendo en una fecha antes de saber si de verdad difieren. Y <em>fine</em> carga resentimiento.",
              ],
            },
          ],
        },
        {
          prompt: [
            "A colleague asks a sharp question in a meeting: “So who decided to skip the pilot?” It was your decision. You feel your face get warm.",
            "Un colega hace una pregunta filosa en una junta: “So who decided to skip the pilot?” La decisión fue tuya. Sientes que se te calienta la cara.",
          ],
          options: [
            {
              en: "I did. Give me a second, because I want to walk you through why.",
              ok: true,
              why: [
                "You own it in two words, buy your three seconds openly, and promise the reasoning. Calm and accountable in the same breath.",
                "Lo asumes en dos palabras, ganas tus tres segundos abiertamente y prometes el razonamiento. Calma y responsabilidad en la misma frase.",
              ],
            },
            {
              en: "Well, obviously we didn't have time for a pilot, with the deadline we were given.",
              ok: false,
              why: [
                "<em>Obviously</em> plus a passive <em>we were given</em> sounds defensive and shifts the blame upward.",
                "<em>Obviously</em> más un pasivo <em>we were given</em> suena a la defensiva y avienta la culpa hacia arriba.",
              ],
            },
            {
              en: "It was a team decision, and honestly I don't think that's the important question right now.",
              ok: false,
              why: [
                "It avoids the question and then criticizes it. The room hears someone hiding, and the questioner will push harder.",
                "Evade la pregunta y luego la critica. La sala oye a alguien que se esconde, y quien preguntó va a presionar más.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: ["Same words, half the speed", "Las mismas palabras, a la mitad de velocidad"],
      prompt: [
        "Say the frame sentence out loud twice. First, the way it would come out if you were irritated: fast, in one breath. Then again at about two-thirds of that speed, a little quieter, with a full stop after each sentence and your voice falling at the end. Record both and listen to the difference.",
        "Di la frase modelo en voz alta dos veces. Primero, como te saldría si estuvieras de malas: rápido y de un solo aliento. Luego otra vez a unos dos tercios de esa velocidad, un poco más bajo, con un punto y aparte después de cada oración y la voz bajando al final. Graba las dos y escucha la diferencia.",
      ],
      think: 10,
      speak: 30,
      frame:
        "Give me a second. The date slipped a week. That's on our side. Here's what we're doing about it.",
      checklist: [
        [
          "In the second version, there was a real pause after <em>Give me a second</em>.",
          "En la segunda versión hubo una pausa real después de <em>Give me a second</em>.",
        ],
        [
          "Each sentence ended with my voice going down, not up.",
          "Cada oración terminó con la voz hacia abajo, no hacia arriba.",
        ],
        [
          "The second version was quieter than the first without becoming a mumble.",
          "La segunda versión fue más baja que la primera sin volverse un murmullo.",
        ],
        [
          "Listening back, the second version sounds like someone in control of the situation.",
          "Al escucharla, la segunda versión suena a alguien que tiene control de la situación.",
        ],
      ],
    },
    {
      t: "speak",
      title: ["Cool a hot opening", "Enfría un arranque caliente"],
      prompt: [
        "A colleague opens a call with: <em>“Your team never tells us anything until it's too late, and now the client is furious.”</em> The facts: you sent one update late, on Thursday. Respond out loud. Buy three seconds, state the one fact slowly, and name the tension without blaming anyone. Do not defend yet and do not solve yet.",
        "Un colega abre una llamada con: <em>“Your team never tells us anything until it's too late, and now the client is furious.”</em> Los hechos: mandaste una sola actualización tarde, el jueves. Responde en voz alta. Gana tres segundos, di el único dato despacio y nombra la tensión sin culpar a nadie. Todavía no te defiendas y todavía no resuelvas.",
      ],
      think: 20,
      speak: 30,
      frame: "Give me a second. ___ was late, and ___. I think we're ___.",
      checklist: [
        [
          "I started with a time-buying phrase and paused after it.",
          "Empecé con una frase para ganar tiempo e hice una pausa después.",
        ],
        [
          "I did not argue with <em>never</em>; I stated what happened on Thursday.",
          "No discutí el <em>never</em>; dije lo que pasó el jueves.",
        ],
        [
          "I named the tension using <em>we</em> or <em>I</em>, with no <em>you</em> plus a failure.",
          "Nombré la tensión con <em>we</em> o <em>I</em>, sin <em>you</em> más una falla.",
        ],
        [
          "I avoided <em>calm down</em>, <em>obviously</em>, <em>with all due respect</em>, and <em>as I said</em>.",
          "Evité <em>calm down</em>, <em>obviously</em>, <em>with all due respect</em> y <em>as I said</em>.",
        ],
      ],
      model:
        "Give me a second. I want to answer that properly. Thursday's update was late, and I know that put you in a bad spot with the client. I think we're both frustrated about the same thing, which is that you found out after they did. Let's go through what happened one piece at a time.",
    },
    {
      t: "takeaways",
      items: [
        [
          "Temperature first, content second. A good argument is wasted on a hot conversation.",
          "Primero la temperatura, después el contenido. Un buen argumento se desperdicia en una conversación caliente.",
        ],
        [
          "Calm is audible: slower pace, lower volume, falling tone, words that do not accuse. You can do all of it before you feel it.",
          "La calma se oye: ritmo más lento, volumen más bajo, voz que baja al final y palabras que no acusan. Puedes hacerlo todo antes de sentirlo.",
        ],
        [
          "Buy three seconds with one sentence. The second answer that comes to you is almost always the better one.",
          "Gana tres segundos con una frase. La segunda respuesta que se te ocurre casi siempre es la mejor.",
        ],
        [
          "Name the tension with <em>we</em> or <em>I</em>: <em>I think we're talking past each other.</em>",
          "Nombra la tensión con <em>we</em> o <em>I</em>: <em>I think we're talking past each other.</em>",
        ],
        [
          "Retire <em>always</em>, <em>never</em>, <em>obviously</em>, <em>with all due respect</em>, <em>calm down</em>, and <em>as I said</em>.",
          "Jubila <em>always</em>, <em>never</em>, <em>obviously</em>, <em>with all due respect</em>, <em>calm down</em> y <em>as I said</em>.",
        ],
      ],
    },
  ],
};
