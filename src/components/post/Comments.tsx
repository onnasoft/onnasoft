"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import CommentForm from "../forms/CommentForm";
import LoginForm from "../forms/LoginForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import * as models from "@/types/models";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import { getComments } from "@/services/comments";

interface CommentProps {
  readonly language: string;
  readonly article: models.Post;
}

const translations = {
  en: { title: "Comments" },
  es: { title: "Comentarios" },
  fr: { title: "Commentaires" },
  ja: { title: "コメント" },
  zh: { title: "评论" },
};

const HIDE_COMMENTS = process.env.NEXT_PUBLIC_HIDE_COMMENTS === "true";
const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

export default function Comments({ language, article }: CommentProps) {
  const { isAuthenticated } = useAuthStore();
  const t =
    translations[language as keyof typeof translations] || translations.en;
  const [comments, setComments] = useState<models.Comment[]>([]);
  const [version, setVersion] = useState(0);

  const handleCommentSubmit = async () => {
    setVersion((prev) => prev + 1);
  };

  useEffect(() => {
    async function fetchComments() {
      try {
        const fetchedComments = await getComments({
          where: {
            post_id: {
              op: "equals",
              value: article.id,
            },
          },
          select: { value: true, user: true },
          limit: 100,
          relations: ["user", "user.photo"],
        });
        setComments(fetchedComments.docs);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    }
    fetchComments();
  }, [article.id, version]);

  if (HIDE_COMMENTS) {
    return null;
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {t.title} ({comments.length})
      </h3>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <GoogleOAuthProvider clientId={googleClientId}>
          {isAuthenticated ? (
            <CommentForm
              language={language}
              article={article}
              onSubmit={handleCommentSubmit}
            />
          ) : (
            <LoginForm language={language} />
          )}
        </GoogleOAuthProvider>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <Comment
            comment={comment}
            language={language}
            key={comment.created_at}
          />
        ))}
      </div>
    </div>
  );
}
