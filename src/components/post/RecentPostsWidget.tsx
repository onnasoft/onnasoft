"use server";

import { getPostTranslations } from "@/services/post-translations";
import { PostTranslation } from "@/types/models";
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
  readonly article: PostTranslation;
}

export default async function RecentPostsWidget({
  language,
  article,
}: RecentPostsWidgetProps) {
  const posts = await getPostTranslations({
    locale: language,
    limit: 3,
    post: {
      op: "not_equals",
      value: article.post.id,
    },
  });

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">{t.title}</h3>
      <div className="space-y-4">
        {posts.map((article) => (
          <article key={article.slug} className="flex space-x-3">
            <Image
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded"
              src={article.post.coverThumbnail?.url || ""}
              alt={article.translatedTitle}
            />
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                <Link href={`/${language}/blog/${article.slug}`}>
                  {article.translatedTitle}
                </Link>
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(article.post.publishedDate).toLocaleDateString(
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
