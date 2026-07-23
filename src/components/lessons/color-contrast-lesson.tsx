import { LessonShell } from "@/components/lab/lesson-shell";
import { RulesList } from "@/components/lab/rules-list";
import { References } from "@/components/lab/references";
import { AppliedPanel } from "@/components/lab/applied-panel";
import { LessonSection } from "@/components/lab/lesson-section";
import { ColorContrastDemo } from "@/components/lab/color-contrast-demo";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { LocalizedLesson } from "@/content/lessons";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

/**
 * Lesson 2.1 — Color and contrast.
 * Primary demo: Bad/Good UI + design-system palette swatches.
 */
export function ColorContrastLesson({
  lesson,
  dict,
  locale: _locale,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
  locale: Locale;
}) {
  const t = dict.colorContrast;

  return (
    <LessonShell
      lesson={lesson}
      designSystemLabel={dict.common.designSystemApplied}
    >
      <div className="space-y-8">
        <LessonSection>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
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
            <RulesList title={t.rulesTitle} rules={[...t.rules]} />
          </div>
        </LessonSection>

        <ColorContrastDemo
          title={t.demo.title}
          hint={t.demo.hint}
          badLabel={t.demo.badLabel}
          goodLabel={t.demo.goodLabel}
          badgeBad={dict.common.bad}
          badgeGood={dict.common.good}
          paletteTitle={t.demo.paletteTitle}
          palette={[...t.demo.palette]}
          notesBad={[...t.demo.notesBad]}
          notesGood={[...t.demo.notesGood]}
          copy={t.demo.copy}
        />

        <AppliedPanel title={t.appliedTitle} items={[...t.applied]} />

        <References title={t.referencesTitle} items={t.references} />
      </div>
    </LessonShell>
  );
}
