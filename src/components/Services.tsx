import React from "react";
import {
  FaCode,
  FaPlug,
  FaDatabase,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";

const translations = {
  en: {
    title: "Our Services",
    description:
      "With over 10 years of experience and more than 50 successful projects, we offer comprehensive technological solutions to propel your business into the digital future.",
    services: [
      {
        title: "Programming and Web Development",
        description:
          "We create modern and responsive web applications using the latest technologies. Our solutions are designed to offer an exceptional user experience and optimal performance.",
      },
      {
        title: "API Integration",
        description:
          "We connect systems and applications to create efficient workflows. Our integrations allow your tools to work together harmoniously, improving productivity and reducing errors.",
      },
      {
        title: "Big Data",
        description:
          "We process and analyze large volumes of data to obtain valuable insights. Our big data solutions allow you to make decisions based on accurate and up-to-date information.",
      },
      {
        title: "Data Science",
        description:
          "We apply advanced analysis and machine learning techniques to extract knowledge from your data. Our predictive models help you anticipate trends and optimize your operations.",
      },
      {
        title: "IT Outsourcing",
        description:
          "We provide specialized IT talent and teams to support your business needs. With over 10 years of experience and more than 50 successful projects, our outsourcing services help you scale efficiently.",
      },
      {
        title: "Cloud Migration",
        description:
          "We help businesses transition their infrastructure and applications to the cloud securely and efficiently. Our migration strategies minimize disruption while maximizing the benefits of cloud technology.",
      },
    ],
  },
  es: {
    title: "Nuestros Servicios",
    description:
      "Con más de 10 años de experiencia y más de 50 proyectos exitosos, ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital.",
    services: [
      {
        title: "Programación y Desarrollo Web",
        description:
          "Creamos aplicaciones web modernas y responsivas usando las últimas tecnologías. Nuestras soluciones ofrecen una experiencia de usuario excepcional y un rendimiento óptimo.",
      },
      {
        title: "Integración de APIs",
        description:
          "Conectamos sistemas y aplicaciones para crear flujos de trabajo eficientes. Permitimos que tus herramientas trabajen juntas armoniosamente.",
      },
      {
        title: "Big Data",
        description:
          "Procesamos y analizamos grandes volúmenes de datos para obtener información valiosa y actualizada para la toma de decisiones.",
      },
      {
        title: "Ciencia de Datos",
        description:
          "Aplicamos análisis avanzado y machine learning para obtener conocimiento de tus datos. Te ayudamos a anticipar tendencias.",
      },
      {
        title: "Outsourcing de TI",
        description:
          "Proveemos talento TI especializado. Más de 10 años de experiencia y 50+ proyectos nos respaldan para escalar contigo.",
      },
      {
        title: "Migración a la Nube",
        description:
          "Migramos infraestructura y apps a la nube de forma segura y eficiente. Minimiza interrupciones y maximiza beneficios.",
      },
    ],
  },
  fr: {
    title: "Nos Services",
    description:
      "Avec plus de 10 ans d'expérience et plus de 50 projets réussis, nous offrons des solutions technologiques complètes pour propulser votre entreprise vers l'avenir numérique.",
    services: [
      {
        title: "Programmation et Développement Web",
        description:
          "Nous créons des applications web modernes et responsives utilisant les dernières technologies. Expérience utilisateur optimale garantie.",
      },
      {
        title: "Intégration d’API",
        description:
          "Nous connectons vos systèmes pour des flux de travail efficaces, augmentant la productivité et réduisant les erreurs.",
      },
      {
        title: "Big Data",
        description:
          "Nous analysons de grands volumes de données pour fournir des insights pertinents et à jour.",
      },
      {
        title: "Science des Données",
        description:
          "Grâce à l’analyse avancée et au machine learning, nous aidons à prédire les tendances et à optimiser vos opérations.",
      },
      {
        title: "Externalisation IT",
        description:
          "Nous fournissons des talents IT qualifiés pour répondre à vos besoins et faire évoluer votre entreprise efficacement.",
      },
      {
        title: "Migration vers le Cloud",
        description:
          "Nous assurons une transition sécurisée et efficace vers le cloud, minimisant les interruptions et maximisant les avantages.",
      },
    ],
  },
  ja: {
    title: "サービス内容",
    description:
      "10年以上の経験と50以上の成功事例に基づき、ビジネスのデジタル化を推進する包括的な技術ソリューションを提供します。",
    services: [
      {
        title: "プログラミングとWeb開発",
        description:
          "最新技術を活用し、モダンでレスポンシブなWebアプリケーションを構築します。",
      },
      {
        title: "API統合",
        description:
          "システムとアプリケーションを接続し、効率的なワークフローを実現します。",
      },
      {
        title: "ビッグデータ",
        description:
          "大量のデータを処理・分析し、意思決定に役立つ貴重なインサイトを提供します。",
      },
      {
        title: "データサイエンス",
        description:
          "高度な分析と機械学習を活用し、トレンド予測と業務の最適化を支援します。",
      },
      {
        title: "ITアウトソーシング",
        description: "専門的なIT人材を提供し、ビジネスの成長をサポートします。",
      },
      {
        title: "クラウド移行",
        description: "インフラとアプリを安全かつ効率的にクラウドへ移行します。",
      },
    ],
  },
  zh: {
    title: "我们的服务",
    description:
      "我们拥有10年以上经验和超过50个成功项目，提供全面的技术解决方案，助力您的业务迈向数字化未来。",
    services: [
      {
        title: "编程与网站开发",
        description:
          "使用最新技术开发现代化响应式Web应用，提升用户体验与性能。",
      },
      {
        title: "API集成",
        description: "将系统与应用连接，提高工作流程效率，减少错误。",
      },
      {
        title: "大数据",
        description: "分析大量数据，获得关键洞察，支持准确决策。",
      },
      {
        title: "数据科学",
        description: "利用机器学习分析数据，预测趋势并优化运营。",
      },
      {
        title: "IT外包",
        description: "提供专业IT团队，助力企业高效扩展。",
      },
      {
        title: "云迁移",
        description: "帮助企业安全高效地迁移至云端，最大化收益。",
      },
    ],
  },
};

const Services: React.FC<{ language: string }> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const icons = [
    <FaCode key={0} className="text-2xl" />,
    <FaPlug key={1} className="text-2xl" />,
    <FaDatabase key={2} className="text-2xl" />,
    <FaChartLine key={3} className="text-2xl" />,
    <FaUsers key={4} className="text-2xl" />,
    <SiGooglecloud key={5} className="text-2xl" />,
  ];

  return (
    <section
      id="services"
      className="section bg-gray-50 dark:bg-gray-900 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 p-4 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
