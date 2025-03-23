import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CustomTable({
  type,
  columns = [],
  data = [],
  title,
  filter = false,
}) {
  return (
    <div>
      <div className="flex justify-between items-center mx-2">
        <h3 className="text-gray-800 text-[14px] font-medium mb-4">{title}</h3>
        {filter && (
          <div className="">
            {type === "newUsers" ? (
              <p className="text-gray-800 text-[14px] underline mb-4 hover:font-medium cursor-pointer">
                View all
              </p>
            ) : (
              <div className="flex items-center gap-2 mb-4">
                <Select>
                  <SelectTrigger className="w-[110px] bg-[#f8fafb]">
                    <SelectValue placeholder="Billing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">Billing</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">Weekly</SelectItem>
                      <SelectItem value="month">Monthly</SelectItem>
                      <SelectItem value="year">Yearly</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[110px] bg-[#f8fafb]">
                    <SelectValue placeholder="Plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">Plan</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">Weekly</SelectItem>
                      <SelectItem value="month">Monthly</SelectItem>
                      <SelectItem value="year">Yearly</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns?.map((col) => (
                <TableCell
                  key={col.accessor}
                  className="text-gray-800 bg-[#dfe1e7] font-semibold border py-3 px-4 text-[14px]"
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-16"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <svg
                      className="w-16 h-16 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <h3 className="text-xl font-medium text-gray-500">
                      No Data Found
                    </h3>
                    <p className="text-gray-400">
                      There are no records to display at the moment.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              data?.map((row, i) => (
                <TableRow
                  key={row.id}
                  className={`hover:bg-gray-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#f8fafb]"
                  }`}
                >
                  {columns?.map((col) => (
                    <TableCell
                      key={col.accessor}
                      className="py-3 px-4 text-[12px] border"
                    >
                      {col.customCell ? col.customCell(row) : row[col.accessor]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
