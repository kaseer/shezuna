import type { Metadata } from "next";
import { JsonLd } from "@/src/components/seo/json-ld";
import { PageHero } from "@/src/components/sections/page-hero";
import { Subcontractors } from "@/src/components/sections/subcontractors";
import { pageMetadata, pages } from "@/src/lib/seo";
import { breadcrumbSchema } from "@/src/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(pages.subcontractors);
}

const requirements = [
  "A roadworthy van suited to the work",
  "A driving licence, right to work, and insurance you can show us",
  "Willingness to follow the handover agreed for that job",
  "Availability for Yorkshire local routes, and for longer UK journeys where you are willing to travel",
];

export default function SubcontractorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Subcontractors", path: "/subcontractors" },
        ])}
      />
      <PageHero
        eyebrow="Drivers & fleet owners"
        title="Offer capacity for Yorkshire routes, and for longer UK journeys"
        description="Owner-drivers and small fleets may place suitable vehicles on regular Yorkshire routes, and on longer journeys when a client booking requires them."
      />
      <section className="py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-border bg-surface p-7">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">What we look for</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              {requirements.map((item) => (
                <li key={item} className="rounded-xl bg-surface-muted px-4 py-3 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-border bg-surface p-7">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">What you can expect</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The terms are settled before the first route, and the Leeds desk remains your contact while you are out.
              Yorkshire local work is the core. Longer journeys across the United Kingdom are offered when a client
              booking requires them.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Tell us where you are based and which days you can cover. Assignments are coordinated from Leeds.
            </p>
          </article>
        </div>
      </section>
      <Subcontractors showSteps />
    </>
  );
}
