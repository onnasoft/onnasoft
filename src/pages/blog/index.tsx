"use server";

import BlogLayout from "@/components/blog/BlogLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getPostTranslations } from "@/services/post-translations";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export interface BlogPageProps {
  readonly params: Promise<{
    lang: string;
  }>;
  readonly searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function BlogPage({
  params,
  searchParams,
}: BlogPageProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";
  const language = suportedLanguages.includes(lang) ? lang : "en";
  const pathname = h.get("x-pathname") || "";
  const currentPage = parseInt(
    ((await searchParams).page as string | undefined) || "1",
    10
  );
  if (!language) {
    redirect(`/en`);
  }

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
