import { logoutUserAction } from "@/actions/user-actions";
import { Button } from "@/components/ui/button";
import React from "react";

export default function LogoutForm() {
  return (
    <form action={logoutUserAction} id="logout" className="w-full">
      <Button variant={"outline"} size={"sm"} className="w-full text-red-500 border-red-500 dark:border-red-500" form="logout">
        Log Out
      </Button>
    </form>
  );
}
