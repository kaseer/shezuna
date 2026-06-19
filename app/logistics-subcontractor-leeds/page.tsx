import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logistics Subcontractor Leeds",
  description:
    "Leeds logistics subcontractor support for carriers and delivery operators requiring reliable route execution, scalable coverage, and operational consistency.",
  alternates: {
    canonical: "https://shezuna.co.uk/logistics-subcontractor-leeds",
  },
};

export default function LogisticsSubcontractorLeedsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--color-navy-950)]">
        Logistics Subcontractor Support in Leeds
      </h1>
      <p className="mt-5 text-base leading-8 text-[color:var(--color-muted)]">
        Shezuna offers contract-ready subcontract delivery support for carriers and logistics operators across Leeds and
        Yorkshire.
      </p>
      <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
        Our Leeds-based team supports high-volume operations with dependable route management, proof-of-delivery
        standards, and responsive communication workflows.
      </p>
      <Link
        href="/#contact"
        className="mt-8 inline-flex rounded-xl bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-[color:var(--color-navy-950)]"
      >
        Get A Delivery Quote Today
      </Link>
    </main>
  );
}
