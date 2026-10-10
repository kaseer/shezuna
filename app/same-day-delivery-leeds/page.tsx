import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Same-Day Delivery Leeds",
  description:
    "Professional same-day delivery in Leeds and Yorkshire with responsive dispatch, reliable drivers, and transparent communication.",
  alternates: {
    canonical: "https://shezuna.co.uk/same-day-delivery-leeds",
  },
};

export default function SameDayDeliveryLeedsPage() {
  return (
    <ArticleLayout eyebrow="Same day" title="Same-Day Delivery Services in Leeds">
      <p>
        Shezuna supports urgent same-day delivery requirements with responsive dispatch, dependable route execution, and
        professional handover standards.
      </p>
      <p>
        Built for business-critical deliveries, our Leeds team keeps communication clear and timelines controlled from
        pickup to drop-off.
      </p>
    </ArticleLayout>
  );
}
