import { deleteUserAction } from "@/actions/user-actions";
import { Button } from "@/components/ui/button";
import { IconTrash } from "@tabler/icons-react";
import React from "react";
import { toast } from "react-toastify";

export default function DeleteUserForm({ id }: { id: string }) {
  async function handleDelete() {
    const response = await deleteUserAction(id);
    if (response.success) return toast.error(response.message);
    return toast.success(response.message);
  }
  return (
    <form id={id} method="POST" onSubmit={handleDelete}>
      <Button variant={"destructive"} form={id} type="submit" size={"sm"}>
        <IconTrash />
      </Button>
    </form>
  );
}
