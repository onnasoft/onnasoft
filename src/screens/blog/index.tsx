"use server";

import BlogLayout from "@/components/blog/BlogLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getPosts } from "@/services/posts";

export interface BlogPageProps {
  readonly language: string;
  readonly pathname: string;
  readonly currentPage: number;
}

export default async function BlogPage({
  language,
  pathname,
  currentPage,
}: BlogPageProps) {
  const {
    docs: articles,
    page,
    totalPages,
  } = await getPosts({
    locale: language,
    page: currentPage,
    relations: ["author", "author.photo", "category", "cover_image"],
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} pathname={pathname} />
      <main>
        <BlogLayout
          articles={articles}
          language={language}
          currentPage={page}
          totalPages={totalPages}
        />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
