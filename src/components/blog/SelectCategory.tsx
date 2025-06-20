"use client";

import { Category } from "@/types/models";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SelectCategoryProps {
  readonly language: string;
  readonly categories: Category[];
}

export function SelectCategory({ categories, language }: SelectCategoryProps) {
  const [selectCategory, setSelectCategory] = useState<string>("");
  const router = useRouter();

  if (!categories || categories.length === 0) {
    return null;
  }

  const onCategoryChange = (categorySlug: string) => {
    const url = `/${language}/${categorySlug}`;
    router.push(url);
    setSelectCategory(categorySlug);
  };

  return (
    <div className="mb-6 block md:hidden">
      <label
        htmlFor="category-select"
        className="block text-sm font-medium mb-2"
      >
        Select Category
      </label>
      <select
        id="category-select"
        value={selectCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="bg-white border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary w-full pr-8"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
