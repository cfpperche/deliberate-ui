import { Check } from "lucide-react";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

export function RulesList({
  title,
  rules,
}: {
  title: string;
  rules: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <p className="text-sm font-medium text-foreground">{title}</p>
      </CardHeader>
      <CardBody>
        <ol className="space-y-3">
          {rules.map((rule, index) => (
            <li key={rule} className="flex gap-3 ste-rule">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Check className="h-3 w-3" aria-hidden />
              </span>
              <span>
                <span className="mr-2 text-xs font-semibold text-muted-foreground">
                  {index + 1}.
                </span>
                {rule}
              </span>
            </li>
          ))}
        </ol>
      </CardBody>
    </Card>
  );
}
