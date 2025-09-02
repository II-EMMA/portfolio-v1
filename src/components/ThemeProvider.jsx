// app/layout.tsx or app/providers.tsx
"use client";
import { ThemeProvider } from "next-themes";

export function NextThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem={true}
    >
      {children}
    </ThemeProvider>
  );
}
