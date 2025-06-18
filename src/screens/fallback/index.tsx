"use server";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

interface HomeProps {
  readonly language: string;
  readonly pathname: string;
}

export default async function FallbackPage({ language, pathname }: HomeProps) {
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
