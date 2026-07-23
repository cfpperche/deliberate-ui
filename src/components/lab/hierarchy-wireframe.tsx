"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Viewport = "desktop" | "tablet" | "mobile";

type WireframeCopy = {
  title: string;
  subtitle: string;
  nav: string[];
  heroTitle: string;
  heroBody: string;
  cta: string;
  cards: { label: string; lines: number }[];
  notesBad: string[];
  notesGood: string[];
};

const viewportMeta: Record<
  Viewport,
  { icon: typeof Monitor; widthClass: string; labelKey: "desktop" | "tablet" | "mobile" }
> = {
  desktop: { icon: Monitor, widthClass: "w-full max-w-none", labelKey: "desktop" },
  tablet: { icon: Tablet, widthClass: "w-[min(100%,22rem)] mx-auto", labelKey: "tablet" },
  mobile: { icon: Smartphone, widthClass: "w-[min(100%,14.5rem)] mx-auto", labelKey: "mobile" },
};

export function HierarchyWireframe({
  sectionTitle,
  sectionHint,
  badLabel,
  goodLabel,
  badgeBad,
  badgeGood,
  viewportLabels,
  copy,
}: {
  sectionTitle: string;
  sectionHint: string;
  badLabel: string;
  goodLabel: string;
  badgeBad: string;
  badgeGood: string;
  viewportLabels: { desktop: string; tablet: string; mobile: string };
  copy: WireframeCopy;
}) {
  const [viewport, setViewport] = useState<Viewport>("desktop");

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-lg font-semibold tracking-tight">
            {sectionTitle}
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">{sectionHint}</p>
        </div>
        <ViewportToggle
          value={viewport}
          onChange={setViewport}
          labels={viewportLabels}
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <WireframePanel
          variant="bad"
          title={badLabel}
          badge={badgeBad}
          viewport={viewport}
          copy={copy}
          notes={copy.notesBad}
        />
        <WireframePanel
          variant="good"
          title={goodLabel}
          badge={badgeGood}
          viewport={viewport}
          copy={copy}
          notes={copy.notesGood}
        />
      </div>
    </section>
  );
}

function ViewportToggle({
  value,
  onChange,
  labels,
}: {
  value: Viewport;
  onChange: (v: Viewport) => void;
  labels: { desktop: string; tablet: string; mobile: string };
}) {
  const items: Viewport[] = ["desktop", "tablet", "mobile"];

  return (
    <div
      className="inline-flex items-center rounded-md border border-border bg-surface p-0.5"
      role="group"
      aria-label="Viewport"
    >
      {items.map((item) => {
        const Icon = viewportMeta[item].icon;
        const active = value === item;
        return (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-[5px] px-2.5 py-1.5 text-xs font-medium transition-colors",
              active
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-pressed={active}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">{labels[item]}</span>
          </button>
        );
      })}
    </div>
  );
}

function WireframePanel({
  variant,
  title,
  badge,
  viewport,
  copy,
  notes,
}: {
  variant: "bad" | "good";
  title: string;
  badge: string;
  viewport: Viewport;
  copy: WireframeCopy;
  notes: string[];
}) {
  const isBad = variant === "bad";
  const widthClass = viewportMeta[viewport].widthClass;

  return (
    <Card
      className={cn(
        "overflow-hidden",
        !isBad && "ring-1 ring-good/15",
      )}
    >
      <CardHeader>
        <span className="text-sm font-medium text-foreground">{title}</span>
        <Badge variant={isBad ? "bad" : "good"}>{badge}</Badge>
      </CardHeader>
      <CardBody className="space-y-4 bg-[linear-gradient(180deg,#f3f1ec_0%,#efece6_100%)]">
        <div className="flex min-h-[22rem] items-start justify-center py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${variant}-${viewport}`}
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.99 }}
              transition={{ duration: 0.25 }}
              className={cn("transition-all", widthClass)}
            >
              <DeviceChrome viewport={viewport}>
                {isBad ? (
                  <BadWireframeScreen copy={copy} viewport={viewport} />
                ) : (
                  <GoodWireframeScreen copy={copy} viewport={viewport} />
                )}
              </DeviceChrome>
            </motion.div>
          </AnimatePresence>
        </div>

        <ul className="space-y-1.5 rounded-lg border border-border/80 bg-surface/90 px-3 py-2.5">
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

function DeviceChrome({
  viewport,
  children,
}: {
  viewport: Viewport;
  children: React.ReactNode;
}) {
  if (viewport === "mobile") {
    return (
      <div className="rounded-[1.35rem] border-2 border-[#2a2a2a] bg-[#2a2a2a] p-1.5 shadow-[0_12px_30px_rgba(26,25,23,0.12)]">
        <div className="mb-1.5 flex items-center justify-center">
          <div className="h-1 w-10 rounded-full bg-[#555]" />
        </div>
        <div className="overflow-hidden rounded-[1rem] border border-[#1a1a1a] bg-[#faf9f7]">
          {children}
        </div>
        <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-[#555]" />
      </div>
    );
  }

  if (viewport === "tablet") {
    return (
      <div className="rounded-[1.1rem] border-2 border-[#2f2f2f] bg-[#2f2f2f] p-2 shadow-[0_12px_30px_rgba(26,25,23,0.1)]">
        <div className="overflow-hidden rounded-[0.75rem] border border-[#1f1f1f] bg-[#faf9f7]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-[#cfc9be] bg-white shadow-[0_10px_28px_rgba(26,25,23,0.08)]">
      <div className="flex items-center gap-1.5 border-b border-[#e4dfd6] bg-[#f3f1ec] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#d4cdc2]" />
        <span className="h-2 w-2 rounded-full bg-[#d4cdc2]" />
        <span className="h-2 w-2 rounded-full bg-[#d4cdc2]" />
        <div className="ml-2 h-4 flex-1 rounded-sm bg-[#e8e4db]" />
      </div>
      <div className="bg-[#faf9f7]">{children}</div>
    </div>
  );
}

/** Sketch-style skeleton bars */
function WireBar({
  className,
  dashed,
}: {
  className?: string;
  dashed?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[2px] bg-[#c8c2b8]",
        dashed && "bg-[repeating-linear-gradient(90deg,#c8c2b8_0_6px,transparent_6px_10px)]",
        className,
      )}
    />
  );
}

function BadWireframeScreen({
  copy,
  viewport,
}: {
  copy: WireframeCopy;
  viewport: Viewport;
}) {
  const compact = viewport !== "desktop";

  return (
    <div className={cn("space-y-2 p-3", compact && "p-2.5")}>
      {/* Flat nav — all same weight */}
      <div className="flex flex-wrap items-center gap-2 border border-dashed border-[#bdb7ad] p-2">
        {copy.nav.map((item) => (
          <span
            key={item}
            className="text-[10px] font-medium uppercase tracking-wide text-[#5c5852]"
          >
            {item}
          </span>
        ))}
        <span className="text-[10px] font-medium uppercase tracking-wide text-[#5c5852]">
          {copy.cta}
        </span>
      </div>

      {/* Everything same size = no hierarchy */}
      <div className="space-y-2 border border-dashed border-[#bdb7ad] p-2">
        <p className="text-[11px] font-normal leading-snug text-[#3d3a36]">
          {copy.heroTitle}
        </p>
        <p className="text-[11px] font-normal leading-snug text-[#3d3a36]">
          {copy.heroBody}
        </p>
        <p className="text-[11px] font-normal leading-snug text-[#3d3a36]">
          {copy.cta}
        </p>
        <WireBar className="h-2 w-full" />
        <WireBar className="h-2 w-[92%]" />
        <WireBar className="h-2 w-[88%]" />
      </div>

      <div
        className={cn(
          "grid gap-2",
          viewport === "desktop" ? "grid-cols-3" : "grid-cols-1",
        )}
      >
        {copy.cards.map((card) => (
          <div
            key={card.label}
            className="space-y-1.5 border border-dashed border-[#bdb7ad] p-2"
          >
            <p className="text-[11px] font-normal text-[#3d3a36]">{card.label}</p>
            {Array.from({ length: card.lines }).map((_, i) => (
              <WireBar key={i} className="h-2 w-full" />
            ))}
            <p className="text-[11px] font-normal text-[#3d3a36]">{copy.cta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GoodWireframeScreen({
  copy,
  viewport,
}: {
  copy: WireframeCopy;
  viewport: Viewport;
}) {
  const compact = viewport !== "desktop";
  const isMobile = viewport === "mobile";

  return (
    <div className={cn("space-y-3 p-3", compact && "space-y-2.5 p-2.5")}>
      {/* Clear nav hierarchy */}
      <div className="flex items-center gap-2 border-b border-[#d9d3c8] pb-2">
        <div className="h-3 w-3 shrink-0 rounded-sm bg-[#2c3f55]" />
        <div className="hidden flex-1 items-center gap-3 sm:flex">
          {copy.nav.map((item, index) => (
            <span
              key={item}
              className={cn(
                "text-[9px] uppercase tracking-[0.08em]",
                index === 0
                  ? "font-semibold text-[#1a1917]"
                  : "font-medium text-[#8a847a]",
              )}
            >
              {item}
            </span>
          ))}
        </div>
        {isMobile ? (
          <div className="ml-auto flex flex-col gap-0.5">
            <WireBar className="h-0.5 w-3.5 bg-[#2c3f55]" />
            <WireBar className="h-0.5 w-3.5 bg-[#2c3f55]" />
            <WireBar className="h-0.5 w-3.5 bg-[#2c3f55]" />
          </div>
        ) : (
          <span className="ml-auto rounded-sm bg-[#2c3f55] px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-[#f7f5f1]">
            {copy.cta}
          </span>
        )}
      </div>

      {/* Hero with real hierarchy */}
      <div className="space-y-2 border border-[#d9d3c8] bg-white/60 p-3">
        <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#8a847a]">
          {copy.subtitle}
        </p>
        <p
          className={cn(
            "font-serif font-semibold leading-tight text-[#1a1917]",
            isMobile ? "text-sm" : "text-base",
          )}
        >
          {copy.heroTitle}
        </p>
        <p
          className={cn(
            "leading-relaxed text-[#6b6560]",
            isMobile ? "text-[10px]" : "text-[11px]",
          )}
        >
          {copy.heroBody}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="rounded-sm bg-[#2c3f55] px-2.5 py-1 text-[9px] font-semibold text-[#f7f5f1]">
            {copy.cta}
          </span>
          <span className="rounded-sm border border-[#cfc9be] px-2.5 py-1 text-[9px] font-medium text-[#6b6560]">
            {copy.nav[0]}
          </span>
        </div>
      </div>

      {/* Cards: label small, body medium, clear CTA weight */}
      <div
        className={cn(
          "grid gap-2",
          viewport === "desktop" ? "grid-cols-3" : "grid-cols-1",
        )}
      >
        {copy.cards.map((card, index) => (
          <div
            key={card.label}
            className="space-y-2 border border-[#d9d3c8] bg-white/50 p-2.5"
          >
            <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#8a847a]">
              {card.label}
            </p>
            <WireBar
              className={cn(
                "h-2.5 bg-[#9a948a]",
                index === 0 ? "w-[85%]" : "w-[70%]",
              )}
            />
            {Array.from({ length: Math.max(card.lines - 1, 1) }).map((_, i) => (
              <WireBar
                key={i}
                className={cn("h-1.5 w-full bg-[#d0cbbf]", i === 1 && "w-[75%]")}
              />
            ))}
            <WireBar className="mt-1 h-5 w-16 rounded-sm bg-[#2c3f55]" />
          </div>
        ))}
      </div>
    </div>
  );
}
