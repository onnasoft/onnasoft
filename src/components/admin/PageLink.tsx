import Link from "next/link";

interface PaginationProps {
  page: number;
  onPageChange: (page: number) => void;
  basePath?: string;
  isActive?: boolean;
}

const PageLink = ({
  page,
  onPageChange,
  basePath,
  isActive,
}: PaginationProps) => {
  if (basePath && basePath !== "#") {
    return (
      <Link
        href={`${basePath}?page=${page}`}
        onClick={(e) => {
          e.preventDefault();
          onPageChange(page);
        }}
        className={`py-2 px-4 border-t border-b border-gray-300 ${
          isActive
            ? "bg-gray-100 text-primary font-semibold"
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        {page}
      </Link>
    );
  } else {
    return (
      <button
        onClick={() => onPageChange(page)}
        className={`py-2 px-4 border-t border-b border-gray-300 ${
          isActive
            ? "bg-gray-100 text-primary font-semibold"
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        {page}
      </button>
    );
  }
};

export default PageLink;
