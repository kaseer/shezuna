"use client";

import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "shezuna-theme";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
}

/** Switches the document theme. Icons follow the `.dark` class so the control does not flash. */
export function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      data-track="theme_toggle"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/70 text-ink transition hover:border-electric/40"
      onClick={() => applyTheme(!document.documentElement.classList.contains("dark"))}
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
