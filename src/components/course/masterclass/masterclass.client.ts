// Behavior for the data-driven master classes: scenario feedback, speaking timers,
// and lesson completion. Markup comes from LessonBlocks.astro and the page shells.

const STORE_KEY = "nyet-masterclass-progress-v1";
type Store = Record<string, string[]>;

const loadStore = (): Store => {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? (parsed as Store) : {};
  } catch {
    return {};
  }
};
const saveStore = (store: Store) => {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch {
    /* storage unavailable — completion simply does not persist */
  }
};

/* ---------- Scenario questions: pick one, then every option explains itself ---------- */
document.querySelectorAll<HTMLElement>("[data-mc-choice]").forEach((box) => {
  const opts = [...box.querySelectorAll<HTMLElement>(".mc-opt")];
  opts.forEach((opt) => {
    const btn = opt.querySelector<HTMLButtonElement>(".mc-opt-btn");
    const why = opt.querySelector<HTMLElement>(".mc-opt-why");
    btn?.addEventListener("click", () => {
      opt.classList.add("picked");
      if (why) why.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      // Once the best answer is found, show the reasoning behind the others too.
      if (opt.dataset.ok === "1") {
        opts.forEach((o) => {
          const w = o.querySelector<HTMLElement>(".mc-opt-why");
          if (w) w.hidden = false;
          o.querySelector(".mc-opt-btn")?.setAttribute("aria-expanded", "true");
        });
      }
    });
  });
});

/* ---------- Speaking timer: think, then speak ---------- */
document.querySelectorAll<HTMLElement>("[data-mc-speak]").forEach((box) => {
  const start = box.querySelector<HTMLButtonElement>("[data-mc-start]");
  const phase = box.querySelector<HTMLElement>("[data-mc-phase]");
  const count = box.querySelector<HTMLElement>("[data-mc-count]");
  const bar = box.querySelector<HTMLElement>("[data-mc-bar]");
  if (!start || !phase || !count || !bar) return;

  const think = Number(box.dataset.think) || 0;
  const speak = Number(box.dataset.speak) || 0;
  const label = start.dataset;
  let timer: number | undefined;

  const run = (seconds: number, text: string, done: () => void) => {
    const total = seconds * 1000;
    const began = Date.now();
    phase.textContent = text;
    const tick = () => {
      const left = Math.max(0, total - (Date.now() - began));
      count.textContent = String(Math.ceil(left / 1000));
      bar.style.width = `${100 - (left / total) * 100}%`;
      if (left <= 0) {
        window.clearInterval(timer);
        done();
      }
    };
    tick();
    timer = window.setInterval(tick, 200);
  };

  start.addEventListener("click", () => {
    window.clearInterval(timer);
    start.textContent = label.lRestart || "";
    const speakPhase = () =>
      run(speak, label.lSpeak || "", () => {
        phase.textContent = label.lUp || "";
        count.textContent = "";
      });
    if (think > 0) run(think, label.lThink || "", speakPhase);
    else speakPhase();
  });
});

/* ---------- Lesson completion ---------- */
const doneBtn = document.querySelector<HTMLButtonElement>("[data-mc-done]");
if (doneBtn) {
  const course = doneBtn.dataset.course || "";
  const lesson = doneBtn.dataset.lesson || "";
  const sync = () => {
    const isDone = (loadStore()[course] || []).includes(lesson);
    doneBtn.setAttribute("aria-pressed", isDone ? "true" : "false");
    doneBtn.textContent = (isDone ? doneBtn.dataset.lDone : doneBtn.dataset.lMark) || "";
  };
  doneBtn.addEventListener("click", () => {
    const store = loadStore();
    const list = new Set(store[course] || []);
    if (list.has(lesson)) list.delete(lesson);
    else list.add(lesson);
    store[course] = [...list];
    saveStore(store);
    sync();
  });
  sync();
}

/* ---------- Course page: show what is done and where to resume ---------- */
const hub = document.querySelector<HTMLElement>("[data-mc-hub]");
if (hub) {
  const paint = () => {
    const done = new Set(loadStore()[hub.dataset.mcHub || ""] || []);
    const rows = [...hub.querySelectorAll<HTMLElement>("[data-mc-lesson]")];
    let next: HTMLElement | undefined;
    rows.forEach((row) => {
      const isDone = done.has(row.dataset.mcLesson || "");
      row.classList.toggle("is-done", isDone);
      if (!isDone && !next) next = row;
    });
    const status = hub.querySelector<HTMLElement>("[data-mc-status]");
    if (status && done.size) {
      status.hidden = false;
      status.textContent = (status.dataset.tpl || "")
        .replace("{done}", String(rows.filter((r) => r.classList.contains("is-done")).length))
        .replace("{total}", String(rows.length));
    }
    const cta = hub.querySelector<HTMLAnchorElement>("[data-mc-cta]");
    if (cta && done.size && next) {
      cta.href = next.getAttribute("href") || cta.href;
      const text = cta.querySelector("[data-mc-cta-text]");
      if (text) text.textContent = cta.dataset.lResume || "";
    }
  };
  paint();
  // Coming back from a lesson with the back button restores this page from cache.
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) paint();
  });
}
