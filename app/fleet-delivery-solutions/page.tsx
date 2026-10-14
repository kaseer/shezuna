import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Fleet Delivery Solutions",
  description:
    "Extra vans for local Yorkshire routes on a booked day. Longer UK fleet transfers can be quoted in the same way.",
  alternates: {
    canonical: "https://shezuna.co.uk/fleet-delivery-solutions",
  },
};

export default function FleetDeliverySolutionsPage() {
  return (
    <ArticleLayout eyebrow="Fleet" title="Fleet Delivery Solutions in Leeds">
      <p>
        Shezuna introduces extra vehicles when a local Yorkshire day is already full. Share the route and the day with
        the Leeds desk. Availability and the rate are confirmed before you commit.
      </p>
      <p>
        The fleet is varied, so the vehicle can follow the delivery rather than the other way round. Drivers are
        experienced in local drops and in careful handover.
      </p>
      <p>
        Longer fleet transfers across the United Kingdom can be quoted in the same way. Any service level belongs in
        the agreement for that work, not on this page.
      </p>
    </ArticleLayout>
  );
}
