import React, { useEffect, useState } from "react";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setsearch] = useState("Bangalore");

  useEffect(() => {
    const API = async () => {
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f15cf7a06e6482a3d1bfb243f3f3514a`;
      const response = await fetch(URL);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    API();
  }, [search]);

  return (
    <div className="container mx-auto">
      <h1 className="heading"> Weather App</h1>
      <div className="max-w-sm rounded overflow-hidden shadow-lg card">
        <div>
          <input
            className="inputdata"
            type="search"
            value={search}
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errormsg">No Data Found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
              
                <i className="fa-thin fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">
                {city.temp}°Cel
                
                {/* Humidity :{city.humidity} */}
              </h1>
              <h3 className="temp_minmax">
                Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
