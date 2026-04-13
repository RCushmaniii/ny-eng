// Unit 10: "Sounding Natural, Not Translated" — Full course content
//
// Section 1: Collocations native speakers expect — WordPairLab
// Section 2: The rhythm of spoken English — stress and pause — SentenceTransformer
// Section 3: Thinking in English instead of translating — SentenceTransformer

import type { WordPair, SentenceTransform } from "./types";

// ─── Section 1: Collocations (WordPairLab) ───────────────────────────────────
// The most common direct-translation collocation errors Spanish speakers make
// at advanced level. Weak = the translated version; Strong = the native pairing.

export const collocationPairs: WordPair[] = [
  {
    weak: "We cancelled the picnic because of the strong rain.",
    weakEs: "Cancelamos el picnic a causa de la lluvia fuerte.",
    weakHighlight: "strong",
    strong: "We cancelled the picnic because of the heavy rain.",
    strongEs: "Cancelamos el picnic a causa de la lluvia torrencial.",
    strongHighlight: "heavy",
    why: "'Heavy' is the fixed collocation for rain in English — always. You can have 'strong wind' or 'strong coffee,' but rain is always 'heavy.' This is pure collocation: the logic doesn't matter, the pairing is fixed. Heavy rain, heavy snow, heavy traffic, heavy workload.",
    whyEs: "'Heavy' es la colocación fija para la lluvia en inglés — siempre. Puedes tener 'strong wind' o 'strong coffee,' pero la lluvia siempre es 'heavy.' Esto es colocación pura: la lógica no importa, la combinación es fija. Heavy rain, heavy snow, heavy traffic, heavy workload.",
    category: "Weather",
    categoryEs: "Clima",
  },
  {
    weak: "I did a mistake in the report and had to redo the whole section.",
    weakEs: "Cometí un error en el informe y tuve que rehacer toda la sección.",
    weakHighlight: "did",
    strong: "I made a mistake in the report and had to redo the whole section.",
    strongEs: "Cometí un error en el informe y tuve que rehacer toda la sección.",
    strongHighlight: "made",
    why: "Spanish 'hacer' covers both 'do' and 'make' — but English splits them. You MAKE mistakes, decisions, and promises. You DO work, homework, and exercises. This do/make split is one of the most persistent collocation errors even at C1. When in doubt: if you can count it (a mistake, a decision), it's probably 'make.'",
    whyEs: "El español 'hacer' cubre tanto 'do' como 'make' — pero el inglés los separa. MAKE va con mistakes, decisions, promises. DO va con work, homework, exercises. Esta división do/make es uno de los errores de colocación más persistentes incluso en C1.",
    category: "Actions",
    categoryEs: "Acciones",
  },
  {
    weak: "Can you put attention to this part of the contract?",
    weakEs: "¿Puedes poner atención a esta parte del contrato?",
    weakHighlight: "put",
    strong: "Can you pay attention to this part of the contract?",
    strongEs: "¿Puedes prestar atención a esta parte del contrato?",
    strongHighlight: "pay",
    why: "Spanish 'poner atención' (put attention) is a direct false friend. English collocates 'pay' with attention — always. You also 'pay' a compliment, 'pay' a visit, and 'pay' respects. No native speaker would say 'put attention.' The verb is fixed and non-negotiable.",
    whyEs: "El español 'poner atención' es un falso amigo directo. El inglés usa 'pay' con attention — siempre. También 'pay' a compliment, 'pay' a visit, 'pay' respects. Ningún nativo diría 'put attention.' El verbo es fijo e irremplazable.",
    category: "Actions",
    categoryEs: "Acciones",
  },
  {
    weak: "She made a photo of the whole team before the event started.",
    weakEs: "Ella hizo una foto de todo el equipo antes de que empezara el evento.",
    weakHighlight: "made",
    strong: "She took a photo of the whole team before the event started.",
    strongEs: "Ella tomó una foto de todo el equipo antes de que empezara el evento.",
    strongHighlight: "took",
    why: "In Spanish you 'hacer una foto' (make a photo), but English collocates 'take' with photos, pictures, and selfies — always. You 'make' art and films, but you 'take' photographs. Take a photo, take a picture, take a screenshot, take a selfie.",
    whyEs: "En español 'haces una foto,' pero el inglés usa 'take' con photos, pictures y selfies — siempre. Haces arte y películas, pero tomas fotografías. Take a photo, take a picture, take a screenshot, take a selfie.",
    category: "Actions",
    categoryEs: "Acciones",
  },
  {
    weak: "At the end, we decided to stay and finish the project together.",
    weakEs: "Al final, decidimos quedarnos y terminar el proyecto juntos.",
    weakHighlight: "At the end",
    strong: "In the end, we decided to stay and finish the project together.",
    strongEs: "Al final, decidimos quedarnos y terminar el proyecto juntos.",
    strongHighlight: "In the end",
    why: "'At the end' refers to a physical or chronological position: 'at the end of the street,' 'at the end of the movie.' 'In the end' means 'ultimately' or 'after everything' — it introduces a conclusion or result. Spanish 'al final' covers both, but English splits them.",
    whyEs: "'At the end' se refiere a una posición física o cronológica: 'at the end of the street,' 'at the end of the movie.' 'In the end' significa 'finalmente' o 'después de todo' — introduce una conclusión. El español 'al final' cubre ambos, pero el inglés los separa.",
    category: "Time",
    categoryEs: "Tiempo",
  },
  {
    weak: "I grabbed a cold last week and missed two days of work.",
    weakEs: "Agarré un resfriado la semana pasada y falté dos días al trabajo.",
    weakHighlight: "grabbed",
    strong: "I caught a cold last week and missed two days of work.",
    strongEs: "Agarré un resfriado la semana pasada y falté dos días al trabajo.",
    strongHighlight: "caught",
    why: "Spanish 'agarrar un resfriado' maps almost perfectly to English — except the verb must be 'catch,' not 'grab.' Illnesses in English are caught: catch a cold, catch the flu, catch a virus. You cannot grab them. 'Catch' is the only correct verb for getting sick.",
    whyEs: "El español 'agarrar un resfriado' mapea casi perfectamente al inglés — excepto que el verbo debe ser 'catch,' no 'grab.' Las enfermedades en inglés se 'atrapan': catch a cold, catch the flu, catch a virus. No puedes 'agarrarlas.'",
    category: "Health",
    categoryEs: "Salud",
  },
  {
    weak: "We passed a great time at the conference — best event of the year.",
    weakEs: "Pasamos un momento genial en la conferencia — el mejor evento del año.",
    weakHighlight: "passed",
    strong: "We had a great time at the conference — best event of the year.",
    strongEs: "La pasamos genial en la conferencia — el mejor evento del año.",
    strongHighlight: "had",
    why: "Spanish 'pasar un buen rato' (pass a good time) is one of the most common translation errors at advanced level. In English you HAVE a good time, a great time, a terrible time — never 'pass' it. The collocation 'have a [adjective] time' is completely fixed.",
    whyEs: "El español 'pasar un buen rato' es uno de los errores de traducción más comunes en nivel avanzado. En inglés se TIENE un buen tiempo — 'have a good time, a great time, a terrible time' — nunca 'pass' it. La colocación 'have a [adjetivo] time' es completamente fija.",
    category: "Experience",
    categoryEs: "Experiencia",
  },
  {
    weak: "It takes strong work and dedication to build a successful business.",
    weakEs: "Se necesita trabajo fuerte y dedicación para construir un negocio exitoso.",
    weakHighlight: "strong",
    strong: "It takes hard work and dedication to build a successful business.",
    strongEs: "Se necesita trabajo duro y dedicación para construir un negocio exitoso.",
    strongHighlight: "hard",
    why: "'Hard work' is the fixed collocation — not 'strong work,' 'heavy work,' or 'difficult work.' You work hard, you put in hard work, and it pays off. 'Hard' collocates where Spanish often uses 'fuerte': hard evidence, hard truth, hard lesson, hard decision.",
    whyEs: "'Hard work' es la colocación fija — no 'strong work,' 'heavy work,' ni 'difficult work.' Trabajas duro, pones 'hard work,' y rinde frutos. 'Hard' coloca donde el español usa 'fuerte': hard evidence, hard truth, hard lesson, hard decision.",
    category: "Work",
    categoryEs: "Trabajo",
  },
];

// ─── Section 2: Rhythm — Stress and Pause (SentenceTransformer) ──────────────
// The "flat" version shows how a learner reads it — monotone, no natural stress.
// The "strong" version shows how a fluent speaker delivers it:
//   CAPS = stressed syllable/word   /  = natural spoken pause

export const rhythmTransforms: SentenceTransform[] = [
  {
    flat: "I need you to send me the report by Friday at the latest.",
    flatEs: "Necesito que me envíes el informe el viernes a más tardar.",
    strong: "I NEED you to send me the REPORT / by FRIDAY / at the LATEST.",
    strongEs: "NECESITO que me envíes el INFORME / el VIERNES / a más TARDAR.",
    technique: "Content word stress",
    techniqueEs: "Énfasis en palabras de contenido",
    why: "Native speakers stress content words (verbs, nouns, adjectives) and compress function words (you, me, the, by, at). The three stressed words — NEED, REPORT, FRIDAY — carry the entire message. If someone only heard those three words, they'd understand the sentence. That's how English rhythm works: stress the meaning, compress the glue.",
    whyEs: "Los nativos enfatizan palabras de contenido (verbos, sustantivos, adjetivos) y comprimen las palabras función (you, me, the, by, at). Las tres palabras enfatizadas — NEED, REPORT, FRIDAY — transmiten todo el mensaje. Así funciona el ritmo inglés: enfatiza el significado, comprime el pegamento.",
  },
  {
    flat: "That is actually a really interesting idea and I think we should explore it.",
    flatEs: "Eso es en realidad una idea muy interesante y creo que deberíamos explorarla.",
    strong: "That's ACTUALLY a really INteresting idea / and I think we should EXPLORE it.",
    strongEs: "Es REALMENTE una idea muy INteresante / y creo que deberíamos EXplorarla.",
    technique: "Word stress + contractions",
    techniqueEs: "Acento de palabra + contracciones",
    why: "'Actually' is stressed because it signals something unexpected or emphatic. 'Interesting' gets stress on the first syllable only — IN-ter-est-ing, not in-TER-est-ing. English word stress is fixed: say it wrong and even perfect grammar sounds foreign. Contractions ('that's') keep the rhythm flowing — 'that is' sounds formal and slow in casual speech.",
    whyEs: "'Actually' se enfatiza porque señala algo inesperado o enfático. 'Interesting' se acentúa solo en la primera sílaba — IN-ter-est-ing, no in-TER-est-ing. El acento de las palabras en inglés es fijo: pronunciarlo mal suena extranjero aunque la gramática sea perfecta.",
  },
  {
    flat: "I was going to call you but I completely forgot about it.",
    flatEs: "Iba a llamarte pero se me olvidó por completo.",
    strong: "I was GOING to call you / but I completely FORGOT.",
    strongEs: "Iba a llamarte / pero se me olvidó por COMPLETO.",
    technique: "Intention stress + contrast pause",
    techniqueEs: "Énfasis de intención + pausa de contraste",
    why: "Stress on GOING signals intention — it wasn't an accident, it was a plan that failed. FORGOT is stressed because it's the unexpected outcome — the punchline. The pause before 'but' is where a native speaker breathes and lets the contrast land. Without that pause, the sentence sounds rushed. The filler 'about it' at the end is cut — it adds nothing.",
    whyEs: "El énfasis en GOING señala intención — no fue un accidente, fue un plan que falló. FORGOT se enfatiza porque es el resultado inesperado — el remate. La pausa antes de 'but' es donde el hablante nativo respira y deja que el contraste aterrice. Sin esa pausa, la oración suena apresurada.",
  },
  {
    flat: "The meeting has been moved to Thursday instead of Wednesday.",
    flatEs: "La reunión ha sido cambiada al jueves en lugar del miércoles.",
    strong: "The meeting has been MOVED / to THURSDAY / instead of WEDNESDAY.",
    strongEs: "La reunión ha sido CAMBIADA / al JUEVES / en lugar del MIÉRCOLES.",
    technique: "News delivery stress",
    techniqueEs: "Énfasis para entregar noticias",
    why: "When delivering updates, stress falls on the NEW information: what changed (MOVED), when it's now (THURSDAY), and the contrast (WEDNESDAY). The two pauses create a natural announcement rhythm — each chunk lands before the next arrives. This is how professionals deliver schedule changes, not as one flat sentence.",
    whyEs: "Al dar actualizaciones, el énfasis cae en la información NUEVA: qué cambió (MOVED), cuándo es ahora (THURSDAY), y el contraste (WEDNESDAY). Las dos pausas crean un ritmo natural de anuncio — cada bloque aterriza antes de que llegue el siguiente.",
  },
  {
    flat: "You really should consider applying for that position before the deadline.",
    flatEs: "Realmente deberías considerar aplicar para ese puesto antes de la fecha límite.",
    strong: "You REALLY should consider APPLYING / for THAT position / before the DEADLINE.",
    strongEs: "REALMENTE deberías considerar APLICAR / para ESE puesto / antes de la FECHA LÍMITE.",
    technique: "Emphasis + recommendation stress",
    techniqueEs: "Énfasis + acento de recomendación",
    why: "'Really' stressed signals a strong personal recommendation — not just information, but genuine advice. 'Applying' is the key action. 'That' gets slight stress to point at this specific position. 'Deadline' stressed creates urgency. These stress choices carry attitude and nuance — they turn a generic sentence into a genuine, emphatic recommendation.",
    whyEs: "'Really' enfatizado señala una recomendación personal fuerte — no solo información, sino consejo genuino. 'Applying' es la acción clave. 'That' se enfatiza levemente para señalar este puesto específico. 'Deadline' enfatizado crea urgencia. Estas elecciones de acento transmiten actitud y matiz.",
  },
];

// ─── Section 3: Thinking in English, Not Translating (SentenceTransformer) ───
// Direct-translation errors — the flat version shows what comes out when the
// learner thinks in Spanish and translates word-for-word. The strong version
// shows what a native speaker actually says.

export const thinkingTransforms: SentenceTransform[] = [
  {
    flat: "I have hunger. Let's stop somewhere to eat.",
    flatEs: "Tengo hambre. Paremos en algún lugar para comer.",
    strong: "I'm hungry. Let's stop somewhere to eat.",
    strongEs: "Tengo hambre. Paremos en algún lugar para comer.",
    technique: "Have → Be for physical states",
    techniqueEs: "Tener → Ser/Estar para estados físicos",
    why: "Spanish uses 'tener' (have) for physical states: tengo hambre, tengo frío, tengo sueño, tengo miedo. English uses 'be': I'm hungry, I'm cold, I'm sleepy, I'm scared. This is one of the clearest signs of translating from Spanish — and one of the easiest to fix once you know the pattern.",
    whyEs: "El español usa 'tener' para estados físicos: tengo hambre, tengo frío, tengo sueño, tengo miedo. El inglés usa 'be': I'm hungry, I'm cold, I'm sleepy, I'm scared. Esta es una de las señales más claras de traducir del español — y una de las más fáciles de corregir.",
  },
  {
    flat: "It makes me feel nervous to speak in public in front of a big group.",
    flatEs: "Me pone nervioso hablar en público frente a un grupo grande.",
    strong: "Speaking in public makes me nervous.",
    strongEs: "Hablar en público me pone nervioso.",
    technique: "Cause first, effect second",
    techniqueEs: "Primero la causa, después el efecto",
    why: "Spanish 'Me pone nervioso hablar en público' leads with the effect (me pone nervioso) before the cause. English prefers the cause first: 'Speaking in public...' This isn't just word order — it's a thinking pattern. When you translate the Spanish structure directly, the English sounds backwards and overly formal.",
    whyEs: "El español 'Me pone nervioso hablar en público' empieza con el efecto antes de la causa. El inglés prefiere la causa primero: 'Speaking in public...' No es solo orden de palabras — es un patrón de pensamiento. Al traducir la estructura española directamente, el inglés suena al revés.",
  },
  {
    flat: "How do you call this thing in English? I always forget the word.",
    flatEs: "¿Cómo se llama esto en inglés? Siempre olvido la palabra.",
    strong: "What do you call this in English? I always forget the word.",
    strongEs: "¿Cómo se llama esto en inglés? Siempre olvido la palabra.",
    technique: "'What' not 'How' for names",
    techniqueEs: "'What' no 'How' para nombres",
    why: "Spanish 'Cómo se llama esto?' uses 'cómo' (how). English asks 'What do you call this?' — always 'what,' never 'how.' This is a direct false-friend translation that persists even at C1. Once you know it, you hear it everywhere — and you never say 'how do you call it' again.",
    whyEs: "El español '¿Cómo se llama esto?' usa 'cómo.' El inglés pregunta 'What do you call this?' — siempre 'what,' nunca 'how.' Esta es una traducción de falso amigo directo que persiste incluso en C1. Una vez que lo sabes, lo escuchas en todas partes.",
  },
  {
    flat: "She explained me the entire process step by step very clearly.",
    flatEs: "Ella me explicó todo el proceso paso a paso muy claramente.",
    strong: "She explained the entire process to me step by step.",
    strongEs: "Ella me explicó todo el proceso paso a paso.",
    technique: "Indirect object needs 'to'",
    techniqueEs: "El objeto indirecto necesita 'to'",
    why: "Spanish 'me explicó' puts the indirect object before the verb. English requires 'to me' after the direct object: explained [the process] to [me]. The verb 'explain' never takes a bare indirect object. Same pattern: 'describe to me,' 'suggest to me,' 'mention to me.' Also note: 'very clearly' is cut — 'step by step' already implies clarity.",
    whyEs: "El español 'me explicó' pone el objeto indirecto antes del verbo. El inglés requiere 'to me' después del objeto directo: explained [the process] to [me]. El verbo 'explain' nunca toma un objeto indirecto sin 'to.' Mismo patrón: 'describe to me,' 'suggest to me,' 'mention to me.'",
  },
  {
    flat: "I have 38 years and I have been working in finance since 10 years.",
    flatEs: "Tengo 38 años y llevo 10 años trabajando en finanzas.",
    strong: "I'm 38, and I've been working in finance for 10 years.",
    strongEs: "Tengo 38 años y llevo 10 años trabajando en finanzas.",
    technique: "Age + duration: 'be' and 'for'",
    techniqueEs: "Edad + duración: 'be' y 'for'",
    why: "Two translation errors in one sentence. 'I have 38 years' → 'I'm 38' (age uses 'be,' not 'have'). 'Since 10 years' → 'for 10 years' ('since' marks a point in time like 2015 or Monday; 'for' marks a duration like 10 years or 3 months). Both errors come from translating 'tener' and 'desde' directly.",
    whyEs: "Dos errores de traducción en una oración. 'I have 38 years' → 'I'm 38' (la edad usa 'be,' no 'have'). 'Since 10 years' → 'for 10 years' ('since' marca un punto en el tiempo; 'for' marca una duración). Ambos errores vienen de traducir 'tener' y 'desde' directamente.",
  },
];
