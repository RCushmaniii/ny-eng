// Job-role collocation banks: the same "type the preposition" format as the general bank,
// with every example taken from one profession's working day.
// Explanatory strings are bilingual pairs: [English, Mexican Professional Spanish (tú)].
// Prompts and example sentences are the English being taught and are never translated.

export type L = [en: string, es: string];

export interface RoleItem {
  /**
   * The prompt, with exactly one blank written as six underscores: "Ship ______".
   * Words may follow the blank: "Be ______ call".
   */
  q: string;
  /**
   * Accepted answers, most common first, lowercase. May be more than one word ("out of").
   * Use "none" when the verb takes no preposition.
   */
  k: string[];
  /** Short parenthetical that disambiguates the prompt: ["(a destination)", "(un destino)"]. */
  hint?: L;
  /** One English sentence from the job, with the full collocation wrapped in <em>. */
  ex: string;
  /** Usage note (green box). */
  note?: L;
  /** Common-error warning (amber box). Adds the "Common error" badge. */
  trap?: L;
}

export interface RoleGroup {
  title: L;
  /** One or two sentences giving the logic behind the group's prepositions. */
  rule: L;
  items: RoleItem[];
}
