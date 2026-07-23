import { LessonShell } from "@/components/lab/lesson-shell";
import { RulesList } from "@/components/lab/rules-list";
import { References } from "@/components/lab/references";
import { AppliedPanel } from "@/components/lab/applied-panel";
import { LessonSection } from "@/components/lab/lesson-section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { LocalizedLesson } from "@/content/lessons";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { ReferenceItem } from "@/components/lab/references";

type LessonCopy = {
  theory: string;
  lead: string;
  p1: string;
  p2: string;
  rulesTitle: string;
  rules: string[];
  appliedTitle: string;
  applied: string[];
  referencesTitle: string;
  references: ReferenceItem[];
};

export function LessonFrame({
  lesson,
  dict,
  copy,
  demo,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
  copy: LessonCopy;
  demo: React.ReactNode;
}) {
  return (
    <LessonShell
      lesson={lesson}
      designSystemLabel={dict.common.designSystemApplied}
    >
      <div className="space-y-8">
        <LessonSection>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <Heading level={2}>{copy.theory}</Heading>
              <div className="space-y-3">
                <Text className="ste-rule">{copy.lead}</Text>
                <Text size="sm" tone="muted">
                  {copy.p1}
                </Text>
                <Text size="sm" tone="muted">
                  {copy.p2}
                </Text>
              </div>
            </div>
            <RulesList title={copy.rulesTitle} rules={[...copy.rules]} />
          </div>
        </LessonSection>

        {demo}

        <AppliedPanel title={copy.appliedTitle} items={[...copy.applied]} />
        <References title={copy.referencesTitle} items={copy.references} />
      </div>
    </LessonShell>
  );
}
