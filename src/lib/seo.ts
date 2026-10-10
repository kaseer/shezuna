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
      "Logistics subcontracting across Yorkshire for depot managers. Multi-drop fleet capacity in Leeds, Bradford, York and Doncaster.",
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
      "B2B parcel distribution across Yorkshire, with XLWB van contracts and overflow cover in Leeds, Bradford, York and Doncaster.",
    imageAlt: "Shezuna B2B parcel distribution and XLWB fleet capacity in Yorkshire",
    keywords: ["B2B parcel distribution Yorkshire", "XLWB van hire contract", "courier fleet management UK"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  coverage: {
    path: "/coverage",
    title: "Yorkshire Logistics Coverage | Shezuna",
    description:
      "Logistics coverage for Leeds, Bradford, York and Doncaster. Multi-drop fleet capacity released from the nearest depot.",
    imageAlt: "Map of Shezuna depot coverage in Leeds, Bradford, York and Doncaster",
    keywords: ["logistics subcontracting Yorkshire", "Yorkshire depot coverage"],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  subcontractors: {
    path: "/subcontractors",
    title: "XLWB Van Contract Partners | Shezuna",
    description:
      "XLWB and LWB owners can take multi-drop routes in Leeds, Bradford, York and Doncaster with agreed rates.",
    imageAlt: "Shezuna XLWB van subcontracting routes across Yorkshire",
    keywords: ["XLWB van hire contract", "courier fleet management UK"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  about: {
    path: "/about",
    title: "About Shezuna Yorkshire Logistics",
    description:
      "Shezuna is a Leeds-based logistics subcontracting desk covering Bradford, York and Doncaster for depot and transport teams.",
    imageAlt: "Shezuna Yorkshire logistics team based in Leeds",
    keywords: ["logistics subcontracting Yorkshire", "Shezuna"],
    changeFrequency: "monthly",
    priority: 0.6,
  },
  contact: {
    path: "/contact",
    title: "Request Yorkshire Fleet Capacity",
    description:
      "Request multi-drop fleet capacity in Leeds, Bradford, York or Doncaster. For depot, transport and procurement leads.",
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
    imageAlt: "Shezuna courier subcontractor fleet operating in Leeds",
    keywords: ["courier sub-contractor Leeds", "logistics subcontracting Yorkshire"],
    changeFrequency: "monthly",
    priority: 0.9,
    h1: "Courier subcontractor in Leeds",
    intro:
      "Leeds is the primary desk for multi-drop rounds, trunk collections, and overflow when a carrier hub needs extra vans the same day.",
    points: [
      "City-centre and ring-road multi-drop coverage",
      "Overflow capacity for peak and failed collections",
      "LWB and XLWB vans matched to the parcel profile",
    ],
  },
  bradford: {
    path: "/coverage/bradford",
    title: "Van Delivery Partner Bradford | Shezuna",
    description:
      "Van delivery partner in Bradford for B2B parcels and overflow. Also serving Leeds, York and Doncaster.",
    imageAlt: "Shezuna van delivery partner covering Bradford",
    keywords: ["van delivery partner Bradford", "B2B parcel distribution Yorkshire"],
    changeFrequency: "monthly",
    priority: 0.9,
    h1: "Van delivery partner in Bradford",
    intro:
      "Bradford rounds run from a short hop off the Leeds hub, so West Yorkshire overflow does not have to wait on a distant yard.",
    points: [
      "Urban and town rounds across Bradford",
      "Same rate-card logic as the Leeds core",
      "Fast deployment for depot managers who are already full",
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
      "York keeps northern city and ring-road work on local vans, with the Leeds desk still owning communication and exceptions.",
    points: [
      "Dedicated and multi-drop release from the York hub",
      "Timed B2B collections and handovers",
      "Capacity that does not strip the Leeds core",
    ],
  },
  doncaster: {
    path: "/coverage/doncaster",
    title: "Multi-Drop Fleet Capacity Doncaster",
    description:
      "Multi-drop fleet capacity in Doncaster for south Yorkshire rounds. Also serving Leeds, Bradford and York.",
    imageAlt: "Shezuna multi-drop fleet capacity in Doncaster",
    keywords: ["multi-drop fleet capacity Doncaster", "Evri DPD overflow delivery partner"],
    changeFrequency: "monthly",
    priority: 0.9,
    h1: "Multi-drop fleet capacity in Doncaster",
    intro:
      "Doncaster is the south Yorkshire gateway for multi-drop and freight handover, linked back to the Leeds control desk.",
    points: [
      "South Yorkshire multi-drop and van freight",
      "Overflow when a hub's own fleet is fully booked",
      "Partner-ready scanning and handover discipline",
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
