"use server";

import BlogLayout from "@/components/blog/BlogLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getCategories } from "@/services/categories";
import { getPosts } from "@/services/posts";
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

  const categories = await getCategories({
    where: {
      slug: category,
    },
    limit: 1,
  });

  if (!categories || categories.docs.length === 0) {
    redirect(`/en/${category}`);
  }

  const {
    docs: articles,
    page,
    totalPages,
  } = await getPosts({
    where: {
      category_id: categories.docs[0].id,
    },
    relations: ["author", "author.photo", "category", "cover_image"],
    locale: language,
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
