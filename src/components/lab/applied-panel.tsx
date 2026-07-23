import { Card, CardBody } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

/**
 * Shows how the current lesson already reshapes site chrome / tokens.
 * Every ready lesson should include one AppliedPanel.
 */
export function AppliedPanel({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card className="bg-accent-soft/40">
      <CardBody className="space-y-2">
        <Heading level={4} as="h2">
          {title}
        </Heading>
        <ul className="list-disc space-y-1 pl-5">
          {items.map((item) => (
            <Text as="li" key={item} size="sm" tone="muted">
              {item}
            </Text>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
