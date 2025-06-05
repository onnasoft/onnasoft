import Link from "next/link";
import React from "react";

const translations = {
  en: {
    description:
      "We transform ideas into innovative digital solutions. Specialists in programming, web development, API integration, big data and data science.",
    quickLinks: "Quick Links",
    home: "Home",
    services: "Services",
    whyUs: "Why Choose Us",
    process: "Process",
    contact: "Contact",
    contactTitle: "Contact",
    location: process.env.NEXT_PUBLIC_LOCATION || "Madrid, Spain",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+34 123 456 789",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@onnasoft.com",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    copyright: `© ${new Date().getFullYear()} OnnaSoft. All rights reserved.`,
  },
  es: {
    description:
      "Transformamos ideas en soluciones digitales innovadoras. Especialistas en programación, desarrollo web, integración de APIs, big data y ciencia de datos.",
    quickLinks: "Enlaces Rápidos",
    home: "Inicio",
    services: "Servicios",
    whyUs: "¿Por qué elegirnos?",
    process: "Proceso",
    contact: "Contacto",
    contactTitle: "Contacto",
    location: process.env.NEXT_PUBLIC_LOCATION || "Madrid, Spain",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+34 123 456 789",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@onnasoft.com",
    privacy: "Política de Privacidad",
    terms: "Términos del Servicio",
    copyright: `© ${new Date().getFullYear()} OnnaSoft. Todos los derechos reservados.`,
  },
  fr: {
    description:
      "Nous transformons les idées en solutions numériques innovantes. Spécialistes en programmation, développement web, intégration d'API, big data et science des données.",
    quickLinks: "Liens Rapides",
    home: "Accueil",
    services: "Services",
    whyUs: "Pourquoi Nous Choisir",
    process: "Processus",
    contact: "Contact",
    contactTitle: "Contact",
    location: process.env.NEXT_PUBLIC_LOCATION || "Madrid, Spain",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+34 123 456 789",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@onnasoft.com",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'Utilisation",
    copyright: `© ${new Date().getFullYear()} OnnaSoft. Tous droits réservés.`,
  },
  ja: {
    description:
      "私たちはアイデアを革新的なデジタルソリューションに変えます。プログラミング、Web開発、API統合、ビッグデータ、データサイエンスの専門家です。",
    quickLinks: "クイックリンク",
    home: "ホーム",
    services: "サービス",
    whyUs: "選ばれる理由",
    process: "プロセス",
    contact: "お問い合わせ",
    contactTitle: "連絡先",
    location: process.env.NEXT_PUBLIC_LOCATION || "Madrid, Spain",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+34 123 456 789",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@onnasoft.com",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    copyright: `© ${new Date().getFullYear()} OnnaSoft. 無断転載を禁じます。`,
  },
  zh: {
    description:
      "我们将创意转化为创新的数字解决方案。专注于编程、网页开发、API 集成、大数据和数据科学。",
    quickLinks: "快速链接",
    home: "首页",
    services: "服务",
    whyUs: "为什么选择我们",
    process: "流程",
    contact: "联系",
    contactTitle: "联系方式",
    location: process.env.NEXT_PUBLIC_LOCATION || "Madrid, Spain",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+34 123 456 789",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@onnasoft.com",
    privacy: "隐私政策",
    terms: "服务条款",
    copyright: `© ${new Date().getFullYear()} OnnaSoft. 保留所有权利。`,
  },
};

interface FooterProps {
  readonly language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold mb-4 block">
              <span className="text-primary">Onna</span>soft
            </Link>
            <p className="text-gray-400 mb-4">{t.description}</p>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || ""}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link
                  href="#why-us"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t.whyUs}
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t.process}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.contactTitle}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary mr-2 mt-1"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-400">{t.location}</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary mr-2 mt-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-gray-400">{t.phone}</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary mr-2 mt-1"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-gray-400">{t.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href={process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL || ""}
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
