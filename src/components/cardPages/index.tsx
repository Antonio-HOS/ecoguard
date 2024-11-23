"use client";

import { GitCommitVertical, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
interface CardProps {
  title: string;
  icon: React.ReactNode;
  descricao?: string;
  descricao2?: string;
  descricao3?: string;
  dado1?: string;
  dado2?: number[];
  bgColor?: string;
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-3))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function CardPages(props: CardProps) {
  return (
    <Card
      className={`${props.bgColor} w-[40vw] h-[80vh] shadow-xl hover:shadow-2xl transition-all dura300`}
    >
      <CardHeader>
        <CardTitle className="flex space-x-4">
          <span className=" flex items-center text-2xl">{props.title}</span>
          <span>{props.icon}</span>
        </CardTitle>
        <CardDescription className="text-black text-xl">
          {props.descricao}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ChartContainer config={chartConfig} className="bg-white w-[95%]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24;
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="var(--color-desktop)"
                  />
                );
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none text-xl">
          {props.descricao2} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-lg">{props.descricao3}</div>
      </CardFooter>
    </Card>
  );
}
