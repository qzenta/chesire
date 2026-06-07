import type { MetadataRoute } from "next";

const BASE = "https://www.chesireattorneys.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/commercial-law`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/immigration-law`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/civil-litigation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/family-law-divorce`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/labour-employment-law`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/wills-estates-trusts`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
