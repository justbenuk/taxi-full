import { Input } from "../ui/input";
import { Table } from "@tanstack/react-table";

type TableFilterProps<TData> = {
  table: Table<TData>;
};

export default function TableFilter<TData>({ table }: TableFilterProps<TData>) {
  return (
    <div className="mb-4 w-1/4">
      <Input placeholder="Search" value={table.getState().globalFilter ?? ""} onChange={(e) => table.setGlobalFilter(e.target.value)} />
    </div>
  );
}
