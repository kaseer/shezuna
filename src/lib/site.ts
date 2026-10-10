export const site = {
  name: "Shezuna",
  url: "https://shezuna.co.uk",
  email: "ops@shezuna.co.uk",
  phoneDisplay: "0113 834 3555",
  phoneHref: "tel:01138343555",
  streetAddress: "206 Roundhay Road",
  locality: "Leeds",
  postalCode: "LS8 5AA",
  address: "206 Roundhay Road, Leeds, LS8 5AA",
  mapHref: "https://www.google.com/maps/search/?api=1&query=206+Roundhay+Road%2C+Leeds%2C+LS8+5AA",
  hours: "Mon–Sat, 07:00–21:00",
  description:
    "Shezuna is a Yorkshire logistics partner for fleet capacity, multi-drop courier work, and peak overflow. Depots cover Leeds, Bradford, York, and Doncaster.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/coverage", label: "Coverage Areas" },
  { href: "/subcontractors", label: "Subcontractors" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const stats = [
  { value: "100%", label: "On-time delivery" },
  { value: "50+", label: "Active vans" },
  { value: "Yorkshire", label: "Wide coverage" },
] as const;

export type HubId = "leeds" | "bradford" | "york" | "doncaster";

export type Hub = {
  id: HubId;
  name: string;
  role: string;
  proximity: string;
  deploy: string;
  summary: string;
  /** Position inside the coverage map viewBox (0–100). */
  x: number;
  y: number;
};

export const hubs: Hub[] = [
  {
    id: "leeds",
    name: "Leeds",
    role: "Primary hub",
    proximity: "City-centre depot access",
    deploy: "Typically on the road within the hour",
    summary:
      "The main multi-drop base for dense West Yorkshire rounds, trunk collections, and same-day fleet release.",
    x: 46,
    y: 54,
  },
  {
    id: "bradford",
    name: "Bradford",
    role: "West Yorkshire",
    proximity: "Short hop from the Leeds hub",
    deploy: "Fast cross-city deployment",
    summary:
      "Overflow and dedicated rounds for Bradford and the surrounding towns, staged from a nearby depot.",
    x: 34,
    y: 48,
  },
  {
    id: "york",
    name: "York",
    role: "Northern hub",
    proximity: "City and ring-road coverage",
    deploy: "Same-day release from the York depot",
    summary:
      "Northern coverage for city drops and surrounding routes without pulling vans off the Leeds core.",
    x: 62,
    y: 36,
  },
  {
    id: "doncaster",
    name: "Doncaster",
    role: "South Yorkshire",
    proximity: "Gateway depot for the south",
    deploy: "Rapid south-Yorkshire deployment",
    summary:
      "South Yorkshire capacity for multi-drop and freight handover, linked back to the Leeds control desk.",
    x: 56,
    y: 72,
  },
];

export type ServiceIcon = "route" | "truck" | "calendar" | "building";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    slug: "multi-drop",
    title: "Multi-Drop Courier Solutions",
    summary:
      "Evri, DPD, and Yodel partner-ready rounds with drivers who already know dense Yorkshire postcodes.",
    detail:
      "Shezuna runs multi-drop courier work for carrier networks and shippers that need consistent scan compliance, predictable handover, and coverage that can grow by the parcel rather than by the contract.",
    points: [
      "Network-ready scanning and proof of delivery",
      "Urban and suburban rounds across the four hubs",
      "Volume that scales per parcel, not per fixed fleet",
    ],
    icon: "route",
  },
  {
    slug: "dedicated-fleet",
    title: "Dedicated Fleet Subcontracting",
    summary:
      "LWB and XLWB vans assigned to your lanes, with a named desk for dispatch and exceptions.",
    detail:
      "When a route needs the same van and driver pattern every day, we subcontract dedicated long-wheelbase and extra-long-wheelbase capacity so your operation keeps its rhythm.",
    points: [
      "LWB and XLWB vans matched to parcel profile",
      "Standing routes or short-term dedicated blocks",
      "Direct communication with the operating desk",
    ],
    icon: "truck",
  },
  {
    slug: "overflow",
    title: "Overflow & Peak Capacity Management",
    summary:
      "Extra vans for peak, promotions, and days when your own fleet is already fully booked.",
    detail:
      "Peak weeks and failed collections do not have to spill into missed SLAs. Shezuna holds overflow capacity that can be released against a clear rate card and a defined depot.",
    points: [
      "Pre-agreed peak windows",
      "Same rate-card logic as core volume",
      "Coverage staged from the nearest hub",
    ],
    icon: "calendar",
  },
  {
    slug: "b2b-express",
    title: "B2B Express & Freight Logistics",
    summary:
      "Time-critical business deliveries and pallet-friendly van freight between Yorkshire sites.",
    detail:
      "For site-to-site and customer-critical freight, we run express van movements with a single point of contact from collection through to signed handover.",
    points: [
      "Booked collections and timed deliveries",
      "Business-to-business handover standards",
      "Freight that fits LWB and XLWB vans",
    ],
    icon: "building",
  },
];

export const valueProps = [
  {
    title: "Vetted Drivers",
    description:
      "Drivers are checked, briefed, and matched to the work. You get people who already understand multi-drop discipline.",
    icon: "shield" as const,
  },
  {
    title: "Parcel-Size Based Rate Cards",
    description:
      "Pricing follows parcel size and volume, so capacity can scale without renegotiating the whole fleet.",
    icon: "receipt" as const,
  },
  {
    title: "Real-time Tracking & Communication",
    description:
      "Live updates from the desk when a route shifts, a scan fails, or a collection needs a new slot.",
    icon: "radio" as const,
  },
  {
    title: "Fleet Scale Capability",
    description:
      "Start with a handful of vans and add LWB or XLWB capacity across four depots as volume lands.",
    icon: "layers" as const,
  },
];

export const subcontractorBenefits = [
  "Flexible rates agreed up front",
  "Consistent daily volume",
  "Rapid onboarding onto live routes",
] as const;

export const onboardingSteps = [
  {
    step: "01",
    title: "Tell us your capacity",
    description: "Van type, home depot, and the days you can run. LWB and XLWB are the core of the fleet.",
  },
  {
    step: "02",
    title: "We confirm the fit",
    description: "A short compliance check, then a rate conversation based on the rounds we actually have.",
  },
  {
    step: "03",
    title: "You start on live work",
    description: "Induction onto the desk, the scan process, and a first route from the nearest hub.",
  },
] as const;
