import type { MetadataRoute } from "next";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lombokjourney.example";
  return ["", "/tour-packages", "/destinations", "/about", "/contact"].map(url => ({ url: `${base}${url}`, lastModified: new Date() }))
    .concat(tours.map(t => ({ url: `${base}/tour-packages/${t.slug}`, lastModified: new Date() })))
    .concat(destinations.map(d => ({ url: `${base}/destinations/${d.slug}`, lastModified: new Date() })));
}
