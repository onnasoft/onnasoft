interface OurJourneyProps {
  language: string;
}

const translations = {
  en: {
    title: "Our Journey",
    intro:
      "From our humble beginnings to where we are today, our journey has been defined by growth, learning, and a relentless pursuit of excellence.",
    stages: [
      {
        title: "Foundation",
        desc: "Onnasoft was founded with a vision to make technology accessible and impactful for businesses of all sizes. We started with a small team of passionate developers committed to excellence.",
      },
      {
        title: "Growth & Expansion",
        desc: "As our reputation for quality and reliability grew, so did our team and client base. We expanded our services to include a wider range of technologies and industries, always maintaining our commitment to excellence.",
      },
      {
        title: "Innovation Hub",
        desc: "Today, Onnasoft stands as an innovation hub where creativity meets technical expertise. We've successfully delivered over 50 projects across various sectors, helping our clients achieve their digital transformation goals.",
      },
      {
        title: "Looking Forward",
        desc: "As we look to the future, we remain committed to our mission of making your projects real. We continue to invest in emerging technologies and talent development to ensure we can meet the evolving needs of our clients.",
      },
    ],
  },
  es: {
    title: "Nuestra Trayectoria",
    intro:
      "Desde nuestros humildes comienzos hasta donde estamos hoy, nuestra trayectoria ha estado marcada por el crecimiento, el aprendizaje y una búsqueda constante de la excelencia.",
    stages: [
      {
        title: "Fundación",
        desc: "Onnasoft fue fundada con la visión de hacer que la tecnología sea accesible y tenga impacto para empresas de todos los tamaños. Comenzamos con un pequeño equipo de desarrolladores apasionados por la excelencia.",
      },
      {
        title: "Crecimiento y Expansión",
        desc: "A medida que crecía nuestra reputación por la calidad y confiabilidad, también lo hacía nuestro equipo y base de clientes. Ampliamos nuestros servicios para incluir más tecnologías e industrias, manteniendo siempre nuestro compromiso con la excelencia.",
      },
      {
        title: "Centro de Innovación",
        desc: "Hoy, Onnasoft es un centro de innovación donde la creatividad se encuentra con la experiencia técnica. Hemos entregado con éxito más de 50 proyectos en diversos sectores, ayudando a nuestros clientes a lograr sus objetivos de transformación digital.",
      },
      {
        title: "Mirando al Futuro",
        desc: "Mirando hacia el futuro, seguimos comprometidos con nuestra misión de hacer realidad tus proyectos. Continuamos invirtiendo en tecnologías emergentes y en el desarrollo de talento para satisfacer las necesidades cambiantes de nuestros clientes.",
      },
    ],
  },
  fr: {
    title: "Notre Parcours",
    intro:
      "De nos débuts modestes à ce que nous sommes aujourd'hui, notre parcours a été marqué par la croissance, l'apprentissage et une quête constante d'excellence.",
    stages: [
      {
        title: "Fondation",
        desc: "Onnasoft a été fondée avec pour vision de rendre la technologie accessible et percutante pour les entreprises de toutes tailles. Nous avons commencé avec une petite équipe de développeurs passionnés par l'excellence.",
      },
      {
        title: "Croissance et Expansion",
        desc: "Alors que notre réputation de qualité et de fiabilité grandissait, notre équipe et notre base de clients aussi. Nous avons élargi nos services à un éventail plus large de technologies et de secteurs.",
      },
      {
        title: "Pôle d’Innovation",
        desc: "Aujourd'hui, Onnasoft est un pôle d'innovation où la créativité rencontre l'expertise technique. Nous avons mené à bien plus de 50 projets, aidant nos clients à réussir leur transformation numérique.",
      },
      {
        title: "Vers l’Avenir",
        desc: "En regardant vers l'avenir, nous restons engagés à réaliser vos projets. Nous continuons d'investir dans les technologies émergentes et le développement des talents pour répondre aux besoins de nos clients.",
      },
    ],
  },
  ja: {
    title: "私たちの歩み",
    intro:
      "謙虚な始まりから現在に至るまで、私たちの歩みは成長、学び、そして卓越性を追求する姿勢によって定義されてきました。",
    stages: [
      {
        title: "創業",
        desc: "Onnasoftは、あらゆる規模の企業にとってテクノロジーを身近で影響力のあるものにするというビジョンのもとに設立されました。情熱を持った少数の開発者チームからスタートしました。",
      },
      {
        title: "成長と拡大",
        desc: "品質と信頼性への評判が高まるにつれ、チームとクライアントも増加しました。より幅広い技術と業界にサービスを拡大しながら、常に卓越性を追求してきました。",
      },
      {
        title: "イノベーション拠点",
        desc: "現在のOnnasoftは、創造性と技術的専門知識が融合するイノベーションの拠点です。さまざまな業界で50件以上のプロジェクトを成功させ、デジタル変革を支援しています。",
      },
      {
        title: "未来への展望",
        desc: "これからも私たちは『あなたのプロジェクトを現実にする』という使命に忠実であり続けます。新技術や人材育成への投資を続け、変化するニーズに応えます。",
      },
    ],
  },
  zh: {
    title: "我们的历程",
    intro:
      "从最初的起步到如今的成就，我们的历程一直是成长、学习与对卓越不懈追求的体现。",
    stages: [
      {
        title: "创立",
        desc: "Onnasoft 创立之初的愿景是让技术变得触手可及，并为各类企业创造真正的影响力。我们由一支致力于卓越的小团队开始。",
      },
      {
        title: "发展与扩张",
        desc: "随着我们在质量与可靠性方面的声誉不断提升，我们的团队和客户基础也不断扩大，服务涵盖更多技术与行业。",
      },
      {
        title: "创新中心",
        desc: "如今的 Onnasoft 是一个创新中心，融合了创造力与技术专长。我们已成功交付 50 多个项目，帮助客户实现数字化转型目标。",
      },
      {
        title: "展望未来",
        desc: "面向未来，我们仍将秉持使命，帮助客户实现项目落地。我们将持续投资于新兴技术和人才培养，以满足不断变化的客户需求。",
      },
    ],
  },
};

const OurJourney = ({ language }: OurJourneyProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
            <p className=" text-gray-600 max-w-3xl mx-auto">{t.intro}</p>
          </div>

          <div className="timeline-container space-y-16">
            {t.stages.map((stage, index) => (
              <div className="timeline-item" key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:text-right md:pr-12">
                        <h3 className="text-xl font-bold mb-2">
                          {stage.title}
                        </h3>
                        <p className="text-gray-600">{stage.desc}</p>
                      </div>
                      <div className="md:pl-12" />
                    </>
                  ) : (
                    <>
                      <div className="md:text-right md:pr-12 md:order-1 order-2" />
                      <div className="md:pl-12 md:order-2 order-1">
                        <h3 className="text-xl font-bold mb-2">
                          {stage.title}
                        </h3>
                        <p className="text-gray-600">{stage.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
