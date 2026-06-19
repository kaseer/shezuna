import { NextResponse } from "next/server";
import { contactSchema } from "@/src/lib/contact-schema";
import { EmailTemplate } from "@/src/components/email-template";
import { getResendClient } from "@/src/lib/resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "ops@shezuna.co.uk";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Shezuna Website <no-reply@shezuna.co.uk>";
const FALLBACK_FROM_EMAIL = "Shezuna Website <onboarding@resend.dev>";
const TEST_RECIPIENT = process.env.RESEND_TEST_RECIPIENT;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 6;

const requestLog = new Map<string, number[]>();

type JsonBody = {
  message: string;
  detail?: string;
  errors?: unknown;
};

type ResendErrorLike = {
  message?: string;
  code?: string | null;
  name?: string | null;
  statusCode?: number | null;
};

function response(status: number, body: JsonBody) {
  return NextResponse.json(body, { status });
}

function success(message = "Contact request received.") {
  return response(200, { message });
}

function fail(status: number, message: string, detail?: string, errors?: unknown) {
  return response(status, { message, detail, errors });
}

function isDomainNotVerified(error: ResendErrorLike | null | undefined): boolean {
  if (!error) return false;
  const code = error.code?.toLowerCase();
  if (code === "domain_not_verified" || code === "from_domain_not_verified") {
    return true;
  }

  const message = error.message?.toLowerCase() ?? "";
  return message.includes("domain") && message.includes("not verified");
}

function isTestingModeRestriction(error: ResendErrorLike | null | undefined): boolean {
  if (!error) return false;
  const code = error.code?.toLowerCase();
  if (code === "testing_email_restricted" || code === "testing_mode_restricted") {
    return true;
  }

  const message = error.message?.toLowerCase() ?? "";
  return message.includes("only send testing emails to your own email address");
}

function sanitizeText(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entries = requestLog.get(ip) ?? [];
  const valid = entries.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (valid.length >= RATE_LIMIT_MAX) {
    requestLog.set(ip, valid);
    return true;
  }

  valid.push(now);
  requestLog.set(ip, valid);
  return false;
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return fail(429, "Too many requests. Please try again in a minute.");
    }

    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return fail(400, "Validation failed.", undefined, parsed.error.flatten());
    }

    const resend = getResendClient();
    if (!resend) {
      console.error("[contact] RESEND_API_KEY is not set — email not sent.");
      return fail(503, "Email service is not configured.");
    }

    if (parsed.data.website && parsed.data.website.length > 0) {
      return success();
    }

    const name = sanitizeText(parsed.data.name);
    const company = sanitizeText(parsed.data.company);
    const email = sanitizeText(parsed.data.email);
    const phone = sanitizeText(parsed.data.phone);
    const serviceRequired = sanitizeText(parsed.data.serviceRequired);
    const weeklyDeliveries = sanitizeText(parsed.data.weeklyDeliveries);
    const message = sanitizeText(parsed.data.message);

    const emailPayload = {
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New enquiry from ${name} — Shezuna`,
      react: EmailTemplate({
        name,
        company,
        email,
        phone,
        serviceRequired,
        weeklyDeliveries,
        message,
      }),
    };

    const firstAttempt = await resend.emails.send({
      from: FROM_EMAIL,
      ...emailPayload,
    });

    let sendError: ResendErrorLike | null | undefined = firstAttempt.error;

    // Prefer stable error codes first, then fallback to message matching.
    if (isDomainNotVerified(sendError)) {
      const fallbackAttempt = await resend.emails.send({
        from: FALLBACK_FROM_EMAIL,
        ...emailPayload,
      });
      sendError = fallbackAttempt.error;
    }

    // If account is in testing mode, retry to the configured owner inbox.
    if (isTestingModeRestriction(sendError) && TEST_RECIPIENT) {
      const testingAttempt = await resend.emails.send({
        from: FALLBACK_FROM_EMAIL,
        ...emailPayload,
        to: [TEST_RECIPIENT],
      });
      sendError = testingAttempt.error;
    }

    if (sendError) {
      console.error("[contact] Resend error:", sendError);
      const detail = isTestingModeRestriction(sendError)
        ? "Resend account is in testing mode. Verify your domain in Resend or set RESEND_TEST_RECIPIENT to your Resend owner inbox."
        : sendError.message;

      return fail(500, "Failed to send email. Please try again.", detail);
    }

    return success();
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown server error.";
    console.error("[contact] Unexpected error:", error);
    return fail(500, "Failed to send email. Please try again.", detail);
  }
}

