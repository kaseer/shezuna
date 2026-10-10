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
  "LWB or XLWB van in roadworthy condition",
  "Right to work and standard driver compliance",
  "Willingness to follow scan and handover process",
  "Availability aligned to a Leeds, Bradford, York, or Doncaster depot",
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
        title="Bring the van. We bring the volume."
        description="Shezuna works with owner-drivers and small fleets that have spare capacity and want regular multi-drop or dedicated work."
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
              Flexible rates agreed before the first route, consistent daily volume where the work exists, and a short
              onboarding so you are not waiting weeks to start. The desk stays available while you are out.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Most partners run from one of the four hubs. Tell us which yard is closest and the days you can cover.
            </p>
          </article>
        </div>
      </section>
      <Subcontractors showSteps />
    </>
  );
}
