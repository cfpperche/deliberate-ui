import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Sparkles } from "lucide-react";
import { lessons, getReadyLessons } from "@/content/lessons";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";

export default function HomePage() {
  const ready = getReadyLessons();

  return (
    <div className="min-h-full">
      <header className="border-b border-border bg-surface/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <BookOpen className="h-4 w-4" aria-hidden />
            </div>
            <span className="text-sm font-semibold tracking-tight">Deliberate UI</span>
          </div>
          <Link
            href="/lab/type-hierarchy"
            className="text-sm font-medium text-accent hover:underline"
          >
            Open lab
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <Badge variant="accent" className="mb-4">
            Light theme · Living design system
          </Badge>
          <h1
            className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
            style={{ lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            Interface craft with intent
          </h1>
          <p
            className="mt-5 max-w-xl text-md text-muted-foreground"
            style={{ lineHeight: "var(--leading-relaxed)" }}
          >
            Deliberate UI is a simulated learning lab. It is not a full course product.
            Each page teaches one idea, shows a visual example, and applies the same
            rule to the site itself.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/lab/type-hierarchy"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Start lesson 1.1
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="https://github.com/cfpperche/deliberate-ui"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <Feature
            icon={<Layers className="h-4 w-4" />}
            title="Design system on itself"
            body="Tokens for type, color, and space drive both demos and chrome."
          />
          <Feature
            icon={<Sparkles className="h-4 w-4" />}
            title="Visual demos"
            body="Charts, diagrams, and motion illustrate rules with clear examples."
          />
          <Feature
            icon={<BookOpen className="h-4 w-4" />}
            title="STE100 where it fits"
            body="Technical rules use short, active, unambiguous sentences."
          />
        </div>

        <section id="curriculum" className="mt-16 scroll-mt-20">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-serif text-xl font-semibold tracking-tight">Curriculum map</h2>
            <p className="text-xs text-muted-foreground">
              {ready.length} ready · {lessons.length - ready.length} planned
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {lessons.map((lesson) => (
              <Card key={lesson.slug} className="transition-colors hover:bg-surface-muted/40">
                <CardBody className="flex items-start justify-between gap-3 py-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {lesson.lessonIndex} · {lesson.module}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{lesson.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{lesson.summary}</p>
                  </div>
                  {lesson.status === "ready" ? (
                    <Link
                      href={`/lab/${lesson.slug}`}
                      className="shrink-0 text-xs font-medium text-accent hover:underline"
                    >
                      Open
                    </Link>
                  ) : (
                    <Badge variant="muted">Soon</Badge>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-5xl px-6 text-xs text-muted-foreground">
          Original instructional demos. Not affiliated with any paid course brand.
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
        <p className="text-sm text-muted-foreground" style={{ lineHeight: "var(--leading-relaxed)" }}>
          {body}
        </p>
      </CardBody>
    </Card>
  );
}
