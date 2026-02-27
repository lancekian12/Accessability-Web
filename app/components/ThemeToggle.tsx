"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  if (!resolvedTheme) return null; // prevents hydration mismatch safely

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full p-2 border shadow-sm"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}