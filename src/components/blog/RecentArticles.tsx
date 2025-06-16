"use server";

import Link from "next/link";
import RecentCard from "./RecentCard";
import { getPostTranslations } from "@/services/post-translations";

interface RecentArticlesProps {
  readonly language: string;
}

export default async function RecentArticles({
  language,
}: RecentArticlesProps) {
  const articles = await getPostTranslations({
    locale: language,
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
      <div className="gap-8">
        {articles.map((article) => (
          <RecentCard key={article.translatedTitle} {...article} />
        ))}
      </div>
      <Pagination language={language} />
    </div>
  );
}

interface PaginationProps {
  readonly language: string;
}

function Pagination({ language }: PaginationProps) {
  return (
    <div className="mt-12 flex justify-center">
      <nav className="inline-flex rounded-md shadow">
        <Link
          href="#"
          className="py-2 px-4 bg-white border border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          href="#"
          className="py-2 px-4 bg-white border-t border-b border-gray-300 text-primary font-medium"
        >
          1
        </Link>
        <Link
          href="#"
          className="py-2 px-4 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          2
        </Link>
        <Link
          href="#"
          className="py-2 px-4 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          3
        </Link>
        <Link
          href="#"
          className="py-2 px-4 bg-white border border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-50"
        >
          Next
        </Link>
      </nav>
    </div>
  );
}
