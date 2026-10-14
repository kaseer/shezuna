import type { Metadata } from "next";
import type { HubId } from "@/src/lib/site";
import { site } from "@/src/lib/site";

/**
 * Title tags stay under 60 characters and descriptions under 155.
 * Alt text names the place and the service. Do not claim a carrier partnership
 * in titles, schema, or alt text unless a written agreement exists.
 */
const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 155;

export type SeoEntry = {
  path: string;
  title: string;
  description: string;
  imageAlt: string;
  keywords: string[];
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  type: "image/png" as const,
};

function assertLimits(entry: Pick<SeoEntry, "title" | "description">) {
  if (entry.title.length > TITLE_LIMIT) {
    throw new Error(`SEO title is ${entry.title.length} characters: ${entry.title}`);
  }
  if (entry.description.length > DESCRIPTION_LIMIT) {
    throw new Error(`SEO description is ${entry.description.length} characters: ${entry.description}`);
  }
}

export const pages = {
  home: {
    path: "/",
    title: "Logistics Subcontracting Yorkshire | Shezuna",
    description:
      "Regular local drops across Yorkshire. Longer depot-to-depot and fleet-transfer work can be undertaken across the UK.",
    imageAlt: "Shezuna logistics subcontracting across Leeds, Bradford, York and Doncaster",
    keywords: [
      "logistics subcontracting Yorkshire",
      "courier fleet management UK",
      "B2B parcel distribution Yorkshire",
    ],
    changeFrequency: "weekly",
    priority: 1,
  },
  services: {
    path: "/services",
    title: "B2B Parcel Distribution Yorkshire | Shezuna",
    description:
      "Yorkshire local delivery routes, with long-distance depot-to-depot and fleet transfers across the United Kingdom.",
    imageAlt: "Shezuna parcel distribution and varied van fleet across Yorkshire",
    keywords: ["B2B parcel distribution Yorkshire", "Yorkshire van capacity", "courier fleet management UK"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  coverage: {
    path: "/coverage",
    title: "Yorkshire Logistics Coverage | Shezuna",
    description:
      "Local drops across Leeds, Bradford, York and Doncaster. Longer UK journeys are arranged from our Leeds desk.",
    imageAlt: "Map of areas Shezuna covers from Leeds: Bradford, York and Doncaster",
    keywords: ["logistics subcontracting Yorkshire", "Yorkshire van coverage"],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  subcontractors: {
    path: "/subcontractors",
    title: "Yorkshire Van Capacity | Shezuna",
    description:
      "Owners of suitable vans can ask about Yorkshire routes. Work is offered only after the rate is agreed.",
    imageAlt: "Shezuna van subcontracting routes across Yorkshire",
    keywords: ["Yorkshire van capacity", "courier fleet management UK"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  about: {
    path: "/about",
    title: "About Shezuna Yorkshire Logistics",
    description:
      "Leeds-based desk for regular Yorkshire routes, able to undertake depot-to-depot and fleet transfers across the UK.",
    imageAlt: "Shezuna logistics desk based in Leeds",
    keywords: ["logistics subcontracting Yorkshire", "Shezuna"],
    changeFrequency: "monthly",
    priority: 0.6,
  },
  contact: {
    path: "/contact",
    title: "Request Yorkshire Fleet Capacity",
    description:
      "Request a Yorkshire local route, or a longer UK journey. The Leeds desk replies with availability and a quotation.",
    imageAlt: "Contact Shezuna for Yorkshire fleet and multi-drop capacity",
    keywords: ["logistics fleet provider York", "courier subcontractor Leeds"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Shezuna",
    description: "How Shezuna handles enquiry data under the UK GDPR and the Data Protection Act 2018, including cookies and your rights.",
    imageAlt: "Shezuna privacy information",
    keywords: ["Shezuna"],
    changeFrequency: "monthly",
    priority: 0.2,
  },
  terms: {
    path: "/terms",
    title: "Terms and Conditions | Shezuna",
    description: "Terms for using the Shezuna website, including liability, intellectual property, and disputes under English law.",
    imageAlt: "Shezuna website terms",
    keywords: ["Shezuna"],
    changeFrequency: "monthly",
    priority: 0.2,
  },
} as const satisfies Record<string, SeoEntry>;

export const regions: Record<
  HubId,
  SeoEntry & { h1: string; intro: string; points: string[] }
> = {
  leeds: {
    path: "/coverage/leeds",
    title: "Courier Subcontractor Leeds | Shezuna",
    description:
      "Courier subcontractor in Leeds for multi-drop rounds and overflow. Also serving Bradford, York and Doncaster.",
    imageAlt: "Shezuna van cover arranged from Leeds",
    keywords: ["courier sub-contractor Leeds", "logistics subcontracting Yorkshire"],
    changeFrequency: "monthly",
    priority: 0.9,
    h1: "Courier subcontractor in Leeds",
    intro:
      "Leeds is our only desk. We arrange multi-drop and extra vans for Leeds when the route, the rate, and the start time are agreed.",
    points: [
      "City and ring-road multi-drop cover",
      "Extra vans when your own vehicles are already out",
      "A vehicle matched to the delivery in hand",
    ],
  },
  bradford: {
    path: "/coverage/bradford",
    title: "Bradford Local Deliveries | Shezuna",
    description:
      "Local van deliveries in Bradford for regular drops and extra cover. Also serving Leeds, York and Doncaster.",
    imageAlt: "Shezuna local van deliveries covering Bradford",
    keywords: ["van deliveries Bradford", "B2B parcel distribution Yorkshire"],
    changeFrequency: "monthly",
    priority: 0.9,
    h1: "Local van deliveries in Bradford",
    intro:
      "Bradford and the neighbouring towns are attended from Leeds, with the vehicle and the timing settled when the booking is made.",
    points: [
      "Town and urban rounds across Bradford",
      "Rate agreed for that booking",
      "Asked for when your own vans are already out",
    ],
  },
  york: {
    path: "/coverage/york",
    title: "Logistics Fleet Provider York | Shezuna",
    description:
      "Logistics fleet provider in York for dedicated vans and multi-drop work. Also serving Leeds, Bradford and Doncaster.",
    imageAlt: "Shezuna logistics fleet provider covering York",
    keywords: ["logistics fleet provider York", "logistics subcontracting Yorkshire"],
    changeFrequency: "monthly",
    priority: 0.9,
    h1: "Logistics fleet provider in York",
    intro:
      "York city and ring-road work is coordinated from our Leeds desk, with the vehicle and the timing settled when you book.",
    points: [
      "Multi-drop and dedicated vans for York",
      "Collection and delivery times agreed up front",
      "Booked through the Leeds desk",
    ],
  },
  doncaster: {
    path: "/coverage/doncaster",
    title: "Multi-Drop Fleet Capacity Doncaster",
    description:
      "Multi-drop fleet capacity in Doncaster for south Yorkshire rounds. Also serving Leeds, Bradford and York.",
    imageAlt: "Shezuna multi-drop fleet capacity in Doncaster",
    keywords: ["multi-drop fleet capacity Doncaster", "Yorkshire van cover"],
    changeFrequency: "monthly",
    priority: 0.9,
    h1: "Multi-drop fleet capacity in Doncaster",
    intro:
      "Doncaster and the surrounding south Yorkshire rounds are coordinated from Leeds, and the vehicle is confirmed once the route is agreed.",
    points: [
      "South Yorkshire multi-drop and van freight",
      "Extra vans when a client's own fleet is fully booked",
      "Handover steps agreed before the first drop",
    ],
  },
};

for (const entry of [...Object.values(pages), ...Object.values(regions)]) {
  assertLimits(entry);
}

const robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

/** Full metadata for a known URL. Titles are absolute so the layout template cannot push them over 60 characters. */
export function pageMetadata(entry: SeoEntry): Metadata {
  const canonical = entry.path === "/" ? site.url : `${site.url}${entry.path}`;

  return {
    title: { absolute: entry.title },
    description: entry.description,
    keywords: entry.keywords,
    alternates: { canonical },
    robots,
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: canonical,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [{ ...ogImage, alt: entry.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [ogImage.url],
    },
  };
}

export function regionMetadata(hub: string): Metadata | null {
  if (!isHubId(hub)) return null;
  return pageMetadata(regions[hub]);
}

export function isHubId(value: string): value is HubId {
  return value in regions;
}

/** Paths that stay in the sitemap for existing search landing pages. */
export const legacyPaths = [
  "/last-mile-delivery-leeds",
  "/fleet-delivery-solutions",
  "/logistics-subcontractor-leeds",
  "/same-day-delivery-leeds",
  "/courier-services-leeds",
] as const;

export function sitemapEntries() {
  return [...Object.values(pages), ...Object.values(regions)].map((entry) => ({
    path: entry.path,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
