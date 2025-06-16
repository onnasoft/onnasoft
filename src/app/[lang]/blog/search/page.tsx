"use server";

import BlogLayout from "@/components/blog/BlogLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getPostTranslations } from "@/services/post-translations";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface SearchPageProps {
  readonly params: Promise<{
    lang: string;
    q: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
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

  if (!query) {
    redirect(`/blog/${language}`);
  }

  const articles = await getPostTranslations({
    where: {
      translatedTitle: {
        op: "like",
        value: query,
      },
      locale: language,
    },
  });

  console.log(
    `Found ${articles.length} articles for query "${query}" in language "${language}"`
  );

  if (!language) {
    redirect(`/en`);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} />
      <main>
        <BlogLayout language={language} articles={articles} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
