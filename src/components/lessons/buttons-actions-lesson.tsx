import { LessonShell } from "@/components/lab/lesson-shell";
import { RulesList } from "@/components/lab/rules-list";
import { References } from "@/components/lab/references";
import { AppliedPanel } from "@/components/lab/applied-panel";
import { LessonSection } from "@/components/lab/lesson-section";
import { ButtonsActionsDemo } from "@/components/lab/buttons-actions-demo";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { LocalizedLesson } from "@/content/lessons";
import type { Dictionary } from "@/i18n/dictionaries/types";

/**
 * Lesson 3.1 — Buttons and actions.
 * Primary demo: action hierarchy Bad/Good + living Button variants.
 */
export function ButtonsActionsLesson({
  lesson,
  dict,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
}) {
  const t = dict.buttonsActions;

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

        <ButtonsActionsDemo
          title={t.demo.title}
          hint={t.demo.hint}
          badLabel={t.demo.badLabel}
          goodLabel={t.demo.goodLabel}
          badgeBad={dict.common.bad}
          badgeGood={dict.common.good}
          variantsTitle={t.demo.variantsTitle}
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
