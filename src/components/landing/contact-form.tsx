"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { track } from "@vercel/analytics";
import { Loader2, SendHorizontal } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, type ContactFormValues } from "@/src/lib/contact-schema";
import { CONTACT_SERVICE_LABELS, CONTACT_SERVICE_VALUES } from "@/src/lib/contact-services";

type SubmitStatus = "idle" | "success" | "error";

export function ContactForm() {
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
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus("idle");
    setStatusMessage("");
    track("contact_form_submit_attempt", {
      path: window.location.pathname,
      form: "contact_form",
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
        const message =
          payload.detail ??
          payload.message ??
          `We could not submit your request. ${response.status} ${response.statusText}`;
        throw new Error(message);
      }

      setSubmitStatus("success");
      setStatusMessage("Thanks. Our team will contact you shortly.");
      toast.success("Thanks. Our team will contact you shortly.");
      track("contact_form_submit_success", {
        path: window.location.pathname,
        form: "contact_form",
      });
      reset();
    } catch (error) {
      setSubmitStatus("error");
      const message =
        error instanceof Error
          ? error.message
          : "Submission failed. Please call us directly at 0113 834 3555.";
      setStatusMessage(message);
      toast.error(message);
      track("contact_form_submit_failed", {
        path: window.location.pathname,
        form: "contact_form",
        reason: message.slice(0, 120),
      });
    }
  };

  return (
    <form
      id="contact-form"
      data-track="contact_form"
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 rounded-3xl border border-[color:var(--color-border)] bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
      noValidate
    >
      <fieldset disabled={isSubmitting} className="contents">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-[color:var(--color-navy-900)]">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className="h-11 rounded-xl border border-[color:var(--color-border)] px-3 text-sm outline-none transition focus:border-[color:var(--color-navy-600)] focus:ring-2 focus:ring-[color:var(--color-accent)]/35"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? <p id="name-error" className="text-xs text-red-700">{errors.name.message}</p> : null}
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-[color:var(--color-navy-900)]">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="h-11 rounded-xl border border-[color:var(--color-border)] px-3 text-sm outline-none transition focus:border-[color:var(--color-navy-600)] focus:ring-2 focus:ring-[color:var(--color-accent)]/35"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? <p id="email-error" className="text-xs text-red-700">{errors.email.message}</p> : null}
        </div>

        <div className="grid gap-2">
          <label htmlFor="company" className="text-sm font-semibold text-[color:var(--color-navy-900)]">
            Company Name
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className="h-11 rounded-xl border border-[color:var(--color-border)] px-3 text-sm outline-none transition focus:border-[color:var(--color-navy-600)] focus:ring-2 focus:ring-[color:var(--color-accent)]/35"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            {...register("company")}
          />
          {errors.company ? <p id="company-error" className="text-xs text-red-700">{errors.company.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-semibold text-[color:var(--color-navy-900)]">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className="h-11 rounded-xl border border-[color:var(--color-border)] px-3 text-sm outline-none transition focus:border-[color:var(--color-navy-600)] focus:ring-2 focus:ring-[color:var(--color-accent)]/35"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone ? <p id="phone-error" className="text-xs text-red-700">{errors.phone.message}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="serviceRequired" className="text-sm font-semibold text-[color:var(--color-navy-900)]">
            Service Required
          </label>
          <select
            id="serviceRequired"
            className="h-11 rounded-xl border border-[color:var(--color-border)] bg-white px-3 text-sm outline-none transition focus:border-[color:var(--color-navy-600)] focus:ring-2 focus:ring-[color:var(--color-accent)]/35"
            aria-invalid={Boolean(errors.serviceRequired)}
            aria-describedby={errors.serviceRequired ? "serviceRequired-error" : undefined}
            defaultValue=""
            {...register("serviceRequired")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {CONTACT_SERVICE_VALUES.map((serviceValue) => (
              <option key={serviceValue} value={serviceValue}>
                {CONTACT_SERVICE_LABELS[serviceValue]}
              </option>
            ))}
          </select>
          {errors.serviceRequired ? <p id="serviceRequired-error" className="text-xs text-red-700">{errors.serviceRequired.message}</p> : null}
        </div>

        <div className="grid gap-2">
          <label htmlFor="weeklyDeliveries" className="text-sm font-semibold text-[color:var(--color-navy-900)]">
            Estimated Weekly Deliveries
          </label>
          <input
            id="weeklyDeliveries"
            type="text"
            placeholder="e.g. 250"
            className="h-11 rounded-xl border border-[color:var(--color-border)] px-3 text-sm outline-none transition focus:border-[color:var(--color-navy-600)] focus:ring-2 focus:ring-[color:var(--color-accent)]/35"
            aria-invalid={Boolean(errors.weeklyDeliveries)}
            aria-describedby={errors.weeklyDeliveries ? "weeklyDeliveries-error" : undefined}
            {...register("weeklyDeliveries")}
          />
          {errors.weeklyDeliveries ? <p id="weeklyDeliveries-error" className="text-xs text-red-700">{errors.weeklyDeliveries.message}</p> : null}
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-[color:var(--color-navy-900)]">
          Tell us about your logistics needs
        </label>
        <textarea
          id="message"
          rows={5}
          className="rounded-xl border border-[color:var(--color-border)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--color-navy-600)] focus:ring-2 focus:ring-[color:var(--color-accent)]/35"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? <p id="message-error" className="text-xs text-red-700">{errors.message.message}</p> : null}
      </div>

      <button
        type="submit"
        data-track="contact_form_submit_click"
        disabled={isSubmitting}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[color:var(--color-navy-900)] px-5 text-sm font-semibold text-white transition hover:bg-[color:var(--color-navy-700)] disabled:cursor-not-allowed disabled:opacity-65"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <SendHorizontal className="h-4 w-4" aria-hidden="true" />
            Request A Free Logistics Assessment
          </>
        )}
      </button>

      <p
        aria-live="polite"
        className={
          submitStatus === "success"
            ? "text-sm text-emerald-700"
            : submitStatus === "error"
              ? "text-sm text-red-700"
              : "sr-only"
        }
      >
        {statusMessage}
      </p>
      </fieldset>
    </form>
  );
}
