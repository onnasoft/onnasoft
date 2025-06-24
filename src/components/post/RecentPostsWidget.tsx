"use server";

import { getImageUrl } from "@/lib/image";
import { getPosts } from "@/services/posts";
import { Post } from "@/types/models";
import Image from "next/image";
import Link from "next/link";

const translations = {
  en: {
    title: "Recent Posts",
  },
  es: {
    title: "Publicaciones Recientes",
  },
  fr: {
    title: "Articles Récents",
  },
  ja: {
    title: "最近の投稿",
  },
  zh: {
    title: "最新文章",
  },
};

interface RecentPostsWidgetProps {
  readonly language: string;
  readonly article: Post;
}

export default async function RecentPostsWidget({
  language,
  article,
}: RecentPostsWidgetProps) {
  const whereCondition: Record<string, unknown> = {};
  if (article?.id) {
    whereCondition.id = {
      op: "not",
      value: article.id,
    };
  }

  const { docs: articles } = await getPosts({
    where: whereCondition,
    locale: language,
    relations: ["cover_thumbnail", "category"],
    limit: 3,
  });

  const translation = articles[0]?.translations?.[0];

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">{t.title}</h3>
      <div className="space-y-4">
        {articles.map((article) => (
          <article key={article.slug} className="flex space-x-3">
            <Image
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded"
              src={getImageUrl(article.cover_thumbnail?.filename)}
              alt={translation?.translated_title ?? ""}
            />
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                <Link href={`/${language}/${article.slug}`}>
                  {translation?.translated_title}
                </Link>
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(article.published_date ?? "").toLocaleDateString(
                  language,
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
