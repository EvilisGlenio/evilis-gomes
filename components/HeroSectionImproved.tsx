"use client";

import { TrendingUp, Award, Code2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDarkMode } from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

export function HeroSectionImproved() {
  const { isDark } = useDarkMode();

  const scrollToProjects = () => {
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Calcula os anos de imersão e prática contínua dinamicamente desde 2023
  const yearsOfExperience = useMemo(() => {
    const startDate = new Date(2023, 0, 1); // 01/01/2023 (mês é 0-indexed, então 0 = janeiro)
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - startDate.getTime();
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); // Considera anos bissextos
    const years = Math.max(0, Math.floor(diffYears)); // Garante que não seja negativo
    return `${years}+`;
  }, []);

  const stats = [
    { icon: TrendingUp, value: yearsOfExperience, label: "Anos de Imersão e Prática Contínua" },
    { icon: Code2, value: "7+", label: "Projetos Desenvolvidos" },
    { icon: Award, value: "Full-Stack", label: "Visão completa do Front ao Back-end" },
  ];

  return (
    <section
      id="inicio"
      className={cn(
        "relative flex min-h-[92vh] items-center overflow-hidden pt-16 pb-20 md:pt-20 md:pb-24 transition-colors duration-300",
        isDark ? "bg-[#0f0f0f]" : "bg-[#F8F9FA]"
      )}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-[10%] right-[5%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(91,134,229,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[15%] left-[5%] h-[250px] w-[250px] rounded-full bg-[radial-gradient(circle,rgba(137,176,174,0.08)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column - Text Content */}
          <div className="max-w-[600px]">
            {/* Status Badge */}
            <Badge
              className={cn(
                "mb-6 flex items-center gap-2 border bg-[rgba(16,185,129,0.1)] px-3 py-1 text-[#059669]",
                "border-[rgba(16,185,129,0.2)] font-medium"
              )}
            >
              <div className="h-2 w-2 rounded-full bg-[#10B981]" />
              Disponível para novos projetos
            </Badge>

            <h1
              className={cn(
                "mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
                isDark ? "text-white" : "text-[#212529]"
              )}
            >
              Desenvolvedor Full-Stack focado em transformar ideias em softwares de alto valor.
            </h1>

            <h2
              className={cn(
                "mb-10 text-lg font-normal leading-relaxed md:text-xl",
                isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
              )}
            >
              Especialista em construir aplicações web modernas com Next.js, NestJS e Material UI. Combinando performance técnica com uma visão orientada a negócios.
            </h2>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-[#5B86E5] px-8 py-6 text-lg text-white shadow-[0_4px_14px_rgba(91,134,229,0.25)] transition-all duration-300 hover:bg-[#4a6bc4] hover:shadow-[0_6px_20px_rgba(91,134,229,0.35)] hover:-translate-y-0.5"
              >
                Ver Meu Trabalho
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-[#5B86E5] px-8 py-6 text-lg text-[#5B86E5] transition-all duration-300 hover:border-[#4a6bc4] hover:bg-[rgba(91,134,229,0.05)] hover:-translate-y-0.5"
              >
                Vamos Conversar
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div
                      className={cn(
                        "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg",
                        index === 1
                          ? "bg-[rgba(137,176,174,0.15)]"
                          : "bg-[rgba(91,134,229,0.15)]"
                      )}
                    >
                      <Icon
                        size={24}
                        color={index === 1 ? "#89B0AE" : "#5B86E5"}
                      />
                    </div>
                    <div
                      className={cn(
                        "mb-1 text-2xl font-bold md:text-3xl",
                        isDark ? "text-white" : "text-[#212529]"
                      )}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={cn(
                        "text-sm md:text-base",
                        isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
                      )}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative flex h-[350px] w-full items-center justify-center md:h-[550px]">
            {/* Main Image Container */}
            <div
              className="group relative h-full w-full max-w-[500px] overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-500"
              style={{
                transform: "perspective(1000px) rotateY(-5deg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg)";
              }}
            >
              <div className="relative h-full w-full">
                <Image
                  src="/evilis_developer.png"
                  alt="Evilis Gomes - Desenvolvedor"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  unoptimized
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(91,134,229,0.25)] to-[rgba(137,176,174,0.25)] mix-blend-multiply" />

              {/* Floating Card */}
              <div
                className={cn(
                  "absolute bottom-5 right-5 flex items-center gap-4 rounded-xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)]",
                  isDark ? "bg-[#1a1a1a]" : "bg-white"
                )}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(91,134,229,0.15)]">
                  <Code2 size={20} color="#5B86E5" />
                </div>
                <div>
                  <div
                    className={cn(
                      "text-xs",
                      isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
                    )}
                  >
                    Especialidade
                  </div>
                  <div
                    className={cn(
                      "font-semibold",
                      isDark ? "text-white" : "text-[#212529]"
                    )}
                  >
                    React & Next.js
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -right-2.5 -top-2.5 z-[-1] h-20 w-20 rounded-full bg-[#89B0AE] opacity-15 md:-right-5 md:-top-5 md:h-[120px] md:w-[120px]"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-5 -left-5 z-[-1] h-24 w-24 rounded-[20px] bg-[#5B86E5] opacity-12 md:-bottom-7 md:-left-7 md:h-[150px] md:w-[150px]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

