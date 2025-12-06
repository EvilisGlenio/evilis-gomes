"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";

export function Footer() {
  const { isDark } = useDarkMode();

  return (
    <footer
      className={cn(
        "py-8 text-white transition-colors duration-300",
        isDark ? "bg-[#0a0a0a]" : "bg-[#212529]"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="m-0 text-sm opacity-80">
            © {new Date().getFullYear()}{" "}
            <strong>Evilis Gomes</strong>. Desenvolvido com a potência do React e Material UI.
          </p>
        </div>
      </div>
    </footer>
  );
}

