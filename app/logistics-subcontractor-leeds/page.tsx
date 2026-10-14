import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Logistics Subcontractor Leeds",
  description:
    "Leeds subcontract van cover for local Yorkshire routes, and for longer UK journeys once the rate is agreed.",
  alternates: {
    canonical: "https://shezuna.co.uk/logistics-subcontractor-leeds",
  },
};

export default function LogisticsSubcontractorLeedsPage() {
  return (
    <ArticleLayout eyebrow="Subcontract" title="Logistics Subcontractor Support in Leeds">
      <p>
        Shezuna is a Leeds-based operator. We discuss subcontract cover for regular local routes across Yorkshire, and
        for longer depot-to-depot or fleet-transfer work across the United Kingdom.
      </p>
      <p>
        Each engagement is undertaken in Shezuna&apos;s own name. A job proceeds once the route and the rate are agreed
        in writing, and the Leeds desk keeps both sides informed while it is under way.
      </p>
      <p>
        Experienced drivers and a varied fleet are introduced for the booking in hand. We do not publish a standing
        fleet size or an on-time percentage.
      </p>
    </ArticleLayout>
  );
}
