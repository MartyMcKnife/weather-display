import React, { ReactElement } from "react";
import { useState, useEffect } from "react";
import Weather from "./helper/openweatherparser";
import WeatherContainer from "./components/WeatherContainer";
import SearchBar from "./components/SearchBar";
import useStickyState from "./helper/stickState";
import ReactPlayer from "react-player"
import backgrounds from "./backgrounds/backgroundsources"

export default function App(): ReactElement {
  const [weather, setWeather] = useState({ loading: true } as Weather);
  const [city, setCity] = useStickyState("Perth", "city");

  useEffect(() => {
    async function getData() {
      const resp = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=378dd0cfb54f1d1568bc69c2edd37958`
      );

      if (resp.ok) {
        const respJson = await resp.json();

        setWeather({ ...respJson, loading: false });
      } else {
        console.log(
          `API responded with ${resp} (response code: ${resp.status})`
        );
      }
    }
    getData();
    // eslint-disable-next-line
  }, [city]);
  return (
    <div className="app">
      <div className="info">
        {!weather.loading && <WeatherContainer weather={weather} />}
      </div>
      <div className="search">
        <SearchBar setCity={setCity} />
      </div>
      {!weather.loading && <ReactPlayer url={backgrounds[weather.weather![0].main.toLowerCase()][0]} loop muted width="100%" height="100%"/>}
    </div>
  );
}
