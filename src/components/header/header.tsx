import React from "react";
import SiteLogo from "../shared/site-logo";
import SiteNav from "../navigations/site-navigation";
import Link from "next/link";
import PageContainer from "../shared/page-container";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <PageContainer className="flex flex-row items-center justify-between py-4 ">
        <SiteLogo />
        <div className="lg:flex flex-row gap-4 hidden">
          <SiteNav />
        </div>
        <div>
          <Link href={"/login"} className="hidden lg:block">
            Log In
          </Link>
        </div>
      </PageContainer>
    </header>
  );
}
