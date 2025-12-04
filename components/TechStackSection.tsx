"use client";

import {
  Code2,
  Database,
  Layout,
  Palette,
  GitBranch,
  Cloud,
  Smartphone,
  TestTube,
  LucideIcon,
} from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";

interface TechCategory {
  category: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  technologies: string[];
}

const techStack: TechCategory[] = [
  {
    category: "Frontend",
    icon: Code2,
    color: "#5B86E5",
    bgColor: "rgba(91, 134, 229, 0.1)",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    category: "UI/UX",
    icon: Palette,
    color: "#89B0AE",
    bgColor: "rgba(137, 176, 174, 0.1)",
    technologies: ["Material UI", "Tailwind CSS", "Styled Components", "Figma"],
  },
  {
    category: "Backend",
    icon: Database,
    color: "#5B86E5",
    bgColor: "rgba(91, 134, 229, 0.1)",
    technologies: ["Node.js", "Prisma", "PostgreSQL", "REST APIs"],
  },
//   {
//     category: "Arquitetura",
//     icon: Layout,
//     color: "#89B0AE",
//     bgColor: "rgba(137, 176, 174, 0.1)",
//     technologies: ["Clean Architecture", "DDD", "SOLID", "Design Patterns"],
//   },
//   {
//     category: "DevOps",
//     icon: Cloud,
//     color: "#5B86E5",
//     bgColor: "rgba(91, 134, 229, 0.1)",
//     technologies: ["Git", "Docker", "CI/CD", "Vercel"],
//   },
//   {
//     category: "Mobile",
//     icon: Smartphone,
//     color: "#89B0AE",
//     bgColor: "rgba(137, 176, 174, 0.1)",
//     technologies: ["React Native", "PWA", "Responsive Design", "Mobile-First"],
//   },
  {
    category: "Versionamento",
    icon: GitBranch,
    color: "#5B86E5",
    bgColor: "rgba(91, 134, 229, 0.1)",
    technologies: ["Git", "GitHub", "GitFlow", "Code Review"],
  },
//   {
//     category: "Testes",
//     icon: TestTube,
//     color: "#89B0AE",
//     bgColor: "rgba(137, 176, 174, 0.1)",
//     technologies: ["Jest", "Testing Library", "Unit Tests", "Integration Tests"],
//   },
];

export function TechStackSection() {
  const { isDark } = useDarkMode();

  return (
    <section
      className={cn(
        "py-16 md:py-24 transition-colors duration-300",
        isDark ? "bg-[#1a1a1a]" : "bg-[#F8F9FA]"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 max-w-[700px] mx-auto text-center">
          <h2
            className={cn(
              "mb-4 text-3xl font-bold md:text-4xl",
              isDark ? "text-white" : "text-[#212529]"
            )}
          >
            Stack Tecnológico
          </h2>
          <p
            className={cn(
              "text-lg mb-6",
              isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
            )}
          >
            Ferramentas e tecnologias que domino para entregar soluções robustas
            e escaláveis.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-[#5B86E5] rounded-sm" />
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className={cn(
                  "rounded-xl p-6 h-full border transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1",
                  isDark
                    ? "bg-[#1a1a1a] border-[#2d2d2d] hover:border-[#5B86E5]"
                    : "bg-white border-[#E9ECEF] hover:border-[#5B86E5]"
                )}
                style={{
                  borderColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tech.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isDark ? "#2d2d2d" : "#E9ECEF";
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: tech.bgColor }}
                >
                  <Icon size={24} color={tech.color} />
                </div>

                {/* Category */}
                <h3
                  className={cn(
                    "mb-4 text-lg font-semibold",
                    isDark ? "text-white" : "text-[#212529]"
                  )}
                >
                  {tech.category}
                </h3>

                {/* Technologies List */}
                <ul className="m-0 p-0 list-none flex flex-col gap-2">
                  {tech.technologies.map((item, idx) => (
                    <li
                      key={idx}
                      className={cn(
                        "text-sm flex items-center gap-2",
                        isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
                      )}
                    >
                      <span
                        className="font-bold text-lg"
                        style={{ color: tech.color }}
                      >
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={cn(
            "mt-16 text-center rounded-2xl p-8 border",
            isDark
              ? "bg-[#1a1a1a] border-[#2d2d2d]"
              : "bg-white border-[#E9ECEF]"
          )}
        >
          <h3
            className={cn(
              "mb-3 text-xl font-semibold",
              isDark ? "text-white" : "text-[#212529]"
            )}
          >
            Sempre aprendendo e evoluindo
          </h3>
          <p
            className={cn(
              "text-base max-w-[600px] mx-auto",
              isDark ? "text-[#b0b0b0]" : "text-[#6C757D]"
            )}
          >
            Mantenho-me atualizado com as últimas tendências e melhores práticas
            do desenvolvimento web, participando de comunidades e cursos
            especializados.
          </p>
        </div>
      </div>
    </section>
  );
}

