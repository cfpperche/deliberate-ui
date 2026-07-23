import { LessonShell } from "@/components/lab/lesson-shell";
import { RulesList } from "@/components/lab/rules-list";
import { References } from "@/components/lab/references";
import { AppliedPanel } from "@/components/lab/applied-panel";
import { LessonSection } from "@/components/lab/lesson-section";
import {
  TypeScaleSpecimen,
  type ScaleStep,
} from "@/components/lab/type-scale-specimen";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { LocalizedLesson } from "@/content/lessons";
import type { Dictionary } from "@/i18n/dictionaries/types";

/**
 * Lesson 1.2 — Type scale.
 * Primary demo: Bad/Good specimen (real sizes). No extra chart/diagram stack.
 */
export function TypeScaleLesson({
  lesson,
  dict,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
}) {
  const t = dict.typeScale;

  const goodSteps: ScaleStep[] = t.specimen.steps.map((step) => ({
    token: step.token,
    px: step.px,
    role: step.role,
    sample: step.sample,
  }));

  const badSteps: ScaleStep[] = t.specimen.badSteps.map((step) => ({
    token: step.token,
    px: step.px,
    role: step.role,
    sample: step.sample,
  }));

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

        <TypeScaleSpecimen
          title={t.specimen.title}
          hint={t.specimen.hint}
          badLabel={t.specimen.badLabel}
          goodLabel={t.specimen.goodLabel}
          badgeBad={dict.common.bad}
          badgeGood={dict.common.good}
          tokenColumn={t.specimen.tokenColumn}
          roleColumn={t.specimen.roleColumn}
          sizeColumn={t.specimen.sizeColumn}
          notesBad={[...t.specimen.notesBad]}
          notesGood={[...t.specimen.notesGood]}
          steps={goodSteps}
          badSteps={badSteps}
        />

        <AppliedPanel title={t.appliedTitle} items={[...t.applied]} />

        <References title={t.referencesTitle} items={t.references} />
      </div>
    </LessonShell>
  );
}
