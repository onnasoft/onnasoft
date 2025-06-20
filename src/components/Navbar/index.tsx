"use server";

import Image from "next/image";
import Link from "next/link";
import ProductsMenu from "./ProductsMenu";
import ServicesMenu from "./ServicesMenu";
import MobileLanguageSelector from "./MobileLanguageSelector";
import MobileMenu from "./MobileMenu";

const translations = {
  en: {
    services: "Services",
    whyUs: "Why Choose Us",
    process: "Process",
    sectors: "Sectors",
    blog: "Blog",
    contact: "Contact",
  },
  es: {
    services: "Servicios",
    whyUs: "Por qué elegirnos",
    process: "Proceso",
    sectors: "Sectores",
    blog: "Blog",
    contact: "Contacto",
  },
  fr: {
    services: "Services",
    whyUs: "Pourquoi nous choisir",
    process: "Processus",
    sectors: "Secteurs",
    blog: "Blog",
    contact: "Contact",
  },
  ja: {
    services: "サービス",
    whyUs: "選ばれる理由",
    process: "プロセス",
    sectors: "分野",
    blog: "ブログ",
    contact: "お問い合わせ",
  },
  zh: {
    services: "服务",
    whyUs: "为何选择我们",
    process: "流程",
    sectors: "行业",
    blog: "博客",
    contact: "联系",
  },
};

const HIDE_BLOG = process.env.NEXT_PUBLIC_HIDE_BLOG === "true";

const Navbar = async ({
  language,
  pathname = "/",
}: {
  language: string;
  pathname: string;
}) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;
  const path = pathname.substring(3);
  const lang = language;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur shadow-xs py-3 transition-all duration-300">
      {/* Hidden checkbox for mobile menu toggle */}
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="mobile-menu-toggle absolute opacity-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <Link
            prefetch={false}
            href={`/${language}`}
            className="text-2xl font-bold text-gray-900"
          >
            <span className="text-primary">Onna</span>Soft
          </Link>
        </div>

        <nav className="hidden lg:flex space-x-8 items-center">
          <ProductsMenu language={language} />
          <ServicesMenu language={language} />
          <Link
            href={`/${language}/company/why-choose-onnasoft-technology-tailored-to-you-results-scaled-to-your-needs`}
            className="nav-link"
            prefetch={false}
          >
            {t.whyUs}
          </Link>
          {!HIDE_BLOG && (
            <Link
              href={`/${language}/blog`}
              className="nav-link"
              prefetch={false}
            >
              {t.blog}
            </Link>
          )}
          <Link
            prefetch={false}
            href={`/${language}/#contact`}
            className="bg-primary text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="text-white font-bold">{t.contact}</span>
          </Link>

          {/* Desktop Language Selector */}
          <div className="relative ml-4 lang-dropdown">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-primary focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
              type="button"
            >
              {language === "en" && <span className="mr-1">🇺🇸</span>}
              {language === "es" && <span className="mr-1">🇪🇸</span>}
              {language === "fr" && <span className="mr-1">🇫🇷</span>}
              {language === "ja" && <span className="mr-1">🇯🇵</span>}
              {language === "zh" && <span className="mr-1">🇨🇳</span>}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 lang-menu">
              <Link
                href={`/en/${path}`}
                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-2">🇺🇸</span> English
              </Link>
              <Link
                href={`/es/${path}`}
                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-2">🇪🇸</span> Español
              </Link>
              <Link
                href={`/fr/${path}`}
                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-2">🇫🇷</span> Français
              </Link>
              <Link
                href={`/ja/${path}`}
                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-2">🇯🇵</span> 日本語
              </Link>
              <Link
                href={`/zh/${path}`}
                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-2">🇨🇳</span> 中文
              </Link>
            </div>
          </div>
        </nav>

        <div className="lg:hidden flex items-center">
          {/* Mobile Language Selector */}
          <MobileLanguageSelector language={language} />

          {/* Mobile menu toggle button */}
          <label
            htmlFor="mobile-menu-toggle"
            className="p-2 text-gray-600 hover:text-primary focus:outline-none cursor-pointer hamburger-icon"
            aria-label="Toggle menu"
          >
            <span className="hamburger-line line1"></span>
            <span className="hamburger-line line2"></span>
            <span className="hamburger-line line3"></span>
          </label>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu language={language} />
    </header>
  );
};

export default Navbar;
