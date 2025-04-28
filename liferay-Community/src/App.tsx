import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes/lightheme";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./global";
import { darkTheme } from "./styles/themes/darktheme";
import { useThemeContext } from "./context/ThemeContext";

export function App() {
  const { theme } = useThemeContext();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}