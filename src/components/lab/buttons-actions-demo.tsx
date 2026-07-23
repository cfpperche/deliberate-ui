"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Primary demo for lesson 3.1 — buttons and actions.
 * Bad/Good hierarchy + real Button primitive states.
 */
export function ButtonsActionsDemo({
  title,
  hint,
  badLabel,
  goodLabel,
  badgeBad,
  badgeGood,
  variantsTitle,
  notesBad,
  notesGood,
  copy,
}: {
  title: string;
  hint: string;
  badLabel: string;
  goodLabel: string;
  badgeBad: string;
  badgeGood: string;
  variantsTitle: string;
  notesBad: string[];
  notesGood: string[];
  copy: {
    primary: string;
    secondary: string;
    ghost: string;
    destroy: string;
    cancel: string;
    save: string;
    vagueA: string;
    vagueB: string;
    vagueC: string;
    disabled: string;
    variantPrimary: string;
    variantSecondary: string;
    variantGhost: string;
    variantDisabled: string;
  };
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
        <CompareCard
          label={badLabel}
          badge={badgeBad}
          variant="bad"
          notes={notesBad}
        >
          <div className="space-y-3 rounded-lg border border-border bg-surface p-4">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded bg-accent px-2 py-0.5 text-[10px] text-accent-foreground"
              >
                {copy.vagueA}
              </button>
              <button
                type="button"
                className="rounded bg-accent px-2 py-0.5 text-[10px] text-accent-foreground"
              >
                {copy.vagueB}
              </button>
              <button
                type="button"
                className="rounded bg-accent px-2 py-0.5 text-[10px] text-accent-foreground"
              >
                {copy.vagueC}
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded border border-border px-2 py-0.5 text-[10px] text-foreground"
              >
                {copy.destroy}
              </button>
              <button
                type="button"
                className="rounded border border-border px-2 py-0.5 text-[10px] text-foreground"
              >
                {copy.save}
              </button>
            </div>
          </div>
        </CompareCard>

        <CompareCard
          label={goodLabel}
          badge={badgeGood}
          variant="good"
          notes={notesGood}
        >
          <div className="space-y-4 rounded-lg border border-border bg-surface p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="primary">{copy.primary}</Button>
              <Button variant="secondary">{copy.secondary}</Button>
              <Button variant="ghost">{copy.ghost}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="secondary">{copy.cancel}</Button>
              <Button variant="primary">{copy.save}</Button>
            </div>
          </div>
        </CompareCard>
      </div>

      <Card>
        <CardHeader>
          <p className="text-sm font-medium text-foreground">{variantsTitle}</p>
        </CardHeader>
        <CardBody>
          <ul className="grid gap-3 sm:grid-cols-2">
            <VariantRow label={copy.variantPrimary}>
              <Button variant="primary">{copy.primary}</Button>
            </VariantRow>
            <VariantRow label={copy.variantSecondary}>
              <Button variant="secondary">{copy.secondary}</Button>
            </VariantRow>
            <VariantRow label={copy.variantGhost}>
              <Button variant="ghost">{copy.ghost}</Button>
            </VariantRow>
            <VariantRow label={copy.variantDisabled}>
              <Button variant="primary" disabled>
                {copy.disabled}
              </Button>
            </VariantRow>
          </ul>
        </CardBody>
      </Card>
    </section>
  );
}

function CompareCard({
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

function VariantRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface px-3 py-3">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </li>
  );
}
