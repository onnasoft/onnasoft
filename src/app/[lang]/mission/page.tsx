import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MakingProjectsReal from "@/components/MakingYourProjects";
import Navbar from "@/components/Navbar";
import OurCommitmentToYou from "@/components/OurCommitmentToYou";
import OurJourney from "@/components/OurJourney";
import OurMission from "@/components/OurMission";
import { suportedLanguages } from "@/types/languages";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface MissionProps {
  readonly params: Promise<{
    lang: string;
  }>;
}

export default async function Mission({ params }: MissionProps) {
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
        <MakingProjectsReal language={language} />

        <OurMission language={language} />

        <OurJourney language={language} />

        <OurCommitmentToYou language={language} />

        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
