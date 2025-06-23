import { updatePost } from "@/services/posts";
import { Post } from "@/types/models";

interface LikeProps {
  readonly article: Post;
}

const HIDE_LIKE_BUTTONS = process.env.NEXT_PUBLIC_HIDE_LIKE_BUTTONS === "true";

export default function Like({ article }: LikeProps) {
  if (!article || typeof article.likes !== "number") {
    return null;
  }

  const onClickHandler = async () => {
    "use server";

    if (!article?.id) {
      return;
    }

    await updatePost(article.id, {
      likes: article.likes + 1,
    });
  };

  if (HIDE_LIKE_BUTTONS) {
    return null;
  }

  return (
    <button className="flex items-center" onClick={onClickHandler}>
      <i className="fas fa-heart mr-2"></i> {article.likes} likes
    </button>
  );
}
