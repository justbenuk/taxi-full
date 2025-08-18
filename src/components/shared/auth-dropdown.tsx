import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar } from "../ui/avatar";
import { auth } from "@/auth";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import LogoutForm from "@/forms/logout-form";

export default async function AuthDropdown() {
  const session = await auth();

  if (!session) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={session.user.image as string} alt="profile picture" height={75} width={75} />
          <AvatarFallback className="text-xs">TA</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={"/dashboard"}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutForm />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
