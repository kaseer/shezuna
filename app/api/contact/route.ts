import { NextResponse } from "next/server";
import { contactSchema } from "@/src/lib/contact-schema";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Validation failed.", errors: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Integrate Resend or Nodemailer here to send to your business inbox.
  return NextResponse.json({ message: "Contact request received." }, { status: 200 });
}
