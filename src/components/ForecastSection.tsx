import styled from "styled-components";
import type { ForecastData } from "../types/forecast";
import ForecastCard from "./ForecastCard";
import WeatherTitle from "./WeatherTitle";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function ForecastSection({
  forecast,
}: {
  forecast: ForecastData[];
}) {
  return (
    <>
      <WeatherTitle>5-Day Forecast</WeatherTitle>
      <Wrapper>
        {forecast.map((item) => (
          <ForecastCard key={item.dt} item={item} />
        ))}
      </Wrapper>
    </>
  );
}
