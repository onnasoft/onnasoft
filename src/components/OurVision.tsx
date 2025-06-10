import Image from "next/image";

const translations = {
  en: {
    title: "Our Vision",
    paragraphs: [
      "At Onnasoft, we envision a world where technology is an invisible yet powerful enabler of business transformation — intuitive, reliable, and deeply aligned with real-world needs.",
      "We aim to become the trusted partner that forward-thinking organizations rely on to simplify complexity, accelerate innovation, and unlock long-term value through software. Our goal is not to build apps — it's to build advantage.",
    ],
  },
  es: {
    title: "Nuestra Visión",
    paragraphs: [
      "En Onnasoft, imaginamos un mundo donde la tecnología es un habilitador invisible pero poderoso de la transformación empresarial: intuitiva, confiable y profundamente alineada con las necesidades del mundo real.",
      "Nuestro objetivo es convertirnos en el socio de confianza que las organizaciones visionarias necesitan para simplificar la complejidad, acelerar la innovación y desbloquear valor a largo plazo a través del software. Nuestro objetivo no es construir aplicaciones, sino construir ventajas.",
    ],
  },
  fr: {
    title: "Notre Vision",
    paragraphs: [
      "Chez Onnasoft, nous envisageons un monde où la technologie est un catalyseur invisible mais puissant de la transformation des entreprises — intuitive, fiable et profondément alignée sur les besoins réels.",
      "Nous visons à devenir le partenaire de confiance des organisations avant-gardistes pour simplifier la complexité, accélérer l'innovation et débloquer une valeur à long terme grâce au logiciel. Notre objectif n'est pas de créer des applications, mais de créer un avantage.",
    ],
  },
  ja: {
    title: "私たちのビジョン",
    paragraphs: [
      "Onnasoftでは、テクノロジーが目に見えないが強力なビジネス変革の推進力である世界を想像しています — 直感的で信頼性が高く、現実のニーズと深く結びついています。",
      "私たちは、先進的な組織が複雑さを簡素化し、イノベーションを加速し、ソフトウェアを通じて長期的な価値を解放するために信頼できるパートナーになることを目指しています。私たちの目標はアプリを作ることではなく、競争優位を築くことです。",
    ],
  },
  zh: {
    title: "我们的愿景",
    paragraphs: [
      "在Onnasoft，我们设想一个技术是商业转型的无形但强大推动力的世界 — 直观、可靠，并与现实世界需求深度对齐。",
      "我们的目标是成为前瞻性组织信赖的合作伙伴，简化复杂性，加速创新，通过软件释放长期价值。我们的目标不是构建应用程序，而是构建竞争优势。",
    ],
  },
};

interface OurVisionProps {
  language: string;
}

const OurVision = ({ language }: OurVisionProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.title.includes("Vision") ? (
                <>
                  Our <span className="text-primary">Vision</span>
                </>
              ) : (
                t.title
              )}
            </h2>
            {t.paragraphs.map((p, idx) => (
              <p key={idx} className="text-lg text-gray-700 mb-4">
                {p}
              </p>
            ))}
          </div>
          <div className="w-full">
            <Image
              width={600}
              height={400}
              src="/assets/undraw_career-progress_vfq5.png"
              alt="Illustration of our vision"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
