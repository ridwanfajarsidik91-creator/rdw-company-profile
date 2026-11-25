import { site } from "./site";

const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const defaultOrigin = process.env.VERCEL_ENV === "production"
  ? `https://${site.domain}`
  : vercelDomain ? `https://${vercelDomain}` : "http://localhost:3000";

export const siteOrigin = new URL(process.env.SITE_URL || defaultOrigin);
