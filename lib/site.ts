/**
 * Absolute site URL, used for canonical links, Open Graph and the sitemap.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.com).
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);
