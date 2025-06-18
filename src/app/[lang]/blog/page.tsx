"use server";

import BlogPage from "@/screens/blog";
import FallbackPage from "@/screens/fallback";
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
