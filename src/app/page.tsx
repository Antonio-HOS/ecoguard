"use client";

import Image from "next/image";
import SidebarHome from "@/components/SidebarHome";
import { CardHome } from "@/components/cardHome";
import { Droplets, Wind, Sprout } from "lucide-react";
import { ChartData } from "@/components/chartData";
import { DenunciaForm } from "@/components/DenunciaForm";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [dataAgua, setDataAgua] = useState<any>();
  const [dataSolo, setDataSolo] = useState<any>();
  const [dataAr, setDataAr] = useState<any>();

  useEffect(() => {
    setDataAgua([
      { month: "January", dado1: 186 },
      { month: "February", dado1: 305 },
      { month: "March", dado1: 237 },
      { month: "April", dado1: 73 },
      { month: "May", dado1: 209 },
      { month: "June", dado1: 214 },
    ]);

    setDataSolo([
      { month: "January", dado1: 186 },
      { month: "February", dado1: 200 },
      { month: "March", dado1: 430 },
      { month: "April", dado1: 23 },
      { month: "May", dado1: 177 },
      { month: "June", dado1: 200 },
    ]);

    setDataAr([
      { month: "January", dado1: 45 },
      { month: "February", dado1: 84 },
      { month: "March", dado1: 537 },
      { month: "April", dado1: 402 },
      { month: "May", dado1: 84 },
      { month: "June", dado1: 423 },
    ]);
  }, []);

  useEffect(() => {
    // Configura o timer para iniciar a animação após 5 segundos
    const timer = setTimeout(() => {
      setIsVisible(false); // Oculta o componente
    }, 5000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, []);

  return (
    <div className="transition-all duration-500">
      <SidebarHome />
      <div
        className={`flex justify-center items-center space-x-4 py-4 bg-[#ffffffe3] text-center fixed top-0 left-0 w-full transition-all duration-1000 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <h1 className="text-5xl">Dashboard Ecoguard</h1>
      </div>
      {isVisible! && <div className="h-20 flex "></div>}
      <section className="ml-20 flex flex-wrap justify-center pt-6 space-x-14">
        <CardHome
          chartConfig={"IPC"}
          chartColor="hsl(var(--chart-3))"
          chartData={dataAgua}
          title="Indice de qualidade da água"
          icon={<Droplets size={32} />}
          bgColor="bg-blue-100"
          dado1="1,3"
          descricao="Qualidade da água dos rios gravada nos últimos meses"
          descricao2="Trending up by 5.2% this month"
          descricao3="Showing total visitors for the last 6 months"
        />
        <CardHome
          chartConfig={"solo"}
          chartColor="hsl(var(--chart-1))"
          chartData={dataAr}
          title="Qualidade do ar"
          icon={<Wind size={32} />}
          bgColor="bg-orange-100"
          dado1="1,3"
          descricao="Index da qualidade do ar gravado nos últimos meses"
          descricao2="Trending up by 5.2% this month"
          descricao3="Showing total visitors for the last 6 months"
        />
        <CardHome
          chartConfig={"Solo"}
          chartColor="hsl(var(--chart-2))"
          chartData={dataSolo}
          title="Qualidade do solo"
          icon={<Sprout size={32} />}
          bgColor="bg-green-100"
          dado1="1,3"
          descricao="Quantidade de residuos encontrados no solo da região dos ultimos meses"
          descricao2="Trending up by 5.2% this month"
          descricao3="Showing total visitors for the last 6 months"
        />
      </section>
      <section className="flex justify-center ml-20 space-x-11 mt-5">
        <div className="w-[55%]">
          <ChartData />
        </div>
        <DenunciaForm />
      </section>
      <div className="flex justify-center">
        <section className="mt-5  ml-20  flex justify-center space-x-2 w-[85vw] p-5 bg-white rounded-3xl  ">
          <section className="mb-8">
            <div className="flex justify-center items-center">
              <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
              <div
                className={`relative w-24 h-24  transition-transform duration-400 z-30 mb-2`}
              >
                <Image
                  src="/ecoguard.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Crescimento Urbano e Problemas Ambientais
            </h1>
            <p>
              O crescimento urbano desordenado e a falta de planejamento eficaz
              têm gerado graves problemas ambientais nas cidades brasileiras,
              como poluição do ar e da água, desmatamento e ocupação de áreas de
              risco. O desafio consiste em desenvolver uma rede de sensores IoT
              e uma plataforma de análise de dados que permita o monitoramento
              em tempo real da qualidade do ar, da água, da cobertura vegetal e
              de outros indicadores ambientais relevantes.
            </p>
            <p>
              A solução deve ser capaz de integrar dados de diferentes fontes,
              gerar alertas em caso de desvios dos padrões aceitáveis e fornecer
              informações para o planejamento e implementação de políticas
              públicas de mitigação dos impactos ambientais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Objetivo</h2>
            <p>
              O objetivo principal é melhorar a qualidade ambiental nas cidades
              em <b>15% dentro de 3 anos</b>, através de:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <b>Monitoramento em tempo real da qualidade do ar e da água:</b>{" "}
                A rede de sensores IoT deve coletar dados sobre a concentração
                de poluentes atmosféricos e a qualidade da água em diferentes
                pontos da cidade, permitindo a identificação de áreas críticas e
                a emissão de alertas em caso de desvios dos padrões aceitáveis.
              </li>
              <li>
                <b>Monitoramento da cobertura vegetal e de áreas de risco:</b>{" "}
                Sensores e imagens de satélite devem ser utilizados para
                monitorar a cobertura vegetal, identificar áreas de desmatamento
                e ocupação irregular, e gerar alertas para as autoridades
                competentes.
              </li>
              <li>
                <b>Plataforma de análise e visualização de dados:</b> Uma
                plataforma digital deve integrar e analisar os dados coletados
                pelos sensores, gerando mapas interativos, gráficos e relatórios
                que permitam a visualização e a compreensão dos impactos
                ambientais urbanos.
              </li>
              <li>
                <b>
                  Geração de insights e recomendações para políticas públicas:
                </b>{" "}
                A partir da análise dos dados, a plataforma deve gerar insights
                e recomendações para o planejamento e a implementação de
                políticas públicas de mitigação dos impactos ambientais, como a
                criação de áreas verdes, a promoção do transporte sustentável e
                a gestão de resíduos.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Justificativa</h2>
            <p>
              O crescimento urbano desordenado e a falta de planejamento têm
              gerado graves problemas ambientais nas cidades, impactando a saúde
              e a qualidade de vida da população. A implementação de um sistema
              de monitoramento e mitigação de impactos ambientais urbanos
              permitirá:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <b>Melhoria da qualidade do ar e da água:</b> Identificar e
                controlar fontes de poluição.
              </li>
              <li>
                <b>
                  Preservação de áreas verdes e prevenção de desastres naturais:
                </b>{" "}
                Monitorar a cobertura vegetal e identificar áreas de risco.
              </li>
              <li>
                <b>Planejamento urbano mais sustentável e eficiente:</b>{" "}
                Fornecer dados e informações para a tomada de decisões.
              </li>
              <li>
                <b>Maior transparência e participação cidadã:</b> Disponibilizar
                informações sobre a qualidade ambiental da cidade.
              </li>
            </ul>
          </section>
        </section>
      </div>
      <div className=" flex h-12" />
    </div>
  );
}
