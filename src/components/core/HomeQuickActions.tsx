"use client";
import { Dropdown, Button } from "@/ui";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export function HomeQuickActions() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center">

      <h2 className="font-bold">Balance de gastos</h2>

      <div className="flex gap-4">
        <Dropdown
          isOpen={isDropdownOpen}
          trigger={
            <Button
              onClick={() => setIsDropdownOpen(prev => !prev)}
              className="w-fit"
              variant="primary"
              endIcon={<AiOutlinePlus size={24} />}
            >
              Movimiento
            </Button>
          }
          options={[
            <Button key={1} className="w-full" variant="tertiary">Ingreso</Button>,
            <Button key={2} className="w-full" variant="tertiary">Gasto</Button>,
            <Button key={3} className="w-full" variant="tertiary">Objetivo</Button>
          ]}
        />
      </div>

    </div>
  );
}

// endIcon={<AiOutlinePlus size={24} />}
// endIcon={<AiOutlinePlus size={24} />}
// endIcon={<AiOutlinePlus size={24} />}