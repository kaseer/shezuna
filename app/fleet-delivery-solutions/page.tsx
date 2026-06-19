import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fleet Delivery Solutions",
  description:
    "Scalable fleet delivery solutions in Leeds for high-volume logistics operations, including route planning, capacity support, and SLA performance.",
  alternates: {
    canonical: "https://shezuna.co.uk/fleet-delivery-solutions",
  },
};

export default function FleetDeliverySolutionsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--color-navy-950)]">
        Fleet Delivery Solutions in Leeds
      </h1>
      <p className="mt-5 text-base leading-8 text-[color:var(--color-muted)]">
        Shezuna provides flexible fleet support for businesses that need dependable capacity across daily operations,
        growth periods, and seasonal demand spikes.
      </p>
      <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
        We help teams maintain delivery consistency with route planning, accountable communication, and practical
        subcontract execution aligned to your operational targets.
      </p>
      <Link
        href="/#contact"
        className="mt-8 inline-flex rounded-xl bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-[color:var(--color-navy-950)]"
      >
        Request A Free Logistics Assessment
      </Link>
    </main>
  );
}
