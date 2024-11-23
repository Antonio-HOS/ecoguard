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
      { month: "January", desktop: 186, mobile: 80 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 },
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
          chartConfig={"IPC"}
          chartColor="hsl(var(--chart-1))"
          chartData={dataAgua}
          title="Qualidade do ar"
          icon={<Wind size={32} />}
          bgColor="bg-orange-100"
          dado1="1,3"
          descricao="Index da qualidade do ar gravado nos últimos meses"
          descricao2="Trending up by 5.2% this month"
          descricao3="Showing total visitors for the last 6 months"
        />
        <CardHome
          chartConfig={"IPC"}
          chartColor="hsl(var(--chart-2))"
          chartData={dataAgua}
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
      <section className="mt-5 flex justify-center"></section>
    </div>
  );
}
