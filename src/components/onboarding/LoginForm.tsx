"use client";
import { Input, Button } from "@/components";
import { useState } from "react";


export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  function handleFormSubmit(e:React.FormEvent){
    e.preventDefault();
    setIsLoading(true);

    // Do the server action

    setTimeout(() => setIsLoading(false), 20000);
  }


  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 w-[400px]">
      <h2 className="text-center text-2xl font-bold">Inicia sesión</h2>
      <Input label="Correo" placeholder="Ingresa tu correo electrónico" />
      <Input label="Contraseña" placeholder="Ingresa tu contraseña" />
      <div className="flex justify-between">
        <Button variant="tertiary" isLoading={isLoading} type="button">Regístrate</Button>
        <Button variant="primary" type="submit">Iniciar sesión</Button>
      </div>
    </form>
  );
}