import { cn } from "@/lib/utils";

/**
 * Display hierarchy roles. Lesson 1.1 (type hierarchy) owns these levels.
 * Use Heading for titles so the living design system stays consistent.
 */
const levels = {
  1: "font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight",
  2: "font-serif text-xl font-semibold tracking-tight",
  3: "font-serif text-lg font-semibold tracking-tight",
  4: "text-sm font-semibold tracking-tight",
} as const;

type HeadingProps = {
  level?: 1 | 2 | 3 | 4;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: React.ReactNode;
};

export function Heading({
  level = 2,
  as,
  className,
  children,
}: HeadingProps) {
  const Tag = as ?? (`h${level}` as "h1" | "h2" | "h3" | "h4");

  return (
    <Tag
      className={cn(levels[level], "text-foreground", className)}
      style={{
        lineHeight: level <= 2 ? "var(--leading-tight)" : "var(--leading-snug)",
        letterSpacing: level <= 2 ? "-0.02em" : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
