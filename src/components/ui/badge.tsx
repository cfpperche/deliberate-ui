import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "good" | "bad" | "muted" | "accent";
  className?: string;
};

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-surface-muted text-foreground border-border",
  good: "bg-good-soft text-good border-good/20",
  bad: "bg-bad-soft text-bad border-bad/20",
  muted: "bg-surface-muted text-muted-foreground border-border",
  accent: "bg-accent-soft text-accent border-accent/15",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
