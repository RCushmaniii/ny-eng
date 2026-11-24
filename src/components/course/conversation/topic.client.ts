// Behavior for a Conversation Briefing page: reveal/hide, search, filters, and the
// ten-question check. The list itself is static HTML rendered by TopicReference.astro,
// and the check reads its questions from that markup, so no data is shipped twice.

const root = document.getElementById("conv-ref");
if (root) {
  const S = JSON.parse(root.dataset.strings || "{}") as {
    total: number;
    countAll: string;
    countSome: string;
    quiz: {
      question: string;
      of: string;
      correct: string;
      prompt: string;
      next: string;
      results: string;
      vOk: string;
      vNo: string;
      scoreSub: string;
      verdicts: string[];
      again: string;
      review: string;
    };
  };
  const fill = (tpl: string, v: Record<string, string | number>) =>
    tpl.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? ""));
  const byId = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
  const esc = (s: string) =>
    s.replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
    );

  const items = [...root.querySelectorAll<HTMLElement>(".item")];
  const groups = [...root.querySelectorAll<HTMLElement>(".group")];
  const chips = [...root.querySelectorAll<HTMLButtonElement>(".chip")];
  const search = byId<HTMLInputElement>("conv-search");
  const accBtn = byId<HTMLButtonElement>("conv-accordion");

  // Accordion preference is a per-viewer convenience; the page works without storage.
  const PREF_KEY = "nyet-conversation-prefs-v1";
  let accordionOn = true;
  try {
    const saved = JSON.parse(localStorage.getItem(PREF_KEY) || "{}");
    if (typeof saved.accordion === "boolean") accordionOn = saved.accordion;
  } catch {
    /* ignore */
  }
  const savePref = () => {
    try {
      localStorage.setItem(PREF_KEY, JSON.stringify({ accordion: accordionOn }));
    } catch {
      /* ignore */
    }
  };

  const setOpen = (el: HTMLElement, open: boolean) => {
    el.classList.toggle("open", open);
    el.querySelector(".head")?.setAttribute("aria-expanded", open ? "true" : "false");
  };

  let activeTag = "all";
  const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
  const applyFilter = () => {
    const q = normalize(search.value);
    let shown = 0;
    items.forEach((el) => {
      const okTag = activeTag === "all" || (el.dataset.tags || "").split(" ").includes(activeTag);
      const okText = !q || (el.dataset.text || "").includes(q);
      el.hidden = !(okTag && okText);
      if (!el.hidden) shown++;
    });
    groups.forEach((sec) => {
      sec.hidden = ![...sec.querySelectorAll<HTMLElement>(".item")].some((el) => !el.hidden);
    });
    byId("conv-empty").hidden = shown > 0;
    byId("conv-count").textContent =
      shown === S.total
        ? fill(S.countAll, { total: S.total })
        : fill(S.countSome, { shown, total: S.total });
  };
  const setTag = (tag: string) => {
    activeTag = tag;
    chips.forEach((c) => c.setAttribute("aria-pressed", c.dataset.tag === tag ? "true" : "false"));
    applyFilter();
  };

  items.forEach((el) => {
    el.querySelector(".head")?.addEventListener("click", () => {
      const willOpen = !el.classList.contains("open");
      if (willOpen && accordionOn) {
        items.forEach((other) => {
          if (other !== el && other.classList.contains("open")) setOpen(other, false);
        });
      }
      setOpen(el, willOpen);
      if (willOpen && accordionOn) {
        const top = el.getBoundingClientRect().top;
        if (top < 96 || top > window.innerHeight - 120) {
          el.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      }
    });
  });

  const syncAcc = () => accBtn.setAttribute("aria-pressed", accordionOn ? "true" : "false");
  syncAcc();
  accBtn.addEventListener("click", () => {
    accordionOn = !accordionOn;
    syncAcc();
    savePref();
    if (accordionOn) {
      let first = true;
      items.forEach((el) => {
        if (!el.classList.contains("open")) return;
        if (first) first = false;
        else setOpen(el, false);
      });
    }
  });
  byId("conv-reveal").addEventListener("click", () => {
    accordionOn = false;
    syncAcc();
    savePref();
    items.forEach((el) => setOpen(el, true));
  });
  byId("conv-hide").addEventListener("click", () => items.forEach((el) => setOpen(el, false)));

  byId("conv-chips").addEventListener("click", (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>(".chip");
    if (b?.dataset.tag) setTag(b.dataset.tag);
  });
  search.addEventListener("input", applyFilter);

  // Group index: a filter or search may be hiding the target, so clear it before jumping.
  byId("conv-index").addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    const sec = root.querySelector<HTMLElement>(href);
    if (!sec) return;
    e.preventDefault();
    if (sec.hidden) {
      search.value = "";
      setTag("all");
    }
    sec.scrollIntoView({ block: "start", behavior: "smooth" });
    try {
      history.replaceState(null, "", href);
    } catch {
      /* ignore */
    }
  });

  /* ---------------- Ten-question check ---------------- */

  interface Card {
    id: string;
    group: string;
    term: string;
    defHtml: string;
  }
  const bank: Card[] = items.map((el) => ({
    id: el.dataset.id || "",
    group: el.dataset.group || "",
    term: el.querySelector(".term")?.textContent?.trim() || "",
    defHtml: el.querySelector(".ans")?.innerHTML || "",
  }));
  const shuffle = <T>(a: T[]) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const card = byId("conv-quiz-card");
  const ROUND = 10;
  let queue: Card[] = [];
  let idx = 0;
  let okCount = 0;
  let missed: Card[] = [];

  const optionsFor = (c: Card) => {
    // Distractors come from the same group first, so the choice is a real one.
    const same = shuffle(bank.filter((b) => b.group === c.group && b.id !== c.id));
    const rest = shuffle(bank.filter((b) => b.group !== c.group));
    return shuffle([c, ...[...same, ...rest].slice(0, 3)]);
  };

  const finish = () => {
    const pct = Math.round((okCount / queue.length) * 100);
    const verdict = S.quiz.verdicts[pct >= 90 ? 0 : pct >= 70 ? 1 : pct >= 50 ? 2 : 3];
    card.innerHTML = `<p class="score">${okCount} / ${queue.length}</p>
      <p class="scoresub">${fill(S.quiz.scoreSub, { pct, verdict })}</p>
      <div class="btnrow"><button type="button" class="btn primary" id="conv-quiz-again">${S.quiz.again}</button></div>
      ${
        missed.length
          ? `<div class="missed"><h3>${S.quiz.review}</h3>${missed
              .map(
                (m) => `<div class="mrow"><div class="mq" lang="en">${esc(m.term)}</div>
                  <div class="ma">${m.defHtml}</div></div>`,
              )
              .join("")}</div>`
          : ""
      }`;
    byId("conv-quiz-again").addEventListener("click", () => start());
  };

  const render = () => {
    const c = queue[idx];
    const opts = optionsFor(c);
    card.innerHTML = `<div class="meta">
        <span>${S.quiz.question} <b>${idx + 1}</b> ${S.quiz.of} <b>${queue.length}</b></span>
        <span>${S.quiz.correct} <b id="conv-quiz-ok">${okCount}</b></span>
      </div>
      <div class="bar"><i style="width:${(idx / queue.length) * 100}%"></i></div>
      <p class="qlabel">${S.quiz.prompt}</p>
      <p class="qdef">${c.defHtml}</p>
      <div class="opts">${opts
        .map(
          (o) =>
            `<button type="button" class="opt" lang="en" data-id="${esc(o.id)}">${esc(o.term)}</button>`,
        )
        .join("")}</div>
      <div id="conv-quiz-verdict" aria-live="polite"></div>
      <div class="btnrow" style="margin-top:16px" hidden id="conv-quiz-nextrow">
        <button type="button" class="btn primary" id="conv-quiz-next">${
          idx + 1 < queue.length ? S.quiz.next : S.quiz.results
        }</button>
      </div>`;
    const buttons = [...card.querySelectorAll<HTMLButtonElement>(".opt")];
    buttons.forEach((b) =>
      b.addEventListener("click", () => {
        const ok = b.dataset.id === c.id;
        buttons.forEach((x) => {
          x.disabled = true;
          if (x.dataset.id === c.id) x.classList.add("right");
        });
        if (ok) okCount++;
        else {
          b.classList.add("wrong");
          missed.push(c);
        }
        byId("conv-quiz-ok").textContent = String(okCount);
        byId("conv-quiz-verdict").innerHTML =
          `<div class="verdict ${ok ? "v-ok" : "v-no"}"><span class="vt">${ok ? S.quiz.vOk : S.quiz.vNo}</span>
            <div><b lang="en">${esc(c.term)}</b></div></div>`;
        byId("conv-quiz-nextrow").hidden = false;
        const next = byId<HTMLButtonElement>("conv-quiz-next");
        next.focus();
        next.addEventListener("click", () => {
          idx++;
          if (idx >= queue.length) finish();
          else render();
        });
      }),
    );
  };

  const start = () => {
    queue = shuffle(bank.slice()).slice(0, Math.min(ROUND, bank.length));
    idx = 0;
    okCount = 0;
    missed = [];
    render();
  };
  if (bank.length >= 4) byId("conv-quiz-start").addEventListener("click", start);
  else byId("conv-quiz").hidden = true;

  applyFilter();
}
