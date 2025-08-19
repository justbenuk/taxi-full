import { getAllUsers } from "@/actions/user-actions";
import UsersTable from "@/tables/user-table";

export default async function AllUsersPage() {
  const response = await getAllUsers();
  if (!response.success || !response.users) return <p>Users not found</p>;
  return (
    <div>
      <UsersTable users={response.users} />
    </div>
  );
}
