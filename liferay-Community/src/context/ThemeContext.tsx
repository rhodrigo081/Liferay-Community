import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeContextProvider({ children }: { children: ReactNode }) {

  /**
   * Estado que armazena o tema atual da aplicação.
   * O valor inicial é recuperado do localStorage, se disponível;
   * caso contrário, utiliza-se o tema escuro como padrão.
   */
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    return storedTheme || "dark"
  });
  
  
  /**
   * Alterna o tema da aplicação entre claro e escuro.
   * Atualiza tanto o estado interno quanto o valor persistido no localStorage.
   */
  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}