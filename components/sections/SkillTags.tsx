import { Tag } from "@/components/ui/Tag";

export function SkillTags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-3" aria-label="Focus areas">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
