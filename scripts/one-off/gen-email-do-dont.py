#!/usr/bin/env python3
"""
Generate the "Do / Don't" body graphic for
"How to Start and End an Email in English" (EN + ES).

Same house style and pipeline as gen-cornerstone-images.py: HTML -> PNG with
Playwright/Chromium at 1600x760 using the live site's webfonts (public/fonts),
then sharp -> webp. Palette from context-writing-system/docs/BRAND-KIT.md
(NY English Teacher: gold #C9A24B on navy #161B3D).

This is an INLINE body image, not a hero, so the hero crop rules do not apply:
inside `prose` it renders at its natural aspect ratio, full column width. The
binding constraint is the opposite one — on a phone the 1600px canvas shrinks
to ~340px, so type is set as large as the panels allow. The alt text in the
posts carries every phrase, so nothing in the image is image-only.

Every phrase on the card is lifted from the post itself (greeting table,
opening-line table, closing-line table, translated-habits table). If the post
changes one of them, change it here too.

Run from the repo root:
  python scripts/one-off/gen-email-do-dont.py

Writes:
  src/content/blog/en/images/email-dos-and-donts.webp
  src/content/blog/es/images/correo-que-hacer-y-que-evitar.webp

Requires: pip install playwright && playwright install chromium; sharp (repo dep).
"""

import html
import pathlib
import subprocess
import sys
import tempfile

from playwright.sync_api import sync_playwright

HERE = pathlib.Path(__file__).resolve().parent
REPO = HERE.parent.parent
OUT = pathlib.Path(tempfile.gettempdir()) / "ny-eng-email-do-dont"
OUT.mkdir(exist_ok=True)

FONT_DIR = (REPO / "public" / "fonts").as_uri()
W, H = 1600, 760

BG = "#161B3D"
PANEL = "#1E2452"
PANEL_MUTED = "#1A2047"
BORDER = "#2E3670"
GOLD = "#C9A24B"
HEAD = "#FFFFFF"
SUB = "#AEB4E0"
FOOT = "#8891C7"
RED = "#D9776B"

CARDS = {
    "en": {
        "out": "src/content/blog/en/images/email-dos-and-donts.webp",
        "eyebrow": "Business email",
        "title": "What to do — and what to avoid",
        "do_tag": "Do",
        "dont_tag": "Don't",
        "do": [
            ("Greet them by first name", "Hi Maria,"),
            ("State the reason in line one", "Attached is the Q3 report."),
            ("Close with the next step", "Could you confirm by Thursday?"),
        ],
        "dont": [
            ("Open like a formal letter", "Dear Sir,"),
            ("Warm up with filler", "I hope this email finds you well."),
            ("Sign off in translation", "I remain attentive."),
        ],
    },
    "es": {
        "out": "src/content/blog/es/images/correo-que-hacer-y-que-evitar.webp",
        "eyebrow": "Correos en inglés",
        "title": "Qué sí hacer y qué evitar",
        "do_tag": "Sí",
        "dont_tag": "Evita",
        "do": [
            ("Saluda por su nombre de pila", "Hi Maria,"),
            ("Di el motivo en la primera línea", "Attached is the Q3 report."),
            ("Cierra con el siguiente paso", "Could you confirm by Thursday?"),
        ],
        "dont": [
            ("Abrir como carta formal", "Dear Sir,"),
            ("Empezar con relleno", "I hope this email finds you well."),
            ("Despedirte con una traducción", "I remain attentive."),
        ],
    },
}

CSS = f"""
@font-face {{ font-family:'NotoSans'; src:url('{FONT_DIR}/noto-sans-v42-latin-regular.woff2') format('woff2'); font-weight:400; font-display:block; }}
@font-face {{ font-family:'NotoSans'; src:url('{FONT_DIR}/noto-sans-v42-latin-600.woff2') format('woff2'); font-weight:600; font-display:block; }}
@font-face {{ font-family:'NotoSans'; src:url('{FONT_DIR}/noto-sans-v42-latin-700.woff2') format('woff2'); font-weight:700; font-display:block; }}
@font-face {{ font-family:'NotoSans'; src:url('{FONT_DIR}/noto-sans-v42-latin-900.woff2') format('woff2'); font-weight:900; font-display:block; }}
@font-face {{ font-family:'BrunoAceSC'; src:url('{FONT_DIR}/bruno-ace-sc-v5-latin-regular.woff2') format('woff2'); font-weight:400; font-display:block; }}
* {{ margin:0; padding:0; box-sizing:border-box; }}
html, body {{ width:{W}px; height:{H}px; }}
body {{ font-family:'NotoSans', sans-serif; background:{BG}; color:{HEAD};
  -webkit-font-smoothing:antialiased; position:relative; overflow:hidden; }}
.glow {{ position:absolute; inset:auto -240px -320px auto; width:900px; height:900px;
  background:radial-gradient(circle, rgba(201,162,75,0.16) 0%, rgba(201,162,75,0) 62%); }}
.frame {{ position:absolute; inset:0; padding:56px 72px 0; display:flex; flex-direction:column; }}
.eyebrow {{ font-family:'BrunoAceSC', sans-serif; font-size:22px; letter-spacing:6px;
  color:{GOLD}; text-transform:uppercase; }}
h1 {{ font-size:58px; font-weight:900; letter-spacing:-1.5px; line-height:1.1; margin-top:14px; }}
.cols {{ display:grid; grid-template-columns:1fr 1fr; gap:32px; margin-top:34px; }}
.panel {{ border-radius:18px; padding:30px 36px 18px; }}
.do {{ background:{PANEL}; border:2px solid {GOLD}; box-shadow:0 0 0 6px rgba(201,162,75,0.09); }}
.dont {{ background:{PANEL_MUTED}; border:2px solid {BORDER}; }}
.tag {{ display:flex; align-items:center; gap:14px; font-family:'BrunoAceSC', sans-serif;
  font-size:26px; letter-spacing:5px; text-transform:uppercase; margin-bottom:10px; }}
.mark {{ width:44px; height:44px; border-radius:50%; display:flex; align-items:center;
  justify-content:center; font-family:'NotoSans', sans-serif; font-weight:900; font-size:26px;
  letter-spacing:0; }}
.do .tag {{ color:{GOLD}; }}
.do .mark {{ background:{GOLD}; color:{BG}; }}
.dont .tag {{ color:{RED}; }}
.dont .mark {{ background:transparent; border:3px solid {RED}; color:{RED}; }}
.item {{ padding:18px 0; border-top:1px solid {BORDER}; }}
.item:first-of-type {{ border-top:none; }}
.label {{ font-size:30px; font-weight:600; color:{SUB}; line-height:1.25; }}
.ex {{ font-size:36px; font-weight:700; line-height:1.25; margin-top:4px; }}
.do .ex {{ color:{HEAD}; }}
.dont .ex {{ color:#C3C7E8; }}
.foot {{ position:absolute; right:72px; bottom:22px; font-size:22px; color:{FOOT}; letter-spacing:1px; }}
"""


def items(rows):
    e = html.escape
    return "".join(
        f'<div class="item"><div class="label">{e(lab)}</div>'
        f'<div class="ex">&ldquo;{e(ex)}&rdquo;</div></div>'
        for lab, ex in rows
    )


def page(c):
    e = html.escape
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head>
<body><div class="glow"></div><div class="frame">
  <div class="eyebrow">{e(c['eyebrow'])}</div>
  <h1>{e(c['title'])}</h1>
  <div class="cols">
    <div class="panel do"><div class="tag"><span class="mark">&#10003;</span>{e(c['do_tag'])}</div>{items(c['do'])}</div>
    <div class="panel dont"><div class="tag"><span class="mark">&#10005;</span>{e(c['dont_tag'])}</div>{items(c['dont'])}</div>
  </div>
</div><div class="foot">nyenglishteacher.com</div></body></html>"""


def main():
    langs = sys.argv[1:] or list(CARDS)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        pg = browser.new_page(viewport={"width": W, "height": H})
        for lang in langs:
            c = CARDS[lang]
            src = OUT / f"email-do-dont-{lang}.html"
            src.write_text(page(c), encoding="utf-8")
            pg.goto(src.as_uri())
            pg.evaluate("document.fonts.ready")
            # Fail loudly if anything spills off the canvas — a clipped phrase
            # in a teaching graphic is worse than no graphic.
            overflow = pg.evaluate(
                "Math.max(...[...document.querySelectorAll('.panel')]"
                ".map(el => el.getBoundingClientRect().bottom))"
            )
            if overflow > H - 56:
                raise SystemExit(f"{lang}: panels end at {overflow:.0f}px, over the {H - 56}px limit")
            png = OUT / f"email-do-dont-{lang}.png"
            pg.screenshot(path=str(png))
            out = REPO / c["out"]
            subprocess.run(
                ["node", "-e",
                 "require('sharp')(process.argv[1]).webp({quality:86}).toFile(process.argv[2])"
                 ".then(i=>console.log('ok', process.argv[2], i.width+'x'+i.height, i.size+' bytes'))",
                 str(png), str(out)],
                check=True, cwd=REPO,
            )
        browser.close()


if __name__ == "__main__":
    main()
