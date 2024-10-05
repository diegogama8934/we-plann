import { Metadata } from "next"

export const metadata:Metadata = {
  title : "We plan",
  description: "Platform to plan and manage couple bills and the earnings of each one."
}

export default function HomePage(){


  return(
    <div className="flex flex-col">
      <header className="flex bg-gradient-to-r from-blue-700 to-blue-900 py-6">
        <span className={`text-xl font-black`}>We plan</span>
      </header>
    </div>
  );
}