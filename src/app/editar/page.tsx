"use client";

import Image from "next/image";
import SidebarHome from "@/components/SidebarHome";
import { CardHome } from "@/components/cardHome";
import { Droplets, Wind, Sprout, MapPin, Pencil } from "lucide-react";
import { ChartData } from "@/components/chartData";
import { DenunciaForm } from "@/components/DenunciaForm";
import { useEffect, useState } from "react";
import { CardPages } from "@/components/cardPages";
import { CloudUpload } from "lucide-react";
import { put } from "../../../services/api";

export default function Editar() {
  const [formData, setFormData] = useState({
    localizacao: "ilheus-ba",
    id: "",
    area: "",
    valor: "aguas",
    regiao: "",
    comentario: "",
    tipo: "ica",
  });

  // Função para lidar com mudanças nos campos
  interface FormData {
    localizacao: string;
    id: string;
    area: string;
    valor: string;
    tipo: string;
    regiao: string;
    comentario: string;
  }

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prevState: FormData) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  interface SubmitEvent {
    preventDefault: () => void;
  }

 

  const enviarDados = async (evnt: React.FormEvent<HTMLFormElement>) => {
    evnt.preventDefault();
    const endpoint = `/${formData.area}/${formData.id}`; // Endpoint no backend (exemplo: "/login")
    const dados = {
      regiao: formData.regiao,
      cidade: formData.localizacao,
      dado: formData.valor,
      comentario: formData.comentario,
      tipo: formData.tipo,
    };

    try {
      // Chamada para a função `post`
      const resposta = await put(endpoint, dados);
      alert("Dados enviados com sucesso");
      setFormData({
        localizacao: "ilheus-ba",
        id: "",
        area: "",
        valor: "",
        regiao: "",
        comentario: "",
        tipo: "",
      });
      console.log("Dados enviados com sucesso:", resposta);
    } catch (erro) {
      console.error("Erro ao enviar os dados:", erro);
    } 
  };

  return (
    <div className="">
      <SidebarHome />
      <div className="flex justify-center h-screen items-center">
        <form
          onSubmit={enviarDados}
          className="bg-white p-6 shadow-lg w-[60vw] rounded-3xl"
        >
          <div className="flex justify-center space-x-3">
            <span className="text-3xl font-bold mb-6 text-center">
              Edite os dados
            </span>{" "}
            <span className="">
              <Pencil size={36} />
            </span>
          </div>

          <div className="flex justify-evenly ">
            {/*aqui */}
            <div className="w-[40%]">
              <div className="mb-4">
                <label
                  htmlFor="id"
                  className="block text-lg font-medium text-gray-700"
                >
                  Id:
                </label>
                <input
                  type="number"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="localizacao"
                  className="block text-lg font-medium text-gray-700"
                >
                  Localização:
                </label>
                <select
                  id="localizacao"
                  name="localizacao"
                  value={formData.localizacao}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                >
                  <option value="ilheus-ba">Ilhéus-BA</option>
                  <option value="salvador-ba">Salvador-BA</option>
                  <option value="porto-seguro">Porto Seguro</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="Área"
                  className="block text-lg font-medium text-gray-700"
                >
                  Área:
                </label>
                <select
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                >
                  <option value="aguas">Agua</option>
                  <option value="ares">Ar</option>
                  <option value="solos">Solo</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="tipo"
                  className="block text-lg font-medium text-gray-700"
                >
                  Tipo:
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                >
                  <option value="ica">Ica</option>
                  <option value="ph">pH</option>
                  <option value="temperatura">Temperatura</option>
                </select>


              </div>

              <div className="mb-4">
                <label
                  htmlFor="valor"
                  className="block text-lg font-medium text-gray-700"
                >
                  Valor:
                </label>
                <input
                  type="number"
                  id="valor"
                  name="valor"
                  step="0.1"
                  value={formData.valor}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
            </div>
            <div className="w-[40%]">
              <div className="mb-4">
                <label
                  htmlFor="regiao"
                  className="block text-lg font-medium text-gray-700"
                >
                  Região:
                </label>
                <input
                  type="text"
                  id="regiao"
                  name="regiao"
                  value={formData.regiao}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="comentario"
                  className="block text-lg font-medium text-gray-700"
                >
                  Comentário:
                </label>
                <textarea
                  id="comentario"
                  name="comentario"
                  rows={4}
                  value={formData.comentario}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
              >
                Atualizar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
