#!/usr/bin/env python3
"""
Generate the four cornerstone-article images for
"Want to Improve Your English? You Have to Use It." (EN + ES).

Renders HTML -> PNG with Playwright/Chromium at 1600x900, using the live site's
own webfonts (public/fonts) so the artwork matches nyenglishteacher.com.

Palette is read from context-writing-system/docs/BRAND-KIT.md (NY English Teacher:
gold #C9A24B on navy #161B3D). Never type these from memory.

Two-step, because Chromium only screenshots png/jpeg. PNGs land in
%TEMP%/ny-eng-cornerstone-images; only the .webp files are committed.

  1. python scripts/one-off/gen-cornerstone-images.py          # both languages
     python scripts/one-off/gen-cornerstone-images.py en       # one language

  2. node -e "const s=require('sharp');s('<temp>/<name>-en.png').webp({quality:86})
     .toFile('src/content/blog/en/images/<name>.webp')"

Destination names (EN -> src/content/blog/en/images/, ES -> .../es/images/):

  improve-your-english-use-it-en      -> improve-your-english-use-it.webp
  collect-patterns-not-words-en       -> collect-patterns-not-words.webp
  translating-to-automatic-english-en -> translating-to-automatic-english.webp
  weekly-english-practice-formula-en  -> weekly-english-practice-formula.webp
  improve-your-english-use-it-es      -> como-mejorar-tu-ingles.webp
  collect-patterns-not-words-es       -> colecciona-patrones-no-palabras.webp
  translating-to-automatic-english-es -> de-traducir-a-ingles-automatico.webp
  weekly-english-practice-formula-es  -> formula-semanal-practica-ingles.webp

Requires: pip install playwright && playwright install chromium
"""

import pathlib
import sys
import tempfile

from playwright.sync_api import sync_playwright

HERE = pathlib.Path(__file__).resolve().parent
REPO = HERE.parent.parent

# Intermediates land outside the repo — only the final .webp files are committed.
OUT = pathlib.Path(tempfile.gettempdir()) / "ny-eng-cornerstone-images"
OUT.mkdir(exist_ok=True)

FONT_DIR = (REPO / "public" / "fonts").as_uri()

# Inline body images render at their natural aspect ratio inside `prose`, so they
# can use the whole frame. The HERO cannot, and the reason is worth writing down.
#
# src/pages/{en,es}/blog/[slug].astro renders the hero twice-cropped:
#   1. the Astro <Image> hardcodes width={1200} height={675}, so ANY source is
#      re-encoded to 16:9 before it reaches the browser — a 4:3 hero loses its top
#      and bottom here, which is why authoring taller does not help;
#   2. the browser then applies `object-cover` into a fixed box: 904x675 desktop
#      (container-small 1000px minus 48px padding), 704x450 at md, ~327x300 mobile.
#
# No box is ever taller in ratio than 16:9, so step 2 only ever crops HORIZONTALLY:
#   desktop 12.3% off each side · md 6.0% · mobile 19.3%
#
# So: author the hero at 16:9 and keep every element inside a centred column narrow
# enough to survive the worst case. Mobile leaves a 980px centre band of the 1600px
# canvas; HERO_COL is set under that with room to spare.
SIZE_WIDE = (1600, 900)
HERO_COL = 920  # px — the crop-safe centre column for hero content

W, H = SIZE_WIDE

BG = "#161B3D"
PANEL = "#1E2452"
PANEL_MUTED = "#1A2047"
BORDER = "#2E3670"
GOLD = "#C9A24B"
HEAD = "#FFFFFF"
SUB = "#AEB4E0"
FOOT = "#8891C7"

BASE_CSS = f"""
@font-face {{
  font-family: 'NotoSans';
  src: url('{FONT_DIR}/noto-sans-v42-latin-regular.woff2') format('woff2');
  font-weight: 400; font-display: block;
}}
@font-face {{
  font-family: 'NotoSans';
  src: url('{FONT_DIR}/noto-sans-v42-latin-600.woff2') format('woff2');
  font-weight: 600; font-display: block;
}}
@font-face {{
  font-family: 'NotoSans';
  src: url('{FONT_DIR}/noto-sans-v42-latin-700.woff2') format('woff2');
  font-weight: 700; font-display: block;
}}
@font-face {{
  font-family: 'NotoSans';
  src: url('{FONT_DIR}/noto-sans-v42-latin-900.woff2') format('woff2');
  font-weight: 900; font-display: block;
}}
@font-face {{
  font-family: 'BrunoAceSC';
  src: url('{FONT_DIR}/bruno-ace-sc-v5-latin-regular.woff2') format('woff2');
  font-weight: 400; font-display: block;
}}
* {{ margin:0; padding:0; box-sizing:border-box; }}
body {{
  font-family: 'NotoSans', sans-serif;
  background: {BG};
  color: {HEAD};
  -webkit-font-smoothing: antialiased;
  position: relative;
  overflow: hidden;
}}
.glow {{
  position:absolute; inset:auto -240px -320px auto; width:900px; height:900px;
  background: radial-gradient(circle, rgba(201,162,75,0.16) 0%, rgba(201,162,75,0) 62%);
  pointer-events:none;
}}
.frame {{ position:absolute; inset:0; padding:72px 84px; display:flex; flex-direction:column; }}
.eyebrow {{
  font-family:'BrunoAceSC', sans-serif; font-size:19px; letter-spacing:6px;
  color:{GOLD}; text-transform:uppercase;
}}
.foot {{
  position:absolute; left:84px; right:84px; bottom:44px;
  display:flex; justify-content:space-between; align-items:center;
  font-size:20px; color:{FOOT}; letter-spacing:1px;
}}
.rule {{ width:110px; height:4px; background:{GOLD}; border-radius:2px; }}
.panel {{
  background:{PANEL}; border:2px solid {BORDER}; border-radius:18px;
}}
.panel-gold {{
  background:{PANEL}; border:2px solid {GOLD}; border-radius:18px;
  box-shadow: 0 0 0 6px rgba(201,162,75,0.09);
}}
.tag {{
  font-family:'BrunoAceSC', sans-serif; letter-spacing:4px; text-transform:uppercase;
  font-size:16px;
}}
.gold {{ color:{GOLD}; }}
.sub  {{ color:{SUB}; }}
"""


def page_html(body: str, extra_css: str = "", size=SIZE_WIDE) -> str:
    w, h = size
    size_css = f"html, body {{ width:{w}px; height:{h}px; }}"
    return f"""<!doctype html><html><head><meta charset="utf-8">
<style>{BASE_CSS}{size_css}{extra_css}</style></head>
<body><div class="glow"></div>{body}</body></html>"""


# --------------------------------------------------------------------------
# 1. HERO — input stack vs. the one thing that makes English automatic
# --------------------------------------------------------------------------
HERO_CSS = f"""
/* Everything lives in a {HERO_COL}px centred column. The navy outside it is
   deliberate bleed — that is the band the template's object-cover throws away
   (19.3% per side at the worst breakpoint). Nothing meaningful goes there. */
.hero-frame {{
  position:absolute; inset:0;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  text-align:center;
}}
.hero-col {{ width:{HERO_COL}px; display:flex; flex-direction:column; align-items:center; }}
.hero-col h1 {{ font-size:86px; line-height:1.0; font-weight:900; letter-spacing:-2.5px;
                margin-top:22px; }}
.hero-col .lede {{ font-size:26px; line-height:1.5; color:#AEB4E0; margin-top:22px; }}
.stackwrap {{ width:100%; margin-top:52px; display:flex; flex-direction:column;
              align-items:center; gap:14px; }}
.chips {{ display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; width:100%; }}
.chip {{
  background:#1A2047; border:2px solid #2E3670; border-radius:13px;
  padding:15px 8px; font-size:21px; color:#AEB4E0; font-weight:600; text-align:center;
}}
.arrow {{ color:#C9A24B; font-size:32px; line-height:1; }}
.speak {{ width:100%; padding:22px 28px 26px; }}
.speak .label {{ display:flex; justify-content:space-between; align-items:center; }}
.speak .label b {{ font-size:28px; font-weight:700; color:#FFFFFF; letter-spacing:0.5px; }}
.wave {{ display:flex; align-items:flex-end; gap:7px; height:64px; margin-top:18px; }}
.wave i {{ flex:1; background:#C9A24B; border-radius:4px; display:block; }}
.hero-foot {{ width:100%; margin-top:34px;
              display:flex; justify-content:space-between; align-items:center;
              font-size:19px; color:#8891C7; letter-spacing:1px; }}
"""

WAVE = [22, 44, 66, 38, 74, 52, 30, 62, 46, 70, 34, 56, 26, 48, 68, 40, 24, 58, 36, 20]


def hero(lang):
    t = {
        "en": dict(
            eyebrow="How to improve your English",
            h1="You have to use it.",
            lede="Input builds knowledge.<br>Output is what turns it into fluency.",
            input_label="Input",
            chips=["Reading", "Listening", "Watching", "Apps"],
            speak="Speaking",
            speak_note="The one that makes it automatic",
            foot_left="Robert Cushman · Executive English coach",
        ),
        "es": dict(
            eyebrow="Cómo mejorar tu inglés",
            h1="Tienes que usarlo.",
            lede="Leer y escuchar te dan conocimiento.<br>Hablar es lo que da fluidez.",
            input_label="Lo que recibes",
            chips=["Leer", "Escuchar", "Ver videos", "Apps"],
            speak="Hablar",
            speak_note="Lo que lo vuelve automático",
            foot_left="Robert Cushman · Coach de comunicación ejecutiva",
        ),
    }[lang]
    bars = "".join(f'<i style="height:{h}%"></i>' for h in WAVE)
    chips = "".join(f'<div class="chip">{c}</div>' for c in t["chips"])
    body = f"""
<div class="hero-frame">
  <div class="hero-col">
    <div class="eyebrow">{t['eyebrow']}</div>
    <h1>{t['h1']}</h1>
    <div class="rule" style="margin-top:28px"></div>
    <p class="lede">{t['lede']}</p>

    <div class="stackwrap">
      <div class="tag sub" style="align-self:flex-start">{t['input_label']}</div>
      <div class="chips">{chips}</div>
      <div class="arrow">&#8595;</div>
      <div class="panel-gold speak">
        <div class="label"><b>{t['speak']}</b><span class="tag gold">{t['speak_note']}</span></div>
        <div class="wave">{bars}</div>
      </div>
    </div>
    <div class="hero-foot"><span>{t['foot_left']}</span><span>nyenglishteacher.com</span></div>
  </div>
</div>"""
    return page_html(body, HERO_CSS, SIZE_WIDE)


# --------------------------------------------------------------------------
# 2. WORDS VS PATTERNS
# --------------------------------------------------------------------------
COMPARE_CSS = """
.title { font-size:46px; font-weight:900; letter-spacing:-1px; line-height:1.1; }
.cols { display:flex; gap:34px; margin-top:34px; flex:1; padding-bottom:26px; }
.col { flex:1; padding:30px 34px 28px; display:flex; flex-direction:column; }
.col h3 { font-size:17px; letter-spacing:4px; text-transform:uppercase;
          font-family:'BrunoAceSC',sans-serif; font-weight:400; }
.stack { flex:1; display:flex; flex-direction:column; justify-content:center; gap:26px; }
.word { background:#151A3E; border:2px dashed #333C78; border-radius:12px;
        padding:18px 22px; font-size:34px; font-weight:600; color:#8891C7; }
.pat .p { font-size:34px; font-weight:700; color:#FFFFFF; }
.pat .p em { color:#C9A24B; font-style:normal; }
.pat .ex { font-size:22px; color:#AEB4E0; margin-top:6px; line-height:1.35; }
.note { font-size:20px; line-height:1.4; padding-top:24px; }
"""


def words_vs_patterns(lang):
    t = {
        "en": dict(
            eyebrow="Pattern collecting",
            title="Stop collecting words. Start collecting patterns.",
            left="Collecting words",
            right="Collecting patterns",
            words=["depend", "talk", "recommend"],
            pats=[
                ("depend <em>on</em>", "Our success depends on customer service."),
                ("talk <em>to</em> someone", "I need to talk to my customer."),
                ("recommend <em>+ -ing</em>", "I recommend choosing the larger size."),
            ],
            note_l="You recognize it when you hear it. You still can’t build with it.",
            note_r="Reusable building blocks you can drop into your next meeting.",
        ),
        "es": dict(
            eyebrow="Colecciona patrones",
            title="Deja de coleccionar palabras. Empieza a coleccionar patrones.",
            left="Coleccionar palabras",
            right="Coleccionar patrones",
            words=["depend", "talk", "recommend"],
            pats=[
                ("depend <em>on</em>", "Our success depends on customer service."),
                ("talk <em>to</em> someone", "I need to talk to my customer."),
                ("recommend <em>+ -ing</em>", "I recommend choosing the larger size."),
            ],
            note_l="La reconoces cuando la oyes. Aún no puedes construir con ella.",
            note_r="Bloques reutilizables que puedes usar en tu próxima junta.",
        ),
    }[lang]
    words = "".join(f'<div class="word">{w}</div>' for w in t["words"])
    pats = "".join(
        f'<div class="pat"><div class="p">{p}</div><div class="ex">“{e}”</div></div>'
        for p, e in t["pats"]
    )
    body = f"""
<div class="frame">
  <div class="eyebrow">{t['eyebrow']}</div>
  <h2 class="title" style="margin-top:16px">{t['title']}</h2>
  <div class="cols">
    <div class="col panel">
      <h3 class="sub">{t['left']}</h3>
      <div class="stack">{words}</div>
      <p class="note" style="color:#8891C7">{t['note_l']}</p>
    </div>
    <div class="col panel-gold">
      <h3 class="gold">{t['right']}</h3>
      <div class="stack">{pats}</div>
      <p class="note sub">{t['note_r']}</p>
    </div>
  </div>
  <div class="foot"><span></span><span>nyenglishteacher.com</span></div>
</div>"""
    return page_html(body, COMPARE_CSS)


# --------------------------------------------------------------------------
# 3. TRANSLATING VS RETRIEVING
# --------------------------------------------------------------------------
LANE_CSS = """
.title { font-size:46px; font-weight:900; letter-spacing:-1px; line-height:1.1; }
.lanes { flex:1; display:flex; flex-direction:column; justify-content:center;
         gap:26px; padding-bottom:34px; margin-top:22px; }
.lane { padding:26px 32px 28px; }
.lane h3 { font-size:17px; letter-spacing:4px; text-transform:uppercase;
           font-family:'BrunoAceSC',sans-serif; font-weight:400; }
.flow { display:flex; align-items:center; gap:16px; margin-top:20px; flex-wrap:wrap; }
.box { border-radius:12px; padding:14px 20px; font-size:26px; font-weight:600; white-space:nowrap; }
.box-dim { background:#151A3E; border:2px dashed #333C78; color:#8891C7; }
.box-gold { background:rgba(201,162,75,0.13); border:2px solid #C9A24B; color:#FFFFFF; }
.sep { color:#5C66A8; font-size:26px; }
.sep-gold { color:#C9A24B; font-size:26px; }
.out { font-size:27px; color:#FFFFFF; font-weight:700; }
.out-dim { font-size:27px; color:#8891C7; font-weight:700; }
.verdict { font-size:20px; margin-top:18px; }
.reuse { display:flex; gap:14px; margin-top:22px; flex-wrap:wrap; }
.reuse div { border:2px solid rgba(201,162,75,0.42); border-radius:12px;
             padding:12px 18px; font-size:21px; color:#FFFFFF; }
"""


def translate_vs_retrieve(lang):
    t = {
        "en": dict(
            eyebrow="Automatic English",
            title="From assembling a sentence to retrieving one",
            lane1="Assembling — every time",
            lane2="Retrieving — once it is yours",
            b1=["depende &#8594; depend", "de &#8594; of? on? from?"],
            out1="“It depend of the customer.”",
            v1="Two lookups and a guess, mid-sentence. By the time you land on one, the moment has moved on.",
            b2="it depends on",
            unit="one unit",
            out2="“It depends on the customer.”",
            v2="Nothing to assemble — so your attention is free for what you actually want to say.",
            reuse=[
                "“It depends on our budget.”",
                "“It depends on when they can deliver.”",
                "“It depends on the price.”",
            ],
        ),
        "es": dict(
            eyebrow="Inglés automático",
            title="De armar la oración a recuperarla",
            lane1="Armando — cada vez",
            lane2="Recuperando — cuando ya es tuya",
            b1=["depende &#8594; depend", "de &#8594; of? on? from?"],
            out1="“It depend of the customer.”",
            v1="Dos búsquedas y una adivinanza a media oración. Cuando te decides, el momento ya pasó.",
            b2="it depends on",
            unit="una sola pieza",
            out2="“It depends on the customer.”",
            v2="Nada que armar — tu atención queda libre para lo que de verdad quieres decir.",
            reuse=[
                "“It depends on our budget.”",
                "“It depends on when they can deliver.”",
                "“It depends on the price.”",
            ],
        ),
    }[lang]
    flow1 = '<span class="sep">&#8594;</span>'.join(
        f'<div class="box box-dim">{b}</div>' for b in t["b1"]
    )
    reuse = "".join(f"<div>{r}</div>" for r in t["reuse"])
    body = f"""
<div class="frame">
  <div class="eyebrow">{t['eyebrow']}</div>
  <h2 class="title" style="margin-top:16px">{t['title']}</h2>
  <div class="lanes">
    <div class="lane panel">
      <h3 class="sub">{t['lane1']}</h3>
      <div class="flow">{flow1}<span class="sep">&#8594;</span><span class="out-dim">{t['out1']}</span></div>
      <p class="verdict" style="color:#8891C7">{t['v1']}</p>
    </div>

    <div class="lane panel-gold">
      <h3 class="gold">{t['lane2']}</h3>
      <div class="flow">
        <div class="box box-gold">{t['b2']}</div>
        <span class="tag gold">{t['unit']}</span>
        <span class="sep-gold">&#8594;</span>
        <span class="out">{t['out2']}</span>
      </div>
      <div class="reuse">{reuse}</div>
      <p class="verdict sub">{t['v2']}</p>
    </div>
  </div>
  <div class="foot"><span></span><span>nyenglishteacher.com</span></div>
</div>"""
    return page_html(body, LANE_CSS)


# --------------------------------------------------------------------------
# 4. THE WEEKLY FORMULA
# --------------------------------------------------------------------------
FORMULA_CSS = """
.title { font-size:46px; font-weight:900; letter-spacing:-1px; line-height:1.1; }
.grid { flex:1; display:grid; grid-template-columns:1fr 1fr; gap:10px 40px;
        margin-top:26px; padding-bottom:36px; align-content:space-between; }
.step { display:flex; gap:20px; align-items:flex-start; padding:12px 20px;
        border-left:3px solid #2E3670; }
.step .n { font-family:'BrunoAceSC',sans-serif; font-size:23px; color:#C9A24B;
           min-width:46px; padding-top:5px; }
.step .t { font-size:29px; font-weight:700; color:#FFFFFF; line-height:1.2; }
.step .d { font-size:20px; color:#AEB4E0; margin-top:5px; line-height:1.35; }
.kicker { font-size:27px; color:#FFFFFF; font-weight:700; line-height:1.3; }
.kicker span { color:#C9A24B; }
"""


def weekly_formula(lang):
    t = {
        "en": dict(
            eyebrow="The weekly formula",
            title="Seven habits that turn English study into English fluency",
            steps=[
                ("Get input", "Read, watch and listen to things you care about."),
                ("Notice patterns", "Collect combinations of words, not isolated vocabulary."),
                ("Practice the pattern", "Build your own sentences until it feels like yours."),
                ("Speak regularly", "A colleague, a friend, a coach, or an AI voice partner."),
                ("Perform under pressure", "Rehearse the real moments — including the surprises."),
                ("Accept feedback", "Take the correction without stopping the conversation."),
                ("Keep moving", "A mistake is a bump in the road. Drive over it."),
            ],
            kicker="Ten minutes a day beats <span>three hours on Sunday.</span>",
        ),
        "es": dict(
            eyebrow="La fórmula semanal",
            title="Siete hábitos que convierten el estudio del inglés en fluidez",
            steps=[
                ("Recibe input", "Lee, mira y escucha temas que te interesen."),
                ("Detecta patrones", "Colecciona combinaciones, no vocabulario suelto."),
                ("Practica el patrón", "Arma tus propias oraciones hasta que se sientan tuyas."),
                ("Habla con frecuencia", "Un colega, un amigo, un coach o un asistente de voz."),
                ("Practica bajo presión", "Ensaya los momentos reales — incluidas las sorpresas."),
                ("Acepta la corrección", "Recíbela sin detener la conversación."),
                ("Sigue adelante", "Un error es un tope en el camino. Pásalo y continúa."),
            ],
            kicker="Diez minutos al día le ganan a <span>tres horas el domingo.</span>",
        ),
    }[lang]
    steps = "".join(
        f'<div class="step"><div class="n">{i + 1:02d}</div>'
        f'<div><div class="t">{a}</div><div class="d">{b}</div></div></div>'
        for i, (a, b) in enumerate(t["steps"])
    )
    body = f"""
<div class="frame">
  <div class="eyebrow">{t['eyebrow']}</div>
  <h2 class="title" style="margin-top:14px">{t['title']}</h2>
  <div class="grid">{steps}
    <div class="step" style="border-left-color:transparent; align-items:center">
      <div class="kicker" style="margin:0">{t['kicker']}</div>
    </div>
  </div>
  <div class="foot"><span>Robert Cushman</span><span>nyenglishteacher.com</span></div>
</div>"""
    return page_html(body, FORMULA_CSS)


# name -> (builder, canvas size). The hero is 4:3; everything else is 16:9.
CARDS = {
    "improve-your-english-use-it": (hero, SIZE_WIDE),
    "collect-patterns-not-words": (words_vs_patterns, SIZE_WIDE),
    "translating-to-automatic-english": (translate_vs_retrieve, SIZE_WIDE),
    "weekly-english-practice-formula": (weekly_formula, SIZE_WIDE),
}


def main():
    langs = sys.argv[1:] or ["en", "es"]
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for lang in langs:
            for name, (fn, (w, h)) in CARDS.items():
                page = browser.new_page(
                    viewport={"width": w, "height": h}, device_scale_factor=1
                )
                html_path = OUT / f"{name}-{lang}.html"
                html_path.write_text(fn(lang), encoding="utf-8")
                page.goto(html_path.as_uri())
                page.wait_for_timeout(350)
                png = OUT / f"{name}-{lang}.png"
                page.screenshot(path=str(png))
                page.close()
                print(f"rendered {png.name}  ({w}x{h})")
        browser.close()


if __name__ == "__main__":
    main()
