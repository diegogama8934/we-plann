import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata:Metadata = {
  title : "We - plan",
  description: "Platform to plan and manage couple bills and the earnings of each one."
}

export default function RedirectPage(){
  

  redirect("/home");
}