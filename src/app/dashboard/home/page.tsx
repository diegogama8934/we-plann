import { Metadata } from "next"
import { Input, Button } from "@/components";

export const metadata:Metadata = {
  title : "We - plan",
  description: "Platform to plan and manage couple bills and the earnings of each one."
}

export default function HomePage(){


  return(
    <div className="flex flex-col">
      <header className="flex bg-gradient-to-r from-blue-700 to-blue-900 py-6">
        <span className={`text-xl font-black`}>We-plan</span>
      </header>

      <div className="flex flex-col gap-4 w-[500px]">
        <Input label="Nombre" placeholder="Escribe tu nombre" name="Nombre"/>
        <Button>Submit</Button>
      </div>
    </div>
  );
}