import type { MetadataRoute } from "next";

const baseUrl = "https://mvphouse.app";

const legalPaths = [
  "/terms.html",
  "/privacy.html",
  "/refund-policy.html",
  "/cookies.html",
  "/billing.html",
  "/acceptable-use.html",
  "/dpa.html",
  "/subprocessors.html",
  "/security.html",
  "/fair-use.html",
  "/ai-policy.html",
  "/dmca.html",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const legalEntries: MetadataRoute.Sitemap = legalPaths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalEntries,
  ];
}
