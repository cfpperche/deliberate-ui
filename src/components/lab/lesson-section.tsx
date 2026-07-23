import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

/**
 * Shared lesson section chrome. Keep page files thin; compose sections.
 */
export function LessonSection({
  title,
  hint,
  children,
  className,
  headerRight,
}: {
  title?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
  headerRight?: React.ReactNode;
}) {
  return (
    <section className={cn("space-y-4", className)}>
      {(title || hint || headerRight) && (
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            {title ? <Heading level={2}>{title}</Heading> : null}
            {hint ? (
              <Text size="xs" tone="muted" className="mt-1">
                {hint}
              </Text>
            ) : null}
          </div>
          {headerRight}
        </div>
      )}
      {children}
    </section>
  );
}
