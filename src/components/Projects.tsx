import Image from "next/image";
import React from "react";

const translations = {
  es: {
    title: "Sectores con los que trabajamos",
    description:
      "Nuestra experiencia abarca varios sectores, donde aplicamos tecnología de punta para resolver desafíos específicos de la industria.",
    sectors: [
      {
        title: "Finanzas",
        description:
          "Soluciones tecnológicas para instituciones financieras, bancos y compañías de inversión, optimizando procesos y mejorando la seguridad en transacciones.",
        tags: ["Banca Digital", "Análisis de Riesgo", "Seguridad"],
        realImage:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Salud",
        description:
          "Sistemas para el sector salud que mejoran la gestión de pacientes, registros médicos electrónicos y análisis clínicos para una atención más eficiente.",
        tags: ["Telemedicina", "Gestión Hospitalaria", "Análisis Clínico"],
        realImage:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Educación",
        description:
          "Plataformas educativas interactivas y herramientas digitales de aprendizaje que transforman la experiencia educativa para estudiantes y profesores.",
        tags: ["E-learning", "Gestión Académica", "Evaluación"],
        realImage:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Comercio Electrónico",
        description:
          "Desarrollo de tiendas en línea, sistemas de pago y plataformas de gestión de inventarios que impulsan las ventas y mejoran la experiencia del cliente.",
        tags: ["Comercio Electrónico", "Pagos en Línea", "Marketing Digital"],
        realImage:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Bienes Raíces",
        description:
          "Aplicaciones para el sector inmobiliario que facilitan la búsqueda, gestión y mantenimiento de propiedades, optimizando procesos para agentes y clientes.",
        tags: ["Bienes Raíces", "Casa Inteligente", "Gestión de Propiedades"],
        realImage:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Aerolíneas",
        description:
          "Soluciones integrales para la industria aérea, incluyendo sistemas de reserva, gestión de vuelos y optimización de la experiencia del cliente.",
        tags: [
          "Gestión de Vuelos",
          "Sistemas de Reserva",
          "Experiencia del Cliente",
        ],
        realImage:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
    ],
    cta: "Hablemos de tu proyecto",
  },
  en: {
    title: "Sectors We Work With",
    description:
      "Our experience spans across various sectors, where we apply cutting-edge technology to solve industry-specific challenges.",
    sectors: [
      {
        title: "Finance",
        description:
          "Technological solutions for financial institutions, banks, and investment companies, optimizing processes and improving transaction security.",
        tags: ["Digital Banking", "Risk Analysis", "Security"],
        realImage:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Healthcare",
        description:
          "Systems for the healthcare sector that improve patient management, electronic medical records, and clinical data analysis for more efficient care.",
        tags: ["Telemedicine", "Hospital Management", "Clinical Analysis"],
        realImage:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Education",
        description:
          "Interactive educational platforms and digital learning tools that transform the educational experience for both students and teachers.",
        tags: ["E-learning", "Academic Management", "Assessment"],
        realImage:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "E-commerce",
        description:
          "Development of online stores, payment systems, and inventory management platforms that boost sales and improve customer experience.",
        tags: ["E-commerce", "Online Payments", "Digital Marketing"],
        realImage:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Real Estate",
        description:
          "Applications for the real estate sector that facilitate property search, management, and maintenance, optimizing processes for agents and clients.",
        tags: ["Real Estate", "Smart Home", "Property Management"],
        realImage:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Airlines",
        description:
          "Comprehensive solutions for the airline industry, including booking systems, flight management, and customer experience optimization.",
        tags: ["Flight Management", "Booking Systems", "Customer Experience"],
        realImage:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
    ],
    cta: "Let's talk about your project",
  },
  fr: {
    title: "Secteurs avec lesquels nous travaillons",
    description:
      "Notre expérience couvre plusieurs secteurs où nous appliquons une technologie de pointe pour résoudre des défis spécifiques à l'industrie.",
    sectors: [
      {
        title: "Finance",
        description:
          "Solutions technologiques pour les institutions financières, banques et sociétés d'investissement, optimisant les processus et améliorant la sécurité des transactions.",
        tags: ["Banque Digitale", "Analyse de Risque", "Sécurité"],
        realImage:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Santé",
        description:
          "Systèmes pour le secteur de la santé améliorant la gestion des patients, les dossiers médicaux électroniques et l'analyse clinique pour des soins plus efficaces.",
        tags: ["Télémédecine", "Gestion Hospitalière", "Analyse Clinique"],
        realImage:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Éducation",
        description:
          "Plateformes éducatives interactives et outils numériques d'apprentissage qui transforment l'expérience éducative pour étudiants et enseignants.",
        tags: ["E-learning", "Gestion Académique", "Évaluation"],
        realImage:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Commerce Électronique",
        description:
          "Développement de boutiques en ligne, systèmes de paiement et plateformes de gestion des stocks qui stimulent les ventes et améliorent l'expérience client.",
        tags: [
          "Commerce Électronique",
          "Paiements en Ligne",
          "Marketing Digital",
        ],
        realImage:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Immobilier",
        description:
          "Applications pour le secteur immobilier facilitant la recherche, la gestion et l'entretien des propriétés, optimisant les processus pour agents et clients.",
        tags: ["Immobilier", "Maison Intelligente", "Gestion Immobilière"],
        realImage:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "Compagnies Aériennes",
        description:
          "Solutions complètes pour l'industrie aérienne, incluant systèmes de réservation, gestion des vols et optimisation de l'expérience client.",
        tags: [
          "Gestion des Vols",
          "Systèmes de Réservation",
          "Expérience Client",
        ],
        realImage:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
    ],
    cta: "Parlons de votre projet",
  },
  ja: {
    title: "私たちが取り組む分野",
    description:
      "当社の経験は様々な分野にわたり、業界固有の課題を解決するために最先端技術を適用しています。",
    sectors: [
      {
        title: "金融",
        description:
          "金融機関、銀行、投資会社向けの技術ソリューションで、プロセスを最適化し取引の安全性を向上させます。",
        tags: ["デジタルバンキング", "リスク分析", "セキュリティ"],
        realImage:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "医療",
        description:
          "患者管理、電子カルテ、臨床データ分析を改善し、より効率的なケアを提供する医療分野向けシステム。",
        tags: ["遠隔医療", "病院管理", "臨床分析"],
        realImage:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "教育",
        description:
          "学生と教師の教育体験を変革するインタラクティブな教育プラットフォームとデジタル学習ツール。",
        tags: ["eラーニング", "学術管理", "評価"],
        realImage:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "電子商取引",
        description:
          "オンラインストア、決済システム、在庫管理プラットフォームの開発で売上を促進し、顧客体験を向上させます。",
        tags: ["電子商取引", "オンライン決済", "デジタルマーケティング"],
        realImage:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "不動産",
        description:
          "物件検索、管理、メンテナンスを支援する不動産分野向けアプリケーションで、代理店や顧客のプロセスを最適化。",
        tags: ["不動産", "スマートホーム", "物件管理"],
        realImage:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "航空会社",
        description:
          "予約システム、フライト管理、顧客体験の最適化を含む航空業界向けの包括的なソリューション。",
        tags: ["フライト管理", "予約システム", "顧客体験"],
        realImage:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
    ],
    cta: "プロジェクトについて話しましょう",
  },
  zh: {
    title: "我们合作的行业",
    description: "我们的经验涵盖多个行业，应用尖端技术解决行业特定的挑战。",
    sectors: [
      {
        title: "金融",
        description:
          "为金融机构、银行和投资公司提供技术解决方案，优化流程并提升交易安全性。",
        tags: ["数字银行", "风险分析", "安全"],
        realImage:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "医疗保健",
        description:
          "为医疗行业提供改善患者管理、电子病历和临床数据分析的系统，以实现更高效的护理。",
        tags: ["远程医疗", "医院管理", "临床分析"],
        realImage:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "教育",
        description: "互动式教育平台和数字学习工具，改变学生和教师的教育体验。",
        tags: ["在线学习", "学术管理", "评估"],
        realImage:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "电子商务",
        description:
          "开发在线商店、支付系统和库存管理平台，提升销售额并改善客户体验。",
        tags: ["电子商务", "在线支付", "数字营销"],
        realImage:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "房地产",
        description:
          "为房地产行业提供便捷的物业搜索、管理和维护应用，优化代理商和客户的流程。",
        tags: ["房地产", "智能家居", "物业管理"],
        realImage:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
      {
        title: "航空公司",
        description:
          "为航空行业提供全面解决方案，包括预订系统、航班管理和客户体验优化。",
        tags: ["航班管理", "预订系统", "客户体验"],
        realImage:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
    ],
    cta: "让我们谈谈您的项目",
  },
};

interface ProjectsProps {
  readonly language: string;
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900 animate-fade-in-down">
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
          {t.sectors.map((sector) => (
            <div
              key={sector.title}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Contenedor de imagen con título superpuesto */}
              <div className="relative h-48">
                {/* Imagen de fondo */}
                <Image
                  fill
                  src={sector.realImage}
                  alt={sector.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Título con fondo semitransparente */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                  <h3 className="text-2xl font-bold text-white text-center">
                    {sector.title}
                  </h3>
                </div>
              </div>

              {/* Contenido debajo de la imagen */}
              <div className="p-6 bg-white dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {sector.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sector.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-light text-white font-bold text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
