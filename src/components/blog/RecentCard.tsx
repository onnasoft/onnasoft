"use server";
import { getImageUrl } from "@/lib/image";
import { Post } from "@/types/models";
import Image from "next/image";
import Link from "next/link";

const mediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL || "https://onnasoft.us";

type BlogCardProps = {
  readonly article: Post;
};

export default async function RecentCard({ article }: BlogCardProps) {
  const translation = article.translations?.[0];
  if (!translation) return null;

  const content =
    translation.translated_content
      ?.split("\n")
      .find((line) => !line.startsWith("#") && line.trim() !== "")
      ?.substring(0, 100) || "";

  const postUrl = [
    translation.locale || "en",
    article.category?.slug,
    article.slug,
  ].join("/");

  return (
    <div className="blog-card bg-white shadow-sm flex flex-col md:flex-row gap-4 p-4">
      <Link href={`/${postUrl}`} className="shrink-0" prefetch={false}>
        <Image
          priority
          src={getImageUrl(article.cover_image?.filename)}
          alt="Securing Your API Endpoints"
          className="w-full md:w-[200px] h-48 md:h-auto object-cover rounded-lg cursor-pointer"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Link>
      <div className="rounded-lg flex-1">
        <div className="flex items-center mb-2">
          <span className="bg-primary-light text-white text-xs px-2 py-1 rounded-full">
            {article.category?.name}
          </span>
          <span className="text-gray-500 text-sm ml-auto">
            {new Date(article.created_at).toLocaleDateString(
              translation.locale,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </span>
        </div>
        <h3 className="font-bold mb-2">
          <Link href={`/${postUrl}`}>{translation.translated_title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{content}...</p>
        <div className="flex items-center">
          <Image
            src={getImageUrl(article.author?.photo?.filename)}
            alt="Author Avatar"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full mr-2 hidden md:block"
          />
          <span className="text-gray-700 text-sm">
            {article.author?.name || "Unknown Author"}
          </span>
          <a
            href={`/${postUrl}`}
            className="ml-auto text-primary hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
