import React from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";

const translations: Record<string, Record<string, string>> = {
  en: {
    title: "Make it real with OnnaSoft",
    subtitle:
      "We transform ideas into innovative digital solutions. Specialists in programming, web development, API integration, big data and data science.",
    contact: "Contact Us",
    services: "Our Services",
  },
  es: {
    title: "Hazlo realidad con OnnaSoft",
    subtitle:
      "Transformamos ideas en soluciones digitales innovadoras. Especialistas en programación, desarrollo web, integración de APIs, big data y ciencia de datos.",
    contact: "Contáctanos",
    services: "Nuestros Servicios",
  },
  fr: {
    title: "Réalisez-le avec OnnaSoft",
    subtitle:
      "Nous transformons les idées en solutions numériques innovantes. Spécialistes en programmation, développement web, intégration d'API, big data et science des données.",
    contact: "Contactez-nous",
    services: "Nos Services",
  },
  ja: {
    title: "OnnaSoftで現実に",
    subtitle:
      "アイデアを革新的なデジタルソリューションに変えます。プログラミング、Web開発、API統合、ビッグデータ、データサイエンスの専門家。",
    contact: "お問い合わせ",
    services: "サービス内容",
  },
  zh: {
    title: "用 OnnaSoft 实现你的想法",
    subtitle:
      "我们将创意转化为创新的数字解决方案。专注于编程、网页开发、API集成、大数据与数据科学。",
    contact: "联系我们",
    services: "我们的服务",
  },
};

const Hero: React.FC<{ language: string }> = ({ language }) => {
  const t = translations[language] || translations.en;

  return (
    <section className="relative h-screen flex items-center bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src={heroImage}
          alt="Digital technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            <span className="text-primary">{t.title.split(" ")[0]}</span>{" "}
            {t.title.split(" ").slice(1).join(" ")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl fade-in stagger-1">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-2">
            <a href="#contact" className="btn-primary text-center">
              {t.contact}
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300 text-center"
            >
              {t.services}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <a href="#services" className="inline-block animate-bounce">
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
            className="text-gray-400"
          >
            <path d="M7 13l5 5 5-5"></path>
            <path d="M7 6l5 5 5-5"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
