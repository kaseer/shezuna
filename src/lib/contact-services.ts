export const CONTACT_SERVICE_VALUES = [
  "last-mile-delivery",
  "fleet-delivery-solutions",
  "logistics-subcontractor",
  "same-day-delivery",
  "courier-services",
  "other",
] as const;

export type ContactServiceValue = (typeof CONTACT_SERVICE_VALUES)[number];

export const CONTACT_SERVICE_LABELS: Record<ContactServiceValue, string> = {
  "last-mile-delivery": "Last-Mile Delivery",
  "fleet-delivery-solutions": "Fleet Delivery Solutions",
  "logistics-subcontractor": "Logistics Subcontractor",
  "same-day-delivery": "Same-Day Delivery",
  "courier-services": "Courier Services",
  other: "Other",
};
