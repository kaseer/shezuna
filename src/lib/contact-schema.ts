import { z } from "zod";

export const ROLE_VALUES = ["client", "subcontractor"] as const;
export const REGION_VALUES = ["leeds", "bradford", "york", "doncaster"] as const;

export const ROLE_LABELS: Record<(typeof ROLE_VALUES)[number], string> = {
  client: "Client looking for fleet",
  subcontractor: "Subcontractor looking for routes",
};

export const REGION_LABELS: Record<(typeof REGION_VALUES)[number], string> = {
  leeds: "Leeds",
  bradford: "Bradford",
  york: "York",
  doncaster: "Doncaster",
};

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name must be under 80 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(/^[+()\d\s-]+$/, "Use digits and + - ( ) only."),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(100, "Company name must be under 100 characters."),
  role: z.enum(ROLE_VALUES, { message: "Please choose a role." }),
  region: z.enum(REGION_VALUES, { message: "Please choose a region." }),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more so we can respond properly.")
    .max(1200, "Message must be under 1200 characters."),
  /** Honeypot. Real users never see this field. */
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type LeadRole = (typeof ROLE_VALUES)[number];
export type LeadRegion = (typeof REGION_VALUES)[number];
