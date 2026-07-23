import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLesson, lessonDefinitions } from "@/content/lessons";
import { TypeHierarchyLesson } from "@/components/lessons/type-hierarchy-lesson";
import { TypeScaleLesson } from "@/components/lessons/type-scale-lesson";
import { ColorContrastLesson } from "@/components/lessons/color-contrast-lesson";
import { ButtonsActionsLesson } from "@/components/lessons/buttons-actions-lesson";
import {
  WelcomeLesson,
  GridSpacingLesson,
  IconsLesson,
  FormsInputsLesson,
  HeroSectionsLesson,
  GestaltLesson,
  RefinementLesson,
} from "@/components/lessons/remaining-lessons";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { LocalizedLesson } from "@/content/lessons";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

type LessonComponent = (props: {
  lesson: LocalizedLesson;
  dict: Dictionary;
  locale: Locale;
}) => React.ReactNode;

/** Map ready lesson slugs → page compositions (keep routes thin). */
const lessonComponents: Record<string, LessonComponent> = {
  welcome: WelcomeLesson,
  "type-hierarchy": TypeHierarchyLesson,
  "type-scale": TypeScaleLesson,
  "color-contrast": ColorContrastLesson,
  "buttons-actions": ButtonsActionsLesson,
  "grid-spacing": GridSpacingLesson,
  icons: IconsLesson,
  "forms-inputs": FormsInputsLesson,
  "hero-sections": HeroSectionsLesson,
  gestalt: GestaltLesson,
  refinement: RefinementLesson,
};

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

  const Lesson = lessonComponents[slug];
  if (!Lesson) {
    notFound();
  }

  return <Lesson lesson={lesson} dict={dict} locale={locale} />;
}
