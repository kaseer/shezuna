import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Last-Mile Delivery Leeds",
  description:
    "Last-mile van cover for local routes in Leeds and Yorkshire, agreed with the Leeds desk before the vehicle leaves.",
  alternates: {
    canonical: "https://shezuna.co.uk/last-mile-delivery-leeds",
  },
};

export default function LastMileDeliveryLeedsPage() {
  return (
    <ArticleLayout eyebrow="Leeds" title="Last-Mile Delivery Services in Leeds">
      <p>
        Shezuna arranges last-mile cover for regular local routes in Leeds and across Yorkshire. The handover and the
        rate are agreed before the van goes out.
      </p>
      <p>
        Progress is confirmed by the Leeds desk, by telephone or email. We do not offer a tracking portal, and any
        service level is the one written into that booking.
      </p>
      <p>
        Longer depot-to-depot work across the United Kingdom can be discussed separately. It does not replace the local
        routes that are our principal work.
      </p>
    </ArticleLayout>
  );
}
