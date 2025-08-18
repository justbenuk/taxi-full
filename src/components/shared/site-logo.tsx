import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SiteLogoProps = {
  className?: string;
};

export default function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Link href={"/"} className="flex flex-row items-center gap-2">
      <Image src={"/assets/taxi.svg"} alt="taxi logo" height={40} width={40} />
      <h1 className={cn("text-xl font-semibold", className)}>
        <span className="dark:text-yellow-300">Taxi</span> App
      </h1>
    </Link>
  );
}
