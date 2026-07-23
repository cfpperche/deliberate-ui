import { ExternalLink } from "lucide-react";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

export type ReferenceItem = {
  id: string;
  authors: string;
  year: string;
  title: string;
  source: string;
  url?: string;
  note?: string;
};

export function References({
  title,
  items,
}: {
  title: string;
  items: ReferenceItem[];
}) {
  return (
    <section aria-labelledby="lesson-references">
      <Card>
        <CardHeader>
          <h2
            id="lesson-references"
            className="text-sm font-medium text-foreground"
          >
            {title}
          </h2>
        </CardHeader>
        <CardBody className="pt-0">
          <ol className="space-y-4">
            {items.map((item, index) => (
              <li key={item.id} className="flex gap-3 text-sm">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-muted text-[11px] font-semibold text-muted-foreground"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div className="min-w-0 space-y-1">
                  <p className="leading-relaxed text-foreground">
                    <span className="font-medium">{item.authors}</span>
                    <span className="text-muted-foreground">
                      {" "}
                      ({item.year}).{" "}
                    </span>
                    <span className="italic">{item.title}</span>
                    <span className="text-muted-foreground">
                      . {item.source}.
                    </span>
                  </p>
                  {item.note ? (
                    <p className="text-xs text-muted-foreground">{item.note}</p>
                  ) : null}
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                      {item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </CardBody>
      </Card>
    </section>
  );
}
