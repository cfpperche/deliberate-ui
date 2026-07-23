import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLesson, lessons } from "@/content/lessons";
import { LessonShell } from "@/components/lab/lesson-shell";
import { TypeHierarchyDemo } from "@/components/lab/type-hierarchy-demo";
import { TypeScaleChart } from "@/components/lab/type-scale-chart";
import { HierarchyDiagram } from "@/components/lab/hierarchy-diagram";
import { RulesList } from "@/components/lab/rules-list";
import { Card, CardBody } from "@/components/ui/card";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessons
    .filter((lesson) => lesson.status === "ready")
    .map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Lesson" };
  return {
    title: `${lesson.lessonIndex} ${lesson.title}`,
    description: lesson.summary,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);

  if (!lesson || lesson.status !== "ready") {
    notFound();
  }

  if (slug === "type-hierarchy") {
    return (
      <LessonShell lesson={lesson}>
        <div className="space-y-8">
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="font-serif text-lg font-semibold tracking-tight">Theory</h2>
              <div className="space-y-3 text-sm text-muted-foreground" style={{ lineHeight: "var(--leading-relaxed)" }}>
                <p className="text-foreground ste-rule">
                  Type hierarchy assigns a clear role to each text level.
                </p>
                <p>
                  Users scan first. They read second. Strong hierarchy reduces scan cost
                  and makes actions easier to find.
                </p>
                <p>
                  This lab page uses the same type tokens that the examples show. The
                  site follows the rule it teaches.
                </p>
              </div>
              <RulesList
                title="Practical rules (STE100)"
                rules={[
                  "Give each text role one size and one weight.",
                  "Use at most four primary levels on a screen.",
                  "Make the title the strongest text in the block.",
                  "Keep body text between 15px and 16px for long reading.",
                  "Use muted color only for secondary information.",
                ]}
              />
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-lg font-semibold tracking-tight">Tokens in use</h2>
              <TypeScaleChart />
              <HierarchyDiagram />
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-end justify-between gap-3">
              <h2 className="font-serif text-lg font-semibold tracking-tight">
                Live example
              </h2>
              <p className="text-xs text-muted-foreground">Compare weak vs clear hierarchy</p>
            </div>
            <TypeHierarchyDemo />
          </section>

          <section>
            <Card className="bg-accent-soft/40">
              <CardBody className="space-y-2">
                <p className="text-sm font-medium text-foreground">Applied on this site</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  <li>Page title uses serif, large size, tight tracking.</li>
                  <li>Body and meta use muted color and smaller size.</li>
                  <li>Sidebar labels use uppercase micro type for orientation.</li>
                  <li>CSS variables define the full type scale.</li>
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
