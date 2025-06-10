import React from "react";

const translations = {
  en: {
    title: "Our Core Values",
    description:
      "We are committed to excellence, innovation, and integrity in everything we do.",
    intro:
      "The principles that define how we think, build, and grow. They guide our decisions and shape the way we interact with our clients, partners, and each other.",
    values: {
      Simplicity: {
        title: "Simplicity",
        desc: "We believe technology should make life easier, not harder. We aim to eliminate unnecessary complexity and deliver clean, intuitive experiences for users and developers alike.",
      },
      Integrity: {
        title: "Integrity",
        desc: "Honesty and consistency are at the core of every relationship we build. We communicate openly, follow through on commitments, and always act in the best interest of our clients and team.",
      },
      Innovation: {
        title: "Innovation",
        desc: "We push boundaries by experimenting with new tools, frameworks, and ideas. Our curiosity drives us to explore what’s next and bring forward-thinking solutions to complex problems.",
      },
      Excellence: {
        title: "Excellence",
        desc: "We set high standards for ourselves, our work, and our results. From performance to polish, we pursue excellence at every level, ensuring that quality is never sacrificed.",
      },
      Empowerment: {
        title: "Empowerment",
        desc: "We enable clients and collaborators to reach their full potential through clear tools, accessible technology, and thoughtful design. Our goal is to make others more capable through our work.",
      },
      Collaboration: {
        title: "Collaboration",
        desc: "We believe the best outcomes come from working together. We actively listen, adapt to feedback, and thrive on building long-term relationships that go beyond the project scope.",
      },
    },
  },
  es: {
    title: "Nuestros Valores Fundamentales",
    description:
      "Estamos comprometidos con la excelencia, la innovación y la integridad en todo lo que hacemos.",
    intro:
      "Los principios que definen cómo pensamos, construimos y crecemos. Guían nuestras decisiones y moldean la forma en que interactuamos con nuestros clientes, socios y entre nosotros.",
    values: {
      Simplicity: {
        title: "Simplicidad",
        desc: "Creemos que la tecnología debe hacer la vida más fácil, no más difícil. Buscamos eliminar la complejidad innecesaria y ofrecer experiencias limpias e intuitivas tanto para usuarios como para desarrolladores.",
      },
      Integrity: {
        title: "Integridad",
        desc: "La honestidad y la coherencia están en el centro de cada relación que construimos. Nos comunicamos abiertamente, cumplimos nuestros compromisos y actuamos siempre en el mejor interés de nuestros clientes y equipo.",
      },
      Innovation: {
        title: "Innovación",
        desc: "Impulsamos los límites al experimentar con nuevas herramientas, marcos de trabajo e ideas. Nuestra curiosidad nos impulsa a explorar lo que sigue y a aportar soluciones visionarias a problemas complejos.",
      },
      Excellence: {
        title: "Excelencia",
        desc: "Establecemos altos estándares para nosotros mismos, nuestro trabajo y nuestros resultados. Desde el rendimiento hasta el acabado, perseguimos la excelencia en todos los niveles, asegurando que la calidad nunca se sacrifique.",
      },
      Empowerment: {
        title: "Empoderamiento",
        desc: "Permitimos que los clientes y colaboradores alcancen su máximo potencial mediante herramientas claras, tecnología accesible y diseño reflexivo. Nuestro objetivo es hacer que otros sean más capaces a través de nuestro trabajo.",
      },
      Collaboration: {
        title: "Colaboración",
        desc: "Creemos que los mejores resultados provienen del trabajo conjunto. Escuchamos activamente, nos adaptamos a la retroalimentación y prosperamos al construir relaciones duraderas que van más allá del alcance del proyecto.",
      },
    },
  },
  fr: {
    title: "Nos Valeurs Fondamentales",
    description:
      "Nous nous engageons envers l'excellence, l'innovation et l'intégrité dans tout ce que nous faisons.",
    intro:
      "Les principes qui définissent notre façon de penser, de construire et de grandir. Ils guident nos décisions et façonnent la manière dont nous interagissons avec nos clients, partenaires et entre nous.",
    values: {
      Simplicity: {
        title: "Simplicité",
        desc: "Nous croyons que la technologie doit faciliter la vie, pas la compliquer. Nous visons à éliminer la complexité inutile et à offrir des expériences claires et intuitives pour les utilisateurs et les développeurs.",
      },
      Integrity: {
        title: "Intégrité",
        desc: "L'honnêteté et la cohérence sont au cœur de chaque relation que nous construisons. Nous communiquons ouvertement, tenons nos engagements et agissons toujours dans le meilleur intérêt de nos clients et de notre équipe.",
      },
      Innovation: {
        title: "Innovation",
        desc: "Nous repoussons les limites en expérimentant de nouveaux outils, frameworks et idées. Notre curiosité nous pousse à explorer l'avenir et à apporter des solutions avant-gardistes à des problèmes complexes.",
      },
      Excellence: {
        title: "Excellence",
        desc: "Nous nous fixons des normes élevées pour nous-mêmes, notre travail et nos résultats. De la performance à la finition, nous poursuivons l'excellence à tous les niveaux, en veillant à ce que la qualité ne soit jamais sacrifiée.",
      },
      Empowerment: {
        title: "Autonomisation",
        desc: "Nous permettons aux clients et collaborateurs d'atteindre leur plein potentiel grâce à des outils clairs, une technologie accessible et un design réfléchi. Notre objectif est de rendre les autres plus capables grâce à notre travail.",
      },
      Collaboration: {
        title: "Collaboration",
        desc: "Nous croyons que les meilleurs résultats proviennent du travail d'équipe. Nous écoutons activement, nous adaptons aux retours et nous prospérons en construisant des relations à long terme qui vont au-delà du périmètre du projet.",
      },
    },
  },
  ja: {
    title: "私たちのコアバリュー",
    description:
      "私たちは、すべての活動において卓越性、革新性、誠実さを追求しています。",
    intro:
      "私たちの考え方、構築方法、成長方法を定義する原則です。これらは私たちの決定を導き、クライアント、パートナー、そして互いの関係を形成します。",
    values: {
      Simplicity: {
        title: "シンプルさ",
        desc: "テクノロジーは生活をより簡単にするものであるべきだと考えています。不要な複雑さを排除し、ユーザーと開発者の両方にとってクリーンで直感的な体験を提供します。",
      },
      Integrity: {
        title: "誠実さ",
        desc: "私たちが築くすべての関係の中心には、正直さと一貫性があります。オープンにコミュニケーションを取り、約束を守り、クライアントとチームの最善の利益のために行動します。",
      },
      Innovation: {
        title: "革新",
        desc: "新しいツール、フレームワーク、アイデアを試すことで限界を押し広げます。私たちの好奇心は、次のステップを探求し、複雑な問題に対する先進的な解決策を提供する原動力です。",
      },
      Excellence: {
        title: "卓越性",
        desc: "自分自身、仕事、結果に対して高い基準を設定します。パフォーマンスから仕上げまで、あらゆるレベルで卓越性を追求し、品質が犠牲にされないようにします。",
      },
      Empowerment: {
        title: "エンパワーメント",
        desc: "クライアントとコラボレーターが最大限の潜在能力を発揮できるよう、明確なツール、アクセス可能なテクノロジー、思慮深いデザインを提供します。私たちの目標は、私たちの仕事を通じて他者をより有能にすることです。",
      },
      Collaboration: {
        title: "コラボレーション",
        desc: "最高の成果は共同作業から生まれると信じています。積極的に耳を傾け、フィードバックに適応し、プロジェクトの範囲を超えた長期的な関係を築くことに力を入れています。",
      },
    },
  },
  zh: {
    title: "我们的核心价值观",
    description: "我们致力于在一切工作中追求卓越、创新和诚信。",
    intro:
      "定义我们思考、构建和成长方式的原则。它们指导我们的决策，并塑造我们与客户、合作伙伴以及彼此之间的关系。",
    values: {
      Simplicity: {
        title: "简约",
        desc: "我们相信技术应该让生活更简单，而不是更复杂。我们旨在消除不必要的复杂性，为用户和开发者提供清晰直观的体验。",
      },
      Integrity: {
        title: "诚信",
        desc: "诚实和一致性是我们建立的每一段关系的核心。我们开放沟通，履行承诺，并始终以客户和团队的最佳利益为重。",
      },
      Innovation: {
        title: "创新",
        desc: "我们通过尝试新工具、框架和想法来推动边界。我们的好奇心驱使我们探索未来，并为复杂问题带来前瞻性的解决方案。",
      },
      Excellence: {
        title: "卓越",
        desc: "我们对自己、我们的工作和结果设定高标准。从性能到细节，我们在各个层面追求卓越，确保质量永远不会被牺牲。",
      },
      Empowerment: {
        title: "赋能",
        desc: "我们通过清晰的工具、可访问的技术和深思熟虑的设计，使客户和合作者能够发挥其最大潜力。我们的目标是通过我们的工作使他人更有能力。",
      },
      Collaboration: {
        title: "协作",
        desc: "我们相信最佳成果来自于团队合作。我们积极倾听，适应反馈，并致力于建立超越项目范围的长期关系。",
      },
    },
  },
};

interface OurCoreValuesProps {
  language: string;
}

const OurCoreValues = ({ language }: OurCoreValuesProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  const values = Object.entries(t.values);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(([key, val], idx) => {
              const icons = [
                <path
                  key={val.title + idx + "1"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />,
                <path
                  key={val.title + idx + "2"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0-3.866 3.582-7 8-7v14c-4.418 0-8-3.134-8-7z"
                />,
                <path
                  key={val.title + idx + "3"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />,
                <path
                  key={val.title + idx + "4"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />,
                <path
                  key={val.title + idx + "5"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />,
                <path
                  key={val.title + idx + "6"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />,
              ];

              return (
                <div className="card" key={val.title + idx}>
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {icons[idx]}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 text-center">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;
