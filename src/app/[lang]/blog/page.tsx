"use server";

import BlogPage from "@/screens/blog";
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
  en: {
    title: "Onnasoft Blog | Insights & Digital Solutions",
    description:
      "Explore the Onnasoft blog for articles on web development, backend, DevOps, AI, and the latest digital solutions.",
  },
  es: {
    title: "Blog de Onnasoft | Ideas y Soluciones Digitales",
    description:
      "Descubre el blog de Onnasoft con artículos sobre desarrollo web, backend, DevOps, IA y las últimas soluciones digitales.",
  },
  ja: {
    title: "Onnasoftブログ | インサイトとデジタルソリューション",
    description:
      "Onnasoftブログで、ウェブ開発、バックエンド、DevOps、AI、最新のデジタルソリューションに関する記事をご覧ください。",
  },
  fr: {
    title: "Blog Onnasoft | Idées et Solutions Numériques",
    description:
      "Découvrez le blog Onnasoft avec des articles sur le développement web, le backend, DevOps, l'IA et les solutions numériques.",
  },
  zh: {
    title: "Onnasoft 博客 | 洞察与数字解决方案",
    description:
      "在 Onnasoft 博客中探索关于网页开发、后端、DevOps、人工智能和最新数字解决方案的文章。",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const args = await params;
  const lang = args.lang || "en";

  let language = lang.toLowerCase();
  if (!suportedLanguages.includes(lang)) {
    language = "en";
  }

  const t =
    metadataByLang[language as keyof typeof metadataByLang] ||
    metadataByLang.en;

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

  const currentPage = parseInt(h.get("x-page") || "1", 10);

  return (
    <Suspense
      fallback={<FallbackPage language={language} pathname={pathname} />}
    >
      <BlogPage
        language={language}
        pathname={pathname}
        currentPage={currentPage}
      />
    </Suspense>
  );
}
