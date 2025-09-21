import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);

  return (
    <div>
      <h1>Traveling world : {countries.length}</h1>
      <div className="countries">
        {countries.map((country) => (
        <Country key={country.ccn3.ccn3} country={country}></Country>
      ))}
      </div>
    </div>
  );
};

export default Countries;
