import React from "react";
import CountryList from "./components/CountryList";
import Trend from "./components/Trend";

function App() {
  let countries = [
    "Australia",
    "Canada",
    "Egypt",
    "Malaysia",
    "United Kingdom",
    "United States",
  ];
  return (
    <div className="App">
      <CountryList countries={countries} />
    </div>
  );
}

export default App;
