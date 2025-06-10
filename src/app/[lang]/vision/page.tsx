import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurCoreValues from "@/components/OurCoreValues";
import OurImpactGoals from "@/components/OurImpactGoals";
import OurVision from "@/components/OurVision";
import WhatWeDo from "@/components/WhatWeDo";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const metadataByLang = {
  en: {
    title: "Onnasoft | Our Vision",
    description:
      "Our vision at Onnasoft is to be the trusted technology partner that empowers businesses to thrive in a digital-first world.",
  },
  es: {
    title: "Onnasoft | Nuestra Visión",
    description:
      "Nuestra visión en Onnasoft es ser el socio tecnológico de confianza que empodera a las empresas para prosperar en un mundo digital.",
  },
  ja: {
    title: "Onnasoft | 私たちのビジョン",
    description:
      "Onnasoftのビジョンは、デジタルファーストの世界で企業が成功するための信頼できるテクノロジーパートナーになることです。",
  },
  fr: {
    title: "Onnasoft | Notre Vision",
    description:
      "Notre vision chez Onnasoft est d'être le partenaire technologique de confiance qui permet aux entreprises de prospérer dans un monde numérique.",
  },
  zh: {
    title: "Onnasoft | 我们的愿景",
    description:
      "Onnasoft的愿景是成为可信赖的技术合作伙伴，帮助企业在数字优先的世界中蓬勃发展。",
  },
};

interface VisionProps {
  readonly params: Promise<{
    lang: string;
  }>;
}

export default async function Vision({ params }: VisionProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";

  if (!Object.keys(metadataByLang).includes(lang)) {
    redirect(`/en/${lang}`);
  }
  const language = lang.toLowerCase();

  const t =
    metadataByLang[language as keyof typeof metadataByLang] ||
    metadataByLang.en;

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} />
      <main>
        <section className="hero-pattern pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{t.description}</p>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
          </div>
        </section>

        <OurVision language={language} />

        <OurCoreValues language={language} />

        <WhatWeDo language={language} />

        <OurImpactGoals language={language} />

        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
