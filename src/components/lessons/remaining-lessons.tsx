import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonFrame } from "@/components/lessons/lesson-frame";
import {
  GridSpacingDemo,
  IconsDemo,
  FormsDemo,
  HeroDemo,
  GestaltDemo,
  RefinementDemo,
} from "@/components/lab/remaining-demos";
import { LessonShell } from "@/components/lab/lesson-shell";
import { AppliedPanel } from "@/components/lab/applied-panel";
import { References } from "@/components/lab/references";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card, CardBody } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import type { LocalizedLesson } from "@/content/lessons";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import { lessonDefinitions } from "@/content/lessons";

function shellFrom(
  dict: Dictionary,
  demo: {
    title: string;
    hint: string;
    badLabel: string;
    goodLabel: string;
    notesBad: string[];
    notesGood: string[];
  },
) {
  return {
    title: demo.title,
    hint: demo.hint,
    badLabel: demo.badLabel,
    goodLabel: demo.goodLabel,
    badgeBad: dict.common.bad,
    badgeGood: dict.common.good,
    notesBad: [...demo.notesBad],
    notesGood: [...demo.notesGood],
  };
}

export function WelcomeLesson({
  lesson,
  dict,
  locale,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
  locale: Locale;
}) {
  const t = dict.welcome;
  const ready = lessonDefinitions.filter((l) => l.status === "ready" && l.slug !== "welcome");

  return (
    <LessonShell
      lesson={lesson}
      designSystemLabel={dict.common.designSystemApplied}
    >
      <div className="space-y-8">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <Heading level={2}>{t.theory}</Heading>
            <div className="space-y-3">
              <Text className="ste-rule">{t.lead}</Text>
              <Text size="sm" tone="muted">
                {t.p1}
              </Text>
              <Text size="sm" tone="muted">
                {t.p2}
              </Text>
            </div>
          </div>
          <Card>
            <CardBody className="space-y-3">
              <Heading level={4} as="h2">
                {t.pathTitle}
              </Heading>
              <ul className="space-y-2">
                {t.path.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </section>

        <section className="space-y-3">
          <Heading level={2}>{t.startTitle}</Heading>
          <div className="grid gap-3 sm:grid-cols-2">
            {ready.slice(0, 6).map((item) => {
              const title = dict.lessons[item.slug].title;
              return (
                <Card key={item.slug}>
                  <CardBody className="flex items-center justify-between gap-3 py-4">
                    <div>
                      <Text size="xs" tone="muted" weight="medium">
                        {item.lessonIndex}
                      </Text>
                      <Text size="sm" weight="medium" className="mt-0.5">
                        {title}
                      </Text>
                    </div>
                    <LinkButton
                      href={localePath(locale, `/lab/${item.slug}`)}
                      size="sm"
                      variant="secondary"
                    >
                      {dict.common.open}
                    </LinkButton>
                  </CardBody>
                </Card>
              );
            })}
          </div>
          <Text size="sm" tone="muted">
            <Link
              href={localePath(locale, "/lab/type-hierarchy")}
              className="font-medium text-accent hover:underline"
            >
              {t.cta}
            </Link>
          </Text>
        </section>

        <AppliedPanel title={t.appliedTitle} items={[...t.applied]} />
        <References title={t.referencesTitle} items={t.references} />
      </div>
    </LessonShell>
  );
}

export function GridSpacingLesson({
  lesson,
  dict,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
}) {
  const t = dict.gridSpacing;
  return (
    <LessonFrame
      lesson={lesson}
      dict={dict}
      copy={t}
      demo={<GridSpacingDemo shell={shellFrom(dict, t.demo)} copy={t.demo.copy} />}
    />
  );
}

export function IconsLesson({
  lesson,
  dict,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
}) {
  const t = dict.iconsLesson;
  return (
    <LessonFrame
      lesson={lesson}
      dict={dict}
      copy={t}
      demo={<IconsDemo shell={shellFrom(dict, t.demo)} copy={t.demo.copy} />}
    />
  );
}

export function FormsInputsLesson({
  lesson,
  dict,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
}) {
  const t = dict.formsInputs;
  return (
    <LessonFrame
      lesson={lesson}
      dict={dict}
      copy={t}
      demo={<FormsDemo shell={shellFrom(dict, t.demo)} copy={t.demo.copy} />}
    />
  );
}

export function HeroSectionsLesson({
  lesson,
  dict,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
}) {
  const t = dict.heroSections;
  return (
    <LessonFrame
      lesson={lesson}
      dict={dict}
      copy={t}
      demo={<HeroDemo shell={shellFrom(dict, t.demo)} copy={t.demo.copy} />}
    />
  );
}

export function GestaltLesson({
  lesson,
  dict,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
}) {
  const t = dict.gestaltLesson;
  return (
    <LessonFrame
      lesson={lesson}
      dict={dict}
      copy={t}
      demo={<GestaltDemo shell={shellFrom(dict, t.demo)} copy={t.demo.copy} />}
    />
  );
}

export function RefinementLesson({
  lesson,
  dict,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
}) {
  const t = dict.refinementLesson;
  return (
    <LessonFrame
      lesson={lesson}
      dict={dict}
      copy={t}
      demo={
        <RefinementDemo
          shell={{
            ...shellFrom(dict, t.demo),
            checklistTitle: t.demo.checklistTitle,
          }}
          items={[...t.demo.items]}
        />
      }
    />
  );
}
