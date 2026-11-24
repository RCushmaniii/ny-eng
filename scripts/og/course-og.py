"""Generate the 1200x630 social-share images for the data-driven course pages.

Usage (PowerShell), with `npm run preview` running on port 4321:

    python -I scripts/og/course-og.py

Reads each page's <h1> from the local preview, so the image text always matches the page,
and writes public/images/og/course/<key>-<lang>.jpg. The key convention is the one
src/lib/courseOg.ts resolves:

    <masterclass id>                 e.g. persuasive-speaking
    conversation                     the Conversation Briefings hub
    conversation-<topic id>          e.g. conversation-workplace-conflict
    collocations                     the general collocations reference
    collocations-<role id>           e.g. collocations-finance

Design rule: everything that matters sits inside the centre 630x630 square, because
WhatsApp and some Facebook placements crop the 1.91:1 image to a square.

Re-run after adding a master class, a briefing or a job-role bank. Requires
`pip install playwright` and `playwright install chromium`.
"""

import base64
import pathlib
import re
import sys
import urllib.request

from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding="utf-8")
ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = ROOT / "public" / "images" / "og" / "course"
BASE = "http://localhost:4321"
LOGO = base64.b64encode(
    (ROOT / "public" / "images" / "logos" / "new-york-english-sq-og-transparent.png").read_bytes()
).decode()

EYEBROW = {
    "masterclass": ("Free Master Class", "Clase Magistral Gratuita"),
    "briefing": ("Free Conversation Briefing", "Guía de Conversación Gratuita"),
    "series": ("Free Master Class", "Clase Magistral Gratuita"),
    "collocations": ("Free Collocations Reference", "Guía Gratuita de Colocaciones"),
}


def fetch(path):
    with urllib.request.urlopen(BASE + path, timeout=30) as r:
        return r.read().decode("utf-8")


def h1(path):
    m = re.search(r"<h1[^>]*>(.*?)</h1>", fetch(path), re.S)
    text = re.sub(r"<[^>]+>", " ", m.group(1))
    for a, b in (("&amp;", "&"), ("&#39;", "'"), ("&quot;", '"'), ("&nbsp;", " ")):
        text = text.replace(a, b)
    return re.sub(r"\s+", " ", text).strip()


def links(hub, prefix):
    """Distinct child page paths linked from a hub page, in page order."""
    seen = []
    for href in re.findall(r'href="([^"#?]+)"', fetch(hub)):
        if href.startswith(prefix) and href != prefix and href.count("/") == prefix.count("/") + 1:
            if href not in seen:
                seen.append(href)
    return seen


def jobs():
    """(key, kind, en path, es path) for every image."""
    out = []
    for en, es in (
        ("/en/course/persuasive-speaking/", "/es/curso/hablar-para-persuadir/"),
        ("/en/course/productive-conflict/", "/es/curso/conflicto-productivo/"),
        ("/en/course/business-writing/", "/es/curso/escritura-profesional/"),
    ):
        out.append((en.strip("/").split("/")[-1], "masterclass", en, es))

    en_hub, es_hub = "/en/course/conversation/", "/es/curso/conversacion/"
    out.append(("conversation", "series", en_hub, es_hub))
    for en, es in zip(links(en_hub, en_hub), links(es_hub, es_hub)):
        out.append(("conversation-" + en.strip("/").split("/")[-1], "briefing", en, es))

    en_ref, es_ref = (
        "/en/course/verb-patterns/collocations/",
        "/es/curso/patrones-verbales/colocaciones/",
    )
    out.append(("collocations", "collocations", en_ref, es_ref))
    for en, es in zip(links(en_ref, en_ref), links(es_ref, es_ref)):
        out.append(("collocations-" + en.strip("/").split("/")[-1], "collocations", en, es))
    return out


def page_html(eyebrow, title):
    size = 62 if len(title) <= 28 else 54 if len(title) <= 44 else 46 if len(title) <= 60 else 40
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
*{{margin:0;box-sizing:border-box}}
body{{width:1200px;height:630px;display:flex;font-family:'Segoe UI',Arial,sans-serif;
  background:#12284c;overflow:hidden}}
.side{{flex:1;background:
  repeating-linear-gradient(135deg,rgba(255,255,255,.045) 0 2px,transparent 2px 26px),
  linear-gradient(160deg,#12284c,#0b1a33)}}
.card{{width:630px;height:630px;background:#fff;display:flex;flex-direction:column;
  align-items:center;justify-content:center;text-align:center;padding:36px 44px;
  border-left:10px solid #f59e0b;border-right:10px solid #f59e0b}}
img{{width:150px;height:150px;object-fit:contain;margin-bottom:10px}}
.eyebrow{{font-size:21px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;
  color:#b45309;margin-bottom:18px}}
h1{{font-size:{size}px;line-height:1.12;font-weight:800;color:#12284c;letter-spacing:-.01em;
  text-wrap:balance}}
.rule{{width:84px;height:5px;background:#f59e0b;border-radius:3px;margin:26px 0 18px}}
.site{{font-size:22px;font-weight:600;color:#475569;letter-spacing:.02em}}
</style></head><body>
<div class="side"></div>
<div class="card">
  <img src="data:image/png;base64,{LOGO}" alt="">
  <div class="eyebrow">{eyebrow}</div>
  <h1>{title}</h1>
  <div class="rule"></div>
  <div class="site">nyenglishteacher.com</div>
</div>
<div class="side"></div>
</body></html>"""


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    todo = jobs()
    overflowing = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1200, "height": 630})
        for key, kind, en, es in todo:
            for li, (lang, path) in enumerate((("en", en), ("es", es))):
                title = h1(path)
                page.set_content(page_html(EYEBROW[kind][li], title))
                overflow = page.evaluate(
                    "document.querySelector('.card').scrollHeight > 630 ||"
                    " document.querySelector('h1').scrollWidth > 542"
                )
                target = OUT / f"{key}-{lang}.jpg"
                page.screenshot(path=str(target), type="jpeg", quality=88)
                print(("OVERFLOW " if overflow else "ok       ") + f"{target.name}  {title}")
                if overflow:
                    overflowing.append(target.name)
        browser.close()
    print(f"{len(todo) * 2} images in {OUT}")
    if overflowing:
        sys.exit(f"Title does not fit the card in: {', '.join(overflowing)}. Shorten the h1 or lower the font size.")


if __name__ == "__main__":
    main()
