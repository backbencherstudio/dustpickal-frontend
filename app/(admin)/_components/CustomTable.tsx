import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomFilter from "./CustomFilter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationData {
  currentPage?: number;
  totalPages?: number;
}

export default function CustomTable({
  type,
  columns = [],
  data = [],
  title,
  filter = false,
  onPageChange,
  paginationData = {} as PaginationData,
  pagination = true,
}) {
  const { currentPage = 1, totalPages = 1 } = paginationData || {};

  const getPageNumbers = () => {
    const pageNumbers = [];
    const showPages = 3; // Number of pages to show before and after current page

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // First page
        i === totalPages || // Last page
        (i >= currentPage - showPages && i <= currentPage + showPages) // Pages around current
      ) {
        pageNumbers.push(i);
      }
    }

    // Add ellipsis where needed
    const withEllipsis = [];
    for (let i = 0; i < pageNumbers.length; i++) {
      if (i > 0 && pageNumbers[i] - pageNumbers[i - 1] > 1) {
        withEllipsis.push("...");
      }
      withEllipsis.push(pageNumbers[i]);
    }
    return withEllipsis;
  };

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
                <CustomFilter
                  placeholder="Billing"
                  options={["Billing", "Today", "Weekly", "Monthly", "Yearly"]}
                />
                <CustomFilter
                  placeholder="Plan"
                  options={["Plan", "Today", "Weekly", "Monthly", "Yearly"]}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="overflow-hidden rounded-xl border border-[#d2d2d5]">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#d2d2d5]">
              {columns?.map((col) => (
                <TableCell
                  key={col.accessor}
                  className="text-gray-800 bg-[#dfe1e7] font-semibold py-3 px-4 text-[14px] border-r border-[#d2d2d5] last:border-r-0"
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
                  key={row.id || i}
                  className={`hover:bg-gray-100 border-b border-[#d2d2d5] last:border-b-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#f8fafb]"
                  }`}
                >
                  {columns?.map((col) => (
                    <TableCell
                      key={col.accessor}
                      className="py-2 px-4 text-[12px] border-r border-[#d2d2d5] last:border-r-0"
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

      {pagination && totalPages > 1 && (
        <div className="mt-6 w-full">
          <div className="flex justify-end">
            <Pagination className="justify-end">
              <PaginationContent className="flex flex-nowrap justify-end gap-1">
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => onPageChange(currentPage - 1)}
                    className={`whitespace-nowrap ${
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }`}
                  />
                </PaginationItem>

                {/* For mobile, show fewer page numbers */}
                <div className="flex gap-1">
                  {getPageNumbers().map((pageNum, index) =>
                    pageNum === "..." ? (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={pageNum}>
                        <PaginationLink
                          onClick={() => onPageChange(pageNum)}
                          isActive={currentPage === pageNum}
                          className={`cursor-pointer min-w-[32px] flex justify-center rounded-md px-2 py-1 text-sm font-medium transition duration-200 ease-in-out  ${
                            currentPage === pageNum
                              ? "bg-black text-white hover:bg-black hover:text-white" // Active page styles
                              : "bg-white text-black " // Non-active page styles
                          }`}
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}
                </div>
                {/* <div className="sm:block hidden text-nowrap items-center mx-1">
                  <span className="text-sm font-medium text-gray-600">
                    Page {currentPage} of {totalPages}
                  </span>
                </div> */}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => onPageChange(currentPage + 1)}
                    className={`whitespace-nowrap ${
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </div>
  );
}
