"use server";

const transitions = {
  en: {
    title: "Search Blog",
    placeholder: "Search articles...",
  },
  es: {
    title: "Buscar Blog",
    placeholder: "Buscar artículos...",
  },
  fr: {
    title: "Rechercher dans le Blog",
    placeholder: "Rechercher des articles...",
  },
  ja: {
    title: "ブログを検索",
    placeholder: "記事を検索...",
  },
  zh: {
    title: "搜索博客",
    placeholder: "搜索文章...",
  },
};

interface SearchWidgetProps {
  readonly language: string;
}

export default async function SearchWidget({ language }: SearchWidgetProps) {
  const t = transitions[language as keyof typeof transitions] || transitions.en;
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">{t.title}</h3>
      <form
        action={`/${language}/blog/search`}
        method="get"
        className="flex"
      >
        <div className="relative">
          <input
            name="q"
            type="text"
            placeholder={t.placeholder}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400" />
        </div>
      </form>
    </div>
  );
}
