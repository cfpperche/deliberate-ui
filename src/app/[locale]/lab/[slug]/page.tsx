import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLesson, lessonDefinitions } from "@/content/lessons";
import { TypeHierarchyLesson } from "@/components/lessons/type-hierarchy-lesson";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

/** Map ready lesson slugs → page compositions (keep routes thin). */
const lessonComponents = {
  "type-hierarchy": TypeHierarchyLesson,
} as const;

export function generateStaticParams() {
  const ready = lessonDefinitions.filter((lesson) => lesson.status === "ready");
  return locales.flatMap((locale) =>
    ready.map((lesson) => ({ locale, slug: lesson.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return { title: "Lesson" };
  const dict = getDictionary(raw);
  const lesson = getLesson(dict, slug);
  if (!lesson) return { title: dict.lab.notAvailableTitle };
  return {
    title: `${lesson.lessonIndex} ${lesson.title}`,
    description: lesson.summary,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const lesson = getLesson(dict, slug);

  if (!lesson || lesson.status !== "ready") {
    notFound();
  }

  const Lesson =
    lessonComponents[slug as keyof typeof lessonComponents] ?? null;

  if (!Lesson) {
    notFound();
  }

  return <Lesson lesson={lesson} dict={dict} />;
}
