import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Same-Day Delivery Leeds",
  description:
    "Professional same-day delivery in Leeds and Yorkshire with responsive dispatch, reliable drivers, and transparent communication.",
  alternates: {
    canonical: "https://shezuna.co.uk/same-day-delivery-leeds",
  },
};

export default function SameDayDeliveryLeedsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--color-navy-950)]">
        Same-Day Delivery Services in Leeds
      </h1>
      <p className="mt-5 text-base leading-8 text-[color:var(--color-muted)]">
        Shezuna supports urgent same-day delivery requirements with responsive dispatch, dependable route execution,
        and professional handover standards.
      </p>
      <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
        Built for business-critical deliveries, our Leeds team keeps communication clear and timelines controlled from
        pickup to drop-off.
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
