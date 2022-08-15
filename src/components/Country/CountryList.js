import React from "react";
import Country from "./Country";

function CountryList({ countries, search, filter }) {
  return (
    <div className="countries-list">
      {countries
        .filter((item) =>
          item.name.common.toLowerCase().includes(search.toLowerCase().trim())
        )
        .filter((item) => item.region.includes(filter))
        .map((country, index) => (
          <Country
            key={index}
            label={country.name.common}
            img={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
    </div>
  );
}

export default CountryList;
