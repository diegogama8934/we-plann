import { Metadata } from "next";
import { ChartsGrid } from "@/components";

export const metadata: Metadata = {
  title: "We plan",
  description: "Platform to plan and manage couple bills and the earnings of each one."
}

export default function HomePage() {


  return (
    <div className="flex flex-col p-12 gap-12">

      <ChartsGrid />
 
    </div>
  );
}