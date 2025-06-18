"use server";

import BlogLayout from "@/components/blog/BlogLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getPostTranslations } from "@/services/post-translations";

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
  } = await getPostTranslations({
    where: { locale: language },
    depth: 3,
    page: currentPage,
  });

  return (
    <div className="min-h-screen bg-white fade-in-down">
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
