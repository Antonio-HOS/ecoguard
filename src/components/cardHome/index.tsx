"use client"

import { GitCommitVertical, TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]
interface CardProps {
  title: string;
  icon: React.ReactNode;
  descricao?: string;
  descricao2?: string;
  descricao3?: string;
  dado1?: string;
  dado2?: number[];
  bgColor?: string;
  chartConfig: any;
  chartData:any;
  chartColor:string;
}

export function CardHome(props: CardProps) {
  
const chartConfig = {
  dado1: {
    label: props.chartConfig,
    color: props.chartColor,
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

  return (
    <Card className={`${props.bgColor} w-[390px] h-[320px] shadow-xl hover:shadow-2xl transition-all dura300`}>
      <CardHeader>
        <CardTitle className="flex space-x-4"><span className=" flex items-center ">{props.title}</span><span>{props.icon}</span></CardTitle>
        <CardDescription>{props.descricao}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ChartContainer config={chartConfig} className="bg-white w-[320px]">
          <LineChart
            accessibilityLayer
            data={props.chartData}
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
              type="natural"
              stroke="var(--color-dado1)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24;
                // Garantir que a chave seja única
                const key = payload.createdAt || payload.month; // Ajuste para garantir chave única
                return (
                  <GitCommitVertical
                    key={key}  // Usar a chave única
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="hsl(var(--chart-2))"
                  />
                );
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none"> */}
          {/* {props.descricao2} <TrendingUp className="h-4 w-4" /> */}
        {/* </div> */}
        {/* <div className="leading-none ">
              {props.descricao3}
        </div> */}
      </CardFooter>
    </Card>
  )
}
