"use client";

import { GitCommitVertical, TrendingUp, TriangleAlert } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import {post} from "../../../services/api";
import { useState } from "react";

export function DenunciaForm() {

const [Titulo, setTitulo] = useState('');
const [Mensagem, setMensagem] = useState('');

  const enviarDados = async () => {
    const endpoint = '/denuncia'; // Endpoint no backend (exemplo: "/login")
    const dados = {
      titulo : Titulo,
      mensagem : Mensagem,
    };
  
    try {
      // Chamada para a função `post`
      const resposta = await post(endpoint, dados);
      console.log('Dados enviados com sucesso:', resposta);
    } catch (erro) {
      console.error('Erro ao enviar os dados:', erro);
    }
  };


  return (
    <Card className={` w-[400px]  bg-[#ffffff] shadow-2xl`}>
      <CardHeader>
        <CardTitle className="flex space-x-2">
          <span>Envie sua denuncia</span>
          <TriangleAlert className="w-4 h-4" />
        </CardTitle>
        <CardDescription>
          Relate qualquer ação que prejudique o meio ambiente
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex justify-center items-center flex-col space-y-2">
        <textarea
            className="bg-white w-full  px-2 border rounded resize-none"
            id="fname"
            name="fname"
            placeholder="Titulo"
            value={Titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          ></textarea>

          <textarea
            className="bg-white w-full h-32 p-2 border rounded resize-none"
            id="fname"
            name="fname"
            value={Mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Nome"
            required
          ></textarea>

          <Button className=" w-1/2 " onClick={enviarDados}>Enviar</Button>
        </form>
      </CardContent>
    </Card>
  );
}
