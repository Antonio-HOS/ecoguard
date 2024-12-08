"use client";

import Image from "next/image";
import SidebarHome from "@/components/SidebarHome";
import { CardHome } from "@/components/cardHome";
import { Droplets, Wind, Sprout, MapPin } from "lucide-react";
import { ChartData } from "@/components/chartData";
import { DenunciaForm } from "@/components/DenunciaForm";
import { useEffect, useState } from "react";
import { CardPages } from "@/components/cardPages";
import { get } from "../../../../services/api";

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

export default function Solo() {
  const [dadosApi, setDadosApi] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Função para carregar os produtos
    const fetchProdutos = async () => {
      try {
        const token = "seu-token-aqui"; // Caso seja necessário um token de autenticação
        const data = await get("/solos", token); // Faz a requisição GET
        setDadosApi(data.solos); // Atualiza o estado com os dados da resposta
        console.log(data.solos);
      } catch (err) {
        setError("Erro ao carregar os produtos");
        console.error(err);
      } finally {
        setLoading(true); // Finaliza o estado de carregamento
      }
    };

    fetchProdutos();
  }, []);

  const [local, setLocal] = useState<string>();
  useEffect(() => {
    setLocal("Ilhéus-Ba");
  }, []);

  return (
    <div className="">
      <SidebarHome />
      <div className="flex justify-center items-center space-x-4 bg-[#ffffffe3] py-5">
        <Sprout size={35} />
        <h1 className="text-3xl">Dados sobre os solos - {local}</h1>
        <MapPin size={32} color="red" />
      </div>
      <section className="ml-20 flex  justify-evenly pt-6 ">
        <div className="w-[40%] pl-10 p-4 rounded-2xl h-[80vh] hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-[rgba(255,255,255,0.78)] overflow-y-auto">
          {!loading && (
            <div className="flex justify-center mt-10 text-3xl items-center">
              <h1>carregando...</h1>
            </div>
          )}
          {dadosApi?.length ? (
            dadosApi.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "16px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "8px",
                }}
              >
                <h3>{item.regiao}</h3>
                <p>
                  <strong>Local:</strong> {item.cidade}
                </p>
                <p>
                  <strong>Data:</strong> {item.createdAt.slice(0, 10)}
                </p>
                <p
                  style={{
                    color: item.tipo === "ICA" ? "green" : "red",
                  }}
                >
                  <strong>{item.tipo}:</strong> {item.dado}
                </p>
                <p>
                  <strong>Comentario:</strong> {item.comentario}
                </p>
              </div>
            ))
          ) : (
            <h1 className="flex justify-center text-2xl">Nenhum dado cadastrado...</h1>
          )}
        </div>
        {dadosApi && (
        <CardPages
          title="Indice de qualidade dos solos"
          icon={<Sprout size={32} />}
          bgColor="bg-[rgba(105,215,114,0.78)] hover:bg-[rgba(105,215,114,0.9))] transition-all duration-500"
          dado1={dadosApi}
          descricao="Qualidade dos solos gravada nos últimos meses"
          descricao2={`Ultima qualidade do solos:${dadosApi[0]?.tipo}: ${dadosApi[0]?.dado}`}
          descricao3="A tabela mostra os dados coletados nos últimos meses"
        />
        )}
      </section>
    </div>
  );
}
