import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getPostTranslations } from "@/services/post-translations";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { getCategories } from "@/services/categories";
import Image from "next/image";

interface PostProps {
  readonly params: Promise<{
    lang: string;
    category: string;
    post: string;
  }>;
}

export default async function Post({ params }: PostProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const args = await params;
  const lang = args.lang || acceptLanguage || "en";
  const language = suportedLanguages.includes(lang) ? lang : "en";

  const article = await getPostTranslations({
    slug: `${args.category}/${args.post}`,
    locale: language,
  });

  if (!article || article.length === 0) {
    redirect(`/${language}/blog`);
  }

  const category = await getCategories({
    slug: args.category,
  });

  if (!category || category.length === 0) {
    redirect(`/${language}/blog`);
  }

  if (!language) {
    redirect(`/en`);
  }

  const translatedContent = article[0].translatedContent || "";
  const contentWithNotTitle = translatedContent.replace(/^#\s+(.+)/, "");

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} />
      <main>
        <div className="pt-20 bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href={`/${language}`}
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary"
                  >
                    <i className="fas fa-home mr-2" /> Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 mx-2" />
                    <Link
                      href={`/${language}/blog`}
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2"
                    >
                      Blog
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 mx-2" />
                    <Link
                      href={`/${language}/blog/${args.category}`}
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2"
                    >
                      {category[0].name}
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 mx-2" />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                      The Future of Cloud Migration
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Main Article */}
            <div className="lg:col-span-3 article-content">
              <h1>
                The Silent Revolution: How Artificial Intelligence is
                Transforming Modern Medicine
              </h1>
              <Image
                width={800}
                height={450}
                objectFit="cover"
                className="w-full h-64 object-cover rounded-lg mb-6"
                src={article[0].post.coverImage?.url || ""}
                alt={article[0].post.coverImage?.alt || "Cover Image"}
              />
              <Markdown>{contentWithNotTitle}</Markdown>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="sticky top-8 space-y-8">
                {/* Search */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className=" font-semibold text-gray-900 mb-4">
                    Search Blog
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <i className="fas fa-search absolute left-3 top-3 text-gray-400" />
                  </div>
                </div>
                {/* Categories */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className=" font-semibold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between"
                      >
                        Cloud Migration
                        <span className="text-sm text-gray-400">(12)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between"
                      >
                        Web Development
                        <span className="text-sm text-gray-400">(8)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between"
                      >
                        Data Science
                        <span className="text-sm text-gray-400">(15)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between"
                      >
                        DevOps{" "}
                        <span className="text-sm text-gray-400">(6)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between"
                      >
                        API Integration
                        <span className="text-sm text-gray-400">(9)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Recent Posts */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className=" font-semibold text-gray-900 mb-4">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    <article className="flex space-x-3">
                      <img
                        className="w-16 h-16 object-cover rounded"
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="DevOps"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                          <a href="#">
                            DevOps Best Practices for Cloud-Native Applications
                          </a>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          March 10, 2024
                        </p>
                      </div>
                    </article>
                    <article className="flex space-x-3">
                      <img
                        className="w-16 h-16 object-cover rounded"
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Microservices"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                          <a href="#">
                            Microservices Architecture: When and How to
                            Implement
                          </a>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          March 8, 2024
                        </p>
                      </div>
                    </article>
                    <article className="flex space-x-3">
                      <img
                        className="w-16 h-16 object-cover rounded"
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Data Analytics"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                          <a href="#">
                            Advanced Data Analytics with Python and PySpark
                          </a>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          March 5, 2024
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
                {/* Newsletter */}
                <div className="bg-onnasoft-pink p-6 rounded-lg text-white">
                  <h3 className=" font-semibold mb-4">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-sm mb-4 text-pink-100">
                    Get the latest insights and updates delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
                {/* Tags */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className=" font-semibold text-gray-900 mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      Cloud
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      AWS
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      Migration
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      DevOps
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      Python
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      JavaScript
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      API
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      Security
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
