"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useDarkMode() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    isDark: mounted ? isDark : false,
    toggle,
    theme,
    setTheme,
  };
}

