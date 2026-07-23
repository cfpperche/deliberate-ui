"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ScaleStep = {
  token: string;
  px: number;
  role: string;
  sample: string;
};

/**
 * Primary demo for lesson 1.2 — type scale.
 * Shows actual text sizes (specimen), not a chart for its own sake.
 */
export function TypeScaleSpecimen({
  title,
  hint,
  badLabel,
  goodLabel,
  badgeBad,
  badgeGood,
  tokenColumn,
  roleColumn,
  sizeColumn,
  notesBad,
  notesGood,
  steps,
  badSteps,
}: {
  title: string;
  hint: string;
  badLabel: string;
  goodLabel: string;
  badgeBad: string;
  badgeGood: string;
  tokenColumn: string;
  roleColumn: string;
  sizeColumn: string;
  notesBad: string[];
  notesGood: string[];
  steps: ScaleStep[];
  badSteps: ScaleStep[];
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-serif text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <SpecimenPanel
          label={badLabel}
          badge={badgeBad}
          variant="bad"
          tokenColumn={tokenColumn}
          roleColumn={roleColumn}
          sizeColumn={sizeColumn}
          steps={badSteps}
          notes={notesBad}
        />
        <SpecimenPanel
          label={goodLabel}
          badge={badgeGood}
          variant="good"
          tokenColumn={tokenColumn}
          roleColumn={roleColumn}
          sizeColumn={sizeColumn}
          steps={steps}
          notes={notesGood}
        />
      </div>
    </section>
  );
}

function SpecimenPanel({
  label,
  badge,
  variant,
  tokenColumn,
  roleColumn,
  sizeColumn,
  steps,
  notes,
}: {
  label: string;
  badge: string;
  variant: "bad" | "good";
  tokenColumn: string;
  roleColumn: string;
  sizeColumn: string;
  steps: ScaleStep[];
  notes: string[];
}) {
  const isBad = variant === "bad";

  return (
    <Card className={cn(!isBad && "ring-1 ring-good/15")}>
      <CardHeader>
        <span className="text-sm font-medium text-foreground">{label}</span>
        <Badge variant={isBad ? "bad" : "good"}>{badge}</Badge>
      </CardHeader>
      <CardBody className="space-y-4">
        <div className="grid grid-cols-[4.5rem_1fr_3rem] gap-2 border-b border-border pb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          <span>{tokenColumn}</span>
          <span>{roleColumn}</span>
          <span className="text-right">{sizeColumn}</span>
        </div>

        <ul className="space-y-3">
          {steps.map((step) => (
            <li
              key={`${variant}-${step.token}-${step.px}`}
              className="grid grid-cols-[4.5rem_1fr_3rem] items-baseline gap-2 border-b border-border/60 pb-3 last:border-0 last:pb-0"
            >
              <span
                className={cn(
                  "font-mono text-[11px]",
                  isBad ? "text-bad" : "text-accent",
                )}
              >
                {step.token}
              </span>
              <span
                className={cn(
                  "min-w-0 truncate text-foreground",
                  isBad ? "font-normal" : "font-medium",
                )}
                style={{
                  fontSize: `${step.px}px`,
                  lineHeight: step.px >= 24 ? 1.2 : 1.4,
                  letterSpacing: step.px >= 24 ? "-0.02em" : "0",
                  fontFamily:
                    step.px >= 20
                      ? "var(--font-serif), Georgia, serif"
                      : "var(--font-sans), system-ui, sans-serif",
                }}
              >
                {step.sample}
              </span>
              <span className="text-right font-mono text-[11px] text-muted-foreground">
                {step.px}
              </span>
            </li>
          ))}
        </ul>

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
