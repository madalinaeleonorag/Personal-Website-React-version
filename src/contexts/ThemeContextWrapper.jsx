import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./ThemeContext";

const ThemeContextWrapper = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document
          .querySelector(":root")
          .style.setProperty("--lightgray", "#fcdede");
        document.querySelector(":root").style.setProperty("--white", "#000");
        document
          .querySelector(":root")
          .style.setProperty("--darkPlum", "#efeaee");
        document
          .querySelector(":root")
          .style.setProperty("--background", "#ffffff");
        break;
      case themes.dark:
      default:
        document.querySelector(":root").removeAttribute("style");

        break;
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContextWrapper;
