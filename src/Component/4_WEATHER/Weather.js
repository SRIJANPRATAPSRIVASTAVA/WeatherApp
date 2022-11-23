import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "./Card";

const Weather = () => {
  const [searchValue, setsearchValue] = useState("lucknow");
  const [info, setinfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4e1110e3094dc32990f92e2dadca5aac  `;

      const res = await fetch(url);
      const data = await res.json();

      const { humidity, pressure, temp } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { sunset, country } = data.sys;
      const { name } = data;
      const {speed } = data.wind;

      const myNewWeather = {
        humidity,
        pressure,
        temp,
        weatherMood,
        sunset,
        country,
        name,
        speed,
      };

      setinfo(myNewWeather);
      // console.log(
      //   humidity,
      //   pressure,
      //   temp,
      //   sunset,
      //   country,
      //   name,
      //   weatherMood,
      //   wind.speed
      // );

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    setsearchValue("");
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setsearchValue(e.target.value)}
          />
          <button className="searchButton" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <Card tempinfo = {info}/>
    </>
  );
};

export default Weather;
