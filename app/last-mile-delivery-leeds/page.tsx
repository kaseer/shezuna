import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Last-Mile Delivery Leeds",
  description:
    "Last-mile van cover in Leeds and Yorkshire, arranged from our Leeds desk when the route and rate are agreed.",
  alternates: {
    canonical: "https://shezuna.co.uk/last-mile-delivery-leeds",
  },
};

export default function LastMileDeliveryLeedsPage() {
  return (
    <ArticleLayout eyebrow="Leeds" title="Last-Mile Delivery Services in Leeds">
      <p>
        Shezuna arranges last-mile van cover for local routes across Yorkshire. The route, the rate, and the handover
        are agreed before the van goes out. Longer depot-to-depot work across the UK can be discussed separately.
      </p>
      <p>
        We are based in Leeds. The desk keeps you informed by telephone or email for the duration of the booking, and
        performance is discussed against the terms agreed for that job.
      </p>
    </ArticleLayout>
  );
}
