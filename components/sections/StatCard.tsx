import { cn } from "@/lib/cn";

type StatCardProps = {
  value: string;
  label: string;
  /** "light" is the white card; "glass" is the translucent one. */
  tone?: "light" | "glass";
};

export function StatCard({ value, label, tone = "light" }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex h-36 w-full flex-col md:w-44 justify-between rounded-2xl p-4",
        tone === "light"
          ? "bg-ink text-bg"
          : "border border-line bg-white/10 text-ink backdrop-blur",
      )}
    >
      <p className={cn("text-xs", tone === "light" ? "text-bg/60" : "text-muted")}>
        • {label}
      </p>
      <p className="font-display text-5xl font-light tracking-tight">{value}</p>
    </div>
  );
}
