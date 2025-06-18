"use client";

import { PostTranslation } from "@/types/models";
import { redirect } from "next/navigation";
import { useMemo, useState } from "react";
import TrieSearch from "trie-search";

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
  readonly documents: PostTranslation[];
}

export default function SearchWidget({
  language,
  documents,
}: SearchWidgetProps) {
  const t = transitions[language as keyof typeof transitions] || transitions.en;

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<PostTranslation[]>([]);
  const trie = useMemo(
    () => new TrieSearch<PostTranslation>("translatedTitle"),
    []
  );

  trie.addAll(documents);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value ?? "");
    console.log(`Searching for: ${value}`);
    if (trie && value.length > 0) {
      const matches = trie.search(value);
      setResults(matches);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">{t.title}</h3>
      <form action={`/${language}/blog/search`} method="get" className="flex">
        <div className="relative">
          <input
            name="q"
            type="text"
            autoComplete="off"
            value={searchTerm}
            onChange={handleChange}
            placeholder={t.placeholder}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400" />
        </div>
      </form>
      {results.length > 0 && (
        <ul className="border rounded-lg absolute bg-white">
          {results.slice(0, 5).map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => {
                  redirect(`/${language}/blog/${item.slug}`);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.translatedTitle}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
