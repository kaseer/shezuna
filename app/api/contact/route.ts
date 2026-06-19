import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/src/lib/contact-schema";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "ops@shezuna.co.uk";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Shezuna Website <onboarding@resend.dev>";

export async function POST(request: Request) {
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

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: email,
    subject: `New enquiry from ${name} — Shezuna`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0f172a">
        <div style="background:#081425;padding:28px 32px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:20px;color:#ffffff">
            New Contact Enquiry — <span style="color:#f59e0b">Shezuna</span>
          </h1>
        </div>
        <div style="background:#f8fafc;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;font-size:13px;color:#64748b;width:120px;vertical-align:top">Name</td>
              <td style="padding:10px 0;font-size:15px;font-weight:600">${name}</td>
            </tr>
            <tr style="border-top:1px solid #e2e8f0">
              <td style="padding:10px 0;font-size:13px;color:#64748b;vertical-align:top">Email</td>
              <td style="padding:10px 0;font-size:15px">
                <a href="mailto:${email}" style="color:#1d4ed8">${email}</a>
              </td>
            </tr>
            <tr style="border-top:1px solid #e2e8f0">
              <td style="padding:10px 0;font-size:13px;color:#64748b;vertical-align:top">Phone</td>
              <td style="padding:10px 0;font-size:15px">
                <a href="tel:${phone}" style="color:#1d4ed8">${phone}</a>
              </td>
            </tr>
            <tr style="border-top:1px solid #e2e8f0">
              <td style="padding:10px 0;font-size:13px;color:#64748b;vertical-align:top">Message</td>
              <td style="padding:10px 0;font-size:15px;line-height:1.6;white-space:pre-wrap">${message}</td>
            </tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;font-size:13px;color:#92400e">
            Reply directly to this email to respond to ${name}.
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { message: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Contact request received." }, { status: 200 });
}

