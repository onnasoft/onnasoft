"use server";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LoginPage } from "@/screens/login";
import { suportedLanguages } from "@/types/languages";
import Head from "next/head";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const translations = {
  en: {
    title: "Sign In | Onnasoft",
    description:
      "Sign in to your Onnasoft account to access your dashboard and manage your projects.",
  },
  es: {
    title: "Iniciar sesión | Onnasoft",
    description:
      "Inicia sesión en tu cuenta de Onnasoft para acceder a tu panel y gestionar tus proyectos.",
  },
  ja: {
    title: "サインイン | Onnasoft",
    description:
      "Onnasoftアカウントにサインインして、ダッシュボードにアクセスし、プロジェクトを管理します。",
  },
  fr: {
    title: "Connexion | Onnasoft",
    description:
      "Connectez-vous à votre compte Onnasoft pour accéder à votre tableau de bord et gérer vos projets.",
  },
  zh: {
    title: "登录 | Onnasoft",
    description: "登录您的Onnasoft账户以访问您的仪表板并管理您的项目。",
  },
};

interface SignInPageProps {
  readonly params: Promise<{
    lang: string;
  }>;
}

export default async function SignInPage({ params }: SignInPageProps) {
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
        <LoginPage language={language} />

        <Footer language={language} />
      </main>
    </div>
  );
}
