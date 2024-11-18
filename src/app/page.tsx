import Image from "next/image";
import SidebarHome from "@/components/SidebarHome";
import { CardHome } from "@/components/cardHome";
import { Droplets, Wind, Sprout } from "lucide-react";
import { ChartData } from "@/components/chartData";
import { DenunciaForm } from "@/components/DenunciaForm";

export default function Home() {
  return (
    <div className="">
      <SidebarHome />
      <div className="flex justify-center items-center space-x-4 bg-white">
      <h1 className="text-5xl">Dashboard Ecoguard</h1> <Image src="/ecoguard.png" alt="Ecoguard logo" width={100} height={100} />
      </div>
      <section className="ml-20 flex flex-wrap justify-center pt-6 space-x-14">
        <CardHome
          title="Indice de qualidade da água"
          icon={<Droplets size={32} />}
          bgColor="bg-blue-100"
          dado1="1,3"
          descricao="Qualidade da água dos rios gravada nos últimos meses"
          descricao2="Trending up by 5.2% this month"
          descricao3="Showing total visitors for the last 6 months"
        />
        <CardHome
          title="Qualidade do ar"
          icon={<Wind size={32} />}
          bgColor="bg-orange-100"
          dado1="1,3"
          descricao="Index da qualidade do ar gravado nos últimos meses"
          descricao2="Trending up by 5.2% this month"
          descricao3="Showing total visitors for the last 6 months"
        />
        <CardHome
          title="Qualidade do solo"
          icon={<Sprout size={32} />}
          bgColor="bg-green-100"
          dado1="1,3"
          descricao="Quantidade de residuos encontrados no solo da região dos ultimos meses"
          descricao2="Trending up by 5.2% this month"
          descricao3="Showing total visitors for the last 6 months"
        />
      </section>
      <section className="flex justify-center ml-20 space-x-11 mt-7">
        <div className="w-[55%]">
          <ChartData />
        </div>
        <DenunciaForm />

      </section>
      <section className="mt-5 flex justify-center">
      </section>
    </div>
  );
}
