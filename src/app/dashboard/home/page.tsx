import { Metadata } from "next";
import { ChartsGrid } from "@/components";
import { Button } from "@/ui";
import { AiOutlinePlus } from "react-icons/ai";

export const metadata: Metadata = {
  title: "We plan",
  description: "Platform to plan and manage couple bills and the earnings of each one."
}

export default function HomePage() {


  return (
    <div className="flex flex-col p-12 gap-12">

      <div className="flex justify-between items-center">
        
        <h2 className="font-bold">Balance de gastos</h2>
        
        <Button 
          useAsLink 
          className="w-fit"
          href="/dashboard/add"
          variant="primary"
          endIcon={<AiOutlinePlus size={24}/>}
        >
          Agregar gasto
        </Button>
      
      </div>
      
      <ChartsGrid />
    </div>
  );
}