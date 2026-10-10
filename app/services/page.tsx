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
        title="B2B parcel distribution across Yorkshire"
        description="Multi-drop courier rounds, dedicated XLWB fleet capacity, peak overflow, and express van freight from Leeds, Bradford, York and Doncaster."
      />
      <Services detailed />
    </>
  );
}
