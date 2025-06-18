import { FaStar, FaHandshake, FaLightbulb } from "react-icons/fa";

interface VisionValuesProps {
  language: string;
}

const translations = {
  en: {
    title: "Our Vision & Values",
    intro:
      "Our vision is to be the trusted technology partner that empowers businesses to thrive in the digital age. These core values guide everything we do:",
    values: [
      {
        title: "Excellence",
        desc: "We strive for excellence in everything we do, from code quality to client communication. We're not satisfied with “good enough” – we aim for exceptional.",
      },
      {
        title: "Collaboration",
        desc: "We believe in the power of partnership. By working closely with our clients and understanding their unique challenges, we create solutions that truly make a difference.",
      },
      {
        title: "Innovation",
        desc: "We embrace change and continuously seek new ways to solve problems. Our commitment to innovation ensures that our clients stay ahead in a rapidly evolving digital landscape.",
      },
    ],
  },
  es: {
    title: "Nuestra Visión y Valores",
    intro:
      "Nuestra visión es ser el socio tecnológico de confianza que potencia a las empresas para prosperar en la era digital. Estos valores fundamentales guían todo lo que hacemos:",
    values: [
      {
        title: "Excelencia",
        desc: "Nos esforzamos por la excelencia en todo lo que hacemos, desde la calidad del código hasta la comunicación con el cliente. No nos conformamos con “suficiente”, aspiramos a lo excepcional.",
      },
      {
        title: "Colaboración",
        desc: "Creemos en el poder de la colaboración. Al trabajar estrechamente con nuestros clientes y comprender sus desafíos, creamos soluciones que realmente hacen la diferencia.",
      },
      {
        title: "Innovación",
        desc: "Abrazamos el cambio y buscamos continuamente nuevas formas de resolver problemas. Nuestro compromiso con la innovación asegura que nuestros clientes se mantengan a la vanguardia en un entorno digital en constante evolución.",
      },
    ],
  },
  fr: {
    title: "Notre Vision et Valeurs",
    intro:
      "Notre vision est d'être le partenaire technologique de confiance qui permet aux entreprises de prospérer à l'ère du numérique. Ces valeurs fondamentales guident tout ce que nous faisons :",
    values: [
      {
        title: "Excellence",
        desc: "Nous visons l’excellence dans tout ce que nous faisons, de la qualité du code à la communication client. Nous ne nous contentons pas du “suffisant” – nous visons l’exceptionnel.",
      },
      {
        title: "Collaboration",
        desc: "Nous croyons au pouvoir du partenariat. En travaillant étroitement avec nos clients et en comprenant leurs défis, nous créons des solutions qui font vraiment la différence.",
      },
      {
        title: "Innovation",
        desc: "Nous embrassons le changement et cherchons constamment de nouvelles façons de résoudre les problèmes. Notre engagement pour l'innovation garantit à nos clients de rester en tête dans un paysage numérique en évolution rapide.",
      },
    ],
  },
  ja: {
    title: "私たちのビジョンと価値",
    intro:
      "私たちのビジョンは、企業がデジタル時代に繁栄するための信頼されるテクノロジーパートナーになることです。これらの基本的な価値観が私たちのすべての行動を導きます：",
    values: [
      {
        title: "卓越性",
        desc: "私たちはコード品質からクライアントとのコミュニケーションに至るまで、すべてにおいて卓越性を追求します。「十分」では満足せず、卓越を目指します。",
      },
      {
        title: "協力",
        desc: "私たちは協力の力を信じています。クライアントと密接に連携し、彼らの課題を理解することで、真に変化をもたらすソリューションを作り出します。",
      },
      {
        title: "革新",
        desc: "私たちは変化を受け入れ、問題を解決するための新しい方法を常に模索しています。革新へのコミットメントが、クライアントを急速に進化するデジタル環境の最前線に立たせます。",
      },
    ],
  },
  zh: {
    title: "我们的愿景与价值观",
    intro:
      "我们的愿景是成为值得信赖的技术合作伙伴，助力企业在数字时代蓬勃发展。这些核心价值引导着我们所做的一切：",
    values: [
      {
        title: "卓越",
        desc: "我们致力于在所有工作中追求卓越，从代码质量到与客户的沟通。我们不满足于“够用”，而是追求卓越。",
      },
      {
        title: "协作",
        desc: "我们相信合作的力量。通过与客户紧密合作并理解他们的挑战，我们创造出真正有影响力的解决方案。",
      },
      {
        title: "创新",
        desc: "我们拥抱变化，不断探索解决问题的新方法。我们的创新承诺确保客户在快速变化的数字环境中保持领先。",
      },
    ],
  },
};

const icons = [FaStar, FaHandshake, FaLightbulb];

const OurMission = ({ language }: VisionValuesProps) => {
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">{t.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.values.map((val, idx) => {
              const Icon = icons[idx];
              return (
                <div className="card text-center" key={val.title}>
                  <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-6 mx-auto">
                    <Icon className="text-white text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
