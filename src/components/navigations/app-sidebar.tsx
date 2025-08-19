import React from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import SideAuthDropdown from "../shared/side-auth-dropdown";
import { auth } from "@/auth";
import SiteLogo from "../shared/site-logo";
import AdminSidebarMenu from "./admin-sidebar-menu";

export default async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const session = await auth();
  if (!session) return null;
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <SiteLogo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {(session.user.groups.includes("NONE") || session.user.role === "admin") && <div>hold</div>}
        {(session.user.groups.includes("DRIVER") || session.user.role === "admin") && <div>hold</div>}
        {(session.user.groups.includes("PA") || session.user.role === "admin") && <div>hold</div>}
        {(session.user.groups.includes("STAFF") || session.user.role === "admin") && <div>hold</div>}
        {session.user.role === "admin" && <AdminSidebarMenu />}
      </SidebarContent>
      <SidebarFooter>
        <SideAuthDropdown user={session.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
