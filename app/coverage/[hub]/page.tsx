import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/src/components/seo/json-ld";
import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/ui/container";
import { PageHero } from "@/src/components/sections/page-hero";
import { isHubId, regionMetadata, regions } from "@/src/lib/seo";
import { breadcrumbSchema, logisticsSchema } from "@/src/lib/schema";
import { hubs } from "@/src/lib/site";

type HubPageProps = {
  params: Promise<{ hub: string }>;
};

export function generateStaticParams() {
  return (Object.keys(regions) as Array<keyof typeof regions>).map((hub) => ({ hub }));
}

export async function generateMetadata({ params }: HubPageProps): Promise<Metadata> {
  const { hub } = await params;
  const metadata = regionMetadata(hub);
  if (!metadata) return {};
  return metadata;
}

export default async function HubCoveragePage({ params }: HubPageProps) {
  const { hub } = await params;
  if (!isHubId(hub)) notFound();

  const region = regions[hub];
  const place = hubs.find((item) => item.id === hub);
  if (!place) notFound();

  return (
    <>
      <JsonLd data={logisticsSchema(hub)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Coverage", path: "/coverage" },
          { name: place.name, path: region.path },
        ])}
      />
      <PageHero eyebrow={place.role} title={region.h1} description={region.intro} />
      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              {place.name} coverage
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">{place.summary}</p>
            <ul className="mt-6 space-y-3">
              {region.points.map((point) => (
                <li key={point} className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-ink">
                  <h3 className="font-semibold">{point}</h3>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/contact?role=client&region=${hub}`}>Request {place.name} capacity</Button>
              <Button href="/coverage" variant="outline">
                All coverage areas
              </Button>
            </div>
          </div>
          <aside className="rounded-3xl border border-border bg-surface p-7">
            <h2 className="text-lg font-semibold text-ink">Operating notes</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Proximity</dt>
                <dd className="font-semibold text-ink">{place.proximity}</dd>
              </div>
              <div>
                <dt className="text-muted">Deployment</dt>
                <dd className="font-semibold text-ink">{place.deploy}</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>
    </>
  );
}
