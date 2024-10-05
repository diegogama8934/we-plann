import { Metadata } from "next"
import { LoginForm } from "@/components";

export const metadata : Metadata = {
  title : "WePlan - Login",
  description: "Platform to plan and manage couple bills and the earnings of each one."
}


export default function LoginPage(){

  return(
    <div className="h-screen flex flex-col gap-12 justify-center items-center">
      <h1 className="text-4xl font-bold">We Plan</h1>
      <LoginForm />
    </div>
  );
}