"use server";

import { updatePost } from "@/services/posts";
import { PostTranslation } from "@/types/models";
import Like from "./Like";

interface ShareContentProps {
  readonly language: string;
  readonly article: PostTranslation;
}

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export default async function ShareContent({
  language,
  article,
}: ShareContentProps) {
  await updatePost(article.post.id, {
    views: article.post.views + 1,
  });

  const url = `${BASE_URL}/${language}/blog/${article.slug}`;

  const encodedUrl = encodeURIComponent(url);
  const text = encodeURIComponent("Check out this article!");

  return (
    <footer className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Share this article:</span>
          <div className="flex space-x-2">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fab fa-facebook text-lg"></i>
            </a>
            <button
              name="copy-link-button"
              className="text-gray-400 hover:text-onnasoft-pink transition-colors"
            >
              <i className="fas fa-link text-lg"></i>
            </button>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                document.querySelector('button[name="copy-link-button"]').addEventListener('click', function() {
                  navigator.clipboard.writeText('${url}');
                  alert('Link copied to clipboard');
                });
              `,
              }}
            ></script>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <i className="fas fa-eye mr-2"></i> {article.post.views} views
          </span>
          <Like article={article} />
        </div>
      </div>
    </footer>
  );
}
