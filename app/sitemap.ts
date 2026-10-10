import type { MetadataRoute } from "next";
import { legacyPaths, sitemapEntries } from "@/src/lib/seo";
import { site } from "@/src/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const primary = sitemapEntries().map((entry) => ({
    url: entry.path === "/" ? site.url : `${site.url}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const legacy = legacyPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...primary, ...legacy];
}
