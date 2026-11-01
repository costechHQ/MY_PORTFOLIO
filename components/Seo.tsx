import Head from "next/head";
import { siteUrl } from "@/lib/site";
import { profile } from "@/data/content";

type SeoProps = {
  title: string;
  description: string;
  /** Path of this page, e.g. "/" or "/projects/pikva". */
  path?: string;
};

export function Seo({ title, description, path = "/" }: SeoProps) {
  const url = `${siteUrl}${path}`;
  const image = `${siteUrl}/api/og?title=${encodeURIComponent(title.split(" | ")[0])}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
