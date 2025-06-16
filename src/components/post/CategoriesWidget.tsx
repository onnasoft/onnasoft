"use server";

import { getCategories } from "@/services/categories";
import Link from "next/link";

export default async function CategoriesWidget() {
  const categories = await getCategories();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories
          .filter((category) => category.postCount > 0)
          .map((category) => (
            <li key={category.name}>
              <Link
                href="#"
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
