import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    titleDefault: "Deliberate UI",
    titleTemplate: "%s · Deliberate UI",
    description:
      "A simulated UI learning lab. Practice intentional interface craft with a living design system, light theme, and clear examples.",
  },
  common: {
    brand: "Deliberate UI",
    openLab: "Open lab",
    github: "GitHub",
    open: "Open",
    soon: "Soon",
    index: "Index",
    language: "Language",
    designSystemApplied: "Design system applied",
    bad: "Bad",
    good: "Good",
    loadingDiagram: "Loading diagram…",
    diagramError: "Diagram failed to render",
  },
  home: {
    badge: "Light theme · Living design system",
    title: "Interface craft with intent",
    lead:
      "Deliberate UI is a simulated learning lab. It is not a full course product. Each page teaches one idea, shows a visual example, and applies the same rule to the site itself.",
    startLesson: "Start lesson 1.1",
    features: [
      {
        title: "Design system on itself",
        body: "Tokens for type, color, and space drive both demos and chrome.",
      },
      {
        title: "Visual demos",
        body: "Charts, diagrams, and motion illustrate rules with clear examples.",
      },
      {
        title: "STE100 where it fits",
        body: "Technical rules use short, active, unambiguous sentences.",
      },
    ],
    curriculumTitle: "Curriculum map",
    curriculumStats: "{ready} ready · {planned} planned",
    footer:
      "Original instructional demos. Not affiliated with any paid course brand.",
  },
  lab: {
    tagline: "Simulated learning lab",
    lessonIndexAria: "Lesson index",
    appliesRules: "This page applies the design rules it teaches.",
    notReady: "Not ready",
    notAvailableTitle: "Lesson not available",
    notAvailableBody:
      "This lesson is planned or does not exist. Open a ready lesson from the index.",
    goToLesson: "Go to lesson 1.1",
  },
  modules: {
    welcome: "Welcome",
    typography: "Typography",
    color: "Color",
    components: "Components",
    layout: "Layout",
    patterns: "Patterns",
    principles: "Principles",
    practice: "Practice",
  },
  lessons: {
    welcome: {
      title: "How to use this lab",
      summary: "Read the rules. Inspect the design system. Practice with intent.",
    },
    "type-hierarchy": {
      title: "Type hierarchy",
      summary: "Use clear levels. Guide the eye. Keep roles distinct.",
    },
    "type-scale": {
      title: "Type scale",
      summary: "Define a scale. Reuse tokens. Avoid random sizes.",
    },
    "color-contrast": {
      title: "Color and contrast",
      summary: "Meet contrast rules. Limit the palette. Preserve meaning.",
    },
    "buttons-actions": {
      title: "Buttons and actions",
      summary: "Show hierarchy. Define states. Make targets easy to hit.",
    },
    "grid-spacing": {
      title: "Grid and spacing",
      summary: "Use an 8pt rhythm. Align edges. Control white space.",
    },
    icons: {
      title: "Icons",
      summary:
        "Keep weight consistent. Align to a box. Prefer familiar symbols.",
    },
    "forms-inputs": {
      title: "Forms and inputs",
      summary: "Label clearly. Show state. Reduce scan cost.",
    },
    "hero-sections": {
      title: "Hero sections",
      summary: "Lead with one message. Support with hierarchy and space.",
    },
    gestalt: {
      title: "Gestalt principles",
      summary: "Group by proximity and similarity. Reduce visual noise.",
    },
    refinement: {
      title: "Refinement checklist",
      summary: "Review contrast, alignment, hierarchy, and states.",
    },
  },
  typeHierarchy: {
    theory: "Theory",
    lead: "Type hierarchy assigns a clear role to each text level.",
    p1: "Users scan first. They read second. Strong hierarchy reduces scan cost and makes actions easier to find.",
    p2: "This lab page uses the same type tokens that the examples show. The site follows the rule it teaches.",
    rulesTitle: "Practical rules (STE100)",
    rules: [
      "Give each text role one size and one weight.",
      "Use at most four primary levels on a screen.",
      "Make the title the strongest text in the block.",
      "Keep body text between 15px and 16px for long reading.",
      "Use muted color only for secondary information.",
    ],
    tokensTitle: "Tokens in use",
    appliedTitle: "Applied on this site",
    applied: [
      "Page title uses serif, large size, tight tracking.",
      "Body and meta use muted color and smaller size.",
      "Sidebar labels use uppercase micro type for orientation.",
      "CSS variables define the full type scale.",
    ],
    chartTitle: "Type scale tokens",
    chartSubtitle: "Pixel sizes used by this site (Design System v0.1)",
    chartSize: "size",
    diagramTitle: "Reading order",
    diagramSubtitle: "Title leads. Section supports. Body explains. Labels orient.",
    diagramNodes: {
      title: "Page title",
      section: "Section heading",
      body: "Body text",
      label: "Label / meta",
      caption: "Caption / help",
    },
    weak: "Weak hierarchy",
    clear: "Clear hierarchy",
    wireframe: {
      title: "Responsive wireframe",
      hint: "Same layout, two hierarchy choices. Switch desktop, tablet, and mobile.",
      desktop: "Desktop",
      tablet: "Tablet",
      mobile: "Mobile",
      screenTitle: "Landing wireframe",
      screenSubtitle: "Product marketing",
      heroTitle: "Ship clearer interfaces",
      heroBody: "Guide the eye with levels. Keep roles distinct on every breakpoint.",
      cta: "Start free",
      nav: ["Product", "Pricing", "Docs"],
      cards: [
        { label: "Feature A", lines: 3 },
        { label: "Feature B", lines: 3 },
        { label: "Feature C", lines: 2 },
      ],
      notesBad: [
        "All text uses one size and one weight.",
        "Primary action looks like a nav link.",
        "Cards and hero compete with equal emphasis.",
        "Breakpoints change width, but hierarchy stays flat.",
      ],
      notesGood: [
        "Title is the strongest text in the hero.",
        "Nav is secondary; CTA is primary.",
        "Card labels are small; body lines are quieter.",
        "Hierarchy holds on desktop, tablet, and mobile.",
      ],
    },
    referencesTitle: "Bibliographic references",
    references: [
      {
        id: "lupton-thinking-type",
        authors: "Lupton, E.",
        year: "2010",
        title: "Thinking with Type: A Critical Guide for Designers, Writers, Editors, & Students",
        source: "2nd ed. New York: Princeton Architectural Press",
        note: "Type hierarchy, scale, and the roles of display vs text type.",
      },
      {
        id: "material-type-scale",
        authors: "Google",
        year: "2024",
        title: "Material Design 3 — Typography scale",
        source: "Material Design documentation",
        url: "https://m3.material.io/styles/typography/type-scale-tokens",
        note: "Practical type roles (display, headline, title, body, label) for UI systems.",
      },
      {
        id: "wcag-text",
        authors: "W3C Web Accessibility Initiative (WAI)",
        year: "2023",
        title: "Understanding Success Criterion 1.4.3: Contrast (Minimum) and related text criteria",
        source: "WCAG 2.2",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
        note: "Readable hierarchy depends on contrast and size, not only font choice.",
      },
      {
        id: "nielsen-scanning",
        authors: "Nielsen, J.",
        year: "2006",
        title: "F-Shaped Pattern for Reading Web Content",
        source: "Nielsen Norman Group",
        url: "https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/",
        note: "Users scan first; strong headings and levels support that behavior.",
      },
    ],
  },
};

export default en;
