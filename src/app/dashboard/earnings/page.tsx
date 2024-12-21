import { Button } from "@/ui";
import { AiOutlinePlus } from "react-icons/ai";

export default function EarningsPage() {


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
    
    </div>
  );
}