import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Logistics Subcontractor Leeds",
  description:
    "Leeds logistics subcontractor support for carriers and delivery operators requiring reliable route execution, scalable coverage, and operational consistency.",
  alternates: {
    canonical: "https://shezuna.co.uk/logistics-subcontractor-leeds",
  },
};

export default function LogisticsSubcontractorLeedsPage() {
  return (
    <ArticleLayout eyebrow="Subcontract" title="Logistics Subcontractor Support in Leeds">
      <p>
        Shezuna offers contract-ready subcontract delivery support for carriers and logistics operators across Leeds and
        Yorkshire.
      </p>
      <p>
        Our Leeds-based team supports high-volume operations with dependable route management, proof-of-delivery
        standards, and responsive communication workflows.
      </p>
    </ArticleLayout>
  );
}
