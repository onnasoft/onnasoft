"use server";

import BlogSidebar from "./BlogSidebar";
import BlogContent from "./BlogContent";
import { PostTranslation } from "@/types/models";

interface BlogLayoutProps {
  readonly language: string;
  readonly articles: PostTranslation[];
}

export default async function BlogLayout({
  language,
  articles,
}: BlogLayoutProps) {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <BlogSidebar language={language} />
          <BlogContent language={language} articles={articles} />
        </div>
      </div>
    </div>
  );
}
