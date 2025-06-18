import React from "react";
import {
  FaRocket,
  FaStoreAlt,
  FaBuilding,
  FaLandmark,
  FaHandsHelping,
  FaSchool,
} from "react-icons/fa";

export const translations = {
  en: {
    title: "Who Can Benefit From Our Services",
    description:
      "With over 10 years of experience and more than 50 successful projects, we've helped a wide range of clients transform their businesses through technology.",
    clientTypes: [
      {
        title: "Startups & Entrepreneurs",
        description:
          "Perfect for new ventures looking to establish their digital presence quickly and efficiently. Our scalable solutions grow with your business, ensuring you only pay for what you need while maintaining the flexibility to expand.",
        icon: <FaRocket className="text-3xl" />,
      },
      {
        title: "Small & Medium Businesses",
        description:
          "Ideal for established businesses looking to optimize operations, improve customer experience, or expand their digital capabilities. Our solutions help you compete effectively with larger enterprises without the enterprise-level costs.",
        icon: <FaStoreAlt className="text-3xl" />,
      },
      {
        title: "Enterprise Organizations",
        description:
          "For large organizations seeking digital transformation, system integration, or custom solutions at scale. Our enterprise-grade services ensure security, compliance, and seamless integration with your existing infrastructure.",
        icon: <FaBuilding className="text-3xl" />,
      },
      {
        title: "Government & Public Sector",
        description:
          "Specialized solutions for government agencies and public institutions that require high security, compliance with regulations, and systems that can handle large-scale data processing and citizen services.",
        icon: <FaLandmark className="text-3xl" />,
      },
      {
        title: "Non-Profit Organizations",
        description:
          "Tailored solutions for non-profits that maximize impact while minimizing costs. We help you leverage technology to further your mission, improve donor engagement, and streamline operations with special pricing for qualified organizations.",
        icon: <FaHandsHelping className="text-3xl" />,
      },
      {
        title: "Educational Institutions",
        description:
          "Digital solutions for schools, colleges, and universities that enhance learning experiences, streamline administrative processes, and facilitate remote education with secure, user-friendly platforms.",
        icon: <FaSchool className="text-3xl" />,
      },
    ],
  },
  es: {
    title: "Quién Puede Beneficiarse de Nuestros Servicios",
    description:
      "Con más de 10 años de experiencia y más de 50 proyectos exitosos, hemos ayudado a una amplia gama de clientes a transformar sus negocios mediante la tecnología.",
    clientTypes: [
      {
        title: "Startups y Emprendedores",
        description:
          "Perfecto para nuevos emprendimientos que buscan establecer su presencia digital rápida y eficientemente. Nuestras soluciones escalables crecen con tu negocio, asegurando que solo pagues por lo que necesitas mientras mantienes la flexibilidad para expandirte.",
        icon: <FaRocket className="text-3xl" />,
      },
      {
        title: "Pequeñas y Medianas Empresas",
        description:
          "Ideal para empresas establecidas que buscan optimizar operaciones, mejorar la experiencia del cliente o ampliar sus capacidades digitales. Nuestras soluciones te ayudan a competir eficazmente con grandes empresas sin los costos a nivel empresarial.",
        icon: <FaStoreAlt className="text-3xl" />,
      },
      {
        title: "Organizaciones Empresariales",
        description:
          "Para grandes organizaciones que buscan transformación digital, integración de sistemas o soluciones personalizadas a gran escala. Nuestros servicios de nivel empresarial garantizan seguridad, cumplimiento y una integración perfecta con tu infraestructura existente.",
        icon: <FaBuilding className="text-3xl" />,
      },
      {
        title: "Gobierno y Sector Público",
        description:
          "Soluciones especializadas para agencias gubernamentales e instituciones públicas que requieren alta seguridad, cumplimiento normativo y sistemas capaces de manejar procesamiento de datos a gran escala y servicios ciudadanos.",
        icon: <FaLandmark className="text-3xl" />,
      },
      {
        title: "Organizaciones Sin Fines de Lucro",
        description:
          "Soluciones diseñadas para organizaciones sin fines de lucro que maximizan el impacto minimizando costos. Te ayudamos a aprovechar la tecnología para impulsar tu misión, mejorar el compromiso de donantes y optimizar operaciones con precios especiales para organizaciones calificadas.",
        icon: <FaHandsHelping className="text-3xl" />,
      },
      {
        title: "Instituciones Educativas",
        description:
          "Soluciones digitales para escuelas, colegios y universidades que mejoran las experiencias de aprendizaje, agilizan procesos administrativos y facilitan la educación remota con plataformas seguras y fáciles de usar.",
        icon: <FaSchool className="text-3xl" />,
      },
    ],
  },
  fr: {
    title: "Qui Peut Bénéficier de Nos Services",
    description:
      "Avec plus de 10 ans d'expérience et plus de 50 projets réussis, nous avons aidé un large éventail de clients à transformer leurs entreprises grâce à la technologie.",
    clientTypes: [
      {
        title: "Startups et Entrepreneurs",
        description:
          "Parfait pour les nouvelles entreprises cherchant à établir rapidement et efficacement leur présence numérique. Nos solutions évolutives grandissent avec votre entreprise, vous assurant de ne payer que pour ce dont vous avez besoin tout en conservant la flexibilité d'expansion.",
        icon: <FaRocket className="text-3xl" />,
      },
      {
        title: "Petites et Moyennes Entreprises",
        description:
          "Idéal pour les entreprises établies cherchant à optimiser leurs opérations, améliorer l'expérience client ou étendre leurs capacités numériques. Nos solutions vous aident à concurrencer efficacement les grandes entreprises sans les coûts associés au niveau entreprise.",
        icon: <FaStoreAlt className="text-3xl" />,
      },
      {
        title: "Organisations d'Entreprise",
        description:
          "Pour les grandes organisations cherchant la transformation numérique, l'intégration de systèmes ou des solutions personnalisées à grande échelle. Nos services de qualité entreprise garantissent la sécurité, la conformité et une intégration transparente avec votre infrastructure existante.",
        icon: <FaBuilding className="text-3xl" />,
      },
      {
        title: "Gouvernement et Secteur Public",
        description:
          "Solutions spécialisées pour les agences gouvernementales et les institutions publiques nécessitant une haute sécurité, le respect des réglementations et des systèmes capables de gérer le traitement de données à grande échelle et les services aux citoyens.",
        icon: <FaLandmark className="text-3xl" />,
      },
      {
        title: "Organisations à But Non Lucratif",
        description:
          "Solutions adaptées aux organisations à but non lucratif maximisant l'impact tout en minimisant les coûts. Nous vous aidons à exploiter la technologie pour faire avancer votre mission, améliorer l'engagement des donateurs et rationaliser les opérations avec des tarifs spéciaux pour les organisations qualifiées.",
        icon: <FaHandsHelping className="text-3xl" />,
      },
      {
        title: "Institutions Éducatives",
        description:
          "Solutions numériques pour écoles, collèges et universités qui améliorent les expériences d'apprentissage, simplifient les processus administratifs et facilitent l'enseignement à distance avec des plateformes sécurisées et conviviales.",
        icon: <FaSchool className="text-3xl" />,
      },
    ],
  },
  ja: {
    title: "当社のサービスが役立つお客様",
    description:
      "10年以上の経験と50以上の成功プロジェクトを通じて、多様なクライアントのビジネスをテクノロジーで変革してきました。",
    clientTypes: [
      {
        title: "スタートアップと起業家",
        description:
          "新しい事業が迅速かつ効率的にデジタルプレゼンスを確立するのに最適です。スケーラブルなソリューションはビジネスの成長に合わせて拡張可能で、必要な分だけ支払い、柔軟に拡大できます。",
        icon: <FaRocket className="text-3xl" />,
      },
      {
        title: "中小企業",
        description:
          "業務の最適化、顧客体験の向上、デジタル機能の拡張を目指す確立された企業に理想的です。大企業と効果的に競争できるソリューションを、企業レベルのコストを抑えて提供します。",
        icon: <FaStoreAlt className="text-3xl" />,
      },
      {
        title: "大企業組織",
        description:
          "デジタルトランスフォーメーション、システム統合、大規模なカスタムソリューションを求める大規模組織向け。エンタープライズグレードのサービスでセキュリティ、コンプライアンス、既存インフラとのシームレスな統合を保証します。",
        icon: <FaBuilding className="text-3xl" />,
      },
      {
        title: "政府・公共部門",
        description:
          "高度なセキュリティ、規制遵守、大規模なデータ処理や市民サービスを必要とする政府機関や公共機関向けの専門ソリューション。",
        icon: <FaLandmark className="text-3xl" />,
      },
      {
        title: "非営利組織",
        description:
          "コストを最小限に抑えつつインパクトを最大化する非営利組織向けのカスタマイズソリューション。ミッションの推進、寄付者のエンゲージメント向上、業務効率化を技術で支援し、対象組織には特別価格も提供します。",
        icon: <FaHandsHelping className="text-3xl" />,
      },
      {
        title: "教育機関",
        description:
          "学校、大学、教育機関向けのデジタルソリューションで、学習体験の向上、管理業務の効率化、遠隔教育の促進を安全かつ使いやすいプラットフォームで実現します。",
        icon: <FaSchool className="text-3xl" />,
      },
    ],
  },
  zh: {
    title: "谁能从我们的服务中受益",
    description:
      "凭借超过10年的经验和50多个成功项目，我们帮助了各种客户通过技术转型他们的业务。",
    clientTypes: [
      {
        title: "初创企业与创业者",
        description:
          "非常适合希望快速高效建立数字存在的新创企业。我们的可扩展解决方案随着您的业务成长而发展，确保您只为所需付费，同时保持灵活扩展的能力。",
        icon: <FaRocket className="text-3xl" />,
      },
      {
        title: "中小型企业",
        description:
          "适合寻求优化运营、提升客户体验或扩展数字能力的成熟企业。我们的解决方案帮助您在不承担企业级成本的情况下，有效与大型企业竞争。",
        icon: <FaStoreAlt className="text-3xl" />,
      },
      {
        title: "大型企业组织",
        description:
          "针对寻求数字化转型、系统集成或大规模定制解决方案的大型组织。我们的企业级服务确保安全性、合规性，并与您现有基础设施无缝集成。",
        icon: <FaBuilding className="text-3xl" />,
      },
      {
        title: "政府与公共部门",
        description:
          "为需要高安全性、合规性以及能够处理大规模数据处理和市民服务的政府机构和公共机构提供专业解决方案。",
        icon: <FaLandmark className="text-3xl" />,
      },
      {
        title: "非营利组织",
        description:
          "为最大化影响力同时降低成本的非营利组织量身定制解决方案。我们帮助您利用技术推进使命、提升捐赠者参与度，并通过特价支持合格组织简化运营。",
        icon: <FaHandsHelping className="text-3xl" />,
      },
      {
        title: "教育机构",
        description:
          "为学校、学院和大学提供数字解决方案，提升学习体验，简化管理流程，并通过安全、用户友好的平台促进远程教育。",
        icon: <FaSchool className="text-3xl" />,
      },
    ],
  },
};

interface ClientTypeProps {
  readonly language: string;
}

const ClientTypes: React.FC<ClientTypeProps> = ({ language }) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="section bg-gray-50 dark:bg-gray-900 py-16 animate-fade-in-down">
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
          {t.clientTypes.map((clientType) => (
            <div
              key={clientType.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 p-4 bg-primary-light text-white rounded-full w-14 h-14 flex items-center justify-center">
                {clientType.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {clientType.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {clientType.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTypes;
