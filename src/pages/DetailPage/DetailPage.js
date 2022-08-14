import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import { Header } from "../../components/Header";
import "./DetailPage.css";
import "../../components/Header/Header.css";

function DetailPage({ countries }) {
  const themeContext = useContext(ThemeContext);
  const { countryName } = useParams();

  const thisCountry = countries.find((item) => {
    const nameKey = Object.keys(item.name).map(function (key) {
      return item.name[key];
    });
    return nameKey[0] === countryName;
  });

  const showLanguages = () => {
    for (const languageKey in thisCountry.languages) {
      return <span>{thisCountry.languages[languageKey]}</span>;
    }
  };

  const showCurrencies = () => {
    for (const currencyKey in thisCountry.currencies) {
      return <span>{thisCountry.currencies[currencyKey].name}</span>;
    }
  };

  const showName = () => {
    const result = Object.keys(thisCountry.name).map(function (key) {
      return thisCountry.name[key];
    });

    return result[0];
  };

  const showNativeName = () => {
    const result = Object.keys(thisCountry.name).map(function (key) {
      return thisCountry.name[key];
    });

    return result[1];
  };

  return thisCountry ? (
    <>
      <Header />
      <div
        className={`detail-page-container ${themeContext.handleChangeColor(
          themeContext.theme,
          "detail-page-dark"
        )}`}
      >
        <div className="detail-page">
          <Link to="/" className="back-button-container">
            <button
              className={`button back-button ${themeContext.handleChangeColor(
                themeContext.theme,
                "button-dark"
              )}`}
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back</span>
            </button>
          </Link>
          <div className="country__info">
            <div className="country__info-img">
              <img src={thisCountry.flags.svg} alt="Flag" />
            </div>
            <div className="country__info-details">
              <h2 className="detail-left-heading">
                {showName() ? showName() : <></>}
              </h2>
              <div className="country__info-detail">
                <div className="detail-left">
                  <p>
                    <b>Native Name: </b>
                    {showNativeName() ? showNativeName() : <></>}
                  </p>
                  <p>
                    <b>Population: </b>
                    {thisCountry.population}
                  </p>
                  <p>
                    <b>Region: </b>
                    {thisCountry.region}
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    {thisCountry.subregion}
                  </p>
                  <p>
                    <b>Capital: </b>
                    {thisCountry.capital}
                  </p>
                </div>
                <div className="detail-right">
                  <p>
                    <b>Top Level Domain:</b> .be
                  </p>
                  <p>
                    <b>Currencies: </b>
                    {showCurrencies() ? showCurrencies() : <></>}
                  </p>
                  <p>
                    <b>Languages: </b>
                    {showLanguages() ? showLanguages() : <></>}
                  </p>
                </div>
              </div>
              <div className="border-countries">
                <b>Border Countries: </b>
                {typeof thisCountry.borders !== "undefined" ? (
                  thisCountry.borders.map((border, index) => (
                    <span
                      className={`button border-button ${themeContext.handleChangeColor(
                        themeContext.theme,
                        "button-dark"
                      )}`}
                      key={index}
                    >
                      {border}
                    </span>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default DetailPage;
