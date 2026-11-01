import Head from "next/head";
import { profile } from "@/data/content";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${profile.name} | ${profile.title}`}</title>
        <meta
          name="description"
          content={`${profile.name} is a ${profile.title} based in ${profile.location}.`}
        />
      </Head>
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
