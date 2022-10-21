import { ThemeContext, themes } from "../../../contexts/ThemeContext";
import { useState } from "react";
import "./Toggle.scss";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Consumer>
      {({ changeTheme }) => (
        <div
          className="toggle app-button"
          onClick={() => {
            setDarkMode(!darkMode);
            changeTheme(darkMode ? themes.light : themes.dark);
          }}
        >
          {darkMode ? "🌤️" : "🌙"}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Toggle;
