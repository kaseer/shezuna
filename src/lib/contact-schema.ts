import { z } from "zod";
import { CONTACT_SERVICE_VALUES } from "@/src/lib/contact-services";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name.")
    .max(80, "Name must be under 80 characters."),
  company: z
    .string()
    .min(2, "Please enter your company name.")
    .max(100, "Company name must be under 100 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(/^[+()\d\s-]+$/, "Please use digits and + - ( ) symbols only."),
  serviceRequired: z.enum(CONTACT_SERVICE_VALUES, {
    message: "Please choose a service.",
  }),
  weeklyDeliveries: z
    .string()
    .min(1, "Please provide estimated weekly deliveries.")
    .max(30, "Estimated weekly deliveries is too long."),
  message: z
    .string()
    .min(20, "Tell us a bit more so we can help properly.")
    .max(1200, "Message must be under 1200 characters."),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
