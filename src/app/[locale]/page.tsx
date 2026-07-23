import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import {
  getReadyLessons,
  lessonDefinitions,
  localizeLessons,
} from "@/content/lessons";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";
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
            <span className="text-sm font-semibold tracking-tight">
              {dict.common.brand}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <Link
              href={localePath(locale, "/lab/type-hierarchy")}
              className="text-sm font-medium text-accent hover:underline"
            >
              {dict.common.openLab}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <Badge variant="accent" className="mb-4">
            {dict.home.badge}
          </Badge>
          <h1
            className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
            style={{ lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            {dict.home.title}
          </h1>
          <p
            className="mt-5 max-w-xl text-md text-muted-foreground"
            style={{ lineHeight: "var(--leading-relaxed)" }}
          >
            {dict.home.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localePath(locale, "/lab/type-hierarchy")}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {dict.home.startLesson}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="https://github.com/cfpperche/deliberate-ui"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.common.github}
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {dict.home.features.map((feature, index) => (
            <Feature
              key={feature.title}
              icon={featureIcons[index]}
              title={feature.title}
              body={feature.body}
            />
          ))}
        </div>

        <section id="curriculum" className="mt-16 scroll-mt-20">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-serif text-xl font-semibold tracking-tight">
              {dict.home.curriculumTitle}
            </h2>
            <p className="text-xs text-muted-foreground">{stats}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {lessons.map((lesson) => (
              <Card
                key={lesson.slug}
                className="transition-colors hover:bg-surface-muted/40"
              >
                <CardBody className="flex items-start justify-between gap-3 py-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {lesson.lessonIndex} · {lesson.module}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {lesson.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {lesson.summary}
                    </p>
                  </div>
                  {lesson.status === "ready" ? (
                    <Link
                      href={localePath(locale, `/lab/${lesson.slug}`)}
                      className="shrink-0 text-xs font-medium text-accent hover:underline"
                    >
                      {dict.common.open}
                    </Link>
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
        <div className="mx-auto max-w-5xl px-6 text-xs text-muted-foreground">
          {dict.home.footer}
        </div>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Card>
      <CardBody className="space-y-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-soft text-accent">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p
          className="text-sm text-muted-foreground"
          style={{ lineHeight: "var(--leading-relaxed)" }}
        >
          {body}
        </p>
      </CardBody>
    </Card>
  );
}
