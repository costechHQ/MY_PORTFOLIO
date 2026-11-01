import type { GetServerSideProps } from "next";
import { siteUrl } from "@/lib/site";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *\nAllow: /\nAllow: /api/og\nDisallow: /api/\nDisallow: /styleguide\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  res.end();
  return { props: {} };
};

export default function Robots() {
  return null;
}
