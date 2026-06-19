import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://shezuna.co.uk/sitemap.xml",
    host: "https://shezuna.co.uk",
  };
}
