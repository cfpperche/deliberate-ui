import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-foreground/70",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export function Label({
  className,
  children,
  htmlFor,
}: {
  className?: string;
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "mb-1.5 block text-xs font-medium text-foreground",
        className,
      )}
    >
      {children}
    </label>
  );
}

export function FieldHint({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "muted" | "bad";
}) {
  return (
    <p
      className={cn(
        "mt-1.5 text-xs",
        tone === "bad" ? "text-bad" : "text-muted-foreground",
      )}
    >
      {children}
    </p>
  );
}
