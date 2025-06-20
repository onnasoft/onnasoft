import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurCoreValues from "@/components/OurCoreValues";
import OurImpactGoals from "@/components/OurImpactGoals";
import OurVision from "@/components/OurVision";
import WhatWeDo from "@/components/WhatWeDo";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface VisionProps {
  readonly params: Promise<{
    lang: string;
  }>;
}

export default async function Vision({ params }: VisionProps) {
  const h = await headers();
  const acceptLanguage = h.get("accept-language")?.split(",")[0];
  const lang = (await params).lang || acceptLanguage || "en";

  if (!suportedLanguages.includes(lang)) {
    redirect(`/en/${lang}`);
  }
  const language = lang.toLowerCase();

  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} pathname={pathname} />
      <main className="pt-16 animate-fade-in-down">
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
