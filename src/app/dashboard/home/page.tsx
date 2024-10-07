import { Button } from "@/ui";
import { Metadata } from "next"
import { AiOutlineCalendar, AiOutlineEye } from "react-icons/ai";

export const metadata: Metadata = {
  title: "We plan",
  description: "Platform to plan and manage couple bills and the earnings of each one."
}

export default function HomePage() {


  return (
    <div className="flex flex-col p-12 gap-12">
      <div className="flex gap-8">
        <div className="flex items-center gap-4">
          <span>Ver como: </span>
          <Button className="w-fit" variant="secondary" endIcon={<AiOutlineEye size={24}/>}>Mosaicos</Button>
        </div>
        <div className="flex items-center gap-4">
          <span>Métricas: </span>
          <Button className="w-fit" variant="secondary">Selecciona las métricas</Button>
        </div>
        <div className="flex items-center gap-4">
          <span>Temporalidad: </span>
          <Button className="w-fit" variant="secondary" endIcon={<AiOutlineCalendar size={24}/>}>Selecciona la temporalidad</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-8 border border-zinc-200 rounded-xl">
        <div className="flex justify-between">
          <h2 className="font-bold">Hoy</h2>
          <span className="text-zinc-400">Campo extra</span>
        </div>
        <div className="h-80 rounded-lg bg-zinc-100"></div>
      </div>

      <div className="flex flex-col gap-4 p-8 border border-zinc-200 rounded-xl">
        <div className="flex justify-between">
          <h2 className="font-bold">Esta semana</h2>
          <span className="text-zinc-400">Campo extra</span>
        </div>
        <div className="h-80 rounded-lg bg-zinc-100"></div>
      </div>

      <div className="flex flex-col gap-4 p-8 border border-zinc-200 rounded-xl">
        <div className="flex justify-between">
          <h2 className="font-bold">Este mes</h2>
          <span className="text-zinc-400">Campo extra</span>
        </div>
        <div className="h-80 rounded-lg bg-zinc-100"></div>
      </div>
      
      <div className="flex flex-col gap-4 p-8 border border-zinc-200 rounded-xl">
        <div className="flex justify-between">
          <h2 className="font-bold">Este año</h2>
          <span className="text-zinc-400">Campo extra</span>
        </div>
        <div className="h-80 rounded-lg bg-zinc-100"></div>
      </div>
    </div>
  );
}