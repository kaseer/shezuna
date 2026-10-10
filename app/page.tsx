import type { Metadata } from "next";
import { JsonLd } from "@/src/components/seo/json-ld";
import { ContactSection } from "@/src/components/sections/contact-section";
import { Coverage } from "@/src/components/sections/coverage";
import { Hero } from "@/src/components/sections/hero";
import { Services } from "@/src/components/sections/services";
import { Subcontractors } from "@/src/components/sections/subcontractors";
import { TrustBar } from "@/src/components/sections/trust-bar";
import { WhyShezuna } from "@/src/components/sections/why-shezuna";
import { pageMetadata, pages } from "@/src/lib/seo";
import { breadcrumbSchema, logisticsSchema } from "@/src/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(pages.home);
}

export default function Home() {
  return (
    <>
      <JsonLd data={logisticsSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />
      <TrustBar />
      <Coverage />
      <Services />
      <WhyShezuna />
      <Subcontractors />
      <ContactSection />
    </>
  );
}
