import type { MetadataRoute } from "next";
import { siteOrigin } from "./site-origin";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteOrigin.href }];
}
