import React from "react";
import SiteLogo from "../shared/site-logo";
import SiteNav from "../navigations/site-navigation";
import PageContainer from "../shared/page-container";
import ToggleDarkMode from "../shared/toggle-dark-mode";
import AuthDropdown from "../shared/auth-dropdown";

export default function Header() {
  return (
    <header className="border-b border-muted">
      <PageContainer className="flex flex-row items-center justify-between py-4 ">
        <SiteLogo />
        <div className="lg:flex flex-row gap-4 hidden">
          <SiteNav />
        </div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <AuthDropdown />
          <ToggleDarkMode />
        </div>
      </PageContainer>
    </header>
  );
}
