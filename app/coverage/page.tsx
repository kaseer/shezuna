import type { Metadata } from "next";
import { JsonLd } from "@/src/components/seo/json-ld";
import { Coverage } from "@/src/components/sections/coverage";
import { PageHero } from "@/src/components/sections/page-hero";
import { pageMetadata, pages } from "@/src/lib/seo";
import { breadcrumbSchema, logisticsSchema } from "@/src/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(pages.coverage);
}

export default function CoveragePage() {
  return (
    <>
      <JsonLd data={logisticsSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Coverage", path: "/coverage" },
        ])}
      />
      <PageHero
        eyebrow="Coverage"
        title="Local coverage across Yorkshire"
        description="Regular local drops across Leeds, Bradford, York, and Doncaster. Longer depot-to-depot and fleet-transfer work can be undertaken across the United Kingdom."
      />
      <Coverage
        title="Yorkshire areas we attend locally"
        description="Leeds, Bradford, York, and Doncaster are the heart of our local work. Longer UK journeys are arranged from the same Leeds desk."
      />
    </>
  );
}
