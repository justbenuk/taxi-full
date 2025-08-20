import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconEye } from "@tabler/icons-react";
import { Row } from "@tanstack/react-table";
import DeleteUserForm from "@/forms/delete-user-form";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  image?: {
    url: string;
  }[];
};

type TableActionsProps = {
  row: Row<User>;
};

export default function TableActions({ row }: TableActionsProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Button asChild variant={"secondary"} size={"sm"}>
        <Link href={`/dashboard/users/${row.original.id}`}>
          <IconEye />
        </Link>
      </Button>
      {row.original.role !== "admin" && <DeleteUserForm id={row.original.id as string} />}
    </div>
  );
}
