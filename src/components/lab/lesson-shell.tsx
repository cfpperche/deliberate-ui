import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
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
        <Heading level={1}>{lesson.title}</Heading>
        <Text size="md" tone="muted" className="mt-3 max-w-xl">
          {lesson.summary}
        </Text>
      </header>
      {children}
    </article>
  );
}
