"use client";

import { Button, Input, InputDate, Modal } from "@/ui";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";

export default function EarningsPage() {

  const [date, setDate] = useState<string>(getToday());
  const { isOpen, onClose, onOpen } = useModal();

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
          className="w-fit"
          variant="primary"
          endIcon={<AiOutlinePlus size={24} />}
          onClick={onOpen}
        >
          Agregar ganancia
        </Button>

      </div>

      <Modal
        title="Agregar ganancia"
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
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
            <Button onClick={onClose} variant="tertiary">Cancelar</Button>
            <Button onClick={onClose}>Guardar</Button>
          </div>
        }
      />

    </div>
  );
}