import {
  Building2,
  CalendarClock,
  Layers,
  Radio,
  ReceiptText,
  Route,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/src/lib/site";

export const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  route: Route,
  truck: Truck,
  calendar: CalendarClock,
  building: Building2,
};

export const valueIcons = {
  shield: ShieldCheck,
  receipt: ReceiptText,
  radio: Radio,
  layers: Layers,
} as const;
