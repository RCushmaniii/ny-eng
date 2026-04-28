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
    /className\.indexOf is not a function/,
    /Identifier '.+' has already been declared/,

    /^ResizeObserver loop limit exceeded$/,
    /^ResizeObserver loop completed with undelivered notifications/,
    /Non-Error promise rejection captured/,
    /Failed to fetch$/,
    /NetworkError when attempting to fetch resource/,
    /Load failed$/,
  ],

  denyUrls: [
    /^chrome-extension:\/\//i,
    /^moz-extension:\/\//i,
    /^safari-extension:\/\//i,
    /^safari-web-extension:\/\//i,
    /^chrome:\/\//i,
    /^webkit-masked-url:/i,
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
