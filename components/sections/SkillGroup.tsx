import { Tag } from "@/components/ui/Tag";

type SkillGroupProps = {
  category: string;
  items: readonly string[];
};

export function SkillGroup({ category, items }: SkillGroupProps) {
  return (
    <li className="rounded-card border border-line bg-surface p-6">
      <h3 className="font-display text-2xl font-light">{category}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <Tag className="px-3 py-1 text-xs">{item}</Tag>
          </li>
        ))}
      </ul>
    </li>
  );
}
