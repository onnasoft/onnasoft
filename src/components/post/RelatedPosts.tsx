"use server";

import { getImageUrl } from "@/lib/image";
import { getPosts } from "@/services/posts";
import { Post } from "@/types/models";
import Image from "next/image";
import Link from "next/link";

const translations = {
  en: {
    title: "Related Articles",
  },
  es: {
    title: "Artículos Relacionados",
  },
  fr: {
    title: "Articles Connexes",
  },
  ja: {
    title: "関連記事",
  },
  zh: {
    title: "相关文章",
  },
};

interface RelatedPostsProps {
  readonly language: string;
  readonly article: Post;
}

export default async function RelatedPosts({
  language,
  article,
}: RelatedPostsProps) {
  if (!article) {
    return null;
  }

  const { docs: articles } = await getPosts({
    where: {
      id: {
        op: "not",
        value: article.id,
      },
      slug: {
        op: "like",
        value: article.category?.slug ?? "",
      },
    },
    locale: language,
    relations: ["cover_thumbnail"],
    limit: 2,
  });
  const translation = article.translations?.[0];

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-1"
          >
            <Image
              width={438}
              height={192}
              className="w-full h-48 object-cover"
              src={getImageUrl(article?.cover_thumbnail?.filename)}
              alt="DevOps Best Practices"
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-white">
                  {article?.category?.name || ""}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                <Link
                  href={`/${language}/${article.category?.slug}/${article.slug}`}
                  className="hover:text-onnasoft-pink transition-colors"
                >
                  {translation?.translated_title}
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                {translation?.translated_content
                  .replace(/^#+\s*/gm, "")
                  .slice(0, 100)}
                ...
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <span>{article?.author?.name || "John Doe"}</span>
                <span className="mx-2">•</span>
                <span>
                  {new Date(article?.published_date ?? "").toLocaleDateString(
                    language,
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
