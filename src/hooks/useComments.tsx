import { useMemo } from "react";
import { useAuthStore } from "./useAuthStore";
import { Content } from "@tiptap/react";

export function useComments() {
  const { token } = useAuthStore();

  const crud = useMemo(
    () => ({
      post: async (comment: Content, post_id: string) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ comment, post_id }),
        });

        if (!res.ok) {
          throw new Error("Failed to post comment");
        }

        return res.json();
      },
    }),
    [token]
  );

  return crud;
}
