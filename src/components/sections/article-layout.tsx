import type { ReactNode } from "react";
import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/ui/container";

type ArticleLayoutProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  /** Set to false on long legal pages. */
  showCta?: boolean;
};

/** Shared shell for the existing service landing pages. */
export function ArticleLayout({ eyebrow, title, children, showCta = true }: ArticleLayoutProps) {
  return (
    <article>
      <Container className="max-w-3xl py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">{title}</h1>
        <div className="mt-6 space-y-4 text-base leading-8 text-muted">{children}</div>
        {showCta ? (
          <Button href="/contact?role=client" className="mt-8">
            Request Fleet Capacity
          </Button>
        ) : null}
      </Container>
    </article>
  );
}
