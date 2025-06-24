"use client";

import { useAuthStore } from "@/hooks/useAuthStore";
import Image from "next/image";
import CommentForm from "../forms/CommentForm";
import LoginForm from "../forms/LoginForm";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface CommentProps {
  readonly language: string;
}

const translations = {
  en: {
    title: "Comments",
    reply: "Reply",
  },
  es: {
    title: "Comentarios",
    reply: "Responder",
  },
  fr: {
    title: "Commentaires",
    reply: "Répondre",
  },
  ja: {
    title: "コメント",
    reply: "返信",
  },
  zh: {
    title: "评论",
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
const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

export default function Comments({ language }: CommentProps) {
  const { isAuthenticated } = useAuthStore();
  const t =
    translations[language as keyof typeof translations] || translations.en;

  if (HIDE_COMMENTS) {
    return null;
  }

  console.log("authenticated:", isAuthenticated);

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {t.title} ({comments.length})
        </h3>

        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          {isAuthenticated ? (
            <CommentForm language={language} />
          ) : (
            <LoginForm language={language} />
          )}
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
                    <span className="text-sm text-gray-500">
                      {comment.date}
                    </span>
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
    </GoogleOAuthProvider>
  );
}
