"use server";

import FallbackPage from "@/screens/fallback";
import PostPage from "@/screens/post";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { Suspense } from "react";

export interface PageProps {
  readonly params: Promise<{
    lang: string;
    category: string;
    post: string;
  }>;
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
