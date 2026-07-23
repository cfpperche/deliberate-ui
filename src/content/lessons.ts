import type { Dictionary } from "@/i18n/dictionaries/types";

export type LessonStatus = "ready" | "planned";

export type ModuleKey = keyof Dictionary["modules"];
export type LessonSlug = keyof Dictionary["lessons"];

export type LessonDefinition = {
  slug: LessonSlug;
  moduleKey: ModuleKey;
  moduleIndex: number;
  lessonIndex: string;
  status: LessonStatus;
};

export type LocalizedLesson = LessonDefinition & {
  module: string;
  title: string;
  summary: string;
};

/**
 * Structural curriculum index (locale-independent).
 * Titles and summaries live in i18n dictionaries.
 */
export const lessonDefinitions: LessonDefinition[] = [
  {
    slug: "welcome",
    moduleKey: "welcome",
    moduleIndex: 0,
    lessonIndex: "0.1",
    status: "ready",
  },
  {
    slug: "type-hierarchy",
    moduleKey: "typography",
    moduleIndex: 1,
    lessonIndex: "1.1",
    status: "ready",
  },
  {
    slug: "type-scale",
    moduleKey: "typography",
    moduleIndex: 1,
    lessonIndex: "1.2",
    status: "ready",
  },
  {
    slug: "color-contrast",
    moduleKey: "color",
    moduleIndex: 2,
    lessonIndex: "2.1",
    status: "ready",
  },
  {
    slug: "buttons-actions",
    moduleKey: "components",
    moduleIndex: 3,
    lessonIndex: "3.1",
    status: "ready",
  },
  {
    slug: "grid-spacing",
    moduleKey: "layout",
    moduleIndex: 4,
    lessonIndex: "4.1",
    status: "ready",
  },
  {
    slug: "icons",
    moduleKey: "components",
    moduleIndex: 5,
    lessonIndex: "5.1",
    status: "ready",
  },
  {
    slug: "forms-inputs",
    moduleKey: "components",
    moduleIndex: 6,
    lessonIndex: "6.1",
    status: "ready",
  },
  {
    slug: "hero-sections",
    moduleKey: "patterns",
    moduleIndex: 7,
    lessonIndex: "7.1",
    status: "ready",
  },
  {
    slug: "gestalt",
    moduleKey: "principles",
    moduleIndex: 8,
    lessonIndex: "8.1",
    status: "ready",
  },
  {
    slug: "refinement",
    moduleKey: "practice",
    moduleIndex: 9,
    lessonIndex: "9.1",
    status: "ready",
  },
];

export function localizeLessons(dict: Dictionary): LocalizedLesson[] {
  return lessonDefinitions.map((lesson) => ({
    ...lesson,
    module: dict.modules[lesson.moduleKey],
    title: dict.lessons[lesson.slug].title,
    summary: dict.lessons[lesson.slug].summary,
  }));
}

export function getLesson(
  dict: Dictionary,
  slug: string,
): LocalizedLesson | undefined {
  return localizeLessons(dict).find((lesson) => lesson.slug === slug);
}

export function getReadyLessons(dict: Dictionary): LocalizedLesson[] {
  return localizeLessons(dict).filter((lesson) => lesson.status === "ready");
}

export function groupLessonsByModule(
  dict: Dictionary,
): { module: string; items: LocalizedLesson[] }[] {
  const map = new Map<string, LocalizedLesson[]>();
  for (const lesson of localizeLessons(dict)) {
    const list = map.get(lesson.module) ?? [];
    list.push(lesson);
    map.set(lesson.module, list);
  }
  return Array.from(map.entries()).map(([module, items]) => ({ module, items }));
}
