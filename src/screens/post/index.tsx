"use server";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostContent from "@/components/post/PostContent";
import PostSidebar from "@/components/post/PostSidebar";
import { getPostTranslations } from "@/services/post-translations";
import Head from "next/head";
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
  const { docs: article } = await getPostTranslations({
    where: {
      slug: `${category}/${post}`,
      locale: language,
    },
    depth: 3,
  });

  if (!article || article.length === 0) {
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
      <Head>
        <title>{article[0].translatedTitle} - OnnaSoft</title>
        <meta name="description" content={article[0].translatedExcerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`${WEBSITE_URL}/${language}/${category}/${post}`}
        />
      </Head>
      <Navbar language={language} pathname={pathname} />
      <main className="animate-fade-in-down">
        <div className="mt-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <PostContent article={article[0]} language={language} />
            <PostSidebar article={article[0]} language={language} />
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
