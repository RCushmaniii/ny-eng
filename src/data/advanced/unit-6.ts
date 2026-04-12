// Unit 6: "Pronunciation: Hitting the Hard Sounds" — Full course content
//
// Section 1: The S sound — plurals, possessives, third-person verbs — MinimalPairDrill
// Section 2: -en endings — strengthen, tighten, written, spoken — ErrorSpotter
// Section 3: TH, R, and the vowels that give you away — MinimalPairDrill

import type { MinimalPair, ErrorSpotterItem } from "./types";

// ─── Section 1: The S Sound (MinimalPairDrill) ───────────────────────────────

export const sSoundPairs: MinimalPair[] = [
  {
    wordA: "cats",
    wordB: "dogs",
    distinction: "S = /s/ after voiceless sounds vs S = /z/ after voiced sounds",
    distinctionEs: "S = /s/ después de sonidos sordos vs S = /z/ después de sonidos sonoros",
    exampleA: "I have two cats.",
    exampleAEs: "Tengo dos gatos.",
    exampleB: "I have three dogs.",
    exampleBEs: "Tengo tres perros.",
    tip: "The S at the end of plural nouns is NOT always /s/. After voiceless consonants (t, k, p, f), it's /s/: cats, books, cups. After voiced consonants (g, d, b, v, n, m, l) and vowels, it's /z/: dogs, beds, lives, shoes. Most Spanish speakers say /s/ for everything — that's the tell.",
    tipEs: "La S al final de sustantivos plurales NO siempre es /s/. Después de consonantes sordas (t, k, p, f), es /s/: cats, books, cups. Después de consonantes sonoras (g, d, b, v, n, m, l) y vocales, es /z/: dogs, beds, lives, shoes.",
  },
  {
    wordA: "watches",
    wordB: "plays",
    distinction: "S = /ɪz/ (extra syllable) after sibilants vs S = /z/ after vowels",
    distinctionEs: "S = /ɪz/ (sílaba extra) después de sibilantes vs S = /z/ después de vocales",
    exampleA: "She watches TV every night.",
    exampleAEs: "Ella ve televisión cada noche.",
    exampleB: "He plays guitar on weekends.",
    exampleBEs: "Él toca guitarra los fines de semana.",
    tip: "After S, Z, SH, CH, X, and GE/DGE sounds, the S ending becomes a full extra syllable /ɪz/: watch-ES, bus-ES, charg-ES. This is the one most Spanish speakers DO pronounce correctly — because Spanish adds a similar vowel sound. The hard ones are the silent /s/ and /z/ above.",
    tipEs: "Después de sonidos S, Z, SH, CH, X y GE/DGE, la terminación S se vuelve una sílaba extra /ɪz/: watch-ES, bus-ES, charg-ES. Esta es la que la mayoría de hispanohablantes SÍ pronuncian correctamente.",
  },
  {
    wordA: "he works",
    wordB: "he lives",
    distinction: "Third-person S follows the same /s/ vs /z/ rule as plurals",
    distinctionEs: "La S de tercera persona sigue la misma regla de /s/ vs /z/ que los plurales",
    exampleA: "He works at a bank.",
    exampleAEs: "Él trabaja en un banco.",
    exampleB: "He lives in Mexico City.",
    exampleBEs: "Él vive en la Ciudad de México.",
    tip: "The same rule applies to third-person verb endings: 'works' = /wɜːrks/ (voiceless K → /s/). 'Lives' = /lɪvz/ (voiced V → /z/). 'Watches' = /wɒtʃɪz/ (sibilant CH → /ɪz/). If you master the S-sound rule, your plurals AND your verbs sound native.",
    tipEs: "La misma regla aplica a las terminaciones de tercera persona: 'works' = /wɜːrks/ (K sorda → /s/). 'Lives' = /lɪvz/ (V sonora → /z/). Si dominas la regla del sonido S, tus plurales Y tus verbos suenan nativos.",
  },
  {
    wordA: "Tom's book",
    wordB: "Maria's car",
    distinction: "Possessive S follows the same voicing rules",
    distinctionEs: "La S posesiva sigue las mismas reglas de sonoridad",
    exampleA: "That's Tom's book on the table.",
    exampleAEs: "Ese es el libro de Tom en la mesa.",
    exampleB: "Maria's car is in the parking lot.",
    exampleBEs: "El carro de Maria está en el estacionamiento.",
    tip: "Possessive 'S follows the SAME rule: after voiceless sounds → /s/ (Tom's, Kate's, Jack's). After voiced sounds → /z/ (Maria's, John's, Bob's). After sibilants → /ɪz/ (Ross's, Liz's, George's). One rule covers plurals, verbs, AND possessives.",
    tipEs: "La S posesiva sigue la MISMA regla: después de sordas → /s/ (Tom's, Kate's). Después de sonoras → /z/ (Maria's, John's). Después de sibilantes → /ɪz/ (Ross's, Liz's). Una regla cubre plurales, verbos Y posesivos.",
  },
];

// ─── Section 2: -EN Endings (ErrorSpotter) ───────────────────────────────────
// The trap: Spanish speakers add a vowel sound to -en endings, making
// "written" sound like "WRIT-en" instead of "WRIT-n." The -en is barely
// a syllable in natural English — almost swallowed.

export const enEndingErrors: ErrorSpotterItem[] = [
  {
    sentence: "The document was writ-TEN by the manager yesterday.",
    errorWord: "writ-TEN",
    improved: "The document was written by the manager yesterday.",
    sentenceEs: "El documento fue escrito por el gerente ayer.",
    improvedEs: "El documento fue escrito por el gerente ayer.",
    explanation:
      "'Written' has two syllables, but the second is almost silent: WRIT-n, not writ-TEN. The -en ending reduces to a schwa-like /n/ sound. Spanish speakers over-pronounce it because Spanish doesn't reduce unstressed syllables the way English does.",
    explanationEs:
      "'Written' tiene dos sílabas, pero la segunda es casi silenciosa: WRIT-n, no writ-TEN. La terminación -en se reduce a un sonido /n/ tipo schwa. Los hispanohablantes la sobre-pronuncian porque el español no reduce sílabas átonas como lo hace el inglés.",
  },
  {
    sentence: "We need to strength-EN the security protocols.",
    errorWord: "strength-EN",
    improved: "We need to strengthen the security protocols.",
    sentenceEs: "Necesitamos fortalecer los protocolos de seguridad.",
    improvedEs: "Necesitamos fortalecer los protocolos de seguridad.",
    explanation:
      "'Strengthen' = STRENG-thən. The -en ending is a quick, unstressed syllable — almost the same duration as a single consonant. Don't give it equal weight with the first syllable. The same pattern: tighten (TAIT-n), frighten (FRAIT-n), lighten (LAIT-n).",
    explanationEs:
      "'Strengthen' = STRENG-thən. La terminación -en es una sílaba rápida y sin acento — casi la misma duración que una sola consonante. El mismo patrón: tighten (TAIT-n), frighten (FRAIT-n), lighten (LAIT-n).",
  },
  {
    sentence: "Has the project been for-GOT-ten or is it still active?",
    errorWord: "for-GOT-ten",
    improved: "Has the project been forgotten or is it still active?",
    sentenceEs: "¿El proyecto ha sido olvidado o todavía está activo?",
    improvedEs: "¿El proyecto ha sido olvidado o todavía está activo?",
    explanation:
      "'Forgotten' = fər-GOT-n. Three syllables, but the last one is barely there. The stress is on GOT, and the -en melts into a nasal /n/ that almost attaches to the 't' before it: fər-GOT-n. Same for 'spoken' (SPO-kn), 'broken' (BRO-kn), 'chosen' (CHO-zn).",
    explanationEs:
      "'Forgotten' = fər-GOT-n. Tres sílabas, pero la última apenas existe. El acento está en GOT, y el -en se derrite en un /n/ nasal: fər-GOT-n. Lo mismo para 'spoken' (SPO-kn), 'broken' (BRO-kn), 'chosen' (CHO-zn).",
  },
  {
    sentence: "The child-REN are play-ING in the garden.",
    errorWord: "child-REN",
    improved: "The children are playing in the garden.",
    sentenceEs: "Los niños están jugando en el jardín.",
    improvedEs: "Los niños están jugando en el jardín.",
    explanation:
      "'Children' = CHIL-drən. The stress is on CHIL, and -dren is a quick, light syllable. Spanish speakers often say child-REN with equal stress on both syllables. In English, unstressed syllables get compressed — they're quieter, shorter, and use the schwa vowel /ə/.",
    explanationEs:
      "'Children' = CHIL-drən. El acento está en CHIL, y -dren es una sílaba rápida y ligera. Los hispanohablantes frecuentemente dicen child-REN con acento igual en ambas sílabas. En inglés, las sílabas átonas se comprimen.",
  },
  {
    sentence: "The kitch-EN needs to be clean-ED before the guests arrive.",
    errorWord: "kitch-EN",
    improved: "The kitchen needs to be cleaned before the guests arrive.",
    sentenceEs: "La cocina necesita ser limpiada antes de que lleguen los invitados.",
    improvedEs: "La cocina necesita ser limpiada antes de que lleguen los invitados.",
    explanation:
      "'Kitchen' = KITCH-ən. The -en is a schwa, not a full vowel. Compare with 'cleaned' — the -ed ending is similarly reduced to /d/ after a voiced sound. Both -en and -ed endings get swallowed in natural speech. Giving them full pronunciation is the #1 rhythm tell.",
    explanationEs:
      "'Kitchen' = KITCH-ən. El -en es una schwa, no una vocal completa. Compara con 'cleaned' — la terminación -ed se reduce de manera similar a /d/ después de un sonido sonoro. Dar pronunciación completa a estos es la señal de ritmo #1.",
  },
];

// ─── Section 3: TH, R, and Vowels (MinimalPairDrill) ─────────────────────────

export const hardSoundPairs: MinimalPair[] = [
  {
    wordA: "think",
    wordB: "sink",
    distinction: "TH /θ/ (tongue between teeth) vs S /s/ (tongue behind teeth)",
    distinctionEs: "TH /θ/ (lengua entre los dientes) vs S /s/ (lengua detrás de los dientes)",
    exampleA: "I think we should leave early.",
    exampleAEs: "Creo que deberíamos salir temprano.",
    exampleB: "The ship will sink in the storm.",
    exampleBEs: "El barco se hundirá en la tormenta.",
    tip: "For TH /θ/, your tongue tip must poke out slightly between your upper and lower teeth. If your tongue stays behind your teeth, you're making an S sound. 'Think' with an S becomes 'sink' — completely different word. Practice in front of a mirror until you can see your tongue.",
    tipEs: "Para TH /θ/, la punta de tu lengua debe asomarse ligeramente entre tus dientes superiores e inferiores. Si tu lengua se queda detrás de los dientes, estás haciendo un sonido S. Practica frente a un espejo hasta que puedas ver tu lengua.",
  },
  {
    wordA: "this",
    wordB: "dis",
    distinction: "TH /ð/ (voiced, tongue between teeth) vs D /d/ (tongue on roof)",
    distinctionEs: "TH /ð/ (sonora, lengua entre dientes) vs D /d/ (lengua en el paladar)",
    exampleA: "Is this the right address?",
    exampleAEs: "¿Es esta la dirección correcta?",
    exampleB: "He dis'd the entire proposal.",
    exampleBEs: "Él despreció toda la propuesta.",
    tip: "There are TWO TH sounds: voiceless /θ/ (think, thing, bath) and voiced /ð/ (this, that, the, brother). The voiced one vibrates. Spanish speakers typically replace voiced TH with D — 'dis' instead of 'this.' Same tongue position as /θ/, but with vocal cord vibration.",
    tipEs: "Hay DOS sonidos TH: sordo /θ/ (think, thing, bath) y sonoro /ð/ (this, that, the, brother). El sonoro vibra. Los hispanohablantes típicamente reemplazan el TH sonoro con D — 'dis' en lugar de 'this.'",
  },
  {
    wordA: "right",
    wordB: "light",
    distinction: "R /ɹ/ (tongue curled back) vs L /l/ (tongue touches roof)",
    distinctionEs: "R /ɹ/ (lengua curvada hacia atrás) vs L /l/ (lengua toca el paladar)",
    exampleA: "Turn right at the corner.",
    exampleAEs: "Da vuelta a la derecha en la esquina.",
    exampleB: "Turn on the light, please.",
    exampleBEs: "Enciende la luz, por favor.",
    tip: "English R is NOT the same as Spanish R. For English R, your tongue curls BACKWARD — it never touches the roof of your mouth. For L, your tongue tip touches the ridge behind your upper teeth. Spanish R (trilled or tapped) is a completely different motion. This is the hardest sound for Spanish speakers to master.",
    tipEs: "La R del inglés NO es la misma que la R del español. Para la R del inglés, tu lengua se curva HACIA ATRÁS — nunca toca el paladar. Para la L, la punta de tu lengua toca la cresta detrás de tus dientes superiores. La R española (vibrante) es un movimiento completamente diferente.",
  },
  {
    wordA: "ship",
    wordB: "sheep",
    distinction: "Short I /ɪ/ vs Long EE /iː/",
    distinctionEs: "I corta /ɪ/ vs EE larga /iː/",
    exampleA: "The ship arrived at the port.",
    exampleAEs: "El barco llegó al puerto.",
    exampleB: "The farmer has fifty sheep.",
    exampleBEs: "El granjero tiene cincuenta ovejas.",
    tip: "Short /ɪ/ (ship, bit, sit) is quick and relaxed — your mouth barely opens. Long /iː/ (sheep, beat, seat) is tense and stretched — you smile slightly. Spanish only has one 'i' sound (close to /iː/), so Spanish speakers make both words sound like 'sheep.' The duration AND the mouth tension are both different.",
    tipEs: "La /ɪ/ corta (ship, bit, sit) es rápida y relajada — tu boca apenas se abre. La /iː/ larga (sheep, beat, seat) es tensa y estirada — sonríes ligeramente. El español solo tiene un sonido 'i' (cercano a /iː/), así que los hispanohablantes hacen que ambas palabras suenen como 'sheep.'",
  },
  {
    wordA: "full",
    wordB: "fool",
    distinction: "Short U /ʊ/ vs Long OO /uː/",
    distinctionEs: "U corta /ʊ/ vs OO larga /uː/",
    exampleA: "The glass is full.",
    exampleAEs: "El vaso está lleno.",
    exampleB: "Don't be a fool.",
    exampleBEs: "No seas un tonto.",
    tip: "Short /ʊ/ (full, pull, put, book) is quick and relaxed — your lips round slightly. Long /uː/ (fool, pool, boot, food) is tense with rounded, pushed-forward lips. Spanish 'u' is close to /uː/, so Spanish speakers make 'full' sound like 'fool.' Keep 'full' short and relaxed.",
    tipEs: "La /ʊ/ corta (full, pull, put, book) es rápida y relajada — tus labios se redondean ligeramente. La /uː/ larga (fool, pool, boot, food) es tensa con labios redondeados y empujados. La 'u' del español está cerca de /uː/, así que los hispanohablantes hacen que 'full' suene como 'fool.'",
  },
];
