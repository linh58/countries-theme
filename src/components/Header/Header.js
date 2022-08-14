import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./Header.css";

function Header() {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={`header ${themeContext.handleChangeColor(
        themeContext.theme,
        "header-dark"
      )}`}
    >
      <div className="header-container">
        <h2>Where in the world?</h2>
        <p className="toggle-theme" onClick={themeContext.toggleTheme}>
          <i className="fa-solid fa-moon"></i>
          <span>Dark Mode</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
