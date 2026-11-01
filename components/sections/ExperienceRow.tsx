import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

type ExperienceRowProps = {
  company: string;
  role: string;
  period: string;
  details: readonly string[];
};

export function ExperienceRow({ company, role, period, details }: ExperienceRowProps) {
  return (
    <li className="border-b border-line py-6 first:border-t">
      <Reveal y={20}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{company}</p>
          <h3 className="mt-1 text-lg font-medium">{role}</h3>
        </div>
        <Tag variant="solid" className="shrink-0">
          {period}
        </Tag>
      </div>
      <ul className="mt-4 flex max-w-2xl list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-ink/70 marker:text-accent">
        {details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      </Reveal>
    </li>
  );
}
