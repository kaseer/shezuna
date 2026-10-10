"use client";

import { cloneElement, isValidElement, useState, type ReactElement, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { track } from "@vercel/analytics";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, Loader2, SendHorizontal } from "lucide-react";
import { toast } from "sonner";
import {
  contactSchema,
  REGION_LABELS,
  REGION_VALUES,
  ROLE_LABELS,
  ROLE_VALUES,
  type ContactFormValues,
  type LeadRegion,
  type LeadRole,
} from "@/src/lib/contact-schema";
import { cn } from "@/src/lib/utils";

type LeadFormProps = {
  defaultRole?: LeadRole;
  defaultRegion?: LeadRegion;
  idPrefix?: string;
};

type SubmitStatus = "idle" | "success" | "error";

const fieldClass =
  "h-12 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-ink shadow-sm transition placeholder:text-muted/70 focus:border-electric";

export function LeadForm({ defaultRole, defaultRegion, idPrefix = "lead" }: LeadFormProps) {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      role: defaultRole ?? ("" as ContactFormValues["role"]),
      region: defaultRegion ?? ("" as ContactFormValues["region"]),
      message: "",
      website: "",
    },
  });

  const fieldId = (name: string) => `${idPrefix}-${name}`;

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus("idle");
    setStatusMessage("");
    track("contact_form_submit_attempt", {
      path: window.location.pathname,
      form: "lead_form",
      role: values.role,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const raw = await response.text();
      let payload: { message?: string; detail?: string } = {};
      if (raw) {
        try {
          payload = JSON.parse(raw) as { message?: string; detail?: string };
        } catch {
          payload = { message: raw };
        }
      }

      if (!response.ok) {
        throw new Error(
          payload.detail ?? payload.message ?? `We could not submit your request. ${response.status}`,
        );
      }

      setSubmitStatus("success");
      setStatusMessage("Thanks. Our team will contact you shortly.");
      toast.success("Thanks. Our team will contact you shortly.");
      track("contact_form_submit_success", { path: window.location.pathname, form: "lead_form" });
      reset({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: defaultRole ?? ("" as ContactFormValues["role"]),
        region: defaultRegion ?? ("" as ContactFormValues["region"]),
        message: "",
        website: "",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Submission failed. Please call us on 0113 834 3555.";
      setSubmitStatus("error");
      setStatusMessage(message);
      toast.error(message);
      track("contact_form_submit_failed", {
        path: window.location.pathname,
        form: "lead_form",
        reason: message.slice(0, 120),
      });
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitStatus === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex min-h-[28rem] flex-col items-start justify-center rounded-3xl border border-emerald/30 bg-surface p-8 shadow-xl shadow-navy-950/5"
            role="status"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/15 text-emerald">
              <CircleCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">Request received</h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-muted">{statusMessage}</p>
            <button
              type="button"
              className="mt-6 text-sm font-semibold text-electric"
              onClick={() => setSubmitStatus("idle")}
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            id={`${idPrefix}-form`}
            data-track="contact_form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid gap-5 rounded-3xl border border-border bg-surface p-6 shadow-xl shadow-navy-950/5 sm:p-8"
          >
            <fieldset disabled={isSubmitting} className="contents">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" id={fieldId("name")} error={errors.name?.message}>
                  <input id={fieldId("name")} type="text" autoComplete="name" className={fieldClass} {...register("name")} />
                </Field>
                <Field label="Email" id={fieldId("email")} error={errors.email?.message}>
                  <input id={fieldId("email")} type="email" autoComplete="email" className={fieldClass} {...register("email")} />
                </Field>
                <Field label="Phone number" id={fieldId("phone")} error={errors.phone?.message}>
                  <input id={fieldId("phone")} type="tel" autoComplete="tel" className={fieldClass} {...register("phone")} />
                </Field>
                <Field label="Company name" id={fieldId("company")} error={errors.company?.message}>
                  <input
                    id={fieldId("company")}
                    type="text"
                    autoComplete="organization"
                    className={fieldClass}
                    {...register("company")}
                  />
                </Field>
                <Field label="Role" id={fieldId("role")} error={errors.role?.message}>
                  <select id={fieldId("role")} className={cn(fieldClass, "bg-background")} {...register("role")}>
                    <option value="" disabled>
                      Select your role
                    </option>
                    {ROLE_VALUES.map((value) => (
                      <option key={value} value={value}>
                        {ROLE_LABELS[value]}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Region" id={fieldId("region")} error={errors.region?.message}>
                  <select id={fieldId("region")} className={cn(fieldClass, "bg-background")} {...register("region")}>
                    <option value="" disabled>
                      Select a region
                    </option>
                    {REGION_VALUES.map((value) => (
                      <option key={value} value={value}>
                        {REGION_LABELS[value]}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor={fieldId("website")}>Website</label>
                <input id={fieldId("website")} type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              <Field label="Message" id={fieldId("message")} error={errors.message?.message}>
                <textarea
                  id={fieldId("message")}
                  rows={5}
                  className={cn(fieldClass, "h-auto py-3")}
                  {...register("message")}
                />
              </Field>

              <button
                type="submit"
                data-track="contact_form_submit_click"
                disabled={isSubmitting}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-electric px-5 text-sm font-semibold text-on-electric transition hover:-translate-y-0.5 hover:bg-electric-strong disabled:cursor-not-allowed disabled:opacity-65"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending
                  </>
                ) : (
                  <>
                    <SendHorizontal className="h-4 w-4" aria-hidden="true" />
                    Request Fleet Capacity
                  </>
                )}
              </button>

              <p
                aria-live="polite"
                className={submitStatus === "error" ? "text-sm text-red-700 dark:text-red-300" : "sr-only"}
              >
                {statusMessage}
              </p>
            </fieldset>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  const describedBy = error ? `${id}-error` : undefined;
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<{ "aria-invalid"?: boolean; "aria-describedby"?: string }>, {
        "aria-invalid": Boolean(error) || undefined,
        "aria-describedby": describedBy,
      })
    : children;

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      {control}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-700 dark:text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
