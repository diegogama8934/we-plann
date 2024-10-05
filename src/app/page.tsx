import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "We plan",
  description: "Platform to plan and manage couple bills and the earnings of each one."
}

export default function Home() {
  return (
    <div className=" h-screen flex flex-col pt-32 items-center gap-12">
      <h1 className="text-4xl font-bold">We Plan</h1>
      <h2 className="text-center leading-loose text-xl">El espacio donde las parejas pueden planear, administrar y organizar sus finanzas.</h2>
    </div>
  );
}
