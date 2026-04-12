// Unit 9: "Sentence Construction & Flow" — Full course content
//
// Section 1: Sentence variety — spot the word making it choppy — ErrorSpotter
// Section 2: Word order traps (adverb placement, adjective stacking) — ErrorSpotter
// Section 3: Linking ideas without sounding robotic — SentenceTransformer

import type { ErrorSpotterItem, SentenceTransform } from "./types";

// ─── Section 1: Sentence Variety (ErrorSpotter) ─────────────────────────────
// Learners spot the repeated word or weak connector that makes the sentence
// sound choppy and childish. Each reveal shows the collapsed, professional version.

export const varietyItems: ErrorSpotterItem[] = [
  {
    sentence: "He was nervous. He walked into the room. He looked around carefully.",
    errorWord: "He",
    improved: "Nervous, he walked into the room and looked around carefully.",
    sentenceEs: "Él estaba nervioso. Él entró al cuarto. Él miró alrededor con cuidado.",
    improvedEs: "Nervioso, entró al cuarto y miró alrededor con cuidado.",
    explanation:
      "Three simple sentences with the same subject sound like a children's story. Move the adjective to the front as an introductory phrase, then connect the two actions — one smooth sentence instead of three choppy ones.",
    explanationEs:
      "Tres oraciones simples con el mismo sujeto suenan infantiles. Mueve el adjetivo al frente como frase introductoria, luego conecta las dos acciones — una oración fluida en lugar de tres oraciones cortadas.",
  },
  {
    sentence: "The report was long and it was confusing and it had too many charts.",
    errorWord: "and",
    improved: "The report was long, confusing, and cluttered with unnecessary charts.",
    sentenceEs: "El informe era largo y era confuso y tenía demasiados gráficos.",
    improvedEs: "El informe era largo, confuso y lleno de gráficos innecesarios.",
    explanation:
      "Chaining everything with 'and' creates a run-on sentence. Stack the adjectives instead and tighten the final clause. Result: one precise, professional sentence instead of a breathless chain.",
    explanationEs:
      "Encadenar todo con 'and' crea una oración muy larga. Apila los adjetivos y comprime la última cláusula. Resultado: una oración precisa y profesional en lugar de una cadena interminable.",
  },
  {
    sentence: "She is talented. She is experienced. She is the right person for the job.",
    errorWord: "She",
    improved: "Talented, experienced, and exactly right for the job.",
    sentenceEs: "Ella es talentosa. Ella es experimentada. Ella es la persona correcta para el trabajo.",
    improvedEs: "Talentosa, experimentada y exactamente la persona correcta para el trabajo.",
    explanation:
      "Three 'She is...' sentences create a choppy, list-like rhythm. Collapse the adjectives into a tight introductory phrase — the subject becomes implied and the sentence sounds decisive, not mechanical.",
    explanationEs:
      "Tres oraciones con 'Ella es...' crean un ritmo de lista cortada. Comprime los adjetivos en una frase introductoria compacta — el sujeto queda implícito y la oración suena decisiva, no mecánica.",
  },
  {
    sentence: "We discussed the problem. Then we found a solution. Then we told the team.",
    errorWord: "Then",
    improved: "We discussed the problem, found a solution, and told the team.",
    sentenceEs: "Discutimos el problema. Luego encontramos una solución. Luego le dijimos al equipo.",
    improvedEs: "Discutimos el problema, encontramos una solución y le informamos al equipo.",
    explanation:
      "'Then...then' creates a flat, sequential list that sounds like a process manual. Join the three verbs with commas and a final 'and' — same information, professional delivery, no repeated subject needed.",
    explanationEs:
      "'Luego...luego' crea una lista plana y secuencial que suena como un manual de proceso. Une los tres verbos con comas y un 'y' final — misma información, entrega profesional, sin sujeto repetido.",
  },
  {
    sentence: "The product is popular. But it is expensive. But people still buy it.",
    errorWord: "But",
    improved: "Despite its high price, the product remains popular and continues to sell well.",
    sentenceEs: "El producto es popular. Pero es caro. Pero la gente lo sigue comprando.",
    improvedEs: "A pesar de su alto precio, el producto sigue siendo popular y continúa vendiéndose bien.",
    explanation:
      "Two consecutive sentences starting with 'But' is awkward and repetitive. Lead with 'Despite' to introduce the concession elegantly, then fold the rest into one smooth sentence.",
    explanationEs:
      "Dos oraciones consecutivas que empiezan con 'Pero' son torpes y repetitivas. Empieza con 'A pesar de' para introducir la concesión con elegancia, luego une el resto en una oración fluida.",
  },
  {
    sentence: "I want to improve. I need to practice every day. I have to find a good teacher.",
    errorWord: "I",
    improved: "To improve, I need to practice every day and find a good teacher.",
    sentenceEs: "Quiero mejorar. Necesito practicar todos los días. Tengo que encontrar un buen maestro.",
    improvedEs: "Para mejorar, necesito practicar todos los días y encontrar un buen maestro.",
    explanation:
      "Three separate 'I...' sentences repeat the subject unnecessarily. Lead with the goal ('To improve') as an introductory infinitive phrase, then chain the two requirements with 'and.' More sophisticated, same message.",
    explanationEs:
      "Tres oraciones separadas con 'Quiero/Necesito/Tengo' repiten el sujeto innecesariamente. Empieza con el objetivo ('Para mejorar') como frase infinitiva introductoria, luego encadena los dos requisitos con 'y.'",
  },
];

// ─── Section 2: Word Order Traps (ErrorSpotter) ──────────────────────────────
// Misplaced adverbs and wrong adjective stacking — the exact errors that mark
// a non-native speaker even at C1.

export const wordOrderItems: ErrorSpotterItem[] = [
  {
    sentence: "I almost have finished the entire report.",
    errorWord: "almost",
    improved: "I have almost finished the entire report.",
    sentenceEs: "Casi tengo terminado el informe completo.",
    improvedEs: "Casi he terminado el informe completo.",
    explanation:
      "'Almost' modifies 'finished' (the main verb), not 'have' (the auxiliary). Always place degree adverbs — almost, nearly, barely, hardly — directly before the word they limit, not before the auxiliary verb.",
    explanationEs:
      "'Almost' modifica 'finished' (el verbo principal), no 'have' (el auxiliar). Siempre coloca los adverbios de grado — almost, nearly, barely, hardly — directamente antes de la palabra que limitan, no antes del auxiliar.",
  },
  {
    sentence: "She even didn't apologize after the mistake.",
    errorWord: "even",
    improved: "She didn't even apologize after the mistake.",
    sentenceEs: "Ella incluso no se disculpó después del error.",
    improvedEs: "Ella ni siquiera se disculpó después del error.",
    explanation:
      "'Even' as an emphasizer belongs after the first auxiliary verb, not before it. The pattern is: [subject] + [auxiliary] + even + [main verb]. This is one of the subtler word-order rules — but native speakers notice immediately when it's wrong.",
    explanationEs:
      "'Even' como enfatizador va después del primer auxiliar, no antes. El patrón es: [sujeto] + [auxiliar] + even + [verbo principal]. Es una de las reglas de orden más sutiles — pero los nativos lo notan de inmediato cuando está mal.",
  },
  {
    sentence: "She wore a long beautiful red dress to the interview.",
    errorWord: "long",
    improved: "She wore a beautiful long red dress to the interview.",
    sentenceEs: "Ella usó un largo hermoso vestido rojo para la entrevista.",
    improvedEs: "Ella usó un hermoso vestido largo y rojo para la entrevista.",
    explanation:
      "English adjectives follow a strict order: opinion → size → age → shape → color → origin → material. 'Beautiful' is an opinion adjective — it always comes first, before 'long' (size). The full sequence here: beautiful (opinion) → long (size) → red (color). Native speakers follow this order instinctively and notice immediately when it's broken.",
    explanationEs:
      "Los adjetivos en inglés siguen un orden estricto: opinión → tamaño → edad → forma → color → origen → material. 'Beautiful' es un adjetivo de opinión — siempre va primero, antes de 'long' (tamaño). La secuencia correcta: beautiful (opinión) → long (tamaño) → red (color). Los nativos siguen este orden instintivamente y lo notan de inmediato cuando está roto.",
  },
  {
    sentence: "She explained carefully the new process to her team.",
    errorWord: "carefully",
    improved: "She carefully explained the new process to her team.",
    sentenceEs: "Ella explicó cuidadosamente el nuevo proceso a su equipo.",
    improvedEs: "Ella explicó el nuevo proceso a su equipo con cuidado.",
    explanation:
      "Never place a manner adverb between the verb and its direct object. 'Carefully' belongs either before the main verb ('She carefully explained...') or at the end of the sentence ('...to her team carefully'). Both positions are correct — the middle is not.",
    explanationEs:
      "Nunca coloques un adverbio de manera entre el verbo y su objeto directo. 'Carefully' va antes del verbo principal ('She carefully explained...') o al final de la oración ('...to her team carefully'). Ambas posiciones son correctas — la del medio no lo es.",
  },
  {
    sentence: "She told yesterday to her manager about the issue.",
    errorWord: "yesterday",
    improved: "Yesterday, she told her manager about the issue.",
    sentenceEs: "Ella le dijo ayer a su gerente sobre el problema.",
    improvedEs: "Ayer, le dijo a su gerente sobre el problema.",
    explanation:
      "Time adverbs — yesterday, last week, recently, soon — belong at the very start or the very end of a sentence, never between the verb and its indirect object. Spanish often places them mid-sentence, but English doesn't.",
    explanationEs:
      "Los adverbios de tiempo — yesterday, last week, recently, soon — van al principio o al final de la oración, nunca entre el verbo y su objeto indirecto. El español a menudo los coloca en medio de la oración, pero el inglés no.",
  },
  {
    sentence: "They discussed about the new strategy during the meeting.",
    errorWord: "about",
    improved: "They discussed the new strategy during the meeting.",
    sentenceEs: "Ellos discutieron sobre la nueva estrategia durante la reunión.",
    improvedEs: "Ellos discutieron la nueva estrategia durante la reunión.",
    explanation:
      "'Discuss' is transitive — it takes a direct object with no preposition. This is a classic Spanish-speaker error because 'discutir sobre' is correct in Spanish. In English: discuss + [topic], never 'discuss about.' Same applies to 'mention,' 'consider,' 'approach.'",
    explanationEs:
      "'Discuss' es transitivo — toma objeto directo sin preposición. Es un error clásico de hispanohablantes porque 'discutir sobre' es correcto en español. En inglés: discuss + [tema], nunca 'discuss about.' Lo mismo aplica a 'mention,' 'consider,' 'approach.'",
  },
];

// ─── Section 3: Linking Ideas Without Sounding Robotic (SentenceTransformer) ─
// The "flat" version shows robotic, disconnected English. The "strong" version
// shows the same idea with natural connectors and spoken rhythm.
//
// Forward slashes ( / ) in the strong version mark natural spoken pauses —
// the "chunks" a fluent speaker uses to group ideas and let listeners follow.

export const linkingTransforms: SentenceTransform[] = [
  {
    flat: "I studied a lot. I did not pass the exam. I was disappointed.",
    flatEs: "Estudié mucho. No pasé el examen. Estaba decepcionado.",
    strong: "Although I studied a lot, / I didn't pass the exam — / which was disappointing.",
    strongEs: "Aunque estudié mucho, / no pasé el examen — / lo cual fue decepcionante.",
    technique: "Concession clause + dash",
    techniqueEs: "Cláusula de concesión + guión",
    why: "The slashes show where you naturally pause when speaking. 'Although I studied a lot' is one breath-chunk — pause — 'I didn't pass the exam' is the main point — pause — 'which was disappointing' lands as a soft afterthought. Three choppy sentences become one flowing clause. The grammar level also jumps: 'Although' + relative clause is C1; three short sentences is A2.",
    whyEs: "Las barras muestran dónde pausas naturalmente al hablar. 'Although I studied a lot' es un bloque de respiración — pausa — 'I didn't pass the exam' es el punto principal — pausa — 'which was disappointing' llega como un suave comentario final. Tres oraciones cortadas se convierten en una cláusula fluida. El nivel gramatical también sube: 'Although' + cláusula relativa es C1; tres oraciones cortas es A2.",
  },
  {
    flat: "The project was finished. We submitted it. The client was happy.",
    flatEs: "El proyecto fue terminado. Lo enviamos. El cliente estaba contento.",
    strong: "Once we finished the project and submitted it, / the client was thrilled.",
    strongEs: "Una vez que terminamos el proyecto y lo enviamos, / el cliente estaba encantado.",
    technique: "Time clause + compression",
    techniqueEs: "Cláusula temporal + compresión",
    why: "A time clause ('Once we...') absorbs the first two actions into one chunk, and the slash shows the natural breath before the main result. 'Thrilled' replaces 'happy' for impact. This is how professionals narrate outcomes — not as three separate events, but as one tight cause-and-effect with a payoff at the end.",
    whyEs: "Una cláusula temporal ('Once we...') absorbe las dos primeras acciones en un bloque, y la barra muestra la respiración natural antes del resultado principal. 'Thrilled' reemplaza 'happy' para mayor impacto. Así es como los profesionales narran resultados — no como tres eventos separados, sino como una causa-efecto compacta con un desenlace al final.",
  },
  {
    flat: "He is very experienced. He is good at his job. But he does not communicate well.",
    flatEs: "Él es muy experimentado. Es bueno en su trabajo. Pero no se comunica bien.",
    strong: "He's highly experienced and excellent at his job, / but his communication needs work.",
    strongEs: "Tiene mucha experiencia y es excelente en su trabajo, / pero su comunicación necesita mejorar.",
    technique: "Compression + contrast",
    techniqueEs: "Compresión + contraste",
    why: "Stack the positives into one clause, introduce the contrast with 'but' after the natural pause. The comma before 'but' is exactly where a speaker breathes. 'Needs work' is softer and more professional than 'does not communicate well' — important in business English where how you say something matters as much as what you say.",
    whyEs: "Apila los positivos en una cláusula, introduce el contraste con 'but' después de la pausa natural. La coma antes de 'but' es exactamente donde el hablante respira. 'Needs work' es más suave y profesional que 'does not communicate well' — importante en el inglés de negocios donde cómo dices algo importa tanto como qué dices.",
  },
  {
    flat: "I called the client. I explained the delay. I apologized. The client understood.",
    flatEs: "Llamé al cliente. Expliqué el retraso. Me disculpé. El cliente entendió.",
    strong: "I called the client, explained the delay, and apologized — / and to my relief, they understood.",
    strongEs: "Llamé al cliente, expliqué el retraso y me disculpé — / y para mi alivio, entendieron.",
    technique: "Verb chain + em-dash",
    techniqueEs: "Cadena de verbos + guión largo",
    why: "Three quick actions (called, explained, apologized) chain together with commas — no repeated 'I.' The em-dash creates a spoken beat before the outcome, like a storyteller building suspense. 'To my relief' adds personality and natural spoken color that four flat sentences completely erase.",
    whyEs: "Tres acciones rápidas (llamé, expliqué, me disculpé) se encadenan con comas — sin 'I' repetido. El guión largo crea una pausa dramática antes del resultado, como un narrador construyendo suspenso. 'To my relief' agrega personalidad y color natural que cuatro oraciones planas eliminan por completo.",
  },
  {
    flat: "Learning English is not easy. It takes time. But it is worth it. You will see results.",
    flatEs: "Aprender inglés no es fácil. Toma tiempo. Pero vale la pena. Verás resultados.",
    strong: "Learning English takes time and effort, / but the results — / when they come — / are worth every minute.",
    strongEs: "Aprender inglés requiere tiempo y esfuerzo, / pero los resultados — / cuando llegan — / valen cada minuto.",
    technique: "Concession + embedded parenthetical",
    techniqueEs: "Concesión + paréntesis incrustado",
    why: "Three slashes reveal the full rhythm: build-up, contrast, embedded pause, resolution. The parenthetical 'when they come' is an advanced technique — it interrupts the sentence intentionally to create suspense before the payoff. This is how motivational speakers and executive coaches speak. It's also much harder to translate word-for-word, which means it sounds unmistakably natural.",
    whyEs: "Tres barras revelan el ritmo completo: preparación, contraste, pausa incrustada, resolución. El paréntesis 'when they come' es una técnica avanzada — interrumpe la oración intencionalmente para crear suspenso antes del desenlace. Así hablan los coaches ejecutivos y los oradores motivacionales. También es mucho más difícil de traducir palabra por palabra, lo que significa que suena inconfundiblemente natural.",
  },
];
