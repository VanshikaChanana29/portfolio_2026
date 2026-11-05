import { person } from "@/content/site-data";

export const dynamic = "force-static";

export default function sitemap() {
  return [{ url: `${person.siteUrl}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
