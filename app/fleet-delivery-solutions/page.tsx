import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Fleet Delivery Solutions",
  description:
    "Van capacity in Leeds for days your own fleet is full. Routes and rates are agreed before the van moves.",
  alternates: {
    canonical: "https://shezuna.co.uk/fleet-delivery-solutions",
  },
};

export default function FleetDeliverySolutionsPage() {
  return (
    <ArticleLayout eyebrow="Fleet" title="Fleet Delivery Solutions in Leeds">
      <p>
        Shezuna arranges extra vans for local Yorkshire routes on a booked day, including busier periods. Longer
        fleet transfers across the United Kingdom can be quoted in the same way.
      </p>
      <p>
        Share the route and the day with the Leeds desk. We confirm availability and the rate before you commit, and
        any service level is set out in the agreement for that work.
      </p>
    </ArticleLayout>
  );
}
