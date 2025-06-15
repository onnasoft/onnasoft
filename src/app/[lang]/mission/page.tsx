import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MakingProjectsReal from "@/components/MakingYourProjects";
import Navbar from "@/components/Navbar";
import OurCommitmentToYou from "@/components/OurCommitmentToYou";
import OurJourney from "@/components/OurJourney";
import OurVisionValues from "@/components/OurVisionValues";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const metadataByLang = {
  en: {
    title: "Onnasoft | Our Mission",
    description:
      "At Onnasoft, our mission is to transform your ideas into tangible digital solutions that drive real business value.",
  },
  es: {
    title: "Onnasoft | Nuestra Misión",
    description:
      "En Onnasoft, nuestra misión es transformar tus ideas en soluciones digitales tangibles que generen un valor real para tu negocio.",
  },
  ja: {
    title: "Onnasoft | 私たちの使命",
    description:
      "Onnasoftでは、あなたのアイデアを実際のビジネス価値を生み出す具体的なデジタルソリューションに変えることを使命としています。",
  },
  fr: {
    title: "Onnasoft | Notre Mission",
    description:
      "Chez Onnasoft, notre mission est de transformer vos idées en solutions numériques concrètes qui apportent une valeur réelle à votre entreprise.",
  },
  zh: {
    title: "Onnasoft | 我们的使命",
    description:
      "在Onnasoft，我们的使命是将您的想法转化为实际的数字解决方案，为您的业务带来真正的价值。",
  },
};

interface MissionProps {
  readonly params: Promise<{
    lang: string;
  }>;
}

export default async function Mission({ params }: MissionProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";
  const language = Object.keys(metadataByLang).includes(lang) ? lang : "en";

  if (!language) {
    redirect(`/en`);
  }

  const t =
    metadataByLang[language as keyof typeof metadataByLang] ||
    metadataByLang.en;

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} />
      <main className="pt-16">
        <MakingProjectsReal language={language} />

        <OurVisionValues language={language} />

        <OurJourney language={language} />

        <OurCommitmentToYou language={language} />

        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
