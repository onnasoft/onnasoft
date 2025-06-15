"use server";

import { getCategoryTranslations } from "@/services/category-translations";
import Link from "next/link";

interface BlogSidebarProps {
  readonly language: string;
}

export default async function BlogSidebar({ language }: BlogSidebarProps) {
  const categories = await getCategoryTranslations({
    locale: language,
  });
  return (
    <div
      id="sidebar"
      className="sidebar bg-white p-6 rounded-lg shadow-sm md:w-1/4 md:mr-8 md:static"
    >
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h3 className="text-xl font-bold">Categories</h3>
        <button id="close-sidebar" className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <h3 className="text-xl font-bold mb-6 hidden md:block">Categories</h3>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category.translatedName}
            className="category-item flex items-center justify-between"
          >
            <Link
              href={`/${language}/blog/${category.category.slug}`}
              className="text-gray-700 hover:text-primary"
            >
              {category.translatedName}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className=" font-bold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href="#"
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-all"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const tags = [
  "WebDev",
  "API",
  "BigData",
  "Cloud",
  "AI",
  "Python",
  "JavaScript",
  "DevOps",
];
