import * as Sentry from "@sentry/astro";

// __SENTRY_CLIENT_DSN__ is replaced at build time by Vite `define` in
// astro.config.mjs (sourced from process.env.SENTRY_DSN).
// eslint-disable-next-line no-undef
const dsn = typeof __SENTRY_CLIENT_DSN__ !== "undefined" ? __SENTRY_CLIENT_DSN__ : "";

Sentry.init({
  dsn,

  // Filter known browser-extension noise. These errors originate from
  // user-installed extensions injecting scripts into the page and are not
  // bugs in our code.
  ignoreErrors: [
    /removeHighlight is not defined/,
    /tapAt is not defined/,
    /onLoad is not defined/,
    /onReady is not defined/,
    /className\.indexOf is not a function/,
    /Identifier '.+' has already been declared/,

    /^ResizeObserver loop limit exceeded$/,
    /^ResizeObserver loop completed with undelivered notifications/,
    /Non-Error promise rejection captured/,
    /Failed to fetch$/,
    /NetworkError when attempting to fetch resource/,
    /Load failed$/,

    // A navigation or tab close mid-request. Not a site fault.
    /AbortError/,
    /The operation was aborted/,
    /Network request failed/,
    // Opaque cross-origin error with no actionable stack.
    /^Script error\.?$/,
    // Injected page translators and extension globals.
    /top\.GLOBALS/,
    /originalCreateNotification/,
    /canvas\.contentDocument/,
    /Can't find variable: gmo/,
    /__gCrWeb/,

    // `Array.prototype.at` landed in Chrome 92 / Safari 15.4 / Firefox 90
    // (mid-2021). A browser that throws this predates all three, and the
    // throw is always inside a vendored `web-vitals` copy — Cloudflare's RUM
    // beacon and Sentry's own tracing both call `entries.at(-1)`. Our `src/`
    // contains zero `.at(` calls, so this can never be our bug.
    // Seen 2026-08-07 as NY-ENG-8 (`t.entries.at`) and NY-ENG-9 (`this.i.at`).
    /\.at is not a function/,
  ],

  denyUrls: [
    /^chrome-extension:\/\//i,
    /^moz-extension:\/\//i,
    /^safari-extension:\/\//i,
    /^safari-web-extension:\/\//i,
    /^chrome:\/\//i,
    /^webkit-masked-url:/i,

    // Third-party scripts we do not control and cannot fix. The Cloudflare
    // RUM beacon is injected by Cloudflare's proxy, not by our code — it is
    // not in any template, and we cannot patch it.
    /static\.cloudflareinsights\.com/i,
    /googletagmanager\.com/i,
    /google-analytics\.com/i,
    /translate\.google/i,
  ],

  beforeSend(event, hint) {
    const frames = event.exception?.values?.[0]?.stacktrace?.frames;
    if (frames && frames.length > 0) {
      const topFrame = frames[frames.length - 1];
      const filename = topFrame?.filename || "";
      if (
        filename.startsWith("chrome-extension://") ||
        filename.startsWith("moz-extension://") ||
        filename.startsWith("safari-extension://") ||
        filename.startsWith("safari-web-extension://") ||
        filename.startsWith("webkit-masked-url:")
      ) {
        return null;
      }
    }

    // Drop runtime SyntaxErrors. Real syntax errors in our bundles fail the
    // build — at runtime, these always come from extension-injected scripts.
    const error = hint?.originalException;
    if (error instanceof SyntaxError) return null;

    return event;
  },
});
