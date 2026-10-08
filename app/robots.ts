import type { MetadataRoute } from "next";
import { INDEXABLE, SITE_URL } from "@/lib/constants";

// Il blocco vero è il "noindex" nelle pagine (vedi layout): qui non si vieta
// l'accesso, altrimenti Google non lo leggerebbe.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(INDEXABLE && { sitemap: `${SITE_URL}/sitemap.xml` }),
  };
}
