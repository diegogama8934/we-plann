import { Metadata } from "next";
import { SignInForm } from "@/components";

export const metadata:Metadata = {
  title:"WePlan -  Registro de cuenta"
}

export default function SignInPage(){



  return(
    <div className="h-screen flex flex-col gap-12 justify-center items-center">
      <h1 className="text-4xl font-bold">We Plan</h1>
      <SignInForm/>
    </div>
  );
}