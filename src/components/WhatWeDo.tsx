import Image from "next/image";

const translations = {
  en: {
    title: "What We Do",
    titleHighlight: "We Do",
    intro:
      "At Onnasoft, we build custom digital solutions that empower businesses to grow, scale, and innovate. From web apps to AI-driven platforms, we turn ideas into high-performance products.",
    body: "We combine deep technical expertise with real-world business insight to solve complex challenges. Whether you need a prototype or an enterprise-grade system, we deliver clean code, clear communication, and measurable results.",
  },
  es: {
    title: "Lo Que Hacemos",
    titleHighlight: "Hacemos",
    intro:
      "En Onnasoft, creamos soluciones digitales a medida que permiten a las empresas crecer, escalar e innovar. Desde aplicaciones web hasta plataformas impulsadas por IA, convertimos ideas en productos de alto rendimiento.",
    body: "Combinamos experiencia técnica profunda con visión empresarial real para resolver desafíos complejos. Ya sea que necesites un prototipo o un sistema a nivel empresarial, entregamos código limpio, comunicación clara y resultados medibles.",
  },
  fr: {
    title: "Ce Que Nous Faisons",
    titleHighlight: "Faisons",
    intro:
      "Chez Onnasoft, nous créons des solutions numériques sur mesure qui permettent aux entreprises de croître, d’évoluer et d’innover. Des applications web aux plateformes basées sur l’IA, nous transformons les idées en produits performants.",
    body: "Nous combinons une expertise technique approfondie à une compréhension concrète du monde des affaires pour résoudre des défis complexes. Que vous ayez besoin d’un prototype ou d’un système de niveau entreprise, nous livrons un code propre, une communication claire et des résultats mesurables.",
  },
  ja: {
    title: "私たちの取り組み",
    titleHighlight: "取り組み",
    intro:
      "Onnasoftでは、企業が成長し、スケールし、革新できるよう、カスタムデジタルソリューションを構築しています。WebアプリからAI駆動のプラットフォームまで、アイデアを高性能な製品に変えます。",
    body: "深い技術的専門知識と実践的なビジネスの洞察を組み合わせて、複雑な課題を解決します。プロトタイプでも、エンタープライズグレードのシステムでも、クリーンなコード、明確なコミュニケーション、測定可能な結果を提供します。",
  },
  zh: {
    title: "我们的服务",
    titleHighlight: "服务",
    intro:
      "在Onnasoft，我们构建定制的数字解决方案，帮助企业成长、扩展和创新。从网页应用到AI驱动的平台，我们将想法转化为高性能产品。",
    body: "我们结合深厚的技术专长与实际的商业洞察，解决复杂挑战。无论是原型开发还是企业级系统，我们都提供高质量代码、清晰沟通和可衡量的成果。",
  },
};

interface WhatWeDoProps {
  language: string;
}

const WhatWeDo = ({ language }: WhatWeDoProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.title.split(t.titleHighlight)[0]}
              <span className="text-primary">{t.titleHighlight}</span>
            </h2>
            <p className=" text-gray-700 mb-4">{t.intro}</p>
            <p className=" text-gray-700">{t.body}</p>
          </div>
          <div className="w-full">
            <Image
              width={600}
              height={400}
              src="/assets/undraw_our-solution_qv3b.png"
              alt="Illustration of our services"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
