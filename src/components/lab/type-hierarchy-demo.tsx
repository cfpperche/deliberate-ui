"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

type DemoCopy = {
  productTitle: string;
  productBody: string;
  metricLabel: string;
  metricHelp: string;
  cta: string;
};

export function TypeHierarchyDemo({
  weakLabel,
  clearLabel,
  badLabel,
  goodLabel,
  demo,
}: {
  weakLabel: string;
  clearLabel: string;
  badLabel: string;
  goodLabel: string;
  demo: DemoCopy;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Card className="h-full overflow-hidden">
          <CardHeader>
            <span className="text-sm font-medium text-foreground">{weakLabel}</span>
            <Badge variant="bad">{badLabel}</Badge>
          </CardHeader>
          <CardBody className="space-y-3 bg-surface">
            <p className="text-base font-normal text-foreground">{demo.productTitle}</p>
            <p className="text-base font-normal text-foreground">{demo.productBody}</p>
            <p className="text-base font-normal text-foreground">{demo.metricLabel}</p>
            <p className="text-base font-normal text-foreground">12,480</p>
            <p className="text-base font-normal text-foreground">{demo.metricHelp}</p>
            <button
              type="button"
              className="rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground"
            >
              {demo.cta}
            </button>
          </CardBody>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.08 }}
      >
        <Card className="h-full overflow-hidden ring-1 ring-good/15">
          <CardHeader>
            <span className="text-sm font-medium text-foreground">{clearLabel}</span>
            <Badge variant="good">{goodLabel}</Badge>
          </CardHeader>
          <CardBody className="space-y-4 bg-surface">
            <div>
              <p
                className="font-serif text-xl font-semibold text-foreground"
                style={{
                  lineHeight: "var(--leading-tight)",
                  letterSpacing: "-0.02em",
                }}
              >
                {demo.productTitle}
              </p>
              <p
                className="mt-2 max-w-sm text-sm text-muted-foreground"
                style={{ lineHeight: "var(--leading-relaxed)" }}
              >
                {demo.productBody}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                {demo.metricLabel}
              </p>
              <p
                className="mt-1 text-2xl font-semibold tabular-nums text-foreground"
                style={{ lineHeight: "var(--leading-tight)" }}
              >
                12,480
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{demo.metricHelp}</p>
            <button
              type="button"
              className="rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {demo.cta}
            </button>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
