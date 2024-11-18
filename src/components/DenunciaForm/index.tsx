"use client"

import { GitCommitVertical, TrendingUp, TriangleAlert } from "lucide-react"
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
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"

export function DenunciaForm() {
  return (
    <Card className={` w-[400px] h-[300px] bg-[#ffffff]`}>
      <CardHeader>
        <CardTitle className="flex space-x-2"><span>Envie sua denuncia</span><TriangleAlert className="w-4 h-4"/></CardTitle>
        <CardDescription>Relate qualquer ação que prejudique o meio ambiente</CardDescription>
      </CardHeader>
      <CardContent>
   <form>
   <textarea
  className="bg-white w-full h-32 p-2 border rounded resize-none"
  id="fname"
  name="fname"
  placeholder="Nome"
  required
></textarea>

<Button variant={"outline"}>Enviar</Button>
   </form>
      </CardContent>
    
    </Card>
  )
}
