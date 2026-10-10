"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Logo } from "@/src/components/ui/logo";
import { ThemeToggle } from "@/src/components/theme/theme-toggle";
import { navLinks } from "@/src/lib/site";
import { cn } from "@/src/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 8);
  });

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-shadow",
        scrolled
          ? "border-border/80 bg-background/85 shadow-sm shadow-navy-950/5"
          : "border-transparent bg-background/70",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-5 sm:px-6 lg:px-8" aria-label="Primary">
        <Logo />

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-track={`nav_${link.label.toLowerCase().replace(/\s+/g, "_")}`}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                isActive(pathname, link.href)
                  ? "bg-surface text-ink shadow-sm"
                  : "text-muted hover:text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact?role=client"
            data-track="nav_request_capacity"
            className="hidden h-10 items-center rounded-full bg-electric px-4 text-sm font-semibold text-on-electric shadow-sm transition hover:-translate-y-0.5 hover:bg-electric-strong sm:inline-flex"
          >
            Request Fleet Capacity
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-border bg-background xl:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-3 py-3 text-sm font-medium",
                    isActive(pathname, link.href) ? "bg-surface-muted text-ink" : "text-muted hover:bg-surface-muted hover:text-ink",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact?role=client"
                onClick={close}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-electric text-sm font-semibold text-on-electric"
              >
                Request Fleet Capacity
              </Link>
              <Link
                href="/contact?role=subcontractor"
                onClick={close}
                className="inline-flex h-11 items-center justify-center rounded-full border border-border text-sm font-semibold text-ink"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
