"use server";

import { PostTranslation } from "@/types/models";
import Image from "next/image";
import ShareContent from "./ShareContent";
import Author from "./Author";
import RelatedPosts from "./RelatedPosts";
import Comments from "./Comments";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import ArticleMeta from "./ArticleMeta";

interface PostContentProps {
  readonly article: PostTranslation;
  readonly language: string;
}

export default async function PostContent({
  article,
  language,
}: PostContentProps) {
  const translatedContent = article.translatedContent.trim();
  const contentWithNotTitle = translatedContent.replace(/^#\s+(.+)/, "");

  return (
    <article className="lg:col-span-3">
      <div className="mb-4">
        <span className="inline-flex items-center bg-primary-light text-white px-3 py-0.5 rounded-full text-sm font-medium">
          <i className="fas fa-cloud mr-2"></i> {article.category || "General"}
        </span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {article.translatedTitle}
      </h1>

      <ArticleMeta article={article} />

      <div className="relative h-64 overflow-hidden rounded-lg mb-6">
        <Image
          src={article?.post?.coverImage?.url || ""}
          alt={article?.post?.coverImage?.alt || "Cover Image"}
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

      <RelatedPosts article={article} language={language} />

      <Comments language={language} />
    </article>
  );
}
