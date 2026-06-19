"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, SendHorizontal } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/src/lib/contact-schema";

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
      reset();
    } catch (error) {
      setSubmitStatus("error");
      const message =
        error instanceof Error
          ? error.message
          : "Submission failed. Please call us directly at +44 113 555 0147.";
      setStatusMessage(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 rounded-3xl border border-[color:var(--color-border)] bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
      noValidate
    >
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
            {...register("name")}
          />
          {errors.name ? <p className="text-xs text-red-700">{errors.name.message}</p> : null}
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
            {...register("email")}
          />
          {errors.email ? <p className="text-xs text-red-700">{errors.email.message}</p> : null}
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
          {...register("phone")}
        />
        {errors.phone ? <p className="text-xs text-red-700">{errors.phone.message}</p> : null}
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
          {...register("message")}
        />
        {errors.message ? <p className="text-xs text-red-700">{errors.message.message}</p> : null}
      </div>

      <button
        type="submit"
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
            Request Consultation
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
    </form>
  );
}
