import React from "react";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

interface PaginationProps {
  readonly currentPage?: number;
  readonly totalPages?: number;
  readonly onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: PaginationProps) {
  const handlePageClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="mt-12 flex justify-center">
      <nav className="inline-flex items-center space-x-2">
        <button
          onClick={() => handlePageClick(1)}
          className="p-2 border border-gray-300 rounded-md bg-white hover:bg-primary/10 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <AiFillStepBackward className="h-5 w-5" />
        </button>

        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className="p-2 border border-gray-300 rounded-md bg-white hover:bg-primary/10 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <BsFillCaretLeftFill className="h-5 w-5" />
        </button>

        <span className="px-4 py-2 font-semibold border border-gray-300 rounded-md bg-primary/10">
          {currentPage}
        </span>

        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className="p-2 border border-gray-300 rounded-md hover:bg-primary/10 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <BsFillCaretRightFill className="h-5 w-5" />
        </button>

        <button
          onClick={() => handlePageClick(totalPages)}
          className="p-2 border border-gray-300 rounded-md bg-white hover:bg-primary/10 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <AiFillStepForward className="h-5 w-5" />
        </button>
      </nav>
    </div>
  );
}
