import { Metadata } from "next";
import { ChartsGrid, HomeQuickActions } from "@/components";
import { getGeneralData } from "@/querys/getData";

export const metadata: Metadata = {
  title: "We plan",
  description: "Platform to plan and manage couple bills and the earnings of each one."
}

export default async function HomePage() {

  const initialData = await getGeneralData();

  console.log(initialData);

  return (
    <div className="flex flex-col p-12 gap-12">

      <HomeQuickActions />

      <ChartsGrid />

    </div>
  );
}