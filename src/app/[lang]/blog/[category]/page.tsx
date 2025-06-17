"use server";

import BlogLayout from "@/components/blog/BlogLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getPostTranslations } from "@/services/post-translations";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface BlogProps {
  readonly params: Promise<{
    lang: string;
    category: string;
  }>;
  readonly searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function Blog({ params, searchParams }: BlogProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const { category, lang = acceptLanguage || "en" } = await params;
  const language = suportedLanguages.includes(lang) ? lang : "en";
  const currentPage = parseInt(
    ((await searchParams).page as string | undefined) || "1",
    10
  );

  if (!language) {
    redirect(`/en`);
  }

  const { docs: articles } = await getPostTranslations({
    where: {
      category: category,
      locale: language,
    },
    depth: 3,
    page: currentPage,
  });

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
