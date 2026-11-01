import { hero, profile, stats } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { HeroActions } from "./HeroActions";
import { ProfileCard } from "./ProfileCard";
import { SkillTags } from "./SkillTags";
import { StatCard } from "./StatCard";
import { TechStrip } from "./TechStrip";

export function Hero() {
  return (
    <section id="home" className="bg-hero-glow pb-16 pt-28 md:pt-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_28rem] lg:items-center">
        <div className="flex flex-col gap-8">
          <p className="text-sm text-muted">• {profile.title}</p>
          <h1 className="font-display text-6xl font-light leading-[0.95] tracking-tight md:text-8xl">
            {hero.headline} <span className="text-muted">{hero.headlineMuted}</span>
          </h1>
          <SkillTags tags={hero.tags} />
          <div className="flex flex-wrap gap-4">
            <StatCard value={stats[0].value} label={stats[0].label} tone="light" />
            <StatCard value={stats[1].value} label={stats[1].label} tone="glass" />
          </div>
        </div>
        <ProfileCard />
      </Container>

      <Container className="mt-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <HeroActions />
        <TechStrip items={hero.techStrip} />
      </Container>
    </section>
  );
}
