"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      suppressHydrationWarning
      className={`w-10 h-10 rounded-full border ${
        theme === "dark" ? "border-white" : "border-black"
      } flex items-center justify-center shadow-lg shadow-black/25`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <FaSun
        size={20}
        className="transition-all duration-200 absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />

      <FaMoon
        size={20}
        className="transition-all duration-200 absolute rotate-90 scale-0 dark:-rotate-0 dark:scale-100"
      />
    </button>
  );
}
