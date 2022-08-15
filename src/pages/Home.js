import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import "../App.css";
import { CountryList } from "../components/Country";
import { Search, Select } from "../components/Filter";
import { Header } from "../components/Header";

function Home({ countries }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const themeContext = useContext(ThemeContext);

  return (
    <div className="app">
      <div
        className={`countries-container ${themeContext.handleChangeColor(
          themeContext.theme,
          "dark"
        )}`}
      >
        <Header />
        <div className="filter-country">
          <Search search={search} setSearch={setSearch} />
          <Select handleChangeSelect={setFilter} />
        </div>
        <CountryList countries={countries} search={search} filter={filter} />
      </div>
    </div>
  );
}

export default Home;
