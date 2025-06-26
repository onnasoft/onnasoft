"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import { getAuthToken } from "@/services/auth";
import { like } from "@/services/posts";
import { Post } from "@/types/models";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

interface LikeProps {
  readonly article: Post;
}

const HIDE_LIKE_BUTTONS = process.env.NEXT_PUBLIC_HIDE_LIKE_BUTTONS === "true";

export default function Like({ article }: LikeProps) {
  const auth = useAuthStore();
  const signIn = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      getAuthToken(access_token)
        .then((token) => {
          auth.setSession(token.user);
          auth.setToken(token.access_token);
          auth.setRefreshToken(token.refresh_token);
        })
        .catch((error) => {
          console.error("Login Error:", error);
        });
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  const [likes, setLikes] = useState(article.likes || 0);

  const onClickHandler = async () => {
    if (!article?.id) {
      return;
    }

    if (!auth.token) {
      signIn();
      return;
    }

    const post = await like(article.id, auth.token);

    setLikes(post.likes);
  };

  if (!article || typeof article.likes !== "number") {
    return null;
  }

  if (HIDE_LIKE_BUTTONS) {
    return null;
  }

  return (
    <button className="flex items-center" onClick={onClickHandler}>
      <i className="fas fa-heart mr-2"></i> {likes} likes
    </button>
  );
}
