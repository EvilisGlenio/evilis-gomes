"use client";

import { ExternalLink, TrendingUp, Users, Code, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useDarkMode } from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  results: {
    icon: LucideIcon;
    label: string;
    value: string;
  }[];
}

const projects: Project[] = [
  {
    title: "Nascente",
    description:
      "Aplicação de controle financeiro pessoal com dashboards analíticos interativos e visualização de dados em tempo real.",
    tags: ["Next.js", "MUI", "Prisma", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0NDYwMDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    results: [
      { icon: Users, label: "Usuários Ativos", value: "1.2K+" },
      { icon: TrendingUp, label: "Crescimento", value: "+45%" },
    ],
  },
  {
    title: "AGRO COE",
    description:
      "Sistema de gestão pecuária focado no cálculo de Custo Operacional Efetivo com arquitetura DDD e práticas de Clean Code.",
    tags: ["DDD", "Clean Arch", "PostgreSQL", "React"],
    image:
      "https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0NTE0NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    results: [
      { icon: TrendingUp, label: "Eficiência", value: "+60%" },
      { icon: Code, label: "Cobertura Testes", value: "92%" },
    ],
  },
];

export function ProjectsSectionImproved() {
  const { isDark } = useDarkMode();

  return (
    <section
      id="projetos"
      className={cn(
        "relative py-16 md:py-24 transition-colors duration-300",
        isDark ? "bg-[#1a1a1a]" : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 max-w-[700px] mx-auto text-center">
          <Badge
            className={cn(
              "mb-4 bg-[rgba(91,134,229,0.1)] text-[#5B86E5] font-semibold text-xs tracking-wider"
            )}
          >
            PORTFÓLIO
          </Badge>

          <h2
            className={cn(
              "mb-4 text-3xl font-bold md:text-4xl",
              isDark ? "text-white" : "text-[#212529]"
            )}
          >
            Projetos Selecionados
          </h2>

          <p
            className={cn(
              "text-lg mb-6",
              isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
            )}
          >
            Soluções reais que entreguei para clientes e empresas, com impacto
            mensurável nos resultados de negócio.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 bg-[#5B86E5] rounded-sm" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={cn(
                "group flex h-full flex-col overflow-hidden border rounded-2xl transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
                isDark
                  ? "border-[#2d2d2d] hover:border-[#5B86E5]"
                  : "border-[#E9ECEF] hover:border-[#5B86E5]"
              )}
            >
              {/* Project Image */}
              <div className="relative h-[280px] overflow-hidden bg-[#F8F9FA]">
                <div className="relative h-full w-full">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-image object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
                  />
                </div>

                {/* Color Overlay */}
                <div
                    className={cn(
                      "overlay absolute inset-0 transition-opacity duration-[400ms] ease-in-out group-hover:opacity-30",
                      index === 0
                        ? "bg-gradient-to-br from-[rgba(91,134,229,0.5)] to-[rgba(91,134,229,0.2)] opacity-20"
                        : "bg-gradient-to-br from-[rgba(137,176,174,0.5)] to-[rgba(137,176,174,0.2)] opacity-20"
                    )}
                />

                {/* Project Type Badge */}
                <div
                  className={cn(
                    "absolute top-4 right-4 rounded-lg px-3 py-1.5 text-sm font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
                    isDark ? "bg-[#1a1a1a]" : "bg-white",
                    index === 0 ? "text-[#5B86E5]" : "text-[#89B0AE]"
                  )}
                >
                  {index === 0 ? "Web App" : "Enterprise"}
                </div>
              </div>

              <CardContent className="flex-grow p-6">
                <h3
                  className={cn(
                    "mb-4 text-xl font-bold",
                    isDark ? "text-white" : "text-[#212529]"
                  )}
                >
                  {project.title}
                </h3>

                <p
                  className={cn(
                    "mb-6 leading-relaxed",
                    isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
                  )}
                >
                  {project.description}
                </p>

                {/* Results Grid */}
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {project.results.map((result, idx) => {
                    const Icon = result.icon;
                    return (
                      <div
                        key={idx}
                        className={cn(
                          "rounded-lg p-3 flex items-center gap-3",
                          isDark ? "bg-[#1a1a1a]" : "bg-[#F8F9FA]"
                        )}
                      >
                        <Icon size={16} color="#5B86E5" />
                        <div>
                          <div
                            className={cn(
                              "text-xs mb-0.5",
                              isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
                            )}
                          >
                            {result.label}
                          </div>
                          <div
                            className={cn(
                              "font-bold text-sm",
                              isDark ? "text-white" : "text-[#212529]"
                            )}
                          >
                            {result.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className={cn(
                        "font-medium text-xs",
                        isDark
                          ? "border-[#2d2d2d] text-[#e0e0e0]"
                          : "border-[#DEE2E6] text-[#495057]"
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  variant="ghost"
                  className="text-[#5B86E5] font-semibold hover:bg-[rgba(91,134,229,0.08)]"
                >
                  Ver Estudo de Caso
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "px-8 py-6 transition-colors duration-300",
              isDark
                ? "border-[#2d2d2d] text-[#e0e0e0] hover:border-[#5B86E5] hover:text-[#5B86E5] hover:bg-[rgba(91,134,229,0.03)]"
                : "border-[#E9ECEF] text-[#495057] hover:border-[#5B86E5] hover:text-[#5B86E5] hover:bg-[rgba(91,134,229,0.03)]"
            )}
          >
            Ver todos os projetos
          </Button>
        </div>
      </div>
    </section>
  );
}

