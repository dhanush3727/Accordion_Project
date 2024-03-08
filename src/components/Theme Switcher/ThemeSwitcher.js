import React from "react";
import "./ThemeSwitcher.css";
import useLocalStorage from "./useLocalStorage";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div className="theme-switcher" data-theme={theme}>
      <div className="theme-container">
        <p>Hello World!</p>
        <button onClick={handleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
