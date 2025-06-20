"use server";

import { PostTranslation } from "@/types/models";
import RecentArticles from "./RecentArticles";
import SearchArticles from "./SearchArticles";
import { getPostTranslations } from "@/services/post-translations";
import { getCategories } from "@/services/categories";
import { SelectCategory } from "./SelectCategory";

interface BlogContentProps {
  readonly language: string;
  readonly articles: PostTranslation[];
  readonly currentPage?: number;
  readonly totalPages?: number;
}

export default async function BlogContent({
  language,
  articles,
  currentPage = 1,
  totalPages = 1,
}: BlogContentProps) {
  const { docs } = await getPostTranslations({
    select: { translatedTitle: true, slug: true },
    where: { locale: language },
    depth: 0,
    limit: 0,
    page: 1,
  });
  const categories = await getCategories({
    select: { slug: true, name: true, postCount: true },
    depth: 0,
    limit: 20,
    page: 1,
  });

  return (
    <div className="md:w-3/4 mt-8 md:mt-0">
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <div className="relative">
          <SearchArticles language={language} documents={docs} />

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

      <SelectCategory language={language} categories={categories.docs} />

      <RecentArticles
        language={language}
        articles={articles}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
