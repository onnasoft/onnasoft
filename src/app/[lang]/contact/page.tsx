"use server";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { suportedLanguages } from "@/types/languages";
import Head from "next/head";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const translations = {
  en: {
    title: "Contact Us | Onnasoft",
    description:
      "Get in touch with Onnasoft for your digital solutions. We are here to help you with web development, backend, DevOps, and AI-powered solutions.",
  },
  es: {
    title: "Contáctanos | Onnasoft",
    description:
      "Ponte en contacto con Onnasoft para tus soluciones digitales. Estamos aquí para ayudarte con desarrollo web, backend, DevOps y soluciones impulsadas por IA.",
  },
  ja: {
    title: "お問い合わせ | Onnasoft",
    description:
      "Onnasoftにデジタルソリューションについてお問い合わせください。ウェブ開発、バックエンド、DevOps、AIソリューションでお手伝いします。",
  },
  fr: {
    title: "Contactez-nous | Onnasoft",
    description:
      "Contactez Onnasoft pour vos solutions numériques. Nous sommes là pour vous aider avec le développement web, le backend, DevOps et les solutions IA.",
  },
  zh: {
    title: "联系我们 | Onnasoft",
    description:
      "通过 Onnasoft 联系我们以获取您的数字解决方案。我们在这里为您提供网页开发、后端、DevOps 和 AI 解决方案的帮助。",
  },
};

interface PageProps {
  readonly params: { lang: string };
  readonly searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: PageProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";

  if (!suportedLanguages.includes(lang)) {
    redirect(`/en/${lang}`);
  }
  const language = lang.toLowerCase();
  const pathname = h.get("x-pathname") || "";
  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
      </Head>
      <Navbar pathname={pathname} language={language} />
      <main>
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
