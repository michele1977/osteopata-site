import type { MetadataRoute } from "next";
import { NAV_LINKS, SITE_URL } from "@/lib/constants";

const ALTRE_PAGINE = ["/meso-academy", "/privacy", "/cookie-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...NAV_LINKS.map((l) => l.href), ...ALTRE_PAGINE].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
