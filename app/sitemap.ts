import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shezuna.co.uk";
  const routes = [
    "",
    "/last-mile-delivery-leeds",
    "/fleet-delivery-solutions",
    "/logistics-subcontractor-leeds",
    "/same-day-delivery-leeds",
    "/courier-services-leeds",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
