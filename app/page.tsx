import { Header } from "@/components/Header";
import { HeroSectionImproved } from "@/components/HeroSectionImproved";
import { ProjectsSectionImproved } from "@/components/ProjectsSectionImproved";
import { TechStackSectionDark } from "@/components/TechStackSectionDark";
import { AboutSectionDark } from "@/components/AboutSectionDark";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSectionImproved />
        <ProjectsSectionImproved />
        <TechStackSectionDark />
        <AboutSectionDark />
        <section id="contato" className="min-h-screen">
          {/* ContactSectionDark será adicionado aqui */}
        </section>
      </main>
    </div>
  );
}
