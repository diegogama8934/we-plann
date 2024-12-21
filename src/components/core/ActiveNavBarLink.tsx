"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveNavBarLinkProps } from "@/interfaces";


export function ActiveNavBarLink({name, href}:ActiveNavBarLinkProps){
  const pathname = usePathname();

  return(
    <Link className={`p-6 transition-all text-zinc-400 font-semibold hover:bg-zinc-200 ${pathname.includes(href) && "!text-zinc-900"}`} href={href}>{name}</Link>
  );
}