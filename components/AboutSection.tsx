"use client";

import { Code2, Layers, Users, LucideIcon } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Código limpo, legível e manutenível seguindo as melhores práticas da indústria.",
  },
  {
    icon: Layers,
    title: "Architecture",
    description:
      "Arquiteturas escaláveis com Domain-Driven Design e separação de responsabilidades.",
  },
  {
    icon: Users,
    title: "UX Focus",
    description:
      "Interfaces intuitivas que colocam a experiência do usuário em primeiro lugar.",
  },
];

export function AboutSection() {
  const { isDark } = useDarkMode();

  return (
    <section
      id="sobre"
      className={cn(
        "py-16 md:py-24 transition-colors duration-300",
        isDark ? "bg-[#1a1a1a]" : "bg-[#F8F9FA]"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column - Title and Description */}
          <div>
            <h2
              className={cn(
                "mb-8 text-3xl font-bold md:text-4xl",
                isDark ? "text-white" : "text-[#212529]"
              )}
            >
              Sobre Mim
            </h2>

            <p
              className={cn(
                "mb-6 text-lg leading-relaxed",
                isDark ? "text-[#b0b0b0]" : "text-[#495057]"
              )}
            >
              Olá, sou um <strong>Desenvolvedor Front-End</strong> apaixonado
              por transformar ideias complexas em interfaces funcionais.
            </p>
            <p
              className={cn(
                "mb-6 text-lg leading-relaxed",
                isDark ? "text-[#b0b0b0]" : "text-[#495057]"
              )}
            >
              Em projetos como{" "}
              <strong className="text-[#5B86E5]">Nascente</strong> e{" "}
              <strong className="text-[#5B86E5]">AGRO COE</strong>, foco na
              aplicação de princípios como Clean Code e Domain-Driven Design
              (DDD) para garantir manutenibilidade.
            </p>
            <p
              className={cn(
                "text-lg leading-relaxed",
                isDark ? "text-[#b0b0b0]" : "text-[#495057]"
              )}
            >
              Meu objetivo é criar produtos digitais que não apenas funcionam
              perfeitamente, mas que também proporcionam experiências
              memoráveis aos usuários.
            </p>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="flex flex-col gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "flex gap-4 p-6 rounded-xl border transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:translate-x-2",
                    isDark
                      ? "bg-[#1a1a1a] border-[#2d2d2d]"
                      : "bg-white border-[#E9ECEF]"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                      index === 1
                        ? "bg-[rgba(137,176,174,0.1)]"
                        : "bg-[rgba(91,134,229,0.1)]"
                    )}
                  >
                    <Icon
                      size={24}
                      color={index === 1 ? "#89B0AE" : "#5B86E5"}
                    />
                  </div>

                  <div>
                    <h3
                      className={cn(
                        "mb-2 text-lg font-semibold",
                        isDark ? "text-white" : "text-[#212529]"
                      )}
                    >
                      {skill.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-relaxed",
                        isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
                      )}
                    >
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

