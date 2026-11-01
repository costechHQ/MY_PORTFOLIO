import Head from "next/head";
import { profile } from "@/data/content";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";

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
        <Experience />
        <Work />
        <Skills />
        <Education />
      </main>
    </>
  );
}
