// Browser-only progress store. Scores are earned in the drill and displayed on the
// reference page. Shared by the English and Spanish pages (item ids are language-neutral).
// Every storage access is wrapped: private windows and blocked site data must not break the page.

const KEY = "nyet-collocations-progress-v1";

interface Record_ {
  /** attempts */
  n: number;
  /** correct attempts */
  c: number;
  /** 1 = answered correctly most recently, 0 = missed most recently */
  last: 0 | 1 | null;
}

type Store = Record<string, Record_>;

function load(): Store {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "{}");
    return parsed && typeof parsed === "object" ? (parsed as Store) : {};
  } catch {
    return {};
  }
}

function persist(store: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* storage unavailable — progress simply does not persist */
  }
}

export type ItemStatus = "untested" | "solid" | "weak";

export const Progress = {
  record(id: string, correct: boolean) {
    const store = load();
    const r = store[id] || { n: 0, c: 0, last: null };
    r.n++;
    if (correct) r.c++;
    r.last = correct ? 1 : 0;
    store[id] = r;
    persist(store);
  },
  statuses(): Record<string, ItemStatus> {
    const store = load();
    const out: Record<string, ItemStatus> = {};
    Object.keys(store).forEach((id) => {
      const last = store[id]?.last;
      if (last === 1) out[id] = "solid";
      else if (last === 0) out[id] = "weak";
    });
    return out;
  },
  stats() {
    const store = load();
    let solid = 0;
    let weak = 0;
    let attempts = 0;
    Object.keys(store).forEach((id) => {
      attempts += store[id].n || 0;
      if (store[id].last === 1) solid++;
      else if (store[id].last === 0) weak++;
    });
    return { solid, weak, attempts };
  },
  weakIds(): string[] {
    const store = load();
    return Object.keys(store).filter((id) => store[id].last === 0);
  },
  /** Clears everything, or only the given item ids (one bank's worth). */
  reset(ids?: string[]) {
    if (!ids) return persist({});
    const store = load();
    ids.forEach((id) => delete store[id]);
    persist(store);
  },
};
