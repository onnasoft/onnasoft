"use server";

import FallbackPage from "@/screens/fallback";
import PostPage from "@/screens/post";
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
    title: (post: string) => `${post} | Onnasoft Blog`,
    description: (post: string) =>
      `Read the Onnasoft blog post "${post}" for insights on web development, backend, DevOps, AI, and digital solutions.`,
  },
  es: {
    title: (post: string) => `${post} | Blog de Onnasoft`,
    description: (post: string) =>
      `Lee el artículo "${post}" del blog de Onnasoft sobre desarrollo web, backend, DevOps, IA y soluciones digitales.`,
  },
  ja: {
    title: (post: string) => `${post} | Onnasoftブログ`,
    description: (post: string) =>
      `Onnasoftブログの記事「${post}」で、ウェブ開発、バックエンド、DevOps、AI、デジタルソリューションについて学びましょう。`,
  },
  fr: {
    title: (post: string) => `${post} | Blog Onnasoft`,
    description: (post: string) =>
      `Lisez l'article "${post}" du blog Onnasoft sur le développement web, le backend, DevOps, l'IA et les solutions numériques.`,
  },
  zh: {
    title: (post: string) => `${post} | Onnasoft 博客`,
    description: (post: string) =>
      `阅读 Onnasoft 博客文章 "${post}"，了解网页开发、后端、DevOps、人工智能和数字解决方案的见解。`,
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const args = await params;
  const lang = args.lang || "en";
  const post = args.post || "Post";

  let language = lang.toLowerCase();
  if (!suportedLanguages.includes(lang)) {
    language = "en";
  }

  const t = metadataByLang[language as keyof typeof metadataByLang] || metadataByLang.en;

  return {
    title: t.title(post),
    description: t.description(post.replaceAll("-", " ")),
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
  const post = args.post || "";

  return (
    <Suspense
      fallback={<FallbackPage language={language} pathname={pathname} />}
    >
      <PostPage
        language={language}
        pathname={pathname}
        post={post}
        category={category}
      />
    </Suspense>
  );
}
