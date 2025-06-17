"use client";

import { useState, useEffect } from "react";
import TrieSearch from "trie-search";
import { getPostTranslations } from "@/services/post-translations";
import { PostTranslation } from "@/types/models";

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
  const [trie, setTrie] = useState<TrieSearch<PostTranslation> | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const trieSearch = new TrieSearch<PostTranslation>("translatedTitle");
        trieSearch.addAll(documents);
        setTrie(trieSearch);
      } catch (err) {
        console.error("Search failed", err);
      }
    }
    fetchData();
  }, [language]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
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
        <ul className="border rounded-lg">
          {results.slice(0, 5).map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.translatedTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
