"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDarkMode } from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";

export function Header() {
  const { isDark, toggle } = useDarkMode();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "projetos", label: "Projetos" },
    { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isDark
          ? "bg-[#1a1a1a] border-[#2d2d2d]"
          : "bg-[#F8F9FA] border-[#E9ECEF]"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className={cn(
              "text-xl font-mono cursor-pointer transition-colors duration-300",
              isDark ? "text-white" : "text-[#212529]"
            )}
          >
            {"<Evilis Gomes />"}
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-[#5B86E5]",
                  isDark ? "text-[#e0e0e0]" : "text-[#212529]"
                )}
              >
                {item.label}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggle}
                    className={cn(
                      "transition-all duration-300",
                      isDark
                        ? "text-[#e0e0e0] hover:bg-white/10 hover:text-[#5B86E5]"
                        : "text-[#212529] hover:bg-[#5B86E5]/10 hover:text-[#5B86E5]"
                    )}
                  >
                    {isDark ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isDark ? "Modo Claro" : "Modo Escuro"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Download CV Button */}
            <Button
              variant="outline"
              onClick={() => {
                // TODO: Implementar download do CV
              }}
              className={cn(
                "border-[#5B86E5] text-[#5B86E5] hover:border-[#4a6bc4] hover:bg-[#5B86E5]/5 transition-colors duration-300",
                "px-6"
              )}
            >
              Baixar CV
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

