# Booking confirmations (email, WhatsApp, morning summary)

The full guide lives in the cushlabs repo, because the logic is shared by both booking Workers:
**`cushlabs/docs/BOOKING-CONFIRMATIONS.md`** (https://github.com/RCushmaniii/cushlabs/blob/main/docs/BOOKING-CONFIRMATIONS.md).

What is specific to this repo:

- Booking Worker `plain-mode-42c4` = `cloudflare-worker.js`; shared logic in `lib/booking-confirm.js`,
  which must stay **identical** to `cushlabs/workers/lib/booking-confirm.js`.
- `wrangler.toml` is **gitignored**. `wrangler.toml.example` has every var; the real file was rebuilt on
  2026-09-29 from the live Worker's settings (D1 `ny-eng-booking`). Do not deploy from a stale copy.
- WhatsApp reminders go from the **NY English number** (`WA_SENDER = "nye"`).
- This Worker does **not** send the 08:00 summary (`DAILY_SUMMARY = "off"`). cushlabs-booking reads
  this Worker's list from `/internal/todays-bookings` (secret `SUMMARY_SECRET`) and sends one combined
  message.
- The booking form (`src/components/booking/BookingFormSteps.astro`) sends `phone` and `whatsappOptIn`.
  Until 2026-09-29 it collected the phone and never sent it.
