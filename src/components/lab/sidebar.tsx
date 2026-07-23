"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";
import { groupLessonsByModule, type Lesson } from "@/content/lessons";

export function LabSidebar() {
  const pathname = usePathname();
  const groups = groupLessonsByModule();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[var(--sidebar-width)] flex-col border-r border-border bg-surface md:flex">
      <div className="flex items-center gap-2.5 border-b border-border px-5 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <BookOpen className="h-4 w-4" aria-hidden />
        </div>
        <div className="min-w-0">
          <Link
            href="/"
            className="block truncate text-sm font-semibold tracking-tight text-foreground"
          >
            Deliberate UI
          </Link>
          <p className="truncate text-xs text-muted-foreground">
            Simulated learning lab
          </p>
        </div>
      </div>

      <nav
        className="flex-1 overflow-y-auto px-3 py-4"
        aria-label="Lesson index"
      >
        {groups.map((group) => (
          <div key={group.module} className="mb-5">
            <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {group.module}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((lesson) => (
                <LessonNavItem
                  key={lesson.slug}
                  lesson={lesson}
                  active={pathname === `/lab/${lesson.slug}`}
                />
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-border px-4 py-3">
        <p className="text-xs leading-relaxed text-muted-foreground">
          This page applies the design rules it teaches.
        </p>
      </div>
    </aside>
  );
}

function LessonNavItem({
  lesson,
  active,
}: {
  lesson: Lesson;
  active: boolean;
}) {
  const ready = lesson.status === "ready";
  const className = cn(
    "group flex w-full items-start gap-2 rounded-md px-2 py-2 text-left transition-colors",
    active
      ? "bg-accent-soft text-foreground"
      : ready
        ? "text-foreground hover:bg-surface-muted"
        : "cursor-default text-muted-foreground/70",
  );

  const content = (
    <>
      <CircleDot
        className={cn(
          "mt-0.5 h-3.5 w-3.5 shrink-0",
          active ? "text-accent" : ready ? "text-muted-foreground" : "text-border",
        )}
        aria-hidden
      />
      <span className="min-w-0">
        <span className="block text-[11px] font-medium text-muted-foreground">
          {lesson.lessonIndex}
        </span>
        <span
          className={cn(
            "block text-sm leading-snug",
            active ? "font-medium" : "font-normal",
          )}
        >
          {lesson.title}
        </span>
      </span>
    </>
  );

  if (!ready) {
    return (
      <li>
        <div className={className} aria-disabled="true">
          {content}
        </div>
      </li>
    );
  }

  return (
    <li>
      <Link href={`/lab/${lesson.slug}`} className={className}>
        {content}
      </Link>
    </li>
  );
}
