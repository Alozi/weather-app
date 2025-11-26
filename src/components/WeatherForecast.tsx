import type { WeatherData } from "../types/weather";
import WeatherCard from "./WeatherCard";
import WeatherTitle from "./WeatherTitle";

export default function WeatherForecast({ weather }: { weather: WeatherData }) {
  return (
    <>
      <WeatherTitle>Current Weather</WeatherTitle>
      <WeatherCard weather={weather} />
    </>
  );
}
