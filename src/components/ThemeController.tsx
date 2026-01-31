"use client";

import { useEffect, useState } from "react";

export function ThemeController({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // You can read from localStorage, system preference, etc.
  useEffect(() => {
    if (!mounted) return;

    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      }
    }
  }, [mounted]);

  // Optional: avoid flash
  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
