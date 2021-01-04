export default interface Weather {
  loading: boolean;
  coord?: Coord;
  weather?: WeatherElement[];
  base?: string;
  main?: Main;
  visibility?: number;
  wind?: Wind;
  clouds?: Clouds;
  dt?: number;
  sys?: Sys;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherElement {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
