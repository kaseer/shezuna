import type { ReactNode } from "react";
import { Container } from "@/src/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
