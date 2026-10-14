import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Same-Day Delivery Leeds",
  description:
    "Same-day van requests in Leeds, accepted only when we can agree the time and the rate before collection.",
  alternates: {
    canonical: "https://shezuna.co.uk/same-day-delivery-leeds",
  },
};

export default function SameDayDeliveryLeedsPage() {
  return (
    <ArticleLayout eyebrow="Same day" title="Same-Day Delivery Services in Leeds">
      <p>
        Ask the Leeds desk about a same-day van. We take it only when the collection time, the delivery time, and the
        rate can be agreed before the van leaves.
      </p>
      <p>
        Where a same-day collection cannot be met with confidence, we will say so promptly rather than accept the
        booking.
      </p>
    </ArticleLayout>
  );
}
