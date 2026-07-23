export type LessonStatus = "ready" | "planned";

export type Lesson = {
  slug: string;
  module: string;
  moduleIndex: number;
  lessonIndex: string;
  title: string;
  summary: string;
  status: LessonStatus;
};

/**
 * Simulated curriculum index.
 * This is original instructional material, not a copy of any paid course.
 */
export const lessons: Lesson[] = [
  {
    slug: "welcome",
    module: "Welcome",
    moduleIndex: 0,
    lessonIndex: "0.1",
    title: "How to use this lab",
    summary: "Read the rules. Inspect the design system. Practice with intent.",
    status: "planned",
  },
  {
    slug: "type-hierarchy",
    module: "Typography",
    moduleIndex: 1,
    lessonIndex: "1.1",
    title: "Type hierarchy",
    summary: "Use clear levels. Guide the eye. Keep roles distinct.",
    status: "ready",
  },
  {
    slug: "type-scale",
    module: "Typography",
    moduleIndex: 1,
    lessonIndex: "1.2",
    title: "Type scale",
    summary: "Define a scale. Reuse tokens. Avoid random sizes.",
    status: "planned",
  },
  {
    slug: "color-contrast",
    module: "Color",
    moduleIndex: 2,
    lessonIndex: "2.1",
    title: "Color and contrast",
    summary: "Meet contrast rules. Limit the palette. Preserve meaning.",
    status: "planned",
  },
  {
    slug: "buttons-actions",
    module: "Components",
    moduleIndex: 3,
    lessonIndex: "3.1",
    title: "Buttons and actions",
    summary: "Show hierarchy. Define states. Make targets easy to hit.",
    status: "planned",
  },
  {
    slug: "grid-spacing",
    module: "Layout",
    moduleIndex: 4,
    lessonIndex: "4.1",
    title: "Grid and spacing",
    summary: "Use an 8pt rhythm. Align edges. Control white space.",
    status: "planned",
  },
  {
    slug: "icons",
    module: "Components",
    moduleIndex: 5,
    lessonIndex: "5.1",
    title: "Icons",
    summary: "Keep weight consistent. Align to a box. Prefer familiar symbols.",
    status: "planned",
  },
  {
    slug: "forms-inputs",
    module: "Components",
    moduleIndex: 6,
    lessonIndex: "6.1",
    title: "Forms and inputs",
    summary: "Label clearly. Show state. Reduce scan cost.",
    status: "planned",
  },
  {
    slug: "hero-sections",
    module: "Patterns",
    moduleIndex: 7,
    lessonIndex: "7.1",
    title: "Hero sections",
    summary: "Lead with one message. Support with hierarchy and space.",
    status: "planned",
  },
  {
    slug: "gestalt",
    module: "Principles",
    moduleIndex: 8,
    lessonIndex: "8.1",
    title: "Gestalt principles",
    summary: "Group by proximity and similarity. Reduce visual noise.",
    status: "planned",
  },
  {
    slug: "refinement",
    module: "Practice",
    moduleIndex: 9,
    lessonIndex: "9.1",
    title: "Refinement checklist",
    summary: "Review contrast, alignment, hierarchy, and states.",
    status: "planned",
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getReadyLessons(): Lesson[] {
  return lessons.filter((lesson) => lesson.status === "ready");
}

export function groupLessonsByModule(): { module: string; items: Lesson[] }[] {
  const map = new Map<string, Lesson[]>();
  for (const lesson of lessons) {
    const list = map.get(lesson.module) ?? [];
    list.push(lesson);
    map.set(lesson.module, list);
  }
  return Array.from(map.entries()).map(([module, items]) => ({ module, items }));
}
