import React from "react";
import SiteLogo from "../shared/site-logo";
import SiteNav from "../navigations/site-navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between px-6 py-4 border-b border-gray-200">
      <SiteLogo />
      <div className="flex-1">
        <SiteNav />
      </div>
      <div>
        <Link className="bg-yellow-300 px-6 py-2 rounded-xl" href={"/"}>
          Book Now
        </Link>
      </div>
    </header>
  );
}
