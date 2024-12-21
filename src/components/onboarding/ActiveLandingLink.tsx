"use client";
import { PageLink } from "@/interfaces";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function ActiveLandingLink({ href, name }: PageLink) {

  const pathname = usePathname();

  return (
    <Link
      className={
        `py-2 px-4 font-medium transition-all rounded hover:bg-zinc-200 hover:scale-105 
        ${pathname.includes(href)
          ? "bg-sky-700 text-white"
          : "text-zinc-600"
        }
        `
      }
      href={href}
    >
      {name}
    </Link>
  );

}