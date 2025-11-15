import { useState, useEffect } from "react";
import {
  Calendar,
  TrendingUp,
  AlertCircle,
} from "lucide-react"; // Use lucide-react inside a .tsx file
import { questionsEn } from "@data/quiz/questions"; // This import now works
import "@styles/report.css";

// --- Helper Types & Functions ---

interface LeadData {
  name: string;
  company?: string;
}

interface Answers {
  [key: string]: number;
}

interface TierInfo {
  tier: string;
  description: string;
  color: string;
}

interface WeakestQuestion {
  id: number;
  points: number;
  insight: string;
}

interface ImpactInfo {
  title: string;
  text: string;
}

function getTierInfo(score: number): TierInfo {
  if (score >= 70) {
    return {
      tier: "Conversation-Ready",
      description:
        "Your team has solid communication skills with room for strategic refinement.",
      color: "#10b981",
    };
  } else if (score >= 40) {
    return {
      tier: "Million-Dollar Gap",
      description:
        "Communication gaps are costing you deals. The good news? These are fixable.",
      color: "#f59e0b",
    };
  } else {
    return {
      tier: "Credibility Block",
      description:
        "Communication challenges are directly limiting growth. Immediate action needed.",
      color: "#ef4444",
    };
  }
}

function getImpactStatement(score: number): ImpactInfo {
  if (score < 40) {
    return {
      title: "Deals are falling through due to communication breakdowns.",
      text: "Your team's hesitation and unclear communication are directly costing you contracts. Clients sense the uncertainty and choose competitors who sound more confident—even if they're less qualified.",
    };
  } else if (score < 70) {
    return {
      title: "You're leaving money on the table in negotiations.",
      text: "Your team can close deals, but they're conceding too quickly on price and scope. The inability to defend value in real-time is costing you 15-20% on every contract.",
    };
  } else {
    return {
      title: "You're close—but small gaps are limiting your ceiling.",
      text: "Your team communicates well, but elite firms command 30-40% higher rates by mastering the subtle art of executive presence and strategic positioning.",
    };
  }
}

// --- Main Component ---

export default function QuizReport() {
  // --- State ---
  const [isLoading, setIsLoading] = useState(true);
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [generatedDate, setGeneratedDate] = useState("");
  const [overallScore, setOverallScore] = useState(0);
  const [tierInfo, setTierInfo] = useState<TierInfo | null>(null);
  const [weakestQuestions, setWeakestQuestions] = useState<WeakestQuestion[]>(
    []
  );
  const [impactInfo, setImpactInfo] = useState<ImpactInfo | null>(null);

  // --- Effect to load data from sessionStorage on mount ---
  useEffect(() => {
    const answersJson = sessionStorage.getItem("quizAnswers");
    const leadDataJson = sessionStorage.getItem("leadData");

    if (!answersJson) {
      window.location.href = "/en/quiz/question/1"; // Redirect if no data
      return;
    }

    const answers: Answers = JSON.parse(answersJson);
    const lead: LeadData = leadDataJson
      ? JSON.parse(leadDataJson)
      : { name: "Valued Client" };

    // --- Calculations ---
    const totalPoints = Object.values(answers).reduce(
      (sum: number, val: number) => sum + val,
      0
    );
    const maxPoints = 60; // 6 questions × 10 points each
    const score = Math.round((totalPoints / maxPoints) * 100);

    const tier = getTierInfo(score);
    const impact = getImpactStatement(score);

    // Find weakest questions
    const insights: Record<number, string> = {
      1: "Frequent misunderstandings are costing you credibility and extending sales cycles.",
      2: "Your team struggles to translate technical expertise into business value for clients.",
      3: "Deferring to email signals uncertainty and kills deal momentum.",
      4: "Inability to hold the line on pricing is leaving money on the table.",
      5: "You're the bottleneck—your team can't lead meetings without you.",
      6: "Lack of rapport-building prevents deeper client relationships and referrals.",
    };

    const questionScores = Object.entries(answers)
      .map(([qId, points]) => ({
        id: parseInt(qId.replace("q", "")),
        points: points as number,
        question: questionsEn.find(
          (q) => q.id === parseInt(qId.replace("q", ""))
        ),
      }))
      .filter((item) => item.question)
      .sort((a, b) => a.points - b.points)
      .slice(0, 3) // Top 3 weakest areas
      .map((item) => ({
        ...item,
        insight: insights[item.id] || "Communication gap identified.",
      }));

    // Format date
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // --- Set State ---
    setLeadData(lead);
    setGeneratedDate(date);
    setOverallScore(score);
    setTierInfo(tier);
    setWeakestQuestions(questionScores);
    setImpactInfo(impact);
    setIsLoading(false);
  }, []);

  // --- Render ---
  if (isLoading || !tierInfo || !leadData || !impactInfo) {
    return <div className="report-container">Loading Report...</div>; // Simple loader
  }

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
              <div className="recipient-info">
                <strong>Prepared for:</strong> {leadData.name}
                {leadData.company ? ` | ${leadData.company}` : ""}
              </div>
              <div className="report-meta">
                <strong>Report Generated:</strong> {generatedDate}
              </div>
            </div>
            <div className="header-logo">
              <img
                src="/images/logos/new-york-english-sq-og.jpg"
                alt="NY English"
              />
            </div>
          </div>
        </header>

        {/* Main Result Section */}
        <section className="hero-section">
          <div className="score-display">
            <div className="score-circle">
              <div className="score-number">{overallScore}</div>
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

        {/* Insights Cards Section */}
        <section className="insights-section">
          <h2 className="section-heading">What This Reveals About Your Team</h2>
          <div className="insights-grid">
            {weakestQuestions.map((item) => (
              <div
                key={item.id}
                className="insight-card"
                style={{ borderLeftColor: tierInfo.color }}
              >
                <div className="insight-card-q">Question {item.id}</div>
                <div className="insight-card-text">{item.insight}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Business Impact Section */}
        <section className="impact-section">
          <div className="impact-header">
            <AlertCircle className="impact-icon" size={40} />
            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              The Real Cost
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
              What Elite Firms Do Differently
            </h2>
          </div>
          <div className="elite-grid">
            <ul className="elite-list">
              <li className="elite-list-item">
                <span>✓</span>
                They answer client questions confidently in real-time, never
                deferring to email
              </li>
              <li className="elite-list-item">
                <span>✓</span>
                They defend pricing and push back on unfavorable terms without
                hesitation
              </li>
              <li className="elite-list-item">
                <span>✓</span>
                Junior team members can lead client meetings independently
              </li>
              <li className="elite-list-item">
                <span>✓</span>
                They build rapport through natural small talk and
                relationship-building
              </li>
              <li className="elite-list-item">
                <span>✓</span>
                They explain complex solutions clearly, making clients feel
                confident in their expertise
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-heading">
              Let's See If This Applies to Your Team
            </h2>
            <p className="cta-subtext">
              This assessment reveals patterns. A 15-minute conversation
              reveals solutions.
            </p>
            <a
              href="https://www.nyenglishteacher.com/en/book/"
              className="cta-button"
            >
              <Calendar className="cta-button-icon" size={24} />
              <span className="cta-button-text-desktop">Book Your Free Discovery Call</span>
              <span className="cta-button-text-mobile">Book Discovery Call</span>
            </a>
            <p className="cta-note">
              No pitch. No pressure. Just a conversation about what's possible
              for your team.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}