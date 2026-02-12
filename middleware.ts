import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Vercel Edge Middleware
 *
 * Handles Accept-Language detection on the root URL only.
 * Spanish speakers → /es/, everyone else → /en/.
 * Uses 302 (temporary) so the redirect isn't cached permanently.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only intercept the exact root path
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // Check Accept-Language header for Spanish
  const acceptLang = request.headers.get("accept-language") || "";
  const destination = acceptLang.toLowerCase().startsWith("es")
    ? "/es/"
    : "/en/";

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 302);
}

export const config = {
  // Only run on the root path — don't slow down other routes
  matcher: "/",
};
