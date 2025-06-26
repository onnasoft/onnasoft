"use server";

import { Post } from "@/types/models";
import Image from "next/image";
import ShareContent from "./ShareContent";
import Author from "./Author";
import RelatedPosts from "./RelatedPosts";
import Comments from "./Comments";
import ArticleMeta from "./ArticleMeta";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import { getImageUrl } from "@/lib/image";

interface PostContentProps {
  readonly article: Post;
  readonly language: string;
}

export default async function PostContent({
  article,
  language,
}: PostContentProps) {
  const translation = article.translations?.[0];

  const translated_content = translation?.translated_content.trim() ?? "";
  const contentWithNotTitle = translated_content.replace(/^#\s+(.+)/, "");

  return (
    <article className="lg:col-span-3">
      <div className="mb-4">
        <span className="inline-flex items-center bg-primary-light text-white px-3 py-0.5 rounded-full text-sm font-medium">
          <i className="fas fa-cloud mr-2"></i>{" "}
          {translation?.category || "General"}
        </span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {translation?.translated_title}
      </h1>

      <ArticleMeta article={article} />

      <div className="relative h-64 overflow-hidden rounded-lg mb-6">
        <Image
          src={getImageUrl(article?.cover_image?.filename)}
          alt={article?.cover_image?.alt || "Cover Image"}
          width={1024}
          height={768}
          className="absolute top-[-20%] left-0 w-full h-auto object-cover"
        />
      </div>
      <div className="article-content">
        <ReactMarkdown
          remarkPlugins={[
            remarkGfm,
            remarkBreaks,
            remarkMath,
            remarkDirective,
            remarkFrontmatter,
          ]}
          rehypePlugins={[rehypeRaw, rehypeKatex, rehypeHighlight]}
        >
          {contentWithNotTitle}
        </ReactMarkdown>
      </div>

      <ShareContent language={language} article={article} />

      <Author article={article} />

      <RelatedPosts language={language} article={article} />

      <Comments language={language} article={article} />
    </article>
  );
}
