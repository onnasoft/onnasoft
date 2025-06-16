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
  }>;
}

export default async function Blog({ params }: BlogProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";
  const language = suportedLanguages.includes(lang) ? lang : "en";

  if (!language) {
    redirect(`/en`);
  }

  const articles = await getPostTranslations({
    where: { locale: language },
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} />
      <main>
        <BlogLayout articles={articles} language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
