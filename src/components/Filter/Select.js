import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./Filter.css";

function Filter({ handleChangeSelect }) {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={`options-container ${themeContext.handleChangeColor(
        themeContext.theme,
        "options-dark"
      )}`}
    >
      <select
        className={`${themeContext.handleChangeColor(
          themeContext.theme,
          "select-dark"
        )}`}
        onChange={(e) => handleChangeSelect(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
