"use client";
import { ChartsControls, Chart } from "@/components";
import { useState } from "react";

export function ChartsGrid() {
  const [visibleCharts, setVisibleCharts] = useState();

  return (
    <>

      <ChartsControls
        visibleCharts={visibleCharts}
      />

      <div className="grid grid-cols-2 gap-8">

        <Chart />
        <Chart />
        <Chart />
        <Chart />

        {/* <div className="flex flex-col gap-4 p-8 border border-zinc-200 rounded-xl">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-bold">Esta semana</h2>
              <span className="text-red-700 font-bold">- $319</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-zinc-400">Campo extra</span>
              <Button variant="tertiary" isIconOnly><AiOutlineMore size={24} /></Button>
            </div>
          </div>
          <div className="h-80 rounded-lg bg-zinc-100"></div>
        </div>

        <div className="flex flex-col gap-4 p-8 border border-zinc-200 rounded-xl">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-bold">Este mes</h2>
              <span className="text-green-700 font-bold">+ $1201</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-zinc-400">Campo extra</span>
              <Button variant="tertiary" isIconOnly> <AiOutlineMore size={24} /> </Button>
            </div>
          </div>
          <div className="h-80 rounded-lg bg-zinc-100"></div>
        </div>

        <div className="flex flex-col gap-4 p-8 border border-zinc-200 rounded-xl">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-bold">Este año</h2>
              <span className="text-green-700 font-bold">+ $3513</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-zinc-400">Campo extra</span>
              <Button variant="tertiary" isIconOnly> <AiOutlineMore size={24} /> </Button>
            </div>
          </div>
          <div className="h-80 rounded-lg bg-zinc-100"></div>
        </div> */}
      </div>
    </>
  );
}