import { Resend } from "resend";

let resendClient: Resend | null = null;
let cachedApiKey: string | null = null;

export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  if (!resendClient || cachedApiKey !== apiKey) {
    resendClient = new Resend(apiKey);
    cachedApiKey = apiKey;
  }

  return resendClient;
}
