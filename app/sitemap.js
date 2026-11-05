import { person } from "@/content/site-data";

export const dynamic = "force-static";

export default function sitemap() {
  return ["", "services/", "work/", "about/", "contact/"].map((path) => ({
    url: `${person.siteUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path ? 0.8 : 1,
  }));
}
