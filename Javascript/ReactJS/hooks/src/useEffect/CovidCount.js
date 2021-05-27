import React, { useState, useEffect } from "react";

function CovidCount() {
  const [country, setCountry] = useState("");
  const [covidcount, setCovidCount] = useState({});
  const handleInputChange = (e) => {
    setCountry(e.target.value);
  };
  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/${country}`)
      .then((response) => {
        let result = response.json();
        return result;
      })
      .then((output) => {
        setCovidCount(output);
        console.log(covidcount);
      });
  }, [country]);
  return (
    <div>
      <label htmlFor="">Enter a country</label>
      <br />
      <input type="text" value={country} onChange={handleInputChange} />
      <p>{country}</p>
        {covidcount.confirmed === undefined ? (
            <p>Loading....</p>
        ):(
            <p>{covidcount.confirmed.value}</p>
        )}
    </div>
  );
}

export default CovidCount;
