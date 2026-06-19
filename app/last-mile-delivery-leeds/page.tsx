import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Last-Mile Delivery Leeds",
  description:
    "Reliable last-mile delivery services in Leeds and Yorkshire with scalable route support, proof of delivery, and dedicated account communication.",
  alternates: {
    canonical: "https://shezuna.co.uk/last-mile-delivery-leeds",
  },
};

export default function LastMileDeliveryLeedsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--color-navy-950)]">
        Last-Mile Delivery Services in Leeds
      </h1>
      <p className="mt-5 text-base leading-8 text-[color:var(--color-muted)]">
        Shezuna delivers dependable last-mile logistics support for businesses that need accurate scheduling,
        customer-first execution, and consistent route coverage across Leeds and Yorkshire.
      </p>
      <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
        Our team supports high-volume operations with proof-of-delivery reporting, SLA-focused dispatch, and clear
        communication from collection to final handover.
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
