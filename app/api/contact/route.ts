import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/src/lib/contact-schema";
import { EmailTemplate } from "@/src/components/email-template";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "ops@shezuna.co.uk";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Shezuna Website <no-reply@shezuna.co.uk>";
const FALLBACK_FROM_EMAIL = "Shezuna Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Validation failed.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[contact] RESEND_API_KEY is not set — email not sent.");
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 503 }
      );
    }

    // Instantiate inside handler so the build never runs without a key
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, phone, message } = parsed.data;

    const emailPayload = {
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New enquiry from ${name} — Shezuna`,
      react: EmailTemplate({ name, email, phone, message }),
    };

    const firstAttempt = await resend.emails.send({
      from: FROM_EMAIL,
      ...emailPayload,
    });

    let sendError = firstAttempt.error;

    // If the custom domain sender is not verified in Resend yet, retry with onboarding sender.
    if (
      sendError?.message?.toLowerCase().includes("domain") &&
      sendError?.message?.toLowerCase().includes("not verified")
    ) {
      const fallbackAttempt = await resend.emails.send({
        from: FALLBACK_FROM_EMAIL,
        ...emailPayload,
      });
      sendError = fallbackAttempt.error;
    }

    if (sendError) {
      console.error("[contact] Resend error:", sendError);
      return NextResponse.json(
        {
          message: "Failed to send email. Please try again.",
          detail: sendError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Contact request received." }, { status: 200 });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown server error.";
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      {
        message: "Failed to send email. Please try again.",
        detail,
      },
      { status: 500 }
    );
  }
}

