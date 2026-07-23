"use client";

import { useEffect, useId, useState } from "react";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

type DiagramNodes = {
  title: string;
  section: string;
  body: string;
  label: string;
  caption: string;
};

function buildDiagram(nodes: DiagramNodes) {
  return `flowchart TD
  H["${nodes.title}"] --> S["${nodes.section}"]
  S --> B["${nodes.body}"]
  S --> L["${nodes.label}"]
  B --> C["${nodes.caption}"]
  L --> C
`;
}

export function HierarchyDiagram({
  title,
  subtitle,
  loadingLabel,
  errorLabel,
  nodes,
}: {
  title: string;
  subtitle: string;
  loadingLabel: string;
  errorLabel: string;
  nodes: DiagramNodes;
}) {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const diagram = buildDiagram(nodes);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          securityLevel: "strict",
          themeVariables: {
            primaryColor: "#e8eef4",
            primaryTextColor: "#1a1917",
            primaryBorderColor: "#2c3f55",
            lineColor: "#6b6560",
            secondaryColor: "#efece6",
            tertiaryColor: "#f7f5f1",
            background: "#ffffff",
            mainBkg: "#ffffff",
            nodeBorder: "#e4dfd6",
            clusterBkg: "#f7f5f1",
            titleColor: "#1a1917",
            fontFamily: "var(--font-sans), system-ui, sans-serif",
          },
        });
        const { svg: rendered } = await mermaid.render(
          `hierarchy-${id}-${nodes.title.length}`,
          diagram,
        );
        if (!cancelled) {
          setError(null);
          setSvg(rendered);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : errorLabel);
        }
      }
    }

    void render();
    return () => {
      cancelled = true;
    };
  }, [diagram, errorLabel, id, nodes.title.length]);

  return (
    <Card>
      <CardHeader>
        <div>
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </CardHeader>
      <CardBody>
        {error ? (
          <p className="text-sm text-bad">{error}</p>
        ) : svg ? (
          <div
            className="overflow-x-auto [&_svg]:mx-auto [&_svg]:max-w-full"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : (
          <p className="text-sm text-muted-foreground">{loadingLabel}</p>
        )}
      </CardBody>
    </Card>
  );
}
