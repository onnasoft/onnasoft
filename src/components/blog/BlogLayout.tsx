"use server";

import BlogSidebar from "./BlogSidebar";
import BlogContent from "./BlogContent";

type BlogLayoutProps = Readonly<{
  language: string;
}>;

export default async function BlogLayout({ language }: BlogLayoutProps) {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <BlogSidebar language={language} />
          <BlogContent language={language} />
        </div>
      </div>
    </div>
  );
}
