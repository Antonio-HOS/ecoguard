"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "2024-04-01", usuarios: 222, Dados: 150 },
  { date: "2024-04-02", usuarios: 97,  Dados: 180 },
  { date: "2024-04-03", usuarios: 167, Dados: 120 },
  { date: "2024-04-04", usuarios: 242, Dados: 260 },
  { date: "2024-04-05", usuarios: 373, Dados: 290 },
  { date: "2024-04-06", usuarios: 301, Dados: 340 },
  { date: "2024-04-07", usuarios: 245, Dados: 180 },
  { date: "2024-04-08", usuarios: 409, Dados: 320 },
  { date: "2024-04-09", usuarios: 59,  Dados: 110 },
  { date: "2024-04-10", usuarios: 261, Dados: 190 },
  { date: "2024-04-11", usuarios: 327, Dados: 350 },
  { date: "2024-04-12", usuarios: 292, Dados: 210 },
  { date: "2024-04-13", usuarios: 342, Dados: 380 },
  { date: "2024-04-14", usuarios: 137, Dados: 220 },
  { date: "2024-04-15", usuarios: 120, Dados: 170 },
  { date: "2024-04-16", usuarios: 138, Dados: 190 },
  { date: "2024-04-17", usuarios: 446, Dados: 360 },
  { date: "2024-04-18", usuarios: 364, Dados: 410 },
  { date: "2024-04-19", usuarios: 243, Dados: 180 },
  { date: "2024-04-20", usuarios: 89,  Dados: 150 },
  { date: "2024-04-21", usuarios: 137, Dados: 200 },
  { date: "2024-04-22", usuarios: 224, Dados: 170 },
  { date: "2024-04-23", usuarios: 138, Dados: 230 },
  { date: "2024-04-24", usuarios: 387, Dados: 290 },
  { date: "2024-04-25", usuarios: 215, Dados: 250 },
  { date: "2024-04-26", usuarios: 75,  Dados: 130 },
  { date: "2024-04-27", usuarios: 383, Dados: 420 },
  { date: "2024-04-28", usuarios: 122, Dados: 180 },
  { date: "2024-04-29", usuarios: 315, Dados: 240 },
  { date: "2024-04-30", usuarios: 454, Dados: 380 },
  { date: "2024-05-01", usuarios: 165, Dados: 220 },
  { date: "2024-05-02", usuarios: 293, Dados: 310 },
  { date: "2024-05-03", usuarios: 247, Dados: 190 },
  { date: "2024-05-04", usuarios: 385, Dados: 420 },
  { date: "2024-05-05", usuarios: 481, Dados: 390 },
  { date: "2024-05-06", usuarios: 498, Dados: 520 },
  { date: "2024-05-07", usuarios: 388, Dados: 300 },
  { date: "2024-05-08", usuarios: 149, Dados: 210 },
  { date: "2024-05-09", usuarios: 227, Dados: 180 },
  { date: "2024-05-10", usuarios: 293, Dados: 330 },
  { date: "2024-05-11", usuarios: 335, Dados: 270 },
  { date: "2024-05-12", usuarios: 197, Dados: 240 },
  { date: "2024-05-13", usuarios: 197, Dados: 160 },
  { date: "2024-05-14", usuarios: 448, Dados: 490 },
  { date: "2024-05-15", usuarios: 473, Dados: 380 },
  { date: "2024-05-16", usuarios: 338, Dados: 400 },
  { date: "2024-05-17", usuarios: 499, Dados: 420 },
  { date: "2024-05-18", usuarios: 315, Dados: 350 },
  { date: "2024-05-19", usuarios: 235, Dados: 180 },
  { date: "2024-05-20", usuarios: 177, Dados: 230 },
  { date: "2024-05-21", usuarios: 82,  Dados: 140 },
  { date: "2024-05-22", usuarios: 81,  Dados: 120 },
  { date: "2024-05-23", usuarios: 252, Dados: 290 },
  { date: "2024-05-24", usuarios: 294, Dados: 220 },
  { date: "2024-05-25", usuarios: 201, Dados: 250 },
  { date: "2024-05-26", usuarios: 213, Dados: 170 },
  { date: "2024-05-27", usuarios: 420, Dados: 460 },
  { date: "2024-05-28", usuarios: 233, Dados: 190 },
  { date: "2024-05-29", usuarios: 78,  Dados: 130 },
  { date: "2024-05-30", usuarios: 340, Dados: 280 },
  { date: "2024-05-31", usuarios: 178, Dados: 230 },
  { date: "2024-06-01", usuarios: 178, Dados: 200 },
  { date: "2024-06-02", usuarios: 470, Dados: 410 },
  { date: "2024-06-03", usuarios: 103, Dados: 160 },
  { date: "2024-06-04", usuarios: 439, Dados: 380 },
  { date: "2024-06-05", usuarios: 88,  Dados: 140 },
  { date: "2024-06-06", usuarios: 294, Dados: 250 },
  { date: "2024-06-07", usuarios: 323, Dados: 370 },
  { date: "2024-06-08", usuarios: 385, Dados: 320 },
  { date: "2024-06-09", usuarios: 438, Dados: 480 },
  { date: "2024-06-10", usuarios: 155, Dados: 200 },
  { date: "2024-06-11", usuarios: 92,  Dados: 150 },
  { date: "2024-06-12", usuarios: 492, Dados: 420 },
  { date: "2024-06-13", usuarios: 81,  Dados: 130 },
  { date: "2024-06-14", usuarios: 426, Dados: 380 },
  { date: "2024-06-15", usuarios: 307, Dados: 350 },
  { date: "2024-06-16", usuarios: 371, Dados: 310 },
  { date: "2024-06-17", usuarios: 475, Dados: 520 },
  { date: "2024-06-18", usuarios: 107, Dados: 170 },
  { date: "2024-06-19", usuarios: 341, Dados: 290 },
  { date: "2024-06-20", usuarios: 408, Dados: 450 },
  { date: "2024-06-21", usuarios: 169, Dados: 210 },
  { date: "2024-06-22", usuarios: 317, Dados: 270 },
  { date: "2024-06-23", usuarios: 480, Dados: 530 },
  { date: "2024-06-24", usuarios: 132, Dados: 180 },
  { date: "2024-06-25", usuarios: 141, Dados: 190 },
  { date: "2024-06-26", usuarios: 434, Dados: 380 },
  { date: "2024-06-27", usuarios: 448, Dados: 490 },
  { date: "2024-06-28", usuarios: 149, Dados: 200 },
  { date: "2024-06-29", usuarios: 103, Dados: 160 },
  { date: "2024-06-30", usuarios: 446, Dados: 400 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  usuarios: {
    label: "Usuários",
    color: "hsl(var(--chart-1))",
  },
  Dados: {
    label: "Dados",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartData() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("usuarios")

  const total = React.useMemo(
    () => ({
      usuarios: chartData.reduce((acc, curr) => acc + curr.usuarios, 0),
      Dados: chartData.reduce((acc, curr) => acc + curr.Dados, 0),
    }),
    []
  )

  return (
    <Card className=" ">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Grafico interativo</CardTitle>
          <CardDescription>
            Clique para ver nosso fluxo de dados e usuários
          </CardDescription>
        </div>
        <div className="flex">
          {["usuarios", "Dados"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
