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
        title="A Yorkshire desk for fleets that need to stay reliable"
        description="Shezuna helps carriers and businesses cover multi-drop and dedicated van work without standing up a yard of their own."
      />
      <section className="py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-4 text-base leading-8 text-muted">
            <p>
              We are based in Leeds and operate across Bradford, York, and Doncaster. The work is practical: vetted
              drivers, parcel-size rate cards, and a desk that stays in touch while routes are live.
            </p>
            <p>
              Clients use Shezuna when their own fleet is full, when a carrier network needs a subcontract partner, or
              when peak volume should not become missed deliveries. Subcontractors use Shezuna when they have LWB or
              XLWB capacity and want regular rounds.
            </p>
            <p>
              The operating promise is simple. Match the van to the parcel, release it from the nearest depot, and keep
              communication clear until the handover is done.
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
                <dt className="text-muted">Hubs</dt>
                <dd className="font-semibold text-ink">Leeds, Bradford, York, Doncaster</dd>
              </div>
              <div>
                <dt className="text-muted">Fleet</dt>
                <dd className="font-semibold text-ink">LWB and XLWB vans</dd>
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
