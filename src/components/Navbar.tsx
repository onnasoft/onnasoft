import { headers } from "next/headers";
import Link from "next/link";

const translations = {
  en: {
    services: "Services",
    whyUs: "Why Choose Us",
    process: "Process",
    sectors: "Sectors",
    blog: "Blog",
    contact: "Contact",
    mission: "Mission",
    vision: "Vision",
  },
  es: {
    services: "Servicios",
    whyUs: "Por qué elegirnos",
    process: "Proceso",
    sectors: "Sectores",
    blog: "Blog",
    contact: "Contacto",
    mission: "Misión",
    vision: "Visión",
  },
  fr: {
    services: "Services",
    whyUs: "Pourquoi nous choisir",
    process: "Processus",
    sectors: "Secteurs",
    blog: "Blog",
    contact: "Contact",
    mission: "Mission",
    vision: "Vision",
  },
  ja: {
    services: "サービス",
    whyUs: "選ばれる理由",
    process: "プロセス",
    sectors: "分野",
    blog: "ブログ",
    contact: "お問い合わせ",
    mission: "ミッション",
    vision: "ビジョン",
  },
  zh: {
    services: "服务",
    whyUs: "为何选择我们",
    process: "流程",
    sectors: "行业",
    blog: "博客",
    contact: "联系",
    mission: "使命",
    vision: "愿景",
  },
};

const Navbar = async ({ language }: { language: string }) => {
  const headersList = await headers();
  const t =
    translations[language as keyof typeof translations] || translations.en;
  const pathname = headersList.get("x-pathname") || "";
  const path = pathname.substring(3);
  const lang = language;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-3 transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={`/${lang}`} className="text-2xl font-bold text-gray-900">
            <span className="text-primary">Onna</span>Soft
          </Link>
        </div>
        <nav className="hidden lg:flex space-x-8 items-center">
          <Link href={`/${lang}/#services`} className="nav-link">
            {t.services}
          </Link>
          <Link href={`/${lang}/#why-us`} className="nav-link">
            {t.whyUs}
          </Link>
          <Link href={`/${lang}/mission`} className="nav-link">
            {t.mission}
          </Link>
          <Link href={`/${lang}/vision`} className="nav-link">
            {t.vision}
          </Link>
          <Link
            target="_blank"
            href={process.env.NEXT_PUBLIC_BLOG_URL || ""}
            className="nav-link"
          >
            {t.blog}
          </Link>
          <Link href={`/${lang}/#contact`} className="nav-link">
            <span className="text-primary font-bold">{t.contact}</span>
          </Link>

          {/* Desktop Language Selector */}
          <div className="relative ml-4">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-primary focus:outline-none peer text-lg"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* Emoji del idioma actual */}
              {language === "en" && <span className="text-lg mr-1">🇺🇸</span>}
              {language === "es" && <span className="text-lg mr-1">🇪🇸</span>}
              {language === "fr" && <span className="text-lg mr-1">🇫🇷</span>}
              {language === "ja" && <span className="text-lg mr-1">🇯🇵</span>}
              {language === "zh" && <span className="text-lg mr-1">🇨🇳</span>}
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
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden peer-focus:block hover:block">
              <Link
                href={`/en/${path}`}
                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              >
                <span className="text-lg mr-2">🇺🇸</span> English
              </Link>
              <Link
                href={`/es/${path}`}
                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              >
                <span className="text-lg mr-2">🇪🇸</span> Español
              </Link>
              <Link
                href={`/fr/${path}`}
                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              >
                <span className="text-lg mr-2">🇫🇷</span> Français
              </Link>
              <Link
                href={`/ja/${path}`}
                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              >
                <span className="text-lg mr-2">🇯🇵</span> 日本語
              </Link>
              <Link
                href={`/zh/${path}`}
                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              >
                <span className="text-lg mr-2">🇨🇳</span> 中文
              </Link>
            </div>
          </div>
        </nav>
        <div className="lg:hidden flex items-center">
          {/* Mobile Language Selector - Form solution */}
          <form className="mr-4">
            <select
              className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              defaultValue={language}
              aria-label="Select language"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
              <option value="ja">JA</option>
              <option value="zh">ZH</option>
            </select>
            <noscript>
              <button
                type="button"
                //onClick="redirectToLanguage(document.querySelector('select').value)"
                className="ml-2 px-2 py-1 text-sm bg-primary text-white rounded-md hover:bg-primary-dark transition"
              >
                Ir
              </button>
            </noscript>
          </form>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                function redirectToLanguage(lang) {
                  const currentPath = window.location.pathname;
                  const langRegex = /^\\/(en|es|fr|ja|zh)(\\/|$)/;
                  const basePath = '/' + lang;
                  const newPath = langRegex.test(currentPath) 
                    ? currentPath.replace(langRegex, basePath + '$2')
                    : basePath + currentPath;
                  
                  window.location.href = newPath;
                }

                document.addEventListener('DOMContentLoaded', () => {
                  const langSelect = document.querySelector('select');
                  if (langSelect) {
                    langSelect.addEventListener('change', function() {
                      redirectToLanguage(this.value);
                    });
                  }
                });
              `,
            }}
          />

          <button
            id="menu-toggle"
            className="p-2 text-gray-600 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="lg:hidden hidden transition-all duration-300 ease-in-out"
      >
        <div className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link href="#services" className="nav-link-mobile">
              {t.services}
            </Link>
            <Link href="#why-us" className="nav-link-mobile">
              {t.whyUs}
            </Link>
            <Link href="#process" className="nav-link-mobile">
              {t.process}
            </Link>
            <Link href="#projects" className="nav-link-mobile">
              {t.sectors}
            </Link>
            <Link href="#blog" className="nav-link-mobile">
              {t.blog}
            </Link>
            <Link href="#contact" className="nav-link-mobile">
              {t.contact}
            </Link>
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            menuToggle.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
            });
            document.querySelectorAll('#mobile-menu a').forEach(link => {
              link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
              });
            });
            let lastScroll = 0;
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
              const currentScroll = window.scrollY;
              if (currentScroll > 10) {
                header.classList.add('bg-white', 'shadow-sm', 'py-3');
                header.classList.remove('bg-transparent', 'py-5');
              } else {
                header.classList.remove('bg-white', 'shadow-sm', 'py-3');
                header.classList.add('bg-transparent', 'py-5');
              }
              lastScroll = currentScroll;
            });
          });
        `,
        }}
      />
    </header>
  );
};

export default Navbar;
