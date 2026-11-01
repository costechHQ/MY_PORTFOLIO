export function TechStrip({ items }: { items: readonly string[] }) {
  return (
    <div className="md:text-right">
      <p className="mb-3 text-sm text-muted">Tech I work with</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:justify-end">
        {items.map((item) => (
          <li key={item} className="text-ink/80">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
