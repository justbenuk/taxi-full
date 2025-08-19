import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconEye } from "@tabler/icons-react";
import { Row } from "@tanstack/react-table";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  groups: {
    group: string;
  }[];
  image?: string | null;
};

type TableActionsProps = {
  row: Row<User>;
};

export default function TableActions({ row }: TableActionsProps) {
  console.log(row);
  return (
    <div className="flex flex-row items-center gap-2">
      <Button asChild variant={"secondary"}>
        <Link href={`/dashboard/users/${row.original.id}`}>
          <IconEye />
        </Link>
      </Button>
    </div>
  );
}
