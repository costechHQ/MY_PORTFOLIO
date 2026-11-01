import { profile } from "@/data/content";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { Seo } from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title={`${profile.name} | ${profile.title}`}
        description={`${profile.name} is a ${profile.title} based in ${profile.location}, building web and mobile apps end to end.`}
        path="/"
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
