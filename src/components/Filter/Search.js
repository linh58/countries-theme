import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./Filter.css";

function Search({ search, setSearch }) {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={`input-container ${themeContext.handleChangeColor(
        themeContext.theme,
        "input-dark"
      )}`}
    >
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country..."
        className={`${themeContext.handleChangeColor(
          themeContext.theme,
          "color-input-dark"
        )}`}
      />
    </div>
  );
}

export default Search;
