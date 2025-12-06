"use client";

import { Code2, TrendingUp, Target, LucideIcon } from "lucide-react";
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
    title: "Foco em Qualidade",
    description:
      "Código legível pensado para humanos, não apenas para máquinas.",
  },
  {
    icon: TrendingUp,
    title: "Aprendizado Acelerado",
    description:
      "Evolução constante através de cursos e prática diária.",
  },
  {
    icon: Target,
    title: "Visão de Produto",
    description:
      "Entendo o código como uma ferramenta para alavancar negócios.",
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
              Mais que código, soluções.
            </h2>

            <p
              className={cn(
                "mb-6 text-lg leading-relaxed",
                isDark ? "text-[#b0b0b0]" : "text-[#495057]"
              )}
            >
              Olá, sou <strong>Evilis Gomes</strong>. Minha jornada na tecnologia começou em 2023 e, desde então, mergulhei fundo no ecossistema JavaScript/TypeScript.
            </p>
            <p
              className={cn(
                "mb-6 text-lg leading-relaxed",
                isDark ? "text-[#b0b0b0]" : "text-[#495057]"
              )}
            >
              Atualmente, atuo como <strong>Desenvolvedor Full-Stack</strong>, onde combino a criatividade do Front-end com a lógica estruturada do Back-end. Não acredito apenas em escrever linhas de código, mas em criar arquiteturas que facilitem a vida do usuário e o crescimento do negócio.
            </p>
            <p
              className={cn(
                "text-lg leading-relaxed",
                isDark ? "text-[#b0b0b0]" : "text-[#495057]"
              )}
            >
              Nos meus projetos atuais, como o <strong className="text-[#5B86E5]">Nascente</strong> e o <strong className="text-[#5B86E5]">AGRO COE</strong>, aplico rigorosamente princípios de Clean Code e Arquitetura Limpa, garantindo que o software cresça saudável e sustentável. Estou sempre buscando o próximo nível de desafio.
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

