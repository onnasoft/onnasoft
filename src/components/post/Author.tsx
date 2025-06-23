"use server";

import { getImageUrl } from "@/lib/image";
import { Post } from "@/types/models";
import Image from "next/image";
import Link from "next/link";

interface AuthorProps {
  readonly article: Post;
}

export default async function Author({ article }: AuthorProps) {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg __web-inspector-hide-shortcut__">
      <div className="flex items-start space-x-4">
        <Image
          width={64}
          height={64}
          className="h-16 w-16 rounded-full"
          src={getImageUrl(article?.author?.photo?.filename)}
          alt="Author's photo"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {article?.author?.name || "Carlos Rodriguez"}
          </h3>
          <p className="text-sm text-primary mb-2">
            {article?.author?.position || "Cloud Solutions Architect"}
          </p>
          <p className="text-sm text-gray-600">{article?.author?.bio || ""}</p>
          <div className="mt-3 flex space-x-3">
            <Link
              href={article?.author?.website || "#"}
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fas fa-globe"></i>
            </Link>
            <Link
              href={article?.author?.linkedIn || "#"}
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link
              href={article?.author?.github || "#"}
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
