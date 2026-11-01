import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

type SkillGroupProps = {
  category: string;
  items: readonly string[];
  index?: number;
};

export function SkillGroup({ category, items, index = 0 }: SkillGroupProps) {
  return (
    <li>
      <Reveal index={index} className="h-full">
        <div className="h-full rounded-card border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-soft">
          <h3 className="font-display text-2xl font-light">{category}</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {items.map((item) => (
              <li key={item}>
                <Tag className="px-3 py-1 text-xs">{item}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </li>
  );
}
