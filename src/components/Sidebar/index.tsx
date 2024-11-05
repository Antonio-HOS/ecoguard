"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  CircleChevronLeft,
  CircleChevronRight,
  CloudUpload,
  Pen,
  Pencil,
  Send,
  Sprout,
  Waves,
  Wind,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [estilo, setEstilo] = useState("");


  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-100 bg-[#e3e3e3] h-screen flex flex-col relative`}
    >
      <button
        className="p-4 text-black absolute top-1/2 transform -translate-y-1/2 left-full -translate-x-1/2"
        onClick={() =>{if(!isOpen){setEstilo("hover:bg-gray-400 hover:scale-110")}else{setEstilo("")}; setIsOpen(!isOpen); }}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <CircleChevronRight size={40} />
        ) : (
          <CircleChevronLeft size={40} />
        )}
      </button>

      <nav className=" ">
        <ul className="flex flex-col  mt-10">
          <h1 className="text-black text-center text-xl">Dados:</h1>

          <li className={` transition-all duration-500 ${estilo}`} >
            <Link href="/" className="">
              <p className="flex items-center p-4 pb-0 text-black ">
                <Wind size={32} />
                {isOpen && <span className="ml-2">Ar</span>}
              </p>
              {isOpen && (
                <p className="ml-14 mb-2 text-black font-light">
                  Qualidade do ar
                </p>
              )}
            </Link>
          </li>
          <li className={` transition-all duration-500 ${estilo}`} >
            <Link href="/" className="">
              <p className="flex items-center p-4 pb-0 text-black ">
                <Waves size={32} />
                {isOpen && <span className="ml-2">Rios</span>}
              </p>
              {isOpen && (
                <p className="ml-14 mb-2 text-black font-light">
                  Qualidade das águas
                </p>
              )}
            </Link>
          </li>
          <li className={` transition-all duration-500 ${estilo}`} >
            <Link href="/" className="">
              <p className="flex items-center p-4 pb-0 text-black ">
                <Sprout size={32} />
                {isOpen && <span className="ml-2">Adicionar</span>}
              </p>
              {isOpen && (
                <p className="ml-14 mb-2 text-black font-light">
                  Qualidades dos solos
                </p>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="mt-20 ">
        <ul className="flex flex-col ">
          <h1 className="text-black text-center text-xl">Coleta:</h1>
          <li className={` transition-all duration-500 ${estilo}`} >
            <Link href="/" className="">
              <p className="flex items-center p-4 pb-0 text-black ">
                <CloudUpload size={32} />
                {isOpen && <span className="ml-2">Adicionar</span>}
              </p>
              {isOpen && (
                <p className="ml-14 mb-2 text-black font-light">
                  Adicionar novos dados
                </p>
              )}
            </Link>
          </li>

          <li className={` transition-all duration-500 ${estilo}`} >
            <Link href="/" className="">
              <p className="flex items-center p-4 pb-0 text-black ">
                <Pencil size={32} />
                {isOpen && <span className="ml-2">Editar</span>}
              </p>
              {isOpen && (
                <p className="ml-14 mb-2 text-black font-light">Editar dados</p>
              )}
            </Link>
          </li>

          <li className={` transition-all duration-500 ${estilo}`} >
            <Link href="/" className="">
              <p className="flex items-center p-4  text-black ">
                <Send size={32} />
                {isOpen && <span className="ml-2">Compartilhar</span>}
              </p>
             
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
