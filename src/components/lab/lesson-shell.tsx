import { Badge } from "@/components/ui/badge";
import type { LocalizedLesson } from "@/content/lessons";

export function LessonShell({
  lesson,
  designSystemLabel,
  children,
}: {
  lesson: LocalizedLesson;
  designSystemLabel: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-5xl px-6 py-10 md:px-10 md:py-12">
      <header className="mb-10 max-w-2xl">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="accent">
            {lesson.lessonIndex} · {lesson.module}
          </Badge>
          <Badge variant="muted">{designSystemLabel}</Badge>
        </div>
        <h1
          className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-[2.25rem]"
          style={{
            lineHeight: "var(--leading-tight)",
            letterSpacing: "-0.02em",
          }}
        >
          {lesson.title}
        </h1>
        <p
          className="mt-3 max-w-xl text-md text-muted-foreground"
          style={{ lineHeight: "var(--leading-relaxed)" }}
        >
          {lesson.summary}
        </p>
      </header>
      {children}
    </article>
  );
}
