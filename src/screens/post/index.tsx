"use server";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostContent from "@/components/post/PostContent";
import PostSidebar from "@/components/post/PostSidebar";
import { getPosts } from "@/services/posts";
import { redirect } from "next/navigation";

const WEBSITE_URL = process.env.WEBSITE_URL || "https://onnasoft.us";
export interface PostPageProps {
  readonly language: string;
  readonly pathname: string;
  readonly post: string;
  readonly category: string;
}

const PostPage: React.FC<PostPageProps> = async ({
  pathname,
  language,
  post,
  category,
}) => {
  const { docs: articles } = await getPosts({
    where: { slug: post },
    locale: language,
    relations: ["author", "author.photo", "category", "cover_image"],
  });

  if (!articles || articles.length === 0) {
    redirect(`/${language}/blog`);
  }

  if (!category || category.length === 0) {
    redirect(`/${language}/blog`);
  }

  if (!language) {
    redirect(`/en`);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} pathname={pathname} />
      <main className="animate-fade-in-down">
        <div className="mt-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <PostContent article={articles[0]} language={language} />
            <PostSidebar article={articles[0]} language={language} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8">
          <hr />
        </div>

        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default PostPage;
