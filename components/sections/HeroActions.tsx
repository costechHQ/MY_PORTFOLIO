import { Button } from "@/components/ui/Button";

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button href="/#contact" variant="ghost">
        Start a Project
      </Button>
      <Button href="/#work" variant="outline">
        View my Works
      </Button>
    </div>
  );
}
