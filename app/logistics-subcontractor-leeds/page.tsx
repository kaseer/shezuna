import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Logistics Subcontractor Leeds",
  description:
    "Leeds subcontract van cover for operators that need extra vehicles. Work starts only after the rate is agreed.",
  alternates: {
    canonical: "https://shezuna.co.uk/logistics-subcontractor-leeds",
  },
};

export default function LogisticsSubcontractorLeedsPage() {
  return (
    <ArticleLayout eyebrow="Subcontract" title="Logistics Subcontractor Support in Leeds">
      <p>
        Shezuna is a Leeds-based operator that can discuss subcontract van cover for local Yorkshire routes, and for
        longer depot-to-depot or fleet-transfer work across the United Kingdom.
      </p>
      <p>
        Shezuna undertakes subcontract work in its own name. A job proceeds once the route and the rate are agreed in
        writing, and the Leeds desk keeps both sides informed while it is under way.
      </p>
    </ArticleLayout>
  );
}
