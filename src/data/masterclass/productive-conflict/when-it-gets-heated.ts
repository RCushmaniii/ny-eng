import type { Lesson } from "../types";

export const lesson: Lesson = {
  id: "when-it-gets-heated",
  slugEs: "cuando-sube-de-tono",
  title: ["When It Gets Heated", "Cuando Sube de Tono"],
  summary: [
    "The exact sentence for each hard moment: an interruption, a raised voice, a personal remark, a public contradiction, and a fight that is happening in writing.",
    "La frase exacta para cada momento difícil: una interrupción, una voz alzada, un comentario personal, una contradicción en público y un pleito que ocurre por escrito.",
  ],
  description: [
    "What to say in English when someone interrupts, raises their voice or makes it personal, how to pause a meeting, and when to move a tense email to a call.",
    "Qué decir en inglés cuando te interrumpen, te alzan la voz o lo vuelven personal, cómo pausar una junta y cuándo pasar un correo tenso a una llamada.",
  ],
  minutes: 19,
  blocks: [
    {
      t: "p",
      html: [
        "Everything in this course so far assumes the other person is still being reasonable. Sometimes, for a minute, they are not. They cut you off for the third time, raise their voice, make it personal, or contradict you in front of your own team. In Spanish you would have an answer ready. In English, the usual result is silence in the meeting and the perfect sentence two hours later, in the car.",
        "Todo lo que llevamos del curso supone que la otra persona sigue siendo razonable. A veces, por un minuto, no lo es. Te interrumpe por tercera vez, alza la voz, lo vuelve personal o te contradice frente a tu propio equipo. En español tendrías la respuesta lista. En inglés, lo normal es el silencio en la junta y la frase perfecta dos horas después, en el carro.",
      ],
    },
    {
      t: "p",
      html: [
        "This lesson gives you that sentence in advance, one for each of the four moments. It also covers the two decisions around them: when to stop a meeting, and when to take a written fight off the page.",
        "Esta lección te da esa frase por adelantado, una para cada uno de los cuatro momentos. También cubre las dos decisiones que los rodean: cuándo detener una junta y cuándo sacar de la pantalla un pleito por escrito.",
      ],
    },
    {
      t: "idea",
      title: [
        "One short sentence about the behavior, then back to the work",
        "Una frase corta sobre la conducta, y de regreso al trabajo",
      ],
      html: [
        "When someone crosses a line, you have two jobs: mark the line, and keep the conversation on its subject. Do the first in one short, even sentence, and go straight to the second. Do not explain how you feel, do not review their history, do not answer the insult. Brevity is what makes you sound calm. A long response sounds defensive in any language, and in a second language every extra sentence is another chance to say something you did not mean.",
        "Cuando alguien cruza una línea, tienes dos tareas: marcar la línea y mantener la conversación en su tema. Haz la primera con una frase corta y pareja, y pasa directo a la segunda. No expliques cómo te sientes, no repases su historial, no contestes el insulto. La brevedad es lo que te hace sonar en calma. Una respuesta larga suena defensiva en cualquier idioma, y en un segundo idioma cada frase de más es otra oportunidad de decir algo que no querías decir.",
      ],
    },
    {
      t: "compare",
      title: ["The four moments", "Los cuatro momentos"],
      labels: [
        ["Escalates or disappears", "Escala o desaparece"],
        ["Holds the line", "Sostiene la línea"],
      ],
      rows: [
        {
          weak: "Can you let me finish? You always do this.",
          strong: "I'd like to finish this point. Then I want to hear yours.",
          why: [
            "<b>Interrupted.</b> The strong version claims your turn and promises theirs. <em>You always</em> opens a second argument about their character.",
            "<b>Interrupción.</b> La versión fuerte reclama tu turno y promete el suyo. <em>You always</em> abre un segundo pleito sobre su carácter.",
          ],
        },
        {
          weak: "Excuse me, I'm talking.",
          strong: "Hold on, Marcus. Two more sentences and it's all yours.",
          why: [
            "<b>Interrupted again.</b> Using the name and a specific limit works better than a rebuke. Keep talking as you say it; do not wait for permission.",
            "<b>Otra interrupción.</b> Usar el nombre y un límite específico funciona mejor que un regaño. Sigue hablando mientras lo dices; no esperes permiso.",
          ],
        },
        {
          weak: "Don't yell at me.",
          strong: "I want to solve this with you, and I can't do it at this volume.",
          why: [
            "<b>A raised voice.</b> It states what you want and the condition for it. <em>Don't yell at me</em> is a command, and people who are shouting do not take commands.",
            "<b>Una voz alzada.</b> Dice lo que quieres y la condición para lograrlo. <em>Don't yell at me</em> es una orden, y quien está gritando no recibe órdenes.",
          ],
        },
        {
          weak: "That's very unprofessional of you.",
          strong: "I'd rather keep this about the plan. What specifically in the plan worries you?",
          why: [
            "<b>A personal remark.</b> Labeling them back keeps the fight personal. Returning to the plan shows the room who is still working.",
            "<b>Un comentario personal.</b> Devolverle la etiqueta mantiene el pleito en lo personal. Regresar al plan le muestra a la sala quién sigue trabajando.",
          ],
        },
        {
          weak: "How dare you say that to me?",
          strong: "That comment wasn't okay. I'm glad to keep talking about the budget.",
          why: [
            "<b>A remark that goes too far.</b> Sometimes the line has to be named. Name it in four words, without heat, and offer the way back.",
            "<b>Un comentario que se pasa.</b> A veces hay que nombrar la línea. Nómbrala en cuatro palabras, sin calor, y ofrece el camino de regreso.",
          ],
        },
        {
          weak: "That's not correct, and you know it.",
          strong:
            "We see that one differently. Let me give the team my reasoning, and you and I can sort out the details after this.",
          why: [
            "<b>Contradicted in front of others.</b> It refuses to concede, refuses to fight in public, and sets up the private conversation where the fight belongs.",
            "<b>Contradicción frente a otros.</b> No concede, no pelea en público y deja lista la conversación privada donde ese pleito debe darse.",
          ],
        },
      ],
    },
    {
      t: "phrases",
      title: ["Phrases by situation", "Frases por situación"],
      items: [
        {
          en: "Let me finish this thought.",
          use: [
            "Interrupted. The simplest version; say it without stopping.",
            "Interrupción. La versión más sencilla; dila sin detenerte.",
          ],
        },
        {
          en: "I'll come right back to you. One more sentence.",
          use: [
            "Interrupted by someone senior or someone you want to keep on your side.",
            "Interrupción de alguien con más jerarquía o de alguien que quieres mantener de tu lado.",
          ],
        },
        {
          en: "I can hear how much this matters. Let's bring it down and solve it.",
          use: [
            "A raised voice. Credits the emotion and asks for a lower volume in the same breath.",
            "Voz alzada. Reconoce la emoción y pide bajar el volumen en la misma frase.",
          ],
        },
        {
          en: "I'm happy to keep going. Just not like this.",
          use: [
            "A raised voice that did not come down after the first request.",
            "Voz alzada que no bajó después de la primera petición.",
          ],
        },
        {
          en: "Let's keep this about the work.",
          use: [
            "A mild personal remark. Light enough to use in front of a group.",
            "Comentario personal leve. Lo bastante ligero para usarlo frente a un grupo.",
          ],
        },
        {
          en: "That felt personal. I'm going to assume it wasn't meant that way.",
          use: [
            "Marks the remark and gives the person a dignified way to step back from it.",
            "Marca el comentario y le da a la persona una forma digna de echarse para atrás.",
          ],
        },
        {
          en: "I don't think that's fair, and I'd rather not debate it here.",
          use: [
            "A criticism of you in public. Registers your disagreement without starting the fight.",
            "Una crítica hacia ti en público. Deja constancia de tu desacuerdo sin empezar el pleito.",
          ],
        },
        {
          en: "We haven't aligned on that yet. Let me come back to the group once we have.",
          use: [
            "A peer contradicts you in front of a client or your team.",
            "Un colega te contradice frente a un cliente o frente a tu equipo.",
          ],
        },
        {
          en: "Let's take five.",
          use: [
            "A short break. Enough for most rooms to reset.",
            "Una pausa corta. Suficiente para que casi cualquier sala se reacomode.",
          ],
        },
        {
          en: "I don't think we'll settle this in the next ten minutes. Can we pick it up tomorrow at ten?",
          use: [
            "Pausing the meeting with a specific time to resume.",
            "Pausar la junta con una hora específica para retomarla.",
          ],
        },
        {
          en: "This is getting long for email. Do you have ten minutes for a call?",
          use: [
            "Moving a written disagreement to voice.",
            "Pasar a voz un desacuerdo por escrito.",
          ],
        },
        {
          en: "I'd rather sort this out live. Are you free at three?",
          use: ["The same move in chat, shorter.", "La misma jugada por chat, más corta."],
        },
      ],
    },
    {
      t: "framework",
      title: ["How to pause a meeting", "Cómo pausar una junta"],
      lead: [
        "Use it when the same point has been made three times, voices are up, someone has gone silent, or the audience is making it worse.",
        "Úsalo cuando el mismo punto ya se dijo tres veces, las voces subieron, alguien se quedó en silencio o el público lo está empeorando.",
      ],
      steps: [
        {
          label: [
            "Name the state of the conversation, with no blame",
            "Nombra el estado de la conversación, sin culpas",
          ],
          html: [
            "Describe the conversation, not the person. <em>We</em>, never <em>you</em>.",
            "Describe la conversación, no a la persona. <em>We</em>, nunca <em>you</em>.",
          ],
          say: "I don't think we're getting any closer right now.",
        },
        {
          label: ["Protect what is already agreed", "Protege lo que ya está acordado"],
          html: [
            "Say what is settled and what is open. Otherwise the whole discussion restarts from zero next time.",
            "Di qué está resuelto y qué sigue abierto. Si no, la próxima vez toda la discusión arranca de cero.",
          ],
          say: "We agree on the budget. The open question is who owns the rollout.",
        },
        {
          label: [
            "Propose a specific time and a smaller group",
            "Propón una hora específica y un grupo más chico",
          ],
          html: [
            "A pause without a time is an exit. <em>Let's talk later</em> works like <em>luego lo vemos</em>: everyone understands it may never happen.",
            "Una pausa sin hora es una salida. <em>Let's talk later</em> funciona como <em>luego lo vemos</em>: todo el mundo entiende que quizá nunca pase.",
          ],
          say: "Can you and I pick this up tomorrow at ten, just the two of us?",
        },
        {
          label: ["Give each side something to bring", "Dale a cada parte algo que traer"],
          html: [
            "Homework turns the break into progress and gives both of you a reason to come back with facts instead of feelings.",
            "La tarea convierte la pausa en avance y les da a los dos una razón para regresar con datos en lugar de emociones.",
          ],
          say: "I'll bring the staffing numbers. Could you bring the client's timeline?",
        },
      ],
    },
    {
      t: "model",
      title: [
        "Worked example: the timeline review",
        "Ejemplo completo: la revisión del cronograma",
      ],
      context: [
        "You are presenting a revised project timeline to eight people. Marcus, a peer from the account team, has a client waiting on the original date.",
        "Estás presentando un cronograma actualizado ante ocho personas. Marcus, un colega del equipo de cuentas, tiene a un cliente esperando la fecha original.",
      ],
      lines: [
        {
          who: "Marcus",
          en: "This timeline is a joke. We've been through this.",
        },
        {
          who: "You",
          en: "Hold on, Marcus. Let me finish the last slide, and then I want your reaction to the whole thing.",
          note: [
            "Claims the turn, promises his. No comment on <em>a joke</em>.",
            "Reclama el turno y promete el suyo. Ningún comentario sobre <em>a joke</em>.",
          ],
        },
        {
          who: "Marcus",
          en: "I don't need the last slide. Your team has missed every date this year.",
          note: ["Louder now, and personal.", "Ahora más fuerte, y personal."],
        },
        {
          who: "You",
          en: "Two dates slipped, and I own both. I'd rather keep this about this timeline.",
          note: [
            "Corrects the absolute with a fact, takes responsibility for the true part, and returns to the subject. Two sentences.",
            "Corrige el absoluto con un dato, asume la parte que sí es cierta y regresa al tema. Dos frases.",
          ],
        },
        {
          who: "Marcus",
          en: "Then you tell the client it's April. Because I'm not going to.",
          note: ["The real concern finally appears.", "Por fin aparece la preocupación real."],
        },
        {
          who: "You",
          en: "I can see this puts you in a bad spot with the client, and I want to fix that. I don't think we fix it in this room, at this volume. Can you and I take thirty minutes at two today?",
          note: [
            "Acknowledges his problem, names the state of the conversation, and proposes a specific time with a smaller group.",
            "Reconoce su problema, nombra el estado de la conversación y propone una hora específica con un grupo más chico.",
          ],
        },
        {
          who: "Marcus",
          en: "Fine. Two o'clock.",
        },
        {
          who: "You",
          en: "For everyone else: the timeline stands for now. Marcus and I will come back to you by end of day with anything that changes.",
          note: [
            "Closes it for the audience, so nobody leaves wondering who won.",
            "Lo cierra para el público, para que nadie salga preguntándose quién ganó.",
          ],
        },
      ],
    },
    {
      t: "h",
      text: ["When the fight is in writing", "Cuando el pleito es por escrito"],
    },
    {
      t: "p",
      html: [
        "Written conflict escalates faster than spoken conflict. The reader cannot hear your tone, so they supply one, and an irritated reader supplies the worst one available. The message is also permanent and easy to forward. Two rules cover most cases. First, the two-reply rule: if two exchanges have not settled it, stop writing and call. Second, never send the fast answer. Write it, wait twenty minutes, cut everything that explains who was right, and send what is left, which is usually three sentences and a request to talk.",
        "El conflicto por escrito escala más rápido que el hablado. Quien lee no puede oír tu tono, así que le pone uno, y un lector irritado le pone el peor disponible. Además, el mensaje es permanente y fácil de reenviar. Dos reglas cubren casi todos los casos. Primera, la regla de las dos respuestas: si dos intercambios no lo resolvieron, deja de escribir y llama. Segunda, nunca mandes la respuesta rápida. Escríbela, espera veinte minutos, corta todo lo que explica quién tenía la razón y manda lo que quede, que normalmente son tres frases y una petición para hablar.",
      ],
    },
    {
      t: "trap",
      title: [
        "Polite formulas that arrive as accusations",
        "Fórmulas corteses que llegan como acusaciones",
      ],
      html: [
        "Several phrases that are neutral in a Mexican business email change character in English. <em>Como te comenté</em> becomes <span class='x'>✗</span> <em>As I told you</em> or <em>As per my last email</em>, which American readers hear as <em>you did not read what I wrote</em>. <em>Te recuerdo que</em> becomes <span class='x'>✗</span> <em>I remind you that</em>, which sounds like a reprimand. <em>Quedo atento a tus comentarios</em> has no natural equivalent; <span class='x'>✗</span> <em>I remain attentive</em> reads as stiff and distant. Give the information again without mentioning that you gave it before: <span class='ok'>✓</span> <em>The file is in the shared folder; here's the link.</em> Copying a manager works differently too. Adding the boss to a tense thread is read as escalation, a formal complaint, so do it only when you intend one. And one false friend to keep out of any message: <span class='x'>✗</span> <em>I was molested by your comment</em>. <b>Molesto</b> is <span class='ok'>✓</span> <em>upset</em> or <em>bothered</em>.",
        "Varias frases que son neutras en un correo de negocios mexicano cambian de carácter en inglés. <em>Como te comenté</em> se vuelve <span class='x'>✗</span> <em>As I told you</em> o <em>As per my last email</em>, que un lector estadounidense escucha como <em>no leíste lo que te escribí</em>. <em>Te recuerdo que</em> se vuelve <span class='x'>✗</span> <em>I remind you that</em>, que suena a regaño. <em>Quedo atento a tus comentarios</em> no tiene equivalente natural; <span class='x'>✗</span> <em>I remain attentive</em> se lee rígido y distante. Da la información otra vez sin mencionar que ya la habías dado: <span class='ok'>✓</span> <em>The file is in the shared folder; here's the link.</em> Copiar a un jefe también funciona distinto. Agregar al jefe a un hilo tenso se lee como escalamiento, una queja formal, así que hazlo solo cuando eso sea lo que quieres. Y un falso amigo que no debe aparecer en ningún mensaje: <span class='x'>✗</span> <em>I was molested by your comment</em>. <b>Molesto</b> se dice <span class='ok'>✓</span> <em>upset</em> o <em>bothered</em>.",
      ],
    },
    {
      t: "rewrite",
      title: [
        "Rewrite the message before it does damage",
        "Reescribe el mensaje antes de que haga daño",
      ],
      items: [
        {
          task: [
            "A chat reply to a colleague who asked, for the third time, where a file is. Answer the question and drop the scolding.",
            "Una respuesta por chat a un colega que preguntó, por tercera vez, dónde está un archivo. Contesta la pregunta y quita el regaño.",
          ],
          before:
            "As I already told you twice, the file is in the shared folder. Please read my messages.",
          after:
            "It's in the shared folder under Q3 > Final. Here's the direct link. Let me know if it doesn't open.",
          why: [
            "The reader gets the answer faster, and nothing in the message can be screenshotted as you being difficult. If the repeated question is a real pattern, raise it in person.",
            "Quien lee recibe la respuesta más rápido, y nada en el mensaje puede acabar en una captura de pantalla donde tú seas la persona difícil. Si la pregunta repetida es un patrón real, coméntalo en persona.",
          ],
        },
        {
          task: [
            "A reply to an email whose tone offended you. Keep your dignity and move the conversation off email.",
            "Una respuesta a un correo cuyo tono te ofendió. Conserva tu dignidad y saca la conversación del correo.",
          ],
          before:
            "I am very surprised by your email. I don't think the tone is appropriate, and I am copying Dana so she is aware of the situation.",
          after:
            "Thanks for being direct about this. I'd rather talk it through than go back and forth by email. Do you have fifteen minutes today or tomorrow morning?",
          why: [
            "The original starts a fight about tone and escalates to a manager in the same message. The rewrite concedes nothing and changes the channel.",
            "El original abre un pleito sobre el tono y escala con una jefa en el mismo mensaje. La nueva versión no concede nada y cambia el canal.",
          ],
        },
        {
          task: [
            "An email to a client contact who has added two reports to the project scope. Disagree about the facts without accusing.",
            "Un correo a un contacto del cliente que agregó dos reportes al alcance del proyecto. Expresa desacuerdo sobre los hechos sin acusar.",
          ],
          before: "That is not what we agreed. You are changing the scope again.",
          after:
            "My notes from the 12th have the scope as three reports, and your list has five. Could we get on a quick call to compare what each of us has? I want to make sure we're working from the same list.",
          why: [
            "It compares two documents instead of two memories, drops <em>again</em>, and proposes a call. The disagreement is just as clear.",
            "Compara dos documentos en lugar de dos memorias, quita <em>again</em> y propone una llamada. El desacuerdo queda igual de claro.",
          ],
        },
        {
          task: [
            "The opposite problem. This message is so soft that the reader will not know there is an error. Make it clear and still courteous.",
            "El problema opuesto. Este mensaje es tan suave que quien lo lea no va a saber que hay un error. Hazlo claro sin perder la cortesía.",
          ],
          before:
            "Sorry to bother you, I don't want to create a problem, but maybe if it's possible could you check if perhaps the invoice has some little mistake? No worries if not.",
          after:
            "I think there's an error on invoice 4417: it bills 60 hours and our log shows 45. Could you check and send a corrected version by Thursday?",
          why: [
            "Six softeners buried one fact. The rewrite states the discrepancy, the request, and the date. In English, clear is courteous.",
            "Seis suavizantes enterraron un solo dato. La nueva versión dice la discrepancia, la petición y la fecha. En inglés, ser claro es ser cortés.",
          ],
        },
        {
          task: [
            "A message in a group channel with twelve people. Correct the date without contradicting Luis in public.",
            "Un mensaje en un canal grupal con doce personas. Corrige la fecha sin contradecir a Luis en público.",
          ],
          before: "@Luis that's wrong. The deadline was never the 20th.",
          after:
            "I have the 27th in the kickoff notes. Luis, I'll message you directly so we can line up our dates, and we'll post the confirmed one here.",
          why: [
            "The channel learns there is a second date without watching anyone lose. The disagreement moves to a private message and the answer comes back to the group.",
            "El canal se entera de que hay una segunda fecha sin ver perder a nadie. El desacuerdo se va a un mensaje privado y la respuesta regresa al grupo.",
          ],
        },
      ],
    },
    {
      t: "choice",
      title: [
        "Choose the response that holds the line",
        "Elige la respuesta que sostiene la línea",
      ],
      items: [
        {
          prompt: [
            "In a cross-team meeting, Dana interrupts you for the third time, mid-sentence.",
            "En una junta entre áreas, Dana te interrumpe por tercera vez, a media frase.",
          ],
          options: [
            {
              en: "No, go ahead. It's fine.",
              ok: false,
              why: [
                "Gracious, and it teaches the room that your turn can be taken. Your point is gone.",
                "Amable, y le enseña a la sala que tu turno se puede tomar. Tu punto se perdió.",
              ],
            },
            {
              en: "Dana, I want to hear that. Let me finish this point first; it's thirty seconds.",
              ok: true,
              why: [
                "Her name, a real interest in what she has to say, and a specific limit. Firm and friendly.",
                "Su nombre, un interés real en lo que quiere decir y un límite específico. Firme y cordial.",
              ],
            },
            {
              en: "That's the third time you've interrupted me.",
              ok: false,
              why: [
                "Accurate, and now the meeting is about Dana's behavior. Save the pattern for a private conversation.",
                "Exacto, y ahora la junta trata de la conducta de Dana. Guarda el patrón para una conversación privada.",
              ],
            },
          ],
        },
        {
          prompt: [
            "You ask a question in a product review. A peer answers, in front of the group: <em>Maybe if you understood the product better, you wouldn't ask that.</em>",
            "Haces una pregunta en una revisión de producto. Un colega contesta, frente al grupo: <em>Maybe if you understood the product better, you wouldn't ask that.</em>",
          ],
          options: [
            {
              en: "Wow. That was rude and completely unnecessary.",
              ok: false,
              why: [
                "The room may agree with you, and it still becomes a fight between two people. Your question is forgotten.",
                "Puede que la sala esté de acuerdo contigo, y de todos modos se vuelve un pleito entre dos personas. Tu pregunta se olvida.",
              ],
            },
            {
              en: "You're probably right. Never mind.",
              ok: false,
              why: [
                "You accepted the insult and withdrew a legitimate question. Both will happen again.",
                "Aceptaste el insulto y retiraste una pregunta legítima. Las dos cosas se van a repetir.",
              ],
            },
            {
              en: "I'd rather keep this about the question. What happens to existing customers when the price changes?",
              ok: true,
              why: [
                "One sentence marks the line, and repeating the question shows it was a good one.",
                "Una frase marca la línea, y repetir la pregunta demuestra que era buena.",
              ],
            },
          ],
        },
        {
          prompt: [
            "An email thread with Luis is on its fourth reply. Six people are copied and each message is a little sharper.",
            "Un hilo de correo con Luis va en la cuarta respuesta. Hay seis personas copiadas y cada mensaje es un poco más filoso.",
          ],
          options: [
            {
              en: "Luis, I'll respond to each of your points below. First, the delay was caused by your team's late approval. Second...",
              ok: false,
              why: [
                "A fifth reply, longer than the fourth, in front of six people. He will answer every point.",
                "Una quinta respuesta, más larga que la cuarta, frente a seis personas. Él va a contestar cada punto.",
              ],
            },
            {
              en: "Per my previous email, the answer has not changed.",
              ok: false,
              why: [
                "Short, and it reads as contempt. The thread will get worse and the problem stays unsolved.",
                "Corta, y se lee como desprecio. El hilo va a empeorar y el problema sigue sin resolverse.",
              ],
            },
            {
              en: "This is hard to solve by email. Luis, can you and I get on a call at three? We'll reply to the thread with what we decide.",
              ok: true,
              why: [
                "Changes the channel, shrinks the audience, and promises the group an outcome.",
                "Cambia el canal, reduce el público y le promete un resultado al grupo.",
              ],
            },
          ],
        },
        {
          prompt: [
            "On a one-on-one call, a colleague has been raising his voice for a full minute. You asked once to slow down and it did not help.",
            "En una llamada uno a uno, un colega lleva un minuto completo alzando la voz. Ya pediste una vez ir más despacio y no funcionó.",
          ],
          options: [
            {
              en: "You need to calm down.",
              ok: false,
              why: [
                "It tells him his reaction is the problem. Volume goes up.",
                "Le dice que el problema es su reacción. El volumen sube.",
              ],
            },
            {
              en: "I want to solve this with you, and I can't do it like this. Let's take ten minutes. I'll call you back at 11:30.",
              ok: true,
              why: [
                "States the goal, the limit, and an exact time to resume, so the pause cannot be read as hanging up on him.",
                "Dice la meta, el límite y una hora exacta para retomar, así que la pausa no puede leerse como que le colgaste.",
              ],
            },
            {
              en: "Okay. Okay. Whatever you think is best.",
              ok: false,
              why: [
                "It ends the noise and rewards it. You have agreed to something you do not accept.",
                "Acaba con el ruido y lo premia. Aceptaste algo con lo que no estás de acuerdo.",
              ],
            },
          ],
        },
        {
          prompt: [
            "On a client call, you explain the refund policy. A colleague from another team cuts in: <em>Actually, that's not our policy.</em> You are fairly sure it is.",
            "En una llamada con un cliente, explicas la política de reembolsos. Un colega de otra área interviene: <em>Actually, that's not our policy.</em> Tienes bastante certeza de que sí lo es.",
          ],
          options: [
            {
              en: "It is our policy. I helped write it.",
              ok: false,
              why: [
                "The client now watches two people from the same company argue. Whoever wins, the company loses.",
                "El cliente ahora ve discutir a dos personas de la misma empresa. Gane quien gane, la empresa pierde.",
              ],
            },
            {
              en: "Let us confirm the exact policy and send it to you in writing today, so you have one clear answer from us.",
              ok: true,
              why: [
                "Protects the client's confidence and moves the disagreement to a private conversation.",
                "Protege la confianza del cliente y lleva el desacuerdo a una conversación privada.",
              ],
            },
            {
              en: "Oh. Okay, sorry, my mistake.",
              ok: false,
              why: [
                "You withdrew something you believe is correct, and the client may now act on the wrong policy.",
                "Retiraste algo que crees correcto, y ahora el cliente puede actuar con la política equivocada.",
              ],
            },
          ],
        },
      ],
    },
    {
      t: "speak",
      title: [
        "Say it out loud: the comment in front of the room",
        "Dilo en voz alta: el comentario frente a la sala",
      ],
      prompt: [
        "You are presenting Q3 results to eight people. Elena, a peer, cuts in: <em>These numbers make no sense. Did anyone even check them?</em> Respond in three short sentences: answer the fact, mark the line or return to the topic, and offer the detail afterward.",
        "Estás presentando los resultados del tercer trimestre ante ocho personas. Elena, una colega, interviene: <em>These numbers make no sense. Did anyone even check them?</em> Responde en tres frases cortas: contesta el hecho, marca la línea o regresa al tema, y ofrece el detalle para después.",
      ],
      think: 10,
      speak: 20,
      frame:
        "The numbers were ___. If there's a specific one ___. Let me finish ___, and then ___.",
      checklist: [
        ["Three sentences or fewer.", "Tres frases o menos."],
        ["I did not answer the sarcasm.", "No contesté el sarcasmo."],
        [
          "My voice was slower and lower than hers.",
          "Mi voz fue más lenta y más baja que la suya.",
        ],
        ["I offered a specific next step.", "Ofrecí un siguiente paso específico."],
      ],
      model:
        "The numbers were checked twice, Elena. If there's a specific one that looks off, I want to know which. Let me finish the summary, and you and I can go through the detail right after this.",
    },
    {
      t: "speak",
      title: ["Say it out loud: pause the meeting", "Dilo en voz alta: pausa la junta"],
      prompt: [
        "A planning meeting with Luis and four others has gone in circles for twenty minutes. You agree on the launch month. You do not agree on which team pays for the training. Voices are rising. Pause the meeting using the four steps.",
        "Una junta de planeación con Luis y otras cuatro personas lleva veinte minutos dando vueltas. Están de acuerdo en el mes de lanzamiento. No están de acuerdo en qué equipo paga la capacitación. Las voces van subiendo. Pausa la junta con los cuatro pasos.",
      ],
      think: 15,
      speak: 30,
      frame:
        "I don't think we're ___. We agree on ___. The open question is ___. Can we ___ at ___? I'll bring ___. Could you bring ___?",
      checklist: [
        ["I described the conversation, not Luis.", "Describí la conversación, no a Luis."],
        ["I said what is already agreed.", "Dije qué ya está acordado."],
        ["I named a specific day and time.", "Nombré un día y una hora específicos."],
        ["Each side has something to bring.", "Cada parte tiene algo que traer."],
      ],
      model:
        "I don't think we're getting closer right now, and I'd rather stop than say this a fourth time. We agree on a March launch. The open question is which budget covers the training. Luis, can you and I pick this up tomorrow at nine? I'll bring what the training costs per person. Could you bring what's left in your Q1 budget?",
    },
    {
      t: "takeaways",
      items: [
        [
          "One short, even sentence about the behavior, then straight back to the subject.",
          "Una frase corta y pareja sobre la conducta, y directo de regreso al tema.",
        ],
        [
          "In public, decline the fight and schedule it: mark your disagreement, then move the detail to a private conversation.",
          "En público, no aceptes el pleito y agéndalo: deja constancia de tu desacuerdo y lleva el detalle a una conversación privada.",
        ],
        [
          "A pause needs a time, a smaller group, and something for each side to bring.",
          "Una pausa necesita una hora, un grupo más chico y algo que cada parte traiga.",
        ],
        [
          "In writing: two replies, then a call. Never send the fast answer.",
          "Por escrito: dos respuestas y después una llamada. Nunca mandes la respuesta rápida.",
        ],
        [
          "Give the information again without saying you already gave it.",
          "Da la información otra vez sin decir que ya la habías dado.",
        ],
      ],
    },
  ],
};
