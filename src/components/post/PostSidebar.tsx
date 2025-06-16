"use server";

import SearchWidget from "./SearchWidget";
import CategoriesWidget from "./CategoriesWidget";
import RecentPostsWidget from "./RecentPostsWidget";
import NewsletterWidget from "./NewsletterWidget";

export default async function PostSidebar() {
  return (
    <div className="lg:col-span-1 mt-8 lg:mt-0">
      <div className="sticky top-8 space-y-8">
        <SearchWidget />
        <CategoriesWidget />
        <RecentPostsWidget />
        <NewsletterWidget />
      </div>
    </div>
  );
}