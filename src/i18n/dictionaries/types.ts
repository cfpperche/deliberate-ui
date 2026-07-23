export type Dictionary = {
  meta: {
    titleDefault: string;
    titleTemplate: string;
    description: string;
  };
  common: {
    brand: string;
    openLab: string;
    github: string;
    open: string;
    soon: string;
    index: string;
    language: string;
    designSystemApplied: string;
    bad: string;
    good: string;
    loadingDiagram: string;
    diagramError: string;
  };
  home: {
    badge: string;
    title: string;
    lead: string;
    startLesson: string;
    features: { title: string; body: string }[];
    curriculumTitle: string;
    curriculumStats: string;
    footer: string;
  };
  lab: {
    tagline: string;
    lessonIndexAria: string;
    appliesRules: string;
    notReady: string;
    notAvailableTitle: string;
    notAvailableBody: string;
    goToLesson: string;
  };
  modules: {
    welcome: string;
    typography: string;
    color: string;
    components: string;
    layout: string;
    patterns: string;
    principles: string;
    practice: string;
  };
  lessons: {
    welcome: { title: string; summary: string };
    "type-hierarchy": { title: string; summary: string };
    "type-scale": { title: string; summary: string };
    "color-contrast": { title: string; summary: string };
    "buttons-actions": { title: string; summary: string };
    "grid-spacing": { title: string; summary: string };
    icons: { title: string; summary: string };
    "forms-inputs": { title: string; summary: string };
    "hero-sections": { title: string; summary: string };
    gestalt: { title: string; summary: string };
    refinement: { title: string; summary: string };
  };
  typeHierarchy: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    rulesTitle: string;
    rules: string[];
    tokensTitle: string;
    liveExample: string;
    compareHint: string;
    appliedTitle: string;
    applied: string[];
    chartTitle: string;
    chartSubtitle: string;
    chartSize: string;
    diagramTitle: string;
    diagramSubtitle: string;
    diagramNodes: {
      title: string;
      section: string;
      body: string;
      label: string;
      caption: string;
    };
    weak: string;
    clear: string;
    demo: {
      productTitle: string;
      productBody: string;
      metricLabel: string;
      metricHelp: string;
      cta: string;
    };
  };
};
