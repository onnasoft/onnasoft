"use server";

import SearchWidget from "./SearchWidget";
import CategoriesWidget from "./CategoriesWidget";
import RecentPostsWidget from "./RecentPostsWidget";
import NewsletterWidget from "./NewsletterWidget";
import { PostTranslation } from "@/types/models";
import { getPostTranslations } from "@/services/post-translations";

interface PostSidebarProps {
  readonly language: string;
  readonly article: PostTranslation;
}

export default async function PostSidebar({
  language,
  article,
}: PostSidebarProps) {
  const { docs } = await getPostTranslations({
    select: { translatedTitle: true, slug: true },
    where: { locale: language },
    depth: 0,
    limit: 0,
    page: 1,
  });

  return (
    <div className="lg:col-span-1 mt-8 lg:mt-0">
      <div className="sticky top-8 space-y-8">
        <SearchWidget language={language} documents={docs} />
        <CategoriesWidget language={language} />
        <RecentPostsWidget article={article} language={language} />
        <NewsletterWidget language={language} />
      </div>
    </div>
  );
}
