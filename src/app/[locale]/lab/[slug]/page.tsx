import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLesson, lessonDefinitions } from "@/content/lessons";
import { LessonShell } from "@/components/lab/lesson-shell";
import { TypeHierarchyDemo } from "@/components/lab/type-hierarchy-demo";
import { TypeScaleChart } from "@/components/lab/type-scale-chart";
import { HierarchyDiagram } from "@/components/lab/hierarchy-diagram";
import { RulesList } from "@/components/lab/rules-list";
import { Card, CardBody } from "@/components/ui/card";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
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

  if (slug === "type-hierarchy") {
    const t = dict.typeHierarchy;
    return (
      <LessonShell lesson={lesson} designSystemLabel={dict.common.designSystemApplied}>
        <div className="space-y-8">
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="font-serif text-lg font-semibold tracking-tight">
                {t.theory}
              </h2>
              <div
                className="space-y-3 text-sm text-muted-foreground"
                style={{ lineHeight: "var(--leading-relaxed)" }}
              >
                <p className="text-foreground ste-rule">{t.lead}</p>
                <p>{t.p1}</p>
                <p>{t.p2}</p>
              </div>
              <RulesList title={t.rulesTitle} rules={[...t.rules]} />
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-lg font-semibold tracking-tight">
                {t.tokensTitle}
              </h2>
              <TypeScaleChart
                title={t.chartTitle}
                subtitle={t.chartSubtitle}
                sizeLabel={t.chartSize}
              />
              <HierarchyDiagram
                title={t.diagramTitle}
                subtitle={t.diagramSubtitle}
                loadingLabel={dict.common.loadingDiagram}
                errorLabel={dict.common.diagramError}
                nodes={t.diagramNodes}
              />
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-end justify-between gap-3">
              <h2 className="font-serif text-lg font-semibold tracking-tight">
                {t.liveExample}
              </h2>
              <p className="text-xs text-muted-foreground">{t.compareHint}</p>
            </div>
            <TypeHierarchyDemo
              weakLabel={t.weak}
              clearLabel={t.clear}
              badLabel={dict.common.bad}
              goodLabel={dict.common.good}
              demo={t.demo}
            />
          </section>

          <section>
            <Card className="bg-accent-soft/40">
              <CardBody className="space-y-2">
                <p className="text-sm font-medium text-foreground">{t.appliedTitle}</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {t.applied.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </section>
        </div>
      </LessonShell>
    );
  }

  notFound();
}
