import type { APIRoute } from "astro";

export const prerender = true;

export async function getStaticPaths() {
  const allowedScripts = [
    "report-structure",
    "validate-urls",
    "validate-hreflang",
    "validate-seo",
    "fix-links",
    "seo-audit"
  ];

  return allowedScripts.map(script => ({
    params: { script }
  }));
}

const headers = {
  "Content-Type": "application/json",
  "Cache-Control": "public, max-age=3600"
} as const;

export const GET: APIRoute = async ({ params }) => {
  return new Response(
    JSON.stringify({
      success: true,
      script: params.script,
      message: "This endpoint is now static. Please use the web UI to run scripts.",
      timestamp: new Date().toISOString()
    }),
    { headers }
  );
};

export const POST: APIRoute = async ({ params }) => {
  return new Response(
    JSON.stringify({
      success: false,
      script: params.script,
      error: "This endpoint is now static. Please use the web UI to run scripts.",
      timestamp: new Date().toISOString()
    }),
    { headers }
  );
};