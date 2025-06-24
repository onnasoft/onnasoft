"use client";

import { useEditor } from "@tiptap/react";
import TiptapEditor from "../TiptapEditor";
import StarterKit from "@tiptap/starter-kit";
import Emoji from "@tiptap/extension-emoji";

const translations = {
  en: {
    title: "Comments",
    leaveComment: "Leave a Comment",
    comment: "Comment",
    placeholder: "Share your thoughts...",
    post: "Post Comment",
    reply: "Reply",
  },
  es: {
    title: "Comentarios",
    leaveComment: "Deja un comentario",
    comment: "Comentario",
    placeholder: "Comparte tus ideas...",
    post: "Publicar comentario",
    reply: "Responder",
  },
  fr: {
    title: "Commentaires",
    leaveComment: "Laisser un commentaire",
    comment: "Commentaire",
    placeholder: "Partagez vos idées...",
    post: "Publier le commentaire",
    reply: "Répondre",
  },
  ja: {
    title: "コメント",
    leaveComment: "コメントを残す",
    comment: "コメント",
    placeholder: "あなたの考えを共有...",
    post: "コメントを投稿",
    reply: "返信",
  },
  zh: {
    title: "评论",
    leaveComment: "留下评论",
    comment: "评论",
    placeholder: "分享你的想法...",
    post: "发布评论",
    reply: "回复",
  },
};

interface CommentFormProps {
  readonly language?: string;
}

export default function CommentForm({ language }: CommentFormProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2] },
      }),
      Emoji.configure({ enableEmoticons: true }),
    ],
    content: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(editor?.getJSON());
  };

  return (
    <>
      <h4 className="text-lg font-semibold text-gray-900 mb-4">
        {t.leaveComment}
      </h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.comment}
          </label>
          <TiptapEditor editor={editor} />
        </div>
        <button
          type="submit"
          className="bg-primary/80 text-white px-6 py-2 rounded-md hover:bg-primary transition-colors"
        >
          {t.post}
        </button>
      </form>
    </>
  );
}
