import React, { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  //   console.log(country.area.area);

  const handleVisited = () => {
    // basic system
    // if(visited){
    //     setVisited(false)
    // }else{
    //     setVisited(true)
    // }
    // 2nd system
    // setVisited(visited ? false : true);
    // 3rd system
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited &&'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3> Name:{country.name.common}</h3>
      <h4>Capital: {country.capital.capital}</h4>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}
        {country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
