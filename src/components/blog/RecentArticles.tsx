"use server";

import RecentCard from "./RecentCard";
import { Post } from "@/types/models";
import { Pagination } from "./Pagination";

interface RecentArticlesProps {
  readonly language: string;
  readonly articles: Post[];
  readonly currentPage?: number;
  readonly totalPages?: number;
}

export default async function RecentArticles({
  language,
  articles = [],
  currentPage = 1,
  totalPages = 1,
}: RecentArticlesProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
      <div className="gap-8 animate-fade-in-down">
        {articles.map((article) => (
          <RecentCard key={article.title} article={article} />
        ))}
      </div>
      <Pagination
        language={language}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
