"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/55 bg-[color:var(--color-surface)]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a href="#home" onClick={closeMenu} data-track="nav_home_click" className="inline-flex items-center gap-3">
          <Image
            src="/icon.svg"
            alt="Shezuna logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-[color:var(--color-navy-950)]">
            Shezuna
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-[color:var(--color-muted)] md:flex">
          <a href="#about" data-track="nav_about_click" className="transition-colors hover:text-[color:var(--color-navy-800)]">
            About
          </a>
          <a
            href="#services"
            data-track="nav_services_click"
            className="transition-colors hover:text-[color:var(--color-navy-800)]"
          >
            Services
          </a>
          <a href="#contact" data-track="nav_contact_click" className="transition-colors hover:text-[color:var(--color-navy-800)]">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          data-track="nav_get_quote_click"
          className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-[color:var(--color-navy-950)] shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
        >
          Get A Quote
        </a>

        <button
          type="button"
          data-track="nav_menu_toggle_click"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-border)] text-[color:var(--color-navy-900)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-nav-menu" className="border-t border-[color:var(--color-border)] bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-[color:var(--color-muted)]">
            <a href="#home" onClick={closeMenu} data-track="mobile_nav_home_click" className="rounded-lg px-3 py-2 hover:bg-slate-50">
              Home
            </a>
            <a href="#about" onClick={closeMenu} data-track="mobile_nav_about_click" className="rounded-lg px-3 py-2 hover:bg-slate-50">
              About
            </a>
            <a href="#services" onClick={closeMenu} data-track="mobile_nav_services_click" className="rounded-lg px-3 py-2 hover:bg-slate-50">
              Services
            </a>
            <a href="#contact" onClick={closeMenu} data-track="mobile_nav_contact_click" className="rounded-lg px-3 py-2 hover:bg-slate-50">
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
