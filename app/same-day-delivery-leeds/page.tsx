import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Same-Day Delivery Leeds",
  description:
    "Same-day van requests in Leeds, accepted when the collection time and the rate can be agreed beforehand.",
  alternates: {
    canonical: "https://shezuna.co.uk/same-day-delivery-leeds",
  },
};

export default function SameDayDeliveryLeedsPage() {
  return (
    <ArticleLayout eyebrow="Same day" title="Same-Day Delivery Services in Leeds">
      <p>
        Ask the Leeds desk about a same-day van for a local collection. We accept it when the collection time, the
        delivery time, and the rate can be agreed before the vehicle leaves.
      </p>
      <p>
        Where that cannot be met with confidence, we will say so promptly. Same-day remains a local Yorkshire service,
        arranged around the booking in hand.
      </p>
      <p>
        An experienced driver and a suitable vehicle are introduced for that job. The desk stays the point of contact
        until handover.
      </p>
    </ArticleLayout>
  );
}
