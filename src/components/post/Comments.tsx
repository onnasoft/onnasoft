"use server";

import Image from "next/image";

interface CommentProps {
  readonly language: string;
}

const translations = {
  en: {
    title: "Comments",
    leaveComment: "Leave a Comment",
    name: "Name",
    email: "Email",
    comment: "Comment",
    placeholder: "Share your thoughts...",
    post: "Post Comment",
    reply: "Reply",
  },
  es: {
    title: "Comentarios",
    leaveComment: "Deja un comentario",
    name: "Nombre",
    email: "Correo",
    comment: "Comentario",
    placeholder: "Comparte tus ideas...",
    post: "Publicar comentario",
    reply: "Responder",
  },
  fr: {
    title: "Commentaires",
    leaveComment: "Laisser un commentaire",
    name: "Nom",
    email: "Email",
    comment: "Commentaire",
    placeholder: "Partagez vos idées...",
    post: "Publier le commentaire",
    reply: "Répondre",
  },
  ja: {
    title: "コメント",
    leaveComment: "コメントを残す",
    name: "名前",
    email: "メール",
    comment: "コメント",
    placeholder: "あなたの考えを共有...",
    post: "コメントを投稿",
    reply: "返信",
  },
  zh: {
    title: "评论",
    leaveComment: "留下评论",
    name: "姓名",
    email: "电子邮件",
    comment: "评论",
    placeholder: "分享你的想法...",
    post: "发布评论",
    reply: "回复",
  },
};

const comments = [
  {
    name: "Sarah Johnson",
    date: "March 16, 2024 at 2:30 PM",
    text: "Excellent article! We recently completed our cloud migration with Onnasoft and the experience was fantastic. The team really knows their stuff and guided us through every step of the process.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Brown",
    date: "March 16, 2024 at 10:15 AM",
    text: "Great insights on multi-cloud strategies. We're currently evaluating our options and this article provides valuable perspective on the current trends. The automation section was particularly helpful.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lisa Wang",
    date: "March 15, 2024 at 4:45 PM",
    text: "The security-first approach section really resonates with our current challenges. Would love to see a follow-up article specifically focused on zero-trust implementation in cloud environments.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const HIDE_COMMENTS = process.env.NEXT_PUBLIC_HIDE_COMMENTS === "true";

export default async function Comments({ language }: CommentProps) {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  if (HIDE_COMMENTS) {
    return null;
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {t.title} ({comments.length})
      </h3>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          {t.leaveComment}
        </h4>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onnasoft-pink focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onnasoft-pink focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t.comment}
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              placeholder={t.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onnasoft-pink focus:border-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-onnasoft-pink text-white px-6 py-2 rounded-md hover:bg-onnasoft-pink-dark transition-colors"
          >
            {t.post}
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {comments.map((comment, i) => (
          <div
            key={comment.date}
            className={`pb-6 ${i < comments.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <div className="flex items-start space-x-4">
              <Image
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
                src={comment.image}
                alt={comment.name}
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h5 className="font-semibold text-gray-900">
                    {comment.name}
                  </h5>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700">{comment.text}</p>
                <button className="mt-2 text-sm text-onnasoft-pink hover:text-onnasoft-pink-dark">
                  {t.reply}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
