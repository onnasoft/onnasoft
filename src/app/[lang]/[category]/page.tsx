"use server";

import CategoryPage from "@/screens/category";
import FallbackPage from "@/screens/fallback";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { Suspense } from "react";
import type { Metadata } from "next";

export interface PageProps {
  readonly params: Promise<{
    lang: string;
    category: string;
    post: string;
  }>;
}

const metadataByLang = {
  en: (category: string) => ({
    title: `Onnasoft Blog | ${category} Articles`,
    description: `Read Onnasoft blog posts about ${category}, web development, DevOps, backend, AI and digital solutions.`,
  }),
  es: (category: string) => ({
    title: `Blog de Onnasoft | Artículos de ${category}`,
    description: `Lee artículos del blog de Onnasoft sobre ${category}, desarrollo web, DevOps, backend, IA y soluciones digitales.`,
  }),
  ja: (category: string) => ({
    title: `Onnasoftブログ | ${category} 記事`,
    description: `Onnasoftブログで、${category}、ウェブ開発、DevOps、バックエンド、AI、デジタルソリューションに関する記事をご覧ください。`,
  }),
  fr: (category: string) => ({
    title: `Blog Onnasoft | Articles sur ${category}`,
    description: `Découvrez des articles du blog Onnasoft sur ${category}, le développement web, DevOps, backend, IA et solutions numériques.`,
  }),
  zh: (category: string) => ({
    title: `Onnasoft 博客 | ${category} 相关文章`,
    description: `在 Onnasoft 博客中阅读关于 ${category}、网页开发、DevOps、后端、人工智能和数字解决方案的文章。`,
  }),
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const args = await params;
  const lang = args.lang || "en";
  const category = args.category || "";

  let language = lang.toLowerCase();
  if (!suportedLanguages.includes(lang)) {
    language = "en";
  }

  const t =
    metadataByLang[language as keyof typeof metadataByLang]?.(category) ||
    metadataByLang.en(category);

  return {
    title: t.title,
    description: t.description,
  };
}

export default async function Page({ params }: PageProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const args = await params;
  const lang = args.lang || acceptLanguage || "en";
  const pathname = h.get("x-pathname") || "";

  let language = lang.toLowerCase();
  if (!suportedLanguages.includes(lang)) {
    language = "en";
  }

  const category = args.category || "";
  const currentPage = parseInt(h.get("x-page") || "1", 10);

  return (
    <Suspense
      fallback={<FallbackPage language={language} pathname={pathname} />}
    >
      <CategoryPage
        language={language}
        pathname={pathname}
        category={category}
        currentPage={currentPage}
      />
    </Suspense>
  );
}
