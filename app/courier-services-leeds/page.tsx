import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Courier Services Leeds",
  description:
    "Reliable courier services in Leeds with last-mile expertise, flexible fleet support, and SLA-focused delivery performance.",
  alternates: {
    canonical: "https://shezuna.co.uk/courier-services-leeds",
  },
};

export default function CourierServicesLeedsPage() {
  return (
    <ArticleLayout eyebrow="Courier" title="Courier Services in Leeds">
      <p>
        Shezuna delivers courier support for businesses that need dependable collection, accurate handover, and reliable
        service quality across Leeds and Yorkshire.
      </p>
      <p>
        Our operations are designed for consistency and transparency, helping teams protect customer experience while
        scaling daily delivery demand.
      </p>
    </ArticleLayout>
  );
}
