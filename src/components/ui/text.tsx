import { cn } from "@/lib/utils";

/**
 * Body / supporting text roles from Design System type scale.
 * Prefer these over ad-hoc text sizes so lessons can reshape the site.
 */
const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  md: "text-md",
} as const;

const tones = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  accent: "text-accent",
  good: "text-good",
  bad: "text-bad",
} as const;

type TextProps = {
  as?: "p" | "span" | "div" | "li";
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
  weight?: "normal" | "medium" | "semibold";
  className?: string;
  children: React.ReactNode;
};

const weights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
} as const;

export function Text({
  as: Tag = "p",
  size = "base",
  tone = "default",
  weight = "normal",
  className,
  children,
}: TextProps) {
  return (
    <Tag
      className={cn(sizes[size], tones[tone], weights[weight], className)}
      style={{ lineHeight: "var(--leading-relaxed)" }}
    >
      {children}
    </Tag>
  );
}
