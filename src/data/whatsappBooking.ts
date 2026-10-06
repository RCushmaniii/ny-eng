/**
 * The WhatsApp booking link — one definition for every place that uses it
 * (the booking pages' card and the Spanish footer CTA). Added 2026-10-06.
 *
 * +1 585 565 6180 is the NY English WhatsApp BUSINESS number, where the booking
 * Flow lives (cushlabs-whatsapp, docs/BOOKING-FLOW.md). Not Robert's personal
 * number (+52 33 1559 0572) that the site's other WhatsApp links use — a
 * booking message sent there reaches no Flow.
 *
 * The pre-typed text must keep matching bookingIntent() in cushlabs-whatsapp
 * src/flows/booking.ts ("agendar … consulta" / "book … consultation"), or the
 * message falls through to the inbox instead of opening the Flow.
 */
export const NYE_BUSINESS_WA = "15855656180";

const MESSAGE = {
  es: "Quiero agendar una consulta",
  en: "I'd like to book a consultation",
} as const;

export function whatsappBookingHref(lang: "en" | "es"): string {
  return `https://wa.me/${NYE_BUSINESS_WA}?text=${encodeURIComponent(MESSAGE[lang])}`;
}
