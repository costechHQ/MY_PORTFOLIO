import { Tag } from "@/components/ui/Tag";

type EducationItemProps = {
  title: string;
  institution: string;
  period: string;
  note?: string;
};

export function EducationItem({ title, institution, period, note }: EducationItemProps) {
  return (
    <li className="border-b border-line py-6 first:border-t">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{institution}</p>
          <h3 className="mt-1 text-lg font-medium">{title}</h3>
          {note && <p className="mt-2 text-sm text-ink/70">{note}</p>}
        </div>
        <Tag variant="solid" className="shrink-0">
          {period}
        </Tag>
      </div>
    </li>
  );
}
