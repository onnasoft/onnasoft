import { useMemo } from "react";
import { useAuthStore } from "./useAuthStore";
import { JSONContent } from "@tiptap/react";

interface CreateCommentParams {
  value: JSONContent;
  post_id: number;
}

export function useCommentsAPI() {
  const { token } = useAuthStore();

  const crud = useMemo(
    () => ({
      createComment: async ({ value, post_id }: CreateCommentParams) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ value, post_id }),
        });

        if (!res.ok) {
          throw new Error("Failed to post comment");
        }

        return res.json();
      },
      listComments: async (post_id: number) => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/comments?where[post_id]=${post_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch comments");
        }

        return res.json();
      }
    }),
    [token]
  );

  return crud;
}
