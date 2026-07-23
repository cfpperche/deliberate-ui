import type { Dictionary } from "./types";

const pt: Dictionary = {
  meta: {
    titleDefault: "Deliberate UI",
    titleTemplate: "%s · Deliberate UI",
    description:
      "Lab simulado de UI. Pratique craft de interface com intenção, design system vivo, tema light e exemplos claros.",
  },
  common: {
    brand: "Deliberate UI",
    openLab: "Abrir lab",
    github: "GitHub",
    open: "Abrir",
    soon: "Em breve",
    index: "Índice",
    language: "Idioma",
    designSystemApplied: "Design system aplicado",
    bad: "Ruim",
    good: "Bom",
    loadingDiagram: "Carregando diagrama…",
    diagramError: "Falha ao renderizar o diagrama",
  },
  home: {
    badge: "Tema light · Design system vivo",
    title: "Craft de interface com intenção",
    lead:
      "Deliberate UI é um lab de aprendizado simulado. Não é um produto de curso completo. Cada página ensina uma ideia, mostra um exemplo visual e aplica a mesma regra no próprio site.",
    startLesson: "Começar lição 1.1",
    features: [
      {
        title: "Design system em si mesmo",
        body: "Tokens de tipo, cor e espaço orientam demos e a interface do site.",
      },
      {
        title: "Demos visuais",
        body: "Gráficos, diagramas e motion ilustram regras com exemplos claros.",
      },
      {
        title: "STE100 onde couber",
        body: "Regras técnicas usam frases curtas, ativas e sem ambiguidade.",
      },
    ],
    curriculumTitle: "Mapa do currículo",
    curriculumStats: "{ready} prontas · {planned} planejadas",
    footer:
      "Demos didáticos originais. Sem vínculo com qualquer marca de curso pago.",
  },
  lab: {
    tagline: "Lab de aprendizado simulado",
    lessonIndexAria: "Índice de lições",
    appliesRules: "Esta página aplica as regras de design que ensina.",
    notReady: "Indisponível",
    notAvailableTitle: "Lição não disponível",
    notAvailableBody:
      "Esta lição está planejada ou não existe. Abra uma lição pronta no índice.",
    goToLesson: "Ir para a lição 1.1",
  },
  modules: {
    welcome: "Boas-vindas",
    typography: "Tipografia",
    color: "Cor",
    components: "Componentes",
    layout: "Layout",
    patterns: "Padrões",
    principles: "Princípios",
    practice: "Prática",
  },
  lessons: {
    welcome: {
      title: "Como usar este lab",
      summary:
        "Leia as regras. Inspecione o design system. Pratique com intenção.",
    },
    "type-hierarchy": {
      title: "Hierarquia tipográfica",
      summary: "Use níveis claros. Guie o olhar. Mantenha papéis distintos.",
    },
    "type-scale": {
      title: "Escala tipográfica",
      summary: "Defina uma escala. Reutilize tokens. Evite tamanhos aleatórios.",
    },
    "color-contrast": {
      title: "Cor e contraste",
      summary: "Atenda regras de contraste. Limite a paleta. Preserve o significado.",
    },
    "buttons-actions": {
      title: "Botões e ações",
      summary: "Mostre hierarquia. Defina estados. Facilite o clique.",
    },
    "grid-spacing": {
      title: "Grid e espaçamento",
      summary: "Use ritmo de 8pt. Alinhe bordas. Controle o espaço em branco.",
    },
    icons: {
      title: "Ícones",
      summary:
        "Mantenha peso consistente. Alinhe a uma caixa. Prefira símbolos familiares.",
    },
    "forms-inputs": {
      title: "Formulários e inputs",
      summary: "Rotule com clareza. Mostre estado. Reduza o custo de leitura.",
    },
    "hero-sections": {
      title: "Hero sections",
      summary: "Lidere com uma mensagem. Apoie com hierarquia e espaço.",
    },
    gestalt: {
      title: "Princípios de Gestalt",
      summary: "Agrupe por proximidade e semelhança. Reduza ruído visual.",
    },
    refinement: {
      title: "Checklist de refinamento",
      summary: "Revise contraste, alinhamento, hierarquia e estados.",
    },
  },
  typeHierarchy: {
    theory: "Teoria",
    lead: "Hierarquia tipográfica atribui um papel claro a cada nível de texto.",
    p1: "Usuários escaneiam primeiro. Depois leem. Hierarquia forte reduz o custo de varredura e facilita achar ações.",
    p2: "Esta página do lab usa os mesmos tokens tipográficos dos exemplos. O site segue a regra que ensina.",
    rulesTitle: "Regras práticas (STE100)",
    rules: [
      "Dê a cada papel de texto um tamanho e um peso.",
      "Use no máximo quatro níveis primários na tela.",
      "Faça o título o texto mais forte do bloco.",
      "Mantenha o corpo entre 15px e 16px para leitura longa.",
      "Use cor muted só para informação secundária.",
    ],
    tokensTitle: "Tokens em uso",
    appliedTitle: "Aplicado neste site",
    applied: [
      "O título da página usa serif, tamanho grande e tracking apertado.",
      "Corpo e meta usam cor muted e tamanho menor.",
      "Rótulos da sidebar usam micro tipo em caixa alta para orientação.",
      "Variáveis CSS definem a escala tipográfica completa.",
    ],
    chartTitle: "Tokens da escala tipográfica",
    chartSubtitle: "Tamanhos em px usados neste site (Design System v0.1)",
    chartSize: "tamanho",
    diagramTitle: "Ordem de leitura",
    diagramSubtitle:
      "Título lidera. Seção apoia. Corpo explica. Rótulos orientam.",
    diagramNodes: {
      title: "Título da página",
      section: "Título de seção",
      body: "Texto de corpo",
      label: "Rótulo / meta",
      caption: "Legenda / ajuda",
    },
    weak: "Hierarquia fraca",
    clear: "Hierarquia clara",
    wireframe: {
      title: "Wireframe responsivo",
      hint: "Mesmo layout, duas escolhas de hierarquia. Alterne desktop, tablet e mobile.",
      desktop: "Desktop",
      tablet: "Tablet",
      mobile: "Mobile",
      screenTitle: "Wireframe de landing",
      screenSubtitle: "Marketing de produto",
      heroTitle: "Entregue interfaces mais claras",
      heroBody:
        "Guie o olhar com níveis. Mantenha papéis distintos em cada breakpoint.",
      cta: "Começar grátis",
      nav: ["Produto", "Preços", "Docs"],
      cards: [
        { label: "Recurso A", lines: 3 },
        { label: "Recurso B", lines: 3 },
        { label: "Recurso C", lines: 2 },
      ],
      notesBad: [
        "Todo o texto usa um tamanho e um peso.",
        "A ação principal parece um link da nav.",
        "Cards e hero competem com a mesma ênfase.",
        "O breakpoint muda a largura, mas a hierarquia continua plana.",
      ],
      notesGood: [
        "O título é o texto mais forte do hero.",
        "A nav é secundária; o CTA é primário.",
        "Rótulos dos cards são pequenos; linhas de corpo são mais suaves.",
        "A hierarquia se mantém em desktop, tablet e mobile.",
      ],
    },
  },
};

export default pt;
