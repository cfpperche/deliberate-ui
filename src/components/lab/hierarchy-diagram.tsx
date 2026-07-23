"use client";

import { useEffect, useId, useState } from "react";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

const diagram = `flowchart TD
  H["Page title"] --> S["Section heading"]
  S --> B["Body text"]
  S --> L["Label / meta"]
  B --> C["Caption / help"]
  L --> C
`;

export function HierarchyDiagram() {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

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
        const { svg: rendered } = await mermaid.render(`hierarchy-${id}`, diagram);
        if (!cancelled) setSvg(rendered);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Diagram failed to render");
        }
      }
    }

    void render();
    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <Card>
      <CardHeader>
        <div>
          <p className="text-sm font-medium text-foreground">Reading order</p>
          <p className="text-xs text-muted-foreground">
            Title leads. Section supports. Body explains. Labels orient.
          </p>
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
          <p className="text-sm text-muted-foreground">Loading diagram…</p>
        )}
      </CardBody>
    </Card>
  );
}
