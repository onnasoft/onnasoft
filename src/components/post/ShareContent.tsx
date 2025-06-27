"use server";

import { view } from "@/services/posts";
import { Post } from "@/types/models";
import Like from "./Like";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ShareButton from "./ShareButton";

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

interface ShareContentProps {
  readonly language: string;
  readonly article: Post;
}

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export default async function ShareContent({
  language,
  article,
}: ShareContentProps) {
  if (!article) {
    return null;
  }
  await view(article?.id);

  const url = `${BASE_URL}/${language}/${article.slug}`;

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
            <ShareButton url={url} />
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <i className="fas fa-eye mr-2"></i> {article.views + 1} views
          </span>
          <GoogleOAuthProvider clientId={googleClientId}>
            <Like article={article} />
          </GoogleOAuthProvider>
        </div>
      </div>
    </footer>
  );
}
