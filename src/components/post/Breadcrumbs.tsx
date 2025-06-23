"use server";

import { Category, PostTranslation } from "@/types/models";
import Link from "next/link";

type BreadcrumbsProps = {
  readonly language: string;
  readonly category: Category;
  readonly post: PostTranslation;
};

export default async function Breadcrumbs({
  language,
  category,
  post,
}: BreadcrumbsProps) {
  return (
    <div className="mt-16 bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href={`/${language}`}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary"
              >
                <i className="fas fa-home mr-2" /> Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <i className="fas fa-chevron-right text-gray-400 mx-2" />
                <Link
                  href={`/${language}/blog`}
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2"
                >
                  Blog
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <i className="fas fa-chevron-right text-gray-400 mx-2" />
                <Link
                  href={`/${language}/${category.slug}`}
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2"
                >
                  {category.name}
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <i className="fas fa-chevron-right text-gray-400 mx-2" />
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  {post.translated_title.substring(0, 50) + (post.translated_title.length > 50 ? "..." : "")}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
