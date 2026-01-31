// src/components/HydrationFix.tsx
"use client";

import { useEffect } from "react";

export default function HydrationFix() {
  useEffect(() => {
    if (document.body.hasAttribute("cz-shortcut-listen")) {
      document.body.removeAttribute("cz-shortcut-listen");
    }
  }, []);

  return null;
}
