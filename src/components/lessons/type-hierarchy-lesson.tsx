import { LessonShell } from "@/components/lab/lesson-shell";
import { HierarchyWireframe } from "@/components/lab/hierarchy-wireframe";
import { TypeScaleChart } from "@/components/lab/type-scale-chart";
import { HierarchyDiagram } from "@/components/lab/hierarchy-diagram";
import { RulesList } from "@/components/lab/rules-list";
import { References } from "@/components/lab/references";
import { AppliedPanel } from "@/components/lab/applied-panel";
import { LessonSection } from "@/components/lab/lesson-section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { LocalizedLesson } from "@/content/lessons";
import type { Dictionary } from "@/i18n/dictionaries/types";

/**
 * Full composition for lesson 1.1.
 * Page route only resolves locale + slug; lessons own their UI tree.
 */
export function TypeHierarchyLesson({
  lesson,
  dict,
}: {
  lesson: LocalizedLesson;
  dict: Dictionary;
}) {
  const t = dict.typeHierarchy;

  return (
    <LessonShell
      lesson={lesson}
      designSystemLabel={dict.common.designSystemApplied}
    >
      <div className="space-y-8">
        <LessonSection>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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
              <RulesList title={t.rulesTitle} rules={[...t.rules]} />
            </div>
            <div className="space-y-4">
              <Heading level={2}>{t.tokensTitle}</Heading>
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
          </div>
        </LessonSection>

        <HierarchyWireframe
          sectionTitle={t.wireframe.title}
          sectionHint={t.wireframe.hint}
          badLabel={t.weak}
          goodLabel={t.clear}
          badgeBad={dict.common.bad}
          badgeGood={dict.common.good}
          viewportLabels={{
            desktop: t.wireframe.desktop,
            tablet: t.wireframe.tablet,
            mobile: t.wireframe.mobile,
          }}
          copy={{
            title: t.wireframe.screenTitle,
            subtitle: t.wireframe.screenSubtitle,
            nav: t.wireframe.nav,
            heroTitle: t.wireframe.heroTitle,
            heroBody: t.wireframe.heroBody,
            cta: t.wireframe.cta,
            cards: t.wireframe.cards,
            notesBad: t.wireframe.notesBad,
            notesGood: t.wireframe.notesGood,
          }}
        />

        <AppliedPanel title={t.appliedTitle} items={[...t.applied]} />

        <References title={t.referencesTitle} items={t.references} />
      </div>
    </LessonShell>
  );
}
