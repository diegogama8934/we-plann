"use client";
import { Button, Input } from "@/ui";
import { useState } from "react";


export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    emailConfirm: "",
    password: "",
    passwordConfirm: ""
  });

  return (
    <form className="flex flex-col items-center gap-6 w-[800px]">
      <h2 className="text-center text-2xl font-bold">Registra tu cuenta</h2>
      <fieldset className="flex flex-wrap items-center gap-6">
        <Input
          className="w-96"
          label="Nombre"
          placeholder="Escribe tu nombre"
          value={form.name}
          onValueChange={({ target }) => setForm({ ...form,  name: target.value })}
        />
        <Input
          className="w-96"
          label="Apellidos"
          placeholder="Escribe tus apellidos"
          value={form.lastName}
          onValueChange={({ target }) => setForm({ ...form, lastName: target.value})}
        />
        <Input
          className="w-96"
          label="Correo"
          placeholder="Ingresa tu correo electrónico"
          value={form.email}
          onValueChange={({ target }) => setForm({ ...form, email: target.value })}
        />
        <Input
          className="w-96"
          label="Confirma tu correo"
          placeholder="Ingresa de nuevo tu correo electrónico"
          value={form.emailConfirm}
          onValueChange={({ target }) => setForm({ ...form, emailConfirm: target.value })}
        />
        <Input
          className="w-96"
          label="Contraseña"
          placeholder="Ingresa tu contraseña" type="password"
          value={form.password}
          onValueChange={({ target }) => setForm({ ...form, password: target.value })}
        />
        <Input
          className="w-96"
          label="Confirma tu contraseña"
          placeholder="Ingresa de nuevo tu contraseña" type="password"
          value={form.passwordConfirm}
          onValueChange={({ target }) => setForm({ ...form, passwordConfirm: target.value })}
        />
      </fieldset>
      <Button isLoading={isLoading} variant="primary" type="submit" className="self-end">Regístrate</Button>
    </form>
  );
}