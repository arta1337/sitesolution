import { NextResponse } from "next/server";

type LeadType = "auditoria" | "contacto";

type LeadPayload = {
  lead_type: LeadType;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  message?: string;
  // anti-spam honeypot
  company?: string;
};

// Very lightweight in-memory rate limiting (best-effort; may reset on serverless)
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 min
const RATE_LIMIT_MAX = 10;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function rateLimitOk(ip: string): boolean {
  const now = Date.now();
  const existing = ipHits.get(ip);
  if (!existing || now > existing.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (existing.count >= RATE_LIMIT_MAX) return false;
  existing.count += 1;
  ipHits.set(ip, existing);
  return true;
}

function isEmailValid(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const ip = getClientIp(req);

  if (!rateLimitOk(ip)) {
    return NextResponse.json(
      { ok: false, error: "Rate limit exceeded" },
      { status: 429 }
    );
  }

  let payload: LeadPayload | null = null;
  try {
    payload = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  // Honeypot: bots often fill hidden fields
  if (payload.company && payload.company.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const lead_type = payload.lead_type;
  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const website = (payload.website ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (lead_type !== "auditoria" && lead_type !== "contacto") {
    return NextResponse.json(
      { ok: false, error: "Invalid lead_type" },
      { status: 400 }
    );
  }
  if (!name || name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Name is required" },
      { status: 400 }
    );
  }
  if (!email || !isEmailValid(email)) {
    return NextResponse.json(
      { ok: false, error: "Valid email is required" },
      { status: 400 }
    );
  }

  // Minimal logging (replace with DB/CRM/email integration)
  const record = {
    ts: new Date().toISOString(),
    ip,
    lead_type,
    name,
    email,
    phone: phone || undefined,
    website: website || undefined,
    message: message || undefined,
    userAgent: req.headers.get("user-agent") ?? undefined,
  };

  // eslint-disable-next-line no-console
  console.log("[leads] new lead", record);

  // Optional: forward to an email provider (Resend) if env is configured
  // Set:
  // - RESEND_API_KEY
  // - LEADS_TO_EMAIL
  // - LEADS_FROM_EMAIL (optional, defaults to "SiteSolutions <onboarding@resend.dev>")
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEADS_TO_EMAIL;
  const fromEmail =
    process.env.LEADS_FROM_EMAIL ?? "SiteSolutions <onboarding@resend.dev>";

  if (resendKey && toEmail) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject: `[SiteSolutions] Novo lead (${lead_type})`,
          text: [
            `Tipo: ${lead_type}`,
            `Nome: ${name}`,
            `Email: ${email}`,
            phone ? `Telefone: ${phone}` : "",
            website ? `Website: ${website}` : "",
            message ? `Mensagem: ${message}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("[leads] resend forward failed", err);
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
