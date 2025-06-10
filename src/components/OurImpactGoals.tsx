import Image from "next/image";

const translations = {
  en: {
    title: "Our Impact Goals",
    titleHighlight: "Impact Goals",
    intro:
      "Everything we build at Onnasoft is designed to create measurable, meaningful change — not just for businesses, but for people, industries, and communities.",
    body: "From reducing operational friction and boosting productivity to enabling entirely new business models, our goal is to ensure that every line of code contributes to real, positive impact. We don’t chase trends — we pursue outcomes.",
  },
  es: {
    title: "Nuestros Objetivos de Impacto",
    titleHighlight: "Objetivos de Impacto",
    intro:
      "Todo lo que construimos en Onnasoft está diseñado para generar un cambio medible y significativo, no solo para las empresas, sino también para las personas, las industrias y las comunidades.",
    body: "Desde reducir la fricción operativa y aumentar la productividad hasta habilitar nuevos modelos de negocio, nuestro objetivo es asegurar que cada línea de código contribuya a un impacto real y positivo. No seguimos tendencias — buscamos resultados.",
  },
  fr: {
    title: "Nos Objectifs d’Impact",
    titleHighlight: "Objectifs d’Impact",
    intro:
      "Tout ce que nous construisons chez Onnasoft vise à générer un changement mesurable et significatif — pas seulement pour les entreprises, mais aussi pour les personnes, les industries et les communautés.",
    body: "De la réduction des frictions opérationnelles à l’augmentation de la productivité, en passant par la création de nouveaux modèles commerciaux, notre objectif est que chaque ligne de code ait un impact positif réel. Nous ne poursuivons pas les tendances — nous poursuivons les résultats.",
  },
  ja: {
    title: "私たちのインパクト目標",
    titleHighlight: "インパクト目標",
    intro:
      "Onnasoftで構築するすべてのものは、ビジネスだけでなく、人々、業界、コミュニティにも測定可能で意味のある変化をもたらすことを目的としています。",
    body: "運用上の摩擦の削減や生産性の向上、新しいビジネスモデルの実現まで、私たちの目標はすべてのコードがポジティブな影響を与えることです。流行を追いかけるのではなく、成果を追求します。",
  },
  zh: {
    title: "我们的影响目标",
    titleHighlight: "影响目标",
    intro:
      "在Onnasoft，我们构建的一切都旨在创造可衡量、有意义的变革，不仅面向企业，也面向个人、行业和社区。",
    body: "从减少运营摩擦、提高生产力到实现全新的商业模式，我们的目标是确保每一行代码都能带来真正积极的影响。我们不追逐潮流——我们追求成果。",
  },
};

interface OurImpactGoalsProps {
  language: string;
}

const OurImpactGoals = ({ language }: OurImpactGoalsProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <Image
              width={600}
              height={400}
              src="/assets/undraw_world_bdnk.svg"
              alt="Illustration of impact goals"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.title.split(t.titleHighlight)[0]}
              <span className="text-primary">{t.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">{t.intro}</p>
            <p className="text-lg text-gray-700">{t.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpactGoals;
