import { AiOutlineMore } from "react-icons/ai";
import { Button } from "@/ui";


export function Chart() {


  return (
    <div className="flex flex-col gap-4 p-8 border border-zinc-200 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="font-bold">Hoy</h2>
          <span className="text-green-700 font-bold">+ $73</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-zinc-400">Campo extra</span>
          <Button variant="tertiary" isIconOnly><AiOutlineMore size={24} /></Button>
        </div>
      </div>
      <div className="h-80 rounded-lg relative">
        <span className="h-full inline-block w-[1px] bg-zinc-200 absolute top-0 bottom-0"></span>
        <span className="h-[1px] inline-block w-full bg-zinc-200 absolute bottom-0 left-0"></span>
      </div>
    </div>
  );
}