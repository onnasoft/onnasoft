"use client";

import { getImageUrl } from "@/lib/image";
import type * as models from "@/types/models";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import { Clock, User } from "lucide-react";

const translations = {
  en: {
    anonymousUser: "Anonymous User",
    member: "Member",
    reply: "Reply",
    report: "Report",
  },
  es: {
    anonymousUser: "Usuario Anónimo",
    member: "Miembro",
    reply: "Responder",
    report: "Reportar",
  },
  fr: {
    anonymousUser: "Utilisateur Anonyme",
    member: "Membre",
    reply: "Répondre",
    report: "Signaler",
  },
  ja: {
    anonymousUser: "匿名ユーザー",
    member: "メンバー",
    reply: "返信",
    report: "報告",
  },
  zh: {
    anonymousUser: "匿名用户",
    member: "成员",
    reply: "回复",
    report: "举报",
  },
};

interface CommentProps {
  readonly comment: models.Comment;
  readonly language: string;
}

export default function Comment({ comment, language }: CommentProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: comment.value,
    editable: false,
  });

  const formatDate = (date: string) => {
    const now = new Date();
    const commentDate = new Date(date);
    const diffInHours = Math.floor(
      (now.getTime() - commentDate.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) {
      return language === "es" ? "Hace unos minutos" : "A few minutes ago";
    } else if (diffInHours < 24) {
      return language === "es" ? `Hace ${diffInHours}h` : `${diffInHours}h ago`;
    } else {
      return commentDate.toLocaleDateString(language, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  };

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="group relative">
      {/* Línea conectora sutil */}
      <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50/50 transition-all duration-200">
        {/* Avatar mejorado */}
        <div className="relative flex-shrink-0">
          <div className="relative">
            <Image
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md group-hover:shadow-lg transition-shadow duration-200"
              src={
                getImageUrl(comment.user?.photo?.filename) || "/placeholder.svg"
              }
              alt={comment.user?.name ?? "User avatar"}
            />
            {/* Indicador de estado online (opcional) */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Header del comentario */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-gray-900 text-sm">
                {comment.user?.name || (
                  <span className="flex items-center gap-1 text-gray-500">
                    <User className="w-3 h-3" />
                    {t.anonymousUser}
                  </span>
                )}
              </h4>
              {/* Badge de rol (opcional) */}
              <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                {t.member}
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <time dateTime={comment.created_at}>
                {formatDate(comment.created_at)}
              </time>
            </div>
          </div>

          {/* Contenido del comentario */}
          <div className="relative">
            <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <EditorContent
                editor={editor}
                className="prose prose-sm max-w-none text-gray-700
                          prose-p:my-2 prose-p:leading-relaxed
                          prose-ul:my-2 prose-ol:my-2
                          prose-li:my-0.5
                          prose-headings:my-2 prose-headings:font-semibold
                          prose-blockquote:my-2 prose-blockquote:border-l-blue-400
                          prose-strong:text-gray-900
                          prose-em:text-gray-600
                          prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                          [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
              />
            </div>

            {/* Flecha apuntando al avatar */}
            <div className="absolute left-0 top-4 transform -translate-x-1">
              <div className="w-2 h-2 bg-white border-l border-t border-gray-100 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
