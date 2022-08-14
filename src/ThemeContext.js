import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleChangeColor = (theme, className) => {
    if (theme === "dark") {
      return className;
    } else return "";
  };

  const value = {
    theme,
    toggleTheme,
    handleChangeColor,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
