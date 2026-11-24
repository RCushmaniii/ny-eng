// Talking American Politics — joins the English source with its Spanish layer.
// The build fails if the two ever drift apart: a missing translation, an unknown key,
// or a note/trap present on one side only.

import { GROUPS_EN, CHEAT_EN } from "./american-politics.en";
import { GROUPS_ES, CHEAT_ES } from "./american-politics.es";
import type { L, TermItem, TopicBank } from "./types";

const fail = (msg: string): never => {
  throw new Error(`[conversation/american-politics] ${msg}`);
};

if (GROUPS_ES.length !== GROUPS_EN.length) fail("Spanish group count does not match English");
if (CHEAT_ES.length !== CHEAT_EN.length) fail("Spanish cheat count does not match English");

const pair = (
  en: string | undefined,
  es: string | undefined,
  what: string,
  q: string,
): L | undefined => {
  if (en === undefined && es === undefined) return undefined;
  if (en === undefined || es === undefined)
    return fail(`"${q}": ${what} exists in one language only`);
  return [en, es];
};

export const bank: TopicBank = {
  groups: GROUPS_EN.map((g, gi) => {
    const es = GROUPS_ES[gi];
    const known = new Set(g.items.map((it) => it.q));
    for (const k of Object.keys(es.items)) {
      if (!known.has(k)) fail(`Spanish key "${k}" matches no term in "${g.title}"`);
    }
    return {
      title: [g.title, es.title],
      rule: [g.rule, es.rule],
      items: g.items.map((it): TermItem => {
        const o = es.items[it.q] ?? fail(`No Spanish entry for "${it.q}"`);
        return {
          q: it.q,
          hint: pair(it.hint, o.hint, "hint", it.q),
          a: [it.a, o.a],
          ex: it.ex,
          note: pair(it.note, o.note, "note", it.q),
          trap: pair(it.trap, o.trap, "trap", it.q),
          tags: it.tags,
        };
      }),
    };
  }),
  cheat: CHEAT_EN.map(([label, text], i) => [
    [label, CHEAT_ES[i][0]],
    [text, CHEAT_ES[i][1]],
  ]),
};
