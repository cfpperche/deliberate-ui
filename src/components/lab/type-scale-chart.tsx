"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardBody, CardHeader } from "@/components/ui/card";

const data = [
  { token: "xs", px: 12 },
  { token: "sm", px: 13 },
  { token: "base", px: 15 },
  { token: "md", px: 16 },
  { token: "lg", px: 20 },
  { token: "xl", px: 24 },
  { token: "2xl", px: 30 },
  { token: "3xl", px: 36 },
];

export function TypeScaleChart({
  title,
  subtitle,
  sizeLabel,
}: {
  title: string;
  subtitle: string;
  sizeLabel: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div>
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </CardHeader>
      <CardBody className="h-64 pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid
              stroke="var(--border)"
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis
              dataKey="token"
              tick={{ fill: "var(--muted)", fontSize: 12 }}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--muted)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              unit="px"
              width={48}
            />
            <Tooltip
              cursor={{ fill: "var(--accent-soft)" }}
              contentStyle={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontSize: 13,
                color: "var(--foreground)",
              }}
              formatter={(value) => [`${value}px`, sizeLabel]}
            />
            <Bar
              dataKey="px"
              fill="var(--accent)"
              radius={[4, 4, 0, 0]}
              maxBarSize={36}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}
