// src/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for client mount (avoids hydration mismatch on the button itself)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // or a skeleton loader

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-auto w-11 h-11 cursor-pointer p-3 rounded-full bg-gray-200 dark:bg-gray-950 text-gray-800 dark:text-gray-200 shadow-lg "
      aria-label="Toggle dark/light mode"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
