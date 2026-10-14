import type { Metadata } from "next";
import { JsonLd } from "@/src/components/seo/json-ld";
import { ContactSection } from "@/src/components/sections/contact-section";
import { PageHero } from "@/src/components/sections/page-hero";
import { REGION_VALUES, ROLE_VALUES, type LeadRegion, type LeadRole } from "@/src/lib/contact-schema";
import { pageMetadata, pages } from "@/src/lib/seo";
import { breadcrumbSchema } from "@/src/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(pages.contact);
}

type ContactPageProps = {
  searchParams: Promise<{ role?: string; region?: string }>;
};

function isRole(value: string | undefined): value is LeadRole {
  return ROLE_VALUES.includes(value as LeadRole);
}

function isRegion(value: string | undefined): value is LeadRegion {
  return REGION_VALUES.includes(value as LeadRegion);
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const role = isRole(params.role) ? params.role : undefined;
  const region = isRegion(params.region) ? params.region : undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Discuss a Yorkshire route, or a longer UK journey"
        description="Tell us whether you need a regular Yorkshire route or a longer journey across the United Kingdom. The Leeds desk replies with availability and a quotation."
      />
      <ContactSection defaultRole={role} defaultRegion={region} />
    </>
  );
}
