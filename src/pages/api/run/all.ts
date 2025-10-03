import type { APIRoute } from "astro";

export const prerender = true;

export async function getStaticPaths() {
  return [{ params: {} }];
}

const headers = {
  "Content-Type": "application/json",
  "Cache-Control": "public, max-age=3600"
} as const;

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      success: true,
      message: "This endpoint is now static. Please use the web UI to run scripts.",
      timestamp: new Date().toISOString()
    }),
    { headers }
  );
};

export const POST: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      success: false,
      error: "This endpoint is now static. Please use the web UI to run scripts.",
      timestamp: new Date().toISOString()
    }),
    { headers }
  );
};
