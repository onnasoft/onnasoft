import Link from "next/link";

interface PaginationProps {
  readonly language: string;
  readonly currentPage?: number;
  readonly totalPages?: number;
}

export function Pagination({
  language,
  currentPage = 1,
  totalPages = 1,
}: PaginationProps) {
  const basePath = `/${language}/blog`;

  const generatePageList = (): (number | "ellipsis")[] => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "ellipsis", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "ellipsis",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        "ellipsis",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "ellipsis",
        totalPages
      );
    }

    return pages;
  };

  return (
    <div className="mt-12 flex justify-center">
      <nav className="inline-flex rounded-md shadow overflow-hidden">
        <Link
          href={`${basePath}?page=${Math.max(currentPage - 1, 1)}`}
          className="py-2 px-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
          aria-disabled={currentPage === 1}
        >
          ←
        </Link>

        {generatePageList().map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${page}-${index}`}
              className="py-2 px-3 bg-white border-t border-b border-gray-300 text-gray-500"
            >
              …
            </span>
          ) : (
            <Link
              key={page}
              href={`${basePath}?page=${page}`}
              className={`py-2 px-4 border-t border-b border-gray-300 ${
                page === currentPage
                  ? "bg-gray-100 text-primary font-semibold"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {page}
            </Link>
          )
        )}

        <Link
          href={`${basePath}?page=${Math.min(currentPage + 1, totalPages)}`}
          className="py-2 px-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
          aria-disabled={currentPage === totalPages}
        >
          →
        </Link>
      </nav>
    </div>
  );
}
