import React, { useState, useMemo } from "react";
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

export default function CustomTable({
  type,
  columns = [],
  data = [],
  title,
  filter = false,
  itemsPerPage = 10,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  const pageNumbers = useMemo(() => {
    const pages = [];

    // Always show first page
    pages.push(1);

    // Add current page and surrounding pages
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (pages[pages.length - 1] !== i - 1) {
        // Add ellipsis if there's a gap
        pages.push("...");
      }
      pages.push(i);
    }

    // Add last page if we have more than 1 page
    if (totalPages > 1 && pages[pages.length - 1] !== totalPages) {
      if (pages[pages.length - 1] !== totalPages - 1) {
        // Add ellipsis if there's a gap
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
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
                  className="text-[#4A4C56] bg-[#E9E9EA] font-medium py-3 px-4 text-[14px]"
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData?.length === 0 ? (
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
              currentData?.map((row, i) => (
                <TableRow
                  key={row.id || i}
                  className={`hover:bg-gray-100 border-b border-[#D2D2D5] last:border-b-0`}
                >
                  {columns?.map((col) => (
                    <TableCell
                      key={col.accessor}
                      className={`py-3 px-4 text-sm text-[#4A4C56]`}
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

      {/* Only show pagination if there are more than itemsPerPage (10) items */}
      {data.length > itemsPerPage && (
        <div className="flex justify-end mt-2">
          <div className="">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>

                {pageNumbers.map((page, index) => (
                  <PaginationItem key={index}>
                    {page === "..." ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => handlePageChange(page)}
                        className={`cursor-pointer border ${
                          page === currentPage
                            ? "bg-black text-white hover:bg-black hover:text-white"
                            : " bg-white"
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
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
