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
    "Shezuna's principal work is regular local delivery routes and drops across Yorkshire. For longer journeys, we can travel across the United Kingdom, including depot-to-depot movements and fleet transfers.",
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
  { value: "Leeds", label: "Where we are based" },
  { value: "On demand", label: "Vans when work is booked" },
  { value: "4 areas", label: "Yorkshire coverage" },
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
    role: "Home desk",
    proximity: "206 Roundhay Road, Leeds",
    deploy: "Vans arranged when the work is booked",
    summary:
      "Our base for multi-drop and dedicated van work in Leeds, and the desk for the other three areas.",
    x: 46,
    y: 54,
  },
  {
    id: "bradford",
    name: "Bradford",
    role: "West Yorkshire",
    proximity: "Covered from Leeds",
    deploy: "Start time agreed with the booking",
    summary:
      "Bradford and nearby towns, covered from the Leeds desk rather than a separate yard.",
    x: 34,
    y: 48,
  },
  {
    id: "york",
    name: "York",
    role: "North",
    proximity: "Covered from Leeds",
    deploy: "Start time agreed with the booking",
    summary: "York city and ring-road drops, booked through the Leeds desk.",
    x: 62,
    y: 36,
  },
  {
    id: "doncaster",
    name: "Doncaster",
    role: "South Yorkshire",
    proximity: "Covered from Leeds",
    deploy: "Start time agreed with the booking",
    summary: "Doncaster and south Yorkshire drops, booked through the Leeds desk.",
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
      "Regular local multi-drop routes and drops across Yorkshire, booked van by van.",
    detail:
      "Our principal work is regular local delivery routes and drops across Leeds, Bradford, York, and Doncaster. An experienced driver and a suitable vehicle are agreed, with the route and the rate, before the work begins.",
    points: [
      "Regular local rounds across Yorkshire",
      "Handover arrangements settled before the first drop",
      "Capacity introduced for the booking in hand",
    ],
    icon: "route",
  },
  {
    slug: "dedicated-fleet",
    title: "Dedicated Fleet Subcontracting",
    summary:
      "A regular Yorkshire lane covered by a vehicle drawn from a varied fleet, with the Leeds desk as your contact.",
    detail:
      "Where a local route needs the same kind of support over an agreed period, we introduce a suitable vehicle and an experienced driver, with the terms settled before the work begins.",
    points: [
      "A vehicle matched to the delivery in hand",
      "A standing local route, or a short block of days",
      "The Leeds desk as the contact for that booking",
    ],
    icon: "truck",
  },
  {
    slug: "overflow",
    title: "Overflow & Peak Capacity Management",
    summary: "Additional vans for a full Yorkshire day, when your own vehicles are already committed.",
    detail:
      "Should a local round exceed the vehicles you have available, we confirm whether we can assist, and on what terms, before you commit.",
    points: [
      "Requested for a day you already know is full",
      "Rate agreed for that booking",
      "Local cover across Leeds, Bradford, York, and Doncaster",
    ],
    icon: "calendar",
  },
  {
    slug: "b2b-express",
    title: "Depot-to-Depot & Fleet Transfers",
    summary:
      "Long-distance work across the United Kingdom, including depot-to-depot movements and fleet transfers.",
    detail:
      "Beyond our Yorkshire local rounds, we can undertake longer journeys throughout the UK. Depot-to-depot movements and fleet transfers are quoted before the vehicle departs.",
    points: [
      "Depot-to-depot movements",
      "Fleet transfers between sites",
      "Timing and rate agreed before departure",
    ],
    icon: "building",
  },
];

export const valueProps = [
  {
    title: "A named contact",
    description:
      "Each booking is looked after by the Leeds desk. We keep you informed by telephone or email for the duration of the job.",
    icon: "radio" as const,
  },
  {
    title: "Rates agreed first",
    description: "Every engagement is quoted before a vehicle is released, so the terms are clear before the work begins.",
    icon: "receipt" as const,
  },
  {
    title: "Checks before a route",
    description:
      "Licence, right to work, and insurance are reviewed before a driver is introduced to a route.",
    icon: "shield" as const,
  },
  {
    title: "Vans on demand",
    description:
      "A varied fleet and experienced drivers are introduced for the Yorkshire round, or the longer UK journey, once that booking is confirmed.",
    icon: "layers" as const,
  },
];

export const subcontractorBenefits = [
  "Yorkshire local routes form the core of the work",
  "Longer UK journeys when a booking requires them",
  "Terms settled before the first route",
] as const;

export const onboardingSteps = [
  {
    step: "01",
    title: "Tell us your capacity",
    description: "The vehicles you can offer, where you are based, and the days you can run.",
  },
  {
    step: "02",
    title: "We ask for your documents",
    description: "Licence, right to work, and insurance, then a rate for work we actually have.",
  },
  {
    step: "03",
    title: "You start when a job is booked",
    description: "A first route follows a confirmed client booking. Further days are offered as that work continues.",
  },
] as const;
