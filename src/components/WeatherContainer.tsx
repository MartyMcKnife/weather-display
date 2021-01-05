import React, { ReactElement } from "react";
import Weather from "../helper/openweatherparser";
import codes from "../helper/countrycodes";
import TemperatureButtons from "./TemperatureButtons";
import useStickyState from "../helper/stickState";
import backgrounds from "../backgrounds/backgroundsources";

const getTemp = (temp: number, celsius: boolean) => {
  temp -= 273.15;
  if (!celsius) {
    temp *= 9 / 5;
    temp += 32;
  }
  temp = Math.round(temp / 0.5) * 0.5;

  return temp;
};

interface Props {
  weather: Weather;
}

export default function WeatherContainer({ weather }: Props): ReactElement {
  const [celsius, setCelsius] = useStickyState(true, "temperature");
  console.log(weather.weather![0].main.toLowerCase());
  console.log(backgrounds[weather.weather![0].main.toLowerCase()][0]);
  const weatherCity = weather.name;
  const country = codes[weather.sys?.country!];
  const descp = weather.weather![0].description;
  const temp = getTemp(weather.main?.temp!, celsius);
  const feelsLike = getTemp(weather.main?.feels_like!, celsius);
  console.log(weather.main);
  return (
    <div>
      <main className="font-roboto mt-36 ml-12 leading-loose sm:mt-48 sm:ml-36">
        <h3 className="text-5xl text-gray-400 blend-screen leading-loose">
          {weatherCity}, {country}
        </h3>
        <h4 className="text-2xl text-gray-300 blend-screen leading-loose capitalize">
          {descp}
        </h4>
        <h1 className="text-gray-50 text-9xl blend-screen">{temp}</h1>
        <div className=" inline-block">
          <h2 className="text-gray-200 text-4xl sm:text-6xl blend-screen leading-loose">
            Feels like {feelsLike}
          </h2>
          <TemperatureButtons setCelsius={setCelsius} />
        </div>
      </main>
    </div>
  );
}
