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
        title="Logistics coverage for Leeds, Bradford, York and Doncaster"
        description="Leeds is the primary desk. Bradford, York and Doncaster extend the same multi-drop fleet so volume stays close to the depot."
      />
      <Coverage
        title="Choose a depot for multi-drop fleet capacity"
        description="Open a city page for courier subcontracting in Leeds, van delivery in Bradford, fleet supply in York, or Doncaster multi-drop capacity."
      />
    </>
  );
}
