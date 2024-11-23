"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, User2 } from "lucide-react";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { BackButton } from "../backbutton";
import { RotaBackend } from "../../../services/laudo";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${RotaBackend}/api/login/`,
        {
          username,
          password,
        },
        
      );

      if (response.status === 200) {
        const result = response.data;
        sessionStorage.setItem("authToken", result.access);
        router.push("/")
      }
    } catch (error: any) {
      console.error("Error:", error);

      // Verifica se o erro possui uma mensagem de resposta específica
      const errorMessage = error.message || "Credenciais inválidas";
    }
  };

  return (
    <main className="h-screen justify-center items-center flex">
      <div className="absolute left-8 top-8">
        <BackButton rota="/admin" />
      </div>
      <section className="justify-center flex-row flex items-center">
        <Card className="sm:m-9  w-[350px] sm:w-[400px]">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="text-5xl">Login</CardTitle>
              <CardDescription>Faça login com seu usuário</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <User2 className="w-5 h-5" />
                    <Label htmlFor="username" className="ml-1">
                      Username
                    </Label>
                  </div>
                  <Input
                    id="username"
                    type="text"
                    placeholder="nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <Key className="w-5 h-5" />
                      <Label htmlFor="password" className="ml-1">
                        Senha
                      </Label>
                    </div>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    placeholder="*****"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600">
                  Login
                </Button>
              </div>
            </CardContent>
          </form>
        </Card>

        <div className=" hidden md:block">
          <h1 className="text-6xl font-bold">Ecoguard</h1>
          <p className="text-3xl text-green-600 font-bold">
            Análises de dados{" "}
          </p>
          <p className="text-3xl text-green-600 font-bold">do meio ambiente.</p>
        </div>
      </section>
    </main>
  );
}
