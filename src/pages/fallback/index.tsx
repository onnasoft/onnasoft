"use server";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";

interface HomeProps {
  readonly params: Promise<{
    lang: string;
  }>;
}

const translations = {
  en: {
    loading: "Loading content...",
  },
  es: {
    loading: "Cargando contenido...",
  },
  fr: {
    loading: "Chargement du contenu...",
  },
  ja: {
    loading: "コンテンツを読み込んでいます...",
  },
  zh: {
    loading: "正在加载内容...",
  },
};

export default async function FallbackPage({ params }: HomeProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";
  const pathname = h.get("x-pathname") || "";

  let language = lang.toLowerCase();
  if (!Object.keys(suportedLanguages).includes(lang)) {
    language = "en";
  }

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} pathname={pathname} />
      <main>
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-opacity-50 mb-6" />
          <p className="text-lg font-medium">{t.loading}</p>
        </div>
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
