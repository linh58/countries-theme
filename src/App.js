import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DetailPage } from "./pages/DetailPage";
import Home from "./pages/Home";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  const countriesUrl = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    try {
      const response = await axios.get(countriesUrl);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<Home countries={countries} />}
          ></Route>
          <Route
            path="/detail-page/:countryName"
            element={<DetailPage countries={countries} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
