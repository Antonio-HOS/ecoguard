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
} from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogo, setIsOpenLogo] = useState("");
  const [estilo, setEstilo] = useState("");

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-100 bg-white border-r-[2px] border-[#d2d2d2]  h-screen flex flex-col  z-50 fixed`}
    >
      <button
        className="p-4 text-black absolute top-1/2 transform -translate-y-1/2 z-10 left-full -translate-x-1/2"
        onClick={() => {
          if (!isOpen) {
            setEstilo(" hover:scale-110");
            setIsOpenLogo("scale-150");
          } else {
            setEstilo("");
            setIsOpenLogo("");
          }
          setIsOpen(!isOpen);
        }}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <CircleChevronRight size={40} />
        ) : (
          <CircleChevronLeft size={40} />
        )}
      </button>

      <nav className=" ">
        <ul className="flex flex-col  mt-2">
          <li className="flex justify-center">
            <Link href="/" className="w-[80px] h-[80px] group">
              <div
                className={`relative w-full h-full  transition-transform duration-300 ${isOpenLogo}`}
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
            className={` transition-all duration-500 ${estilo} hover:bg-gray-200`}
          >
            <Link href="/" className="">
              <p className="flex items-center p-4 pb-0 text-black ">
                <Droplets size={32} />
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
          <li
            className={` transition-all duration-500 ${estilo} hover:bg-green-200`}
          >
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
      <hr className="mt-5"></hr>
      <nav className="mt-5 ">
        <ul className="flex flex-col ">
          <h1 className="text-black text-center text-xl">Coleta:</h1>
          <li
            className={` transition-all duration-500 ${estilo} hover:bg-gray-200`}
          >
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

          <li
            className={` transition-all duration-500 ${estilo} hover:bg-gray-200`}
          >
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

          <li
            className={` transition-all duration-500 ${estilo} hover:bg-gray-200`}
          >
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
