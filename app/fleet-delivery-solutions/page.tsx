import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Fleet Delivery Solutions",
  description:
    "Scalable fleet delivery solutions in Leeds for high-volume logistics operations, including route planning, capacity support, and SLA performance.",
  alternates: {
    canonical: "https://shezuna.co.uk/fleet-delivery-solutions",
  },
};

export default function FleetDeliverySolutionsPage() {
  return (
    <ArticleLayout eyebrow="Fleet" title="Fleet Delivery Solutions in Leeds">
      <p>
        Shezuna provides flexible fleet support for businesses that need dependable capacity across daily operations,
        growth periods, and seasonal demand spikes.
      </p>
      <p>
        We help teams maintain delivery consistency with route planning, accountable communication, and practical
        subcontract execution aligned to your operational targets.
      </p>
    </ArticleLayout>
  );
}
