"use server";

import BlogLayout from "@/components/blog/BlogLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { search } from "@/services/search-article";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export interface SearchPageProps {
  readonly params: Promise<{
    lang: string;
    q: string;
  }>;
  readonly searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function SearchPage({
  params,
  searchParams,
}: SearchPageProps) {
  const query = (await searchParams).q as string | undefined;
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";
  const language = suportedLanguages.includes(lang) ? lang : "en";
  const pathname = h.get("x-pathname") || "";
  const currentPage = parseInt(
    ((await searchParams).page as string | undefined) || "1",
    10
  );

  if (!query) {
    redirect(`/blog/${language}`);
  }

  const {
    docs: articles,
    page,
    totalPages,
  } = await search({
    search: query,
    page: currentPage,
  });

  if (!language) {
    redirect(`/en`);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} pathname={pathname} />
      <main>
        <BlogLayout
          language={language}
          articles={articles}
          currentPage={page}
          totalPages={totalPages}
        />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
