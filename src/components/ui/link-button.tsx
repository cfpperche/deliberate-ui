import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:opacity-90 border border-transparent",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-surface-muted",
  ghost:
    "bg-transparent text-accent hover:bg-accent-soft border border-transparent",
} as const;

const sizes = {
  sm: "min-h-8 px-3 py-1.5 text-xs",
  md: "min-h-10 px-4 py-2.5 text-sm",
} as const;

type LinkButtonProps = {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
};

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
}: LinkButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
    variants[variant],
    sizes[size],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
