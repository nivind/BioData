// app/layout.tsx
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono"; // ← this is the correct path!

import "./globals.css";
import { ThemeProvider } from "next-themes";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivin - Marriage Biodata",
  description: "...",
  icons: {
    icon: [
      "/icon.png", // ← no /public prefix needed!
      "/favicon.ico", // fallback
    ],
    // Optional: better control
    // shortcut: '/LogoPage.png',
    // apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-white! dark:bg-zinc-900! text-zinc-900 dark:text-zinc-50`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
