"use server";

import ClientTypes from "@/components/ClientTypes";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";
import Head from "next/head";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const metadataByLang = {
  en: {
    title: "Onnasoft | Smart Digital Solutions",
    description:
      "We turn ideas into scalable digital products. Web development, backend, DevOps, and AI-powered solutions.",
  },
  es: {
    title: "Onnasoft | Soluciones digitales inteligentes",
    description:
      "Convertimos ideas en productos digitales escalables. Desarrollo web, backend, DevOps y soluciones con IA.",
  },
  ja: {
    title: "Onnasoft | スマートデジタルソリューション",
    description:
      "アイデアをスケーラブルなデジタル製品に変換します。ウェブ開発、バックエンド、DevOps、AIソリューション。",
  },
  fr: {
    title: "Onnasoft | Solutions numériques intelligentes",
    description:
      "Nous transformons les idées en produits numériques évolutifs. Développement web, backend, DevOps et solutions IA.",
  },
  zh: {
    title: "Onnasoft | 智能数字解决方案",
    description:
      "将创意转化为可扩展的数字产品。网页开发、后端、DevOps 和 AI 解决方案。",
  },
};

interface HomeProps {
  readonly params: Promise<{
    lang: string;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";

  if (!Object.keys(metadataByLang).includes(lang)) {
    redirect(`/en/${lang}`);
  }
  const language = lang.toLowerCase();

  const { title, description } =
    metadataByLang[language as keyof typeof metadataByLang] ||
    metadataByLang.en;

  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar pathname={pathname} language={language} />
      <main>
        <Hero language={language} />
        <Services language={language} />
        <Mission language={language} />
        <WhyChooseUs language={language} />
        <WorkProcess language={language} />
        <TechStack language={language} />
        <Projects language={language} />
        <ClientTypes language={language} />
        <Testimonials language={language} />
        <FAQ language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
