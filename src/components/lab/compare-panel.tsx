import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ComparePanel({
  label,
  badge,
  variant,
  notes,
  children,
}: {
  label: string;
  badge: string;
  variant: "bad" | "good";
  notes: string[];
  children: React.ReactNode;
}) {
  const isBad = variant === "bad";
  return (
    <Card className={cn(!isBad && "ring-1 ring-good/15")}>
      <CardHeader>
        <span className="text-sm font-medium text-foreground">{label}</span>
        <Badge variant={isBad ? "bad" : "good"}>{badge}</Badge>
      </CardHeader>
      <CardBody className="space-y-4">
        {children}
        <ul className="space-y-1.5 rounded-lg border border-border/80 bg-surface-muted/40 px-3 py-2.5">
          {notes.map((note) => (
            <li
              key={note}
              className={cn(
                "flex gap-2 text-xs leading-relaxed",
                isBad ? "text-bad" : "text-good",
              )}
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

export function LessonDemoHeader({
  title,
  hint,
}: {
  title: string;
  hint: string;
}) {
  return (
    <div>
      <h2 className="font-serif text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}
