import { g as getAllSubmissions } from '../../../chunks/supabase_7d3tTsd_.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ url }) => {
  try {
    const params = url.searchParams;
    const score_tier = params.get("score_tier") || void 0;
    const language = params.get("language") || void 0;
    const booked_consultation = params.get("booked_consultation") ? params.get("booked_consultation") === "true" : void 0;
    const email = params.get("email") || void 0;
    const limit = parseInt(params.get("limit") || "20");
    const offset = parseInt(params.get("offset") || "0");
    const result = await getAllSubmissions({
      score_tier,
      language,
      booked_consultation,
      limit,
      offset
    });
    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: result.error
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const submissions = result.submissions || [];
    const total = result.total || 0;
    const booked_count = submissions.filter((s) => s.booked_consultation).length;
    const avg_score = submissions.length > 0 ? submissions.reduce((sum, s) => sum + s.total_score, 0) / submissions.length : 0;
    return new Response(
      JSON.stringify({
        success: true,
        submissions,
        total,
        booked_count,
        avg_score,
        page: Math.floor(offset / limit) + 1,
        page_size: limit
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Admin leads error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Internal server error"
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
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
