import type { Metadata } from "next";
import { ArticleLayout } from "@/src/components/sections/article-layout";

export const metadata: Metadata = {
  title: "Courier Services Leeds",
  description:
    "Local courier vans in Leeds and across Yorkshire, arranged from our Leeds desk once the route and rate are agreed.",
  alternates: {
    canonical: "https://shezuna.co.uk/courier-services-leeds",
  },
};

export default function CourierServicesLeedsPage() {
  return (
    <ArticleLayout eyebrow="Courier" title="Courier Services in Leeds">
      <p>
        Shezuna arranges local courier collections and handovers across Leeds and the rest of Yorkshire. The route, the
        timing, and the rate are settled before a vehicle is released.
      </p>
      <p>
        The fleet is varied, and the drivers are experienced, so the vehicle can be matched to the delivery. Regular
        local drops are the principal work.
      </p>
      <p>
        Where a journey extends beyond Yorkshire, the same desk can discuss a longer movement across the United
        Kingdom, including depot-to-depot work. Shezuna undertakes each engagement in its own name.
      </p>
    </ArticleLayout>
  );
}
