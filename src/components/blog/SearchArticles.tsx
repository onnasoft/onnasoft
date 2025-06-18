"use client";

import { useMemo, useState } from "react";
import TrieSearch from "trie-search";
import { PostTranslation } from "@/types/models";
import { redirect } from "next/navigation";

interface SearchArticlesProps {
  readonly language: string;
  readonly documents: PostTranslation[];
}

export default function SearchArticles({
  language,
  documents,
}: SearchArticlesProps) {
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
    <div>
      <form
        action={`/${language}/blog/search`}
        method="get"
        className="flex mb-4"
      >
        <input
          name="q"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Search articles..."
          className="search-input w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none"
        />
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
