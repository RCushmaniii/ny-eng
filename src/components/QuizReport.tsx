import { useState, useEffect } from "react";
import { Calendar, TrendingUp, AlertCircle, Download } from "lucide-react"; // Use lucide-react inside a .tsx file
import { getQuizConfig } from "@data/quiz/configs";
import { calculateQuizScore } from "@data/quiz/scoring";
import type { QuizType, ScoreBreakdown, ScoreTier } from "@data/quiz/types";
import "@styles/report.css";

// --- Helper Types & Functions ---

interface LeadData {
  name: string;
  company?: string;
  quizType?: QuizType;
}

interface Answers {
  [key: string]: number;
}

interface EliteInfo {
  title: string;
  items: string[];
}

interface CtaInfo {
  title: string;
  subtext: string;
  buttonText: string;
  footerText: string;
}

interface TierInfo {
  tier: ScoreTier;
  description: string;
  color: string;
}

// --- Main Component ---

export default function QuizReport() {
  // --- State ---
  const [isLoading, setIsLoading] = useState(true);
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [generatedDate, setGeneratedDate] = useState("");
  const [quizTitle, setQuizTitle] = useState("");
  const [scoreData, setScoreData] = useState<ScoreBreakdown | null>(null);
  const [tierInfo, setTierInfo] = useState<TierInfo | null>(null);
  const [impactInfo, setImpactInfo] = useState<{
    sectionTitle: string;
    title: string;
    text: string;
  } | null>(null);
  const [eliteInfo, setEliteInfo] = useState<EliteInfo | null>(null);
  const [ctaInfo, setCtaInfo] = useState<CtaInfo | null>(null);
  const [aiAssessment, setAiAssessment] = useState<string | null>(null);

  // --- Effect to load data from sessionStorage on mount ---
  useEffect(() => {
    const answersJson = sessionStorage.getItem("quizAnswers");
    const leadDataJson = sessionStorage.getItem("leadData");

    if (!answersJson) {
      // Fallback redirect if no data
      window.location.href = "/en/assessments/";
      return;
    }

    // Safely parse JSON with error handling to prevent crashes
    let answers: Answers;
    let lead: LeadData;

    try {
      answers = JSON.parse(answersJson);
    } catch (e) {
      console.error("Failed to parse quiz answers:", e);
      // Clear corrupted data and redirect
      sessionStorage.removeItem("quizAnswers");
      window.location.href = "/en/assessments/";
      return;
    }

    try {
      lead = leadDataJson
        ? JSON.parse(leadDataJson)
        : { name: "Valued Client" };
    } catch (e) {
      console.error("Failed to parse lead data:", e);
      // Use fallback for lead data, don't block the report
      lead = { name: "Valued Client" };
    }

    // Determine quiz type (fallback to 'it-services' for legacy)
    const quizType = lead.quizType || "it-services";

    // Get proper config
    const config = getQuizConfig(quizType as QuizType, "en");

    // Calculate Score properly using the engine
    const scoreBreakdown = calculateQuizScore(answers, config);

    // Format date
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Store quiz type and config title for display
    lead.quizType = quizType;

    // Determine Tier Info
    let currentTierInfo = {
      tier: scoreBreakdown.scoreTier,
      description: "",
      color: "",
    };
    if (scoreBreakdown.scoreTier === "Executive Presence") {
      currentTierInfo = {
        tier: scoreBreakdown.scoreTier,
        color: "#10b981",
        description:
          "You demonstrate strong communication skills in high-stakes situations. Small refinements could help you command even greater influence.",
      };
    } else if (scoreBreakdown.scoreTier === "Passive Proficiency") {
      currentTierInfo = {
        tier: scoreBreakdown.scoreTier,
        color: "#f59e0b",
        description:
          "You understand almost everything, but you struggle to be heard. Great ideas are landing softer than they should. The good news? This is fixable.",
      };
    } else {
      currentTierInfo = {
        tier: scoreBreakdown.scoreTier,
        color: "#ef4444",
        description:
          "Communication challenges are holding you back more than you realize. Colleagues interpret hesitation as lack of expertise—even when your skills are world-class.",
      };
    }

    // Determine Impact Info based on config + score
    const impact = { sectionTitle: "The Real Cost", title: "", text: "" };
    const { totalScore, scoreTier } = scoreBreakdown;

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

    // Fallback if title is still empty (legacy or not in config)
    if (!impact.title) {
      // Fallback to legacy hardcoded defaults
      if (totalScore < 40) {
        impact.title =
          "Deals are falling through due to communication breakdowns.";
        impact.text =
          "Your team's hesitation and unclear communication are directly costing you contracts. Clients sense the uncertainty and choose competitors who sound more confident—even if they're less qualified.";
      } else if (totalScore < 70) {
        impact.title = "You're leaving money on the table in negotiations.";
        impact.text =
          "Your team can close deals, but they're conceding too quickly on price and scope. The inability to defend value in real-time is costing you 15-20% on every contract.";
      } else {
        impact.title = "You're close—but small gaps are limiting your ceiling.";
        impact.text =
          "Your team communicates well, but elite firms command 30-40% higher rates by mastering the subtle art of executive presence and strategic positioning.";
      }
    }

    // Determine Elite Comparison Info
    let currentEliteInfo: EliteInfo = {
      title: "What Elite Firms Do Differently",
      items: [
        "They answer client questions confidently in real-time, never deferring to email",
        "They defend pricing and push back on unfavorable terms without hesitation",
        "Junior team members can lead client meetings independently",
        "They build rapport through natural small talk and relationship-building",
        "They explain complex solutions clearly, making clients feel confident in their expertise",
      ],
    };

    if (config.results && config.results.eliteComparison) {
      currentEliteInfo = config.results.eliteComparison;
    }

    // Determine CTA Info
    let currentCtaInfo: CtaInfo = {
      title: "Let's See If This Applies to Your Team",
      subtext:
        "This assessment reveals patterns. A 15-minute conversation reveals solutions.",
      buttonText: "Book Your Free Discovery Call",
      footerText:
        "No pitch. No pressure. Just a conversation about what's possible for your team.",
    };

    if (config.results && config.results.cta) {
      currentCtaInfo = config.results.cta;
    }

    // Load AI assessment from sessionStorage (set by results page after API response)
    let assessment: string | null = null;
    try {
      assessment = sessionStorage.getItem("aiAssessment");
    } catch { /* Silent fail */ }

    // --- Set State ---
    setLeadData(lead);
    setGeneratedDate(date);
    setQuizTitle(config.title);
    setScoreData(scoreBreakdown);
    setTierInfo(currentTierInfo);
    setImpactInfo(impact);
    setEliteInfo(currentEliteInfo);
    setCtaInfo(currentCtaInfo);
    if (assessment) setAiAssessment(assessment);
    setIsLoading(false);
  }, []);

  // --- Render ---
  if (
    isLoading ||
    !scoreData ||
    !leadData ||
    !tierInfo ||
    !impactInfo ||
    !eliteInfo ||
    !ctaInfo
  ) {
    // Detect language from URL
    const lang =
      typeof window !== "undefined" && window.location.pathname.includes("/es/")
        ? "es"
        : "en";
    const loadingText =
      lang === "es" ? "Cargando Informe..." : "Loading Report...";

    return (
      <div className="report-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p className="loading-text">{loadingText}</p>
        </div>
      </div>
    );
  }

  // Extract values for display
  const { totalScore, primaryGap, secondaryGap } = scoreData;

  return (
    <div className="report-container">
      <div className="report-wrapper">
        {/* Header Section */}
        <header className="report-header">
          <div className="header-grid">
            <div className="header-content">
              <h1 className="report-title">
                Your Communication Confidence Report
              </h1>
              {quizTitle && (
                <div className="quiz-type-info">
                  <strong>Assessment:</strong> {quizTitle}
                </div>
              )}
              <div className="recipient-info">
                <strong>Prepared for:</strong> {leadData.name}
                {leadData.company ? ` | ${leadData.company}` : ""}
              </div>
              <div className="report-meta">
                <strong>Report Generated:</strong> {generatedDate}
              </div>
            </div>
            <div className="header-right">
              <div className="header-logo">
                <img
                  src="/images/logos/new-york-english-sq-og.jpg"
                  alt="NY English"
                />
              </div>
              {/* Print to PDF Button */}
              <button
                className="download-pdf-button no-print"
                onClick={() => {
                  const originalTitle = document.title;
                  const monthYear = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
                  document.title = `Communication Confidence Report - ${monthYear}`;
                  window.print();
                  // Restore title after print dialog closes
                  setTimeout(() => { document.title = originalTitle; }, 1000);
                }}
                type="button"
              >
                <Download size={18} />
                <span>PDF</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Result Section */}
        <section className="hero-section">
          <div className="score-display">
            <div className="score-circle">
              <div className="score-number">{totalScore}</div>
              <div className="score-label">out of 100</div>
            </div>
            <div className="score-content">
              <div
                className="score-tier"
                style={{ color: tierInfo.color, margin: 0 }}
              >
                {tierInfo.tier}
              </div>
              <p className="score-description">{tierInfo.description}</p>
            </div>
          </div>
        </section>

        {/* AI Personalized Assessment Section */}
        {aiAssessment && (
          <section className="ai-assessment-section">
            <h2 className="section-heading">Your Personalized Assessment</h2>
            <div className="ai-assessment-content">
              {aiAssessment.split("\n\n").map((paragraph, i) => (
                <p key={i} className="ai-assessment-paragraph">{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* Insights Cards Section */}
        <section className="insights-section">
          <h2 className="section-heading">Your Top Improvement Areas</h2>
          <div className="insights-grid">
            {/* Primary Gap */}
            <div
              className="insight-card"
              style={{ borderLeftColor: tierInfo.color }}
            >
              <div className="insight-card-q">
                Priority #1: {primaryGap.categoryName}
              </div>
              <div className="insight-card-text">
                <strong>Impact:</strong> {primaryGap.impact}
                <br />
                <br />
                <strong>Fix:</strong> {primaryGap.recommendation}
              </div>
            </div>
            {/* Secondary Gap */}
            <div
              className="insight-card"
              style={{ borderLeftColor: tierInfo.color }}
            >
              <div className="insight-card-q">
                Priority #2: {secondaryGap.categoryName}
              </div>
              <div className="insight-card-text">
                <strong>Impact:</strong> {secondaryGap.impact}
                <br />
                <br />
                <strong>Fix:</strong> {secondaryGap.recommendation}
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact Section */}
        <section className="impact-section">
          <div className="impact-header">
            <AlertCircle className="impact-icon" size={40} />
            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              {impactInfo.sectionTitle}
            </h2>
          </div>
          <div className="impact-content">
            <p className="impact-content-title">{impactInfo.title}</p>
            <p className="impact-content-text">{impactInfo.text}</p>
          </div>
        </section>

        {/* Elite Comparison Section */}
        <section className="elite-section">
          <div className="elite-header">
            <TrendingUp className="elite-icon" size={40} />
            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              {eliteInfo.title}
            </h2>
          </div>
          <div className="elite-grid">
            <ul className="elite-list">
              {eliteInfo.items.map((item, index) => (
                <li key={index} className="elite-list-item">
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-heading">{ctaInfo.title}</h2>
            <p className="cta-subtext">{ctaInfo.subtext}</p>
            <a
              href="https://www.nyenglishteacher.com/en/book/"
              className="cta-button"
            >
              <Calendar className="cta-button-icon" size={24} />
              <span className="cta-button-text-desktop">
                {ctaInfo.buttonText}
              </span>
              <span className="cta-button-text-mobile">
                {ctaInfo.buttonText}
              </span>
            </a>
            <p className="cta-note">{ctaInfo.footerText}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
