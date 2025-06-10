import Image from "next/image";

const translations = {
  en: {
    title: "Making Your Projects",
    highlight: "Real",
    intro:
      "At Onnasoft, our mission is simple yet powerful: to transform your ideas into tangible digital solutions that drive real business value. We believe that technology should be an enabler, not a barrier, to your success.",
    body: "We are committed to delivering innovative, high-quality software solutions that not only meet but exceed our clients' expectations. Through collaboration, expertise, and a deep understanding of business challenges, we help organizations of all sizes harness the power of technology to achieve their goals.",
  },
  es: {
    title: "Haciendo Tus Proyectos",
    highlight: "Reales",
    intro:
      "En Onnasoft, nuestra misión es simple pero poderosa: transformar tus ideas en soluciones digitales tangibles que generen un verdadero valor de negocio. Creemos que la tecnología debe ser un facilitador, no una barrera para tu éxito.",
    body: "Nos comprometemos a ofrecer soluciones de software innovadoras y de alta calidad que no solo cumplan, sino que superen las expectativas de nuestros clientes. A través de la colaboración, la experiencia y una comprensión profunda de los desafíos empresariales, ayudamos a organizaciones de todos los tamaños a aprovechar el poder de la tecnología para alcanzar sus objetivos.",
  },
  fr: {
    title: "Réaliser Vos Projets",
    highlight: "Concrètement",
    intro:
      "Chez Onnasoft, notre mission est simple mais puissante : transformer vos idées en solutions numériques tangibles apportant une vraie valeur métier. La technologie doit être un levier, non un obstacle.",
    body: "Nous nous engageons à fournir des solutions logicielles innovantes et de haute qualité qui dépassent les attentes. Grâce à la collaboration, notre expertise et une compréhension approfondie des enjeux, nous aidons les organisations de toutes tailles à atteindre leurs objectifs.",
  },
  ja: {
    title: "あなたのプロジェクトを",
    highlight: "実現",
    intro:
      "Onnasoftでは、私たちの使命はシンプルかつ強力です。それは、あなたのアイデアを現実的なビジネス価値を生むデジタルソリューションに変えることです。テクノロジーは障壁ではなく、成功への手段であるべきです。",
    body: "革新的で高品質なソフトウェアソリューションを提供し、期待を超える成果をお届けします。協力・専門知識・ビジネス課題の深い理解を通じて、あらゆる組織が目標を達成できるよう支援します。",
  },
  zh: {
    title: "让您的项目",
    highlight: "变为现实",
    intro:
      "在Onnasoft，我们的使命既简单又强大：将您的想法转化为具有实际商业价值的数字解决方案。我们相信技术应成为推动成功的助力，而非障碍。",
    body: "我们致力于提供创新且高质量的软件解决方案，不仅满足客户的期望，更要超越。通过协作、专业知识和对业务挑战的深入理解，帮助各类组织实现其目标。",
  },
};

interface MakingProjectsRealProps {
  language: string;
}

const MakingProjectsReal = ({ language }: MakingProjectsRealProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.title} <span className="text-primary">{t.highlight}</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">{t.intro}</p>
            <p className="text-lg text-gray-700">{t.body}</p>
          </div>
          <div className="w-full">
            <Image
              width={600}
              height={270}
              src="/assets/undraw_team-goals_0026.svg"
              alt="Mission illustration"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakingProjectsReal;
