"use client";

import Image from "next/image";
import SidebarHome from "@/components/SidebarHome";
import { CardHome } from "@/components/cardHome";
import { Droplets, Wind, Sprout, MapPin } from "lucide-react";
import { ChartData } from "@/components/chartData";
import { DenunciaForm } from "@/components/DenunciaForm";
import { useEffect, useState } from "react";
import { CardPages } from "@/components/cardPages";

const data = [
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "ICA",
    valor: 25,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "Pci",
    valor: 17,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "ICA",
    valor: 33,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "Pci",
    valor: 7,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "ICA",
    valor: 25,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "Pci",
    valor: 14,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "ICA",
    valor: 37,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "Pci",
    valor: 22,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "ICA",
    valor: 18,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "Pci",
    valor: 30,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "ICA",
    valor: 12,
  },
  {
    praia: "Praia dos milionários",
    local: "Ilhéus-BA",
    data: "24/08/2024",
    tipo: "Pci",
    valor: 8,
  },
];

export default function Agua() {
  const [local, setLocal] = useState<string>();
  useEffect(() => {
    setLocal("Ilhéus-Ba");
  }, []);

  return (
    <div className="">
      <SidebarHome />
      <div className="flex justify-center items-center space-x-4 bg-[#ffffffe3] py-5">
        <Droplets size={35} />
        <h1 className="text-3xl">Dados sobre as águas - {local}</h1>
        <MapPin size={32} color="red"/>
      </div>
      <section className="ml-20 flex  justify-evenly pt-6 ">
        <div className="w-[40%] pl-10 p-4 rounded-2xl h-[80vh] hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-[rgba(255,255,255,0.78)] overflow-y-auto">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "16px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "8px",
              }}
            >
              <h3>{item.praia}</h3>
              <p>
                <strong>Local:</strong> {item.local}
              </p>
              <p>
                <strong>Data:</strong> {item.data}
              </p>
              <p
                style={{
                  color: item.tipo === "ICA" ? "green" : "red",
                }}
              >
                <strong>{item.tipo}:</strong> {item.valor}
              </p>
            </div>
          ))}
        </div>
        <CardPages
          title="Indice de qualidade da água"
          icon={<Droplets size={32} />}
          bgColor="bg-[rgba(96,115,255,0.3)] hover:bg-[rgba(96,115,255,0.7)] transition-all duration-500"
          dado1="1,3"
          descricao="Qualidade da água dos rios gravada nos últimos meses"
          descricao2="Aqualidade caiu em 5.2% no último mês"
          descricao3="A tabela mostra os dados coletados no últimos 6 meses"
        />
      </section>
    </div>
  );
}
