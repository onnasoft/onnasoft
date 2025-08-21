"use server";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const metadataByLang: Record<
  string,
  {
    title: string;
    description: string;
    openGraph: { title: string; description: string; url: string };
    twitter: { title: string; description: string };
  }
> = {
  en: {
    title: "Contact Us | Onnasoft",
    description:
      "Get in touch with Onnasoft for your digital solutions. We are here to help you with web development, backend, DevOps, and AI-powered solutions.",
    openGraph: {
      title: "Contact Us | Onnasoft",
      description:
        "Reach out to Onnasoft for digital solutions powered by web development, backend, DevOps, and AI.",
      url: "https://onnasoft.us/en/contact",
    },
    twitter: {
      title: "Contact Onnasoft",
      description:
        "Let's talk about your digital solutions: Web, Backend, DevOps, and AI.",
    },
  },
  es: {
    title: "Contáctanos | Onnasoft",
    description:
      "Ponte en contacto con Onnasoft para tus soluciones digitales. Estamos aquí para ayudarte con desarrollo web, backend, DevOps y soluciones impulsadas por IA.",
    openGraph: {
      title: "Contáctanos | Onnasoft",
      description:
        "Habla con Onnasoft sobre soluciones digitales: Web, Backend, DevOps e IA.",
      url: "https://onnasoft.us/es/contact",
    },
    twitter: {
      title: "Contáctanos en Onnasoft",
      description:
        "Soluciones digitales con desarrollo web, backend, DevOps e inteligencia artificial.",
    },
  },
  ja: {
    title: "お問い合わせ | Onnasoft",
    description:
      "Onnasoftにデジタルソリューションについてお問い合わせください。ウェブ開発、バックエンド、DevOps、AIソリューションでお手伝いします。",
    openGraph: {
      title: "お問い合わせ | Onnasoft",
      description:
        "Onnasoftに連絡して、ウェブ、バックエンド、DevOps、AIのデジタルソリューションをご相談ください。",
      url: "https://onnasoft.us/ja/contact",
    },
    twitter: {
      title: "Onnasoftにお問い合わせ",
      description:
        "デジタルソリューション (Web, Backend, DevOps, AI) のご相談はこちら。",
    },
  },
  fr: {
    title: "Contactez-nous | Onnasoft",
    description:
      "Contactez Onnasoft pour vos solutions numériques. Nous sommes là pour vous aider avec le développement web, le backend, DevOps et les solutions IA.",
    openGraph: {
      title: "Contactez-nous | Onnasoft",
      description:
        "Solutions numériques avec développement web, backend, DevOps et intelligence artificielle.",
      url: "https://onnasoft.us/fr/contact",
    },
    twitter: {
      title: "Contactez Onnasoft",
      description:
        "Nous aidons avec vos solutions numériques: Web, Backend, DevOps et IA.",
    },
  },
  zh: {
    title: "联系我们 | Onnasoft",
    description:
      "通过 Onnasoft 联系我们以获取您的数字解决方案。我们在这里为您提供网页开发、后端、DevOps 和 AI 解决方案的帮助。",
    openGraph: {
      title: "联系我们 | Onnasoft",
      description:
        "联系 Onnasoft，获取 Web、后端、DevOps 和 AI 的数字解决方案。",
      url: "https://onnasoft.us/zh/contact",
    },
    twitter: {
      title: "联系 Onnasoft",
      description: "数字解决方案：Web、后端、DevOps 和 AI。",
    },
  },
};

interface PageProps {
  readonly params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";
  const language = suportedLanguages.includes(lang) ? lang : "en";
  return metadataByLang[language] || metadataByLang.en;
}

export default async function Page({ params }: PageProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";

  if (!suportedLanguages.includes(lang)) {
    redirect(`/en/contact`);
  }
  const language = lang.toLowerCase();
  const pathname = h.get("x-pathname") || "";

  return (
    <div className="min-h-screen bg-white">
      <Navbar pathname={pathname} language={language} />
      <main>
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
