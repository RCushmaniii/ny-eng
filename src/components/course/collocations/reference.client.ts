// Behavior for the collocations reference page: reveal/hide, search, filters, drill progress.
// The list itself is static HTML rendered by CollocationsReference.astro.

import { Progress } from "@data/collocations/progress";

const root = document.getElementById("colx-ref");
if (root) {
  const S = JSON.parse(root.dataset.strings || "{}") as {
    total: number;
    countNone: string;
    countSolid: string;
    countWeak: string;
    countOf: string;
    resetConfirm: string;
  };
  const fill = (tpl: string, v: Record<string, string | number>) =>
    tpl.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? ""));
  const byId = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

  const items = [...root.querySelectorAll<HTMLElement>(".item")];
  const groups = [...root.querySelectorAll<HTMLElement>(".group")];
  const chips = [...root.querySelectorAll<HTMLButtonElement>(".chip")];
  const search = byId<HTMLInputElement>("colx-search");
  const accBtn = byId<HTMLButtonElement>("colx-accordion");

  // Accordion preference is a per-viewer convenience; the page works without storage.
  const PREF_KEY = "nyet-collocations-prefs-v1";
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

  const showProgress = () => {
    // Count only this page's expressions: the store also holds the other banks' results.
    const statuses = Progress.statuses();
    const st = { solid: 0, weak: 0, attempts: 0 };
    items.forEach((el) => {
      const s = statuses[el.dataset.id || ""];
      if (s === "solid") st.solid++;
      else if (s === "weak") st.weak++;
      if (s) st.attempts++;
    });
    const count = byId("colx-count");
    const bar = byId("colx-fill");
    if (!st.attempts) {
      count.textContent = fill(S.countNone, { total: S.total });
      bar.style.width = "0%";
    } else {
      count.innerHTML =
        fill(S.countSolid, { solid: st.solid }) +
        (st.weak ? fill(S.countWeak, { weak: st.weak }) : "") +
        fill(S.countOf, { total: S.total });
      bar.style.width = Math.min(100, (st.solid / S.total) * 100) + "%";
    }
    items.forEach((el) => {
      const s = statuses[el.dataset.id || ""] || "untested";
      el.classList.toggle("solid", s === "solid");
      el.classList.toggle("weak", s === "weak");
      el.dataset.status = s;
    });
  };

  let activeTag = "all";
  const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
  const applyFilter = () => {
    const q = normalize(search.value);
    items.forEach((el) => {
      const okTag =
        activeTag === "all"
          ? true
          : activeTag === "weak"
            ? el.dataset.status === "weak"
            : (el.dataset.tags || "").split(" ").includes(activeTag);
      const okText = !q || (el.dataset.text || "").includes(q);
      el.hidden = !(okTag && okText);
    });
    let anyVisible = false;
    groups.forEach((sec) => {
      const any = [...sec.querySelectorAll<HTMLElement>(".item")].some((el) => !el.hidden);
      sec.hidden = !any;
      if (any) anyVisible = true;
    });
    byId("colx-empty").hidden = anyVisible;
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

  byId("colx-reveal").addEventListener("click", () => {
    accordionOn = false;
    syncAcc();
    savePref();
    items.forEach((el) => setOpen(el, true));
  });
  byId("colx-hide").addEventListener("click", () => items.forEach((el) => setOpen(el, false)));
  byId("colx-reset").addEventListener("click", () => {
    const statuses = Progress.statuses();
    const ids = items.map((el) => el.dataset.id || "").filter((id) => statuses[id]);
    if (!ids.length) return;
    if (!window.confirm(S.resetConfirm)) return;
    Progress.reset(ids);
    showProgress();
    applyFilter();
  });

  byId("colx-chips").addEventListener("click", (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>(".chip");
    if (b?.dataset.tag) setTag(b.dataset.tag);
  });
  search.addEventListener("input", applyFilter);

  // Group index: a filter or search may be hiding the target, so clear it before jumping.
  byId("colx-index").addEventListener("click", (e) => {
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

  showProgress();
  // Returning from the drill via the back button restores this page from cache.
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
      showProgress();
      applyFilter();
    }
  });
}
