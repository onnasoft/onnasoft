"use server";

import { PostTranslation } from "@/types/models";
import Image from "next/image";
import Link from "next/link";
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
          <i className="fas fa-cloud mr-2"></i>{" "}
          {article.post.category?.name || "General"}
        </span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {article.translatedTitle}
      </h1>

      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
        <div className="flex items-center flex-1">
          <Link
            href={article.post.author?.linkedIn || "#"}
            className="flex items-center hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <Image
                width={40}
                height={40}
                className="h-10 w-10 rounded-full mr-3"
                src={article.post.author?.photo?.url || "/default-avatar.png"}
                alt="Author"
              />

              <div>
                <p className="font-medium text-gray-900">
                  {article.post.author?.name || "John Doe"}
                </p>
                <p className="text-gray-600">
                  {article.post.author?.position || "Software Engineer"}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <i className="fas fa-calendar mr-2 text-gray-400"></i>
          <span>
            {new Date(article.post.publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-clock mr-2 text-gray-400"></i>
          <span>
            {Math.ceil(article.translatedContent.split(" ").length / 200)} min
            read
          </span>
        </div>
      </div>
      <div className="relative h-64 overflow-hidden rounded-lg mb-6">
        <Image
          src={article.post.coverImage?.url || ""}
          alt={article.post.coverImage?.alt || "Cover Image"}
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
