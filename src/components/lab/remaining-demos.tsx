"use client";

import {
  Home,
  Search,
  Settings,
  User,
  Bell,
  Mail,
  Star,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Input, Label, FieldHint } from "@/components/ui/input";
import { ComparePanel, LessonDemoHeader } from "@/components/lab/compare-panel";
import { cn } from "@/lib/utils";

type DemoShell = {
  title: string;
  hint: string;
  badLabel: string;
  goodLabel: string;
  badgeBad: string;
  badgeGood: string;
  notesBad: string[];
  notesGood: string[];
};

export function GridSpacingDemo({
  shell,
  copy,
}: {
  shell: DemoShell;
  copy: { box: string };
}) {
  return (
    <section className="space-y-4">
      <LessonDemoHeader title={shell.title} hint={shell.hint} />
      <div className="grid gap-5 lg:grid-cols-2">
        <ComparePanel
          label={shell.badLabel}
          badge={shell.badgeBad}
          variant="bad"
          notes={shell.notesBad}
        >
          <div className="rounded-lg border border-border bg-surface p-2">
            <div className="flex flex-wrap gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="rounded bg-accent-soft text-[10px] text-accent"
                  style={{
                    padding: `${2 + i * 3}px ${4 + i * 2}px`,
                    margin: i % 2 === 0 ? 7 : 2,
                  }}
                >
                  {copy.box} {i}
                </div>
              ))}
            </div>
          </div>
        </ComparePanel>
        <ComparePanel
          label={shell.goodLabel}
          badge={shell.badgeGood}
          variant="good"
          notes={shell.notesGood}
        >
          <div className="rounded-lg border border-border bg-surface p-4">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-md border border-border bg-surface-muted px-3 py-4 text-center text-xs font-medium text-foreground"
                >
                  {copy.box} {i}
                </div>
              ))}
            </div>
          </div>
        </ComparePanel>
      </div>
    </section>
  );
}

export function IconsDemo({
  shell,
  copy,
}: {
  shell: DemoShell;
  copy: { nav: string; action: string };
}) {
  return (
    <section className="space-y-4">
      <LessonDemoHeader title={shell.title} hint={shell.hint} />
      <div className="grid gap-5 lg:grid-cols-2">
        <ComparePanel
          label={shell.badLabel}
          badge={shell.badgeBad}
          variant="bad"
          notes={shell.notesBad}
        >
          <div className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4">
            <Home className="h-3 w-3 text-foreground" strokeWidth={1} />
            <Search className="h-7 w-7 text-accent" strokeWidth={3} />
            <Settings className="h-5 w-5 text-bad" strokeWidth={1.5} />
            <User className="h-8 w-8 text-good" fill="currentColor" />
            <Bell className="h-4 w-4 text-muted-foreground" strokeWidth={2.5} />
          </div>
        </ComparePanel>
        <ComparePanel
          label={shell.goodLabel}
          badge={shell.badgeGood}
          variant="good"
          notes={shell.notesGood}
        >
          <div className="space-y-3 rounded-lg border border-border bg-surface p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {copy.nav}
            </p>
            <div className="flex items-center gap-4 text-foreground">
              <Home className="h-5 w-5" strokeWidth={1.75} />
              <Search className="h-5 w-5" strokeWidth={1.75} />
              <Mail className="h-5 w-5" strokeWidth={1.75} />
              <Settings className="h-5 w-5" strokeWidth={1.75} />
              <User className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {copy.action}
            </p>
            <div className="flex items-center gap-3 text-accent">
              <Star className="h-5 w-5" strokeWidth={1.75} />
              <Heart className="h-5 w-5" strokeWidth={1.75} />
              <Bell className="h-5 w-5" strokeWidth={1.75} />
            </div>
          </div>
        </ComparePanel>
      </div>
    </section>
  );
}

export function FormsDemo({
  shell,
  copy,
}: {
  shell: DemoShell;
  copy: {
    email: string;
    password: string;
    placeholderOnly: string;
    error: string;
    hint: string;
    submit: string;
  };
}) {
  return (
    <section className="space-y-4">
      <LessonDemoHeader title={shell.title} hint={shell.hint} />
      <div className="grid gap-5 lg:grid-cols-2">
        <ComparePanel
          label={shell.badLabel}
          badge={shell.badgeBad}
          variant="bad"
          notes={shell.notesBad}
        >
          <div className="space-y-3 rounded-lg border border-border bg-surface p-4">
            <input
              className="h-9 w-full rounded border border-border px-2 text-sm"
              placeholder={copy.placeholderOnly}
            />
            <input
              className="h-9 w-full rounded border border-bad px-2 text-sm"
              placeholder={copy.password}
              type="password"
              defaultValue="123"
            />
            <p className="text-[11px] text-bad">{copy.error}</p>
            <button
              type="button"
              className="w-full rounded bg-accent py-1 text-[11px] text-accent-foreground"
            >
              {copy.submit}
            </button>
          </div>
        </ComparePanel>
        <ComparePanel
          label={shell.goodLabel}
          badge={shell.badgeGood}
          variant="good"
          notes={shell.notesGood}
        >
          <div className="space-y-4 rounded-lg border border-border bg-surface p-4">
            <div>
              <Label htmlFor="demo-email">{copy.email}</Label>
              <Input id="demo-email" type="email" autoComplete="email" />
              <FieldHint>{copy.hint}</FieldHint>
            </div>
            <div>
              <Label htmlFor="demo-password">{copy.password}</Label>
              <Input
                id="demo-password"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <Button className="w-full" type="button">
              {copy.submit}
            </Button>
          </div>
        </ComparePanel>
      </div>
    </section>
  );
}

export function HeroDemo({
  shell,
  copy,
}: {
  shell: DemoShell;
  copy: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    noiseA: string;
    noiseB: string;
    noiseC: string;
  };
}) {
  return (
    <section className="space-y-4">
      <LessonDemoHeader title={shell.title} hint={shell.hint} />
      <div className="grid gap-5 lg:grid-cols-2">
        <ComparePanel
          label={shell.badLabel}
          badge={shell.badgeBad}
          variant="bad"
          notes={shell.notesBad}
        >
          <div className="space-y-2 rounded-lg border border-border bg-surface p-4 text-center">
            <p className="text-sm font-semibold">{copy.title}</p>
            <p className="text-sm font-semibold">{copy.noiseA}</p>
            <p className="text-sm font-semibold">{copy.noiseB}</p>
            <p className="text-xs">{copy.body}</p>
            <p className="text-xs font-semibold text-accent">{copy.noiseC}</p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <span className="rounded bg-accent px-2 py-1 text-[10px] text-accent-foreground">
                {copy.primary}
              </span>
              <span className="rounded bg-accent px-2 py-1 text-[10px] text-accent-foreground">
                {copy.secondary}
              </span>
              <span className="rounded bg-accent px-2 py-1 text-[10px] text-accent-foreground">
                {copy.noiseA}
              </span>
            </div>
          </div>
        </ComparePanel>
        <ComparePanel
          label={shell.goodLabel}
          badge={shell.badgeGood}
          variant="good"
          notes={shell.notesGood}
        >
          <div className="space-y-4 rounded-lg border border-border bg-surface p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              {copy.eyebrow}
            </p>
            <p className="max-w-sm font-serif text-2xl font-semibold tracking-tight text-foreground">
              {copy.title}
            </p>
            <p className="max-w-sm text-sm text-muted-foreground">{copy.body}</p>
            <div className="flex flex-wrap gap-2">
              <Button>{copy.primary}</Button>
              <Button variant="secondary">{copy.secondary}</Button>
            </div>
          </div>
        </ComparePanel>
      </div>
    </section>
  );
}

export function GestaltDemo({
  shell,
  copy,
}: {
  shell: DemoShell;
  copy: { groupA: string; groupB: string; item: string };
}) {
  return (
    <section className="space-y-4">
      <LessonDemoHeader title={shell.title} hint={shell.hint} />
      <div className="grid gap-5 lg:grid-cols-2">
        <ComparePanel
          label={shell.badLabel}
          badge={shell.badgeBad}
          variant="bad"
          notes={shell.notesBad}
        >
          <div className="relative h-44 rounded-lg border border-border bg-surface">
            {[
              [8, 12],
              [40, 48],
              [70, 18],
              [22, 70],
              [58, 62],
              [12, 40],
            ].map(([t, l], i) => (
              <div
                key={i}
                className="absolute rounded border border-border bg-surface-muted px-2 py-1 text-[10px]"
                style={{ top: `${t}%`, left: `${l}%` }}
              >
                {copy.item} {i + 1}
              </div>
            ))}
          </div>
        </ComparePanel>
        <ComparePanel
          label={shell.goodLabel}
          badge={shell.badgeGood}
          variant="good"
          notes={shell.notesGood}
        >
          <div className="grid grid-cols-2 gap-4 rounded-lg border border-border bg-surface p-4">
            <div className="space-y-2 rounded-md border border-border p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                {copy.groupA}
              </p>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded bg-surface-muted px-2 py-2 text-xs text-foreground"
                >
                  {copy.item} {i}
                </div>
              ))}
            </div>
            <div className="space-y-2 rounded-md border border-border p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                {copy.groupB}
              </p>
              {[4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded bg-surface-muted px-2 py-2 text-xs text-foreground"
                >
                  {copy.item} {i}
                </div>
              ))}
            </div>
          </div>
        </ComparePanel>
      </div>
    </section>
  );
}

export function RefinementDemo({
  shell,
  items,
}: {
  shell: DemoShell & { checklistTitle: string };
  items: string[];
}) {
  return (
    <section className="space-y-4">
      <LessonDemoHeader title={shell.title} hint={shell.hint} />
      <div className="grid gap-5 lg:grid-cols-2">
        <ComparePanel
          label={shell.badLabel}
          badge={shell.badgeBad}
          variant="bad"
          notes={shell.notesBad}
        >
          <div className="space-y-2 rounded-lg border border-dashed border-bad/40 bg-bad-soft/30 p-4">
            <p className="text-sm font-medium text-bad">{shell.badLabel}</p>
            <p className="text-xs text-muted-foreground">
              {/* intentional sparse rough mock */}
              …
            </p>
            <div className="flex gap-1">
              <span className="rounded bg-accent px-1 text-[10px] text-accent-foreground">
                a
              </span>
              <span className="rounded bg-accent px-1 text-[10px] text-accent-foreground">
                b
              </span>
              <span className="rounded bg-accent px-1 text-[10px] text-accent-foreground">
                c
              </span>
            </div>
          </div>
        </ComparePanel>
        <ComparePanel
          label={shell.goodLabel}
          badge={shell.badgeGood}
          variant="good"
          notes={shell.notesGood}
        >
          <Card className="border-border shadow-none">
            <CardHeader>
              <p className="text-sm font-medium">{shell.checklistTitle}</p>
            </CardHeader>
            <CardBody className="space-y-2 pt-0">
              {items.map((item, index) => (
                <label
                  key={item}
                  className={cn(
                    "flex cursor-default items-start gap-2 rounded-md border border-border px-3 py-2 text-sm",
                  )}
                >
                  <input
                    type="checkbox"
                    className="mt-1"
                    defaultChecked={index < 2}
                    readOnly
                  />
                  <span>{item}</span>
                </label>
              ))}
            </CardBody>
          </Card>
        </ComparePanel>
      </div>
    </section>
  );
}
