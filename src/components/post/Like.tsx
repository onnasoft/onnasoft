import { updatePost } from "@/services/posts";
import { PostTranslation } from "@/types/models";

interface LikeProps {
  readonly article: PostTranslation;
}

const HIDE_LIKE_BUTTONS = process.env.NEXT_PUBLIC_HIDE_LIKE_BUTTONS === "true";

export default function Like({ article }: LikeProps) {
  if (!article.post || typeof article.post.likes !== "number") {
    return null;
  }

  const onClickHandler = async () => {
    "use server";

    if (!article.post?.id) {
      return;
    }

    await updatePost(article.post.id, {
      likes: article.post.likes + 1,
    });
  };

  if (HIDE_LIKE_BUTTONS) {
    return null;
  }

  return (
    <button className="flex items-center" onClick={onClickHandler}>
      <i className="fas fa-heart mr-2"></i> {article.post.likes} likes
    </button>
  );
}
