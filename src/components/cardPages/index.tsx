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
  { month: "January", dado1: 186, dado2: 80 },
  { month: "February", dado1: 305, dado2: 200 },
  { month: "March", dado1: 237, dado2: 120 },
  { month: "April", dado1: 73, dado2: 190 },
  { month: "May", dado1: 209, dado2: 130 },
  { month: "June", dado1: 214, dado2: 140 },
];
interface CardProps {
  title: string;
  icon: React.ReactNode;
  descricao?: string;
  descricao2?: string;
  descricao3?: string;
  dado1?: any[];
  dado2?: number[];
  bgColor?: string;
}

const chartConfig = {
  desktop: {
    label: "dado1",
    color: "hsl(var(--chart-3))",
  },
  mobile: {
    label: "dado2",
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
            data={props.dado1}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="createdAt"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                // Ajuste na formatação da data
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="dado"
              name={props.dado1?.[0]?.tipo}
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24;
                // Garantir que a chave seja única
                const key = payload.createdAt || payload.month; // Ajuste para garantir chave única
                return (
                  <GitCommitVertical
                    key={key} // Usar a chave única
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
