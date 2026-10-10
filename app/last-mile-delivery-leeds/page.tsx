import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Last-Mile Delivery Leeds",
  description:
    "Reliable last-mile delivery services in Leeds and Yorkshire with scalable route support, proof of delivery, and dedicated account communication.",
  alternates: {
    canonical: "https://shezuna.co.uk/last-mile-delivery-leeds",
  },
};

export default function LastMileDeliveryLeedsPage() {
  return (
    <ArticleLayout eyebrow="Leeds" title="Last-Mile Delivery Services in Leeds">
      <p>
        Shezuna delivers dependable last-mile logistics support for businesses that need accurate scheduling,
        customer-first execution, and consistent route coverage across Leeds and Yorkshire.
      </p>
      <p>
        Our team supports high-volume operations with proof-of-delivery reporting, SLA-focused dispatch, and clear
        communication from collection to final handover.
      </p>
    </ArticleLayout>
  );
}
