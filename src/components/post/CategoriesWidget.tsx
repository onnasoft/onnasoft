"use server";

import { getCategories } from "@/services/categories";
import Link from "next/link";

const transitions = {
  en: {
    title: "Categories",
  },
  es: {
    title: "Categorías",
  },
  fr: {
    title: "Catégories",
  },
  ja: {
    title: "カテゴリー",
  },
  zh: {
    title: "分类",
  },
};

interface CategoryProps {
  readonly language: string;
}

export default async function CategoriesWidget({ language }: CategoryProps) {
  const { docs: categories } = await getCategories({
    limit: 20,
  });

  const t = transitions[language as keyof typeof transitions] || transitions.en;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">{t.title}</h3>
      <ul className="space-y-2">
        {categories
          .filter((category) => category.postCount > 0)
          .map((category) => (
            <li key={category.name}>
              <Link
                href={`/${language}/${category.slug}`}
                className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between"
              >
                {category.name}
                <span className="text-sm text-gray-400">
                  ({category.postCount})
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
