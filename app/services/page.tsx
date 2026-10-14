import type { Metadata } from "next";
import { JsonLd } from "@/src/components/seo/json-ld";
import { PageHero } from "@/src/components/sections/page-hero";
import { Services } from "@/src/components/sections/services";
import { pageMetadata, pages } from "@/src/lib/seo";
import { breadcrumbSchema } from "@/src/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(pages.services);
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Yorkshire local routes, with long-distance work across the UK"
        description="Regular local delivery routes and drops across Yorkshire. Longer journeys, including depot-to-depot movements and fleet transfers, across the United Kingdom."
      />
      <Services detailed />
    </>
  );
}
