import React from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import SideAuthDropdown from "../shared/side-auth-dropdown";
import { auth } from "@/auth";

export default async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const session = await auth();
  if (!session) return null;
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              icon
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>menus</SidebarContent>
      <SidebarFooter>
        <SideAuthDropdown user={session.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
