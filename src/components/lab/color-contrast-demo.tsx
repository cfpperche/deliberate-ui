"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PaletteSwatch = {
  name: string;
  cssVar: string;
  onVar?: string;
};

/**
 * Primary demo for lesson 2.1 — color and contrast.
 * Real UI compare + token swatches. No chart stack.
 */
export function ColorContrastDemo({
  title,
  hint,
  badLabel,
  goodLabel,
  badgeBad,
  badgeGood,
  paletteTitle,
  palette,
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
  paletteTitle: string;
  palette: PaletteSwatch[];
  notesBad: string[];
  notesGood: string[];
  copy: {
    cardTitle: string;
    cardBody: string;
    statusOk: string;
    statusFail: string;
    cta: string;
    meta: string;
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
          <BadExample copy={copy} />
        </CompareCard>
        <CompareCard
          label={goodLabel}
          badge={badgeGood}
          variant="good"
          notes={notesGood}
        >
          <GoodExample copy={copy} />
        </CompareCard>
      </div>

      <Card>
        <CardHeader>
          <p className="text-sm font-medium text-foreground">{paletteTitle}</p>
        </CardHeader>
        <CardBody>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {palette.map((swatch) => (
              <li
                key={swatch.name}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2"
              >
                <span
                  className="h-9 w-9 shrink-0 rounded-md border border-border shadow-sm"
                  style={{ background: `var(${swatch.cssVar})` }}
                  aria-hidden
                />
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-foreground">
                    {swatch.name}
                  </span>
                  <span className="block font-mono text-[11px] text-muted-foreground">
                    {swatch.cssVar}
                  </span>
                </span>
              </li>
            ))}
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

function BadExample({
  copy,
}: {
  copy: {
    cardTitle: string;
    cardBody: string;
    statusOk: string;
    statusFail: string;
    cta: string;
    meta: string;
  };
}) {
  return (
    <div className="space-y-3 rounded-lg border border-[#ddd] bg-white p-4">
      <p className="text-[15px] font-semibold" style={{ color: "#b0b0b0" }}>
        {copy.cardTitle}
      </p>
      <p className="text-[13px]" style={{ color: "#c8c8c8" }}>
        {copy.cardBody}
      </p>
      <p className="text-[11px]" style={{ color: "#d0d0d0" }}>
        {copy.meta}
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="h-6 w-6 rounded-full bg-[#22c55e]" title={copy.statusOk} />
        <span className="h-6 w-6 rounded-full bg-[#ef4444]" title={copy.statusFail} />
        <span className="h-6 w-6 rounded-full bg-[#3b82f6]" />
        <span className="h-6 w-6 rounded-full bg-[#a855f7]" />
        <span className="h-6 w-6 rounded-full bg-[#f59e0b]" />
      </div>
      <button
        type="button"
        className="rounded px-3 py-1.5 text-[13px]"
        style={{ background: "#93c5fd", color: "#ffffff" }}
      >
        {copy.cta}
      </button>
    </div>
  );
}

function GoodExample({
  copy,
}: {
  copy: {
    cardTitle: string;
    cardBody: string;
    statusOk: string;
    statusFail: string;
    cta: string;
    meta: string;
  };
}) {
  return (
    <div className="space-y-3 rounded-lg border border-border bg-surface p-4">
      <p className="font-serif text-lg font-semibold tracking-tight text-foreground">
        {copy.cardTitle}
      </p>
      <p
        className="text-sm text-muted-foreground"
        style={{ lineHeight: "var(--leading-relaxed)" }}
      >
        {copy.cardBody}
      </p>
      <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
        {copy.meta}
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-good-soft px-2.5 py-1 text-xs font-medium text-good">
          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
          {copy.statusOk}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-bad-soft px-2.5 py-1 text-xs font-medium text-bad">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden />
          {copy.statusFail}
        </span>
      </div>
      <button
        type="button"
        className="rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-accent-foreground"
      >
        {copy.cta}
      </button>
    </div>
  );
}
