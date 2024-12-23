"use client";

import { Button, Input, InputDate, Modal } from "@/ui";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export default function EarningsPage() {

  const [date, setDate] = useState<string>(getToday());

  function onDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value);
  }

  function getToday(): string {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="flex flex-col p-12 gap-12">

      <div className="flex justify-between items-center">

        <h2 className="font-bold">Ganancias</h2>

        <Button
          useAsLink
          className="w-fit"
          href="/dashboard/add"
          variant="primary"
          endIcon={<AiOutlinePlus size={24} />}
        >
          Agregar ganancia
        </Button>

      </div>

      <Modal
        title="Agregar ganancia"
        body={
          <form className="flex flex-col gap-4">
            <Input label="Concepto" placeholder="Concepto" />
            <Input label="Monto" placeholder="Monto" />
            <Input label="Etiqueta" placeholder="Selecciona una etiqueta..." />
            <InputDate
              label="Selecciona una fecha"
              placeholder="Selecciona una fecha"
              onValueChange={onDateChange}
              value={date}
            />
            <Input label="Descripción (opcional)" placeholder="Agrega una descripción (opcional)" />
          </form>
        }
        footer={
          <div className="flex justify-end gap-4 w-full">
            <Button variant="tertiary">Cancelar</Button>
            <Button>Guardar</Button>
          </div>
        }
      />

    </div>
  );
}