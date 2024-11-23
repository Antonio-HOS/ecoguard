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
  Droplets,
  LogIn,
  FileText,
  Cross,
  X,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogo, setIsOpenLogo] = useState("");
  const [estilo, setEstilo] = useState("flex justify-center py-2");
  const [compartilhar, setCompartilhar] = useState(false);

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 bg-white border-r-[2px] border-[#d2d2d2]  h-screen flex flex-col  z-50 fixed`}
      onMouseEnter={() => {
        if (!isOpen) {
          setIsOpen(!isOpen);
          setEstilo(" hover:scale-110 pl-3 py-2");
          setIsOpenLogo("scale-150 ");
        }
      }}
      onMouseLeave={() => {
        if (isOpen) {
          setIsOpen(!isOpen);
          setEstilo("flex justify-center py-2");
          setIsOpenLogo("");
        }
      }}
    >
      <nav className=" ">
        <ul className="flex flex-col  mt-2">
          <li className="flex justify-center">
            <Link href="/" className="w-[80px] h-[80px] group">
              <div
                className={`relative w-full h-full  transition-transform duration-00 ${isOpenLogo}`}
              >
                <Image
                  src="/ecoguard.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </li>
          <h1 className="text-black text-center text-xl">Dados:</h1>

          <li
            className={` transition-all duration-500 ${estilo} hover:bg-gray-200 `}
          >
            <Link href="/dados/ar" className="">
              <p className="flex items-center jusce pb-0 text-black ">
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
          <li
            className={` transition-all duration-500 ${estilo} hover:bg-blue-200`}
          >
            <Link href="/dados/agua" className="">
              <p className="flex items-center  pb-0 text-black ">
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
          <li
            className={` transition-all duration-500 ${estilo} hover:bg-green-200`}
          >
            <Link href="/dados/solo" className="">
              <p className="flex items-center  pb-0 text-black ">
                <Sprout size={32} />
                {isOpen && <span className="ml-2">Solo</span>}
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
      <hr className="mt-5"></hr>
      <nav className="mt-5 ">
        <ul className="flex flex-col ">
          <h1 className="text-black text-center text-xl">Coleta:</h1>
          <li
            className={` transition-all duration-500 ${estilo} hover:bg-gray-200`}
          >
            <Link href="/adicionar" className="">
              <p className="flex items-center pb-0 text-black ">
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

          <li
            className={` transition-all duration-500 ${estilo} hover:bg-gray-200`}
          >
            <Link href="/editar" className="">
              <p className="flex items-center  pb-0 text-black ">
                <Pencil size={32} />
                {isOpen && <span className="ml-2">Editar</span>}
              </p>
              {isOpen && (
                <p className="ml-14 mb-2 text-black font-light">Editar dados</p>
              )}
            </Link>
          </li>

          <li
            className={` transition-all duration-500 ${estilo} hover:bg-gray-200`}
            onClick={() => setCompartilhar(!compartilhar)}
          >
            <p className="flex items-center   text-black ">
              <Send size={32} />
              {isOpen && <span className="ml-2">Compartilhar</span>}
            </p>
          </li>

          <li
            className={` transition-all duration-500 ${estilo} hover:bg-gray-200`}
          >
            <Link href="/login" className="">
              <p className="flex items-center justify-center  text-black ">
                <LogIn size={32} />
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      {compartilhar && (
        <div className="w-80 h-32 flex justify-center items-center absolute rounded-tr-3xl rounded-br-3xl border-[2px] border-l-0 bg-white border-[#d2d2d2]  left-full top-2/3 translate-x--1/2 translate-y--1/2 " onMouseLeave={()=>setCompartilhar(false)}>
          <X size={25} onClick={()=>setCompartilhar(false)} className="absolute top-2 right-2"/>
          <Button variant={"outline"} size={"lg"}>
            Gerar pdf
            <FileText size={20} />
          </Button>
        </div>
      )}
    </aside>
  );
}