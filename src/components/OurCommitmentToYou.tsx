import React from "react";

interface OurCommitmentToYouProps {
  language: string;
}

const translations = {
  en: {
    title: "Our Commitment to You",
    intro:
      "When you choose Onnasoft as your technology partner, you can expect:",
    commitments: [
      {
        title: "Technical Excellence",
        desc: "Our team of experts stays at the forefront of technology trends and best practices to deliver solutions that are not only effective today but also future‑proof.",
      },
      {
        title: "Timely Delivery",
        desc: "We understand the importance of deadlines in business. Our efficient project management ensures that your solutions are delivered on time, every time.",
      },
      {
        title: "Clear Communication",
        desc: "We believe in transparent, jargon‑free communication. You’ll always know the status of your project and what to expect next.",
      },
      {
        title: "Ongoing Support",
        desc: "Our relationship doesn’t end with project delivery. We provide comprehensive support to ensure your solution continues to perform optimally.",
      },
    ],
  },
  es: {
    title: "Nuestro Compromiso Contigo",
    intro:
      "Cuando eliges a Onnasoft como tu socio tecnológico, puedes esperar:",
    commitments: [
      {
        title: "Excelencia Técnica",
        desc: "Nuestro equipo de expertos se mantiene a la vanguardia de las tendencias tecnológicas y las mejores prácticas para ofrecer soluciones que no solo son efectivas hoy, sino también a prueba de futuro.",
      },
      {
        title: "Entrega Oportuna",
        desc: "Entendemos la importancia de los plazos en los negocios. Nuestra gestión eficiente de proyectos garantiza que tus soluciones se entreguen a tiempo, siempre.",
      },
      {
        title: "Comunicación Clara",
        desc: "Creemos en una comunicación transparente y sin jerga técnica. Siempre sabrás el estado de tu proyecto y qué esperar a continuación.",
      },
      {
        title: "Soporte Continuo",
        desc: "Nuestra relación no termina con la entrega del proyecto. Brindamos soporte integral para garantizar que tu solución continúe funcionando de manera óptima.",
      },
    ],
  },
  fr: {
    title: "Notre Engagement À Votre Égard",
    intro:
      "Lorsque vous choisissez Onnasoft comme partenaire technologique, vous pouvez vous attendre à :",
    commitments: [
      {
        title: "Excellence Technique",
        desc: "Notre équipe d'experts reste à la pointe des tendances technologiques et des meilleures pratiques pour fournir des solutions efficaces aujourd'hui et pérennes.",
      },
      {
        title: "Livraison à Temps",
        desc: "Nous comprenons l'importance des délais en affaires. Notre gestion de projet efficace garantit que vos solutions sont livrées à temps, à chaque fois.",
      },
      {
        title: "Communication Claire",
        desc: "Nous croyons en une communication transparente et sans jargon. Vous saurez toujours l’état de votre projet et ce à quoi vous pouvez vous attendre.",
      },
      {
        title: "Support Continu",
        desc: "Notre relation ne s’arrête pas après la livraison du projet. Nous fournissons un support complet pour garantir que votre solution fonctionne de manière optimale.",
      },
    ],
  },
  ja: {
    title: "あなたへのコミットメント",
    intro: "Onnasoftをテクノロジーパートナーに選ぶと、次のものを期待できます：",
    commitments: [
      {
        title: "技術的卓越性",
        desc: "専門家チームが最新の技術トレンドとベストプラクティスを常に追求し、今日だけでなく将来にわたって有効なソリューションを提供します。",
      },
      {
        title: "期限厳守の納品",
        desc: "ビジネスにおける期限の重要性を理解しています。効率的なプロジェクト管理により、常に予定通りに納品します。",
      },
      {
        title: "明確なコミュニケーション",
        desc: "透明性のある専門用語のないコミュニケーションを信条としています。プロジェクトの進捗と今後の見通しが常に把握できます。",
      },
      {
        title: "継続的なサポート",
        desc: "プロジェクトの納品後も関係は終わりません。最適なパフォーマンスが継続されるよう、包括的なサポートを提供します。",
      },
    ],
  },
  zh: {
    title: "我们对您的承诺",
    intro: "当您选择Onnasoft作为您的技术合作伙伴时，您可以期待：",
    commitments: [
      {
        title: "技术卓越",
        desc: "我们的专家团队始终处于技术趋势和最佳实践的前沿，提供不仅有效且经久耐用的解决方案。",
      },
      {
        title: "准时交付",
        desc: "我们理解业务中截止日期的重要性。通过高效的项目管理，确保您的解决方案始终按时交付。",
      },
      {
        title: "清晰的沟通",
        desc: "我们相信透明且无需技术术语的沟通方式。您将始终了解项目进展和接下来的步骤。",
      },
      {
        title: "持续支持",
        desc: "我们的关系不会在项目交付时结束。我们提供全面支持，以确保您的解决方案持续发挥最佳性能。",
      },
    ],
  },
};

const OurCommitmentToYou = ({ language }: OurCommitmentToYouProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.commitments.map((item, idx) => (
              <div className="card" key={item.title}>
                <div className="flex items-start mb-4">
                  <div className="bg-primary-light p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitmentToYou;
