import Image from "next/image";
import Link from "next/link";
import { landingPages } from "@/constants";
import { ActiveLandingLink } from "@/components";

export function LandingNavbar() {


  return (
    <nav className="flex items-center justify-between w-full px-12 py-4 bg-zinc-100">

      <Link href="/" className="flex gap-4 items-center">
        <Image
          src="https://icon-library.com/images/financial-icon-png/financial-icon-png-18.jpg"
          alt="Icon"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-bold text-zinc-800">We plan</h1>
      </Link>

      <div className="flex gap-4">
        {
          landingPages.map(page => <ActiveLandingLink key={page.href} {...page} />)
        }
      </div>

    </nav>
  );
}