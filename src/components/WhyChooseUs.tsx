import React from "react";
import {
  FaGraduationCap,
  FaCogs,
  FaChartBar,
  FaMicrochip,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const translations = {
  es: {
    title: "¿Por qué elegirnos?",
    paragraph:
      "En Onnasoft no solo desarrollamos software; creamos soluciones que transforman negocios, combinando experiencia técnica con un profundo entendimiento de los retos empresariales, trabajando siempre en base a la confianza, transparencia y compromiso con la excelencia.",
    reasons: [
      {
        title: "Experiencia y conocimiento técnico",
        description:
          "Nuestro equipo tiene amplia experiencia en desarrollar soluciones tecnológicas para diversos sectores, dominando las tecnologías más avanzadas y actualizándose constantemente.",
        icon: <FaGraduationCap className="text-2xl" />,
      },
      {
        title: "Soluciones personalizadas",
        description:
          "Entendemos que cada negocio es único, por eso desarrollamos soluciones a medida que se adaptan perfectamente a tus necesidades y objetivos.",
        icon: <FaCogs className="text-2xl" />,
      },
      {
        title: "Enfoque en resultados",
        description:
          "Nos comprometemos con el éxito de tu proyecto, trabajando con objetivos claros y medibles para generar un impacto positivo en tu negocio.",
        icon: <FaChartBar className="text-2xl" />,
      },
      {
        title: "Tecnología de vanguardia",
        description:
          "Usamos las herramientas y tecnologías más avanzadas del mercado para garantizar soluciones robustas, escalables y preparadas para el futuro.",
        icon: <FaMicrochip className="text-2xl" />,
      },
      {
        title: "Alianza de confianza",
        description:
          "Construimos relaciones a largo plazo basadas en la transparencia, la fiabilidad y el éxito mutuo.",
        icon: <FaHandshake className="text-2xl" />,
      },
      {
        title: "Enfoque innovador",
        description:
          "Combinamos creatividad y experiencia técnica para entregar soluciones únicas que te dan ventaja competitiva.",
        icon: <FaLightbulb className="text-2xl" />,
      },
      {
        title: "Implementación rápida",
        description:
          "Entregamos soluciones de alta calidad rápidamente, ayudándote a alcanzar tus objetivos empresariales más pronto.",
        icon: <FaRocket className="text-2xl" />,
      },
      {
        title: "Foco en seguridad",
        description:
          "Priorizamos la seguridad en cada solución, protegiendo tus datos y sistemas contra posibles amenazas.",
        icon: <FaShieldAlt className="text-2xl" />,
      },
    ],
  },
  en: {
    title: "Why Choose Us?",
    paragraph:
      "At Onnasoft, we don’t just develop software; we create solutions that transform businesses by combining technical expertise with a deep understanding of business challenges, always working based on trust, transparency, and commitment to excellence.",
    reasons: [
      {
        title: "Experience and technical knowledge",
        description:
          "Our team has extensive experience in developing technological solutions for various sectors. We master the most advanced technologies and keep constantly updated.",
        icon: <FaGraduationCap className="text-2xl" />,
      },
      {
        title: "Customized solutions",
        description:
          "We understand that each business is unique. That’s why we develop tailored solutions that perfectly adapt to your specific needs and business objectives.",
        icon: <FaCogs className="text-2xl" />,
      },
      {
        title: "Results-focused",
        description:
          "We are committed to the success of your project. We work with clear and measurable objectives, ensuring that each solution generates a positive impact on your business.",
        icon: <FaChartBar className="text-2xl" />,
      },
      {
        title: "Cutting-edge technology",
        description:
          "We use the most advanced tools and technologies in the market to ensure that your solutions are robust, scalable, and future-ready.",
        icon: <FaMicrochip className="text-2xl" />,
      },
      {
        title: "Trusted Partnership",
        description:
          "We build long-term relationships based on transparency, reliability, and mutual success.",
        icon: <FaHandshake className="text-2xl" />,
      },
      {
        title: "Innovative Approach",
        description:
          "We combine creativity with technical expertise to deliver unique solutions that give you a competitive edge.",
        icon: <FaLightbulb className="text-2xl" />,
      },
      {
        title: "Fast Implementation",
        description:
          "We deliver high-quality solutions quickly, helping you achieve your business goals faster.",
        icon: <FaRocket className="text-2xl" />,
      },
      {
        title: "Security Focus",
        description:
          "We prioritize security in every solution, protecting your data and systems from potential threats.",
        icon: <FaShieldAlt className="text-2xl" />,
      },
    ],
  },
  fr: {
    title: "Pourquoi nous choisir ?",
    paragraph:
      "Chez Onnasoft, nous ne développons pas seulement des logiciels ; nous créons des solutions qui transforment les entreprises en combinant expertise technique et compréhension approfondie des défis commerciaux, toujours basées sur la confiance, la transparence et l'engagement envers l'excellence.",
    reasons: [
      {
        title: "Expérience et expertise technique",
        description:
          "Notre équipe possède une vaste expérience dans le développement de solutions technologiques pour divers secteurs. Nous maîtrisons les technologies les plus avancées et restons constamment à jour.",
        icon: <FaGraduationCap className="text-2xl" />,
      },
      {
        title: "Solutions personnalisées",
        description:
          "Nous comprenons que chaque entreprise est unique. C'est pourquoi nous développons des solutions sur mesure qui s'adaptent parfaitement à vos besoins spécifiques et objectifs commerciaux.",
        icon: <FaCogs className="text-2xl" />,
      },
      {
        title: "Orienté résultats",
        description:
          "Nous nous engageons pour le succès de votre projet. Nous travaillons avec des objectifs clairs et mesurables pour garantir que chaque solution ait un impact positif sur votre entreprise.",
        icon: <FaChartBar className="text-2xl" />,
      },
      {
        title: "Technologie de pointe",
        description:
          "Nous utilisons les outils et technologies les plus avancés du marché pour garantir que vos solutions soient robustes, évolutives et prêtes pour l'avenir.",
        icon: <FaMicrochip className="text-2xl" />,
      },
      {
        title: "Partenariat de confiance",
        description:
          "Nous construisons des relations à long terme basées sur la transparence, la fiabilité et le succès mutuel.",
        icon: <FaHandshake className="text-2xl" />,
      },
      {
        title: "Approche innovante",
        description:
          "Nous combinons créativité et expertise technique pour offrir des solutions uniques qui vous donnent un avantage concurrentiel.",
        icon: <FaLightbulb className="text-2xl" />,
      },
      {
        title: "Mise en œuvre rapide",
        description:
          "Nous livrons rapidement des solutions de haute qualité, vous aidant à atteindre vos objectifs commerciaux plus vite.",
        icon: <FaRocket className="text-2xl" />,
      },
      {
        title: "Accent sur la sécurité",
        description:
          "Nous priorisons la sécurité dans chaque solution, protégeant vos données et systèmes contre les menaces potentielles.",
        icon: <FaShieldAlt className="text-2xl" />,
      },
    ],
  },
  ja: {
    title: "なぜ私たちを選ぶのか？",
    paragraph:
      "Onnasoftでは、単にソフトウェアを開発するだけでなく、ビジネスの課題を深く理解し、技術的専門知識と組み合わせてビジネスを変革するソリューションを作り出しています。信頼、透明性、卓越性へのコミットメントに基づいて常に取り組んでいます。",
    reasons: [
      {
        title: "経験と技術知識",
        description:
          "私たちのチームは様々な分野での技術ソリューション開発に豊富な経験を持ち、最新技術を常に習得しています。",
        icon: <FaGraduationCap className="text-2xl" />,
      },
      {
        title: "カスタマイズされたソリューション",
        description:
          "各ビジネスが独自であることを理解し、特定のニーズと目標に完全に適応するカスタマイズソリューションを提供します。",
        icon: <FaCogs className="text-2xl" />,
      },
      {
        title: "結果重視",
        description:
          "プロジェクトの成功にコミットし、明確で測定可能な目標を持ってビジネスにポジティブな影響を与えるソリューションを提供します。",
        icon: <FaChartBar className="text-2xl" />,
      },
      {
        title: "最先端技術",
        description:
          "市場で最も先進的なツールと技術を使用し、堅牢でスケーラブルかつ将来に対応できるソリューションを保証します。",
        icon: <FaMicrochip className="text-2xl" />,
      },
      {
        title: "信頼できるパートナーシップ",
        description:
          "透明性、信頼性、相互の成功に基づく長期的な関係を築きます。",
        icon: <FaHandshake className="text-2xl" />,
      },
      {
        title: "革新的アプローチ",
        description:
          "創造性と技術的専門知識を組み合わせて、競争優位性をもたらす独自のソリューションを提供します。",
        icon: <FaLightbulb className="text-2xl" />,
      },
      {
        title: "迅速な実装",
        description:
          "高品質なソリューションを迅速に提供し、ビジネス目標の達成を早めます。",
        icon: <FaRocket className="text-2xl" />,
      },
      {
        title: "セキュリティ重視",
        description:
          "すべてのソリューションでセキュリティを優先し、データとシステムを潜在的な脅威から保護します。",
        icon: <FaShieldAlt className="text-2xl" />,
      },
    ],
  },
  zh: {
    title: "为什么选择我们？",
    paragraph:
      "在Onnasoft，我们不仅开发软件；我们结合技术专长和对业务挑战的深刻理解，创造转变业务的解决方案，始终基于信任、透明度和卓越承诺进行工作。",
    reasons: [
      {
        title: "经验和技术知识",
        description:
          "我们的团队在为各行业开发技术解决方案方面拥有丰富经验，掌握最先进的技术并不断更新。",
        icon: <FaGraduationCap className="text-2xl" />,
      },
      {
        title: "定制化解决方案",
        description:
          "我们理解每个业务都是独特的，因此开发完全适应您特定需求和业务目标的定制解决方案。",
        icon: <FaCogs className="text-2xl" />,
      },
      {
        title: "以结果为导向",
        description:
          "我们致力于您的项目成功，制定明确且可衡量的目标，确保每个解决方案都能对您的业务产生积极影响。",
        icon: <FaChartBar className="text-2xl" />,
      },
      {
        title: "前沿技术",
        description:
          "我们使用市场上最先进的工具和技术，确保您的解决方案稳健、可扩展并面向未来。",
        icon: <FaMicrochip className="text-2xl" />,
      },
      {
        title: "可信赖的合作伙伴关系",
        description: "我们建立基于透明度、可靠性和共同成功的长期合作关系。",
        icon: <FaHandshake className="text-2xl" />,
      },
      {
        title: "创新方法",
        description:
          "我们将创造力与技术专长相结合，提供独特的解决方案，使您具备竞争优势。",
        icon: <FaLightbulb className="text-2xl" />,
      },
      {
        title: "快速实施",
        description: "我们快速交付高质量解决方案，帮助您更快实现业务目标。",
        icon: <FaRocket className="text-2xl" />,
      },
      {
        title: "安全关注",
        description:
          "我们在每个解决方案中优先考虑安全，保护您的数据和系统免受潜在威胁。",
        icon: <FaShieldAlt className="text-2xl" />,
      },
    ],
  },
};

interface WhyChooseUsProps {
  language: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section id="why-us" className="section bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {t.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {t.paragraph}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {t.reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
