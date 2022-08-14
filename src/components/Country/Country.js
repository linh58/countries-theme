import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-router-dom";
import "./Country.css";

function Country({ label, img, region, population, capital }) {
  const themeContext = useContext(ThemeContext);
  return (
    <Link
      to={`/detail-page/${label}`}
      className={`country-item ${themeContext.handleChangeColor(
        themeContext.theme,
        "country-dark"
      )}`}
    >
      <div className="country-img">
        <img src={img} alt="Flag" />
      </div>
      <div className="country-detail">
        <h3 className="country-name">{label}</h3>
        <p className="country-population">
          <span>Population:</span> {population}
        </p>
        <p className="country-region">
          <span>Region:</span> {region}
        </p>
        <p className="country-capital">
          <span>Capital:</span> {capital}
        </p>
      </div>
    </Link>
  );
}

export default Country;
