// The type-the-preposition drill. Markup shell lives in CollocationsDrill.astro.

import {
  getGroups,
  collocationsUi,
  fill,
  type CollocationsLang,
  type DrillItem,
} from "@data/collocations/index";
import { Progress } from "@data/collocations/progress";

const root = document.getElementById("colx-drill");
if (root) {
  const lang: CollocationsLang = root.dataset.lang === "es" ? "es" : "en";
  const ui = collocationsUi[lang];
  const t = ui.drill;
  const groups = getGroups(lang);

  type QueueItem = DrillItem & { group: string; gi: number };
  const ALL: QueueItem[] = groups.flatMap((g, gi) =>
    g.items.map((it) => ({ ...it, group: g.title, gi })),
  );

  const el = <T extends HTMLElement>(id: string) => document.getElementById(`colx-${id}`) as T;
  const scope = el<HTMLSelectElement>("scope");
  const lenSel = el<HTMLSelectElement>("len");
  const input = el<HTMLInputElement>("answer");
  const checkBtn = el<HTMLButtonElement>("check");

  // User-typed text is only ever inserted through this.
  const esc = (s: string) =>
    s.replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
    );

  const buildScopeOptions = () => {
    const validIds = new Set(ALL.map((i) => i.id));
    const weakNow = Progress.weakIds().filter((id) => validIds.has(id)).length;
    const opt = (value: string, label: string, selected = false) =>
      `<option value="${value}"${selected ? " selected" : ""}>${esc(label)}</option>`;
    scope.innerHTML =
      (weakNow ? opt("weak", fill(t.scopeWeak, { n: weakNow }), true) : "") +
      opt("all", fill(t.scopeAll, { n: ALL.length }), !weakNow) +
      opt("trap", fill(t.scopeTrap, { n: ALL.filter((i) => i.isTrap).length })) +
      opt("multi", fill(t.scopeMulti, { n: ALL.filter((i) => i.isMulti).length })) +
      groups
        .map((g, i) =>
          opt(`g${i}`, fill(t.scopeGroup, { i: i + 1, title: g.title, n: g.items.length })),
        )
        .join("");
  };
  buildScopeOptions();

  const NONE_WORDS = [
    "none",
    "no preposition",
    "nothing",
    "-",
    "--",
    "—",
    "–",
    "x",
    "na",
    "n/a",
    ...t.noneWords,
  ];
  const normalize = (s: string) => s.toLowerCase().trim().replace(/\s+/g, " ");
  const judge = (raw: string, key: string[]) => {
    const n = normalize(raw);
    if (!n) return { ok: false, matched: null as string | null };
    if (NONE_WORDS.includes(n)) return { ok: key.includes("none"), matched: "none" };
    const words = n
      .replace(/[^a-z ]/g, " ")
      .split(/\s+/)
      .filter(Boolean);
    const hit = words.find((w) => key.includes(w));
    return { ok: Boolean(hit), matched: hit || null };
  };
  const label = (k: string) => (k === "none" ? ui.noPrep : k);
  const shuffle = <T>(a: T[]) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  interface Miss {
    id: string;
    q: string;
    hint?: string;
    a: string;
    user: string | null;
  }
  let queue: QueueItem[] = [];
  let idx = 0;
  let okCount = 0;
  let streak = 0;
  let best = 0;
  let answered = false;
  let missed: Miss[] = [];

  const buildQueue = () => {
    const v = scope.value;
    let pool = ALL;
    if (v === "weak") {
      const w = new Set(Progress.weakIds());
      pool = ALL.filter((i) => w.has(i.id));
    } else if (v === "trap") pool = ALL.filter((i) => i.isTrap);
    else if (v === "multi") pool = ALL.filter((i) => i.isMulti);
    else if (v.startsWith("g")) pool = ALL.filter((i) => i.gi === Number(v.slice(1)));
    if (!pool.length) pool = ALL;
    pool = shuffle(pool.slice());
    const n = Number(lenSel.value);
    return n > 0 ? pool.slice(0, Math.min(n, pool.length)) : pool;
  };

  const render = () => {
    answered = false;
    const it = queue[idx];
    el("qnum").textContent = String(idx + 1);
    el("qok").textContent = String(okCount);
    el("qstreak").textContent = String(streak);
    el("qfill").style.width = (idx / queue.length) * 100 + "%";
    el("prompt").innerHTML = it.q.replace("______", '<span class="blank">&nbsp;</span>');
    el("phint").innerHTML =
      (it.hint ? it.hint + " · " : "") + `<span class="grp">${it.group}</span>`;
    el("verdict").innerHTML = "";
    input.value = "";
    input.disabled = false;
    input.focus();
    checkBtn.textContent = t.check;
  };

  const startDrill = (list: QueueItem[]) => {
    queue = list;
    idx = 0;
    okCount = 0;
    streak = 0;
    best = 0;
    missed = [];
    el("setup").hidden = true;
    el("result").hidden = true;
    el("quiz").hidden = false;
    el("qtot").textContent = String(queue.length);
    render();
  };

  const reveal = (userInput: string, forced: boolean) => {
    const it = queue[idx];
    const res = forced ? { ok: false, matched: null } : judge(userInput, it.key);
    answered = true;
    input.disabled = true;

    if (res.ok) {
      okCount++;
      streak++;
      best = Math.max(best, streak);
    } else {
      streak = 0;
      missed.push({ id: it.id, q: it.q, hint: it.hint, a: it.a, user: forced ? null : userInput });
    }
    // A revealed answer counts as "not known" — only a produced answer counts as correct.
    Progress.record(it.id, res.ok);

    const primary = it.key[0];
    const others = it.key.filter((k) => k !== res.matched);
    let extra = "";
    if (res.ok && res.matched !== primary) {
      extra = `<div class="also">${fill(t.acceptedBut, { p: label(primary) })}</div>`;
    } else if (res.ok && others.length) {
      extra = `<div class="also">${fill(t.alsoCorrect, { list: others.map(label).join(", ") })}</div>`;
    }
    const detail = it.trap || it.note;

    el("verdict").innerHTML = `<div class="verdict ${res.ok ? "v-ok" : "v-no"}">
        <span class="vt">${res.ok ? t.vOk : forced ? t.vShown : t.vNo}</span>
        <div><b>${it.a}</b></div>
        <div class="gap" lang="en">${it.ex}</div>
        ${extra}
        ${detail ? `<div class="gap">${detail}</div>` : ""}
      </div>`;

    el("qok").textContent = String(okCount);
    el("qstreak").textContent = String(streak);
    checkBtn.textContent = idx + 1 < queue.length ? t.next : t.results;
    checkBtn.focus();
  };

  const finish = () => {
    el("quiz").hidden = true;
    const pct = Math.round((okCount / queue.length) * 100);
    const verdict = t.verdicts[pct >= 90 ? 0 : pct >= 70 ? 1 : pct >= 50 ? 2 : 3];
    const result = el("result");
    result.hidden = false;
    result.innerHTML = `<p class="score">${okCount} / ${queue.length}</p>
      <p class="scoresub">${fill(t.scoreSub, { pct, best, verdict })}</p>
      <div class="btnrow">
        <button type="button" class="btn primary" id="colx-again">${t.again}</button>
        ${missed.length ? `<button type="button" class="btn" id="colx-retry">${fill(t.retry, { n: missed.length })}</button>` : ""}
        <button type="button" class="btn" id="colx-change">${t.change}</button>
      </div>
      ${
        missed.length
          ? `<div class="missed"><h3>${t.review}</h3>${missed
              .map(
                (m) => `<div class="mrow">
                  <div class="mq" lang="en">${m.q} ${m.hint ? `<span>${m.hint}</span>` : ""}</div>
                  <div class="ma">${m.a}</div>
                  ${m.user ? `<div class="mu">${t.youTyped} ${esc(m.user)}</div>` : ""}
                </div>`,
              )
              .join("")}</div>`
          : ""
      }`;

    el("again").addEventListener("click", () => {
      buildScopeOptions();
      startDrill(buildQueue());
    });
    el("change").addEventListener("click", () => {
      buildScopeOptions();
      result.hidden = true;
      el("setup").hidden = false;
    });
    document.getElementById("colx-retry")?.addEventListener("click", () => {
      const ids = new Set(missed.map((m) => m.id));
      startDrill(shuffle(ALL.filter((i) => ids.has(i.id))));
    });
    root.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const next = () => {
    idx++;
    if (idx >= queue.length) finish();
    else render();
  };

  el("start").addEventListener("click", () => startDrill(buildQueue()));
  checkBtn.addEventListener("click", () => (answered ? next() : reveal(input.value, false)));
  el("skip").addEventListener("click", () => {
    if (!answered) reveal("", true);
  });
  el("quit").addEventListener("click", () => {
    queue = queue.slice(0, idx + (answered ? 1 : 0));
    if (!queue.length) {
      el("quiz").hidden = true;
      el("setup").hidden = false;
    } else finish();
  });
  input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    if (!answered) reveal(input.value, false);
    else next();
  });
}
