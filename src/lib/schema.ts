import { services, site, hubs, type HubId } from "@/src/lib/site";

const businessId = `${site.url}/#business`;

const areaServed = hubs.map((hub) => ({
  "@type": "City",
  name: hub.name,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Yorkshire",
  },
}));

/** LocalBusiness plus the services offered from the Leeds desk. */
export function logisticsSchema(focus?: HubId) {
  const served = focus
    ? areaServed.filter((area) => area.name.toLowerCase() === focus)
    : areaServed;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: site.name,
        url: site.url,
        image: `${site.url}/opengraph-image`,
        telephone: site.phoneDisplay,
        email: site.email,
        description: site.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.streetAddress,
          addressLocality: site.locality,
          postalCode: site.postalCode,
          addressRegion: "Yorkshire",
          addressCountry: "GB",
        },
        areaServed: [...served, { "@type": "Country", name: "United Kingdom" }],
        brand: {
          "@type": "Brand",
          name: "Shezuna",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneDisplay,
          email: site.email,
          contactType: "customer service",
          areaServed: "GB",
          availableLanguage: "English",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:00",
            closes: "21:00",
          },
        ],
      },
      ...services.map((service) => ({
        "@type": "Service",
        name: service.title,
        serviceType: service.slug === "multi-drop" ? "Multi-drop Courier" : "Fleet Capacity",
        provider: { "@id": businessId },
        areaServed:
          service.slug === "b2b-express"
            ? [...served, { "@type": "Country", name: "United Kingdom" }]
            : served,
        brand: { "@type": "Brand", name: "Shezuna" },
        description: service.summary,
      })),
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" || item.path === "" ? site.url : `${site.url}${item.path}`,
    })),
  };
}
