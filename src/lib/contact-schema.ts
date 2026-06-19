import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name.")
    .max(80, "Name must be under 80 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(/^[+()\d\s-]+$/, "Please use digits and + - ( ) symbols only."),
  message: z
    .string()
    .min(20, "Tell us a bit more so we can help properly.")
    .max(1200, "Message must be under 1200 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
