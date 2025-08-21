import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { Suspense } from "react";
import FallbackPage from "@/screens/fallback";
import SearchPage from "@/screens/search";

export interface PageProps {
  readonly params: Promise<{
    lang: string;
    post: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const h = await headers();
  const args = await params;
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = args.lang || acceptLanguage || "en";
  const query = h.get("x-query") || "";

  const language = suportedLanguages.includes(lang) ? lang : "en";

  const metadataByLang: Record<
    string,
    { title: string; description: string }
  > = {
    en: {
      title: `Search results for "${query}" | Onnasoft Blog`,
      description: `Explore search results for "${query}" in Onnasoft's blog.`,
    },
    es: {
      title: `Resultados de búsqueda para "${query}" | Blog de Onnasoft`,
      description: `Explora los resultados de búsqueda para "${query}" en el blog de Onnasoft.`,
    },
    fr: {
      title: `Résultats de recherche pour "${query}" | Blog Onnasoft`,
      description: `Découvrez les résultats de recherche pour "${query}" dans le blog d'Onnasoft.`,
    },
    ja: {
      title: `"${query}" の検索結果 | オンナソフトブログ`,
      description: `Onnasoftブログで "${query}" の検索結果を確認しましょう。`,
    },
    zh: {
      title: `搜索结果 "${query}" | Onnasoft 博客`,
      description: `在 Onnasoft 博客中查看 "${query}" 的搜索结果。`,
    },
  };

  return metadataByLang[language] || metadataByLang.en;
}

export default async function Page({ params }: PageProps) {
  const h = await headers();
  const args = await params;
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = args.lang || acceptLanguage || "en";
  const pathname = h.get("x-pathname") || "";
  const query = h.get("x-query") || "";

  let language = lang.toLowerCase();
  if (!suportedLanguages.includes(lang)) {
    language = "en";
  }
  const currentPage = parseInt(h.get("x-page") || "1", 10);

  return (
    <Suspense
      fallback={<FallbackPage language={language} pathname={pathname} />}
    >
      <SearchPage
        language={language}
        pathname={pathname}
        currentPage={currentPage}
        query={query}
      />
    </Suspense>
  );
}
