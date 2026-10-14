import { Container } from "@/src/components/ui/container";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface/70" aria-label="How Shezuna operates">
      <Container className="py-6">
        <p className="text-sm leading-6 text-muted">
          <span className="font-semibold text-ink">Yorkshire local delivery, first.</span> Regular routes and drops
          across the region are our principal work. For longer journeys we can travel across the United Kingdom,
          including depot-to-depot movements and fleet transfers. Shezuna undertakes each engagement in its own name.
        </p>
      </Container>
    </section>
  );
}
