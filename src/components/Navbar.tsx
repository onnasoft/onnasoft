import Link from "next/link";

const translations: Record<string, Record<string, string>> = {
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

const Navbar = ({ language }: { language: string }) => {
  const t = translations[language] || translations.en;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-3 transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            <span className="text-primary">Onna</span>Soft
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="nav-link">{t.services}</Link>
          <Link href="#why-us" className="nav-link">{t.whyUs}</Link>
          <Link href="#process" className="nav-link">{t.process}</Link>
          <Link href="#projects" className="nav-link">{t.sectors}</Link>
          <Link href="#blog" className="nav-link">{t.blog}</Link>
          <Link href="#contact" className="nav-link">{t.contact}</Link>
        </nav>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="p-2 text-gray-600 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="md:hidden hidden transition-all duration-300 ease-in-out">
        <div className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link href="#services" className="nav-link-mobile">{t.services}</Link>
            <Link href="#why-us" className="nav-link-mobile">{t.whyUs}</Link>
            <Link href="#process" className="nav-link-mobile">{t.process}</Link>
            <Link href="#projects" className="nav-link-mobile">{t.sectors}</Link>
            <Link href="#blog" className="nav-link-mobile">{t.blog}</Link>
            <Link href="#contact" className="nav-link-mobile">{t.contact}</Link>
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
