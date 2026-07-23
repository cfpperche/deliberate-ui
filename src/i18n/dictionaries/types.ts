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
    wireframe: {
      title: string;
      hint: string;
      desktop: string;
      tablet: string;
      mobile: string;
      screenTitle: string;
      screenSubtitle: string;
      heroTitle: string;
      heroBody: string;
      cta: string;
      nav: string[];
      cards: { label: string; lines: number }[];
      notesBad: string[];
      notesGood: string[];
    };
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  };
  typeScale: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    rulesTitle: string;
    rules: string[];
    appliedTitle: string;
    applied: string[];
    specimen: {
      title: string;
      hint: string;
      badLabel: string;
      goodLabel: string;
      tokenColumn: string;
      roleColumn: string;
      sizeColumn: string;
      notesBad: string[];
      notesGood: string[];
      steps: { token: string; px: number; role: string; sample: string }[];
      badSteps: { token: string; px: number; role: string; sample: string }[];
    };
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  };
  buttonsActions: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    rulesTitle: string;
    rules: string[];
    appliedTitle: string;
    applied: string[];
    demo: {
      title: string;
      hint: string;
      badLabel: string;
      goodLabel: string;
      variantsTitle: string;
      notesBad: string[];
      notesGood: string[];
      copy: {
        primary: string;
        secondary: string;
        ghost: string;
        destroy: string;
        cancel: string;
        save: string;
        vagueA: string;
        vagueB: string;
        vagueC: string;
        disabled: string;
        variantPrimary: string;
        variantSecondary: string;
        variantGhost: string;
        variantDisabled: string;
      };
    };
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  };
  colorContrast: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    rulesTitle: string;
    rules: string[];
    appliedTitle: string;
    applied: string[];
    demo: {
      title: string;
      hint: string;
      badLabel: string;
      goodLabel: string;
      paletteTitle: string;
      palette: { name: string; cssVar: string }[];
      notesBad: string[];
      notesGood: string[];
      copy: {
        cardTitle: string;
        cardBody: string;
        statusOk: string;
        statusFail: string;
        cta: string;
        meta: string;
      };
    };
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  },

  welcome: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    pathTitle: string;
    path: string[];
    startTitle: string;
    cta: string;
    appliedTitle: string;
    applied: string[];
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  };
  gridSpacing: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    rulesTitle: string;
    rules: string[];
    appliedTitle: string;
    applied: string[];
    demo: {
      title: string;
      hint: string;
      badLabel: string;
      goodLabel: string;
      notesBad: string[];
      notesGood: string[];
      copy: { box: string };
    };
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  };
  iconsLesson: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    rulesTitle: string;
    rules: string[];
    appliedTitle: string;
    applied: string[];
    demo: {
      title: string;
      hint: string;
      badLabel: string;
      goodLabel: string;
      notesBad: string[];
      notesGood: string[];
      copy: { nav: string; action: string };
    };
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  };
  formsInputs: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    rulesTitle: string;
    rules: string[];
    appliedTitle: string;
    applied: string[];
    demo: {
      title: string;
      hint: string;
      badLabel: string;
      goodLabel: string;
      notesBad: string[];
      notesGood: string[];
      copy: {
        email: string;
        password: string;
        placeholderOnly: string;
        error: string;
        hint: string;
        submit: string;
      };
    };
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  };
  heroSections: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    rulesTitle: string;
    rules: string[];
    appliedTitle: string;
    applied: string[];
    demo: {
      title: string;
      hint: string;
      badLabel: string;
      goodLabel: string;
      notesBad: string[];
      notesGood: string[];
      copy: {
        eyebrow: string;
        title: string;
        body: string;
        primary: string;
        secondary: string;
        noiseA: string;
        noiseB: string;
        noiseC: string;
      };
    };
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  };
  gestaltLesson: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    rulesTitle: string;
    rules: string[];
    appliedTitle: string;
    applied: string[];
    demo: {
      title: string;
      hint: string;
      badLabel: string;
      goodLabel: string;
      notesBad: string[];
      notesGood: string[];
      copy: { groupA: string; groupB: string; item: string };
    };
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  };
  refinementLesson: {
    theory: string;
    lead: string;
    p1: string;
    p2: string;
    rulesTitle: string;
    rules: string[];
    appliedTitle: string;
    applied: string[];
    demo: {
      title: string;
      hint: string;
      badLabel: string;
      goodLabel: string;
      notesBad: string[];
      notesGood: string[];
      checklistTitle: string;
      items: string[];
    };
    referencesTitle: string;
    references: {
      id: string;
      authors: string;
      year: string;
      title: string;
      source: string;
      url?: string;
      note?: string;
    }[];
  };
};
