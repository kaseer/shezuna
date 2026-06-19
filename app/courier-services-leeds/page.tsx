import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courier Services Leeds",
  description:
    "Reliable courier services in Leeds with last-mile expertise, flexible fleet support, and SLA-focused delivery performance.",
  alternates: {
    canonical: "https://shezuna.co.uk/courier-services-leeds",
  },
};

export default function CourierServicesLeedsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--color-navy-950)]">
        Courier Services in Leeds
      </h1>
      <p className="mt-5 text-base leading-8 text-[color:var(--color-muted)]">
        Shezuna delivers courier support for businesses that need dependable collection, accurate handover, and reliable
        service quality across Leeds and Yorkshire.
      </p>
      <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
        Our operations are designed for consistency and transparency, helping teams protect customer experience while
        scaling daily delivery demand.
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
