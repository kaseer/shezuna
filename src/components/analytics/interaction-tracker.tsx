"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

type EventPayload = {
  action: "click" | "change" | "submit";
  element: string;
  path: string;
  section?: string;
  label?: string;
  href?: string;
  field?: string;
  form?: string;
};

function elementDescriptor(element: Element): string {
  const tag = element.tagName.toLowerCase();
  const id = element.getAttribute("id");
  const name = element.getAttribute("name");
  const role = element.getAttribute("role");
  const dataTrack = element.getAttribute("data-track");

  const parts = [tag];
  if (id) parts.push(`#${id}`);
  if (name) parts.push(`[name=${name}]`);
  if (role) parts.push(`[role=${role}]`);
  if (dataTrack) parts.push(`[data-track=${dataTrack}]`);

  return parts.join("");
}

function safeText(element: Element): string | null {
  const text = element.textContent?.trim();
  if (!text) return null;
  return text.slice(0, 70);
}

function getSectionName(element: Element): string {
  const section = element.closest("section[id], header, footer");
  if (!section) return "page";

  if (section.tagName.toLowerCase() === "header") return "header";
  if (section.tagName.toLowerCase() === "footer") return "footer";

  return section.getAttribute("id") ?? "section";
}

export function InteractionTracker() {
  useEffect(() => {
    let lastSignature = "";
    let lastAt = 0;
    const controller = new AbortController();
    const listenerOptions = { capture: true, signal: controller.signal } as const;

    const emitRaw = (payload: EventPayload) => {
      const signature = `${payload.action}|${payload.element}|${payload.path}`;
      const now = Date.now();

      // Prevent accidental duplicate emits from rapid bubbling chains.
      if (signature === lastSignature && now - lastAt < 250) {
        return;
      }

      lastSignature = signature;
      lastAt = now;
      track("ui_interaction", payload);
    };

    const emitMeaningful = (eventName: string, payload: Omit<EventPayload, "action">) => {
      track(eventName, payload);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;

      const interactive = target.closest(
        "a,button,input,select,textarea,[role='button'],[data-track]"
      );
      if (!interactive) return;

      const link = interactive instanceof HTMLAnchorElement ? interactive.href : undefined;
      const section = getSectionName(interactive);
      const payload: EventPayload = {
        action: "click",
        element: elementDescriptor(interactive),
        path: window.location.pathname,
        section,
        href: link,
      };

      const text = safeText(interactive);
      if (text) {
        payload.element = `${payload.element}:${text}`;
        payload.label = text;
      }

      emitRaw(payload);

      const dataTrack = interactive.getAttribute("data-track");
      if (dataTrack) {
        emitMeaningful(dataTrack, {
          element: payload.element,
          path: payload.path,
          section: payload.section,
          label: payload.label,
          href: payload.href,
        });
      }

      if (interactive instanceof HTMLAnchorElement) {
        if (interactive.href.startsWith("mailto:")) {
          emitMeaningful("contact_email_click", {
            element: payload.element,
            path: payload.path,
            section: payload.section,
            href: payload.href,
          });
        }

        if (interactive.href.startsWith("tel:")) {
          emitMeaningful("contact_phone_click", {
            element: payload.element,
            path: payload.path,
            section: payload.section,
            href: payload.href,
          });
        }
      }
    };

    const onChange = (event: Event) => {
      const target = event.target as Element | null;
      if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) {
        return;
      }

      emitRaw({
        action: "change",
        element: elementDescriptor(target),
        field: target.name || target.id || target.type,
        path: window.location.pathname,
        section: getSectionName(target),
      });

      const form = target.closest("form");
      const formTrack = form?.getAttribute("data-track");
      if (formTrack === "contact_form" && target.value.trim().length > 0) {
        emitMeaningful("contact_field_completed", {
          element: elementDescriptor(target),
          field: target.name || target.id || target.type,
          form: "contact_form",
          path: window.location.pathname,
          section: getSectionName(target),
        });
      }
    };

    const onSubmit = (event: Event) => {
      const target = event.target as Element | null;
      if (!(target instanceof HTMLFormElement)) return;

      emitRaw({
        action: "submit",
        element: elementDescriptor(target),
        form: target.id || target.getAttribute("name") || "form",
        path: window.location.pathname,
        section: getSectionName(target),
      });
    };

    document.addEventListener("click", onClick, listenerOptions);
    document.addEventListener("change", onChange, listenerOptions);
    document.addEventListener("submit", onSubmit, listenerOptions);

    return () => {
      controller.abort();
    };
  }, []);

  return null;
}
