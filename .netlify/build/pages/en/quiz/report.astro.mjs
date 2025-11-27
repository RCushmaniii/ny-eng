import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_D3t1T5I4.mjs';
import { $ as $$Base } from '../../../chunks/Base_D0GHnMc8.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Download, AlertCircle, TrendingUp, Calendar } from 'lucide-react';
import { g as getQuizConfig } from '../../../chunks/index_C9q68HMh.mjs';
import { c as calculateQuizScore } from '../../../chunks/scoring_BHlAKgLq.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

function QuizReport() {
  const [isLoading, setIsLoading] = useState(true);
  const [leadData, setLeadData] = useState(null);
  const [generatedDate, setGeneratedDate] = useState("");
  const [quizTitle, setQuizTitle] = useState("");
  const [scoreData, setScoreData] = useState(null);
  const [tierInfo, setTierInfo] = useState(null);
  const [impactInfo, setImpactInfo] = useState(null);
  const [eliteInfo, setEliteInfo] = useState(null);
  const [ctaInfo, setCtaInfo] = useState(null);
  useEffect(() => {
    const answersJson = sessionStorage.getItem("quizAnswers");
    const leadDataJson = sessionStorage.getItem("leadData");
    if (!answersJson) {
      window.location.href = "/en/assessments/";
      return;
    }
    const answers = JSON.parse(answersJson);
    const lead = leadDataJson ? JSON.parse(leadDataJson) : { name: "Valued Client" };
    const quizType = lead.quizType || "it-services";
    const config = getQuizConfig(quizType, "en");
    const scoreBreakdown = calculateQuizScore(answers, config);
    const date = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    lead.quizType = quizType;
    let currentTierInfo = {
      tier: scoreBreakdown.scoreTier,
      description: "",
      color: ""
    };
    if (scoreBreakdown.scoreTier === "Conversation-Ready") {
      currentTierInfo = {
        tier: scoreBreakdown.scoreTier,
        color: "#10b981",
        description: "Your team has solid communication skills with room for strategic refinement."
      };
    } else if (scoreBreakdown.scoreTier === "Million-Dollar Gap") {
      currentTierInfo = {
        tier: scoreBreakdown.scoreTier,
        color: "#f59e0b",
        description: "Communication gaps are costing you deals. The good news? These are fixable."
      };
    } else {
      currentTierInfo = {
        tier: scoreBreakdown.scoreTier,
        color: "#ef4444",
        description: "Communication challenges are directly limiting growth. Immediate action needed."
      };
    }
    let impact = { sectionTitle: "The Real Cost", title: "", text: "" };
    const { totalScore: totalScore2, scoreTier } = scoreBreakdown;
    if (config.results) {
      if (config.results.impactTitle) {
        impact.sectionTitle = config.results.impactTitle;
      }
      if (config.results.tiers[scoreTier]) {
        const tierResult = config.results.tiers[scoreTier];
        impact.title = tierResult.title;
        impact.text = tierResult.description;
      }
    }
    if (!impact.title) {
      if (totalScore2 < 40) {
        impact.title = "Deals are falling through due to communication breakdowns.";
        impact.text = "Your team's hesitation and unclear communication are directly costing you contracts. Clients sense the uncertainty and choose competitors who sound more confident—even if they're less qualified.";
      } else if (totalScore2 < 70) {
        impact.title = "You're leaving money on the table in negotiations.";
        impact.text = "Your team can close deals, but they're conceding too quickly on price and scope. The inability to defend value in real-time is costing you 15-20% on every contract.";
      } else {
        impact.title = "You're close—but small gaps are limiting your ceiling.";
        impact.text = "Your team communicates well, but elite firms command 30-40% higher rates by mastering the subtle art of executive presence and strategic positioning.";
      }
    }
    let currentEliteInfo = {
      title: "What Elite Firms Do Differently",
      items: [
        "They answer client questions confidently in real-time, never deferring to email",
        "They defend pricing and push back on unfavorable terms without hesitation",
        "Junior team members can lead client meetings independently",
        "They build rapport through natural small talk and relationship-building",
        "They explain complex solutions clearly, making clients feel confident in their expertise"
      ]
    };
    if (config.results && config.results.eliteComparison) {
      currentEliteInfo = config.results.eliteComparison;
    }
    let currentCtaInfo = {
      title: "Let's See If This Applies to Your Team",
      subtext: "This assessment reveals patterns. A 15-minute conversation reveals solutions.",
      buttonText: "Book Your Free Discovery Call",
      footerText: "No pitch. No pressure. Just a conversation about what's possible for your team."
    };
    if (config.results && config.results.cta) {
      currentCtaInfo = config.results.cta;
    }
    setLeadData(lead);
    setGeneratedDate(date);
    setQuizTitle(config.title);
    setScoreData(scoreBreakdown);
    setTierInfo(currentTierInfo);
    setImpactInfo(impact);
    setEliteInfo(currentEliteInfo);
    setCtaInfo(currentCtaInfo);
    setIsLoading(false);
  }, []);
  if (isLoading || !scoreData || !leadData || !tierInfo || !impactInfo || !eliteInfo || !ctaInfo) {
    const lang = typeof window !== "undefined" && window.location.pathname.includes("/es/") ? "es" : "en";
    const loadingText = lang === "es" ? "Cargando Informe..." : "Loading Report...";
    return /* @__PURE__ */ jsx("div", { className: "report-container", children: /* @__PURE__ */ jsxs("div", { className: "loading-state", children: [
      /* @__PURE__ */ jsx("div", { className: "spinner" }),
      /* @__PURE__ */ jsx("p", { className: "loading-text", children: loadingText })
    ] }) });
  }
  const { totalScore, primaryGap, secondaryGap } = scoreData;
  return /* @__PURE__ */ jsx("div", { className: "report-container", children: /* @__PURE__ */ jsxs("div", { className: "report-wrapper", children: [
    /* @__PURE__ */ jsx("header", { className: "report-header", children: /* @__PURE__ */ jsxs("div", { className: "header-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "header-content", children: [
        /* @__PURE__ */ jsx("h1", { className: "report-title", children: "Your Communication Confidence Report" }),
        quizTitle && /* @__PURE__ */ jsxs("div", { className: "quiz-type-info", children: [
          /* @__PURE__ */ jsx("strong", { children: "Assessment:" }),
          " ",
          quizTitle
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "recipient-info", children: [
          /* @__PURE__ */ jsx("strong", { children: "Prepared for:" }),
          " ",
          leadData.name,
          leadData.company ? ` | ${leadData.company}` : ""
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "report-meta", children: [
          /* @__PURE__ */ jsx("strong", { children: "Report Generated:" }),
          " ",
          generatedDate
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "header-right", children: [
        /* @__PURE__ */ jsx("div", { className: "header-logo", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/logos/new-york-english-sq-og.jpg",
            alt: "NY English"
          }
        ) }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "download-pdf-button no-print",
            onClick: () => window.print(),
            type: "button",
            children: [
              /* @__PURE__ */ jsx(Download, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "PDF" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "hero-section", children: /* @__PURE__ */ jsxs("div", { className: "score-display", children: [
      /* @__PURE__ */ jsxs("div", { className: "score-circle", children: [
        /* @__PURE__ */ jsx("div", { className: "score-number", children: totalScore }),
        /* @__PURE__ */ jsx("div", { className: "score-label", children: "out of 100" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "score-content", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "score-tier",
            style: { color: tierInfo.color, margin: 0 },
            children: tierInfo.tier
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "score-description", children: tierInfo.description })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "insights-section", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-heading", children: "Your Top Improvement Areas" }),
      /* @__PURE__ */ jsxs("div", { className: "insights-grid", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "insight-card",
            style: { borderLeftColor: tierInfo.color },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "insight-card-q", children: [
                "Priority #1: ",
                primaryGap.categoryName
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "insight-card-text", children: [
                /* @__PURE__ */ jsx("strong", { children: "Impact:" }),
                " ",
                primaryGap.impact,
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("strong", { children: "Fix:" }),
                " ",
                primaryGap.recommendation
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "insight-card",
            style: { borderLeftColor: tierInfo.color },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "insight-card-q", children: [
                "Priority #2: ",
                secondaryGap.categoryName
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "insight-card-text", children: [
                /* @__PURE__ */ jsx("strong", { children: "Impact:" }),
                " ",
                secondaryGap.impact,
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("strong", { children: "Fix:" }),
                " ",
                secondaryGap.recommendation
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "impact-section", children: [
      /* @__PURE__ */ jsxs("div", { className: "impact-header", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "impact-icon", size: 40 }),
        /* @__PURE__ */ jsx("h2", { className: "section-heading", style: { marginBottom: 0 }, children: impactInfo.sectionTitle })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "impact-content", children: [
        /* @__PURE__ */ jsx("p", { className: "impact-content-title", children: impactInfo.title }),
        /* @__PURE__ */ jsx("p", { className: "impact-content-text", children: impactInfo.text })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "elite-section", children: [
      /* @__PURE__ */ jsxs("div", { className: "elite-header", children: [
        /* @__PURE__ */ jsx(TrendingUp, { className: "elite-icon", size: 40 }),
        /* @__PURE__ */ jsx("h2", { className: "section-heading", style: { marginBottom: 0 }, children: eliteInfo.title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "elite-grid", children: /* @__PURE__ */ jsx("ul", { className: "elite-list", children: eliteInfo.items.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "elite-list-item", children: [
        /* @__PURE__ */ jsx("span", { children: "✓" }),
        item
      ] }, index)) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "cta-section", children: /* @__PURE__ */ jsxs("div", { className: "cta-container", children: [
      /* @__PURE__ */ jsx("h2", { className: "cta-heading", children: ctaInfo.title }),
      /* @__PURE__ */ jsx("p", { className: "cta-subtext", children: ctaInfo.subtext }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.nyenglishteacher.com/en/book/",
          className: "cta-button",
          children: [
            /* @__PURE__ */ jsx(Calendar, { className: "cta-button-icon", size: 24 }),
            /* @__PURE__ */ jsx("span", { className: "cta-button-text-desktop", children: ctaInfo.buttonText }),
            /* @__PURE__ */ jsx("span", { className: "cta-button-text-mobile", children: ctaInfo.buttonText })
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "cta-note", children: ctaInfo.footerText })
    ] }) })
  ] }) });
}

const $$Report = createComponent(($$result, $$props, $$slots) => {
  const title = "Your Communication Confidence Report | NY English";
  const description = "Detailed analysis of your team's English communication strengths and opportunities. Get your personalized roadmap to executive fluency with North American clients.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "lang": "en", "tkey": "quiz/report", "hideCta": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "QuizReport", QuizReport, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/QuizReport.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/report.astro", void 0);

const $$file = "C:/Users/Robert Cushman/.vscode/Projects/ny-eng/src/pages/en/quiz/report.astro";
const $$url = "/en/quiz/report";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Report,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
