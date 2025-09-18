"use client";
import { Dropdown } from "@/ui";
import { Button } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export function HomeQuickActions() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center">

      <h2 className="font-bold">Balance de gastos</h2>

      <div className="flex gap-4">
        <Button></Button>

        <Dropdown
          isOpen={isDropdownOpen}
          trigger={
            <Button
              onClick={() => setIsDropdownOpen(prev => !prev)}
              className="w-fit"
              endIcon={<AiOutlinePlus size={24} />}
            >
              Movimiento
            </Button>
          }
          options={[
            <Button key={1} className="w-full">Ingreso</Button>,
            <Button key={2} className="w-full">Gasto</Button>
          ]}
        />
      </div>

    </div>
  );
}