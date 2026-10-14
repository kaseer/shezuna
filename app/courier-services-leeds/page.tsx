import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Courier Services Leeds",
  description:
    "Courier van cover in Leeds, arranged from our Leeds desk when the route and the rate are agreed.",
  alternates: {
    canonical: "https://shezuna.co.uk/courier-services-leeds",
  },
};

export default function CourierServicesLeedsPage() {
  return (
    <ArticleLayout eyebrow="Courier" title="Courier Services in Leeds">
      <p>
        Shezuna arranges courier vans for local collections and handovers across Yorkshire. Where a journey extends
        further, we can also undertake longer movements across the United Kingdom. Times and rates are agreed when you book.
      </p>
      <p>
        Shezuna is an independent Leeds operator and undertakes each engagement in its own name. Vehicles are
        introduced to suit the booking, rather than drawn from a standing fleet.
      </p>
    </ArticleLayout>
  );
}
