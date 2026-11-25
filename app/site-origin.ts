const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteOrigin = new URL(
  process.env.SITE_URL || (vercelDomain ? `https://${vercelDomain}` : "http://localhost:3000"),
);
