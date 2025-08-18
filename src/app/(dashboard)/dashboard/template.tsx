import { isLoggedIn } from "@/actions/user-actions";
import AppSidebarHeader from "@/components/header/app-sidebar-headser";
import AppSidebar from "@/components/navigations/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

type DashboardTemplateProps = {
  children: ReactNode;
};

export default async function DashboardTemplate({ children }: DashboardTemplateProps) {
  await isLoggedIn();
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <AppSidebarHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-6">{children}</div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
