import React, { useState, useEffect } from "react";
import Trend from "../components/Trend";

function CountryList(props) {
  const countries = props.countries;
  const [ctr, setCountry] = useState("");
  // variables - cases
  const [deaths, setDeaths] = useState("");
  const [cases, setCases] = useState("");
  const [totalCases, setTotalCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [activeCases, setActive] = useState("");
  useEffect(() => {
    async function getData() {
      const resp = await fetch(
        `https://disease.sh/v3/covid-19/countries/${ctr}?yesterday=true&twoDaysAgo=true&strict=true`
      );
      const data = await resp.json();
      const { todayCases, todayDeaths, active, cases, recovered } = data;
      setDeaths(todayDeaths);
      setCases(todayCases);
      setActive(active);
      setTotalCases(cases);
      setRecoveredCases(recovered);
    }
    getData();
  }, [ctr]);
  return (
    <article>
      <section id="dropdown">
        <h1>COVID-19 STATS</h1>
        <select onChange={(ev) => setCountry(ev.target.value)}>
          <option disabled selected hidden>
            Select Country
          </option>
          {countries.map((country, index) => (
            <option key={index}>{country}</option>
          ))}
        </select>
      </section>
      <section id="data">
        <div id="data-new-cases">
          <h3>New Cases</h3>
          <p>{cases}</p>
        </div>
        <div id="data-deaths">
          <h3>New Deaths</h3>
          <p>{deaths}</p>
        </div>
        <div id="data-active">
          <h3>Active Cases</h3>
          <p>{activeCases}</p>
        </div>
        <div id="data-total-cases">
          <h3>Total Cases</h3>
          <p>{totalCases}</p>
        </div>
        <div id="data-recovered">
          <h3>Recovered</h3>
          <p>{recoveredCases}</p>
        </div>
      </section>
      <section>
        <Trend country={ctr} />
      </section>
    </article>
  );
}

export default CountryList;
