/**
 * Vercel Serverless Function: Corporate Guide Download
 *
 * Lead magnet: "The Corporate English Training Audit" PDF
 * - Stores lead in Neon PostgreSQL (corporate_guide_leads)
 * - Sends admin notification email
 * - Sends branded delivery email with PDF link + next-step CTA
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";

const sql = neon(process.env.POSTGRES_URL || "");

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const allowedOrigins = [
  "https://www.nyenglishteacher.com",
  "https://ny-eng.vercel.app",
  "http://localhost:4321",
  "http://localhost:4322",
  "http://localhost:3000",
];

const SITE_URL = "https://www.nyenglishteacher.com";

const PDF_PATH: Record<string, string> = {
  en: "/downloads/Corporate_English_Audit_EN.pdf",
  es: "/downloads/Corporate_English_Audit_ES.pdf",
};

const VIDEO_URL: Record<string, string> = {
  en: "https://3flyodgshmcrfbub.public.blob.vercel-storage.com/corporate-guide/The_Corporate_English_Audit.mp4",
  es: "https://3flyodgshmcrfbub.public.blob.vercel-storage.com/corporate-guide/Auditoria_de_Ingles_Corporativo.mp4",
};

// ============================================================================
// EMAIL TEMPLATES
// ============================================================================

function buildAdminEmailHtml(body: {
  name: string;
  email: string;
  company: string;
  language: string;
  sourcePage?: string;
}): string {
  const langLabel = body.language === "es" ? "Spanish" : "English";
  return `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; background: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
    <div style="background: #1e40af; padding: 24px 32px;">
      <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">New Corporate Guide Lead</h1>
      <p style="margin: 4px 0 0; color: #bfdbfe; font-size: 14px;">NY English Teacher &mdash; Corporate Audit PDF download</p>
    </div>
    <div style="padding: 24px 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; width: 120px;">Name</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${escapeHtml(body.name)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Email</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">
            <a href="mailto:${escapeHtml(body.email)}" style="color: #2563eb;">${escapeHtml(body.email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Company</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${escapeHtml(body.company)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Language</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${langLabel}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; color: #64748b; font-size: 13px;">Source Page</td>
          <td style="padding: 10px 12px; color: #0f172a; font-size: 12px;">${body.sourcePage ? escapeHtml(body.sourcePage) : "&mdash;"}</td>
        </tr>
      </table>
    </div>
    <div style="padding: 16px 32px; background: #f8fafc; text-align: center;">
      <p style="margin: 0; color: #94a3b8; font-size: 12px;">This lead downloaded the Corporate English Training Audit PDF.</p>
    </div>
  </div>
</body>
</html>`;
}

function buildDeliveryEmailHtml(body: {
  name: string;
  company: string;
  language: string;
}): string {
  const firstName = body.name.split(" ")[0];
  const isSpanish = body.language === "es";
  const pdfUrl = `${SITE_URL}${PDF_PATH[body.language] || PDF_PATH.en}`;
  const videoUrl = VIDEO_URL[body.language] || VIDEO_URL.en;
  const bookingUrl = isSpanish
    ? `${SITE_URL}/es/reservar/`
    : `${SITE_URL}/en/book/`;

  const copy = isSpanish
    ? {
        greeting: `Hola ${escapeHtml(firstName)},`,
        intro:
          "Gracias por descargar La Guía de Evaluación para Capacitación de Inglés Corporativo. Puede revisarla en el formato que prefiera:",
        pdfLabel: "Descargar el PDF",
        pdfCaption: "Lectura rápida. Fácil de compartir internamente.",
        videoLabel: "Ver el Video",
        videoCaption: "Prefiere escuchar en lugar de leer. Aproximadamente 10 minutos.",
        orLabel: "O",
        afterDownloadTitle: "Qué Encontrará Adentro",
        bullets: [
          "Las 7 preguntas que debe hacer a cualquier proveedor antes de firmar un contrato",
          "Las señales de alerta que indican un programa genérico disfrazado de solución personalizada",
          "Cómo definir y medir el éxito antes de invertir un peso",
        ],
        nextStepTitle: "El Siguiente Paso",
        nextStepBody:
          "Si después de revisar la guía desea discutir la situación específica de su equipo, ofrezco una llamada de diagnóstico de 30 minutos. Sin presentación de ventas. Sin presión. Una conversación directa y honesta sobre si la capacitación estructurada de inglés es la inversión correcta para su equipo en este momento.",
        ctaButton: "Agendar una Llamada de Diagnóstico",
        signoff: "Saludos cordiales,",
        signature: "Robert Cushman",
        title: "NY English Teacher",
        footer:
          "Recibes este correo porque descargaste la Guía de Evaluación Corporativa en nyenglishteacher.com",
        unsubscribe: "Si no deseas recibir más correos, responde a este mensaje.",
      }
    : {
        greeting: `Hi ${escapeHtml(firstName)},`,
        intro:
          "Thanks for downloading The Corporate English Training Audit. You can review it in whichever format you prefer:",
        pdfLabel: "Download the PDF",
        pdfCaption: "Quick read. Easy to share internally.",
        videoLabel: "Watch the Video",
        videoCaption: "Prefer to listen instead of read. About 10 minutes.",
        orLabel: "Or",
        afterDownloadTitle: "What You Will Find Inside",
        bullets: [
          "The 7 questions you should ask any provider before signing a contract",
          "The warning signs that reveal a generic program disguised as a tailored solution",
          "How to define and measure success before investing a single peso",
        ],
        nextStepTitle: "The Next Step",
        nextStepBody:
          "If after reviewing the guide you want to discuss your team's specific situation, I offer a 30-minute discovery call. No sales presentation. No pressure. A direct, honest conversation about whether structured English coaching is the right investment for your team right now.",
        ctaButton: "Book a Discovery Call",
        signoff: "Best regards,",
        signature: "Robert Cushman",
        title: "NY English Teacher",
        footer:
          "You are receiving this because you downloaded the Corporate English Training Audit on nyenglishteacher.com",
        unsubscribe:
          "If you would prefer not to receive future emails, simply reply to let me know.",
      };

  const bulletsHtml = copy.bullets
    .map(
      (b) => `
      <li style="padding: 6px 0; color: #334155; font-size: 15px; line-height: 1.5;">
        <span style="color: #2563eb; font-weight: 700; margin-right: 8px;">&rarr;</span>${b}
      </li>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; background: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff;">
    <div style="background: #1e40af; padding: 28px 32px; text-align: center;">
      <img src="https://www.nyenglishteacher.com/images/logos/new-york-english-sq-og.jpg" alt="NY English Teacher" width="60" height="60" style="border-radius: 8px; margin-bottom: 8px;" />
      <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">${copy.title}</h1>
    </div>
    <div style="padding: 32px;">
      <p style="margin: 0 0 12px; color: #0f172a; font-size: 16px;">${copy.greeting}</p>
      <p style="margin: 0 0 24px; color: #475569; font-size: 15px; line-height: 1.6;">${copy.intro}</p>

      <table style="width: 100%; border-collapse: collapse; margin: 24px 0 32px;">
        <tr>
          <td style="width: 50%; padding: 0 8px 0 0; vertical-align: top;">
            <div style="background: #eff6ff; border: 1px solid #dbeafe; border-radius: 12px; padding: 20px; text-align: center;">
              <a href="${pdfUrl}" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-bottom: 10px;">${copy.pdfLabel}</a>
              <p style="margin: 8px 0 0; color: #475569; font-size: 12px; line-height: 1.4;">${copy.pdfCaption}</p>
            </div>
          </td>
          <td style="width: 50%; padding: 0 0 0 8px; vertical-align: top;">
            <div style="background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; text-align: center;">
              <a href="${videoUrl}" style="display: inline-block; background: #0f172a; color: #ffffff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-bottom: 10px;">${copy.videoLabel}</a>
              <p style="margin: 8px 0 0; color: #475569; font-size: 12px; line-height: 1.4;">${copy.videoCaption}</p>
            </div>
          </td>
        </tr>
      </table>

      <h2 style="font-size: 16px; color: #0f172a; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.5px;">${copy.afterDownloadTitle}</h2>
      <ul style="list-style: none; padding: 0; margin: 0 0 32px;">
        ${bulletsHtml}
      </ul>

      <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 20px 24px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
        <h3 style="margin: 0 0 10px; font-size: 16px; color: #0f172a;">${copy.nextStepTitle}</h3>
        <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">${copy.nextStepBody}</p>
      </div>

      <div style="text-align: center; margin: 16px 0 32px;">
        <a href="${bookingUrl}" style="display: inline-block; background: #0f172a; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">${copy.ctaButton}</a>
      </div>

      <p style="margin: 0; color: #475569; font-size: 15px;">${copy.signoff}</p>
      <p style="margin: 4px 0 0; color: #0f172a; font-size: 15px; font-weight: 600;">${copy.signature}</p>
      <p style="margin: 2px 0 0; color: #94a3b8; font-size: 13px;">${copy.title}</p>
    </div>
    <div style="padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0; background: #f8fafc;">
      <p style="margin: 0 0 4px; color: #94a3b8; font-size: 11px;">${copy.footer}</p>
      <p style="margin: 0; color: #94a3b8; font-size: 11px;">${copy.unsubscribe}</p>
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================================================
// MAIN HANDLER
// ============================================================================

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  const origin = req.headers.origin as string;
  const allowedOrigin = allowedOrigins.includes(origin)
    ? origin
    : "https://www.nyenglishteacher.com";

  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const body = req.body || {};

    // Honeypot — bots fill hidden fields; real users do not
    if (body._gotcha) {
      res.status(200).json({ success: true });
      return;
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const company = String(body.company || "").trim();
    const language = body.language === "es" ? "es" : "en";

    if (!name || name.length < 2) {
      res.status(400).json({ success: false, error: "Invalid name" });
      return;
    }

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      res.status(400).json({ success: false, error: "Invalid email" });
      return;
    }

    if (!company || company.length < 2) {
      res.status(400).json({ success: false, error: "Invalid company" });
      return;
    }

    const sourcePage = body.sourcePage ? String(body.sourcePage).slice(0, 500) : null;
    const referrer = body.referrer ? String(body.referrer).slice(0, 500) : null;
    const userAgent = req.headers["user-agent"] || null;

    // Insert into Neon
    const rows = await sql`
      INSERT INTO corporate_guide_leads (
        name, email, company, language, source_page,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        referrer, user_agent
      ) VALUES (
        ${name}, ${email}, ${company}, ${language}, ${sourcePage},
        ${body.utmSource || null}, ${body.utmMedium || null}, ${body.utmCampaign || null}, ${body.utmContent || null}, ${body.utmTerm || null},
        ${referrer}, ${userAgent}
      ) RETURNING id
    `;

    const leadId = rows[0].id;

    // Send emails — MUST await before responding. Vercel serverless functions
    // terminate the moment res.json() returns, killing in-flight Promise.all
    // calls. Fire-and-forget here results in delivered_at staying null forever.
    if (resend) {
      const fromAddress =
        process.env.RESEND_FROM_EMAIL ||
        "NY English Teacher <onboarding@resend.dev>";
      const emailPromises: Promise<unknown>[] = [];

      if (process.env.NOTIFICATION_EMAIL) {
        emailPromises.push(
          resend.emails
            .send({
              from: fromAddress,
              to: process.env.NOTIFICATION_EMAIL,
              subject: `New Corporate Guide Lead: ${name} — ${company}`,
              html: buildAdminEmailHtml({
                name,
                email,
                company,
                language,
                sourcePage: sourcePage || undefined,
              }),
            })
            .catch((err: Error) =>
              console.error("Admin email error:", err.message),
            ),
        );
      }

      emailPromises.push(
        resend.emails
          .send({
            from: fromAddress,
            to: email,
            subject:
              language === "es"
                ? `${name.split(" ")[0]}, tu Guía de Evaluación Corporativa`
                : `${name.split(" ")[0]}, your Corporate English Training Audit`,
            html: buildDeliveryEmailHtml({ name, company, language }),
          })
          .then(async () => {
            try {
              await sql`UPDATE corporate_guide_leads SET delivered_at = NOW() WHERE id = ${leadId}`;
            } catch (e) {
              console.error("Delivery timestamp update failed:", e);
            }
          })
          .catch((err: Error) =>
            console.error("Delivery email error:", err.message),
          ),
      );

      await Promise.all(emailPromises);
    }

    res.status(200).json({
      success: true,
      lead_id: leadId,
      pdf_url: PDF_PATH[language] || PDF_PATH.en,
    });
  } catch (error) {
    console.error("Corporate guide download error:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
}
