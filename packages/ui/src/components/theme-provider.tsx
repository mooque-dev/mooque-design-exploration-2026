"use client";

import * as React from "react";

type Theme = "light" | "dark" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  projectTheme?: string;
}

interface ThemeProviderState {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  projectTheme: string | null;
  setTheme: (theme: Theme) => void;
  setProjectTheme: (projectTheme: string | null) => void;
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(
  undefined
);

function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "mooque-theme",
  projectTheme: initialProjectTheme,
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [projectTheme, setProjectTheme] = React.useState<string | null>(
    initialProjectTheme ?? null
  );
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(
    "light"
  );

  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null;
    if (stored) {
      setThemeState(stored);
    }
  }, [storageKey]);

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    let resolved: "light" | "dark";
    if (theme === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      resolved = theme;
    }

    root.classList.add(resolved);
    setResolvedTheme(resolved);

    if (projectTheme) {
      root.setAttribute("data-theme", projectTheme);
    } else {
      root.removeAttribute("data-theme");
    }
  }, [theme, projectTheme]);

  React.useEffect(() => {
    if (theme !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      const resolved = e.matches ? "dark" : "light";
      root.classList.add(resolved);
      setResolvedTheme(resolved);
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setThemeState(newTheme);
    },
    [storageKey]
  );

  const value = React.useMemo(
    () => ({
      theme,
      resolvedTheme,
      projectTheme,
      setTheme,
      setProjectTheme,
    }),
    [theme, resolvedTheme, projectTheme, setTheme]
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
export type { Theme, ThemeProviderProps };
