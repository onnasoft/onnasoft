import RecentArticles from "./RecentArticles";

interface BlogContentProps {
  readonly language: string;
}

export default function BlogContent({ language }: BlogContentProps) {
  return (
    <div className="md:w-3/4 mt-8 md:mt-0">
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="search-input w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 absolute left-3 top-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <button
        id="show-categories"
        className="md:hidden w-full mb-6 flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
      >
        <span className="font-medium">Show Categories</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <RecentArticles language={language} />
    </div>
  );
}
