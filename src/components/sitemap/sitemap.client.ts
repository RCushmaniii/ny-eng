// Interactive site map: collapse/expand branches, search, expand-all / collapse-all.
// The markup renders fully expanded; this script sets the collapsed starting state.

const root = document.getElementById("site-map");

if (root) {
  const total = Number(root.dataset.total ?? 0);
  const pagesText = root.dataset.pages ?? "{n}";
  const foundText = root.dataset.found ?? "{n} / {total}";
  const tools = root.querySelector<HTMLElement>(".smap-tools");
  const search = root.querySelector<HTMLInputElement>("#smap-search");
  const status = root.querySelector<HTMLElement>("#smap-status");
  const empty = root.querySelector<HTMLElement>("#smap-empty");
  const branches = Array.from(root.querySelectorAll<HTMLButtonElement>("button.smap-branch"));
  const nodes = Array.from(root.querySelectorAll<HTMLLIElement>("li.smap-node:not(.smap-d0)"));

  const plain = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  const kidsOf = (btn: HTMLButtonElement) =>
    document.getElementById(btn.getAttribute("aria-controls") ?? "");

  const setOpen = (btn: HTMLButtonElement, open: boolean) => {
    btn.setAttribute("aria-expanded", String(open));
    const kids = kidsOf(btn);
    if (kids) kids.hidden = !open;
  };

  const setAll = (open: boolean) => branches.forEach((b) => setOpen(b, open));

  /** Starting state: the six main branches visible, the first one opened one level. */
  const reset = () => {
    setAll(false);
    const first = branches.find((b) => b.closest("li")?.classList.contains("smap-d1"));
    if (first) setOpen(first, true);
  };

  const showStatus = (shown: number | null) => {
    if (!status) return;
    status.textContent =
      shown === null
        ? pagesText.replace("{n}", String(total))
        : foundText.replace("{n}", String(shown)).replace("{total}", String(total));
  };

  const filter = (raw: string) => {
    const q = plain(raw.trim());
    if (!q) {
      nodes.forEach((n) => (n.hidden = false));
      if (empty) empty.hidden = true;
      reset();
      showStatus(null);
      return;
    }
    let shown = 0;
    // Deepest first, so a branch can ask whether any child survived.
    const visit = (li: HTMLLIElement, inherited: boolean): boolean => {
      const self = plain(li.dataset.label ?? "").includes(q);
      const keepAll = inherited || self;
      const children = Array.from(
        li.querySelectorAll<HTMLLIElement>(":scope > .smap-kids > li.smap-node"),
      );
      if (!children.length) {
        li.hidden = !keepAll;
        if (keepAll) shown += 1;
        return keepAll;
      }
      let any = false;
      for (const child of children) any = visit(child, keepAll) || any;
      li.hidden = !any;
      const btn = li.querySelector<HTMLButtonElement>(":scope > button.smap-branch");
      if (btn) setOpen(btn, any);
      return any;
    };
    root
      .querySelectorAll<HTMLLIElement>(".smap-d0 > .smap-kids > li.smap-node")
      .forEach((li) => visit(li, false));
    if (empty) empty.hidden = shown > 0;
    showStatus(shown);
  };

  branches.forEach((btn) =>
    btn.addEventListener("click", () => setOpen(btn, btn.getAttribute("aria-expanded") !== "true")),
  );
  root.querySelector("#smap-expand")?.addEventListener("click", () => setAll(true));
  root.querySelector("#smap-collapse")?.addEventListener("click", () => {
    if (search) search.value = "";
    nodes.forEach((n) => (n.hidden = false));
    if (empty) empty.hidden = true;
    setAll(false);
    showStatus(null);
  });
  search?.addEventListener("input", () => filter(search.value));

  root.classList.add("smap-js");
  if (tools) tools.hidden = false;
  reset();
}
