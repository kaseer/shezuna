import { Container } from "@/src/components/ui/container";

const networks = ["Evri", "DPD", "Yodel"];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface/70" aria-label="Carrier networks">
      <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">Partner-ready operations</span>
          {" "}for carrier networks. Shezuna is an independent subcontractor.
        </p>
        <ul className="flex flex-wrap gap-2">
          {networks.map((name) => (
            <li
              key={name}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold tracking-wide text-ink"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
