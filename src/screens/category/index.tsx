"use server";

import BlogLayout from "@/components/blog/BlogLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getPostTranslations } from "@/services/post-translations";
import { redirect } from "next/navigation";

export interface CategoryProps {
  readonly language: string;
  readonly pathname: string;
  readonly category: string;
  readonly currentPage: number;
}

export default async function CategoryPage({
  language,
  pathname,
  category,
  currentPage,
}: CategoryProps) {
  if (!language) {
    redirect(`/en`);
  }

  const {
    docs: articles,
    page,
    totalPages,
  } = await getPostTranslations({
    where: {
      locale: language,
      slug: {
        op: "like",
        value: `${category}/%`,
      },
    },
    depth: 3,
    page: currentPage,
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
