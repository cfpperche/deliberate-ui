import { ArrowRight, BookOpen, Layers, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import {
  getReadyLessons,
  lessonDefinitions,
  localizeLessons,
} from "@/content/lessons";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { LinkButton } from "@/components/ui/link-button";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { localePath } from "@/i18n/paths";

const featureIcons = [
  <Layers key="layers" className="h-4 w-4" />,
  <Sparkles key="sparkles" className="h-4 w-4" />,
  <BookOpen key="book" className="h-4 w-4" />,
];

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return {
    title: {
      default: dict.meta.titleDefault,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const lessons = localizeLessons(dict);
  const ready = getReadyLessons(dict);
  const stats = dict.home.curriculumStats
    .replace("{ready}", String(ready.length))
    .replace("{planned}", String(lessonDefinitions.length - ready.length));

  return (
    <div className="min-h-full">
      <header className="border-b border-border bg-surface/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <BookOpen className="h-4 w-4" aria-hidden />
            </div>
            <Text as="span" size="sm" weight="semibold" className="tracking-tight">
              {dict.common.brand}
            </Text>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <LinkButton
              href={localePath(locale, "/lab/type-hierarchy")}
              variant="ghost"
              size="sm"
            >
              {dict.common.openLab}
            </LinkButton>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <Badge variant="accent" className="mb-4">
            {dict.home.badge}
          </Badge>
          <Heading level={1} className="md:text-5xl">
            {dict.home.title}
          </Heading>
          <Text size="md" tone="muted" className="mt-5 max-w-xl">
            {dict.home.lead}
          </Text>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={localePath(locale, "/lab/type-hierarchy")}>
              {dict.home.startLesson}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </LinkButton>
            <LinkButton
              href="https://github.com/cfpperche/deliberate-ui"
              variant="secondary"
              external
            >
              {dict.common.github}
            </LinkButton>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {dict.home.features.map((feature, index) => (
            <Card key={feature.title}>
              <CardBody className="space-y-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-soft text-accent">
                  {featureIcons[index]}
                </div>
                <Heading level={4} as="h3">
                  {feature.title}
                </Heading>
                <Text size="sm" tone="muted">
                  {feature.body}
                </Text>
              </CardBody>
            </Card>
          ))}
        </div>

        <section id="curriculum" className="mt-16 scroll-mt-20">
          <div className="mb-4 flex items-end justify-between gap-4">
            <Heading level={2}>{dict.home.curriculumTitle}</Heading>
            <Text size="xs" tone="muted">
              {stats}
            </Text>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {lessons.map((lesson) => (
              <Card
                key={lesson.slug}
                className="transition-colors hover:bg-surface-muted/40"
              >
                <CardBody className="flex items-start justify-between gap-3 py-4">
                  <div>
                    <Text size="xs" tone="muted" weight="medium">
                      {lesson.lessonIndex} · {lesson.module}
                    </Text>
                    <Text size="sm" weight="medium" className="mt-1">
                      {lesson.title}
                    </Text>
                    <Text size="xs" tone="muted" className="mt-1">
                      {lesson.summary}
                    </Text>
                  </div>
                  {lesson.status === "ready" ? (
                    <LinkButton
                      href={localePath(locale, `/lab/${lesson.slug}`)}
                      variant="ghost"
                      size="sm"
                      className="shrink-0 px-0"
                    >
                      {dict.common.open}
                    </LinkButton>
                  ) : (
                    <Badge variant="muted">{dict.common.soon}</Badge>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-5xl px-6">
          <Text size="xs" tone="muted">
            {dict.home.footer}
          </Text>
        </div>
      </footer>
    </div>
  );
}
