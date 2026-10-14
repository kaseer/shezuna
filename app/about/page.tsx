import type { Metadata } from "next";
import { JsonLd } from "@/src/components/seo/json-ld";
import { PageHero } from "@/src/components/sections/page-hero";
import { WhyShezuna } from "@/src/components/sections/why-shezuna";
import { pageMetadata, pages } from "@/src/lib/seo";
import { breadcrumbSchema } from "@/src/lib/schema";
import { site } from "@/src/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(pages.about);
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="A Leeds desk for Yorkshire routes, and further when required"
        description="Regular local delivery routes and drops across Yorkshire are our principal work. We can also undertake long-distance journeys across the United Kingdom."
      />
      <section className="py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-4 text-base leading-8 text-muted">
            <p>
              Shezuna is established at 206 Roundhay Road, Leeds. Our principal work is regular local delivery routes
              and drops across Yorkshire, taking in Leeds, Bradford, York, and Doncaster. Where a journey extends
              beyond the region, we are able to travel across the United Kingdom, including depot-to-depot movements
              and fleet transfers.
            </p>
            <p>
              Businesses approach us when their own vehicles are fully committed. Drivers and fleet owners approach us
              when they have suitable vehicles they wish to place. A route is extended once the commercial terms are
              settled and, in the case of a driver, once licence, right to work, and insurance have been reviewed.
            </p>
            <p>
              The fleet is varied, and the drivers are experienced, so each booking can be matched to the delivery in
              hand, whether that is a local drop or a longer movement. The Leeds desk remains the point of contact for
              the life of the booking. Progress is confirmed with you directly, and each engagement is quoted on its own
              merits.
            </p>
          </div>
          <aside className="rounded-3xl border border-border bg-surface p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">At a glance</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Address</dt>
                <dd className="font-semibold text-ink">{site.address}</dd>
              </div>
              <div>
                <dt className="text-muted">Main focus</dt>
                <dd className="font-semibold text-ink">Regular local routes across Yorkshire</dd>
              </div>
              <div>
                <dt className="text-muted">Longer work</dt>
                <dd className="font-semibold text-ink">Depot-to-depot and fleet transfers across the UK</dd>
              </div>
              <div>
                <dt className="text-muted">Fleet</dt>
                <dd className="font-semibold text-ink">A varied fleet, with experienced drivers</dd>
              </div>
              <div>
                <dt className="text-muted">Desk</dt>
                <dd className="font-semibold text-ink">{site.hours}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
      <WhyShezuna />
    </>
  );
}
