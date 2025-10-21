import styled from "styled-components";
import type { WeatherData } from "../types/weather";
import WeatherCard from "./WeatherCard";

const TitleSecond = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

export default function WeatherForecast({ weather }: { weather: WeatherData }) {
  return (
    <>
      <TitleSecond>Current Weather</TitleSecond>
      <WeatherCard weather={weather} />
    </>
  );
}
