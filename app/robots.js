import { person } from "@/content/site-data";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${person.siteUrl}/sitemap.xml`,
    host: person.siteUrl,
  };
}
