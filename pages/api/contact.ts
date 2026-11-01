import type { NextApiRequest, NextApiResponse } from "next";
import { profile } from "@/data/content";
import { validateContact, type ContactErrors } from "@/lib/validateContact";

type Data = { ok: true } | { ok: false; error: string; errors?: ContactErrors };

// Best-effort limiter (per server instance). Resend and the honeypot do the rest.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  // Honeypot: real visitors never fill the hidden "website" field. Pretend success.
  if (typeof req.body?.website === "string" && req.body.website.length > 0) {
    return res.status(200).json({ ok: true });
  }

  const ip = (req.headers["x-forwarded-for"]?.toString().split(",")[0] ?? req.socket.remoteAddress ?? "unknown").trim();
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, error: "Too many messages. Please try again later." });
  }

  const result = validateContact(req.body);
  if (!result.ok) {
    return res.status(400).json({ ok: false, error: "Please check the form.", errors: result.errors });
  }
  const { name, email, message } = result.values;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ ok: false, error: "Contact form is not configured yet." });
  }

  const to = process.env.CONTACT_TO_EMAIL || profile.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
  const safeName = name.replace(/[\r\n]+/g, " ");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${safeName}`,
        text: `From: ${safeName} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${escapeHtml(safeName)} &lt;${escapeHtml(email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      }),
    });

    if (!response.ok) {
      console.error("Resend error", response.status, await response.text());
      return res.status(502).json({ ok: false, error: "Could not send your message. Please try again." });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend request failed", err);
    return res.status(502).json({ ok: false, error: "Could not send your message. Please try again." });
  }
}
