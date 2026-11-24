// Shared shape for the "Conversation Briefings" vocabulary banks (EN + ES).
// Every explanatory string is a bilingual pair: [English, Mexican Professional Spanish (tú)].
// The English being taught — the term itself and the example sentence — is never translated.
// Strings may contain inline HTML (<b>, <em>, <span class='x'>✗</span>, <span class='ok'>✓</span>)
// and are rendered with set:html.

export type L = [en: string, es: string];

export type TermTag = "core" | "falsefriend" | "error" | "idiom" | "process" | "acronym";

export interface TermItem {
  /** The English term or phrase. Never translated. */
  q: string;
  /** Short parenthetical shown beside the term, e.g. ["(false friend)", "(falso amigo)"]. */
  hint?: L;
  /** The definition. */
  a: L;
  /** One English example sentence with the term wrapped in <em>. Never translated. */
  ex: string;
  /** Usage note (green box). */
  note?: L;
  /** Common-error warning (amber box). Adds the "Common error" badge. */
  trap?: L;
  tags: TermTag[];
}

export interface TermGroup {
  title: L;
  /** One or two sentences that frame the whole group. */
  rule: L;
  items: TermItem[];
}

export interface TopicBank {
  groups: TermGroup[];
  /** "If you remember nothing else" cells: [LABEL IN CAPS, one-sentence explanation]. */
  cheat: [L, L][];
}
