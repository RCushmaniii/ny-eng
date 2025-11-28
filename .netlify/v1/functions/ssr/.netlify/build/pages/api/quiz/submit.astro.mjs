import { s as submitQuiz } from '../../../chunks/supabase_7d3tTsd_.mjs';
import { c as calculateQuizScore } from '../../../chunks/scoring_BHlAKgLq.mjs';
import { g as getQuizConfig } from '../../../chunks/index_D835lDR1.mjs';
import { Resend } from 'resend';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body.name || !body.email || !body.answers || !body.language || !body.quizType) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required fields: name, email, answers, language, quizType"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const config = getQuizConfig(
      body.quizType,
      body.language
    );
    const scoreBreakdown = calculateQuizScore(body.answers, config);
    const answerRecords = Object.entries(body.answers).map(
      ([qId, answerIndex]) => {
        const questionNum = parseInt(qId.replace("q", ""));
        const question = config.questions.find((q) => q.id === questionNum);
        if (!question) {
          console.error(`Question ${questionNum} not found in config`);
          return {
            question_number: questionNum,
            question_text: "Unknown question",
            answer_text: "Unknown answer",
            answer_index: answerIndex,
            points: 0,
            category: "clarity"
          };
        }
        const answer = question.answers[answerIndex];
        if (!answer) {
          console.error(
            `Answer index ${answerIndex} not found for question ${questionNum}`
          );
          return {
            question_number: questionNum,
            question_text: question.question,
            answer_text: "Unknown answer",
            answer_index: answerIndex,
            points: 0,
            category: question.category
          };
        }
        return {
          question_number: questionNum,
          question_text: question.question,
          answer_text: answer.label,
          answer_index: answer.index,
          points: answer.score,
          category: question.category
        };
      }
    );
    const payload = {
      // Lead info
      name: body.name,
      email: body.email,
      company: body.company || void 0,
      phone: body.phone || void 0,
      // Quiz metadata
      quiz_type: body.quizType,
      quiz_version: "v1.0",
      language: body.language,
      // Scoring snapshot
      raw_score: scoreBreakdown.rawScore,
      total_score: scoreBreakdown.totalScore,
      score_tier: scoreBreakdown.scoreTier,
      category_scores: scoreBreakdown.categoryScores,
      primary_gap: scoreBreakdown.primaryGap,
      secondary_gap: scoreBreakdown.secondaryGap,
      // Answer details
      answers: answerRecords,
      // Behavioral data
      completion_time_ms: body.completionTime,
      device_type: body.deviceType,
      browser: body.browser,
      referrer: body.referrer,
      // Marketing attribution
      utm_source: body.utmSource,
      utm_medium: body.utmMedium,
      utm_campaign: body.utmCampaign,
      utm_content: body.utmContent,
      utm_term: body.utmTerm
    };
    const result = await submitQuiz(payload);
    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: result.error || "Failed to submit quiz"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    try {
      const resend = new Resend("re_bqTWN1jc_CUsKJaR5LiX4UDMSnQbT6vnP");
      const quizTypeLabel = body.quizType.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      await resend.emails.send({
        from: "NY English Quiz <onboarding@resend.dev>",
        to: "rcushmaniii@gmail.com",
        subject: `🎯 New Quiz Lead: ${body.name} (${quizTypeLabel})`,
        html: `
          <h2>New Quiz Submission</h2>
          <p><strong>Quiz Type:</strong> ${quizTypeLabel}</p>
          <p><strong>Language:</strong> ${body.language === "en" ? "English" : "Spanish"}</p>
          <hr />
          <h3>Lead Information</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}
          ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
          <hr />
          <h3>Score Results</h3>
          <p><strong>Total Score:</strong> ${scoreBreakdown.totalScore}/100</p>
          <p><strong>Score Tier:</strong> ${scoreBreakdown.scoreTier}</p>
          <p><strong>Primary Gap:</strong> ${scoreBreakdown.primaryGap}</p>
          ${scoreBreakdown.secondaryGap ? `<p><strong>Secondary Gap:</strong> ${scoreBreakdown.secondaryGap}</p>` : ""}
          <hr />
          <h3>Category Breakdown</h3>
          ${Object.entries(scoreBreakdown.categoryScores).map(([category, score]) => `<p><strong>${category}:</strong> ${score}%</p>`).join("")}
          <hr />
          <p><small>Submission ID: ${result.submission_id}</small></p>
          <p><small>Submitted: ${(/* @__PURE__ */ new Date()).toLocaleString()}</small></p>
        `
      });
    } catch (emailError) {
      console.error("Failed to send notification email:", emailError);
    }
    return new Response(
      JSON.stringify({
        success: true,
        submission_id: result.submission_id,
        score: scoreBreakdown.totalScore,
        score_tier: scoreBreakdown.scoreTier
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Quiz submission error:", error);
    let errorMessage = "Internal server error";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "object" && error !== null && "message" in error) {
      errorMessage = String(error.message);
    }
    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
