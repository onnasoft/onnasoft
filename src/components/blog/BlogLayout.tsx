"use server";

import BlogSidebar from "./BlogSidebar";
import BlogContent from "./BlogContent";
import { PostTranslation } from "@/types/models";

interface BlogLayoutProps {
  readonly language: string;
  readonly articles: PostTranslation[];
  readonly currentPage?: number;
  readonly totalPages?: number;
}

export default async function BlogLayout({
  language,
  articles,
  currentPage = 1,
  totalPages = 1,
}: BlogLayoutProps) {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <BlogSidebar language={language} />
          <BlogContent
            language={language}
            articles={articles}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}
