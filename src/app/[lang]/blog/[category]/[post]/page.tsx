"use server";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/post/Breadcrumbs";
import PostContent from "@/components/post/PostContent";
import PostSidebar from "@/components/post/PostSidebar";
import { getPostTranslations } from "@/services/post-translations";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getCategories } from "@/services/categories";

interface PostProps {
  readonly params: Promise<{
    lang: string;
    category: string;
    post: string;
  }>;
}

export default async function Post({ params }: PostProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const args = await params;
  const lang = args.lang || acceptLanguage || "en";
  const language = suportedLanguages.includes(lang) ? lang : "en";

  const article = await getPostTranslations({
    slug: `${args.category}/${args.post}`,
    locale: language,
    depth: 3,
  });

  if (!article || article.length === 0) {
    redirect(`/${language}/blog`);
  }

  const category = await getCategories({
    slug: args.category,
  });

  if (!category || category.length === 0) {
    redirect(`/${language}/blog`);
  }

  if (!language) {
    redirect(`/en`);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} />
      <main>
        <Breadcrumbs
          language={language}
          category={category[0]}
          post={article[0]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <PostContent article={article[0]} language={language} />
            <PostSidebar article={article[0]} language={language} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8">
          <hr />
        </div>

        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
