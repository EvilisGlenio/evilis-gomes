import { Header } from "@/components/Header";
import { HeroSectionImproved } from "@/components/HeroSectionImproved";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSectionImproved />
        <section id="projetos" className="min-h-screen">
          {/* ProjectsSectionImproved será adicionado aqui */}
        </section>
        <section id="sobre" className="min-h-screen">
          {/* AboutSectionDark será adicionado aqui */}
        </section>
        <section id="contato" className="min-h-screen">
          {/* ContactSectionDark será adicionado aqui */}
        </section>
      </main>
    </div>
  );
}
