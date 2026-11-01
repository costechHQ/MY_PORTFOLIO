import type { GetServerSideProps } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const paths = ["/", ...projects.map((p) => `/projects/${p.slug}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${siteUrl}${p}</loc></url>`).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(xml);
  res.end();
  return { props: {} };
};

export default function Sitemap() {
  return null;
}
