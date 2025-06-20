"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const translations: Record<string, Record<string, string>> = {
  en: {
    title: "Make it real with OnnaSoft",
    subtitle:
      "We transform ideas into innovative digital solutions. Specialists in programming, web development, API integration, big data and data science.",
    contact: "Contact Us",
    services: "Our Services",
    typing1: "Projects Real",
    typing2: "Ideas Reality",
    typing3: "Dreams True",
    typing4: "Vision Live",
    ctaStart: "Start Your Project",
    ctaWatch: "Watch Demo",
    poweredBy: "Powered by cutting-edge technologies",
  },
  es: {
    title: "Hazlo realidad con OnnaSoft",
    subtitle:
      "Transformamos ideas en soluciones digitales innovadoras. Especialistas en programación, desarrollo web, integración de APIs, big data y ciencia de datos.",
    contact: "Contáctanos",
    services: "Nuestros Servicios",
    typing1: "Proyectos Reales",
    typing2: "Ideas en Acción",
    typing3: "Sueños Cumplidos",
    typing4: "Visión Viva",
    ctaStart: "Inicia tu Proyecto",
    ctaWatch: "Ver Demostración",
    poweredBy: "Impulsado por tecnologías de punta",
  },
  fr: {
    title: "Réalisez-le avec OnnaSoft",
    subtitle:
      "Nous transformons les idées en solutions numériques innovantes. Spécialistes en programmation, développement web, intégration d'API, big data et science des données.",
    contact: "Contactez-nous",
    services: "Nos Services",
    typing1: "Projets Réels",
    typing2: "Idées Réalité",
    typing3: "Rêves Réalisés",
    typing4: "Vision Vivante",
    ctaStart: "Commencez votre projet",
    ctaWatch: "Voir la démo",
    poweredBy: "Propulsé par des technologies de pointe",
  },
  ja: {
    title: "OnnaSoftで現実に",
    subtitle:
      "アイデアを革新的なデジタルソリューションに変えます。プログラミング、Web開発、API統合、ビッグデータ、データサイエンスの専門家。",
    contact: "お問い合わせ",
    services: "サービス内容",
    typing1: "実現したプロジェクト",
    typing2: "現実のアイデア",
    typing3: "夢が叶う",
    typing4: "ビジョンを実現",
    ctaStart: "プロジェクトを始める",
    ctaWatch: "デモを見る",
    poweredBy: "先端技術で実現",
  },
  zh: {
    title: "用 OnnaSoft 实现你的想法",
    subtitle:
      "我们将创意转化为创新的数字解决方案。专注于编程、网页开发、API集成、大数据与数据科学。",
    contact: "联系我们",
    services: "我们的服务",
    typing1: "真实项目",
    typing2: "创意实现",
    typing3: "梦想成真",
    typing4: "愿景成真",
    ctaStart: "开始你的项目",
    ctaWatch: "观看演示",
    poweredBy: "由尖端技术驱动",
  },
};

interface HeroProps {
  readonly language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language] || translations.en;

  const words = useMemo(
    () => [t.typing1, t.typing2, t.typing3, t.typing4],
    [t]
  );

  const [typingText, setTypingText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeWriter = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setTypingText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setTypingText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const speed = isDeleting ? 100 : 150;
    const timer = setTimeout(typeWriter, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.width = Math.random() * 4 + 2 + "px";
      particle.style.height = particle.style.width;
      particle.style.animationDuration = Math.random() * 3 + 5 + "s";
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();

      const container = document.getElementById("particles-container");
      if (container) {
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 8000);
      }
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  const techIcons = [
    { icon: "fab fa-js-square", color: "text-yellow-500", title: "JavaScript" },
    { icon: "fab fa-js-square", color: "text-blue-600", title: "TypeScript" },
    { icon: "fab fa-python", color: "text-blue-500", title: "Python" },
    { icon: "fas fa-code", color: "text-cyan-500", title: "Go" },
    { icon: "fab fa-node-js", color: "text-green-600", title: "Node.js" },
    { icon: "fab fa-react", color: "text-blue-400", title: "React" },
    { icon: "fas fa-layer-group", color: "text-black", title: "Next.js" },
    { icon: "fab fa-aws", color: "text-orange-500", title: "AWS" },
    { icon: "fab fa-docker", color: "text-blue-600", title: "Docker" },
    { icon: "fab fa-bootstrap", color: "text-purple-600", title: "Bootstrap" },
    { icon: "fas fa-wind", color: "text-cyan-400", title: "Tailwind" },
    { icon: "fas fa-database", color: "text-gray-700", title: "SQL" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/10 to-purple-50"></div>

      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div id="particles-container" className="absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 break-words leading-tight">
            <span className="gradient-text">{t.title}</span>
            <br />
            <span className="typing-animation">{typingText}</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-md sm:max-w-xl md:max-w-3xl mx-auto animate-fade-in-down break-words">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link
              href={`/${language}#contact`}
              className="bg-primary text-white px-8 py-4 rounded-lg  font-semibold hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <i className="fas fa-rocket mr-2"></i> {t.ctaStart}
            </Link>
          </div>
        </div>

        <div className="mt-16 animate-slide-up">
          <p className="text-gray-500 mb-6 text-sm uppercase tracking-wider">
            {t.poweredBy}
          </p>
          <div className="tech-grid max-w-4xl mx-auto">
            {techIcons.map((tech) => (
              <div
                key={tech.title}
                className={`tech-icon text-3xl ${tech.color} hover:text-opacity-80 cursor-pointer`}
                title={tech.title}
              >
                <i className={tech.icon}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
